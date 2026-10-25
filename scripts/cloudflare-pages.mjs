// Cloudflare Pages setup and deployment for a static site, without extra dependencies.
//
//   node scripts/cloudflare-pages.mjs setup    idempotent project, apex domain, DNS and www redirect
//   node scripts/cloudflare-pages.mjs deploy   check, build, test and upload dist/ to production
//   node scripts/cloudflare-pages.mjs status   show project, domains and latest deployment
//
// Options: --env-file=PATH (credentials file), --branch=NAME (preview deploy), --skip-checks.
// Credentials: CLOUDFLARE_API_TOKEN or CF_API_TOKEN, CLOUDFLARE_ACCOUNT_ID or CF_ACCOUNT_ID.
// Settings: CF_PAGES_PROJECT, CF_PAGES_DOMAIN, CF_PAGES_REDIRECT_HOSTS (comma-separated, "" for none),
// CF_PAGES_OUTPUT (default dist), CF_PAGES_PRODUCTION_BRANCH (default main).
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const WRANGLER = 'wrangler@4.151.3';
const API = 'https://api.cloudflare.com/client/v4';

const [command = 'help', ...rest] = process.argv.slice(2);
const options = Object.fromEntries(rest.map(arg => {
  const [key, ...value] = arg.replace(/^--/, '').split('=');
  return [key, value.length ? value.join('=') : true];
}));
const envFile = options['env-file'] || process.env.CF_ENV_FILE;
if (envFile) process.loadEnvFile(envFile);

const token = process.env.CLOUDFLARE_API_TOKEN || process.env.CF_API_TOKEN;
const account = process.env.CLOUDFLARE_ACCOUNT_ID || process.env.CF_ACCOUNT_ID;
const project = process.env.CF_PAGES_PROJECT || 'metribay';
const domain = process.env.CF_PAGES_DOMAIN || 'metribay.com';
const redirectHosts = (process.env.CF_PAGES_REDIRECT_HOSTS ?? `www.${domain}`).split(',').map(h => h.trim()).filter(Boolean);
const output = process.env.CF_PAGES_OUTPUT || 'dist';
const productionBranch = process.env.CF_PAGES_PRODUCTION_BRANCH || 'main';
const ruleRef = `pages_redirect_${project}`.replace(/[^a-z0-9_]/gi, '_');

const log = message => console.log(`• ${message}`);
const fail = message => { console.error(`✗ ${message}`); process.exit(1); };

async function cf(method, route, body) {
  const response = await fetch(API + route, {
    method,
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: body === undefined ? undefined : JSON.stringify(body),
  });
  const json = await response.json().catch(() => ({}));
  if (!response.ok || json.success === false) {
    const error = new Error(`${method} ${route}: ${response.status} ${(json.errors || []).map(e => `${e.code} ${e.message}`).join('; ')}`);
    error.status = response.status;
    throw error;
  }
  return json.result;
}
const maybe = promise => promise.catch(error => { if (error.status === 404) return null; throw error; });

async function findZone(hostname) {
  const labels = hostname.split('.');
  for (let i = 0; i < labels.length - 1; i++) {
    const [zone] = await cf('GET', `/zones?name=${labels.slice(i).join('.')}&account.id=${account}`);
    if (zone) return zone;
  }
  fail(`No Cloudflare zone in this account covers ${hostname}`);
}

// Creates the record, or accepts an identical one; never overwrites a different record.
async function ensureRecord(zone, record) {
  const existing = (await cf('GET', `/zones/${zone.id}/dns_records?name=${record.name}`))
    .filter(r => ['A', 'AAAA', 'CNAME'].includes(r.type));
  const same = existing.find(r => r.type === record.type && r.content === record.content);
  if (same) {
    if (!same.proxied) await cf('PATCH', `/zones/${zone.id}/dns_records/${same.id}`, { proxied: true });
    return log(`DNS ${record.type} ${record.name} → ${record.content} present`);
  }
  if (existing.length) fail(`${record.name} already has ${existing.map(r => `${r.type} ${r.content}`).join(', ')}; remove it or adjust settings first`);
  await cf('POST', `/zones/${zone.id}/dns_records`, { ...record, proxied: true, ttl: 1, comment: `Cloudflare Pages ${project}` });
  log(`DNS ${record.type} ${record.name} → ${record.content} created`);
}

async function ensureProject() {
  let pages = await maybe(cf('GET', `/accounts/${account}/pages/projects/${project}`));
  if (!pages) {
    pages = await cf('POST', `/accounts/${account}/pages/projects`, { name: project, production_branch: productionBranch });
    log(`Pages project ${project} created`);
  } else log(`Pages project ${project} present`);
  return pages;
}

async function ensureRedirect(zone) {
  const hosts = redirectHosts.filter(host => zone.name === host || host.endsWith(`.${zone.name}`));
  if (hosts.length !== redirectHosts.length) fail(`Redirect hosts must be in zone ${zone.name}`);
  // Redirect-only hostnames need a proxied record; 100:: is Cloudflare's documented originless address.
  for (const host of hosts) await ensureRecord(zone, { type: 'AAAA', name: host, content: '100::' });
  const rule = {
    ref: ruleRef,
    description: `Redirect ${hosts.join(', ')} to ${domain} (Pages ${project})`,
    expression: `(http.host in {${hosts.map(h => JSON.stringify(h)).join(' ')}})`,
    action: 'redirect',
    action_parameters: { from_value: {
      status_code: 301,
      target_url: { expression: `concat("https://${domain}", http.request.uri.path)` },
      preserve_query_string: true,
    } },
    enabled: true,
  };
  const phase = `/zones/${zone.id}/rulesets/phases/http_request_dynamic_redirect/entrypoint`;
  const ruleset = await maybe(cf('GET', phase));
  const current = ruleset?.rules?.find(r => r.ref === ruleRef);
  if (!ruleset) await cf('PUT', phase, { rules: [rule] });
  else if (!current) await cf('POST', `/zones/${zone.id}/rulesets/${ruleset.id}/rules`, rule);
  else await cf('PATCH', `/zones/${zone.id}/rulesets/${ruleset.id}/rules/${current.id}`, rule);
  log(`Redirect rule ${ruleRef}: ${hosts.join(', ')} → https://${domain}/… (301, query kept)`);
}

async function setup() {
  const pages = await ensureProject();
  const zone = await findZone(domain);
  const domains = await cf('GET', `/accounts/${account}/pages/projects/${project}/domains`);
  if (!domains.some(d => d.name === domain)) {
    await cf('POST', `/accounts/${account}/pages/projects/${project}/domains`, { name: domain });
    log(`Custom domain ${domain} attached`);
  } else log(`Custom domain ${domain} present`);
  await ensureRecord(zone, { type: 'CNAME', name: domain, content: pages.subdomain });
  if (redirectHosts.length) await ensureRedirect(zone);
  await status();
}

async function status() {
  const pages = await cf('GET', `/accounts/${account}/pages/projects/${project}`);
  console.log(`Project ${pages.name}: https://${pages.subdomain} (production branch ${pages.production_branch})`);
  for (const d of await cf('GET', `/accounts/${account}/pages/projects/${project}/domains`)) {
    console.log(`Domain ${d.name}: ${d.status}${d.verification_data?.status ? `, verification ${d.verification_data.status}` : ''}`);
  }
  const latest = pages.latest_deployment;
  if (latest) console.log(`Latest deployment ${latest.short_id} (${latest.environment}, ${latest.latest_stage?.status}): ${latest.url}`);
}

function run(cmd, args, env = {}) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } });
  if (result.status !== 0) fail(`${cmd} ${args.join(' ')} failed`);
}

function git(...args) {
  try { return execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; }
}

async function deploy() {
  const branch = options.branch || productionBranch;
  const buildEnv = { SITE_URL: `https://${domain}`, SITE_BASE: '/' };
  if (!options['skip-checks']) {
    for (const script of ['check', 'build', 'test']) run('npm', ['run', script], buildEnv);
  } else if (!existsSync(path.join(output, 'index.html'))) fail(`${output}/index.html missing; build first`);
  await ensureProject();
  const args = ['--yes', WRANGLER, 'pages', 'deploy', output, `--project-name=${project}`, `--branch=${branch}`];
  const hash = git('rev-parse', 'HEAD');
  if (hash) args.push(`--commit-hash=${hash}`, `--commit-message=${git('log', '-1', '--format=%s') || 'deploy'}`, `--commit-dirty=${Boolean(git('status', '--porcelain'))}`);
  run('npx', args, { CLOUDFLARE_API_TOKEN: token, CLOUDFLARE_ACCOUNT_ID: account, WRANGLER_SEND_METRICS: 'false' });
  log(branch === productionBranch ? `Production deployed: https://${domain}/` : `Preview branch ${branch} deployed`);
}

const commands = { setup, deploy, status };
if (!commands[command]) {
  console.log('Usage: node scripts/cloudflare-pages.mjs <setup|deploy|status> [--env-file=PATH] [--branch=NAME] [--skip-checks]');
  process.exit(command === 'help' ? 0 : 1);
}
if (!token || !account) fail('Set CLOUDFLARE_API_TOKEN/CF_API_TOKEN and CLOUDFLARE_ACCOUNT_ID/CF_ACCOUNT_ID, or pass --env-file=PATH');
await commands[command]().catch(error => fail(error.message));
