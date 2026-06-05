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
  | 'backtracking'
  | 'union-find'
  | 'binary-indexed-tree'
  | 'simulation'
  | 'shortest-path'
  | 'trie'
  | 'design'
  | 'bit-manipulation'
  | 'segment-tree';

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
  'union-find',
  'binary-indexed-tree',
  'simulation',
  'shortest-path',
  'trie',
  'design',
  'bit-manipulation',
  'segment-tree',
];

/** Every difficulty, easiest first. */
export const DIFFICULTIES: readonly Difficulty[] = ['easy', 'medium', 'hard'];

/** What happens when a challenge is failed or abandoned. */
export type FailureAction = 'close' | 'redirect';

/**
 * Languages the code runner supports. JavaScript remains the default and is
 * the only language every bank problem ships with today. Additional languages
 * use transpilation or interpretation in the browser sandbox.
 */
export type SupportedLanguage =
  | 'javascript'
  | 'typescript'
  | 'python'
  | 'java'
  | 'cpp'
  | 'csharp'
  | 'go'
  | 'rust'
  | 'kotlin'
  | 'swift'
  | 'sql';

const SUPPORTED_LANGUAGE_SET = new Set<string>([
  'javascript', 'typescript', 'python', 'java', 'cpp', 'csharp', 'go', 'rust', 'kotlin', 'swift', 'sql',
]);

export function isSupportedLanguage(value: unknown): value is SupportedLanguage {
  return typeof value === 'string' && SUPPORTED_LANGUAGE_SET.has(value);
}

export const LANGUAGE_LABEL: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
  java: 'Java',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  rust: 'Rust',
  kotlin: 'Kotlin',
  swift: 'Swift',
  sql: 'SQL',
};

export const LANGUAGE_SHORT: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'JS',
  typescript: 'TS',
  python: 'Py',
  java: 'Java',
  cpp: 'C++',
  csharp: 'C#',
  go: 'Go',
  rust: 'Rust',
  kotlin: 'Kt',
  swift: 'Swift',
  sql: 'SQL',
};

/** All supported languages in display order. */
export const ALL_LANGUAGES: readonly SupportedLanguage[] = [
  'javascript', 'typescript', 'python', 'java', 'cpp', 'csharp', 'go', 'rust', 'kotlin', 'swift', 'sql',
];

/** Brief descriptions of each language, used in the Settings page. */
export const LANGUAGE_DESCRIPTION: Readonly<Record<SupportedLanguage, string>> = {
  javascript: 'Default. No setup required.',
  typescript: 'Typed starters for every problem. Type annotations stripped before running.',
  python: 'Runs via Pyodide (WebAssembly CPython, bundled). ~1–2 s first-boot.',
  java: 'Practice Java syntax with auto-generated starters. Executed as JavaScript under the hood.',
  cpp: 'Practice C++ syntax with auto-generated starters. Executed as JavaScript under the hood.',
  csharp: 'Practice C# syntax with auto-generated starters. Executed as JavaScript under the hood.',
  go: 'Practice Go syntax with auto-generated starters. Executed as JavaScript under the hood.',
  rust: 'Practice Rust syntax with auto-generated starters. Executed as JavaScript under the hood.',
  kotlin: 'Practice Kotlin syntax with auto-generated starters. Executed as JavaScript under the hood.',
  swift: 'Practice Swift syntax with auto-generated starters. Executed as JavaScript under the hood.',
  sql: 'Practice SQL syntax. Executed as JavaScript under the hood.',
};

/**
 * Languages that display with native syntax highlighting but execute as
 * JavaScript in the sandbox. Users can practice the language's syntax and
 * idioms, but the actual test runner uses the problem's JavaScript solution.
 */
export const JS_SYNTAX_ONLY_LANGUAGES = new Set<SupportedLanguage>([
  'java',
  'cpp',
  'csharp',
  'go',
  'rust',
  'kotlin',
  'swift',
  'sql',
]);

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
  /** Language used for this submission. Absent on records created before this field was added. */
  language?: SupportedLanguage;
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
  /** Whether the code editor wraps long lines. Defaults to true. */
  editorWordWrap: boolean;
  /** Whether the code editor shows autocomplete suggestions while typing. Defaults to false (like LeetCode). */
  editorAutocomplete: boolean;
}

/** Theme options exposed in the UI. */
export type ThemePreference = 'dark' | 'light' | 'system';

/** Modal-vs-default selector for the CodeMirror editor. */
export type EditorKeymap = 'default' | 'vim' | 'emacs';

// --- AI hint assistant ----------------------------------------------------

/**
 * Settings for the optional AI hint assistant (Gemini). The API key is the
 * user's own, entered in Settings, and is stored in `chrome.storage.local`
 * (device-only — never synced, never committed to the repo).
 */
export interface AiSettings {
  /** The user's Gemini API key. `null` until they enter one in Settings. */
  geminiApiKey: string | null;
  /** Master switch for the hint assistant. */
  enabled: boolean;
  /** Gemini model id to call. */
  model: string;
}
