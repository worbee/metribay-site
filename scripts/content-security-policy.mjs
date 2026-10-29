import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

// The marketing pages run no JavaScript, but the Starlight docs need their own scripts, a few
// inline scripts and style attributes, and WebAssembly plus fetch for Pagefind search. Rather than
// allow inline code in general, the build hashes every inline script, style element and style
// attribute it actually emitted and writes one Content-Security-Policy into dist/_headers.

const hash = text => `'sha256-${createHash('sha256').update(text).digest('base64')}'`;
const decode = value => value.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');

async function htmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? htmlFiles(full) : entry.name.endsWith('.html') ? [full] : [];
  }));
  return nested.flat();
}

/** Collects the inline code in built HTML that a strict policy must allow. */
export async function inlineSources(root) {
  const scripts = new Set();
  const styles = new Set();
  for (const file of await htmlFiles(root)) {
    const html = await readFile(file, 'utf8');
    for (const [, attributes, body] of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
      // JSON-LD is data, never executed, so CSP doesn't apply to it.
      if (!/\bsrc=/.test(attributes) && !/type="application\/ld\+json"/.test(attributes)) scripts.add(hash(body));
    }
    for (const [, body] of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)) styles.add(hash(body));
    for (const [, value] of html.matchAll(/\sstyle="([^"]*)"/g)) styles.add(hash(decode(value)));
  }
  return { scripts: [...scripts].sort(), styles: [...styles].sort() };
}

export function policy({ scripts, styles }) {
  return [
    "default-src 'none'",
    ["script-src 'self' 'wasm-unsafe-eval'", ...scripts].join(' '),
    ["style-src 'self'", ...(styles.length ? ["'unsafe-hashes'", ...styles] : [])].join(' '),
    "img-src 'self' data:",
    "connect-src 'self'",
    "base-uri 'none'",
    "form-action 'none'",
    "frame-ancestors 'none'",
  ].join('; ');
}

export async function writeContentSecurityPolicy(root) {
  const file = path.join(root, '_headers');
  const headers = await readFile(file, 'utf8');
  const line = /^ {2}Content-Security-Policy: .*$/m;
  if (!line.test(headers)) throw new Error('dist/_headers has no Content-Security-Policy line to replace.');
  await writeFile(file, headers.replace(line, `  Content-Security-Policy: ${policy(await inlineSources(root))}`));
}
