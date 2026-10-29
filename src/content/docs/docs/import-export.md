---
title: Import and export
description: Download your workspace setup as a JSON file and import it elsewhere, without credentials or metric history.
---

You can save your workspace setup as a file and load it into another workspace or another Metribay installation. Use it to move from a self-hosted installation to Metribay Cloud or back, to copy a setup between workspaces, or to keep a copy of your configuration.

Both options are in **Settings → Import & export**.

## What's in the file

| Included | Not included |
|---|---|
| Projects: names, domains, archived state | Saved account credentials |
| Sources: provider, resource, label, timezone, history window, paused state | Metric history |
| The *name* of the saved account each source uses | |
| | Annotations |
| | Team members |

Credentials are left out on purpose, so the file is safe to store or send. Metric history is left out because it can be collected again from your providers.

## Export your configuration

Select **Download JSON**. Owners and editors can export.

## Import a configuration

1. Under **Import configuration**, choose a JSON file exported from Metribay in **Configuration file**.
2. Select **Import configuration**.

Importing:

- **adds** projects and sources that don't exist yet,
- **updates** the settings of matching projects and sources,
- **keeps** all existing metric history.

Nothing is deleted.

When it's done, Metribay says *Configuration imported. Sources without an existing matching connection are paused.*

## Connecting imported sources

The file remembers which saved account each source used, by name. When you import, Metribay looks for a saved account with **the same name and provider** in the workspace:

- **Found:** the source is connected to it and collects as usual.
- **Not found:** the source is imported paused, so it doesn't fail on missing credentials.

WordPress.org sources need no account and are never paused for this reason.

:::tip[Save time when moving]
Before importing into a new workspace or installation, [add your saved accounts](../saved-accounts/) with exactly the same names as before. Every source then connects on its own.
:::

To connect a paused source afterwards:

1. In **Settings → Sources**, open **Manage source**.
2. Choose the saved account under **Connection** and tick **Collect automatically**.
3. Select **Save source**. The next sync reads the source's whole history window.

## Limits

- A file can hold up to 100 projects with up to 100 sources each, and can be up to 1 MB.
- In Metribay Cloud, imported active projects and sources count towards your plan limits like any others.
