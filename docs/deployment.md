# Static hosting

Rob's latest request on 2026-10-25 is an English/German Astro marketing website prepared for standalone GitHub Pages. This supersedes the earlier Cloudflare-only marketing preparation. Rob subsequently authorized committing and pushing the website source; marketing publication and DNS changes remain deferred. The hosted Laravel app stays separate at app.metribay.com.

## Build

Use Node24 and the committed npm lockfile:

```sh
npm ci
npm run check
npm run build
npm test
```

Publish **dist/** only. `public/` is the source asset directory, not the deployable site. No server adapter or runtime is required.

## Custom domain: metribay.com

Default configuration uses `SITE_URL=https://metribay.com` and `SITE_BASE=/`. The build writes `dist/CNAME` and `.nojekyll`. English is `/`, German `/de/`; canonical, hreflang, social metadata, robots and sitemap use the configured origin.

After explicit publication direction:

1. Set repository Pages source to GitHub Actions for `worbee/metribay-site`.
2. Configure and verify the custom domain, DNS and HTTPS using GitHub's current domain instructions. Keep app.metribay.com unchanged.
3. Set `METRIBAY_PAGES_ENABLED=true` and run the workflow from `main` after the reviewed source is pushed. Verify both locales, assets, missing-page behavior, canonical URLs and HTTPS on the deployed domain.

No repository settings, variables or DNS records have been changed. PRs run checks but cannot deploy.

## Repository Pages URL

For `https://worbee.github.io/metribay-site/`, set repository variables:

- `METRIBAY_SITE_URL`: `https://worbee.github.io`
- `METRIBAY_SITE_BASE`: `/metribay-site/`

The build omits CNAME for `*.github.io` origins and prefixes all internal links/assets. Test the identical configuration locally:

```sh
SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm run build
SITE_URL=https://worbee.github.io SITE_BASE=/metribay-site/ npm test
```

Rebuild without overrides to restore the custom-domain output. For unknown URLs, GitHub serves the root `404.html`, which includes both languages and base-aware home links.

## Other static hosts

The same Astro build works on Cloudflare Pages: Node24, build command `npm run check && npm run build && npm test`, output directory `dist`. The older Cloudflare choice is retained as an alternative; there is no vendor-specific runtime. No hosting setup has been performed.

References: [Astro GitHub Pages deployment](https://docs.astro.build/en/guides/deploy/github/), [GitHub custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
