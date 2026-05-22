# LeetLock — Project Guide for Claude

> **LeetLock turns distracting websites into mini coding-interview gates: solve a problem, earn timed access.**
> Positioning: *"Cold Turkey for CS students, except every distraction charges you one algorithm problem."*

This file is loaded into every session. Read it fully, then open `docs/PROGRESS.md` to find what to do next.

---

## 1. How to work on this project — autonomous loop protocol

This project is built by an autonomous `/loop`. **The human is not available to answer questions.**
Do not ask questions; do not stop and wait. Each loop iteration:

1. **Read `docs/PROGRESS.md`** — it is the single source of truth for project state.
2. **Pick the next unchecked task** in the earliest incomplete phase. Do one small, coherent unit
   of work — not a giant batch.
3. **Implement it well** — follow the Engineering principles in §2.
4. **Verify before stopping:**
   - `npm run typecheck` passes (zero errors).
   - `npm run test` passes.
   - If the build config or any bundled entry changed, `npm run build` produces a `dist/`.
5. **Commit** — granular, conventional-commit style (see §6). Many small commits are expected.
6. **Push** to `origin main`.
7. **Update `docs/PROGRESS.md`** — check off the task; refresh "Last updated", "Current focus",
   "Next up"; add anything learned under "Notes".
8. If you made a non-obvious decision, append a dated entry to `docs/DECISIONS.md`.
9. Repeat.

**Never leave the repo broken.** Typecheck and tests must be green when an iteration ends. If a task
is too large for one iteration, split it: do a self-contained part, commit, and record the
remainder as new sub-tasks in `docs/PROGRESS.md`.

**When uncertain:** make the most reasonable decision, record it in `docs/DECISIONS.md` with a one-
line rationale, and continue. A logged decision that can be revised later beats a stall.

## 2. Engineering principles (the human's standing preferences)

These are non-negotiable and govern every change:

- **DRY** — flag and remove repetition aggressively; extract shared logic.
- **Well-tested** — tests are not optional. Prefer too many tests over too few. Every pure
  function in `src/lib/**` gets unit tests. The problem bank is validated by automated tests.
- **Engineered enough** — not under-engineered (fragile, hacky) and not over-engineered (premature
  abstraction, needless indirection). Build for the MVP that exists, not an imagined future.
- **Handle edge cases** — err toward handling more, not fewer. Empty inputs, expired tokens, racing
  service-worker events, malformed user code, storage quota errors.
- **Explicit over clever** — readable, obvious code. Name things fully. Avoid magic.

## 3. Tech stack

- **Platform:** Chrome Extension, Manifest V3.
- **Build:** Vite + `@crxjs/vite-plugin`.
- **UI:** React + TypeScript (strict).
- **Styling:** Tailwind CSS with a custom **pure-grayscale** design system (see §5).
- **Editor:** CodeMirror 6.
- **Code execution:** sandboxed extension page hosting a Web Worker (MV3-CSP-safe).
- **Storage:** `chrome.storage.local` (runtime/large data) + `chrome.storage.sync` (settings).

## 4. Key commands

| Command             | Purpose                                       |
| ------------------- | --------------------------------------------- |
| `npm run typecheck` | `tsc --noEmit` — must pass before any commit  |
| `npm run test`      | Vitest run — must pass before any commit      |
| `npm run build`     | Type-check + build the extension to `dist/`   |
| `npm run icons`     | Regenerate icons from `assets/logo.svg`       |
| `npm run dev`       | Vite dev server with HMR                      |

## 5. Design system — pure grayscale

The UI is a serious productivity/devtool product: minimal, dark-mode-first, sharp typography,
generous whitespace, simple cards. **Zero hue** — emphasis is carried entirely by contrast and
typographic weight. No gradients, no random icons, no cheesy motivational copy, no childish
gamification. Streak/progress elements are subtle.

| Token       | Value     | Use                          |
| ----------- | --------- | ---------------------------- |
| `bg`        | `#0A0A0A` | app background               |
| `surface`   | `#161616` | cards / panels               |
| `border`    | `#262626` | hairline dividers            |
| `text`      | `#EDEDED` | primary text                 |
| `muted`     | `#8A8A8A` | secondary text               |
| `accent`    | `#FFFFFF` | emphasis (white-on-black)    |

Use the `frontend-design` skill when building or refining UI pages for design quality.

## 6. Conventions

- **Commits:** Conventional Commits — `feat:`, `fix:`, `docs:`, `chore:`, `test:`, `refactor:`,
  `build:`. Imperative mood, concise. One coherent change per commit. End commit messages with the
  `Co-Authored-By` trailer.
- **Files:** kebab-case filenames; PascalCase React components; camelCase functions/vars.
- **TypeScript:** `strict` on. No `any` — use `unknown` and narrow. Shared types live in
  `src/lib/types.ts`; problem types in `src/lib/problems/types.ts`.
- **No unofficial LeetCode APIs.** All problems are original, authored in `src/lib/problems/bank/`.
- **No secrets in the repo.**

## 7. Definition of done (per task)

A task is done when: it is implemented per the engineering principles; it has tests where it has
logic; `npm run typecheck` and `npm run test` are green; it is committed and pushed; and
`docs/PROGRESS.md` is updated.

## 8. Document map

| Doc                   | What it holds                                              |
| --------------------- | ---------------------------------------------------------- |
| `CLAUDE.md` (this)    | Project guide + how to run the autonomous loop             |
| `docs/PROGRESS.md`    | **Live task tracker — read first every iteration**         |
| `docs/BUILD_PLAN.md`  | Architecture, file structure, user flows, roadmap, risks   |
| `docs/DATA_MODEL.md`  | Storage schema (local + sync), types, quotas               |
| `docs/RESEARCH.md`    | Competitive landscape + MV3 constraint analysis            |
| `docs/DECISIONS.md`   | Decision log — append, never rewrite history               |

## 9. Hard constraints — do not violate

- Manifest V3 only. Be realistic about MV3 limits; never claim true anti-uninstall.
- User-submitted code runs **only** inside the sandboxed page / Web Worker — never `eval` on a
  normal extension page (CSP forbids it, and it would be unsafe).
- Never ship problem reference solutions in the extension bundle — keep them out of code paths the
  app imports, so they tree-shake away. Tests may import them.
- Keep `chrome.storage.sync` items under the 8 KB per-item quota; large/volatile data goes to
  `chrome.storage.local`.
