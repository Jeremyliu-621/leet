# LeetLock — Build Plan

Architecture, file structure, user flows, roadmap, and risks for the LeetLock MVP.
Companion docs: `RESEARCH.md` (why), `DATA_MODEL.md` (storage), `PROGRESS.md` (live tasks).

---

## 1. Architecture overview

LeetLock has five runtime surfaces. The service worker is the brain; everything else reports to it
or reads shared storage.

```
                         ┌──────────────────────────────┐
                         │      chrome.storage           │
                         │  sync: settings, rules, locks │
                         │  local: tokens, solves, streak│
                         └───────────────┬───────────────┘
                                         │ read / write / onChanged
        ┌────────────────────────────────┼────────────────────────────────┐
        │                                │                                │
┌───────▼────────┐   navigation   ┌──────▼───────────┐   messages   ┌──────▼────────┐
│ Content script │───────────────▶│  Service worker  │◀────────────▶│ Extension     │
│ <all_urls>,    │  (SPA route    │  (background)    │              │ pages (React) │
│ document_start │   changes)     │                  │              │ • popup       │
│                │                │ • rule matching  │              │ • options     │
│ blanks page    │                │ • DNR rule sync  │              │ • challenge   │
│ pre-redirect   │                │ • unlock tokens  │              │ • blocked     │
└────────────────┘                │ • alarms/expiry  │              └───────┬───────┘
                                   │ • cooldown apply │                      │
                                   └──────┬───────────┘             embeds   │
                                          │ declarativeNetRequest    ┌───────▼───────┐
                                          │ dynamic rules            │ Sandbox page  │
                            ┌─────────────▼─────────────┐            │ + Web Worker  │
                            │ Network: blocked-site     │            │ runs user JS  │
                            │ navigation → redirect to  │            │ (CSP-isolated)│
                            │ challenge.html?target=... │            └───────────────┘
                            └───────────────────────────┘
```

**Why this shape** (see `RESEARCH.md` §7):

- **DNR dynamic rules** redirect full navigations to blocked sites with no visible flash. Rules are
  generated at runtime by the service worker (it knows `chrome.runtime.getURL(...)`).
- **Content script** catches what DNR cannot: single-page-app route changes (e.g.
  `youtube.com → youtube.com/shorts`) fire no network request. It also blanks the page at
  `document_start` to avoid a flash while a redirect resolves.
- **Service worker** owns all decision logic: which URLs are blocked, whether an unlock token is
  active, when tokens expire (`chrome.alarms` + persisted timestamps, since the worker is
  ephemeral ~30 s), and when cooldown-delayed settings changes become applicable.
- **Code execution** never happens on a normal extension page — MV3 CSP forbids `eval`. A
  **sandboxed page** (permissive CSP) hosts a **Web Worker** that runs user code with a hard
  timeout (`worker.terminate()` kills infinite loops). The challenge page talks to it via
  `postMessage`.

## 2. File structure

```
leet/
├─ CLAUDE.md                  Project guide + autonomous loop protocol
├─ README.md  LICENSE  package.json
├─ tsconfig.json  tsconfig.node.json  vite.config.ts
├─ tailwind.config.js  postcss.config.js  .prettierrc
├─ docs/
│  ├─ RESEARCH.md  BUILD_PLAN.md  DATA_MODEL.md  DECISIONS.md  PROGRESS.md
├─ scripts/
│  └─ generate-icons.mjs      SVG → PNG icon generation
├─ assets/
│  └─ logo.svg                Icon source of truth
├─ public/
│  └─ icons/                  Generated icon-16/32/48/128.png
├─ src/
│  ├─ manifest.config.ts      MV3 manifest (CRXJS)
│  ├─ background/
│  │  └─ service-worker.ts
│  ├─ content/
│  │  └─ content-script.ts
│  ├─ pages/
│  │  ├─ popup/      index.html  main.tsx  Popup.tsx
│  │  ├─ options/    index.html  main.tsx  Options.tsx     (settings)
│  │  ├─ challenge/  index.html  main.tsx  Challenge.tsx
│  │  ├─ blocked/    index.html  main.tsx  Blocked.tsx
│  │  └─ sandbox/    index.html  runner.ts                 (code runner host)
│  ├─ runner/
│  │  └─ worker.js            Web Worker (raw-imported, Blob-instantiated)
│  ├─ lib/
│  │  ├─ types.ts             Shared domain types
│  │  ├─ storage/             schema.ts  defaults.ts  store.ts
│  │  ├─ problems/            types.ts  index.ts  bank/*.ts
│  │  ├─ blocking/            matcher.ts  dnr.ts
│  │  ├─ unlock/              tokens.ts
│  │  ├─ streak/              streak.ts
│  │  ├─ judge/               judge.ts
│  │  ├─ crypto/              hash.ts     (SubtleCrypto password hashing)
│  │  └─ messaging/           messages.ts (typed runtime messages)
│  └─ ui/
│     ├─ components/          Shared React components
│     └─ styles/              globals.css + design tokens
└─ test/
   ├─ problem-bank.test.ts    Validates every problem against its reference solution
   └─ ...                     Unit tests mirror src/lib/**
```

## 3. Core user flows

**A. Block & gate.** User navigates to a blocked URL → DNR rule (full nav) *or* content script
(SPA route) detects it → tab is sent to `challenge.html?target=<encoded original URL>` → challenge
page picks a problem matching the user's difficulty/tag settings and starts the timer.

**B. Solve & unlock.** User edits code in CodeMirror → **Run** executes visible example tests in the
sandbox → **Submit** runs visible + hidden tests → all pass → challenge page messages the service
worker → SW writes an `UnlockToken` for the domain to `storage.local`, removes that domain's DNR
rule, sets a `chrome.alarms` expiry, records the solve, updates the streak → challenge page
redirects the tab back to the original `target` URL.

**C. Failure.** Timer hits zero, user clicks **Give up** (disabled in strict mode), or submissions
exceed `maxSubmissionAttempts` → challenge page asks the SW to apply the configured `failureAction`:
`close` the tab, or `redirect` to the calm blocked page. Streak may take damage.

**D. Settings change with cooldown.** User edits a *strictness-reducing* setting (remove a block
rule, shorten unlock friction, disable strict mode) → instead of applying immediately, a
`CooldownPendingChange` is written with `appliesAt = now + settingsCooldownMs`. The change applies
only after the cooldown, reconciled by the SW on startup, on alarm, and on storage change.
Strictness-*increasing* changes apply immediately.

**E. Settings unlock.** If a password or accountability-partner lock is set, editing protected
settings requires entering the password / partner code. Hashes are stored (SubtleCrypto, salted);
plaintext is never persisted.

## 4. Storage schema (summary)

Nine logical keys. `sync` = small, syncable settings; `local` = larger / volatile runtime data.
Full detail and rationale in `DATA_MODEL.md`.

| Key                     | Area    | Shape                          |
| ----------------------- | ------- | ------------------------------ |
| `blockedRules`          | sync    | `BlockRule[]`                  |
| `keywordRules`          | sync    | `KeywordRule[]`                |
| `userPreferences`       | sync    | `UserPreferences`              |
| `settingsLock`          | sync    | `SettingsLock`                 |
| `accountabilityPartner` | sync    | `AccountabilityPartner`        |
| `cooldownPendingChanges`| sync    | `CooldownPendingChange[]`      |
| `streakSummary`         | sync    | `StreakSummary`                |
| `unlockTokens`          | local   | `UnlockToken[]`                |
| `solvedProblems`        | local   | `SolvedProblemRecord[]`        |
| `streakHistory`         | local   | `StreakDay[]`                  |

## 5. MVP roadmap (phases)

Detailed, checkable tasks live in `PROGRESS.md`. Phase order is chosen so that **Phase 6 yields a
demoable vertical slice** (block a site → solve a problem → earn timed access).

| Phase | Theme                          | Outcome                                            |
| ----- | ------------------------------ | -------------------------------------------------- |
| 0     | Foundation & docs              | Repo, docs, autonomous loop protocol               |
| 1     | Toolchain & scaffold           | `npm run build` produces a loadable `dist/`        |
| 2     | Data layer                     | Types, storage wrapper, verified problem bank      |
| 3     | Code runner                    | Sandbox + worker + judge run JS safely w/ timeout  |
| 4     | Challenge UI                   | Full challenge screen, editor, run/submit          |
| 5     | Blocking engine                | DNR + SW + content script redirect blocked sites   |
| 6     | Unlock system                  | **Demoable:** solve → timed access → expiry        |
| 7     | Failure handling               | Close / redirect / attempt limits                  |
| 8     | Settings page                  | Full options UI                                    |
| 9     | Anti-bypass / commitment       | Cooldown, password, partner lock, strict mode      |
| 10    | Streaks                        | Streak tracking + damage + subtle UI               |
| 11    | Popup                          | Toolbar status + quick actions                     |
| 12    | Polish, tests, CI              | Accessibility, edge cases, coverage, GitHub Action |
| 13+   | Post-MVP                       | Bigger bank, Pyodide (Python), analytics dashboard |

## 6. Risks & tradeoffs

| Risk                                                      | Mitigation                                                                 |
| --------------------------------------------------------- | -------------------------------------------------------------------------- |
| `@crxjs/vite-plugin` is a v2 beta; could break builds.    | Verify `npm run build` in Phase 1. Fallback: manual Vite multi-page + esbuild content-script build. Logged in `DECISIONS.md`. |
| Sandbox-page CSP / worker wiring is fiddly.               | Worker is plain JS, raw-imported and Blob-instantiated — avoids bundler edge cases. Isolated `judge` tests. |
| SPA route changes evade DNR.                              | Content script + `webNavigation.onHistoryStateUpdated` as a second layer.   |
| Ephemeral service worker drops timers.                    | Persist `expiresAt`/`appliesAt` timestamps; use `chrome.alarms`; reconcile on every SW wake. |
| User code with infinite loops.                            | Run in a Web Worker; hard timeout → `worker.terminate()`.                  |
| Anti-uninstall is impossible (MV3).                       | Ship *friction*, not false guarantees. README + RESEARCH state this plainly.|
| Wrong "expected" values in the problem bank.              | Every problem ships a reference solution (test-only); `problem-bank.test.ts` runs it against all cases. |
| `storage.sync` quotas (100 KB total / 8 KB per item).     | Keep volatile/large data in `storage.local`; cap arrays; chunk if needed.   |
| Cross-device strict-setting bypass.                       | Strict settings + pending changes live in `storage.sync`; SW reconciles idempotently. |
