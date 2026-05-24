# LeetLock

[![CI](https://github.com/Jeremyliu-621/leet/actions/workflows/ci.yml/badge.svg)](https://github.com/Jeremyliu-621/leet/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-2A2A2A?style=flat-square)](LICENSE)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-2A2A2A?style=flat-square&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/develop/migrate)

**Turn distracting websites into mini coding-interview gates: solve a problem, earn timed access.**

LeetLock is a Chrome extension (Manifest V3) for programmers who want to stop doom-scrolling
without pretending willpower is enough. When you open a blocked site, LeetLock replaces the page
with a clean, native coding challenge. Solve it inside the time limit and you earn a configurable
window of access. Fail, give up, or run out of time and the tab closes or redirects to a calm
blocked page.

> Think *Cold Turkey for CS students* — except every distraction charges you one algorithm problem.

---

## Status

🚧 **MVP in active development.** This repository is being built iteratively. See
[`docs/PROGRESS.md`](docs/PROGRESS.md) for the live task tracker and
[`docs/BUILD_PLAN.md`](docs/BUILD_PLAN.md) for the architecture and roadmap.

## How it works

1. You define blocked **domains**, **full URLs**, or **URL keyword patterns** (`shorts`, `reels`, …).
2. When a tab matches a rule and you have no active unlock, the navigation is redirected to the
   LeetLock **challenge screen** — a focused, LeetCode-style problem page.
3. You write a JavaScript solution. **Run** checks visible examples; **Submit** runs hidden tests.
4. Pass every test inside the time limit → LeetLock grants a timed **unlock token** for that domain.
5. The unlock expires → the next visit triggers a fresh challenge.
6. Give up / time out / exhaust your attempts → the tab closes or shows the blocked page.

Commitment features (settings cooldown, password lock, accountability-partner lock, streaks, and a
stricter "strict mode") make the gate hard to wave away in a moment of weakness — within the honest
limits of what a Chrome extension can enforce (see below).

## Features (MVP scope)

- **Block rules** — domains, full URLs, and URL keyword patterns.
- **Native challenge screen** — problem, examples, constraints, in-page code editor, test runner.
- **Local problem bank** — original problems across arrays, strings, hash maps, two pointers,
  sliding window, binary search, and stacks. JavaScript first.
- **Unlock economy** — configurable challenge time limit and unlock duration, per-domain tokens.
- **Failure handling** — configurable: close the tab or redirect to a calm blocked page.
- **Anti-bypass / commitment** — settings-change cooldown, password lock, accountability-partner
  lock, streak damage on disable/fail, `chrome.storage.sync` for cross-device settings, strict mode.
- **Settings page** — full control over rules, difficulty, categories, timings, and locks.

## Tech stack

| Concern        | Choice                                        |
| -------------- | --------------------------------------------- |
| Platform       | Chrome Extension, Manifest V3                 |
| Build          | Vite + `@crxjs/vite-plugin`                   |
| UI             | React + TypeScript                            |
| Styling        | Tailwind CSS (custom grayscale design system) |
| Code editor    | CodeMirror 6                                  |
| Code execution | Sandboxed extension page + Web Worker         |
| Storage        | `chrome.storage.local` + `chrome.storage.sync`|

## Getting started (development)

```bash
npm install
npm run icons     # generate extension icons (one-time / on logo change)
npm run build     # type-check + build to dist/
```

Then load it in Chrome:

1. Open `chrome://extensions`.
2. Enable **Developer mode**.
3. Click **Load unpacked** and select the `dist/` folder.

`npm run dev` runs Vite with HMR for faster iteration on the extension pages.

## What LeetLock can and can't do (honest limits)

Manifest V3 and the Chrome extension model impose real constraints. LeetLock is built to be honest
about them:

- ✅ It **can** intercept and redirect navigations to blocked sites, gate access behind a real
  challenge, add friction to changing settings, and sync settings across your signed-in Chrome
  profiles.
- ⚠️ It **cannot** truly prevent its own uninstallation or disabling. A determined user can remove
  any extension from `chrome://extensions`. LeetLock instead raises the *cost* of bypassing
  (cooldowns, password/partner locks, streak loss) so a relapse is a deliberate, friction-heavy
  choice rather than a reflex.
- ⚠️ Single-page-app route changes (e.g. `youtube.com` → `youtube.com/shorts`) do not trigger
  network requests, so a content script — not just network rules — is required to catch them.

See [`docs/RESEARCH.md`](docs/RESEARCH.md) for the full constraint analysis.

## Documentation

| Doc                                          | Purpose                                            |
| --------------------------------------------- | -------------------------------------------------- |
| [`CLAUDE.md`](CLAUDE.md)                      | Project guide + autonomous build protocol          |
| [`docs/RESEARCH.md`](docs/RESEARCH.md)        | Competitive landscape + MV3 technical constraints  |
| [`docs/BUILD_PLAN.md`](docs/BUILD_PLAN.md)    | Architecture, file structure, flows, roadmap       |
| [`docs/DATA_MODEL.md`](docs/DATA_MODEL.md)    | Storage schema (local + sync)                      |
| [`docs/DECISIONS.md`](docs/DECISIONS.md)      | Decision log                                       |
| [`docs/PROGRESS.md`](docs/PROGRESS.md)        | Live task tracker                                  |

## License

[MIT](LICENSE) © 2026 Jeremy Liu
