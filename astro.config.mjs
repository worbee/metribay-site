import { defineConfig } from 'astro/config';
import { writeFile } from 'node:fs/promises';

const site = process.env.SITE_URL || 'https://metribay.com';
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  i18n: { defaultLocale: 'en', locales: ['en', 'de'], routing: { prefixDefaultLocale: false } },
  integrations: [{
    name: 'pages-domain',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        await writeFile(new URL('.nojekyll', dir), '');
        const hostname = new URL(site).hostname;
        if (!hostname.endsWith('.github.io')) await writeFile(new URL('CNAME', dir), `${hostname}\n`);
      },
    },
  }],
});
