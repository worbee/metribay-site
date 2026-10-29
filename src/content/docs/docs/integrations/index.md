---
title: All integrations
description: The seven tools Metribay reads from, what each one gives you and what you need to connect it.
---

Metribay reads from seven providers. Each guide walks you through the access the provider needs and how to connect it.

| Provider | What you get | What you need | Days counted in |
|---|---|---|---|
| [Google Analytics 4](google-analytics/) | Visitors, visits, page views | A Google service account | Property timezone |
| [Google Search Console](search-console/) | Clicks, impressions | A Google service account | Pacific time |
| [Bing Webmaster Tools](bing/) | Clicks, impressions, indexed pages | An API key | UTC |
| [Umami](umami/) | Visitors, visits, page views | Server address, username and password | UTC |
| [GitHub](github/) | Commits, merged PRs, lines changed, open issues, releases | A personal access token | UTC |
| [WordPress.org](wordpress/) | Daily plugin downloads | Nothing | UTC |
| [UptimeRobot](uptimerobot/) | Status, 24-hour uptime, response time | A read-only API key | UTC |

## How every integration works

- **Read only.** Metribay only reads numbers. It never posts, edits or deletes anything in your tools.
- **Tested before saving.** Credentials are checked against the provider before they're stored.
- **Only what the account can see.** When you pick a resource, Metribay lists what the saved account has access to. Grant access at the provider first.
- **Encrypted.** Credentials are encrypted and never shown again. See [Saved accounts](../saved-accounts/).
- **Public HTTPS only.** Metribay connects to each provider's public HTTPS address. Tools on a private network or behind a VPN can't be reached.

## Which sources should a project have?

| You run | Good sources |
|---|---|
| A website or blog | Google Analytics 4 or Umami, Search Console, Bing, UptimeRobot |
| A WordPress plugin | WordPress.org, GitHub, and the plugin's website |
| An open-source library | GitHub, and the documentation site's analytics |
| A web app | Analytics for the marketing site, UptimeRobot for the app, GitHub for the code |

## Missing a tool?

Tell us which one at [rob@worbee.com](mailto:rob@worbee.com). Requests help decide what comes next.
