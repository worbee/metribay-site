---
title: Annotations
description: Add dated notes to a project so you remember why the numbers changed. GitHub releases are added for you.
---

Numbers tell you *that* something changed. Annotations help you remember *why*. Add one when you launch a feature, start a campaign, fix a bug or move to a new server.

## Add an annotation

1. Open the project.
2. Scroll to **Annotations** and select **Add annotation**.
3. Fill in:
   - **Date**: when it happened. Today is filled in for you.
   - **Source** *(optional)*: link the note to one source, or leave **Whole project**.
   - **Title**: a short description, like “Launched the new pricing page”.
   - **Note** *(optional)*: any extra detail.
   - **Reference URL** *(optional)*: a link to a changelog, ticket or blog post.
4. Select **Add annotation**.

Annotations are listed newest first on the project page.

## Edit or delete

Open **Edit annotation** under an annotation to change it, or select **Delete annotation** to remove it.

Owners and editors can add, edit and delete annotations. Viewers can read them.

## GitHub releases

If a project has a [GitHub source](../integrations/github/), every published release becomes an annotation on its own, dated on its publication day. Its title is the release name (or tag), its note is the release description and its link goes to the release on GitHub. Pre-releases are marked as such. Drafts are skipped.

Metribay keeps these in step with GitHub. If you edit or delete a release there, the annotation follows at the next sync.

## Ideas for good annotations

- Releases, launches and redesigns
- Marketing campaigns, newsletters and social posts that went well
- Search engine updates you've read about
- Outages, migrations and DNS or hosting changes
- Changes to tracking, like a new consent banner or analytics setup

The last one matters more than it seems. A sudden drop in visitors is often a tracking change, not a traffic change.
