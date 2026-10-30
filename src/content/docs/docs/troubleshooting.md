---
title: Troubleshooting
description: What to do when a data source needs attention, numbers look wrong, or you can't sign in.
---

## A data source needs attention

When a data source can't collect, it shows **Needs attention** and keeps your existing history. Work through these steps:

1. **Read the message.** Open the project page or **Project settings**. The data source shows the last collection issue and when it happened.
2. **Check access at the provider.** Most failures come from a removed permission, a regenerated key or an expired token. Sign in to the provider and make sure the account Metribay uses can still see the resource.
3. **Update the credentials** if they changed. See [Connected accounts](../connected-accounts/#update-or-rotate-credentials).
4. **Test it.** Owners can select **Check provider access** in **Project settings**. Then select **Sync now**.

The integration guides list the most common problems for each provider:
[Google Analytics 4](../integrations/google-analytics/#if-collection-fails) ·
[Search Console](../integrations/search-console/#if-collection-fails) ·
[Bing](../integrations/bing/#if-collection-fails) ·
[Umami](../integrations/umami/#if-collection-fails) ·
[GitHub](../integrations/github/) ·
[UptimeRobot](../integrations/uptimerobot/)

### Messages you might see

| Message | What it means |
|---|---|
| *Request limit reached; scheduled imports will retry* | The provider's request limit was reached for now. Nothing to do: the next scheduled sync tries again. |
| *Please wait N seconds before trying again* | You used **Sync now** or **Check provider access** very recently. Scheduled syncs carry on regardless. |
| *Collection needs attention. Reference: …* | Collection failed. The reference names the kind of problem. Check access and credentials as above. If it persists, email us the reference. |
| *Collection and changes are paused* | The account has no active plan. See [Plans and billing](../billing/#when-theres-no-active-plan). |

## The first import doesn't finish

First imports run in the background and usually finish within minutes. A long history window on a busy GitHub repository can take longer. If a data source still shows *Awaiting first sync* after an hour, select **Sync now**. If it turns to *Needs attention*, follow the steps above. For GitHub, a shorter history window can help.

## A resource doesn't appear in the list

Metribay only lists what the connected account can see.

- Give the account access at the provider (each integration guide shows how), then select **Refresh list**.
- Very large accounts show up to 2,000 resources. Use the filter, or **Enter it manually**.
- In Metribay Cloud, editors can't browse accounts. They enter the resource manually, or ask an owner.

## The numbers look wrong

**A data source shows a dash.** No reliable total is available. That's not zero. See [A dash is not a zero](../reading-the-numbers/#a-dash-is-not-a-zero).

**Numbers differ from the provider's own dashboard.** Check that you compare the same days in the same timezone. Search Console counts in Pacific time, and Umami's dashboard uses your browser's timezone. See [Timezones](../reading-the-numbers/#timezones).

**Visitors look lower than the sum of the days.** That's correct: someone who visits on two days is one visitor for the period. See [How period totals work](../reading-the-numbers/#how-period-totals-work).

**Yesterday's number changed.** Providers finalise recent days late, and Metribay updates them. See [Partial and provisional data](../reading-the-numbers/#partial-and-provisional-data).

**A sudden drop to zero or near zero.** Often a tracking change, like a missing analytics script after a redesign, or a new consent banner. Check the provider's own dashboard. If it shows the same, the data is right.

**The data source shows *Delayed*.** The newest data is more than three days old. Search Console and Bing sometimes publish late. It usually resolves itself.

## You can't sign in

- **Forgot your password?** Use **Forgot password** on the sign-in page.
- **No sign-up email?** Check spam. Sign-up links expire after one hour; start again from the sign-up page.
- **Lost your two-factor device?** Use one of your recovery codes in place of the authentication code. Without them, [email us](mailto:rob@worbee.com).
- **Invited, but can't see the workspace?** Make sure you signed in with the email address the invitation was sent to, and that it hasn't expired (72 hours). Ask for a new invitation if needed.

## Still stuck?

Email [rob@worbee.com](mailto:rob@worbee.com) with:

- the project and data source name,
- what you expected and what you see,
- any message or reference shown in Metribay.

Please **never send passwords, API keys or tokens** by email. We'll never ask for them.
