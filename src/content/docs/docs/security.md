---
title: Security and privacy
description: How Metribay protects your provider credentials and data, where it's stored, and how to have it deleted.
---

You connect real accounts to Metribay. Here's how they're looked after.

## Your provider accounts

- **Read only.** Metribay only reads numbers. It never posts, edits or deletes anything in your tools. Wherever a provider offers read-only access, the integration guides tell you to use it.
- **Least access.** Give each account access only to what you want to track, like selected repositories or a single property.
- **Encrypted at rest.** API keys, tokens, passwords and service account keys are encrypted before they're stored.
- **Never shown again.** After saving, credentials don't appear in the app, in error messages, in logs or in exports. Not even owners can read them back.
- **Workspace-bound.** A saved account can only be used inside its own workspace, and in Metribay Cloud only owners can add or change one.
- **Public HTTPS only.** Metribay connects only to providers' public HTTPS addresses, and doesn't follow redirects elsewhere.
- **Your access, nobody else's.** Metribay Cloud reads data only through the accounts you connect. It never gets access to your data through some shared account of its own.

You can revoke Metribay's access at any time at the provider: remove the service account, delete the token or regenerate the key.

## Your Metribay account

- **Two-factor authentication** with an authenticator app. See [Account and security](../account/#two-factor-authentication).
- **Roles** let you give each person only the access they need. See [Team members and roles](../team/).
- **Private sign-up and recovery.** The sign-up and password reset pages never reveal whether an email address has an account.

## Where your data lives

Metribay Cloud runs on a Hetzner server in Finland, inside the EU. Cloudflare sits in front of it for speed and protection, and delivers Metribay's emails. Payments go through Paddle.

The database is backed up every night, and Hetzner backs up the whole server daily.

The self-hosted edition stores everything on your own server and talks only to the providers you connect.

## What Metribay stores

- your name, email address and password (hashed),
- your workspaces, projects, sources, annotations and team,
- encrypted provider credentials,
- the daily metrics collected from your providers.

Metribay stores totals per day, such as visitors or clicks. It doesn't collect anything about the individual visitors of your websites.

For the full details, including every service involved, see the [privacy policy](../../privacy/).

## Deleting your data

- **Stop collecting:** pause a source or archive a project. History stays.
- **Revoke access:** remove Metribay's access at the provider. The source then needs attention but keeps its history.
- **Delete your account:** email [rob@worbee.com](mailto:rob@worbee.com) from the address on your account. We delete it within 30 days. Backups roll over after 14 days. Billing records are kept as long as tax law requires.

You can also ask for a copy of your data, a correction or a restriction. We answer within one month.

## Reporting a security issue

Found a vulnerability? Please email [rob@worbee.com](mailto:rob@worbee.com) with the details before telling anyone else, so we can fix it first.
