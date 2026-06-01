# LeetCode Parity Audit

A scannable, opinionated map of what `leetcode.com`'s problem-solving experience offers
today versus what LeetLock's challenge screen ships, focused exclusively on the
**solving UX** (problem statement → editor → run/submit → verdict). Auth, paid tiers,
contests, the social graph, the study plans, and Premium-only company tags are all
out-of-scope by design — LeetLock isn't trying to *be* LeetCode, it's trying to be a
honest, frictionless gate that *feels* like LeetCode when you hit it.

**Legend**
- **Status**: ✅ Have · 🟡 Partial · ❌ Missing · 🚫 Out-of-scope (paid / off-strategy)
- **Priority for parity**: H = high (visible gap, cheap fix) · M = medium (worth doing
  before 1.0) · L = low (nice-to-have / expensive / paid-tier-only)

> **Last updated:** 2026-05-24. Reflects current main — many items updated from the
> original ❌ state to ✅ as features shipped.

---

## 1. Editor features

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Code editor base                         | Monaco (the VS Code editor), all features wired                                                     | CodeMirror 6                                |   🟡   |    —     | Different stack, intentional. CM6 is lighter, faster, and CSP-friendly inside an MV3 extension. Don't switch.            |
| Bracket matching                         | Yes                                                                                                 | Yes (`bracketMatching()` extension)         |   ✅   |    —     |                                                                                                                          |
| Auto-close brackets / quotes             | Yes — auto-pairs `()`, `[]`, `{}`, `""`, `''`                                                       | Yes (`closeBrackets()` from `@codemirror/autocomplete`) |   ✅   |    —     | Shipped in Phase 13 Editor QoL pass.                                                                                    |
| Autocomplete / IntelliSense              | JS keyword + variable autocomplete (free tier); language-aware IntelliSense gated behind Premium    | `autocompletion()` wired; JS + Python keyword completions |   ✅   |    —     | Free-tier parity. Type-aware IntelliSense is out-of-scope.                                                               |
| Snippet expansion                        | Some language stubs offered on first open                                                           | Keyword abbreviations (for/forr/while/if/ife/etc.) in JS + Python; expand on Tab via CM6 `languageData` source | ✅ | — | Shipped Phase 13. Additive — native language completions still active alongside snippets. |
| Multi-cursor                             | Yes (Monaco default — alt-click, ctrl-d)                                                            | Yes (`drawSelection` + `allowMultipleSelections`) |   ✅   |    —     | Alt-Click adds a cursor; Ctrl-D/Cmd-D selects next occurrence.                                                           |
| Vim keymap                               | Yes — Settings → Code editor → Key binding → Vim                                                    | Yes — `editorKeymap: 'vim'` via `@replit/codemirror-vim`; toggle in popup + options |   ✅   |    —     | Full modal Vim; persisted to `userPreferences`.                                                                          |
| Emacs keymap                             | Yes (same menu)                                                                                     | Yes — `editorKeymap: 'emacs'` via `@replit/codemirror-emacs`; toggle in popup + options | ✅ | — | Full Emacs bindings (Ctrl-A/E, M-f/b, Ctrl-K, etc.); persisted to `userPreferences`.                                    |
| Font size control                        | Settings drawer slider (12–24 px ish)                                                               | Segmented button (S/M/L/XL) in popup; slider in Options → Editor | ✅ | — | Persisted to `userPreferences`; live-reconfigured via Compartment.                                                       |
| Font family choice                       | A handful of monospace choices                                                                      | Single (theme-defined)                      |   ❌   |    L     | Nice-to-have. Don't ship a font picker for one user request.                                                              |
| Tab size / spaces vs tabs                | Configurable                                                                                        | Radio group (2 / 4 spaces) in Options → Editor; persisted to `userPreferences.editorIndentSize`; line/column indicator in editor status bar |   ✅   |    —     | Shipped. Tab handler uses `indentSpaces(indentSizeRef.current)`.                                                          |
| Line wrapping                            | On by default                                                                                       | On (`EditorView.lineWrapping`)              |   ✅   |    —     |                                                                                                                          |
| Line numbers                             | On                                                                                                  | On (`lineNumbers()`)                        |   ✅   |    —     |                                                                                                                          |
| Code formatting (Prettier-like)          | "Format code" button (Premium-style polish; sometimes flaky)                                        | None                                        |   ❌   |    L     | Skip unless we ship Prettier in the worker. Cost vs value isn't worth it for MVP.                                        |
| Language selector                        | Dropdown above editor; switching swaps starter code; **last-used language is remembered**           | Segmented selector (JS/Py) in editor header; preference persisted | ✅ | — | Python support via Pyodide. Language choice persisted to `userPreferences.preferredLanguage`.                            |
| Cmd/Ctrl+Enter → Run                     | Was Ctrl+Enter → Submit, now Ctrl+' → Run, Ctrl+Enter → Submit (changed 2019, often complained about) | `Mod-Enter` → Run, `Mod-Shift-Enter` → Submit | ✅ | — | Shown in action bar and keyboard-shortcuts modal.                                                                         |
| Save shortcut                            | No (problems auto-persist server-side)                                                              | Draft code auto-saved to `chrome.storage.local` (800ms debounce, 7-day TTL, per-problem) | ✅ | — | Restores in-progress code after a refresh or tab close.                                                                  |
| Undo/redo                                | Yes; persisted while page is open                                                                   | Yes (`history()` extension)                 |   ✅   |    —     |                                                                                                                          |
| Indent on input                          | Yes                                                                                                 | Yes (`indentOnInput()`)                     |   ✅   |    —     |                                                                                                                          |
| Reset to starter code                    | "Reset code" button (Ctrl+Alt+L)                                                                    | `Alt-R` shortcut; listed in keyboard-shortcuts modal | ✅ | — | Replaces editor content with the problem's starter code.                                                                  |
| Recover last submitted code              | Ctrl+Alt+M                                                                                          | "restore" button per row in SubmissionsPanel | ✅ | — | `code` field on `SubmissionRecord`; `resetCode` prop on EditorPanel dispatches content swap.                             |
| Find / replace                           | Yes (Monaco built-in, Ctrl+F / Ctrl+H)                                                              | Yes — `@codemirror/search` + `searchKeymap` (Cmd-F) | ✅ | — |                                                                                                                          |

---

## 2. Problem-panel features

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Title                                    | "#125. Valid Palindrome" with number                                                                | Title string                                |   ✅   |    —     | LeetLock owns its bank, so no real "problem number" is needed — could still show a stable ID.                            |
| Difficulty pill                          | Colored pill (Easy=green, Medium=yellow, Hard=red)                                                  | Grayscale pill, contrast-graded             |   ✅   |    —     | LeetLock's grayscale is *intentional* design. Counts as parity.                                                           |
| Topic tags                               | Inline chip row ("Array", "Two Pointers", …)                                                        | Tag pill row                                |   ✅   |    —     |                                                                                                                          |
| Acceptance-rate badge                    | "Acceptance: 47.8%"                                                                                 | None                                        |   ❌   |    L     | We don't have submission data. Could fake a static "Average solve time" stat per problem instead.                         |
| Frequency badge (Premium)                | Premium                                                                                             | n/a                                         |  🚫   |    —     | Out-of-scope.                                                                                                            |
| Company tag chip row (Premium)           | Premium                                                                                             | n/a                                         |  🚫   |    —     | Out-of-scope.                                                                                                            |
| Markdown rendering                       | Full markdown — headings, bold, italic, lists, links, code blocks                                   | Full GFM markdown via `react-markdown`; custom grayscale component map; raw HTML disabled | ✅ | — | Shipped in Phase 13 polish.                                                                                               |
| Inline code (`` `like this` ``)          | Yes                                                                                                 | Yes (comes with react-markdown)             |   ✅   |    —     |                                                                                                                          |
| Fenced code blocks in description        | Syntax-highlighted (e.g. for input/output schemas)                                                  | Grayscale syntax highlighting via `rehype-highlight` (JS + Python) | ✅ | — | Token classes map to `--ll-text`/`--ll-muted`/`--ll-faint`; zero hue. Shipped in Phase 13 polish.                        |
| LaTeX / math rendering                   | KaTeX in newer problems (sums, big-O notation)                                                      | `remark-math` + `rehype-katex`; inline `$...$` and display `$$...$$` work in problem descriptions | ✅ | — | Shipped Phase 13. CSS vars override KaTeX's hardcoded black for dark/light theme compat. |
| Image support in examples                | Yes — many problems include diagrams (trees, grids)                                                 | No                                          |   ❌   |    L     | Real friction for tree/graph problems. Cost: bundle images + alt text in the problem bank.                                |
| Worked examples block                    | Each example: Input, Output, Explanation                                                            | Same shape                                  |   ✅   |    —     |                                                                                                                          |
| Collapsible examples                     | No — always expanded                                                                                | Always expanded                             |   ✅   |    —     | Parity.                                                                                                                  |
| Constraints list                         | Bulleted, monospace numbers                                                                         | Bulleted, monospace                         |   ✅   |    —     |                                                                                                                          |
| "Follow-up" callout                      | Bold "Follow-up:" line at end of description                                                        | Supported via markdown (bold text)          |   ✅   |    —     | Problem authors can write `**Follow-up:**` in the markdown description.                                                   |
| Hints (collapsible)                      | "Show Hint 1 / 2 / 3" buttons; each reveals a paragraph                                             | Progressive reveal with 60s timer cost; 3 hints per problem in the bank | ✅ | — | The friction is intentional — aligned with the LeetLock brand.                                                           |
| Related topics list                      | Bottom of page: list of related topic tags linking to the topic browser                             | Tag pill row only                           |   🟡   |    L     | Less useful in LeetLock since there's no topic browser to navigate to.                                                    |
| Similar problems list                    | "Similar Questions" card with links                                                                 | None                                        |   ❌   |    L     | Could become a "next problem" suggestion on the post-solve screen.                                                        |
| Solution tab (editorial)                 | Tab with paid+free editorial walkthrough                                                            | None                                        |   🚫   |    —     | Out-of-scope. We *should not* show solutions — undermines the gate.                                                       |
| Discussion tab                           | Community discussion thread                                                                         | None                                        |   🚫   |    —     | Out-of-scope. Don't ship.                                                                                                 |
| Submissions tab                          | Past submissions for *this* problem                                                                 | Per-session submission history table (collapsible SubmissionsPanel below editor) | ✅ | — | Persisted per-problem in `chrome.storage.local` under `submissionHistory`; cleared on acceptance.                        |

---

## 3. Test cases & result UI

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Console panel at bottom                  | Tabbed panel ("Testcase", "Test Result") below editor                                               | Inline verdict region above the action bar  |   🟡   |    —     | LeetLock's layout is single-column-of-info — simpler, scans well. Conscious choice.                                       |
| "Testcase" tab — custom input            | Editable text box; can add multiple test cases; **tab-based or raw input** toggle                   | CustomTestPanel — per-param JSON inputs, collapsible drawer | ✅ | — | Ships below the verdict panel; collapses to one line when closed.                                                         |
| "Test Result" tab                        | Shows last run: input, your output, expected output, console output                                 | Verdict cards (pass/fail + input + expected/actual + logs) | ✅ | — | Input row added to every failing verdict card so users can debug.                                                        |
| Side-by-side expected/actual diff        | Stacked, not side-by-side; just three labelled rows                                                 | Stacked rows ("input" / "expected" / "actual") | ✅ | — | LeetLock now shows input alongside expected/actual.                                                                      |
| Per-test breakdown row                   | Tabs across the top of result panel — one per test case                                             | One card per test                           |   ✅   |    —     | LeetLock's *list-of-cards* is arguably more scannable than LC's per-test tabs.                                            |
| Console.log output                       | Captured + shown in result panel                                                                    | Captured + shown beneath the failing test   |   ✅   |    —     |                                                                                                                          |
| Runtime stat                             | "Runtime: 56 ms" + percentile beat                                                                  | Per-test `durationMs` shown; `totalDurationMs` in accepted banner | 🟡 | L | We show timing. Percentile is impossible without a backend.                                                              |
| Memory stat                              | "Memory: 41.2 MB" + percentile beat                                                                 | None                                        |   ❌   |    L     | `performance.memory` is Chrome-only & gated; usually noisy. Skip.                                                         |
| "Last submitted at" timestamp            | Yes                                                                                                 | Shown in SubmissionsPanel (persisted)       |   ✅   |    —     | Timestamp stored in `submissionHistory`; survives page reloads.                                                          |
| Submission-history accordion             | Yes, under Submissions tab                                                                          | SubmissionsPanel — collapsible table below the verdict region | ✅ | — | Persisted to `chrome.storage.local`; loaded on mount.                                                                    |
| Verdict states                           | Accepted / Wrong Answer / Runtime Error / TLE / Compile Error / Memory Limit Exceeded               | Accepted / Wrong Answer / Runtime Error / Compile Error / **Timeout (TLE)** | ✅ | — | LeetLock has every state that matters for our worker-based judge.                                                         |
| Accept banner ("All test cases passed!") | Green banner + confetti                                                                             | Grayscale "accepted" banner                 |   ✅   |    —     | LeetLock omits confetti by design — solving is the reward, not the celebration.                                            |
| Time-limit-exceeded handling             | Server-side TLE                                                                                     | `worker.terminate()` + `timeout` outcome    |   ✅   |    —     | LeetLock's hard 4s/6s timeout is honest and visible.                                                                      |
| Retry without losing code                | Yes — code persists across runs                                                                     | Yes — code lives in CM6 state + auto-saved to storage | ✅ | — |                                                                                                                          |

---

## 4. Layout & shortcuts

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Two-column split (problem / editor)      | Yes, side-by-side                                                                                   | Yes, dynamic ratio                          |   ✅   |    —     |                                                                                                                          |
| Draggable splitter between panels        | Yes — drag the vertical divider                                                                     | Yes — pointer-capture drag handle; persists ratio to `userPreferences` | ✅ | — | Hidden on mobile (`max-lg`); problem panel caps at 45 vh on small screens.                                               |
| Fullscreen editor toggle                 | Yes — a small button collapses the problem panel                                                    | Yes — ⊞/⊡ button in editor header; `aria-pressed` | ✅ | — |                                                                                                                          |
| Dynamic-layout vs split-view modes       | LC now offers a "Dynamic Layout" mode (problem on left, editor + console as a 3rd column)           | Single split layout                         |   ❌   |    L     | LC's dynamic mode is divisive among users. Skip — our two-pane is simpler.                                                |
| Theme: dark/light                        | Both, toggle in settings                                                                            | Dark, Light, and System — toggle in popup; CodeMirror adapts to match | ✅ | — | Full light/dark theming incl. CodeMirror editor. System mode follows OS preference.                                      |
| Editor settings drawer                   | Gear icon → drawer with font, theme, keymap, tab size                                               | Font size + keymap toggle in popup; full Options → Editor section | ✅ | — | All settings accessible, though surfaced in popup / options rather than an inline drawer.                                |
| Keyboard-shortcut palette (Cmd+K style)  | None                                                                                                | `?` button → keyboard-shortcuts modal (all shortcuts, Esc/backdrop close) | ✅ | — | LeetLock ships this; LC doesn't.                                                                                          |
| Run shortcut                             | Ctrl+'                                                                                              | `Mod-Enter`                                 |   ✅   |    —     | LC's `Ctrl+'` is awkward. `Mod-Enter` is more intuitive.                                                                  |
| Submit shortcut                          | Ctrl+Enter                                                                                          | `Mod-Shift-Enter`                           |   ✅   |    —     |                                                                                                                          |
| Reset code shortcut                      | Ctrl+Alt+L                                                                                          | `Alt-R`                                     |   ✅   |    —     |                                                                                                                          |
| Timer in header                          | Optional timer with auto-reset + "super alarm"                                                       | Always-on MM:SS countdown                   |   ✅   |    —     | LeetLock's timer is *load-bearing* — it's not optional. Parity++.                                                          |
| Tab-close confirmation                   | Yes — "you have unsaved changes" beforeunload                                                       | Yes — `beforeunload` handler; suppressed during programmatic navigation | ✅ | — | Solving or failing navigates programmatically so no false "Leave site?" prompt.                                           |

---

## 5. Accessibility & responsiveness

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Narrow viewport behavior                 | Mobile is essentially unusable; tablet falls back to stacked layout                                 | Stacks below `lg` (~1024 px) into vertical layout |   ✅   |    —     | LeetLock is responsive *better* than LC on tablets.                                                                       |
| Keyboard navigation through controls     | Partial — Monaco traps focus aggressively                                                           | All buttons have `onKeyDown` handlers for Enter/Space; ARIA labels everywhere |   ✅   |    —     | LeetLock has the better accessibility story today.                                                                        |
| Focus management on verdict update       | None — verdict appears silently                                                                     | `role="status"` + `aria-live="polite"` on the verdict panel |   ✅   |    —     | LeetLock screen-reader-announces every run result. Concrete a11y win.                                                     |
| ARIA labels on icon buttons              | Some                                                                                                | All controls have `aria-label`              |   ✅   |    —     |                                                                                                                          |
| Color-contrast on difficulty/verdict     | Color-coded (red/yellow/green) — fails WCAG AA for some color-blind users                           | Grayscale, contrast-graded                  |   ✅   |    —     | LeetLock is meaningfully better here.                                                                                     |
| Reduced-motion respect                   | Confetti animations ignore `prefers-reduced-motion`                                                 | No animations to begin with                 |   ✅   |    —     |                                                                                                                          |
| Resize / zoom (browser zoom)             | Mostly OK at 125%, breaks at 200%                                                                   | Untested at high zoom; likely OK since type scale is rem-based |   🟡   |    L     | Quick QA pass at 150/200% before 1.0.                                                                                     |
| RTL support                              | No                                                                                                  | No                                          |   🚫   |    —     | Out-of-scope.                                                                                                              |

---

## Where LeetLock is *better* than LeetCode (for the README / marketing site)

These are quotable, screenshot-able wins. Put them on the marketing page.

1. **Zero ads, zero upsells, zero "Premium" nags.** LeetCode's free experience is now a
   constant Premium funnel. The challenge screen has no ads, no banners, no upsell.
2. **Grayscale-by-design.** The whole UI is monochrome. No green/red traffic-light tax
   for color-blind users; the visual hierarchy is contrast and typography only.
3. **Accessible by default.** Every interactive element has an `aria-label`, the verdict
   panel uses `aria-live` so screen readers announce results, and every button responds
   to Space and Enter — not just mouse clicks. (LeetCode's Monaco focus-trap and
   silent verdict updates fail both checks today.)
4. **Honest TLE.** LeetCode's runtime numbers are noisy and gamified ("0 ms beats 100%"
   is a meme). LeetLock has a hard 4-second / 6-second worker timeout. If your code
   doesn't terminate, you see it immediately.
5. **No login required.** LeetCode requires an account to save progress. LeetLock keeps
   solve history in `chrome.storage` — no signup, no email, no email harvesting.
6. **No "show solution" temptation.** LeetCode dangles a Solution tab and a Discussion
   tab on every problem. LeetLock has no escape hatch. If you wanted to bail, you can
   just close the tab — and that's the cost.
7. **Truly responsive.** LeetLock stacks cleanly on tablet widths; LC effectively
   requires a desktop.
8. **The whole UI is the problem.** No nav bar, no sidebar, no footer, no breadcrumbs.
   100% of the screen is the work surface.
9. **Open source.** MIT-licensed; the worker, the judge, and every test in the bank are
   readable on GitHub. LeetCode is a closed black box.
10. **Draft code auto-saved.** Code is automatically saved to `chrome.storage.local`
    per-problem with an 800ms debounce. Refreshing or reopening the tab restores
    in-progress work — no data loss.
11. **Light + dark + system theme.** Full light-mode support including the code editor
    itself; follows OS preference when set to System.
12. **Custom test cases without a server.** Run any argument combination against your
    code locally with the Custom Test drawer — no submission needed, no rate limits.

---

## Top-of-stack: remaining gaps

All H/M priority items have been addressed. Remaining gaps are L priority:

1. **Browser-zoom QA** — quick check at 150% and 200% before 1.0.
2. **Image support in problem descriptions** — needed for tree/grid problems; significant authoring cost.
3. Everything else (runtime/memory percentiles, font family picker) is post-1.0 and should
   be evaluated against actual user feedback.

*Completed since last audit: LaTeX / math rendering ✅ (`remark-math` + `rehype-katex`, Phase 13); snippet expansion ✅ (CM6 `languageData`-based keyword snippets for JS + Python, Phase 13).*

*Completed from previous iterations: Emacs keymap ✅; Recover last submitted code ✅; Syntax highlighting in code blocks ✅; Persistent submission history ✅; Per-test input in verdict ✅.*

---

## Sources

- [LeetCode — Start your Coding Practice (Help Center)](https://support.leetcode.com/hc/en-us/articles/360012016874-Start-your-Coding-Practice)
- [LeetCode — How to create test cases on LeetCode (Help Center)](https://support.leetcode.com/hc/en-us/articles/32442719377939-How-to-create-test-cases-on-LeetCode)
- [LeetCode Discuss — Keyboard shortcuts for Run / Submit](https://leetcode.com/discuss/general-discussion/136588/is-there-any-keyboard-shortcut-to-run-code-and-submit-solution/)
- [LeetCode Discuss — Disable autocomplete missing in editor settings](https://leetcode.com/discuss/post/721208/disable-autocomplete-is-missing-in-the-editor-settings/)
- [LeetCode Discuss — Feature release notes thread](https://leetcode.com/discuss/post/5736503/)
- [LeetCode Discuss — Dynamic Layout vs Split View mode](https://leetcode.com/discuss/post/4770646/Leetcode-UI:-Dynamic-Layout-vs-Split-View-mode/)
- [LeetCode Discuss — Markdown formatting cheatsheet](https://leetcode.com/discuss/general-discussion/1560831/markdown-reference-for-leetcode-formatting-cheatsheet/)
- [LeetCode Discuss — How to create a new testcase in the new LeetCode UI](https://leetcode.com/discuss/general-discussion/5717210/How-to-create-a-new-testcase-in-the-new-leetcode-UI/)
- [Greasy Fork — "Bring back Submit Code shortcut (Ctrl/Cmd+Enter)"](https://greasyfork.org/en/scripts/424233-leetcode-bring-back-submit-code-shortcut-ctrl-cmd-enter)
- [LinkedIn — Enabling Vim mode in LeetCode settings](https://www.linkedin.com/posts/harsh04gautam_leetcode-activity-7134417503572664320-OnrR)
- [Medium — Why LeetCode shows 100% beat rate and 0ms runtime](https://medium.com/@ismoil.793/why-leetcode-shows-100-beat-rate-and-0ms-runtime-the-real-reason-behind-it-847ca256e304)
- [labuladong — LeetCode Guide (custom test cases, run vs submit)](https://labuladong.online/en/algo/intro/leetcode/)
