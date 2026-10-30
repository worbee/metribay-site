---
title: Connected accounts
description: Connected accounts are your logins at providers, stored encrypted. Reuse one account for many data sources and rotate credentials safely.
---

A connected account is your login at a provider: a Google account, an API key, a token or a username and password. It gives Metribay read access. Find them under **Settings → Connected accounts**.

You connect an account once and use it for as many data sources, in as many projects, as you like. One Google account or service account can feed every Analytics property and Search Console site it has access to.

## Connect an account

Most of the time you connect accounts while [adding a data source](../data-sources/). Selecting **Save account and continue** saves the account right away, even if you don't finish adding the data source. Accounts get a name made of the provider and the time, like *GitHub · 29 Oct 14:03:22*. Rename them so you can tell them apart later.

You can also connect an account on its own:

1. Go to **Settings → Connected accounts** and select **Connect an account**.
2. Give it an **Account name** that tells you whose account it is, like “Client A Google” or “My GitHub token”.
3. Choose the **Provider** and fill in its credentials. Each [integration guide](../integrations/) explains what to enter.
4. Select **Connect account**.

WordPress.org needs no account, so it isn't listed.

## See where an account is used

Each connected account shows how many data sources use it, with a link to each one in its project's settings. *Not used yet* means no data source reads with it.

## Use the least access you can

Metribay only ever reads. Give each account the smallest read-only permission the provider offers, and only for the resources you want to track. Each integration guide tells you which permission is enough.

## Update or rotate credentials

1. Go to **Settings → Connected accounts** and open **Edit connected account**.
2. You can rename the account at any time.
3. To replace the credentials, fill in a complete set for one sign-in method. To keep the saved credentials, leave every credential field blank.
4. Select **Save connected account**.

All data sources using this account pick up the new credentials at their next sync. Their history is unaffected.

Saved credentials are never shown again, not even to owners. If you've lost a key, create a new one with the provider and enter it here.

## Move data sources to another account

Open the project's **Project settings**, then **Manage data source**, and choose another **Connected account**. The data source keeps its history.

## Remove an account

Open **Edit connected account** and select **Remove connected account**. This deletes the saved credentials. You can only remove an account that no data source uses: switch its data sources to another account first. Metribay doesn't revoke access at the provider, so remove the key or app access there too if you no longer need it.

## Who can manage connected accounts

In Metribay Cloud only workspace **owners** can connect, edit and remove accounts. Editors can choose connected accounts when adding data sources but can't see or change the credentials. Connected accounts belong to their workspace and can't be used from another workspace.

## How credentials are protected

- Credentials are encrypted before they're stored.
- They never appear in the app after saving, in error messages or in logs.
- They're left out of [configuration exports](../import-export/).
- Metribay only connects to providers' public HTTPS addresses.

See [Security and privacy](../security/) for more.
