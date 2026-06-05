# LeetLock Revamp — "LeetCode-parity editor + AI hints" (June 2026)

> Working plan for the big editor/UX overhaul requested 2026-06-04. This is the
> live source of truth for the revamp. Check items off as they land. When the
> whole list is done, fold the durable parts into `BUILD_PLAN.md` and delete the
> scratch notes here.

## Goal

Make the challenge screen feel like LeetCode's (the quality-of-life features we
lack) **while keeping LeetLock's identity**. Drop the strict pure-grayscale rule
— color is allowed where it carries meaning (syntax, verdicts, brand). Add a
genuinely useful, visual AI hint bot (Gemini). Polish the dashboard. Research
NeetCode for question-bank + language ideas.

## Design system change — color is now allowed

Base stays dark/grayscale, but we add semantic + brand tokens:

| Token            | Dark      | Meaning                          |
| ---------------- | --------- | -------------------------------- |
| `--ll-brand`     | `#8b7cf6` | LeetLock identity (violet)       |
| `--ll-success`   | `#2cbb5d` | accepted / run / pass            |
| `--ll-error`     | `#ef4743` | wrong answer / fail              |
| `--ll-warning`   | `#ffa116` | timeout / caution                |
| `--ll-info`      | `#3b82f6` | informational                    |

Syntax highlighting keeps the VS Code palette already in `codemirror-theme.ts`.

## Phases & tasks

### Phase A — Editor correctness (the concrete complaints) ✅ DONE
- [x] Tab / Shift-Tab indent **selections** (indentMore/indentLess), not replace.
- [x] Visible 2px caret; cursor sits above bracket-match highlight.
- [x] Kill the "green box" — matching brackets get a subtle, boxless highlight.
- [x] Richer syntax highlighting (VS Code palette wired in codemirror-theme).
- [ ] Native shortcuts audit (multi-cursor, line move — keep, document). (mostly there)

### Phase B — LeetCode-like layout ✅ DONE
- [x] Move **Run / Submit** to a centered pill group in the top bar (icons).
- [x] Panels become rounded "floating" cards with a gutter from screen edges.
- [x] Editor header: language dropdown (rounded) + icon actions, "Code" label.
- [x] Slim bottom status bar: Ln/Col, saved, shortcuts.

### Phase C — Terminal parity (screenshot 3) — color DONE
- [x] Color verdicts (green pass / red fail) instead of grayscale-only.
- [ ] "Last Executed Input" cards (l1 = [2,4,3]) — nice-to-have polish.

### Phase D — AI Hint Bot (Gemini) — "revolutionary" ✅ DONE
- [x] Settings field for Gemini API key (chrome.storage.LOCAL; NEVER in repo).
- [x] `src/lib/ai/gemini.ts` client (model: gemini-2.0-flash) — typed, tested.
- [x] Bot reads problem + user code, returns line-anchored hints.
- [x] Editor decorations: highlight referenced lines + inline annotation bubbles.
- [x] Hint panel UI: progressive, non-spoiler, "Review my code" / "Nudge me".
- See `docs/AI_HINTS.md` for the full feature write-up.

### Phase E — Dashboard polish
- [ ] Review the dashboard another agent built; align to new design tokens.

### Phase F — Question bank / NeetCode (research-gated)
- [ ] Categorize bank by NeetCode-style topics (Arrays & Hashing, …).
- [ ] Curated lists (NeetCode 150 / Blind 75) if licensing allows.

### Phase G — Docs hygiene
- [ ] Trim the 347 KB `PROGRESS.md` (it's bloated — autoloaded every session).
- [ ] Record decisions in `DECISIONS.md`; keep this file current.

## Hard constraints (unchanged)
- MV3 only; user code runs only in the sandbox/worker.
- No secrets in the repo (the Gemini key lives in storage, entered by the user).
- typecheck + tests green at every commit.
</content>
