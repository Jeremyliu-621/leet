# LeetLock — Progress Tracker

> **This is the single source of truth for project state. Read it first every loop iteration.**
> Protocol: pick the next unchecked `[ ]` task in the earliest incomplete phase → implement →
> typecheck + test → commit + push → check it off here → update the header below.

---

**Last updated:** 2026-05-25
**Current phase:** Phase 13 — Post-MVP polish
**Current focus:** Bank at 1331 problems; 4278 tests green.
**Build status:** 🟢 `npm run typecheck` + `npm run test` green.
**Next up:** Continue adding classic problems (Batch 38+); UI/UX polish; Options/popup improvements.

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
- [x] Edge-case sweep across all `src/lib` modules — 15 new tests for blocking, unlock, streak (empty inputs, boundary expiry, case-insensitive dedup, history cap, same-day multi-solve)
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
- [x] Grow bank to 95 problems — 10 hard problems added (arrays: first-missing-positive, jump-game-ii, largest-rectangle-histogram, sliding-window-maximum, largest-number, longest-increasing-subsequence; strings: minimum-window-substring, longest-valid-parentheses, edit-distance, word-break); all with JS + Python solutions, hints, and test coverage (550 tests)
- [x] **100-problem milestone** — 5 more problems: three-sum-closest, boats-to-save-people, partition-labels (two-pointers/medium), basic-calculator (stack/hard), median-two-sorted-arrays (binary-search/hard); 565 tests
- [x] **Light-mode CodeMirror theme** — `leetlockEditorThemeLight` (inverted grayscale, `{ dark: false }`); Compartment-driven swap wired to `resolvedTheme` in Challenge
- [x] **Verdict input display** — `input: string` field on all `TestVerdict` variants; renders as Input/Output/Expected in VerdictPanel matching LeetCode parity
- [x] **Persistent submission history** — per-problem array stored in `chrome.storage.local` under `submissionHistory` key; capped at 20 entries; cleared on acceptance; loaded on challenge mount
- [x] **107-problem milestone** — 4 new hard problems: split-array-largest-sum, capacity-to-ship, max-consecutive-flips, count-subarrays-bounded-max (binary-search + sliding-window); 580 tests
- [x] **Restore last submitted code** — `code` field on `SubmissionRecord`; "restore" button per row in SubmissionsPanel; `resetCode` Compartment-less prop on EditorPanel; 581 tests
- [x] **Grayscale syntax highlighting in code blocks** — `rehype-highlight` (JS + Python only) added to `ProblemDescription`; custom CSS maps hljs token classes to `--ll-text`/`--ll-muted`/`--ll-faint` variables; no colour, matches editor theme
- [x] **111-problem milestone** — 4 new hard problems for math + two-pointers tags (trapping-rain-water, four-sum, fraction-to-recurring-decimal, integer-to-english-words); 593 tests
- [x] **Emacs keymap** — `editorKeymap: 'emacs'` via `@replit/codemirror-emacs`; wired in EditorPanel, EditorSection, Popup; persisted to `userPreferences`
- [x] **dynamic-programming tag** — 9th ProblemTag added to type system + PROBLEM_TAGS; backfilled 5 existing DP problems; new `filters by dynamic-programming tag` test
- [x] **114-problem milestone** — 3 new DP problems (house-robber, coin-change, unique-paths); 603 tests
- [x] Fill sliding-window medium gap — added at-most-k-distinct, permutation-in-string, subarray-product-less-than-k; 612 tests
- [x] Problem counts on Options filter buttons — difficulty + tag pills now show "easy 38", "arrays 25" etc.
- [x] Add hash-map hard problems — four-sum-ii, max-points-on-line; 618 tests; bank at 119
- [x] Bank progress in popup — "X/119 solved (Y%)" in SolveBreakdown header
- [x] Add hard stack problems — sum-subarray-minimums, remove-k-digits; 624 tests; bank at 121
- [x] Dynamic challenge tab title — shows problem name (e.g. "Two Sum — LeetLock")
- [x] Bank size in Options About section — "119 original problems covering 9 topic categories"
- [x] Add medium DP problems — LCS, min-path-sum, decode-ways; hard DP filled (LPS, palindrome-min-cuts, integer-break, regular-expression-matching); 651 tests; bank at 130
- [x] Add medium two-pointers problems — next-permutation, interval-list-intersections, longest-mountain-in-array; 642 tests; bank at 127
- [x] Add classic missing medium problems — spiral-matrix, rotate-image, maximal-square, find-first-last-pos, search-2d-matrix; 666 tests; bank at 135
- [x] Run-mode verdict summary — `RunSummaryBanner` shows X/N passed + total timing in run mode when all visible tests pass
- [x] Add medium DP problems (3 more) — partition-equal-subset-sum, perfect-squares, target-sum; 672 tests; bank at 137
- [x] Add roman-to-integer (math/easy) + valid-sudoku (arrays/medium); 684 tests; bank at 141
- [x] Add hard DP problems — burst-balloons, wildcard-matching, dungeon-game; bank at 144
- [x] Add DP easy + binary-search easy — min-cost-climbing-stairs, counting-bits, best-time-buy-sell, search-insert-position; 705 tests; bank at 148
- [x] Add car-fleet, koko-eating-bananas, find-peak-element, minimum-operations-reduce-x; 717 tests; bank at 152
- [x] Add sort-list (merge sort) + subarrays-k-distinct; fill two-pointers/hard (2→4); 723 tests; bank at 154
- [x] Add ransom-note, isomorphic-strings, nth-ugly-number, maximum-swap; 735 tests; bank at 158
- [x] Add linked-list tag + 3 problems (reverse-linked-list, linked-list-cycle, merge-two-sorted-linked-lists) with preamble; bank at 161
- [x] Add 4 easy problems (plus-one, length-of-last-word, palindrome-number, excel-column-number); 756 tests; bank at 165
- [x] Add middle-of-linked-list (easy), palindrome-linked-list (easy), remove-nth-from-end (medium); 765 tests; bank at 168
- [x] Add linked-list medium/hard — reorder-list, add-two-numbers, odd-even-linked-list, intersection-two-linked-lists, merge-k-sorted-lists; 780 tests; bank at 173
- [x] Marketing site iteration + Vercel deployment — static HTML landing page at /site/index.html with vercel.json; pure grayscale design, 12-point comparison, problem bank stats, commit+features CTAs
- [x] **TypeScript language support** — sucrase strips type annotations before the JS worker runs; all 174 problems support TS via JS starter; CM6 uses `javascript({ typescript: true })`; Options → Editor adds default-language radio group; 8 new transpile tests
- [x] Graph/BFS tag — add `graph` to ProblemTag + PROBLEM_TAGS; 3 problems: flood-fill (easy), number-of-islands (medium), course-schedule (medium); JS + Python solutions + tests
- [x] Tree tag — add `tree` to ProblemTag + PROBLEM_TAGS; 3 easy problems: max-depth-binary-tree, symmetric-tree, invert-binary-tree; TreeNode preamble with BFS array format + Pyodide isinstance fix; 807 tests; bank at 179
- [x] More tree problems — binary-tree-paths (easy), validate-bst (medium), level-order-traversal (medium); bank at 182 problems, 816 tests
- [x] Popup: add preferred-language segmented control (mirrors keymap row)
- [x] Marketing site: update stats/copy to mention TypeScript — 182 problems / 12 tags / 3 languages; Graph + Tree tag chips added
- [x] More tree/graph problems — path-sum (easy), diameter-of-binary-tree (easy), lowest-common-ancestor-bst (medium), max-path-sum (hard); town-judge (easy), max-area-island (medium), rotting-oranges (medium), keys-and-rooms (medium); bank at 190 problems, 840 tests
- [x] UX: verdict panel scroll-to-first-failure (useEffect + scrollIntoView); animated loading dots (animate-pulse on "· · ·")
- [x] More graph problems: clone-graph (medium), word-ladder (hard), network-delay-time (medium), number-of-connected-components (medium); bank at 196 problems, 858 tests
- [x] More tree problems: count-good-nodes (medium), binary-tree-right-side-view (medium)
- [x] same-tree (easy) + isinstance bool fix applied to all tree problem Python preambles; 858 tests; bank at 198
- [x] construct-binary-tree-from-preorder-inorder (medium); bank at 199 problems, 864 tests
- [x] serialize-deserialize-binary-tree (hard tree): BFS round-trip with '#' sentinel; 867 tests; bank at 199
- [x] Marketing site: update stats to 199 problems
- [x] Options: fix About section hardcoded "10 topic categories" → 12; tag/difficulty pill counts are already dynamic (computed from getAllProblems() at load time)
- [x] course-schedule-ii (medium graph): Kahn's BFS topological sort; 873 tests; bank at 200
- [x] kth-smallest-bst (medium tree): in-order BST traversal; 876 tests; bank at 201
- [x] pacific-atlantic (medium graph): multi-source reverse BFS; 879 tests; bank at 202
- [x] flatten-binary-tree + zigzag-level-order (tree/medium) + reverse-nodes-in-k-group (linked-list/hard); 885 tests; bank at 205
- [x] sum-root-to-leaf-numbers (medium tree): DFS digit accumulator; lowest-common-ancestor-binary-tree (medium tree): recursive LCA; 891 tests; bank at 207 (removed duplicate zigzag)
- [x] sum-root-to-leaf, number-of-provinces (graph/easy), path-sum-iii (tree/medium): prefix-sum O(n); 900 tests; bank at 210
- [x] balanced-binary-tree (easy), minimum-depth-binary-tree (easy), word-search (graph/medium), surrounded-regions (graph/medium); bank at 217
- [x] binary-tree-level-order-bottom (easy), find-duplicate-number (two-pointers/medium), graph-valid-tree (graph/medium); 930 tests; bank at 220
- [x] redundant-connection (Union-Find/medium), is-graph-bipartite (BFS 2-color/medium), all-paths-source-target (DFS/medium); bank at 223
- [x] house-robber-iii (tree DP/medium), maximum-width-binary-tree (BFS/medium), minimum-height-trees (graph/medium); bank at 226 (removed duplicate sum-root-to-leaf-numbers)
- [x] hamming-weight (math/easy), 01-matrix (graph/medium), delete-node-in-linked-list (easy); 957 tests; bank at 229
- [x] merge-intervals, non-overlapping-intervals (arrays/medium), task-scheduler (math/medium); 966 tests; bank at 232
- [x] letter-combinations-phone (hash-map/medium), subsets (arrays/medium), combination-sum (arrays/medium); 972 tests; bank at 235
- [x] permutations (arrays/medium, preamble-sort), generate-parentheses (strings/medium, preamble-sort), palindrome-partitioning (strings/medium); bank at ~244; remote also added: combination-sum-ii, number-of-dice-rolls, coin-change-ii, best-time-buy-sell-cooldown, longest-arithmetic-subsequence, unique-paths-ii, triangle, interleaving-string
- [x] n-queens (arrays/hard); marketing site updated to 250 problems; 1020 tests; bank at 250
- [x] verdict panel a11y + UX: TruncatedValue (>200 chars), arrayDiffCount diff indicator, text-faint→text-muted (WCAG AA), CopyButton on expected+actual, break-all+shrink-0
- [x] 3 new hard problems: alien-dictionary (graph/hard, topological sort), critical-connections (graph/hard, Tarjan bridges), vertical-order-traversal (tree/hard, coordinate DFS+sort); graph/hard: 1→3, tree/hard: 2→3; bank at 261; 1056 tests; site updated to 261
- [x] triangle (DP/medium), interleaving-string (DP/medium), find-eventual-safe-states (graph/medium); letter-combinations-phone (hash-map/medium), subsets (arrays/medium), combination-sum (arrays/medium); 981 tests; bank at 237
- [x] generate-parentheses (strings/medium), permutations (arrays/medium), unique-paths-ii (DP/medium); combination-sum-ii, palindrome-partitioning, number-of-dice-rolls; spiral-matrix-ii, max-consecutive-ones-iii, jump-game-iii; coin-change-ii, best-time-buy-sell-cooldown, longest-arithmetic-subsequence; k-closest-points, top-k-frequent-words, find-disappeared-numbers; 1026 tests; bank at 252
- [x] swap-nodes-in-pairs (linked-list/medium), partition-list (linked-list/medium), find-if-path-exists (graph/easy); remove duplicate binary-tree-zigzag-traversal + orphan reverse-nodes-k-group; bank cleaned up
- [x] backtracking tag applied to palindrome-partitioning, combination-sum-ii, n-queens, word-search
- [x] sudoku-solver (backtracking/hard, runner preamble) + combinations (backtracking/medium); bank at 272; 1090 tests
- [x] word-search-ii (Trie-DFS/hard) + letter-case-permutation (easy); single-number + house-robber-ii + wiggle-subsequence; subsets-ii; majority-element-ii + contains-duplicate-ii + summary-ranges; longest-turbulent-subarray + minimum-genetic-mutation + largest-divisible-subset; bank at 287; 1132 tests
- [x] combination-sum-iii (backtracking/medium) + restore-ip-addresses (backtracking/medium); bank at 289
- [x] expression-add-operators (strings+backtracking/hard): operator insertion with multiplication precedence tracking; min-stack (stack/easy); lru-cache (hash-map/hard, DLL+Map); bank at 292
- [x] count-and-say (strings/medium) + beautiful-arrangement (arrays+backtracking/medium); bank at 295; 1150 tests
- [x] power-of-three (math/easy) + reverse-bits (math/easy) + game-of-life (arrays/medium); bank at 298; 1162 tests
- [x] 6 new problems: accounts-merge (graph/medium), next-greater-element-ii (stack/medium), minimum-size-subarray-sum (sliding-window/medium), decode-ways-ii (dp/hard), queue-reconstruction-by-height (arrays/medium), find-k-pairs-smallest-sums (binary-search/medium); bank at 307; 1171+ tests
- [x] **300-problem milestone** — missing-ranges (arrays/easy) + excel-sheet-column-title (math/easy) + longest-palindrome-build (strings/easy); bank at 301; 1174 tests
- [x] reverse-linked-list-ii (linked-list/medium) + rotate-list (linked-list/medium) + number-of-1-bits (math/easy) + single-number-ii (math/medium); bank at 309; 1198 tests
- [x] pascals-triangle + single-number-ii + reverse-only-letters + backspace-string-compare + number-of-steps + richest-customer-wealth + maximum-units-on-truck + find-the-difference + goal-parser + shuffle-the-array + count-items-matching-rule; bank at 321; 1234 tests
- [x] valid-anagram + defanging-ip-address + kids-with-candies + monotonic-array + add-binary + word-pattern; bank at 328; 1252 tests
- [x] detect-capital + repeated-substring-pattern + find-pivot-index + path-crossing; bank at 332; 1265 tests
- [x] heap tag added; last-stone-weight + kth-largest-in-stream + median-from-data-stream; meeting-rooms-ii + h-index + word-break-ii; bank at 342; 1294 tests
- [x] build-array-from-permutation + truncate-sentence + largest-perimeter-triangle + to-lower-case + check-if-two-string-arrays-equivalent + sum-of-unique-elements; bank at 348; 1312 tests
- [x] concatenation-of-array + third-maximum-number + count-odd-numbers + maximum-product-three-numbers + average-salary-excluding-min-max + find-n-unique-integers-sum-to-zero; bank at 353; 1330 tests
- [x] reorganize-string + minimum-cost-to-connect-sticks; check-if-pangram + is-power-of-four + integer-to-roman + longest-word-in-dictionary; bank at 360; 1345 tests
- [x] decode-xored-array + replace-elements-with-greatest + highest-altitude + sign-of-product-array + maximum-difference-increasing-elements + cells-in-range; bank at 364; 1360 tests
- [x] minimum-arrows-burst-balloons + set-matrix-zeroes + range-sum-query + rotate-string + custom-sort-string + copy-list-with-random-pointer; bank at 371; 1381 tests
- [x] shortest-path-binary-matrix + online-stock-span; bank at 372; 1387 tests
- [x] find-all-numbers-disappeared + check-if-n-and-double-exist + largest-number-at-least-twice + special-positions-binary-matrix + matrix-diagonal-sum + sort-array-by-parity; bank at 378; 1399 tests
- [x] left-and-right-sum-differences + minimum-value-positive-step-sum + count-number-of-pairs + percentage-of-letter-in-string + count-common-words-one-occurrence + convert-temperature; bank at 384; 1423 tests
- [x] implement-queue-using-stacks (stack/easy) + binary-tree-pruning (tree/medium) + count-complete-tree-nodes (tree+binary-search/medium) + populating-next-right-pointers (tree/medium) + range-sum-query-2d (arrays/medium) + find-anagram-mappings (hash-map/easy); bank at 393; 1450 tests
- [x] remove-duplicates-sorted-array-ii + longest-string-chain + implement-trie (merged with remote additions); bank at 401; 1474 tests
- [x] can-place-flowers + find-k-closest-elements + string-compression + maximum-69-number + count-of-matches-tournament + maximum-product-two-elements; bank at 403; 1489 tests
- [x] number-of-students-eating-lunch + two-sum-less-than-k + find-smallest-letter-greater-than-target + minimum-difference-k-scores + two-out-of-three + sum-of-odd-length-subarrays; bank at 417; 1531 tests
- [x] **400-problem milestone** — determine-if-string-halves-alike + check-two-strings-almost-equivalent + rearrange-characters-to-make-target + divide-string-into-groups + count-vowel-substrings + count-of-matches-in-tournament + minimum-sum-mountain-triplet (merged)
- [x] merge-sorted-array (easy/arrays, preamble) + minimum-moves-equal-array (medium/math) + multiply-strings (medium/math+strings) + count-triplets-xor (medium/arrays+math) + water-and-jug (medium/math) + find-center-of-star-graph (easy/graph); bank at 444; 1603 tests
- [x] validate-stack-sequences + 132-pattern (stack/medium) + frequency-of-most-frequent-element (sliding-window/medium) + find-common-characters + counting-words-with-given-prefix + find-words-formed-by-characters (strings/easy) + minimum-rounds-to-complete-tasks + minimum-steps-make-anagram (hash-map/medium) + number-of-laser-beams (arrays/medium) + minimum-number-of-moves-seat (arrays/easy); bank merged to 488; 1735 tests
- [x] check-prefix-string + sum-digits-string-convert + maximum-number-of-string-pairs + count-pairs-sum-less-than-target + neither-minimum-nor-maximum + find-winners + count-number-of-texts + count-vowel-strings-in-range + count-fair-pairs + minimum-average-difference; bank at 498; 1843 tests
- [x] find-kth-positive + minimum-length-string-operations + largest-integer-digit-swaps; bank at 533; 1867 tests
- [x] unique-morse-code-words + number-of-good-pairs + check-if-array-sorted-rotated + maximum-product-difference + replace-words + minimum-time-difference + string-to-integer-atoi; bank at 540; 1888 tests. Marketing site updated to 540.
- [x] minimum-deletions-char-frequencies + bulls-and-cows + minimum-sum-four-digit-number + count-pairs-absolute-difference-k + find-closest-number-to-zero + count-asterisks + count-even-numbers + count-segments-in-string + find-repeated-dna-sequences + widest-vertical-area + convert-1d-array-into-2d-array + check-if-all-chars-equal-occurrences + find-the-pivot-integer + maximum-sum-circular-subarray; bank at 555; 1933 tests.
- [x] number-of-distinct-averages + find-positive-integer-with-negative + sum-of-squares-special-elements + minimum-operations-make-array-empty; bank at 568; 1975 tests. Marketing site updated to 568.
- [x] **6 more new problems** — candy (arrays/hard), minimum-falling-path-sum (dp/medium), count-nice-subarrays (sliding-window/medium), split-linked-list-in-parts (linked-list/medium), time-based-key-value-store (hash-map+bs/medium); fixed Python findAnagrams mismatch; 1990 tests; bank at 574.
- [x] **5 more new problems** — minimum-cost-for-tickets (dp/medium), stone-game-ii (dp/medium), maximum-width-ramp (arrays/hard), check-if-array-pairs-divisible-by-k (arrays+hash-map/medium), find-k-th-smallest-pair-distance (binary-search+sliding-window/hard); bank at 584 tests.
- [x] **5 more new problems** — valid-triangle-number (arrays+two-pointers/medium), max-number-k-sum-pairs (arrays+hash-map/medium), minimum-time-rope-colorful (arrays+two-pointers/medium), shortest-bridge (graph/hard), number-of-subsequences-target-sum (arrays+two-pointers/medium); 2026 tests; bank at 589.
- [x] **5 more new problems** — car-pooling (arrays/medium), most-profit-assigning-work (binary-search/medium), fruit-into-baskets (sliding-window/medium), minimum-swaps-string-balanced (arrays/medium), sum-of-subarray-ranges (arrays+stack/medium); 2044 tests; bank at 594+.
- [x] **🎉 600-problem milestone** — reverse-words-in-string-iii, maximum-product-adjacent-elements, split-string-balance, increasing-decreasing-string, students-unable-to-eat-lunch, create-target-array-given-order, maximum-ascending-subarray-sum, minimum-consecutive-cards-pickup, divisor-game, minimum-time-visiting-all-points, largest-local-values-matrix, percentage-letter-in-string, number-of-weak-characters; 2071 tests; bank at 600.
- [x] **17 more new problems** — arithmetic-slices, max-vowels-substring, min-swaps-group-all-ones, k-diff-pairs, hand-of-straights, min-domino-rotations, furthest-building-ladders, ipo, relative-sort-array, permutations-ii, letter-tile-possibilities, different-ways-add-parentheses (plus 5 from remote: maximize-confusion-exam, sum-of-all-subset-xor, continuous-subarray-sum, equal-row-column-pairs, determine-if-two-strings-close); 2122 tests; bank at 617.
- [x] **3 more problems** — integer-break (dp/medium), min-cost-move-chips (math/easy), binary-watch (math/easy); 2131 tests; bank at 620.
- [x] **Browser-zoom QA** — popup `overflow-x-hidden` + heatmap `overflow-x-auto` to prevent horizontal scroll at 150%/200% zoom.
- [x] **7 more problems** — ugly-number-ii, delete-node-in-bst, insert-into-bst, min-cost-connect-points, visible-people-queue, minimum-add-make-valid-parentheses, palindromic-substrings, partition-string; polished 6 easy problems; 2155 tests; bank at 627.
- [x] **14 more problems** — valid-parentheses, evaluate-reverse-polish-notation, move-zeroes, merge-strings-alternately, uncrossed-lines, course-schedule-iii, buy-two-chocolates, most-frequent-even-element, find-first-palindromic-string, minimum-ops-make-array-empty, max-diff-between-node-ancestor, combination-sum-iv; 2191 tests; bank at 641.
- [x] **20 more problems** — jump-game-vi, longest-subarray-max-bitwise-and, maximum-events-can-attend, count-nodes-equal-average-subtree, maximum-level-sum-binary-tree, k-radius-subarray-averages, number-of-ways-select-buildings, total-appeal-of-string, find-city-smallest-number-neighbors, minimum-fuel-cost-report-capital (+ 10 from remote: minimum-distance-value, min-ops-make-array-alternating, redistribute-chars-equal, check-completeness-bst, max-twin-sum-linked-list, etc.); 2236 tests; bank at 661.
- [x] **7 more problems** — robot-return-to-origin (strings/easy), count-sorted-vowel-strings (dp/medium), maximum-product-of-word-lengths (arrays+math/medium), exclusive-time-of-functions (stack/medium), as-far-from-land-as-possible (graph/medium), cheapest-flights-within-k-stops (graph/medium), sorted-array-to-bst (tree+binary-search/easy, preamble); 2257 tests; bank at 665.
- [x] **5 more problems** — factorial-trailing-zeroes, unique-binary-search-trees, non-decreasing-array, best-time-buy-sell-iii, deepest-leaves-sum; bank at 673; growing past 700.
- [x] **8 more problems** — count-hills-valleys, find-lonely-numbers, count-prefixes-of-given-string, minimum-number-game, find-words-containing-character, count-good-numbers, maximum-sum-k-elements, minimum-common-value; 2281 tests; bank at 678.
- [x] **4 more problems** (rebase resolved) — count-subarrays-fixed-bounds, amount-of-time-binary-tree-infected, count-collisions-on-road, maximum-alternating-subsequence-sum; bank at 683.
- [x] **6 more problems** — compare-version-numbers (strings/medium), open-the-lock (graph/medium), diagonal-traverse (arrays/medium), reshape-the-matrix (arrays/easy), find-town-judge (graph/easy), possible-bipartition (graph/medium); 2329 tests; bank at 690+.
- [x] **6 more problems** — two-sum-ii (two-pointers), set-mismatch (arrays), maximum-gap (arrays), array-partition (arrays), power-of-two (math), sum-of-left-leaves (tree); 2356 tests; bank at 697+.
- [x] **🎉 700-problem milestone!** — arrange-coins, nth-digit, find-the-winner (Josephus), count-negative-numbers, can-make-arithmetic-progression; 2398 tests; bank at 700+.
- [x] **21 more problems** (batches 8-9, remote merge) — design-hashmap, contiguous-array, shifting-letters, convert-bst-to-greater-tree, distribute-coins-binary-tree, flip-columns-for-maximum-equal-rows, delete-columns-sorted-iii, minimum-bit-flips, smallest-even-multiple, special-array-greater-equal, count-pairs-two-arrays, convert-time-hhmm, find-players-zero-losses, check-distances-fair-nodes, minimum-rounds-complete-tasks, largest-combination-bitwise-and + remote: final-value-after-operations, find-original-array-doubled, etc.; bank at 741; 2494 tests.
- [x] **20 more problems** (batch 10, remote merge) — best-time-buy-sell-transaction-fee, maximal-rectangle, stone-game-iii, maximum-profit-job-scheduling, count-of-smaller-numbers-after-self, k-th-symbol-in-grammar, longest-substring-without-repeating + remote: sort-the-people, baseball-game, find-champion-graph, count-digits, apply-operations, minimum-moves-to-seat, rings-and-rods, find-gcd-of-array, keep-multiplying-found-values, percentages-of-letter, maximum-bags-full-capacity, find-subsequence-of-length-k, odd-string-difference; bank at 761; 2554 tests.
- [x] **22 more problems** (batch 11, remote merge) — count-operations-to-obtain-zero, design-underground-system, sort-vowels-in-a-string, minimum-time-to-repair-cars, number-of-matching-subsequences, beautiful-arrangement-ii, lfu-cache, smallest-range-covering-k-lists, bus-routes, maximum-score-words-formed + remote: decompress-run-length-encoding, check-almost-equivalent-strings, minimum-value-positive-steps, check-if-all-as-before-bs, check-if-word-equals-summation, ways-to-buy-pens-pencils, check-array-sorted-rotated, interpret-string, merge-similar-items, count-good-rectangles, maximum-population-year, find-kth-bit-nth-binary-string; bank at 783; 2620 tests.
- [x] **20 more problems** (batches 12-14) — largest-positive-integer-with-negative, maximize-sum-k-elements, check-if-acronym, count-pairs-absolute-diff-k, number-of-arithmetic-subarrays, check-valid-matrix, count-max-frequency-elements, minimum-difference-after-k-removals, number-of-valid-clock-times, calculate-money-in-bank, score-of-string, chalk-replacer, split-with-minimum-sum, max-difference-increasing-elements, longest-nice-subarray, interchangeable-rectangles, find-triangular-sum, two-furthest-houses-different-colors, count-lattice-points-circle, nearest-exit-maze; **🎉 800-problem milestone**; bank at 803; 2680 tests.
- [x] **17 more problems** — climbing-stairs-k-steps, maximum-xor-two-numbers, remove-stones-to-minimize-total, maximize-happiness-of-selected-children, find-the-maximum-achievable-number, partition-array-maximum-difference, remove-duplicates-from-sorted-list-ii, count-number-of-homogenous-substrings, stone-game-vi, count-special-quadruplets (remote), alternating-digit-sum, count-ways-to-build-good-string, divide-players-into-teams-of-equal-skill, maximum-number-of-pairs-in-array, minimize-maximum-pair-sum-in-array, minimum-operations-to-exceed-threshold-value-ii, number-of-ways-to-split-array; bank at 820; 2731 tests.
- [x] **28 more classic problems** — reconstruct-itinerary, partition-k-equal-subset-sum, paint-house, add-strings, palindrome-partitioning-ii, wiggle-sort-ii, stone-game-iv, minimum-refueling-stops, snapshot-array, insert-delete-getrandom, paint-house-ii, minimum-moves-equal-array-ii, frog-jump, k-inverse-pairs-array, minimum-cost-to-hire-k-workers, random-pick-with-weight, find-in-mountain-array, find-duplicate-number-ii, basic-calculator-ii, maximum-binary-tree, next-greater-element-iii, number-of-digit-one, moving-average-from-data-stream, design-add-and-search-words, serialize-deserialize-bst, design-circular-queue, and more; bank at **1046**; 3406 tests.
- [x] **10 more classic problems** — arithmetic-subarrays, best-meeting-point, longest-subarray-ones-after-delete, minimum-cost-cut-cake, minimum-operations-make-array-continuous, minimum-score-path, reverse-pairs, spiral-matrix-iii, text-justification; bank at **1056**; 3433 tests.
- [x] **10 more classic problems (Batch 5)** — maximum-points-from-cards, minimum-ascii-delete-sum, sum-of-distances-in-tree, couples-holding-hands, falling-squares, constrained-subsequence-sum, pseudo-palindromic-paths, number-of-nodes-same-label, minimum-cost-tree-leaf-values, valid-partition-array; bank at **1066**; 3463 tests.
- [x] **10 more classic problems (Batch 6)** — paint-fence, minimum-insertion-steps-palindrome, longest-subarray-abs-diff-limit, maximum-sum-two-non-overlapping-subarrays, number-of-closed-islands, destination-city, find-winner-tictactoe, maximum-eaten-apples, split-array-fibonacci, maximum-score-performing-multiplication; bank at **1076**; 3493 tests.
- [x] **11 more classic problems (Batch 7)** — cherry-pickup, count-ways-build-good-string, profitable-schemes, count-square-submatrices, freedom-trail, guess-number-higher-or-lower-ii, remove-palindromic-subsequences, check-array-formation, minimum-falling-path-sum-ii, scramble-string, predict-the-winner; bank at **1087**; 3526 tests.
- [x] **10 more from parallel session** — russian-doll-envelopes, binary-tree-cameras, linked-list-cycle-ii, add-two-numbers-ii, maximum-performance-of-team, minimum-interval-to-include-each-query, minimum-number-of-taps, online-election, count-of-range-sum, design-linked-list; bank at **1096**; 3556 tests.
- [x] **9 more classic problems (Batch 8)** — maximum-product-subarray, delete-and-earn, minimum-time-collect-apples, xor-queries-of-subarray, sequential-digits, count-sub-islands, maximum-profit-assignment, longest-palindromic-substring, max-product-word-lengths; bank at **1105**; 3583 tests.
- [x] **10 classic hard problems (Batch 9)** — sliding-window-median, minimum-difficulty-of-job-schedule, tallest-billboard, concatenated-words, max-value-of-equation, number-of-music-playlists, minimum-number-of-removals-to-make-mountain-array, count-different-palindromic-subsequences, painting-the-walls, shortest-path-to-get-all-keys; bank at **1115**; 3613 tests.
- [x] **10 more classic hard problems (Batch 10)** — stone-game-vii, stone-game-v, maximum-sum-three-non-overlapping-subarrays, minimum-cost-to-merge-stones, palindrome-partitioning-iii, maximum-height-by-stacking-cuboids, minimum-number-of-days-to-eat-n-oranges, best-team-with-no-conflicts, number-of-ways-to-form-target-given-dictionary, minimum-xor-sum-of-two-arrays; bank at **1125**; 3643 tests.
- [x] **10 more problems + 1** (in previous session) — find-all-duplicates-in-array, check-if-word-occurs-as-prefix, count-subarrays-score-less-than-k, excel-sheet-column-number, jump-game-vii, longest-square-streak, maximum-beauty-array-after-applying-operation, maximum-product-after-k-increments, pairs-of-songs-divisible-60, find-all-duplicates (bank at 830); 2758 tests.
- [x] **11 more problems** — find-the-index-of-first-occurrence, integer-replacement, number-of-smooth-descent-periods, maximum-matrix-sum, count-nodes-with-highest-score, find-right-interval, circular-sentence, minimum-garden-perimeter, group-people-given-group-size, count-number-of-bad-pairs, minimum-changes-to-make-binary-string-beautiful; bank at 840; 2791 tests.
- [x] **9 more problems** — remove-all-occurrences-of-substring, minimum-time-to-complete-trips, minimum-speed-to-arrive-on-time, sum-of-beauty-in-the-array, find-all-possible-recipes, take-k-of-each-character-from-left-and-right, minimum-operations-xor-equal-k, maximum-odd-binary-number, minimum-equal-sum-two-arrays; bank at 849; 2818 tests.
- [x] **🎉 850-problem milestone** — find-score-of-array-after-marking, count-complete-day-pairs, check-if-matrix-is-x-matrix; bank at 852; 2827 tests.
- [x] **22 more problems** (batches 9-10) — first-unique-character-in-string, long-pressed-name, remove-outermost-parentheses, maximum-nesting-depth-of-parentheses, next-greater-element-i, find-and-replace-pattern, largest-3-same-digit-number-in-string, count-number-of-consistent-strings, make-the-string-great, find-target-indices-after-sorting-array, number-of-employees-who-met-the-target, intersection-of-two-arrays-ii, largest-subarray-length-k, minimum-time-to-type-word, check-if-one-string-swap-can-make-strings-equal, number-of-different-integers-in-string, check-if-array-is-good, count-the-digits-that-divide-the-number, find-the-difference-of-two-arrays, longest-continuous-increasing-subsequence, find-numbers-with-even-number-of-digits, count-nice-pairs-in-an-array; bank at 923; 3037 tests.
- [x] **12 more problems** (batch 11) — check-if-string-is-prefix-of-array, remove-trailing-zeros-from-string, rearrange-spaces-between-words, split-a-string-in-balanced-strings, find-greatest-common-divisor-of-array, remove-all-adjacent-duplicates-in-string, semi-ordered-permutation, calculate-delayed-arrival-time, check-if-numbers-are-ascending-in-sentence, find-xor-beauty-of-array, number-of-words-that-can-be-typed, number-of-common-factors; bank at 935; 3073 tests.
- [x] **37 more problems** (batches 6-8) — count-zero-filled-subarrays, check-whether-two-string-arrays-equal, minimum-flips-make-or-b-equal-c, make-array-zero-subtracting-equal-amounts, find-all-groups-farmland, merge-triplets-form-target, replace-elements-greatest-right, destroy-asteroids, largest-number-after-digit-swaps-parity, maximum-count-positive-negative, find-original-array-prefix-xor, separate-digits-array, number-of-pairs-interchangeable-rectangles, optimal-partition-string, unique-length-three-palindromic-subsequences, bitwise-xor-all-pairings, number-rectangles-largest-square, maximize-number-subsequences, number-ways-buy-pens-pencils, sum-digits-string-after-convert, smallest-value-rearranged-number, removing-stars-from-string, find-the-peaks, minimum-penalty-for-a-shop, apply-operations-to-array, kth-distinct-string-array, count-elements-strictly-smaller-greater, largest-positive-integer-exists-negative, check-if-number-equal-digit-count-value, decode-xor-array, maximum-split-positive-even-integers, minimum-average-smallest-largest, count-tested-devices-after-test-runs, number-subarrays-gcd-equal-k, find-subsequence-length-k-largest-sum, minimum-absolute-sum-difference, find-k-beauty-of-number; **🎉 900-problem milestone**; bank at 900; 2971 tests.
- [x] **Batches 13-14** — 80 more problems: sum-of-all-odd-length-subarrays, find-middle-index-in-array, maximum-absolute-sum-any-subarray, count-substrings-one-distinct-letter, sum-number-and-its-reverse, sum-absolute-differences-sorted-array, number-subarrays-odd-sum, people-aware-of-secret, valid-word-abbreviation, number-valid-words, is-subsequence, find-longest-balanced-substring, count-distinct-integers-after-reverse, most-frequent-number-following-key, minimum-diff-highest-lowest-k-scores, find-array-concat-val, sort-array-increasing-frequency, find-all-k-distant-indices, number-beautiful-pairs, split-string-by-separator, count-vowel-strings-ranges, number-even-odd-bits, average-value-even-divisible-three, count-prefix-suffix-pairs, minimum-cost-buying-candies-discount, find-original-array-prefix-xor, total-distance-traveled, delete-chars-fancy-string, three-consecutive-odds, count-equal-divisible-pairs, minimum-changes-alternating-binary-string, and more; bank at 980; 3208 tests.
- [x] **🎉 1000-problem milestone** (batch 15 — 21 problems) — rotate-function, maximum-sum-distinct-subarrays-length-k, find-the-sum-encrypted-integers, maximum-number-weeks-work, count-complete-subarrays, count-subarrays-max-element-at-least-k-times, minimum-index-valid-split, last-moment-ants-fall-off-plank, check-chessboard-same-color, count-number-of-teams, remove-colored-pieces, longest-alternating-subarray, divisible-non-divisible-sums-diff, minimum-element-digit-sum-replacement, pick-gifts, minimum-ops-xor-equal-k, maximum-count-positive-negative, students-doing-homework, find-xor-numbers-appear-twice, minimum-sum-mountain-triplet-ii, minimum-ops-exceed-threshold-i; bank at **1000**; 3271 tests.
- [x] **8 more classic problems** — maximum-subarray (Kadane's), meeting-rooms, brick-wall, number-of-longest-increasing-subsequence, kth-smallest-element-in-sorted-matrix, minimum-knight-moves (BFS), palindrome-pairs (hard, sort preamble), search-suggestions-system; bank at **1008**; 3295 tests.
- [x] **UX fixes** — blocked domain shown on Locked page (?domain= query param from SW); role="status" aria-live on running indicators in TerminalPanel.
- [x] **10 more classic problems** — array-nesting, evaluate-division (BFS w/ weights), out-of-boundary-paths (DP/mod), maximum-ice-cream-bars (greedy), count-numbers-unique-digits (DP), minimum-cost-to-cut-stick (interval DP/hard), find-min-rotated-ii, search-rotated-ii, distinct-subsequences (DP/hard), minimum-window-subsequence (two-pointer/hard); bank at ~**1018**; 3322 tests.
- [x] **10 more classic hard problems (Batch 9)** — sliding-window-median, minimum-difficulty-of-job-schedule, tallest-billboard, concatenated-words, max-value-of-equation, number-of-music-playlists, minimum-removals-mountain-array, count-different-palindromic-subsequences, painting-the-walls, shortest-path-to-get-all-keys; bank at **1115**; 3613 tests.
- [x] **10 more classic hard problems (Batch 10)** — stone-game-vii, stone-game-v, maximum-sum-three-non-overlapping-subarrays, minimum-cost-to-merge-stones, palindrome-partitioning-iii, maximum-height-by-stacking-cuboids, minimum-number-of-days-to-eat-n-oranges, best-team-with-no-conflicts, number-of-ways-to-form-target, minimum-xor-sum-of-two-arrays; bank at **1125**; 3643 tests.
- [x] **10 more classic hard problems (Batch 11)** — rearrange-sticks-k-visible, stay-in-same-place-after-steps, minimum-score-triangulation-of-polygon, minimum-cost-to-make-array-equal, maximum-achievable-transfer-requests, maximum-elegance-k-subsequence, minimum-total-distance-traveled, minimum-incompatibility, fair-distribution-of-cookies, maximum-profit-in-job-scheduling; bank at **1135**; 3673 tests.
- [x] **Challenge page UX improvements** — array diff hints in TerminalPanel (shows index + length diff when expected/actual diverge); inline copy buttons on problem examples; Enter-key submit in CustomTestPanel; blocked-page "Try another challenge" button threading targetUrl through fail-challenge message.
- [x] **Marketing site stats updated** — 1,100+ problems in all three stat locations.
- [x] **9 new classic medium/hard problems (Batch 12)** — dota2-senate (medium/strings+stack), time-needed-to-inform-all-employees (medium/graph+tree), minesweeper (medium/graph+arrays), minimum-score-triangulation (medium/dp), score-after-flipping-matrix (medium/arrays), beautiful-array (hard/arrays+dp), recover-binary-search-tree (hard/tree), find-duplicate-subtrees (medium/tree+hash-map), all-possible-full-binary-trees (medium/tree+dp); bank at **1144**; 3700 tests.
- [x] **8 new classic problems (Batch 13)** — cherry-pickup-ii (hard/dp), detonate-maximum-bombs (medium/graph), stone-game-vii (medium/dp), design-browser-history (medium/stack), knight-dialer (medium/dp), paint-house-iii (hard/dp), maximize-distance-to-closest-person (medium/arrays), minimum-number-of-vertices (medium/graph); bank at **1149**; 3721 tests.
- [x] **8 more classic problems (Batch 14)** — path-with-minimum-effort (medium/graph, Dijkstra), path-with-maximum-probability (medium/graph, Bellman-Ford), video-stitching (medium/dp, greedy interval), subarray-sums-divisible-by-k (medium/hash-map), sum-of-even-numbers-after-queries (medium/arrays), average-waiting-time (medium/arrays), sort-an-array (medium/arrays, merge sort), sliding-puzzle (hard/graph, BFS); bank at **1157**; 3745 tests.
- [x] **9 more classic problems (Batch 15)** — knight-probability-in-chessboard (medium/dp), minimum-distance-bst-nodes (easy/tree), second-minimum-node-binary-tree (easy/tree), meeting-rooms-iii (hard/heap), minimum-obstacle-removal-to-reach-corner (hard/graph), max-sum-of-rectangle-no-larger-than-k (hard/arrays+binary-search), count-unique-characters-of-all-substrings (hard/strings+math), zuma-game (hard/dp+backtracking), find-longest-valid-obstacle-course (hard/binary-search+dp); bank at **1166**; 3772 tests.
- [x] **10 more classic problems (Batch 16)** — best-sightseeing-pair (medium/arrays+dp), find-longest-substring-vowels-even (medium/hash-map+strings), reverse-substrings-between-parentheses (medium/stack+strings), design-stack-with-increment (medium/stack+arrays), minimum-number-of-frogs-croaking (medium/strings+hash-map), shortest-path-visiting-all-nodes (hard/graph+dp), minimum-number-of-work-sessions (medium/dp+backtracking), minimize-product-sum (medium/arrays+math), count-range-sum (hard/arrays+binary-search), all-paths-from-source-lead-to-destination (medium/graph); bank at **1176**; 3802 tests.
- [x] **9 more classic problems (Batch 17)** — jump-game-v (dp/medium), word-subsets (strings/medium), max-chunks-to-make-sorted-ii (arrays/hard), count-ways-to-place-houses (dp/medium), stone-game-viii (dp/medium), stone-game-ix (math/medium), maximum-score-removing-stones (math/medium), number-of-atoms (strings/hard), find-all-people-with-secret (graph/hard); bank at **1185**; 3829 tests.
- [x] **7 more classic problems (Batch 18)** — plates-between-candles (arrays/medium), minimum-cost-to-make-all-characters-equal (strings/medium), maximum-consecutive-floors-without-special-floors (arrays/medium), minimum-moves-to-reach-target-score (math/medium), maximum-segment-sum-after-removals (arrays/hard), prime-palindrome (math/medium), car-fleet-ii (stack/hard); bank at **1192**; 3850 tests.
- [x] **9 more classic problems (Batch 17-local)** — advantage-shuffle (arrays/medium), longest-repeating-character-replacement (sliding-window/medium), subarrays-with-k-different-integers (sliding-window/hard), binary-subarrays-with-sum (hash-map/medium), reduce-array-size-to-the-half (hash-map/medium), number-of-ways-to-divide-a-long-corridor (math/hard), delete-operation-for-two-strings (dp/medium), product-of-array-except-self (arrays/medium), minimum-moves-to-equal-array-elements (math/medium); bank at **1200**; 3877 tests.
- [x] **4 more classic problems (Batch 19)** — minimum-path-cost-in-a-grid (dp/medium), count-ways-group-overlapping-ranges (math/medium), take-gifts-from-the-richest-pile (heap/easy), find-all-good-indices (arrays/medium); bank at **1218**; 3924 tests. Also added remote Batch 18-local (race-car, minimum-cost-to-make-valid-parentheses, minimum-score-of-path, count-operations-to-obtain-zero-ii, minimum-deletions-to-balance-parentheses, smallest-divisor-given-threshold, additive-number, unique-paths-iii).
- [x] **5 more classic problems (Batch 20)** — partition-array-into-three-parts-with-equal-sum (arrays/easy), second-largest-digit-in-string (strings/easy), number-of-operations-to-make-network-connected (graph/medium), maximize-number-of-tasks-you-can-assign (arrays+binary-search/hard), minimum-consecutive-cards-to-pick-up (hash-map/medium); bank at **1223**; 3939 tests.
- [x] **3 more classic problems (Batch 21)** — lexicographically-smallest-palindrome (strings/easy), minimum-operations-to-make-binary-array-elements-equal-to-one-ii (arrays/medium), closest-prime-numbers-in-range (math/medium); bank at **1226**; 3948 tests.
- [x] **3 more classic problems (Batch 22)** — sum-of-subarray-minimums (stack/medium), maximum-xor-for-each-query (arrays/medium), count-ways-to-split-array (arrays/medium); bank at **1234** (with remote merges); 3957 tests.
- [x] **3 more classic problems (Batch 23)** — maximum-subarray-sum-with-one-deletion (dp/medium), number-of-sub-arrays-size-k-average-threshold (sliding-window/medium), grumpy-bookstore-owner (sliding-window/medium); bank at **1237**; 3966 tests.
- [x] **3 more classic problems (Batch 24)** — most-stones-removed-with-same-row-or-column (graph/medium), longest-subsequence-with-limited-sum (arrays/easy), minimum-number-of-arrows-to-burst-balloons (arrays/medium); bank at **1249** (with remote merges); 3975 tests.
- [x] **TerminalPanel diff hints in Terminal tab** — Terminal tab now shows `ArrayDiffHint` + `StringDiffHint` on fail entries (stored raw expected/actual alongside stringified); previously only Test Results tab showed diff hints.
- [x] **Marketing site stats updated** — all three "1,100+" stat locations updated to "1,200+".
- [x] **5 more classic problems (Batch 25)** — find-largest-value-each-tree-row (tree/medium, BFS max per level), find-bottom-left-tree-value (tree/medium, BFS leftmost last row), most-stones-removed-same-row-or-column (graph/medium, Union-Find), count-unreachable-pairs-of-nodes (graph/medium, DFS component counting), my-calendar-i (arrays+binary-search/medium, interval overlap); bank at **1254**; 3990 tests.
- [x] **3 more classic problems (Batch 26)** — find-players-with-zero-or-one-losses (hash-map/medium), count-unreachable-pairs-after-removing-vertices (graph/medium, Union-Find), maximum-value-at-given-index-in-bounded-array (binary-search/medium, BigInt for overflow safety); bank at **1257**; 3999 tests.
- [x] **5 more classic problems (Batch 27)** — minimum-area-rectangle (arrays+hash-map/medium, diagonal O(n^2)), minimum-operations-to-halve-array-sum (heap/medium, greedy), maximum-binary-string-after-change (strings/medium, single-zero placement), circular-array-loop (arrays+two-pointers/medium, Floyd's + direction guard), longest-arithmetic-subsequence-of-given-difference (dp+hash-map/medium, O(n)); bank at **1262**; 4014 tests.
- [x] **3 more classic problems (Batch 28)** — time-needed-to-buy-tickets (arrays/easy, formula), number-of-subarrays-with-bounded-maximum (sliding-window/medium, two-pointer dp), kth-smallest-element-in-bst (tree/medium, inorder traversal with BST preamble); bank at **1265**; 4023 tests.
- [x] **3 more classic problems (Batch 29)** — find-minimum-in-rotated-sorted-array (binary-search/medium), search-in-rotated-sorted-array (binary-search/medium), minimum-number-of-days-to-make-m-bouquets (binary-search/medium, feasibility check); bank at **1268**; 4032 tests.
- [x] **10 more classic problems (Batch 19-local)** — walls-and-gates (graph/medium, multi-source BFS), making-a-large-island (graph/hard, DFS island labeling), increasing-order-search-tree (tree/easy, in-order flattening), next-greater-node-in-linked-list (stack/medium, monotonic stack), longest-cycle-in-graph (graph/hard, timestamp DFS), maximum-subarray-min-product (stack/medium, prefix sum + monotonic stack + BigInt MOD), steps-to-make-array-nondecreasing (stack/medium, DP+monotonic stack), count-substrings-that-differ-by-one-character (strings/medium, diagonal traversal), minimum-operations-to-move-balls (arrays/easy, two-pass O(n)), maximum-area-of-piece-of-cake (arrays/medium, sort+max-gap, BigInt MOD); bank at **1277**; 4074 tests. Also merged remote batch 28 (15 more problems).
- [x] **4 more classic problems (Batch 30)** — split-array-into-consecutive-subsequences (arrays+hash-map/medium, greedy freq+end maps), restore-the-array-from-adjacent-pairs (arrays+hash-map/medium, adjacency list + endpoint traversal), monotone-increasing-digits (math/medium, right-to-left decrement + fill 9s), construct-k-palindrome-strings (strings+hash-map/medium, oddCount ≤ k ≤ s.length); bank at **1272**; 4044 tests.
- [x] **5 more classic problems (Batch 31-remote)** — remove-duplicate-letters (stack/medium, monotone stack greedy), best-time-to-buy-and-sell-stock-iv (dp/hard, O(kn) buy/sell DP), shortest-path-with-alternating-colors (graph/medium, BFS color state), minimum-swaps-to-make-sequences-increasing (dp/medium, keep/swap DP transitions), array-of-doubled-pairs (arrays+hash-map/medium, sort by abs + greedy count); bank at **1282**; 4098 tests.
- [x] **3 more classic problems (Batch 31-local)** — count-vowel-permutation (dp/medium, 5-state transition mod 10^9+7), longest-ideal-subsequence (dp/medium, O(26n) dp by char index), minimum-string-length-after-removing-substrings (strings+stack/easy, stack collapse AB/CD); bank at **1283**; 4107 tests.
- [x] **10 more classic problems (Batch 30-local)** — push-dominoes (arrays/medium, force propagation), largest-merge-of-two-strings (strings/medium, greedy suffix comparison), remove-covered-intervals (arrays/medium, sort+max-right), minimize-array-value (arrays/medium, prefix average ceiling), validate-ip-address (strings/medium, split+regex), maximum-sum-hourglass (arrays/medium, 3×3 scan), reverse-odd-levels-binary-tree (tree/medium, symmetric DFS swap), find-closest-node-to-given-two-nodes (graph/medium, functional graph BFS), number-of-flowers-in-full-bloom (binary-search/medium, sorted starts/ends), most-beautiful-item-for-each-query (arrays+binary-search/medium, sorted prefix-max beauty); bank at **1298**; 4137 tests.
- [x] **5 more classic problems (Batch 32-remote)** — total-hamming-distance (math/medium, bitwise population count per bit), maximum-number-of-occurrences-of-a-substring (strings+sliding-window/medium, only minSize matters), longest-happy-prefix (strings+dp/medium, KMP failure function), reducing-dishes (dp/hard, greedy sort desc + running sum), find-closest-node-to-given-two-nodes merged with remote (graph/medium); bank at **1287**; 4149 tests.
- [x] **3 more classic problems (Batch 32-local)** — minimum-number-of-swaps-to-make-string-balanced (strings+two-pointers/medium, unmatched closing brackets / 2), number-of-substrings-containing-all-three-characters (strings+sliding-window/medium, track last-seen positions), maximum-score-from-removing-substrings (strings+stack/medium, greedy order + two-pass stack); bank at **1304**; 4158 tests.
- [x] **3 more classic problems (Batch 33)** — minimum-deletions-to-make-string-balanced (strings+dp/medium, O(n) scan bCount/dp), minimum-difference-between-largest-smallest-three-moves (arrays/medium, sort + 4-window min), shortest-subarray-to-remove-to-make-array-sorted (arrays+two-pointers/medium, prefix/suffix + two-pointer merge); bank at **1307**; 4167 tests.
- [x] **3 more classic problems (Batch 34)** — minimum-health-to-beat-the-game (arrays/medium, greedy armor on max), check-if-string-contains-all-binary-codes-of-size-k (strings+hash-map/medium, sliding window + set), longest-nice-substring (strings/easy, divide-and-conquer on missing-case chars); bank at **1310**; 4176 tests.
- [x] **3 more classic problems (Batch 35)** — longest-subarray-of-1s-after-deleting-one-element (sliding-window/medium, window with at most 1 zero, answer = size−1), count-number-of-nice-subarrays (sliding-window/medium, exactly k = atMost(k)−atMost(k−1)), maximum-length-of-a-concatenated-string-with-unique-characters (backtracking/medium, bitmask DFS); also merged remote Batch 35 (minimum-add-to-make-parentheses-valid, predict-winner, can-i-win, optimal-division, minimum-insertions-to-balance-parentheses); bank at **1301**; 4200 tests.
- [x] **4 more classic problems (Batch 36)** — number-of-ways-to-arrive-at-destination (graph+dp/medium, Dijkstra + count paths mod 1e9+7), reorder-routes-to-make-all-paths-lead-to-city-zero (graph/medium, BFS counting forward edges), maximum-length-of-pair-chain (dp/medium, greedy sort by right endpoint), count-servers-that-communicate (arrays/medium, row+col counts); marketing site updated to 1,320+; also merged remote Batch 36 (count-the-number-of-fair-pairs, find-if-array-can-be-sorted, construct-string-with-repeat-limit, count-ways-to-select-buildings, power-of-heroes); bank at **1322**; 4263 tests.
- [x] **12 more classic problems (Batch 36-remote)** — nim-game (math/easy), palindrome-permutation (strings+hash-map/easy), remove-element (arrays+two-pointers/easy), water-bottles (math/easy), distribute-candies (hash-map+arrays/easy), count-prime-set-bits (math/easy), verifying-alien-dictionary (strings+hash-map/easy), rectangle-area (math/medium, union of two rectangles), encode-decode-strings (strings/medium, length-prefix encoding), shortest-distance-to-character (arrays+two-pointers/easy, two-pass), utf-8-validation (math/medium, bit parsing), range-addition (arrays/medium, difference array); bank at **1313**; 4236 tests. Marketing site updated to 1,320+.
- [x] **5 more classic problems (Batch 34-local)** — count-the-number-of-fair-pairs (arrays+binary-search/medium, sort+two-pointer countAtMost), find-if-array-can-be-sorted (arrays/medium, popcount grouping+prevMax check), construct-string-with-repeat-limit (strings+heap/medium, greedy freq array desc), count-ways-to-select-buildings (strings+dp/medium, prefix-ones 010/101 pattern), power-of-heroes (arrays+math/hard, sort+running weighted sum BigInt mod); bank at **1318**; 4251 tests.
- [x] **5 more classic problems (Batch 37)** — valid-palindrome (strings/easy, two-pointer alphanumeric), peak-index-in-mountain-array (binary-search/easy, O(log n) binary search), two-keys-keyboard (math+dp/medium, prime factorization sum), bag-of-tokens (arrays+two-pointers/medium, greedy sort+two-pointer), find-the-k-weakest-rows-in-a-matrix (arrays+binary-search/easy, sort by soldier count); bank at **1331**; 4278 tests.

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
