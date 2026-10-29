---
title: Saved accounts
description: Saved accounts hold your provider credentials, encrypted. Reuse one account for many sources and rotate credentials safely.
---

A saved account holds the credentials Metribay uses to read from a provider: an API key, a token, a Google service account or a username and password. In **Settings** these are listed under **Connections**.

You save an account once and use it for as many sources as you like. One Google service account can feed every Analytics property and Search Console site it has access to.

## Add a saved account

Most of the time you add accounts while [adding a source](../sources/). Those get a name made of the provider and the time, like *GitHub · 29 Oct 14:03:22*. Rename them in **Settings → Connections** so you can tell them apart later.

You can also add an account on its own:

1. Go to **Settings → Connections** and select **Add connection**.
2. Give it a **Connection name** that tells you whose account it is, like “Client A Google” or “My GitHub token”.
3. Choose the **Provider** and fill in its credentials. Each [integration guide](../integrations/) explains what to enter.
4. Select **Add connection**.

WordPress.org needs no account, so it isn't listed.

## Use the least access you can

Metribay only ever reads. Give each account the smallest read-only permission the provider offers, and only for the resources you want to track. Each integration guide tells you which permission is enough.

## Update or rotate credentials

1. Go to **Settings → Connections** and open **Edit connection**.
2. You can rename the account at any time.
3. To replace the credentials, fill in a complete set for one sign-in method. To keep the saved credentials, leave every credential field blank.
4. Select **Save connection**.

All sources using this account pick up the new credentials at their next sync. Their history is unaffected.

Saved credentials are never shown again, not even to owners. If you've lost a key, create a new one with the provider and enter it here.

## Move sources to another account

To switch a source to a different saved account, open **Settings → Sources → Manage source** and choose another **Connection**. The source keeps its history.

## Who can manage saved accounts

In Metribay Cloud only workspace **owners** can add and edit saved accounts. Editors can use saved accounts when adding sources but can't see or change the credentials. Saved accounts belong to their workspace and can't be used from another workspace.

## How credentials are protected

- Credentials are encrypted before they're stored.
- They never appear in the app after saving, in error messages or in logs.
- They're left out of [configuration exports](../import-export/).
- Metribay only connects to providers' public HTTPS addresses.

See [Security and privacy](../security/) for more.
