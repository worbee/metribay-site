import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { fileURLToPath } from 'node:url';
import { writeFile } from 'node:fs/promises';
import { writeContentSecurityPolicy } from './scripts/content-security-policy.mjs';

const site = process.env.SITE_URL || 'https://metribay.com';
const base = process.env.SITE_BASE || '/';

// Sidebar labels per locale; slugs are shared, Starlight adds the /de/ prefix.
const group = (en, de, items) => ({ label: en, translations: { de }, items });
const page = (slug, en, de) => ({ slug: slug ? `docs/${slug}` : 'docs', label: en, translations: { de } });

export default defineConfig({
  site,
  base,
  output: 'static',
  trailingSlash: 'always',
  // Starlight turns on link prefetching, which adds a script to every page; the marketing pages stay script-free.
  prefetch: false,
  i18n: { defaultLocale: 'en', locales: ['en', 'de'], routing: { prefixDefaultLocale: false } },
  integrations: [
    // Starlight adds @astrojs/sitemap unless an integration with that name exists. src/pages/sitemap.xml.ts
    // already lists every page with its translation, so this placeholder keeps a single sitemap.
    { name: '@astrojs/sitemap', hooks: {} },
    starlight({
      title: { en: 'Metribay Docs', de: 'Metribay-Doku' },
      description: 'How to use Metribay: connect your tools, read your project metrics and work with your team.',
      logo: { src: './src/assets/metribay-lockup.svg', alt: 'Metribay', replacesTitle: true },
      favicon: '/assets/metribay-favicon.svg',
      disable404Route: true,
      customCss: ['./src/styles/docs.css'],
      expressiveCode: { themes: ['github-light'] },
      head: [
        { tag: 'link', attrs: { rel: 'sitemap', href: `${base.replace(/\/$/, '')}/sitemap.xml` } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#fafaf7' } },
      ],
      components: {
        Head: './src/components/docs/Head.astro',
        ThemeProvider: './src/components/docs/ThemeProvider.astro',
        ThemeSelect: './src/components/docs/ThemeSelect.astro',
        SocialIcons: './src/components/docs/SocialIcons.astro',
      },
      sidebar: [
        group('Start here', 'Erste Schritte', [
          page('', 'Welcome', 'Willkommen'),
          page('getting-started', 'Quick start', 'Schnellstart'),
          page('concepts', 'How Metribay is organised', 'So ist Metribay aufgebaut'),
        ]),
        group('Everyday use', 'Im Alltag', [
          page('overview', 'Project overview', 'Projektübersicht'),
          page('project-page', 'Project pages and charts', 'Projektseiten und Diagramme'),
          page('events', 'Events', 'Ereignisse'),
          page('reading-the-numbers', 'Reading the numbers', 'Die Zahlen richtig lesen'),
          page('syncing', 'Updates and syncing', 'Aktualisierung und Sync'),
        ]),
        group('Projects and data', 'Projekte und Daten', [
          page('projects', 'Manage projects', 'Projekte verwalten'),
          page('data-sources', 'Add and manage data sources', 'Datenquellen hinzufügen und verwalten'),
          page('connected-accounts', 'Connected accounts', 'Verbundene Konten'),
          page('import-export', 'Import and export', 'Import und Export'),
        ]),
        group('Integrations', 'Integrationen', [
          page('integrations', 'All integrations', 'Alle Integrationen'),
          page('integrations/google-analytics', 'Google Analytics 4', 'Google Analytics 4'),
          page('integrations/search-console', 'Google Search Console', 'Google Search Console'),
          page('integrations/bing', 'Bing Webmaster Tools', 'Bing Webmaster Tools'),
          page('integrations/umami', 'Umami', 'Umami'),
          page('integrations/github', 'GitHub', 'GitHub'),
          page('integrations/wordpress', 'WordPress.org', 'WordPress.org'),
          page('integrations/uptimerobot', 'UptimeRobot', 'UptimeRobot'),
        ]),
        group('Teams and workspaces', 'Teams und Arbeitsbereiche', [
          page('workspaces', 'Workspaces', 'Arbeitsbereiche'),
          page('team', 'Team members and roles', 'Teammitglieder und Rollen'),
        ]),
        group('Profile and billing', 'Profil und Abrechnung', [
          page('profile', 'Profile and security', 'Profil und Sicherheit'),
          page('billing', 'Plans and billing', 'Pläne und Abrechnung'),
        ]),
        group('Self-hosting', 'Selbst hosten', [
          page('self-hosting', 'Run Metribay yourself', 'Metribay selbst betreiben'),
        ]),
        group('Help', 'Hilfe', [
          page('troubleshooting', 'Troubleshooting', 'Fehlerbehebung'),
          page('security', 'Security and privacy', 'Sicherheit und Datenschutz'),
        ]),
      ],
    }),
    {
      name: 'pages-domain',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          await writeFile(new URL('.nojekyll', dir), '');
          const hostname = new URL(site).hostname;
          if (!hostname.endsWith('.github.io')) await writeFile(new URL('CNAME', dir), `${hostname}\n`);
          await writeContentSecurityPolicy(fileURLToPath(dir));
        },
      },
    },
  ],
});
