# LeetMeow — Privacy Policy

_Last updated: 2026-06-08_

LeetMeow is a Chrome extension that blocks distracting websites until you solve a
short coding problem to earn timed access. This policy explains exactly what data
the extension handles. The short version: **your data stays on your device.**
LeetMeow has no backend server, no analytics, no tracking, and no advertising.

## What LeetMeow stores (on your device only)

All of the following is kept in Chrome's local/synced extension storage on your
own computer and is never transmitted to us:

- **Settings** — your blocked sites, difficulty/topic/list/mode filters, time
  limits, theme, and editor preferences.
- **Progress** — your streak, solved-problem history, and time invested.
- **Editor drafts** — in-progress code for the current challenge.
- **AI key** — if you choose to use AI hints, your Google Gemini API key is
  stored **locally only** (`chrome.storage.local`). It is never synced through
  your Google account and never sent anywhere except Google's Gemini API (below).

Chrome may sync your **settings** across your own devices if you have Chrome Sync
enabled; that synchronization is performed by Google under your Google account,
not by us.

## Data sent to third parties (only when you choose to use a feature)

LeetMeow contacts an external service in exactly two optional cases:

1. **AI hints (Google Gemini).** If you enable AI hints and request one, the
   current problem and your code are sent to Google's Gemini API using **your
   own API key**, solely to generate the hint. This is governed by
   [Google's Privacy Policy](https://policies.google.com/privacy). If you never
   enable AI hints, nothing is sent.

2. **Feedback form (Web3Forms).** If you submit feedback through the in-app form,
   your message and the optional reply-to email you provide are sent via
   [Web3Forms](https://web3forms.com) to deliver it to the maintainers' inbox.
   This happens only when you submit the form. Your feedback is also saved
   locally on your device.

LeetMeow does **not** collect or transmit your browsing history. The
`<all_urls>` host permission exists only so the blocking rules can apply to any
site you choose to block; the extension does not read or send the contents of the
pages you visit.

## Permissions and why they're needed

- `storage` — save your settings, progress, drafts, and (optional) AI key locally.
- `tabs` — open the challenge page and return you to your site after you unlock it.
- `declarativeNetRequest` — redirect a blocked site to the challenge gate.
- `webNavigation` — detect navigation to a site you've blocked.
- `alarms` — expire timed unlocks when they run out.
- `host_permissions: <all_urls>` — allow blocking rules to apply to any site you choose.

## Data retention and deletion

Because data lives on your device, you control it. Clear it any time from the
extension's Settings, by removing individual items, or by uninstalling the
extension (which removes all locally stored data).

## Children

LeetMeow is a productivity/study tool not directed at children under 13 and does
not knowingly collect personal information from them.

## Changes

Material changes to this policy will be reflected here with an updated date.

## Contact

Questions? Email **jeremyliu621@gmail.com**.
