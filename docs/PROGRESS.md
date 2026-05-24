# LeetLock — Progress Tracker

> **This is the single source of truth for project state. Read it first every loop iteration.**
> Protocol: pick the next unchecked `[ ]` task in the earliest incomplete phase → implement →
> typecheck + test → commit + push → check it off here → update the header below.

---

**Last updated:** 2026-05-24
**Current phase:** Phase 13 — Post-MVP polish
**Current focus:** 85 problems across all difficulty tiers; bank expansion complete.
**Build status:** 🟢 `npm run typecheck` + `npm run test` green (505 unit tests across 22 files).
**Next up:** Marketing site iteration + Vercel deployment; edge-case sweep of remaining lib modules.

**Pyodide rollout status — COMPLETE:**
- ✅ M1 — Type plumbing.
- ✅ M2 — Vendored `pyodide-core 0.29.4` + WAR + CSP.
- ✅ M3 — Python worker + sandbox dispatch. Sandbox-`chrome.runtime` regression caught by e2e + fixed.
- ✅ M4 — `@codemirror/lang-python` + Compartment-driven JS|Py selector.
- ✅ M5 — First Python problem (`two-sum-indices`) + Pyodide-in-Node test suite + real-browser e2e.
  E2e caught the partial-prefs `NaN expiresAt` bounce-back bug — fixed.
- ✅ M6 — Backfilled Python for all 23 remaining bank problems, batched by tag (8 batches).
- ✅ M7 — Warm-Pyodide-on-challenge-mount (hides ~1–2 s cold boot during reading time);
  `chrome.storage.local` boot-time + run-count ring buffer; Options "About this extension" card
  surfacing the numbers with bundled-not-fetched reassurance copy.

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

## Phase 8 — Settings page ✅

- [x] Options page shell + navigation
- [x] Blocked sites + keyword triggers editors
- [x] Difficulty + category/tag selectors
- [x] Challenge time limit + unlock duration controls
- [x] Failure action config
- [x] Strict mode toggle + settings cooldown duration
- [x] Sync status indicator

## Phase 9 — Anti-bypass / commitment 🟡

- [x] Cooldown pipeline lib — schedule/applicable/cancel/nextApply (+ tests)
- [x] `src/lib/crypto/hash.ts` — salted PBKDF2/SHA-256 via SubtleCrypto (+ tests)
- [x] Password lock setup + enforcement on protected settings
- [x] Accountability-partner code lock
- [x] Strict mode hardening across surfaces
- [x] Pending-changes review UI — list + cancel

## Phase 10 — Streaks ✅

- [x] `src/lib/streak/streak.ts` — daily streak compute + damage rules (+ tests)
- [x] Streak damage on failed challenge (SW `failChallenge` calls `recordFail`)
- [x] Streak damage on disable / removed rule — `damageStreakNow` helper called from Options on the immediate-apply path (deferred-apply path handles damage via SW `applyPendingChanges`)
- [x] Subtle streak UI in popup ✅; challenge-header streak placeholder in place (live-streak wiring tracked as small Phase 12 polish)

## Phase 11 — Popup ✅

- [x] Popup: active unlocks, today's solves, streak, quick "open settings"
- [x] Quick add-current-site-to-blocklist action

## Phase 12 — Polish, tests, CI 🟡

- [x] Accessibility baseline — axe-core/playwright integration in `e2e/a11y.spec.ts` audits all 4 surfaces; passes (no critical violations). Known logged findings for next polish pass: color-contrast on `text-faint` microlabels across all surfaces (design-system tradeoff), and one `aria-prohibited-attr` on the challenge page.
- [ ] Edge-case sweep across all `src/lib` modules
- [x] Integration tests for core flows — `reconcile()` extracted, fake-chrome covers DNR + alarms + runtime, 18 SW integration tests in `test/sw-reconcile.test.ts`
- [x] GitHub Actions CI: typecheck + test + build (artifacts uploaded for 14 days)
- [x] **Playwright load-extension smoke test — 4 tests in `e2e/extension.spec.ts` exercise the SW, popup, options, and challenge pages against real Chromium with `dist/` loaded as an unpacked extension. Caught and fixed a real bug — CRXJS was shipping unmodified `./main.tsx` references for web-accessible HTML (see `DECISIONS.md` D15).**
- [x] **Real block-flow e2e tests — 2 tests in `e2e/block-flow.spec.ts` verify: (a) navigating to a blocked host is redirected to the challenge page, (b) a domain with an active unlock token bypasses the gate. These exercise the live declarativeNetRequest pipeline end-to-end.**
- [x] **Full solve-and-unlock e2e — `e2e/solve-flow.spec.ts` injects the bank's reference solution into the CodeMirror editor, clicks Submit, and asserts the SW writes an unlock token. Proves the vertical slice (bank → judge → sandbox Worker → SW grant handler → storage) in real Chromium.**
- [x] README screenshots — captured automatically by `e2e/screenshots.spec.ts`, referenced in the README
- [x] Chrome Web Store ZIP packaging script (`npm run package`)
- [x] Marketing website (separate repo `Jeremyliu-621/leetlock-site`, Next.js static export)

## Phase 13+ — Post-MVP polish

Shipped after v0.1.0:
- [x] **Editor QoL** — close-brackets, autocomplete, search (Cmd-F), `Cmd+Enter` run / `Cmd+Shift+Enter` submit / `Alt-R` reset shortcuts, active-line highlight, code-folding, multi-cursor (`drawSelection` + `allowMultipleSelections`)
- [x] **Tab-close guard** — `beforeunload` while a challenge is in progress, suppressed during programmatic navigation
- [x] **Light / dark / system theme** — CSS variables + `data-theme` attribute; popup switcher; live OS-theme sync for `system`
- [x] **Markdown problem descriptions** — `react-markdown` + GFM, custom grayscale component map, raw-HTML disabled
- [x] **Progressive hints** with **60s-per-reveal cost** — `Problem.hints?: string[]`, markdown-rendered, friction-aligned; wired into three bank problems
- [x] **Real-Chrome e2e** — `e2e/extension.spec.ts`, `block-flow.spec.ts`, `solve-flow.spec.ts`, `user-bug.spec.ts`, `screenshots.spec.ts`, `a11y.spec.ts` — 17 tests total

Still pending:
- [x] Grow the problem bank to 50+ verified problems — **51 problems, all with hints + JS+Python solutions**
- [x] Add hints to all problems — every problem in the bank has 3-level progressive hints
- [x] **Python support via Pyodide** — M1–M7 complete; every bank problem Python-capable
- [x] Editor settings — font size slider + vim keymap toggle in Options EditorSection
- [x] Draggable splitter between problem and editor panels (+ persist width in prefs)
- [x] Fullscreen-editor toggle — ⊞/⊡ button in editor header hides problem panel; aria-pressed
- [x] Custom test-case input drawer (CustomTestPanel with per-param JSON inputs + aria-live output)
- [x] Verdict timing — per-test durationMs + totalDurationMs accumulated across all tests
- [x] a11y fixes — `aria-prohibited-attr` on editor fixed; mobile `!w-full` override for splitter
- [x] Submission history — collapsible panel shows per-attempt outcome/tests/timing/timestamp
- [x] Edge-case sweep — verdict non-finite duration, token clamping, streak date validation; 6 new tests
- [x] Streak heatmap — 12-week grayscale activity grid in popup (aria-grid accessible)
- [x] Settings import/export — JSON download/restore in Options (blocked sites, rules, prefs)
- [x] Acceptance UX — 1.2s pause after accepted verdict before redirecting
- [x] 4 new problems (rotate-array, max-product-subarray medium, longest-palindromic-string medium, climbing-stairs)
- [x] Bank at 55 problems; first medium-difficulty problems added
- [x] Keyboard shortcut reference card — `?` button in editor header opens modal (all shortcuts, Esc/backdrop close, aria-modal)
- [x] Problem tag/difficulty breakdown stats in popup — mini bar chart by difficulty + top-5 tag pills; computeSolvedStats in popup-helpers.ts with 6 unit tests
- [x] Grow bank to 85 problems — 33 new medium problems added across arrays, strings, hash-map, binary-search, stack, math; all with JS + Python solutions and test coverage (505 tests)
- [x] Add more medium-difficulty problems — bank now has full medium tier across all 6 tag categories
- [ ] Marketing site iteration + Vercel deployment

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
- 2026-05-23: Phase 8 + Phase 9 UI integration complete. Settings page built by ui-generator-reviewer
  agent (Options.tsx + 12 sub-components + options-helpers.ts + 68 new helper tests = 227 total).
  All 12 sections implemented: blocked-sites editor, keyword triggers, challenge prefs, unlock,
  problem selection, failure action, strict mode, password lock, accountability partner,
  pending changes (with live countdown), sync status, and reset. Full cooldown-deferral and
  password-gate logic wired in the Options.tsx orchestrator. Also fixed a pre-existing
  Popup.tsx TS2322 type error (Awaited<ReturnType<...>> -> Promise<StorageSchema[K]>).
