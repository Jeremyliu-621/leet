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

---

## 1. Editor features

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Code editor base                         | Monaco (the VS Code editor), all features wired                                                     | CodeMirror 6                                |   🟡   |    —     | Different stack, intentional. CM6 is lighter, faster, and CSP-friendly inside an MV3 extension. Don't switch.            |
| Bracket matching                         | Yes                                                                                                 | Yes (`bracketMatching()` extension)         |   ✅   |    —     |                                                                                                                          |
| Auto-close brackets / quotes             | Yes — auto-pairs `()`, `[]`, `{}`, `""`, `''`                                                       | No                                          |   ❌   |    H     | One-liner: add `closeBrackets()` from `@codemirror/autocomplete`. Single biggest "feels broken" gap.                    |
| Autocomplete / IntelliSense              | JS keyword + variable autocomplete (free tier); language-aware IntelliSense gated behind Premium    | None                                        |   🟡   |    M     | Free-tier parity is just `autocompletion()` + `javascriptLanguage.data.of(...)`. Cheap. Don't bother with type-aware.    |
| Snippet expansion                        | Some language stubs offered on first open                                                           | Starter code only                           |   ❌   |    L     | Out-of-scope unless we ship many languages.                                                                              |
| Multi-cursor                             | Yes (Monaco default — alt-click, ctrl-d)                                                            | No                                          |   ❌   |    M     | `EditorState.allowMultipleSelections.of(true)` + the `multipleSelections` extension. ~10 LOC.                            |
| Vim keymap                               | Yes — Settings → Code editor → Key binding → Vim                                                    | No                                          |   ❌   |    M     | `@replit/codemirror-vim` is the standard CM6 binding. Probably one user toggle in the options page.                      |
| Emacs keymap                             | Yes (same menu)                                                                                     | No                                          |   ❌   |    L     | `@replit/codemirror-emacs`. Niche; ship if/when vim ships.                                                                |
| Font size control                        | Settings drawer slider (12–24 px ish)                                                               | Fixed (theme-defined)                       |   ❌   |    M     | Add to options page; persist in `userPreferences`. Important for accessibility.                                          |
| Font family choice                       | A handful of monospace choices                                                                      | Single (theme-defined)                      |   ❌   |    L     | Nice-to-have. Don't ship a font picker for one user request.                                                              |
| Tab size / spaces vs tabs                | Configurable                                                                                        | Hard-coded 2 spaces                         |   ❌   |    L     | Almost nobody changes it; defer.                                                                                          |
| Line wrapping                            | On by default                                                                                       | On (`EditorView.lineWrapping`)              |   ✅   |    —     |                                                                                                                          |
| Line numbers                             | On                                                                                                  | On (`lineNumbers()`)                        |   ✅   |    —     |                                                                                                                          |
| Code formatting (Prettier-like)          | "Format code" button (Premium-style polish; sometimes flaky)                                        | None                                        |   ❌   |    L     | Skip unless we ship Prettier in the worker. Cost vs value isn't worth it for MVP.                                        |
| Language selector                        | Dropdown above editor; switching swaps starter code; **last-used language is remembered**           | Label only — "JavaScript"                   |   ❌   |    L     | LeetLock is JS-only on purpose. When Pyodide lands (post-MVP), add a dropdown + remember-last in `userPreferences`.       |
| Cmd/Ctrl+Enter → Run                     | Was Ctrl+Enter → Submit, now Ctrl+' → Run, Ctrl+Enter → Submit (changed 2019, often complained about) | No keyboard shortcut for either             |   ❌   |    H     | Add CM6 `keymap` entries: `Mod-Enter` → Run, `Mod-Shift-Enter` → Submit. Instant power-user win, ~6 LOC.                  |
| Save shortcut                            | No (problems auto-persist server-side)                                                              | N/A — code lives in DOM only                |   🟡   |    L     | We don't persist drafts. Worth considering: persist current code in `storage.local` per problem so a refresh doesn't kill it. |
| Undo/redo                                | Yes; persisted while page is open                                                                   | Yes (`history()` extension)                 |   ✅   |    —     |                                                                                                                          |
| Indent on input                          | Yes                                                                                                 | Yes (`indentOnInput()`)                     |   ✅   |    —     |                                                                                                                          |
| Reset to starter code                    | "Reset code" button (Ctrl+Alt+L)                                                                    | No                                          |   ❌   |    M     | Trivial — re-dispatch `starterCode` into the editor. Helpful when a user wants a fresh start without reload.              |
| Recover last submitted code              | Ctrl+Alt+M                                                                                          | No                                          |   ❌   |    L     | We don't store past submissions; would need history storage. Defer.                                                       |
| Find / replace                           | Yes (Monaco built-in, Ctrl+F / Ctrl+H)                                                              | No                                          |   ❌   |    M     | CM6 ships it as `@codemirror/search`. ~3 LOC; very visible parity gap.                                                    |

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
| Markdown rendering                       | Full markdown — headings, bold, italic, lists, links, code blocks                                   | Paragraph splitting on `\n\n` only          |   ❌   |    M     | Today our problem bank is plain text. Switching descriptions to markdown + adding `react-markdown` + a tiny allowlist of components is ~50 LOC and improves problem authoring significantly. |
| Inline code (`` `like this` ``)          | Yes                                                                                                 | No                                          |   ❌   |    M     | Comes free with markdown.                                                                                                |
| Fenced code blocks in description        | Syntax-highlighted (e.g. for input/output schemas)                                                  | No                                          |   ❌   |    L     | Comes free with markdown + a `pre/code` styler. Skip syntax highlighting in the description until it matters.            |
| LaTeX / math rendering                   | KaTeX in newer problems (sums, big-O notation)                                                      | No                                          |   ❌   |    L     | Useful for graph/math problems. Defer until the bank has any.                                                              |
| Image support in examples                | Yes — many problems include diagrams (trees, grids)                                                 | No                                          |   ❌   |    L     | Real friction for tree/graph problems. Cost: bundle images + alt text in the problem bank.                                |
| Worked examples block                    | Each example: Input, Output, Explanation                                                            | Same shape                                  |   ✅   |    —     |                                                                                                                          |
| Collapsible examples                     | No — always expanded                                                                                | Always expanded                             |   ✅   |    —     | Parity.                                                                                                                  |
| Constraints list                         | Bulleted, monospace numbers                                                                         | Bulleted, monospace                         |   ✅   |    —     |                                                                                                                          |
| "Follow-up" callout                      | Bold "Follow-up:" line at end of description                                                        | No                                          |   ❌   |    L     | Free if we adopt markdown.                                                                                                |
| Hints (collapsible)                      | "Show Hint 1 / 2 / 3" buttons; each reveals a paragraph                                             | No hints field on problems                  |   ❌   |    M     | LeetLock's whole point is *resistance to bailing out* — a "use hint" action could cost streak or time. Brand-aligned.    |
| Related topics list                      | Bottom of page: list of related topic tags linking to the topic browser                             | Tag pill row only                           |   🟡   |    L     | Less useful in LeetLock since there's no topic browser to navigate to.                                                    |
| Similar problems list                    | "Similar Questions" card with links                                                                 | None                                        |   ❌   |    L     | Could become a "next problem" suggestion on the post-solve screen.                                                        |
| Solution tab (editorial)                 | Tab with paid+free editorial walkthrough                                                            | None                                        |   🚫   |    —     | Out-of-scope. We *should not* show solutions — undermines the gate.                                                       |
| Discussion tab                           | Community discussion thread                                                                         | None                                        |   🚫   |    —     | Out-of-scope. Don't ship.                                                                                                 |
| Submissions tab                          | Past submissions for *this* problem                                                                 | None                                        |   ❌   |    L     | We could log solves per-problem under `solvedProblems` and surface them in Settings, but the in-challenge UI shouldn't distract. |

---

## 3. Test cases & result UI

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Console panel at bottom                  | Tabbed panel ("Testcase", "Test Result") below editor                                               | Inline verdict region above the action bar  |   🟡   |    —     | LeetLock's layout is single-column-of-info — simpler, scans well. Conscious choice.                                       |
| "Testcase" tab — custom input            | Editable text box; can add multiple test cases; **tab-based or raw input** toggle                   | None — only the bank's visible tests run    |   ❌   |    M     | Users frequently want to test edge cases. Could be a small expandable drawer with a text input that gets parsed into the same shape as `Problem.visibleTests`. |
| "Test Result" tab                        | Shows last run: input, your output, expected output, console output                                 | Verdict cards (pass/fail + expected/actual + logs) |   ✅   |    —     | LeetLock is on par here — possibly cleaner because every test is shown.                                                  |
| Side-by-side expected/actual diff        | Stacked, not side-by-side; just three labelled rows                                                 | Stacked rows ("expected" / "actual")        |   ✅   |    —     |                                                                                                                          |
| Per-test breakdown row                   | Tabs across the top of result panel — one per test case                                             | One card per test                           |   ✅   |    —     | LeetLock's *list-of-cards* is arguably more scannable than LC's per-test tabs.                                            |
| Console.log output                       | Captured + shown in result panel                                                                    | Captured + shown beneath the failing test   |   ✅   |    —     |                                                                                                                          |
| Runtime stat                             | "Runtime: 56 ms" + percentile beat                                                                  | None                                        |   ❌   |    L     | We don't measure execution time today. Cheap to add (already in the worker). Percentile is impossible without a backend. |
| Memory stat                              | "Memory: 41.2 MB" + percentile beat                                                                 | None                                        |   ❌   |    L     | `performance.memory` is Chrome-only & gated; usually noisy. Skip.                                                         |
| "Last submitted at" timestamp            | Yes                                                                                                 | None                                        |   ❌   |    L     | We don't have submission history surfaced on this screen. Out-of-scope for the gate.                                      |
| Submission-history accordion             | Yes, under Submissions tab                                                                          | None                                        |   ❌   |    L     | See above. Belongs in the options page if anywhere.                                                                       |
| Verdict states                           | Accepted / Wrong Answer / Runtime Error / TLE / Compile Error / Memory Limit Exceeded               | Accepted / Wrong Answer / Runtime Error / Compile Error / **Timeout (TLE)** |   ✅   |    —     | LeetLock has every state that matters for our worker-based judge. No MLE because we don't measure memory.                  |
| Accept banner ("All test cases passed!") | Green banner + confetti                                                                             | Grayscale "accepted" banner                 |   ✅   |    —     | LeetLock omits confetti by design — solving is the reward, not the celebration.                                            |
| Time-limit-exceeded handling             | Server-side TLE                                                                                     | `worker.terminate()` + `timeout` outcome    |   ✅   |    —     | LeetLock's hard 4s/6s timeout is honest and visible.                                                                      |
| Retry without losing code                | Yes — code persists across runs                                                                     | Yes — code lives in CM6 state               |   ✅   |    —     |                                                                                                                          |

---

## 4. Layout & shortcuts

| Feature                                  | What LeetCode does                                                                                  | LeetLock today                              | Status | Priority | Notes                                                                                                                    |
| ---------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------- | :----: | :------: | ------------------------------------------------------------------------------------------------------------------------ |
| Two-column split (problem / editor)      | Yes, side-by-side                                                                                   | Yes, ~5:7 ratio                             |   ✅   |    —     |                                                                                                                          |
| Draggable splitter between panels        | Yes — drag the vertical divider                                                                     | Fixed ratio                                 |   ❌   |    M     | Real ergonomic gap. A simple draggable handle (`react-resizable-panels` or 30 LOC of vanilla pointer math) lands this. Persist last width in `userPreferences`. |
| Fullscreen editor toggle                 | Yes — a small button collapses the problem panel                                                    | No                                          |   ❌   |    M     | Cheap once the splitter exists.                                                                                           |
| Dynamic-layout vs split-view modes       | LC now offers a "Dynamic Layout" mode (problem on left, editor + console as a 3rd column)           | Single split layout                         |   ❌   |    L     | LC's dynamic mode is divisive among users. Skip — our two-pane is simpler.                                                |
| Theme: dark/light                        | Both, toggle in settings                                                                            | Single grayscale theme (intentional)        |  🚫   |    —     | LeetLock's brand *is* the grayscale theme. Don't ship a toggle.                                                            |
| Editor settings drawer                   | Gear icon → drawer with font, theme, keymap, tab size                                               | None on the challenge screen                |   ❌   |    M     | Once we add font-size + keymap + reset, they want a home. A small popover from the editor's language label is enough.    |
| Keyboard-shortcut palette (Cmd+K style)  | None                                                                                                | None                                        |   ✅   |    —     | Neither has it. Out-of-scope.                                                                                              |
| Run shortcut                             | Ctrl+'                                                                                              | None                                        |   ❌   |    H     | Bind `Mod-Enter`. (LC's `Ctrl+'` is awkward; we should not copy it.)                                                       |
| Submit shortcut                          | Ctrl+Enter                                                                                          | None                                        |   ❌   |    H     | Bind `Mod-Shift-Enter` (or `Mod-Enter` for Submit if Run is `Mod-Shift-Enter` — whichever feels less destructive).        |
| Reset code shortcut                      | Ctrl+Alt+L                                                                                          | None                                        |   ❌   |    L     | Pair with reset button.                                                                                                   |
| Timer in header                          | Optional timer with auto-reset + "super alarm"                                                       | Always-on MM:SS countdown                   |   ✅   |    —     | LeetLock's timer is *load-bearing* — it's not optional. Parity++.                                                          |
| Tab-close confirmation                   | Yes — "you have unsaved changes" beforeunload                                                       | None                                        |   ❌   |    M     | Important for our use case: closing the tab counts as a give-up by default. A `beforeunload` handler would prevent slip-ups. |

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

---

## Top-of-stack: priority queue for parity work

The highest-leverage gaps, ordered by `(visible impact) × (1 / implementation cost)`:

1. **`Mod-Enter` for Run, `Mod-Shift-Enter` for Submit.** ~6 LOC in the CM6 keymap.
   Single biggest "this isn't a real editor" complaint a power user would have.
2. **Auto-close brackets and quotes.** One import, one extension. Without it, the
   editor feels broken.
3. **Markdown problem descriptions.** Switch the `description` field to markdown, render
   with `react-markdown` + a whitelist of components. Unlocks bold, inline code, lists,
   follow-up callouts, and (later) hints. Roughly 50 LOC and a problem-bank rewrite.
4. **Find/replace inside the editor.** `@codemirror/search` ships it in a few lines.
5. **Draggable splitter + fullscreen editor toggle.** Real ergonomic gap. Persist last
   width to `userPreferences`.
6. **`beforeunload` confirmation.** Quietly important: closing the tab today silently
   counts as a give-up. A confirmation keeps the gate honest.
7. **Editor settings popover** (font size, vim toggle, reset-code button). Wraps the
   next batch of small improvements into one home so they don't litter the chrome.
8. **Custom test-case input drawer.** When users get stuck, they want to throw an edge
   case at their code. Adding a small "Custom test" panel below the verdict region is
   medium-effort, high-trust-building.

Everything below this (runtime/memory stats, multi-language, image support, hints with
streak cost) is post-MVP and should be considered against actual user feedback rather
than blind parity.

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
