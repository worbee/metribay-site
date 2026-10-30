---
title: How Metribay is organised
description: Workspaces, projects, data sources, connected accounts, metrics and events, and how they fit together.
---

Metribay has a handful of building blocks. Once you know them, every screen makes sense.

```
Workspace
├── Project: example.com
│   ├── Data source: Google Analytics property   ← reads through a connected account
│   ├── Data source: Search Console property     ← reads through a connected account
│   ├── Data source: UptimeRobot monitor         ← reads through a connected account
│   └── Events: launches, campaigns, releases
├── Project: My WordPress plugin
│   ├── Data source: WordPress.org downloads     (no account needed)
│   └── Data source: GitHub repository
├── Connected accounts: your logins at Google, GitHub, Umami …
└── Team members
```

Projects and connected accounts are the two things you manage in **Settings**. Data sources sit inside projects: you add and manage them from each project.

## Workspace

A workspace holds everything for one business, client or portfolio: its projects, connected accounts, metric history and team. Nothing is shared between workspaces.

In Metribay Cloud you can own up to five workspaces and switch between them from the header. The self-hosted edition has a single workspace that stays in the background. See [Workspaces](../workspaces/).

## Project

A project is anything you run and want to follow: a website, a plugin, an app or a product. It brings its data sources and events into one view. A project has a name and, optionally, a domain.

You always start with a project, then add its data sources. When you no longer need a project, archive it. It disappears from the overview but keeps its history. See [Manage projects](../projects/).

## Connected account

A connected account is your login at a provider, such as your Google account, a GitHub token or an Umami username and password. It gives Metribay read access. You connect it once and reuse it for as many data sources, in as many projects, as you like: one Google account can feed every Analytics property it can see.

Credentials are encrypted and never shown again after you save them. Connected accounts belong to the workspace, not to a project. See [Connected accounts](../connected-accounts/).

## Data source

A data source is one specific thing Metribay tracks for a project: a Search Console property, a GitHub repository or an UptimeRobot monitor. It says *what* to read; its connected account says *with which login*.

Each data source belongs to exactly one project and reads from exactly one provider. A data source has:

- a **label**, which you choose,
- the **resource** it reads, such as a property ID or a repository name,
- the **connected account** it reads with (WordPress.org needs none),
- a **reporting timezone**, which decides where a day starts and ends,
- a **history window**, which sets how many days back Metribay reads, and
- a **status**, such as *Up to date* or *Needs attention*.

See [Add and manage data sources](../data-sources/).

## What happens when

Adding Google Analytics to a project called *Example*:

1. On the *Example* project page, select **Add data source** and pick **Google Analytics 4**.
2. Choose a connected account, or sign in with Google. **A new connected account is saved at this point.**
3. Metribay lists the properties this account can see. Pick one.
4. Confirm. **The data source is created now** and its first import starts.

After that, Metribay collects every data source on a schedule using its connected account. If a password or token changes, update the connected account once and every data source using it keeps working.

## Metrics

Each provider delivers a fixed set of metrics, such as visitors, clicks, commits or uptime. Metribay stores them as daily observations: one value per metric per day, in the data source's timezone.

Some metrics, like visits or downloads, add up over a period. Others, like unique visitors or open issues, don't. Metribay treats each one correctly. See [Reading the numbers](../reading-the-numbers/).

## Events

Events are dated markers on a project, like “Launched the new pricing page”. They appear on the charts and help you explain a jump or a dip later. Custom events can repeat, for example a weekly newsletter. GitHub releases are imported as events on their own. See [Events](../events/).

## Roles

In Metribay Cloud, everyone in a workspace has a role:

- **Owners** manage the team and connected accounts, and can do everything else.
- **Editors** manage projects, data sources and events.
- **Viewers** can look at everything but change nothing.

See [Team members and roles](../team/).
