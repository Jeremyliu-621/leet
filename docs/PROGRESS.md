# LeetLock — Progress Tracker

> **This is the single source of truth for project state. Read it first every loop iteration.**
> Protocol: pick the next unchecked `[ ]` task in the earliest incomplete phase → implement →
> typecheck + test → commit + push → check it off here → update the header below.

---

**Last updated:** 2026-05-21
**Current phase:** Phase 1 — Toolchain & scaffold
**Current focus:** Wiring the Vite + CRXJS + React + Tailwind toolchain so `npm run build` works.
**Build status:** 🔴 not yet building (scaffold in progress)
**Next up:** Install dependencies, then write Vite/TS/Tailwind config and `manifest.config.ts`.

---

## Phase 0 — Foundation & docs ✅

- [x] Initialize repo files: `.gitignore`, `LICENSE`, `README.md`, `package.json`
- [x] Repurpose `CLAUDE.md` into the project guide + autonomous loop protocol
- [x] Competitive + MV3 research → `docs/RESEARCH.md`
- [x] `docs/BUILD_PLAN.md` — architecture, file structure, flows, roadmap, risks
- [x] `docs/DATA_MODEL.md` — storage schema
- [x] `docs/DECISIONS.md` — decision log seeded
- [x] `docs/PROGRESS.md` — this tracker

## Phase 1 — Toolchain & scaffold

- [ ] Install dependencies (React, Vite, CRXJS, Tailwind v3, CodeMirror, types, Vitest, resvg)
- [ ] `tsconfig.json` + `tsconfig.node.json` (strict)
- [ ] `vite.config.ts` wiring CRXJS + React
- [ ] Tailwind v3 config + `postcss.config.js` + `src/ui/styles/globals.css` with grayscale tokens
- [ ] `.prettierrc`
- [ ] `src/manifest.config.ts` — MV3 manifest (permissions, pages, sandbox, CSP, web_accessible_resources)
- [ ] `assets/logo.svg` + `scripts/generate-icons.mjs` → generate `public/icons/*`
- [ ] Stub all five surfaces so the project builds: popup, options, challenge, blocked, sandbox pages + service worker + content script
- [ ] Verify `npm run build` produces a loadable `dist/`; verify `npm run typecheck`
- [ ] Set up Vitest; add one smoke test

## Phase 2 — Data layer

- [ ] `src/lib/types.ts` — all shared domain types
- [ ] `src/lib/storage/schema.ts` + `defaults.ts` — keys, areas, default values
- [ ] `src/lib/storage/store.ts` — typed get/set wrapper, area-aware, quota-error-safe + tests
- [ ] `src/lib/problems/types.ts` — `Problem`, `TestCase`, `ProblemExample`
- [ ] `src/lib/problems/bank/` — author 12+ original easy problems with visible + hidden tests
- [ ] `src/lib/problems/index.ts` — bank registry + selector (by difficulty/tags)
- [ ] `test/problem-bank.test.ts` — validate every problem against its reference solution
- [ ] Tests for the problem selector

## Phase 3 — Code runner

- [ ] `src/runner/worker.js` — runs user JS against test cases, structured results
- [ ] `src/pages/sandbox/` — sandbox host page that owns the Worker + hard timeout
- [ ] `src/lib/judge/judge.ts` — challenge-side API: post code+tests, await verdict
- [ ] `src/lib/messaging/messages.ts` — typed message contracts
- [ ] Deep-equality comparison for expected vs actual + tests
- [ ] Tests: timeout, runtime error, wrong answer, all-pass, malformed code

## Phase 4 — Challenge UI

- [ ] Challenge page layout: left problem panel, top-right meta (timer/reward/streak), editor panel
- [ ] Problem panel: title, difficulty, tags, description, examples, constraints
- [ ] CodeMirror 6 editor + grayscale theme + language selector (JS only for now)
- [ ] Test-case panel + Run button (visible tests) + Submit button (all tests)
- [ ] Countdown timer wired to `challengeTimeLimitSec`
- [ ] Verdict states: running, passed, failed, error, timeout
- [ ] Empty/loading/error states

## Phase 5 — Blocking engine

- [ ] `src/lib/blocking/matcher.ts` — match a URL against block + keyword rules (+ tests)
- [ ] `src/lib/blocking/dnr.ts` — build DNR dynamic rules from rule sets (+ tests)
- [ ] Service worker: install/startup, rule reconciliation, `storage.onChanged` handling
- [ ] Service worker: redirect blocked navigations to the challenge page
- [ ] Content script: detect SPA route changes, blank page at `document_start`, ask SW to redirect
- [ ] `webNavigation.onHistoryStateUpdated` handling

## Phase 6 — Unlock system (→ demoable vertical slice)

- [ ] `src/lib/unlock/tokens.ts` — create/validate/prune unlock tokens (+ tests)
- [ ] On solve: write token, remove the domain's DNR rule, redirect tab back to target
- [ ] `chrome.alarms` + reconcile for token expiry → re-arm the DNR rule
- [ ] Record `SolvedProblemRecord`
- [ ] End-to-end check: block → challenge → solve → timed access → expiry → challenge again

## Phase 7 — Failure handling

- [ ] Failure on timeout / give-up / attempt-limit
- [ ] `failureAction`: close tab vs redirect to blocked page
- [ ] Blocked page UI (calm, minimal)
- [ ] Strict mode disables give-up

## Phase 8 — Settings page

- [ ] Options page shell + navigation
- [ ] Blocked sites + keyword triggers editors
- [ ] Difficulty + category/tag selectors
- [ ] Challenge time limit + unlock duration controls
- [ ] Failure action config
- [ ] Strict mode toggle + settings cooldown duration
- [ ] Sync status indicator

## Phase 9 — Anti-bypass / commitment

- [ ] Cooldown pipeline: strictness-reducing changes deferred via `CooldownPendingChange`
- [ ] `src/lib/crypto/hash.ts` — salted SubtleCrypto hashing (+ tests)
- [ ] Password lock setup + enforcement on protected settings
- [ ] Accountability-partner code lock
- [ ] Strict mode hardening across surfaces
- [ ] Pending-changes review UI (list + cancel)

## Phase 10 — Streaks

- [ ] `src/lib/streak/streak.ts` — daily streak compute + damage rules (+ tests)
- [ ] Streak damage on disable / removed rule / failed challenge
- [ ] Subtle streak UI in popup + challenge header

## Phase 11 — Popup

- [ ] Popup: active unlocks, today's solves, streak, quick "open settings"
- [ ] Quick add-current-site-to-blocklist action

## Phase 12 — Polish, tests, CI

- [ ] Accessibility pass (focus, keyboard, contrast, ARIA)
- [ ] Edge-case sweep across all `src/lib` modules
- [ ] Raise unit-test coverage; integration tests for core flows
- [ ] GitHub Actions CI: typecheck + test + build
- [ ] README screenshots / demo notes

## Phase 13+ — Post-MVP

- [ ] Grow the problem bank to 100+ verified problems across more tags
- [ ] Python support via a sandboxed Pyodide runtime
- [ ] Analytics: focus stats, streak heatmap, per-site time-saved, settings import/export

---

## Notes

- 2026-05-21: Project bootstrapped. Research confirms the differentiation thesis — competitors
  redirect to leetcode.com and poll its unofficial API; LeetLock authors its own problems and runs
  code in-extension. See `docs/RESEARCH.md`.
- Toolchain risk to watch: `@crxjs/vite-plugin` is a v2 beta — Phase 1 must prove the build works
  before moving on (fallback documented in `DECISIONS.md` D2).
