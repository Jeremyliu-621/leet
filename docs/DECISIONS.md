# LeetLock — Decision Log

Append-only. Each entry: date, decision, rationale, and (if any) alternatives rejected.
Never rewrite history — if a decision is reversed, add a new entry that supersedes the old one.

---

### 2026-05-21 — D1: Tech stack

Vite + React + TypeScript (strict) + `@crxjs/vite-plugin` for the MV3 extension; Tailwind CSS for
styling; CodeMirror 6 as the code editor.
**Rationale:** modern, well-documented, fast iteration. CRXJS is the de-facto standard for MV3 +
Vite and handles the painful manifest ↔ bundle wiring for service workers and content scripts.

### 2026-05-21 — D2: CRXJS v2 beta, with a documented fallback

Use `@crxjs/vite-plugin` v2 (beta). **Rationale:** it is the most widely used solution and solves
real MV3 bundling pain. **Risk:** it is a long-running beta. **Mitigation:** Phase 1 verifies
`npm run build` produces a loadable `dist/`. If CRXJS proves unworkable, fall back to a manual Vite
multi-page build plus a separate esbuild pass for the content script (IIFE).

### 2026-05-21 — D3: Code execution via sandboxed page + Web Worker

User-submitted JavaScript runs only inside a manifest-declared **sandbox page** (permissive CSP
allows `eval`) which hosts a **Web Worker**. The challenge page communicates via `postMessage`.
**Rationale:** MV3 CSP forbids `eval`/`new Function` on normal extension pages. The Worker isolates
user code and can be `terminate()`d to kill infinite loops via a hard timeout. **Rejected:** running
code on the challenge page (CSP-blocked, unsafe); a remote execution service (needs a backend,
out of MVP scope).

### 2026-05-21 — D4: Blocking = DNR + service worker + content script

Full-navigation blocks use `declarativeNetRequest` dynamic rules that redirect to the challenge
page (no flash). The service worker generates and reconciles those rules. A `<all_urls>` content
script catches SPA route changes (e.g. YouTube Shorts) that fire no network request.
**Rationale:** DNR alone misses client-side routing; the SW alone causes a visible flash. The
hybrid covers both. Confirmed against `RESEARCH.md` §7.

### 2026-05-21 — D5: Pure-grayscale visual design

The UI uses zero hue: `#0A0A0A` bg, `#161616` surface, `#262626` border, `#EDEDED` text, `#8A8A8A`
muted, `#FFFFFF` accent. Emphasis comes from contrast and typographic weight.
**Rationale:** explicit user choice; matches the "serious devtool, no AI-looking UI" brief.

### 2026-05-21 — D6: Repository

Build into the existing public repo `Jeremyliu-621/leet` (already wired as `origin`). Do **not**
create a separate `leetlock` repo. Product name remains "LeetLock"; `package.json` name is
`leetlock`. **Rationale:** explicit user instruction.

### 2026-05-21 — D7: No backend in the MVP

LeetLock ships as a pure client-side extension. The accountability-partner feature is a **local
code gate** — the partner sets a code; protected settings require it. The partner email is stored
for display only; the MVP sends no email (that needs a server).
**Rationale:** keeps the MVP shippable and honest. Real partner notifications are a post-MVP item.

### 2026-05-21 — D8: Original problems only

All coding problems are authored from scratch in `src/lib/problems/bank/`, inspired by common
algorithm patterns. No LeetCode problem text and no unofficial LeetCode APIs.
**Rationale:** LeetCode problem text is copyrighted; no openly, commercially licensed problem bank
exists (`RESEARCH.md` §10). Original problems also become a differentiator.

### 2026-05-21 — D9: Strict settings in `storage.sync`, reconciled idempotently

Rules, locks, strict-mode flags, and `cooldownPendingChanges` live in `chrome.storage.sync`. The
service worker applies pending changes by reconciling on startup, on `chrome.alarms`, and on
`storage.onChanged` — not on alarms alone.
**Rationale:** prevents the "switch to another device to bypass strict mode" hole, and survives the
ephemeral MV3 service worker. Each pending change has a stable `id`, making application idempotent.

### 2026-05-21 — D10: Repurposed the pre-existing `CLAUDE.md`

The repo already contained a generic "plan-mode review" `CLAUDE.md` unrelated to LeetLock. It was
rewritten into the LeetLock project guide. The human's **engineering preferences** from it (DRY,
heavily tested, engineered-enough, handle edge cases, explicit over clever) were **preserved** in
`CLAUDE.md` §2. The plan-mode-review workflow was dropped as inapplicable to an autonomous build.

### 2026-05-21 — D11: Tailwind v3 over v4

Use Tailwind CSS v3. **Rationale:** v3 is rock-stable and universally compatible with the Vite +
CRXJS toolchain; for a long autonomous build, toolchain reliability outweighs v4's newer features.
The grayscale design system does not depend on the Tailwind major version.
