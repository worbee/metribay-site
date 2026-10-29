# Metribay marketing site

Read workspace AGENTS.md and PROGRESS.md first. This independent public repository contains the English/German Astro website. Since 2026-10-25 it is live on Cloudflare Pages (project `metribay`) at metribay.com, with www redirected to the bare domain.

## Boundaries
- Deploy only `dist/`, never the repository or raw `public/` directory. Keep credentials, real project data and private SaaS code out of source/output.
- Keep the site small, static and independent of the Laravel app. Use Astro templates and CSS; no client framework is needed.
- Use the logo masters in brand/ as they are (soft tray mark, approved 2026-10-26); never redraw or recolour them. Change a master, then rerun scripts/brand-export.sh. Use the app's cream/navy/berry/lime palette for the UI.
- Keep both languages complete in `src/i18n/copy.ts`, including metadata and preview labels. English is `/`; German is `/de/`.
- User documentation lives at `/docs/` and `/de/docs/` (Starlight, added 2026-10-29). Pages are Markdown/MDX in `src/content/docs/docs/` and `src/content/docs/de/docs/`, with the sidebar in `astro.config.mjs`. Every English page needs a German page with the same path; German uses “du” and keeps the app's English button labels in bold. Docs describe actual app behavior from the user's point of view; check Core/Cloud before changing a claim. Desktop is not documented while it is a private prototype.
- Only the docs run JavaScript (Starlight search, menu, table of contents). Marketing pages stay script-free, so Astro prefetch stays off. The build writes the Content-Security-Policy into `dist/_headers` with hashes of every inline script and style (`scripts/content-security-policy.mjs`); never add `'unsafe-inline'`. Check it with `npm run preview:headers`.
- Claims must match implemented app behavior. The hosted app is live. Rob approved (2026-10-26) offering the free Apache-2.0 self-hosted edition on the pricing section while the core repository is still private; its button emails Rob until `coreRepository` in `src/lib/company.ts` is set. Do not add a public core link until it is actually public.
- Pricing, plan limits and company details live in `src/lib/company.ts`; legal text lives in `src/i18n/legal.ts`. Since 2026-10-26 prices are USD 29/month and USD 190/year, tax-inclusive everywhere (Paddle tax_mode internal), so the site says taxes are included and nobody pays more than the shown price. Bump `legalUpdated` whenever legal text changes.
- Dashboard illustrations must use fictional/sanitized data and be identified as samples. Do not publish screenshots containing real project data.
- Maintain keyboard access, contrast, reduced motion, responsive layout and useful content without JavaScript.
- Never stage, commit, push, publish or add coauthor attribution without Rob explicitly requesting the corresponding action.

## Checks and preview

Use Node24 and npm. Run `npm ci`, `npm run check`, `npm run build`, `npm test`. `npm run dev` serves source; `npm run preview` serves the build; `npm run preview:headers` serves the build with its `_headers` (CSP) applied on port 4322. Check English/German at desktop/mobile sizes and the bilingual 404. Test both default custom-domain and repository-subdirectory builds when changing URLs/configuration. Generated `dist/` and `.astro/` are ignored.

## Deployment

Read docs/deployment.md. `npm run deploy` (scripts/cloudflare-pages.mjs) checks, builds and uploads `dist/` to production; deploy only when Rob asks for publication, and use `--branch=<name>` for previews. `npm run cf:setup` manages the Pages project, apex DNS and www redirect idempotently. Credentials stay in the ignored `.env`/private files. The legacy GitHub Pages deploy stays gated off by `METRIBAY_PAGES_ENABLED`; never enable it. App DNS and repository visibility are not part of site development.

## Progress

Record meaningful changes and exact verification in docs/progress.md and workspace PROGRESS.md.
