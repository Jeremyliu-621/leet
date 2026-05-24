// Shared domain types for LeetLock.
// Storage layout and rationale: see docs/DATA_MODEL.md.

export type Difficulty = 'easy' | 'medium' | 'hard';

export type ProblemTag =
  | 'arrays'
  | 'strings'
  | 'hash-map'
  | 'two-pointers'
  | 'sliding-window'
  | 'binary-search'
  | 'stack'
  | 'heap'
  | 'math'
  | 'dynamic-programming'
  | 'linked-list'
  | 'graph'
  | 'tree'
  | 'backtracking';

/** Every tag, in canonical display order. */
export const PROBLEM_TAGS: readonly ProblemTag[] = [
  'arrays',
  'strings',
  'hash-map',
  'two-pointers',
  'sliding-window',
  'binary-search',
  'stack',
  'heap',
  'math',
  'dynamic-programming',
  'linked-list',
  'graph',
  'tree',
  'backtracking',
];

/** Every difficulty, easiest first. */
export const DIFFICULTIES: readonly Difficulty[] = ['easy', 'medium', 'hard'];

/** What happens when a challenge is failed or abandoned. */
export type FailureAction = 'close' | 'redirect';

/**
 * Languages the code runner supports. Python lands incrementally via the
 * Pyodide milestones (see `docs/PYODIDE_PLAN.md`); JavaScript remains the
 * default and is the only language every bank problem ships with today.
 */
export type SupportedLanguage = 'javascript' | 'typescript' | 'python';

// --- Block rules ----------------------------------------------------------

export type BlockRuleKind = 'domain' | 'url';

export interface BlockRule {
  id: string;
  kind: BlockRuleKind;
  /** For 'domain', a host such as "youtube.com". For 'url', a full-URL prefix. */
  pattern: string;
  enabled: boolean;
  createdAt: number;
}

export interface KeywordRule {
  id: string;
  /** Case-insensitive substring matched anywhere in the URL. */
  keyword: string;
  enabled: boolean;
  createdAt: number;
}

// --- Unlocks & solve history ---------------------------------------------

export interface UnlockToken {
  /** Host the unlock applies to, e.g. "youtube.com". */
  domain: string;
  grantedAt: number;
  expiresAt: number;
  problemId: string;
  durationMs: number;
}

export interface SolvedProblemRecord {
  problemId: string;
  solvedAt: number;
  /** Wall-clock time the user spent on the challenge. */
  durationMs: number;
  /** Number of submissions before the passing one. */
  attempts: number;
  language: SupportedLanguage;
  /** Host whose block triggered the challenge. */
  domain: string;
}

// --- Submission history ---------------------------------------------------

/**
 * A single Submit attempt recorded on the challenge page. Persisted per-problem
 * so the SubmissionsPanel can restore history after a page reload.
 */
export interface SubmissionRecord {
  attempt: number;
  timestamp: number;
  outcome: 'accepted' | 'wrong-answer' | 'runtime-error' | 'timeout';
  passCount: number;
  totalTests: number;
  /** Total execution time of all test cases in this submission, if measured. */
  durationMs?: number;
  /** Snapshot of the code that was submitted. Enables "restore" in SubmissionsPanel. */
  code?: string;
}

// --- Streaks --------------------------------------------------------------

export interface StreakDay {
  /** Local calendar day, formatted "YYYY-MM-DD". */
  date: string;
  solved: number;
  failed: number;
}

export interface StreakSummary {
  /** Consecutive days with at least one solve. */
  current: number;
  longest: number;
  lastSolvedDate: string | null;
  /** Set when a streak-damaging event occurs (disable, rule removal, fail). */
  damaged: boolean;
}

// --- Settings locks -------------------------------------------------------

export interface SettingsLock {
  enabled: boolean;
  /** Salted hash; the plaintext password is never stored. */
  passwordHash: string | null;
  salt: string | null;
}

export interface AccountabilityPartner {
  enabled: boolean;
  /** Stored for display only — the MVP sends no email. */
  email: string | null;
  /** Salted hash of the partner-held unlock code. */
  codeHash: string | null;
  salt: string | null;
}

// --- Cooldown pipeline ----------------------------------------------------

export type CooldownChangeKind =
  | 'remove-block-rule'
  | 'remove-keyword-rule'
  | 'disable-strict-mode'
  | 'reduce-friction';

export interface CooldownPendingChange {
  id: string;
  kind: CooldownChangeKind;
  /** Serializable description of the change to apply once the cooldown ends. */
  payload: unknown;
  /** Human-readable summary shown in the pending-changes list. */
  description: string;
  requestedAt: number;
  /** requestedAt + settingsCooldownMs. */
  appliesAt: number;
}

// --- User preferences -----------------------------------------------------

export interface UserPreferences {
  /** Time limit for a single challenge, in seconds. */
  challengeTimeLimitSec: number;
  /** Access granted per solved challenge, in minutes. */
  unlockDurationMin: number;
  /** Difficulties eligible for challenge selection. */
  difficulties: Difficulty[];
  /** Eligible categories; an empty array means "all categories". */
  tags: ProblemTag[];
  failureAction: FailureAction;
  /** Destination when failureAction is 'redirect'. */
  redirectUrl: string;
  /** Failed submissions allowed before the challenge counts as failed. */
  maxSubmissionAttempts: number;
  strictMode: boolean;
  /** Delay before strictness-reducing settings changes take effect, in ms. */
  settingsCooldownMs: number;
  /** Whether the "give up" action is available (always false in strict mode). */
  allowGiveUp: boolean;
  /** Active UI theme. `'system'` follows the OS preference. */
  theme: ThemePreference;
  /** CodeMirror editor font size, in CSS pixels. */
  editorFontSize: number;
  /** The user's preferred coding language. Falls back to JS for any problem that doesn't ship a Python starter. */
  preferredLanguage: SupportedLanguage;
  /** CodeMirror keymap flavour. `'vim'` enables the full `@replit/codemirror-vim` modal keymap. */
  editorKeymap: EditorKeymap;
  /** Width of the problem panel as a percentage of the split-view container (desktop only). Clamped to [20, 80]. */
  problemPanelWidthPct: number;
  /** Number of spaces inserted by the Tab key. 2 or 4. */
  editorIndentSize: 2 | 4;
}

/** Theme options exposed in the UI. */
export type ThemePreference = 'dark' | 'light' | 'system';

/** Modal-vs-default selector for the CodeMirror editor. */
export type EditorKeymap = 'default' | 'vim' | 'emacs';
