# Static hosting

Production is **Cloudflare Pages**, project `metribay` (`https://metribay.pages.dev`), serving `https://metribay.com/`. `www.metribay.com` redirects with 301 to the bare domain, keeping path and query. Rob requested this setup on 2026-10-25, superseding the earlier GitHub Pages preparation. The hosted Laravel app stays separate at app.metribay.com and is not touched by any of this.

## Build

Use Node24 and the committed npm lockfile:

```sh
npm ci
npm run check
npm run build
npm test
```

Publish **dist/** only. `public/` is the source asset directory, not the deployable site. No server adapter or runtime is required.

## Deploying

`scripts/cloudflare-pages.mjs` uses only Node and the Cloudflare API; Wrangler (pinned in the script) is fetched through `npx` just for the upload. Credentials come from the environment or an env file:

- `CLOUDFLARE_API_TOKEN` (or `CF_API_TOKEN`): Pages edit, Zone DNS edit and Zone rulesets/redirect rules edit on the zone.
- `CLOUDFLARE_ACCOUNT_ID` (or `CF_ACCOUNT_ID`).

Locally, copy `.env.example` to the ignored `.env` and either point `CF_ENV_FILE` at a private credentials file or set the variables there. Then:

```sh
npm run deploy                         # check, build (SITE_URL=https://metribay.com), test, upload dist/ to production
npm run deploy -- --branch=preview     # preview deployment at <hash>.metribay.pages.dev
npm run deploy -- --skip-checks        # upload an existing dist/ as-is
npm run cf:status                      # project, custom domain status, latest deployment
npm run cf:setup                       # idempotent infrastructure setup (see below)
```

The upload records the Git commit hash and marks dirty trees. Deployments can be rolled back in the Cloudflare dashboard (Workers & Pages > metribay > Deployments).

## Before publishing pricing and legal pages

The pricing, FAQ and legal pages added on 2026-10-26 are meant to go live together with Paddle live checkout. Before `npm run deploy`:

- Add the full registered street address to `company.address` in `src/lib/company.ts`. The imprint currently shows only "Bankya, Sofia".
- Confirm the UIC (derived from the VAT ID as 206543923), the representative name and the contact email.
- Have the terms, privacy policy and refund policy reviewed. They follow Paddle's seller-policy requirements (Merchant of Record sentence, 14-day refund window, Paddle named as recipient) but are not legal advice.
- Check that the app's billing mode is `paddle`, so the trial and prices the site promises are what new users get.
- Submit metribay.com (pricing and policies) and app.metribay.com (checkout) for Paddle live domain approval.

## Infrastructure setup

`npm run cf:setup` is safe to rerun. It ensures:

1. Pages project `metribay`, production branch `main` (direct upload, no Git integration).
2. Custom domain `metribay.com` on the project, and a proxied apex `CNAME metribay.com → metribay.pages.dev`.
3. A proxied `AAAA www.metribay.com → 100::` (Cloudflare's originless placeholder) and a zone Single Redirect rule (ref `pages_redirect_metribay`) sending `www.metribay.com/*` to `https://metribay.com/*` with 301 and the query string.

It never overwrites a different existing A/AAAA/CNAME record; it stops and names the conflict. Other zone records (including `app.metribay.com`) and other redirect rules are left alone.

To reuse it for another static site, set `CF_PAGES_PROJECT`, `CF_PAGES_DOMAIN`, optionally `CF_PAGES_REDIRECT_HOSTS` (comma-separated, empty for none), `CF_PAGES_OUTPUT` and `CF_PAGES_PRODUCTION_BRANCH`, and copy the script.

## Response headers

`public/_headers` (copied to `dist/`) sets a strict Content-Security-Policy suited to the script-free site, `nosniff`, referrer and permissions policies, immutable caching for hashed `/_astro/*` files, and `X-Robots-Tag: noindex` on the `metribay.pages.dev` mirror. If the site ever adds client JavaScript, external images or fonts, update the CSP first. Unknown paths get the bilingual `404.html` with status 404.

## GitHub Pages alternative

The build still writes `CNAME` and `.nojekyll` for GitHub Pages (harmless on Cloudflare). `.github/workflows/pages.yml` checks every push/PR; its GitHub Pages deploy stays gated by `METRIBAY_PAGES_ENABLED` and must stay disabled while Cloudflare Pages serves the domain.

For `https://worbee.github.io/metribay-site/`, set repository variables `METRIBAY_SITE_URL=https://worbee.github.io` and `METRIBAY_SITE_BASE=/metribay-site/`. The build then omits CNAME and prefixes internal links/assets. Test the identical configuration locally:

```sh
SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm run build
SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm test
```

Rebuild without overrides to restore the custom-domain output.

References: [Cloudflare Pages direct upload](https://developers.cloudflare.com/pages/get-started/direct-upload/), [Pages headers](https://developers.cloudflare.com/pages/configuration/headers/), [Single Redirects](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/).
