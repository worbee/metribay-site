---
title: How Metribay is organised
description: Workspaces, projects, sources, saved accounts, metrics and annotations, and how they fit together.
---

Metribay has a handful of building blocks. Once you know them, every screen makes sense.

```
Workspace
├── Project: example.com
│   ├── Source: Google Analytics property     ← uses a saved account
│   ├── Source: Search Console property      ← uses a saved account
│   └── Source: UptimeRobot monitor          ← uses a saved account
├── Project: My WordPress plugin
│   ├── Source: WordPress.org downloads      (no account needed)
│   └── Source: GitHub repository
└── Saved accounts, team members, annotations
```

## Workspace

A workspace holds everything for one business, client or portfolio: its projects, saved accounts, metric history and team. Nothing is shared between workspaces.

In Metribay Cloud you can own up to five workspaces and switch between them from the header. The self-hosted edition has a single workspace that stays in the background. See [Workspaces](../workspaces/).

## Project

A project is anything you run and want to follow: a website, a plugin, an app or a product. It brings related sources into one view. A project has a name and, optionally, a domain.

When you no longer need a project, archive it. It disappears from the overview but keeps its history. See [Manage projects](../projects/).

## Source

A source is one connection that feeds numbers into one project. A Search Console property, a GitHub repository and an UptimeRobot monitor are three sources.

Each source belongs to exactly one project and reads from exactly one provider. A source has:

- a **label**, which you choose,
- the **resource** it reads, such as a property ID or a repository name,
- a **reporting timezone**, which decides where a day starts and ends,
- a **history window**, which sets how many days back Metribay reads, and
- a **status**, such as *Up to date* or *Needs attention*.

See [Add and manage sources](../sources/).

## Saved account

A saved account holds the credentials Metribay uses to read from a provider, such as an API key or a Google service account. You save it once and reuse it for as many sources as you like. A single Google service account can feed every property it has access to.

Credentials are encrypted and never shown again after you save them. The settings call saved accounts **Connections**. See [Saved accounts](../saved-accounts/).

## Metrics

Each provider delivers a fixed set of metrics, such as visitors, clicks, commits or uptime. Metribay stores them as daily observations: one value per metric per day, in the source's timezone.

Some metrics, like visits or downloads, add up over a period. Others, like unique visitors or open issues, don't. Metribay treats each one correctly. See [Reading the numbers](../reading-the-numbers/).

## Annotations

Annotations are dated notes on a project, like “Launched the new pricing page”. They help you explain a jump or a dip later. GitHub releases become annotations on their own. See [Annotations](../annotations/).

## Roles

In Metribay Cloud, everyone in a workspace has a role:

- **Owners** manage the team and saved accounts, and can do everything else.
- **Editors** manage projects, sources and annotations.
- **Viewers** can look at everything but change nothing.

See [Team members and roles](../team/).
