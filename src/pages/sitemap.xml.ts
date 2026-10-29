import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { home, legal, legalPages, local } from '../lib/urls';

export const GET: APIRoute = async ({ site }) => {
  // Docs pages share their slug across languages; German lives under de/.
  const docs = (await getCollection('docs')).map(entry => entry.id).filter(id => !id.startsWith('de/'))
    .map(id => ({ en: local(`${id}/`), de: local(`de/${id}/`) }));
  const pairs = [{ en: home('en'), de: home('de') }, ...legalPages.map(page => ({ en: legal('en', page), de: legal('de', page) })), ...docs];
  const entries = pairs.map(pair => {
    const en = new URL(pair.en, site).href;
    const de = new URL(pair.de, site).href;
    const alternates = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="de" href="${de}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
    return `<url><loc>${en}</loc>${alternates}</url><url><loc>${de}</loc>${alternates}</url>`;
  }).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
