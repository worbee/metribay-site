---
title: Updates and syncing
description: How often Metribay collects new data, how far back it reads, and how to refresh a source right away.
---

Metribay collects data in the background. You never need to press anything for your dashboard to stay current.

## The schedule

| What | How often |
|---|---|
| Analytics, search, downloads and repository activity | Every 4 hours |
| UptimeRobot monitors | Every hour |
| Full history refresh | Once a week |

Opening the dashboard never contacts your providers. It shows what Metribay has already collected, which is why it loads quickly.

## What each sync reads

**First import.** When you add a source, Metribay reads its whole history window, 180 days unless you chose otherwise.

**Regular syncs.** After that, each sync rereads the days since the last successful one, plus a week extra. That picks up late corrections from providers like Google.

**Weekly refresh.** Once a week Metribay rereads the whole history window to catch older changes.

Some providers work a little differently:

- **GitHub** always rereads the whole window, because older commits can appear later, for example when a branch is merged.
- **Bing** only keeps a limited history of its own, so you may get less than your history window.
- **UptimeRobot** reports the current state and the last 24 hours, so each sync adds one new observation.

## The history window

The history window is how many days back Metribay reads, from 1 to 366. The default is 180 days. You choose it under **Advanced settings** when adding a source, and can change it later in **Settings → Sources → Manage source**.

A longer window gives you more history from day one, but the first import takes longer. Metribay keeps everything it has collected, so your history keeps growing beyond the window over time.

## Sync now

Need fresh data right away? Select **Sync now** next to a source on its project page, or in **Settings → Sources**. The sync runs in the background and the page updates when it finishes.

- **Sync now** is only available to owners and editors.
- It's disabled while a source is paused or its project is archived.
- In Metribay Cloud, you can sync each source once every 15 minutes. Scheduled syncs carry on regardless.

## Check provider access

Owners can select **Check provider access** in **Settings → Sources** to test whether the saved account can still reach the resource, without importing data. Use it after you change permissions at the provider. In Metribay Cloud you can run it once a minute per source.

## Request limits

Providers limit how many requests an account can make. Metribay spaces its requests out and shares a budget per account. If a provider's limit is reached, the source shows a message like *Request limit reached; scheduled imports will retry*. You don't need to do anything. The next scheduled sync tries again.

## Pausing collection

To stop collecting new data for a source, turn off **Collect automatically** in **Settings → Sources → Manage source**. The source shows *Paused* and keeps its history. Turn it back on and the next sync catches up within the history window.
