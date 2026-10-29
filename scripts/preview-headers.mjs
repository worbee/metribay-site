// Serves dist/ with the headers from dist/_headers, so the Content-Security-Policy can be checked
// locally before deploying. `astro preview` ignores _headers. Only applies `/*` rules; good enough
// for a local check, not a full Cloudflare emulation.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist', import.meta.url)).replace(/\/$/, '');
const port = Number(process.env.PORT || 4322);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.wasm': 'application/wasm' };

const headers = {};
let global = false;
for (const line of (await readFile(path.join(root, '_headers'), 'utf8')).split('\n')) {
  if (!line.trim() || line.startsWith('#')) continue;
  if (!line.startsWith(' ')) { global = line.trim() === '/*'; continue; }
  const [name, ...value] = line.trim().split(':');
  if (global) headers[name] = value.join(':').trim();
}

createServer(async (request, response) => {
  const url = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  let file = path.join(root, url.endsWith('/') ? `${url}index.html` : url);
  if (!file.startsWith(root)) return response.writeHead(403).end();
  try {
    if ((await stat(file)).isDirectory()) file = path.join(file, 'index.html');
  } catch {
    file = path.join(root, '404.html');
    response.statusCode = 404;
  }
  const body = await readFile(file);
  response.writeHead(response.statusCode, { ...headers, 'Content-Type': types[path.extname(file)] || 'application/octet-stream' }).end(body);
}).listen(port, '127.0.0.1', () => console.log(`Serving dist/ with _headers at http://127.0.0.1:${port}/`));
