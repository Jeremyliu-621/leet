# LeetLock — Data Model

Storage schema for the LeetLock MVP. Canonical TypeScript lives in `src/lib/types.ts` and
`src/lib/storage/schema.ts`; this document is the design rationale.

---

## Storage areas

Chrome gives extensions two relevant areas:

- **`chrome.storage.sync`** — syncs across the user's signed-in Chrome profiles. Constrained:
  ~100 KB total, ~8 KB per item, item count and write-rate caps. Used for **settings and rules**
  the user wants consistent everywhere, and for strict-mode integrity.
- **`chrome.storage.local`** — local to the device, ~10 MB (more with `unlimitedStorage`). Used for
  **volatile / larger runtime data** that should not burn the sync write budget.

Rule of thumb: if it changes often or can grow unbounded, it goes in `local`.

## Keys

| Key                      | Area  | Type                       | Notes                                          |
| ------------------------ | ----- | -------------------------- | ---------------------------------------------- |
| `blockedRules`           | sync  | `BlockRule[]`              | Domains / full URLs the user blocks.           |
| `keywordRules`           | sync  | `KeywordRule[]`            | URL substring triggers (`shorts`, `reels`).    |
| `userPreferences`        | sync  | `UserPreferences`          | Timings, difficulty, tags, failure action.     |
| `settingsLock`           | sync  | `SettingsLock`             | Optional password gate on settings.            |
| `accountabilityPartner`  | sync  | `AccountabilityPartner`    | Optional partner code gate.                    |
| `cooldownPendingChanges` | sync  | `CooldownPendingChange[]`  | Strictness-reducing changes awaiting cooldown. |
| `streakSummary`          | sync  | `StreakSummary`            | Current/longest streak — small, syncable.      |
| `unlockTokens`           | local | `UnlockToken[]`            | Active timed unlocks per domain.               |
| `solvedProblems`         | local | `SolvedProblemRecord[]`    | Solve history (capped).                        |
| `streakHistory`          | local | `StreakDay[]`              | Per-day solve/fail counts (capped ~365).       |

## Type sketches

These are indicative; `src/lib/types.ts` is authoritative.

```ts
type Difficulty = 'easy' | 'medium' | 'hard';
type ProblemTag =
  | 'arrays' | 'strings' | 'hash-map' | 'two-pointers'
  | 'sliding-window' | 'binary-search' | 'stack' | 'math';
type FailureAction = 'close' | 'redirect';

interface BlockRule {
  id: string;
  kind: 'domain' | 'url';      // 'domain' = host match; 'url' = full-URL prefix
  pattern: string;             // e.g. 'youtube.com' | 'https://reddit.com/r/all'
  enabled: boolean;
  createdAt: number;
}

interface KeywordRule {
  id: string;
  keyword: string;             // case-insensitive substring of the URL
  enabled: boolean;
  createdAt: number;
}

interface UnlockToken {
  domain: string;              // host the unlock applies to
  grantedAt: number;
  expiresAt: number;           // epoch ms; SW alarm + reconcile drive expiry
  problemId: string;           // problem solved to earn it
  durationMs: number;
}

interface SolvedProblemRecord {
  problemId: string;
  solvedAt: number;
  durationMs: number;          // time taken on the challenge
  attempts: number;
  language: 'javascript';
  domain: string;              // which block triggered the challenge
}

interface StreakDay {
  date: string;                // 'YYYY-MM-DD', local time
  solved: number;
  failed: number;
}

interface StreakSummary {
  current: number;             // consecutive days with >= 1 solve
  longest: number;
  lastSolvedDate: string | null;
  damaged: boolean;            // set when a streak-damaging event occurs
}

interface SettingsLock {
  enabled: boolean;
  passwordHash: string | null; // SubtleCrypto PBKDF2/SHA-256; never plaintext
  salt: string | null;
}

interface AccountabilityPartner {
  enabled: boolean;
  email: string | null;        // stored for display only — MVP sends no email
  codeHash: string | null;     // partner-held unlock code, hashed + salted
  salt: string | null;
}

interface CooldownPendingChange {
  id: string;
  kind:
    | 'remove-block-rule' | 'remove-keyword-rule'
    | 'disable-strict-mode' | 'reduce-friction';
  payload: unknown;            // describes the change to apply
  description: string;         // human-readable
  requestedAt: number;
  appliesAt: number;           // requestedAt + settingsCooldownMs
}

interface UserPreferences {
  challengeTimeLimitSec: number;   // default 600 (10 min)
  unlockDurationMin: number;       // default 10
  difficulties: Difficulty[];      // enabled difficulties
  tags: ProblemTag[];              // enabled categories ([] = all)
  failureAction: FailureAction;
  redirectUrl: string;             // used when failureAction = 'redirect'
  maxSubmissionAttempts: number;   // failed submits before failure (default 5)
  strictMode: boolean;             // disables give-up, hardens friction
  settingsCooldownMs: number;      // delay before strictness-reducing changes apply
  allowGiveUp: boolean;            // forced false when strictMode is on
  theme: 'dark';                   // dark-only for MVP
}
```

## Size & quota considerations

- `blockedRules` / `keywordRules`: each rule is ~60–100 bytes. The 8 KB per-item sync cap holds
  ~80–120 rules — generous for the MVP. If a user exceeds it, chunk across keys or fall back to
  `local`. The storage wrapper surfaces quota errors rather than swallowing them.
- `solvedProblems` and `streakHistory` grow over time → `local`, and both are capped (most recent
  N records / ~365 days) to stay bounded.
- `unlockTokens` is small and volatile → `local`. Tokens are pruned on expiry.

## Integrity notes

- Strict-mode settings, rules, locks, and `cooldownPendingChanges` live in `sync` so they stay
  consistent across a user's devices — closing the "switch device to bypass" hole.
- The service worker reconciles `cooldownPendingChanges` on startup, on `chrome.alarms`, and on
  `storage.onChanged`. Each pending change has a stable `id`, so applying it is idempotent across
  devices and across SW restarts.
- All secrets (`passwordHash`, `codeHash`) are salted hashes via `SubtleCrypto`. Plaintext
  passwords/codes are never written to storage or logs.
