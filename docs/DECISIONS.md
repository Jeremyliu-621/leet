# LeetLock — Decision Log

Append-only. Each entry: date, decision, rationale, and (if any) alternatives rejected.
Never rewrite history — if a decision is reversed, add a new entry that supersedes the old one.

---

### 2026-05-21 — D1: Tech stack

Vite + React + TypeScript (strict) + `@crxjs/vite-plugin` for the MV3 extension; Tailwind CSS for
styling; CodeMirror 6 as the code editor.
**Rationale:** modern, well-documented, fast iteration. CRXJS is the de-facto standard for MV3 +
Vite and handles the painful manifest ↔ bundle wiring for service workers and content scripts.

### 2026-05-21 — D2: `@crxjs/vite-plugin` for the MV3 build

Use `@crxjs/vite-plugin` — v2 is **stable** (2.4.0; note the npm `beta` dist-tag is stale and
points at an old `2.0.0-beta.33`, so install `@latest`). **Rationale:** it is the de-facto standard
for MV3 + Vite and solves the painful manifest ↔ bundle wiring for service workers and content
scripts. **Fallback if it ever breaks:** a manual Vite multi-page build plus a separate esbuild
pass for the content script (IIFE). Phase 1 verifies `npm run build` produces a loadable `dist/`.

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

### 2026-05-21 — D12: Pin Vite 7 + `@vitejs/plugin-react` 5

Vite's latest is 8, but `@vitejs/plugin-react@6` requires Vite 8, while CRXJS's declared Vite 8
support is brand new. Pin **Vite 7** (the mature `previous` release line) with
**`@vitejs/plugin-react@5`** (supports Vite 4–8) and **CRXJS 2.4.0** (supports Vite 3–8). This trio
is fully consistent and well soaked. Revisit once CRXJS has proven Vite 8 support in the wild.

### 2026-05-23 — D13: Accept CRXJS→rollup transitive audit warning

`npm audit` reports two high-severity findings for `rollup <2.80.0` (path-traversal in dev builds)
via `@crxjs/vite-plugin`'s pinned rollup. The advisory affects the *build tool* when handling
attacker-controlled inputs at build time, not the produced extension shipped to users. The
auto-fix downgrades CRXJS to v1.0.14 — a major regression. We **accept the dev-only risk** and
keep CRXJS v2; an upstream fix will be pulled in when CRXJS bumps its rollup pin. Tracked.

### 2026-05-23 — D14: Extracted `reconcile()` for integration testability

The service worker was split: `src/background/reconcile.ts` owns the pure decision pipeline
(apply pending changes → prune tokens → rebuild DNR rules → schedule next alarm), and
`src/background/service-worker.ts` is a thin shell of event listeners and message handlers that
delegates to it. **Rationale:** lets us drive the full state machine in unit tests against an
in-memory `chrome` (see `test/sw-reconcile.test.ts`) — the closest thing to true e2e we can get
without a real browser load. The SW file shrinks; the integration surface gets 18 new tests.

### 2026-05-24 — D16: Domain-family + excludedRequestDomains for unlock-aware DNR rules

**Bug** (reported by a real user): blocking `youtube.com` and solving on `www.youtube.com`
landed the user back on a fresh challenge instead of YouTube. Same for keyword `instagram`
hitting `www.instagram.com`.

**Cause:** the unlock check in `buildDynamicRules` was string-equality:
`unlockedDomains.has(host)`. The token was stored for the host the user was actually on
(`www.youtube.com`); the DNR block-rule's host was the registrable (`youtube.com`). Equality
failed → rule stayed live → DNR re-redirected on navigate-back. Keyword rules had no unlock
awareness at all — they always matched.

**Fix:**
- **Block-domain / block-url rules** now skip when any unlocked domain is in the same family
  as the rule's host (`isInDomainFamily`: equal, parent, or subdomain in either direction).
- **Keyword rules** now emit `excludedRequestDomains` set to the unlocked domains *plus their
  immediate parent* (`expandUnlockedDomains`). Chrome's `excludedRequestDomains` "matches
  subdomains as well", so including the parent (e.g. `instagram.com`) covers root + every
  subdomain. Capped at 3+-part hosts to avoid collapsing `example.com` into the bogus parent
  `com`. (Public-suffix-aware extraction via `tldts` is the future-proof upgrade.)

**Detection:** `e2e/user-bug.spec.ts` reproduces the user's exact rule set and asserts the
post-submit page URL actually lands on the unlocked site, plus 6 new unit tests in
`blocking-dnr.test.ts` cover subdomain / parent / unrelated / empty cases.

### 2026-05-24 — D15: Force-transform web-accessible HTML via explicit Rollup inputs

**Bug:** CRXJS auto-transforms HTML for `action.default_popup` and `options_page` but ships HTML
referenced from `web_accessible_resources` or `sandbox.pages` **raw** — the production dist
serves `./main.tsx` / `./runner.ts` as the `<script src>`, which Chrome 404s. The Challenge,
Blocked, and Sandbox pages were therefore broken at runtime even though `npm run build`
succeeded; React never mounted on the challenge page when loaded as an unpacked extension.

**Fix:** list those pages as explicit `build.rollupOptions.input` entries in `vite.config.ts`
so Vite transforms them through its normal HTML pipeline (injects hashed `<script>` + modulepreload
+ stylesheet links). After the fix the challenge HTML correctly references
`/assets/challenge-…js`, the sandbox references `/assets/sandbox-…js`, etc.

**Detection:** the Playwright e2e harness (`e2e/extension.spec.ts`) — this is exactly the class
of bug only real-browser end-to-end testing can catch.
