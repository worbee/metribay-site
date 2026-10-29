---
title: Reading the numbers
description: How Metribay totals, compares and labels data, and why a dash is not a zero.
---

Metribay tries hard not to show you a number it can't stand behind. This page explains the rules, so you know exactly what each figure means.

## A dash is not a zero

If a provider didn't report a value for a day, Metribay records nothing for that day. It does not fill in a zero.

- On a chart, a missing day is a **gap** in the line.
- In the daily values table, it's marked **Missing**.
- If a period total can't be worked out reliably, the card shows **—** instead of a number.

A real zero, like a day with no downloads, shows as 0. So when you see 0, the provider really reported zero.

## How period totals work

Metribay handles three kinds of metrics differently.

**Metrics that add up.** Visits, page views, clicks, impressions, downloads, commits, merged pull requests and lines changed. The period value is the sum of the recorded days.

**Unique visitors.** Someone who visits on Monday and again on Tuesday is one visitor for the week, not two. Adding up daily visitors would count them twice. So Metribay asks the provider for the exact number of unique visitors over the whole period. If the provider can't answer, the card shows a dash, even though the daily chart still has data. Visitors are never added across days, projects or sources.

**Current-state metrics.** Indexed pages, open issues, monitor status, 24-hour uptime and response time describe how things are *now*. The card shows the latest observation and its date, like *Observed 29 Oct 2026*. They don't get a percentage change, because a growth rate for a status makes no sense.

## Comparisons

The change on each card compares the selected period with the period of the same length just before it. For the last 30 days, that's the 30 days before those.

The change is left out when:

- the previous period has no data, or a total of zero, since growth from nothing can't be expressed as a percentage,
- the metric describes a current state, like uptime or status.

## Partial and provisional data

Some numbers aren't final yet.

- **Today** is always incomplete. It's marked as partial.
- **Google Analytics** can revise the last few days. Metribay treats the last three days as provisional and reads them again.
- **Search Console** publishes fresh data first and final data a few days later. Metribay keeps the fresh numbers as provisional and replaces them when the final ones arrive.

A card shows the **Partial** label when its period includes such days. In the daily values table these days are marked **Partial**.

Don't be alarmed if yesterday's number goes up a little at the next sync. That's the provider finishing its count.

## Coverage

The footnote under each card, such as *28/30 days recorded*, tells you how many days in the period have a value. If coverage is low, read the total with care: it covers fewer days than the period.

## Timezones

A “day” depends on where it starts. Metribay uses each provider's own reporting timezone, so its numbers match what you see in that tool:

| Provider | Days are counted in |
|---|---|
| Google Analytics 4 | Your property's timezone |
| Google Search Console | Pacific time (America/Los_Angeles) |
| Bing, Umami, GitHub, WordPress.org, UptimeRobot | UTC |

This means two sources in the same project may start their day at different hours. The overview reminds you: *Dates follow each source's timezone*.

## Numbers you might see differently elsewhere

- **Google Analytics sampling and thresholds.** If Google returns sampled, thresholded or otherwise incomplete data, Metribay rejects it instead of storing a guess. The source shows *Needs attention*. See [Google Analytics 4](../integrations/google-analytics/#if-collection-fails).
- **GitHub lines changed** count additions plus deletions, but leave out merge commits so the same change isn't counted twice.
- **GitHub commits** count commits on the default branch only, by commit date.

## Changes to history

When a provider revises a past day, Metribay updates it at the next sync that covers that day. If a sync fails, the existing history stays untouched.
