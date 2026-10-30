---
title: Events
description: Mark launches, campaigns and changes on a project's charts, once or on a repeating schedule. GitHub releases are added for you.
---

Numbers tell you *that* something changed. Events help you remember *why*. Add one when you launch a feature, start a campaign, fix a bug or move to a new server. Events appear as markers on the project's charts and in a list below them.

## Add an event

1. Open the project.
2. Scroll to **Events** and select **Add event**.
3. Fill in:
   - **Date**: when it happened, or will happen. Past and future dates both work. Today is filled in for you.
   - **Data source** *(optional)*: show the event only on one data source's charts, or leave **Whole project**.
   - **Title**: a short description, like “Launched the new pricing page”.
   - **Color**: **Blue**, **Green**, **Amber** or **Violet**. Use colors to tell kinds of events apart, for example green for marketing and amber for releases.
   - **Repeats** *(optional)*: **Every week**, **Every month** or **Every year**, and an optional **Repeat until** date. Leave **Repeat until** empty to repeat indefinitely.
   - **Note** *(optional)*: any extra detail.
   - **Reference URL** *(optional)*: a link to a changelog, ticket or blog post.
4. Select **Add event**.

Events are listed newest first. Future events are marked *Upcoming*, and repeating events show their next date.

## Repeating events

A repeating event appears on the charts on every date it repeats. Monthly events on the 29th, 30th or 31st fall on the last day of shorter months, and yearly events on 29 February fall on 28 February in other years.

Editing or deleting a repeating event changes the whole series.

## Edit or delete

Open **Edit event** under an event to change it, or select **Delete event** to remove it.

Owners and editors can add, edit and delete events. Viewers can see them.

## Imported events

Some events are imported for you. They are drawn in grey with a tag icon, marked *Imported from GitHub*, and you can't edit or delete them in Metribay.

If a project has a [GitHub data source](../integrations/github/), every published release becomes an event, dated on its publication day and shown on that data source's charts. Its title is the release name (or tag), its note is the release description and its link goes to the release on GitHub. Pre-releases are marked as such. Drafts are skipped.

Metribay keeps these in step with GitHub. If you edit or delete a release there, the event follows at the next sync.

## On the charts

On each full-size chart, custom events show as a dashed line with a dot in their color, and imported events as a grey dotted line with a diamond. Hover over a day, or step through days with the arrow keys, to see the events on that day. The chart legend tells you how many events fall in the selected period. Compact charts on the overview don't show events.

## Ideas for good events

- Releases, launches and redesigns
- Marketing campaigns, newsletters and social posts that went well
- Search engine updates you've read about
- Outages, migrations and DNS or hosting changes
- Changes to tracking, like a new consent banner or analytics setup

The last one matters more than it seems. A sudden drop in visitors is often a tracking change, not a traffic change.
