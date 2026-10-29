---
title: Project overview
description: The overview shows every project in a workspace with its latest numbers, trends and source health.
---

The project overview is the first thing you see after signing in. It answers one question: how are my projects doing?

## What's on the page

**Reporting period.** Choose **Last 7 days**, **Last 30 days** or **Last 90 days** at the top. Every number and chart on the page follows this choice, and each change is compared with the period just before it.

**Summary line.** Shows how many projects and active sources you have, and whether any source needs your attention. *Source health looks clear* means every active source is fine.

**Find a project.** Type part of a project name or domain to filter the list. This appears once you have projects.

**Projects.** Each project lists its sources. For every source you see:

- its label and provider,
- its [status](#source-status) and the time of the last successful sync,
- a strip of compact metric cards with the period value, the change against the previous period and a small trend chart.

Select a project name to open its [project page](../project-page/) with full-size charts and annotations.

## Source status

| Status | What it means | What to do |
|---|---|---|
| **Up to date** | The latest collection worked and the data is current. | Nothing. |
| **Awaiting first sync** | The source was just added and its first import hasn't finished yet. | Wait. You can leave the page. |
| **Delayed** | Collection works, but the newest data is more than three days old. Some providers publish data late. | Usually nothing. If it lasts, check the provider. |
| **Needs attention** | The last collection failed, or there has been no successful sync for 8 hours (2 hours for uptime monitors). | Select **Review source**. See [Troubleshooting](../troubleshooting/). |
| **Paused** | Automatic collection is turned off for this source. | Turn on **Collect automatically** if you want new data. |

When a source needs attention, Metribay keeps showing the history it already has. Nothing is lost.

## Good to know

- **The page keeps itself current.** While the overview is open, it refreshes on its own, so you'll see new data arrive without reloading.
- **Dates follow each source's timezone.** Search Console counts days in Pacific time, most other providers in UTC. See [Timezones](../reading-the-numbers/#timezones).
- **A dash means unavailable, not zero.** See [Reading the numbers](../reading-the-numbers/).
- **Archived projects** don't appear on the overview. Find them under **Settings → Projects**.

## Change how it looks

Under **Account & preferences → Appearance** you can switch between light and dark themes, show compact numbers (12.5K instead of 12,450) and make the overview more compact. See [Account and security](../account/#appearance).
