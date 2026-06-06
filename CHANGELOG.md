# Changelog

All notable changes to LeetMeow are recorded here.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/);
this project follows [Semantic Versioning](https://semver.org/) (0.x while
pre-stable).

## [Unreleased]

### Added
- **Markdown problem descriptions** — `description` is now GFM-flavoured
  markdown via `react-markdown`, rendered through a custom grayscale
  component map. Plain-text descriptions still render cleanly so the rest of
  the bank keeps working. Raw HTML is disabled at the renderer (problem
  content ships in the extension bundle, no script-injection surface).
- **Progressive hints** on problems via an optional `hints?: readonly
  string[]` field. Hints are markdown-rendered, revealed one at a time by
  explicit user click, and **cost one minute off the challenge timer per
  reveal** — brand-aligned: friction is the point. Wired up on three bank
  problems (`two-sum-indices`, `running-sum`, `balanced-brackets`).
- **First-run quick-start** in the popup — when the user has zero block
  rules, a chip row surfaces five common distractions
  (`youtube.com`, `reddit.com`, `x.com`, `instagram.com`, `tiktok.com`) for
  one-click adds. Disappears as soon as any rule exists.
- **Editor font-size preference** (`S` / `M` / `L` / `XL` = 11 / 13 / 15 /
  17 px) — persisted, sync'd across devices, applied via a CSS variable so
  every CodeMirror instance picks it up without rebuild.
- **Pyodide rollout — M1 through M4 shipped** (see `docs/PYODIDE_PLAN.md`):
  - **M1** — `SupportedLanguage` widened to `'javascript' | 'python'`;
    `Problem.starterCode` requires JS, allows Python; `RunRequest.language`
    optional; `UserPreferences.preferredLanguage` added.
  - **M2** — Vendored `pyodide-core 0.29.4` (11.7 MB) into `public/pyodide/`;
    `pyodide/*` is web-accessible; sandbox CSP gains `wasm-unsafe-eval`.
  - **M3** — `src/runner/python-worker.js`: a long-lived Blob worker that
    `importScripts`-loads Pyodide once from the bundled files and mirrors the
    existing `RunRequest`/`RunResponse` contract. Sandbox host dispatches
    by `request.language`; the warm Python worker is terminated only on
    timeout (next request re-pays the ~1–2 s Pyodide boot). Fresh per-run
    Python globals so submissions can't cross-contaminate. **One real bug
    caught by e2e:** sandboxed pages can't access `chrome.runtime` — the
    Pyodide base URL now derives from the sandbox's own `window.location`.
  - **M4** — `@codemirror/lang-python` + `Compartment`-driven language swap
    in the editor; a segmented **JS | Py** selector renders only when a
    problem ships starter code for more than one language; switching
    persists `UserPreferences.preferredLanguage`. **No problem ships Python
    starter yet** — M5 lights up the first one.
- 8 more bank problems (one per tag) enriched with markdown formatting and
  progressive hints — 11/24 problems now have hints, 24 new hints added.
- **Light / dark / system theme** via CSS variables and a `data-theme`
  attribute on `<html>`. Both palettes are pure grayscale, zero hue. A
  three-way switcher lives in the popup; `system` follows the OS theme via
  `prefers-color-scheme` and re-applies live when the OS flips.
- **Editor QoL** in the challenge screen's CodeMirror 6:
  - Auto-close brackets / quotes (`@codemirror/autocomplete`).
  - Basic JS autocomplete (`autocompletion()`).
  - Find / replace panel (`@codemirror/search`, `Cmd/Ctrl-F`).
  - Active-line + active-gutter highlight, selection-match highlight.
  - Code-folding gutter + keymap.
  - Multi-cursor (`EditorState.allowMultipleSelections` + `drawSelection`).
  - **`Cmd/Ctrl + Enter` = Run, `Cmd/Ctrl + Shift + Enter` = Submit,
    `Alt + R` = reset to starter code.** Shortcut hint rendered in the
    action bar.
- **Tab-close confirmation** while a challenge is in progress — `beforeunload`
  prompt suppressed during programmatic navigation (accepted → target, or
  failure → SW) so legit flows don't trigger it.
- **Full solve-and-unlock e2e test** (`e2e/solve-flow.spec.ts`) — loads the
  built extension into real Chromium, identifies which problem the bank
  picked, injects the matching reference solution into the CodeMirror editor,
  clicks Submit, and verifies the service worker writes an unlock token for
  the target domain.
- `docs/LEETCODE_PARITY.md` — research deliverable enumerating every visible
  LeetCode editor / problem-page feature, whether LeetMeow has it, and
  prioritised next steps.
- **Accessibility baseline** — axe-core/playwright integration in
  `e2e/a11y.spec.ts` audits all four extension surfaces. Fails on critical
  WCAG violations; logs serious/moderate/minor findings as the next
  polish-pass baseline.

### Fixed
- **Solve → unlock bounces back into a new challenge (real-user bug)** —
  blocking `youtube.com` and solving while on `www.youtube.com` (where
  YouTube redirects you) re-blocked the navigation; same for keyword
  `instagram` on `www.instagram.com`. The unlock token was stored for the
  full subdomain host, but the DNR rule's host was the registrable, so the
  string-equality check `unlockedDomains.has(host)` missed it. Keyword rules
  had no unlock awareness at all. **Fix:** block-rules check unlock by
  *domain family* (equal / parent / subdomain in either direction); keyword
  rules emit `excludedRequestDomains` covering the unlocked host *and* its
  parent. See `docs/DECISIONS.md` D16. Covered by `e2e/user-bug.spec.ts`
  exercising the user's exact rule set against real Chromium.
- **Earlier solve-unlock race** — `grantUnlock` now `await reconcile()`
  before responding so the DNR update is definitively committed before the
  challenge's `window.location.href = target` fires.

## [0.1.0] — 2026-05-24 — First complete release

The first end-to-end-working release of LeetMeow — a Chrome Manifest V3
extension that intercepts distracting sites and gates them behind a coding
problem.

### Added

**Core flow**
- Manifest V3 extension with five surfaces: popup, options, challenge, blocked,
  sandbox host.
- Blocking engine: `declarativeNetRequest` dynamic rules redirect blocked
  navigations to the challenge page; a content script + the service worker's
  `webNavigation.onHistoryStateUpdated` listener catch SPA route changes that
  fire no network request.
- Unlock token system: solving a problem grants timed access to the domain;
  the SW removes the DNR rule until `expiresAt`, then re-arms it via
  `chrome.alarms`.

**Problem bank**
- 24 original easy problems across arrays, strings, hash-map, two-pointers,
  sliding-window, binary-search, stack, and math (three per tag).
- Every problem ships with visible + hidden tests verified by a reference
  solution in `test/bank-solutions.ts`.

**Code runner**
- Sandboxed extension page hosts a Blob Web Worker that executes user JS with
  a hard wall-clock timeout (kills infinite loops via `worker.terminate()`).
- Challenge-side judge with structural deep-equality and a discriminated
  verdict type (accepted / wrong-answer / runtime-error / timeout /
  compile-error).
- CodeMirror 6 editor with a custom grayscale theme.

**Anti-bypass**
- Strictness-reducing settings changes are deferred via a `cooldownPendingChange`
  pipeline; the SW applies them on reconcile and damages the streak.
- PBKDF2/SHA-256 password lock + accountability-partner code lock (salted
  hashes via SubtleCrypto; plaintext is never stored).
- Daily streak tracking with damage on fail, on disable, and on rule removal.
- Cross-device sync via `chrome.storage.sync` for rules, prefs, locks, and
  pending changes.

**Settings**
- Full options page covering block rules, keyword triggers, difficulty / tag
  selection, challenge timing, failure action, strict mode, settings cooldown,
  password lock, accountability partner, pending-changes review, sync status,
  and reset.

**Popup**
- Today's solves, current/longest streak, active unlocks, one-click "block
  this site", and quick access to settings.

**Quality**
- 259 tests (249 Vitest + 10 Playwright). Vitest covers every pure `src/lib`
  module plus the full SW reconcile pipeline against an in-memory `chrome`.
  Playwright loads the built `dist/` into real Chromium and verifies:
  - The service worker registers.
  - Popup, options, and challenge pages mount.
  - **Navigating to a blocked host is intercepted and redirected to the
    challenge page** (the gate, end-to-end).
  - **A domain with an active unlock token bypasses the gate.**
- GitHub Actions CI runs typecheck + tests + build on every push.
- `npm run package` produces `leetmeow-<version>.zip` ready for the Chrome
  Web Store.

### Fixed

- CRXJS was shipping the HTML referenced from `web_accessible_resources`
  (challenge, blocked) and `sandbox.pages` (sandbox) **raw** — with `./main.tsx`
  / `./runner.ts` script sources that Chrome cannot resolve. The challenge
  page never rendered when loaded as an unpacked extension. Fixed by listing
  those pages as explicit `build.rollupOptions.input` entries. See
  `docs/DECISIONS.md` D15. Caught by the Playwright e2e suite — the exact
  bug class only real-browser end-to-end testing surfaces.

### Honest about MV3 limits

LeetMeow cannot truly prevent its own uninstall. The extension raises
*friction* (settings cooldown, password lock, partner code, streak loss) so a
relapse is a deliberate, high-cost choice — not a hard guarantee. The README
and `docs/RESEARCH.md` §8 document the limits in detail.

### Install (unpacked)

1. Download `leetmeow-0.1.0.zip` from the GitHub release.
2. Unzip.
3. Open `chrome://extensions`, enable Developer mode, click **Load unpacked**,
   select the unzipped folder.

Chrome Web Store listing is the next milestone after a manual review pass.
