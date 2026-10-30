---
title: Project pages and charts
description: Open a project to see full-size charts for each data source, compare periods, inspect daily values and refresh data.
---

Select a project on the overview to open its project page. It shows every data source of that project with full-size metric cards, followed by the project's [events](../events/).

## The header

- **Reporting period** switches between 7, 30 and 90 days.
- **Add data source** connects another tool to this project.
- **Project settings** opens the project's details and data sources.
- **All projects** takes you back to the overview.

## Each data source

Every data source has its own section with:

- the provider, the reporting timezone and the time of the last successful sync,
- its [status](../overview/#data-source-status),
- **Sync now**, which asks for fresh data right away (see [Updates and syncing](../syncing/)),
- one metric card per metric.

## Metric cards

A metric card shows:

- **The period value.** For example, clicks over the last 30 days. A dash (—) means no reliable total is available. It never means zero.
- **The change** against the previous period of the same length, with an arrow. It is left out when there's nothing fair to compare against.
- **Partial**, when some dates or today are still incomplete.
- **A daily chart.** The solid line is the selected period. The lighter line is the previous period, placed on the same days so you can compare shapes. Use the legend buttons to hide or show either line.
- **A footnote,** such as *28/30 days recorded*, or *Observed 29 Oct 2026* for metrics that describe the current state.

Missing days appear as gaps in the line. Metribay doesn't draw a line through days it knows nothing about.

## Daily values

Select **View daily values** under a chart to see the exact number for each day. The **Coverage** column says whether each day is:

- **Recorded**: the provider reported a value,
- **Partial**: the day is still in progress or may still change,
- **Missing**: no value is available.

The table always shows full, exact numbers, even if you chose compact numbers for the dashboard.

## Keyboard and screen readers

Charts are labelled with what they show and how many days have data. Focus a chart and use the left and right arrow keys to step through the recorded dates. Every value is also in the daily values table.

## Archived projects

An archived project's page still opens and shows its full history. You can't add data sources to it or sync it until you unarchive it. See [Manage projects](../projects/).
