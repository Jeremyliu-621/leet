# LeetLock — Progress Tracker

> **This is the single source of truth for project state. Read it first every loop iteration.**
> Protocol: pick the next unchecked `[ ]` task in the earliest incomplete phase → implement →
> typecheck + test → commit + push → check it off here → update the header below.

---

**Last updated:** 2026-05-23
**Current phase:** Phase 8 — Settings page
**Current focus:** Options UI — block-rules editor, keyword triggers, prefs form, lock setup,
pending-changes review.
**Build status:** 🟢 `npm run build` and `npm run test` green (159 tests across 13 files)
**Next up:** Spawn a UI agent for the settings page using the `frontend-design` skill; integrate
the password/partner-code lock (Phase 9) and the pending-changes review into that page.

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

## Phase 2 — Data layer ✅

- [x] `src/lib/types.ts` — all shared domain types
- [x] `src/lib/storage/schema.ts` + `defaults.ts` — keys, areas, default values
- [x] `src/lib/storage/store.ts` — typed get/set/update/remove wrapper, area-aware + tests
- [x] `src/lib/problems/types.ts` — `Problem`, `TestCase`, `ProblemExample`
- [x] `src/lib/problems/bank/` — 24 original easy problems (3 per tag) with visible + hidden tests
- [x] `src/lib/problems/index.ts` — bank registry + preference-aware selector
- [x] `test/problem-bank.test.ts` — every problem verified against its reference solution
- [x] Tests for the problem selector

## Phase 3 — Code runner ✅

- [x] `src/runner/worker.js` — runs user JS against test cases, structured results
- [x] `src/pages/sandbox/runner.ts` — sandbox host page that owns the Worker + hard timeout
- [x] `src/lib/judge/judge.ts` — challenge-side API: post code+tests, await verdict
- [x] `src/lib/messaging/messages.ts` — typed message contracts
- [x] Deep-equality comparison for expected vs actual + tests
- [x] Tests: timeout, runtime error, wrong answer, all-pass, malformed code (verdict judging)

> Note: the live Blob-Worker executing real user code under the sandbox CSP is browser-only and
> gets its first end-to-end exercise in Phase 4. The judging logic it feeds is fully unit-tested.

## Phase 4 — Challenge UI ✅

- [x] Challenge page layout: left problem panel, top-right meta (timer/reward/streak), editor panel
- [x] Problem panel: title, difficulty, tags, description, examples, constraints
- [x] CodeMirror 6 editor + grayscale theme + language selector (JS only for now)
- [x] Test-case panel + Run button (visible tests) + Submit button (all tests)
- [x] Countdown timer wired to `challengeTimeLimitSec`
- [x] Verdict states: running, passed, failed, error, timeout
- [x] Empty/loading/error states (`loading`, `no-problem`, `no-target` banner)

## Phase 5 — Blocking engine ✅

- [x] `src/lib/blocking/matcher.ts` — match a URL against block + keyword rules (+ tests)
- [x] `src/lib/blocking/dnr.ts` — build DNR dynamic rules from rule sets (+ tests)
- [x] Service worker: install/startup, alarm, `storage.onChanged` reconciliation
- [x] Service worker: redirect blocked navigations to the challenge page (via DNR + tabs.update)
- [x] Content script: detect SPA route changes (history hook + popstate); asks SW to redirect
- [x] `webNavigation.onHistoryStateUpdated` handling in the SW

> Page-blanking at `document_start` was deferred — the small flash before the SW redirects is
> acceptable for the MVP and tracked as a Phase 12 polish item.

## Phase 6 — Unlock system (→ demoable vertical slice) ✅

- [x] `src/lib/unlock/tokens.ts` — create/validate/prune unlock tokens (+ tests)
- [x] On solve: write token, remove the domain's DNR rule (reconcile), redirect tab back to target
- [x] `chrome.alarms` + reconcile for token expiry → re-arm the DNR rule
- [x] Record `SolvedProblemRecord` on grant-unlock (capped at 1000 entries)
- [x] End-to-end check: block → challenge → solve → timed access → expiry → challenge again

> The end-to-end loop is implemented in code; manual verification in real Chrome is documented in
> `TESTING.md` flow A and remains the last 5% (browser-only behaviour: live sandbox CSP, DNR
> redirect timing, real SPA detection).

## Phase 7 — Failure handling ✅

- [x] Failure on timeout / give-up / attempt-limit (challenge UI + SW handler)
- [x] `failureAction`: close tab vs redirect to blocked page (SW `failChallenge`)
- [x] Blocked page UI — calm, minimal, grayscale
- [x] Strict mode disables give-up (challenge UI honours `prefs.allowGiveUp`)

## Phase 8 — Settings page

- [ ] Options page shell + navigation
- [ ] Blocked sites + keyword triggers editors
- [ ] Difficulty + category/tag selectors
- [ ] Challenge time limit + unlock duration controls
- [ ] Failure action config
- [ ] Strict mode toggle + settings cooldown duration
- [ ] Sync status indicator

## Phase 9 — Anti-bypass / commitment 🟡

- [x] Cooldown pipeline lib — schedule/applicable/cancel/nextApply (+ tests)
- [x] `src/lib/crypto/hash.ts` — salted PBKDF2/SHA-256 via SubtleCrypto (+ tests)
- [ ] Password lock setup + enforcement on protected settings (needs Phase 8 UI)
- [ ] Accountability-partner code lock (needs Phase 8 UI)
- [ ] Strict mode hardening across surfaces (needs Phase 8 UI for full coverage)
- [ ] Pending-changes review UI — list + cancel (needs Phase 8 UI)

## Phase 10 — Streaks 🟡

- [x] `src/lib/streak/streak.ts` — daily streak compute + damage rules (+ tests)
- [x] Streak damage on failed challenge (SW `failChallenge` calls `recordFail`)
- [ ] Streak damage on disable / removed rule (needs Phase 8 hooks)
- [ ] Subtle streak UI in popup (Phase 11) + challenge header (placeholder is in place)

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
- 2026-05-22: Phase 2 done — 24 verified problems (3 per tag), typed area-aware storage layer, and
  a preference-aware problem selector that relaxes its filter so a challenge can always be shown.
- 2026-05-22: Phase 3 done — sandboxed Blob-Worker code runner with a hard timeout, plus
  deep-equality and verdict judging, all unit-tested. 84 tests passing overall.
- Phase 4 guidance: the challenge page should use `runTests` from `src/lib/judge` for Run/Submit,
  `pickChallengeProblem` from `src/lib/problems` to choose a problem, and CodeMirror 6 for the
  editor. The `target` blocked URL arrives as a `?target=` query param on `challenge.html`.
- 2026-05-23: Phases 4–7 done in one cycle. Challenge UI built by a `ui-generator-reviewer`
  agent (Challenge.tsx + 4 sub-components + grayscale CodeMirror theme + 33 helper tests).
  Blocking engine (matcher + DNR builder), unlock tokens, full service worker, content script,
  and Blocked page all implemented. 75 new tests added (159 total). The end-to-end "block → solve
  → timed unlock" loop is wired in code; manual browser verification documented in `TESTING.md`.
- 2026-05-23: Phases 9 and 10 are partial — all the *lib* code is done and tested (crypto, streak,
  cooldown), but the UI integration of password/partner locks, pending-changes review, and the
  streak display in the popup must wait for Phases 8 (Settings page) and 11 (popup).
