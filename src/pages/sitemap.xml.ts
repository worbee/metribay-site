import type { APIRoute } from 'astro';
import { home } from '../lib/urls';
export const GET: APIRoute = ({ site }) => {
  const en = new URL(home('en'), site).href;
  const de = new URL(home('de'), site).href;
  const alternates = `<xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="de" href="${de}"/><xhtml:link rel="alternate" hreflang="x-default" href="${en}"/>`;
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"><url><loc>${en}</loc>${alternates}</url><url><loc>${de}</loc>${alternates}</url></urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
