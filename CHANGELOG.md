# Changelog

All notable changes to LeetLock are recorded here.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/);
this project follows [Semantic Versioning](https://semver.org/) (0.x while
pre-stable).

## [Unreleased]

### Added
- **Full solve-and-unlock e2e test** (`e2e/solve-flow.spec.ts`) — loads the
  built extension into real Chromium, identifies which problem the bank
  picked, injects the matching reference solution into the CodeMirror editor,
  clicks Submit, and verifies the service worker writes an unlock token for
  the target domain. Proves the entire vertical slice (bank → judge →
  sandbox Worker → SW grant handler → storage) works end-to-end.

## [0.1.0] — 2026-05-24 — First complete release

The first end-to-end-working release of LeetLock — a Chrome Manifest V3
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
- `npm run package` produces `leetlock-<version>.zip` ready for the Chrome
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

LeetLock cannot truly prevent its own uninstall. The extension raises
*friction* (settings cooldown, password lock, partner code, streak loss) so a
relapse is a deliberate, high-cost choice — not a hard guarantee. The README
and `docs/RESEARCH.md` §8 document the limits in detail.

### Install (unpacked)

1. Download `leetlock-0.1.0.zip` from the GitHub release.
2. Unzip.
3. Open `chrome://extensions`, enable Developer mode, click **Load unpacked**,
   select the unzipped folder.

Chrome Web Store listing is the next milestone after a manual review pass.
