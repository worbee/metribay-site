import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { inlineSources, policy } from './content-security-policy.mjs';

const root = path.resolve('dist');
const site = process.env.SITE_URL || 'https://metribay.com';
const base = (process.env.SITE_BASE || '/').replace(/\/$/, '');
const urls = [base + '/', base + '/de/'];
const legalPages = [['terms', 'agb'], ['privacy', 'datenschutz'], ['refunds', 'erstattung'], ['imprint', 'impressum']];
const legalFiles = legalPages.flatMap(([en, de]) => [[`${en}/index.html`, 'en', `${base}/${en}/`, `${base}/de/${de}/`], [`de/${de}/index.html`, 'de', `${base}/de/${de}/`, `${base}/${en}/`]]);
let checks = 0;
const check = (condition, message) => { assert.ok(condition, message); checks++; };
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");

const pages = ['index.html', 'de/index.html', '404.html', ...legalFiles.map(([file]) => file)];
for (const [i, file] of pages.entries()) {
  const html = await readFile(path.join(root, file), 'utf8');
  const legal = legalFiles.find(([legalFile]) => legalFile === file);
  const locale = legal ? legal[1] : i === 1 ? 'de' : 'en';
  check(html.includes(`lang="${locale}"`), `${file}: document language`);
  check((html.match(/<h1[\s>]/g) || []).length === 1, `${file}: one main heading`);
  check(html.includes('id="main"'), `${file}: skip target`);
  const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)];
  check(scripts.every(([, attributes]) => /type="application\/ld\+json"/.test(attributes)), `${file}: only inert JSON-LD, no executable JavaScript`);
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map(([tag]) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map(([, key, value]) => [key, decode(value)])));
  const meta = key => {
    const matches = metas.filter(m => m.name === key || m.property === key);
    check(matches.length === 1 && Boolean(matches[0]?.content), `${file}: one nonempty ${key} tag`);
    return matches[0].content;
  };
  const title = decode(html.match(/<title>([^<]+)<\/title>/)?.[1] || '');
  const description = meta('description');
  check(meta('og:title') === title && meta('twitter:title') === title, `${file}: sharing titles match page`);
  check(meta('og:description') === description && meta('twitter:description') === description, `${file}: sharing descriptions match page`);
  check(meta('og:image') === meta('twitter:image'), `${file}: consistent sharing image`);
  check(meta('og:image:alt') === meta('twitter:image:alt'), `${file}: consistent sharing image description`);
  check(meta('og:image:type') === 'image/png', `${file}: sharing image format`);
  const imagePath = new URL(meta('og:image')).pathname.slice(base.length).replace(/^\//, '');
  const image = await readFile(path.join(root, imagePath));
  check(image.toString('hex', 0, 8) === '89504e470d0a1a0a', `${file}: sharing image is a PNG`);
  check(Number(meta('og:image:width')) === image.readUInt32BE(16) && Number(meta('og:image:height')) === image.readUInt32BE(20), `${file}: declared sharing dimensions match real image`);
  check(meta('og:locale') === (locale === 'de' ? 'de_DE' : 'en_US'), `${file}: sharing locale`);
  check(meta('og:locale:alternate') === (locale === 'de' ? 'en_US' : 'de_DE'), `${file}: alternate sharing locale`);
  check(meta('twitter:card') === 'summary_large_image', `${file}: wide-image sharing card`);
  meta('viewport');
  meta('theme-color');
  check(meta('application-name') === 'Metribay', `${file}: application name`);
  if (i < 2) {
    check(meta('robots') === 'index, follow, max-image-preview:large', `${file}: indexable page`);
    check(html.includes(`rel="canonical" href="${new URL(urls[i], site)}"`), `${file}: canonical`);
    check(html.includes('hreflang="en"') && html.includes('hreflang="de"') && html.includes('hreflang="x-default"'), `${file}: locale alternates`);
    check(html.includes('https://app.metribay.com/register'), `${file}: working signup destination`);
    check(html.includes(i === 1 ? 'fiktive Daten' : 'sample data'), `${file}: sample data identified`);
    check(html.includes('id="pricing"') && html.includes(i === 1 ? '29 USD' : '$29') && html.includes(i === 1 ? '190 USD' : '$190') && html.includes(i === 1 ? 'inkl. MwSt.' : 'taxes included'), `${file}: tax-inclusive USD pricing`);
    check(['how', 'integrations', 'security', 'about', 'faq'].every(id => html.includes(`id="${id}"`)), `${file}: trust sections present`);
    for (const [en, de] of legalPages) check(html.includes(`href="${base}/${i === 1 ? `de/${de}` : en}/"`), `${file}: footer links ${en}`);
    check(html.includes(`href="${base}/${i === 1 ? 'de/' : ''}docs/"`), `${file}: links to the docs`);
    check(title.includes(i === 1 ? 'Projektkennzahlen' : 'Project metrics dashboard'), `${file}: explicit product category`);
    check(/<div\b[^>]*class="dashboard"[^>]*data-nosnippet/.test(html), `${file}: fictional dashboard excluded from Google snippets`);
    check(html.indexOf('<figcaption') < html.indexOf('class="dashboard"'), `${file}: visible sample label precedes dashboard`);
    check(scripts.length === 1, `${file}: one JSON-LD graph`);
    const schema = JSON.parse(scripts[0][2]);
    check(schema['@context'] === 'https://schema.org', `${file}: schema context`);
    const graph = schema['@graph'];
    const byType = type => graph.find(node => node['@type'] === type);
    check(graph.length === 4 && ['Organization', 'WebSite', 'SoftwareApplication', 'WebPage'].every(byType), `${file}: complete entity graph`);
    const ids = new Set(graph.map(node => node['@id']));
    check(ids.size === graph.length, `${file}: unique entity IDs`);
    for (const node of graph) {
      check(node['@id'].startsWith(new URL(urls[0], site).href), `${file}: base-aware entity ID`);
      for (const reference of ['publisher', 'about', 'isPartOf']) if (node[reference]) check(ids.has(node[reference]['@id']), `${file}: resolved ${reference} reference`);
    }
    check(byType('Organization').name === 'Worbee EOOD', `${file}: real publisher`);
    check(byType('WebPage').url === new URL(urls[i], site).href && byType('WebPage').inLanguage === locale, `${file}: localized page entity`);
    check(byType('WebPage').name === title && byType('WebPage').description === description, `${file}: schema matches visible page metadata`);
    check(byType('WebSite').url === new URL(urls[0], site).href, `${file}: canonical website root`);
    const app = byType('SoftwareApplication');
    check(app.url === 'https://app.metribay.com/' && app.inLanguage === 'en', `${file}: app destination and actual app language`);
    check(app.applicationCategory === 'BusinessApplication', `${file}: app category`);
    check(app.offers?.length === 2 && app.offers.every(offer => offer.priceCurrency === 'USD' && offer.priceSpecification.valueAddedTaxIncluded === true) && app.offers.map(offer => offer.price).join() === '29,190', `${file}: real plan offers, tax included`);
    check(!('review' in app) && !('aggregateRating' in app) && !('codeRepository' in app), `${file}: no invented review/source claims`);
    check(meta('og:url') === new URL(urls[i], site).href, `${file}: localized sharing URL`);
  } else if (legal) {
    const [, , self, other] = legal;
    check(meta('robots') === 'index, follow, max-image-preview:large', `${file}: indexable legal page`);
    check(html.includes(`rel="canonical" href="${new URL(self, site)}"`) && meta('og:url') === new URL(self, site).href, `${file}: own canonical`);
    check(html.includes(`hreflang="${locale === 'en' ? 'de' : 'en'}" href="${new URL(other, site)}"`), `${file}: translated alternate`);
    check(html.includes(`href="${other}"`), `${file}: language switch keeps the page`);
    check(scripts.length === 0, `${file}: no product graph`);
    check(html.includes('Worbee EOOD') && html.includes('BG206543923') && html.includes('datetime="'), `${file}: company and date`);
    if (file.includes('terms') || file.includes('agb')) check(html.includes('Paddle.com is the Merchant of Record for all our orders') || html.includes('Paddle.com ist der Merchant of Record'), `${file}: Merchant of Record disclosure`);
  } else {
    check(meta('robots') === 'noindex, follow', '404: excluded from indexing');
    check(scripts.length === 0 && !html.includes('rel="canonical"'), '404: no product graph or home canonical');
    check(meta('og:url') === new URL(base + '/404.html', site).href, '404: its own sharing URL');
  }

  for (const [, raw] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (/^(https?:|mailto:|data:)/.test(raw)) continue;
    const [urlPath, fragment] = raw.split('#');
    if (!urlPath) {
      if (fragment) check(html.includes(`id="${fragment}"`), `${file}: anchor ${raw}`);
      continue;
    }
    check(urlPath.startsWith(base + '/'), `${file}: base-aware URL ${raw}`);
    const relative = urlPath.slice(base.length).replace(/^\//, '');
    const target = path.resolve(root, relative.endsWith('/') || !relative ? relative + 'index.html' : relative);
    check(target.startsWith(root + path.sep), `Local path stays in dist: ${raw}`);
    check((await stat(target)).isFile(), `${file}: existing local destination ${raw}`);
  }
}
const sitemap = await readFile(path.join(root, 'sitemap.xml'), 'utf8');
for (const url of [...urls, ...legalFiles.map(([, , self]) => self)]) check(sitemap.includes(`<loc>${new URL(url, site)}</loc>`), `Sitemap: ${url}`);
check((await readFile(path.join(root, 'robots.txt'), 'utf8')).includes(new URL(base + '/sitemap.xml', site).href), 'Robots sitemap URL');
check((await stat(path.join(root, '.nojekyll'))).isFile(), 'Pages .nojekyll marker');
if (!new URL(site).hostname.endsWith('.github.io')) check((await readFile(path.join(root, 'CNAME'), 'utf8')).trim() === new URL(site).hostname, 'Custom domain CNAME');
else await assert.rejects(stat(path.join(root, 'CNAME')), { code: 'ENOENT' });
// Docs (Starlight): every page exists in both languages, carries localized metadata, and its
// links, anchors and inline code all resolve under the generated Content-Security-Policy.
const docsFiles = async dir => (await readdir(path.join(root, dir), { recursive: true })).filter(name => name.endsWith('index.html')).map(name => name.replace(/index\.html$/, '')).sort();
const enDocs = await docsFiles('docs');
const deDocs = await docsFiles('de/docs');
check(enDocs.length >= 25 && enDocs.join() === deDocs.join(), 'Docs: every English page has a German page');
const ids = new Map();
const idsOf = async file => {
  if (!ids.has(file)) ids.set(file, new Set([...(await readFile(file, 'utf8')).matchAll(/\sid="([^"]+)"/g)].map(([, id]) => id)));
  return ids.get(file);
};
const csp = (await readFile(path.join(root, '_headers'), 'utf8')).match(/^ {2}Content-Security-Policy: (.*)$/m)?.[1];
check(csp === policy(await inlineSources(root)), 'Headers: policy covers every inline script and style in the build');
check(!csp.includes("'unsafe-inline'") && !csp.includes("'unsafe-eval'") && csp.startsWith("default-src 'none'"), 'Headers: strict policy without blanket inline or eval');
for (const [locale, prefix] of [['en', ''], ['de', 'de/']]) {
  for (const page of enDocs) {
    const file = path.join(root, prefix, 'docs', page, 'index.html');
    const html = await readFile(file, 'utf8');
    const label = `${prefix}docs/${page}`;
    const self = `${base}/${prefix}docs/${page}`;
    check(html.includes(`<html lang="${locale}"`), `${label}: document language`);
    check((html.match(/<h1[\s>]/g) || []).length === 1, `${label}: one main heading`);
    check(html.includes(`rel="canonical" href="${new URL(self, site)}"`), `${label}: canonical`);
    for (const [lang, other] of [['en', ''], ['de', 'de/']]) check(html.includes(`hreflang="${lang}" href="${new URL(`${base}/${other}docs/${page}`, site)}"`), `${label}: ${lang} alternate`);
    check(html.includes(`assets/metribay-share-${locale}.png`) && html.includes('og:image:alt'), `${label}: localized share card`);
    check(!html.includes('starlight-theme-select') && !html.includes('fallback-content'), `${label}: light theme and real translation`);
    check(sitemap.includes(`<loc>${new URL(self, site)}</loc>`), `Sitemap: ${label}`);
    for (const [, raw] of html.matchAll(/href="([^"]+)"/g)) {
      if (/^(https?:|mailto:|data:)/.test(raw)) continue;
      const [urlPath, fragment] = decode(raw).split('#');
      const target = urlPath ? path.resolve(path.dirname(file), urlPath.startsWith('/') ? path.join(root, urlPath.slice(base.length)) : urlPath) : file;
      const targetFile = urlPath && !path.extname(target) ? path.join(target, 'index.html') : target;
      check(targetFile.startsWith(root + path.sep) && (await stat(targetFile)).isFile(), `${label}: existing destination ${raw}`);
      if (fragment && targetFile.endsWith('.html')) check((await idsOf(targetFile)).has(decodeURIComponent(fragment)), `${label}: anchor ${raw}`);
    }
  }
}
await assert.rejects(stat(path.join(root, 'sitemap-index.xml')), { code: 'ENOENT' }, 'Single sitemap');
console.log(`Passed ${checks} static-site checks (English, German, legal pages, docs, 404, metadata, local links, anchors, CSP, assets, Pages paths).`);
