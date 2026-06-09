# Chrome Web Store submission guide

Everything needed to publish LeetMeow. Build the upload artifact, then work
through the dashboard tabs using the copy and answers below.

## 1. Build the upload ZIP

```bash
npm run build      # production build → dist/ (no source maps)
npm run package    # zips dist/ → leetmeow-<version>.zip
```

Upload `leetmeow-<version>.zip` under **New item**. The `manifest.json` sits at
the top level of the zip, which is what the store requires.

> One-time setup: a Chrome Web Store developer account requires a single **$5**
> registration fee before you can publish.

## 2. Store listing tab

- **Name:** LeetMeow
- **Summary (≤132 chars):** Turn distracting websites into mini coding-interview gates. Solve a problem, earn timed access.
- **Category:** Productivity
- **Language:** English

**Detailed description** (paste/adjust):

```
LeetMeow turns your worst time-sinks into practice reps. Block the sites that
derail you — YouTube, Reddit, X, Instagram, TikTok, or anything else — and when
you try to open one, LeetMeow gives you a coding problem instead. Solve it to
earn a few minutes of access.

• Cold-turkey style blocking, but every distraction costs you one algorithm problem
• A real in-browser editor (CodeMirror) with multiple languages, vim/emacs keymaps, and themes
• A curated local problem bank — LeetCode-style "solve from scratch" and "find the bug" debugging problems
• Filter by difficulty, topic, curated list (Blind 75, NeetCode 150, …), and mode
• Optional AI hints using your own Google Gemini API key (stored only on your device)
• Streaks, solve history, and time-invested tracking
• Pure-grayscale, distraction-free design with light/dark and several editor themes

Everything runs locally. No account, no tracking, no analytics.
```

**Graphic assets required:**
- Store icon: 128×128 PNG (already in the manifest).
- Screenshots: at least one, **1280×800** or 640×400 PNG/JPEG. Suggested shots:
  the popup with filters, the challenge/editor page, the blocked-site gate, and
  Settings.
- (Optional) Small promo tile 440×280.

## 3. Privacy practices tab

- **Single purpose:**
  > Blocks user-chosen distracting websites until the user solves a coding problem to earn timed access.

- **Permission justifications:**
  | Permission | Justification |
  | --- | --- |
  | `storage` | Save the user's settings, progress, editor drafts, and optional AI key locally on the device. |
  | `tabs` | Open the challenge page and return the user to their site after they unlock it. |
  | `declarativeNetRequest` | Redirect a blocked site to the challenge gate page. |
  | `webNavigation` | Detect navigation to a site the user has chosen to block. |
  | `alarms` | Expire timed unlocks when their duration runs out. |
  | `host_permissions` (`<all_urls>`) | The user can block any site, so blocking rules must be able to apply to all URLs. The extension does not read or transmit page contents. |

- **Remote code:** No. All code is bundled in the package; nothing is fetched and executed at runtime.

- **Data usage disclosures** (check these honestly):
  - LeetMeow does **not** collect or transmit personal/browsing data to us.
  - Optional outbound data, only on explicit user action:
    - **AI hints** → the problem + the user's code is sent to **Google Gemini** using the user's own API key.
    - **Feedback form** → the user's message + optional reply-to email is sent via **Web3Forms** to email the maintainers.
  - You are **not** selling data, not using it for unrelated purposes, not using it for creditworthiness/lending.

- **Privacy policy URL:** required. Host `docs/PRIVACY.md` (e.g. GitHub Pages or a
  gist rendered page) and paste the public URL here.

## 4. Distribution tab

- Visibility: Public (or Unlisted while testing).
- Regions: all, unless you want to restrict.

## 5. Submit for review

Click **Submit for review**. Reviews typically take a few hours to a few days;
the `<all_urls>` host permission can lengthen it. You'll be emailed the result.

## Pre-submit checklist

- [ ] Paid the one-time $5 developer fee
- [ ] `npm run build && npm run package` produced a fresh `leetmeow-<version>.zip`
- [ ] Bumped `version` in `src/manifest.config.ts` if this is an update
- [ ] At least one 1280×800 screenshot prepared
- [ ] Privacy policy hosted and URL ready
- [ ] Permission justifications filled in (table above)
- [ ] Web3Forms keys decided (leaving `FEEDBACK_FORM_KEYS` empty keeps feedback local-only)
```
