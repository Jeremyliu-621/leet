# LeetLock — Progress Tracker

> **This is the single source of truth for project state. Read it first every loop iteration.**
> Protocol: pick the next unchecked `[ ]` task in the earliest incomplete phase → implement →
> typecheck + test → commit + push → check it off here → update the header below.

---

**Last updated:** 2026-05-21
**Current phase:** Phase 2 — Data layer
**Current focus:** Domain types, the typed storage wrapper, and the problem bank.
**Build status:** 🟢 `npm run build`, `npm run typecheck`, `npm run test` all green
**Next up:** Write `src/lib/types.ts` — the shared domain types.

---

## Phase 0 — Foundation & docs ✅

- [x] Initialize repo files: `.gitignore`, `LICENSE`, `README.md`, `package.json`
- [x] Repurpose `CLAUDE.md` into the project guide + autonomous loop protocol
- [x] Competitive + MV3 research → `docs/RESEARCH.md`
- [x] `docs/BUILD_PLAN.md` — architecture, file structure, flows, roadmap, risks
- [x] `docs/DATA_MODEL.md` — storage schema
- [x] `docs/DECISIONS.md` — decision log seeded
- [x] `docs/PROGRESS.md` — this tracker

## Phase 1 — Toolchain & scaffold ✅

- [x] Install dependencies (React 19, Vite 7, CRXJS 2.4, Tailwind v3, CodeMirror 6, Vitest, resvg)
- [x] `tsconfig.json` (strict; single config covering `src`, `test`, and config files)
- [x] `vite.config.ts` wiring CRXJS + React
- [x] Tailwind v3 config + `postcss.config.js` + `src/ui/styles/globals.css` with grayscale tokens
- [x] `.prettierrc` + `.gitattributes`
- [x] `src/manifest.config.ts` — MV3 manifest (permissions, pages, sandbox, CSP, web_accessible_resources)
- [x] `assets/logo.svg` + `scripts/generate-icons.mjs` → generated `public/icons/*`
- [x] Stub all five surfaces: popup, options, challenge, blocked, sandbox + service worker + content script
- [x] Verified `npm run build` produces a loadable `dist/` (manifest + all pages + SW + content script)
- [x] Vitest configured (`vitest.config.ts`) + passing smoke test

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
- 2026-05-21: Phase 1 done. Toolchain verified — `@crxjs/vite-plugin` v2 is stable (2.4.0); pinned
  Vite 7 + `@vitejs/plugin-react` 5 for a fully compatible trio (`DECISIONS.md` D2, D12). The dist
  `manifest.json` correctly resolves all five page surfaces, the SW loader, and the content script.
