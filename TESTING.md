# Testing LeetLock

LeetLock is tested at three levels: strict TypeScript, unit + integration tests
in Vitest, and a manual end-to-end pass against real Chrome. The first two run
on every commit; the third is the final 5 % a unit test can't reach.

---

## 1. Static checks

```bash
npm run typecheck    # tsc --noEmit, strict; no errors
```

## 2. Automated tests

```bash
npm run test         # vitest — unit + integration suites
npm run test:e2e     # playwright — real Chromium with dist/ loaded as an extension
```

**Vitest:** every pure module under `src/lib/**` has a suite under `test/`. The problem bank is
validated by `test/problem-bank.test.ts`, which runs every reference solution against every
visible and hidden test case — if the suite is green, the bank's `expected` values are correct.
The service worker reconciliation pipeline is exercised end-to-end against an in-memory `chrome`
in `test/sw-reconcile.test.ts`.

**Playwright e2e** (`npm run test:e2e`, headed local Chromium):
- `e2e/extension.spec.ts` — SW registers, popup / options / challenge mount.
- `e2e/block-flow.spec.ts` — **the real gate**: setting a block rule + visiting the host
  redirects to the challenge page; setting an unlock token bypasses the gate.
- `e2e/solve-flow.spec.ts` — **the full vertical slice**: injects the matching reference
  solution into the editor, clicks Submit, and verifies the service worker writes an unlock
  token for the target domain. Exercises bank → judge → sandbox Worker → SW grant handler →
  storage in a real browser.
- `e2e/screenshots.spec.ts` — captures the four extension surfaces into `docs/screenshots/`.

## 3. Manual end-to-end (real Chrome)

Run this whenever the SW, content script, manifest, or the challenge/runner
plumbing changes.

```bash
npm run build
```

Then in Chrome:

1. Open `chrome://extensions`.
2. Enable **Developer mode** (top-right toggle).
3. Click **Load unpacked** and choose the `dist/` folder produced above.
4. Pin the LeetLock toolbar icon for easy access.

### E2E flow A — Block, gate, solve, unlock

1. Open the LeetLock options page (right-click the icon → Options).
2. Add a block rule: domain `example.com` (or, while the Settings UI is in
   flight, set it manually via DevTools on any extension page:
   `await chrome.storage.sync.set({ blockedRules: [{ id: 'r1', kind: 'domain', pattern: 'example.com', enabled: true, createdAt: Date.now() }] })`).
3. Open a new tab and navigate to `https://example.com`.
4. **Expected:** the tab is redirected to the LeetLock challenge page; a
   problem from the local bank is rendered with a code editor and timer.
5. Solve the problem (use the reference solutions in `test/bank-solutions.ts`
   for quick verification). Click **Submit**.
6. **Expected:** the verdict reads "Accepted"; the tab redirects back to
   `https://example.com`; the page loads normally.
7. Navigate to `https://example.com` again.
8. **Expected:** the page loads normally (active unlock token). Confirm
   `chrome.storage.local.get('unlockTokens')` shows an entry whose
   `expiresAt` is in the future.
9. Wait for the unlock to expire (default 10 minutes; you can shorten this in
   the Options page or via DevTools).
10. Navigate to `https://example.com` again.
11. **Expected:** the challenge page appears again.

### E2E flow B — SPA route change

1. Add a keyword rule: `shorts`.
2. Navigate to `https://www.youtube.com/` — the home page should load (no
   keyword in the URL).
3. Click any **Shorts** video.
4. **Expected:** the content script detects the route change and asks the SW
   to redirect; the challenge page appears.

### E2E flow C — Failure

1. With a fresh block rule and unlock expired, open a blocked site and let the
   challenge timer run to 0 (set `challengeTimeLimitSec: 10` in DevTools if
   you don't want to wait).
2. **Expected** with `failureAction: 'close'`: the tab closes.
3. **Expected** with `failureAction: 'redirect'`: the tab navigates to the
   calm `blocked.html` page (or your configured `redirectUrl`).

### E2E flow D — Settings cooldown

1. Set `strictMode: true` and `settingsCooldownMs: 60000` (1 minute) in
   prefs.
2. Try to delete the block rule for `example.com` (when Settings UI lands).
3. **Expected:** the rule is not removed; a `cooldownPendingChange` is
   created with `appliesAt` ≈ 60 s in the future. Verify in DevTools:
   `chrome.storage.sync.get('cooldownPendingChanges')`.
4. Wait a minute, reload an extension page (forces SW wake) — the change
   should now be applied and the pending entry removed.

---

## Known limits — be honest about them

- **No true anti-uninstall.** Manifest V3 cannot prevent a user removing the
  extension from `chrome://extensions`. LeetLock raises *friction* (cooldowns,
  password/partner locks, streak loss), not a hard guarantee. See
  `docs/RESEARCH.md` §8.
- **SPA navigations** are caught via the content script + the SW's
  `webNavigation.onHistoryStateUpdated` listener — there is a small detection
  window during which the user may briefly see the blocked content.
- **Cross-device strict-setting bypass** is mitigated by syncing rules and
  pending changes through `chrome.storage.sync`; reconciliation is idempotent
  but a race with simultaneous edits on a second device will pick a winner by
  last write.
- **Code execution** runs in a sandboxed extension page hosting a Web Worker
  with a hard timeout; user-submitted JavaScript cannot escape the sandbox or
  access page DOM, but it can still trigger a sandbox-page crash that
  `worker-error` will surface as a failed run.
