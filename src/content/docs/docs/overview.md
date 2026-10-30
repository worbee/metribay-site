---
title: Project overview
description: The overview shows every project in a workspace with its latest numbers, trends and data source health.
---

The project overview is the first thing you see after signing in. It answers one question: how are my projects doing?

## What's on the page

**Reporting period.** Choose **Last 7 days**, **Last 30 days** or **Last 90 days** at the top. Every number and chart on the page follows this choice, and each change is compared with the period just before it.

**Summary line.** Shows how many projects and active data sources you have, and whether any data source needs your attention. *Data source health looks clear* means every active data source is fine.

**Find a project.** Type part of a project name or domain to filter the list. This appears once you have projects.

**Totals.** With more than one project, a row above the table adds up each column across all projects.

**Projects.** Each project takes one row, so you can compare many projects at a glance. The columns show one number per kind of data for the selected period:

- **Visits** from Umami and Google Analytics,
- **Search clicks** from Search Console and Bing Webmaster Tools,
- **Commits · PRs**: commits and merged pull requests from GitHub,
- **Downloads** from WordPress.org,
- **Uptime · 24h**: how many UptimeRobot monitors are up, and the lowest uptime of the last 24 hours.

A column appears only when at least one project has that kind of data source. When a project has several data sources of one kind, for example two websites, the column adds them up. Point at a value to see each data source on its own. Unique visitors are never added, so the overview uses visits instead. Next to each number you see the change against the previous period and a small trend line.

A dot (**·**) means the project has no data source of that kind. A dash (**—**) means the data source exists but has no data for the period.

The colored dot before each project name shows its most urgent [data source status](#data-source-status). Projects with a data source that needs attention or is delayed are highlighted and listed first.

**Sorting.** Select a column heading to sort by it, largest first. Select it again to reverse the order. Projects without a value for that column come last.

Select a project's row to open its [project page](../project-page/). It shows each data source on its own, with full-size charts and events.

## Data source status

| Status | What it means | What to do |
|---|---|---|
| **Up to date** | The latest collection worked and the data is current. | Nothing. |
| **Awaiting first sync** | The data source was just added and its first import hasn't finished yet. | Wait. You can leave the page. |
| **Delayed** | Collection works, but the newest data is more than three days old. Some providers publish data late. | Usually nothing. If it lasts, check the provider. |
| **Needs attention** | The last collection failed, or there has been no successful sync for 8 hours (2 hours for uptime monitors). | Open the project and select **Review data source**. See [Troubleshooting](../troubleshooting/). |
| **Paused** | Automatic collection is turned off for this data source. | Turn on **Collect automatically** if you want new data. |

When a data source needs attention, Metribay keeps showing the history it already has. Nothing is lost.

## Good to know

- **The page keeps itself current.** While the overview is open, it refreshes on its own, so you'll see new data arrive without reloading.
- **Dates follow each data source's timezone.** Search Console counts days in Pacific time, most other providers in UTC. See [Timezones](../reading-the-numbers/#timezones).
- **A dash means unavailable, not zero.** See [Reading the numbers](../reading-the-numbers/).
- **Archived projects** don't appear on the overview. Find them under **Settings → Projects**.

## Change how it looks

Under **Profile & preferences → Appearance** you can switch between light and dark themes, show compact numbers (12.5K instead of 12,450) and make the overview more compact. See [Profile and security](../profile/#appearance).
