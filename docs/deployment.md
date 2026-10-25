# GitHub Pages deployment

This repository is the public static site for **https://metribay.com/**. The Laravel core and private hosted application are separate; they are not included in the Pages artifact.

## Current state

The public repository [worbee/metribay-site](https://github.com/worbee/metribay-site) contains the holding-page source. Rob authorized the source push on 2026-10-25 while keeping product testing private. Pages deployment is disabled by default: the package and deploy jobs require repository variable METRIBAY_PAGES_ENABLED=true. No Pages setting, DNS record or public deployment is configured by a source push alone.

## Repository setup

1. Use the existing public repository `worbee/metribay-site`. It does not need to be named `worbee.github.io` when using a custom domain.
2. Put this repository's contents on its `main` branch when commits and publication are authorized.
3. In **Settings → Pages → Build and deployment**, choose **GitHub Actions** as Source.
4. Protect the `github-pages` environment so deployments come from `main` only. Require an environment reviewer if manual release approval is desired.
5. Verify `metribay.com` under the owner's GitHub Pages settings using GitHub's supplied TXT record. Keep the verification record in DNS.
6. In the repository's **Settings → Pages → Custom domain**, save `metribay.com` **before pointing DNS at GitHub**.
7. Set the repository Actions variable **METRIBAY_PAGES_ENABLED** to **true** when publication is authorized, then run **Deploy holding site** from Actions (or use an authorized push to `main`). The workflow uploads `public/`, then deploys that artifact to the `github-pages` environment.

The workflow also runs the JavaScript syntax check on pull requests. Pull request events cannot upload or deploy an artifact.

## Custom domain and CNAME behaviour

`public/CNAME` records the intended hostname and helps if the site later switches to branch-based publishing. **GitHub ignores this file for custom Actions workflows.** Saving `metribay.com` in repository Pages settings is required. The local file does not verify a domain or change DNS.

`.nojekyll` is included for branch-publishing compatibility; the current Actions workflow does not run Jekyll. Root-relative asset URLs expect `metribay.com` (or the local web root); previewing at `worbee.github.io/<repository>/` without the custom domain requires a path-prefix change.

## DNS

The repository owner is `worbee`. Do not use the repository name or the generated `*.pages.github.io` deployment hostname.

For the apex `metribay.com`, use either:

- An `ALIAS`/`ANAME` record pointing to `worbee.github.io`, if the DNS provider supports it, **or**
- All four `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.

Optional IPv6 `AAAA` records (in addition to IPv4):

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

For `www`, set a `CNAME` to `worbee.github.io`. With apex configured as the custom domain, GitHub Pages redirects `www.metribay.com` to `metribay.com`. Do not set wildcard DNS records. Other application subdomains have separate hosting configuration.

## Verify after publication

```sh
dig metribay.com A +short
dig metribay.com AAAA +short
dig www.metribay.com CNAME +short
curl -I https://metribay.com/
curl -I https://www.metribay.com/
curl -I https://metribay.com/does-not-exist
```

Confirm the Pages workflow succeeds, DNS resolves to the selected GitHub setup, the apex serves the holding page over HTTPS, `www` redirects to the apex, and a missing URL returns status 404 with the branded error page. Enable **Enforce HTTPS** in Pages settings when GitHub's certificate is ready. DNS/certificate changes can take up to 24 hours.

Check the rendered site at mobile/desktop widths, both themes, keyboard focus, no JavaScript, and reduced motion. Confirm no failed asset requests. The domain, canonical URL, Open Graph URL, sitemap, and robots sitemap location should all agree.

If the Pages site is removed, remove or update its DNS records at the same time. Domain verification should remain configured while the domain is in use.

## References

Verified against GitHub's official documentation on 2026-10-25:

- [Custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Managing a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [Verifying a custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
