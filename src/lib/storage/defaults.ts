import type { UserPreferences } from '../types';
import { DEFAULT_GEMINI_MODEL } from '../ai/models';
import type { StorageSchema } from './schema';

/** One minute and one hour in milliseconds — used for cooldown defaults. */
const MINUTE_MS = 60 * 1000;

/** Default user preferences, applied on first run. */
export const DEFAULT_PREFERENCES: UserPreferences = {
  challengeTimeLimitSec: 600,
  unlockDurationMin: 10,
  difficulties: ['easy'],
  tags: [],
  lists: [],
  failureAction: 'close',
  redirectUrl: '',
  maxSubmissionAttempts: 5,
  strictMode: false,
  settingsCooldownMs: 10 * MINUTE_MS,
  allowGiveUp: true,
  theme: 'dark',
  editorFontSize: 13,
  preferredLanguage: 'javascript',
  editorKeymap: 'default',
  problemPanelWidthPct: 41.67,
  editorIndentSize: 2,
  editorWordWrap: true,
  editorAutocomplete: false,
  editorThemeSync: true,
  challengeMode: 'mixed',
};

/**
 * Default value for every storage key, returned by `getValue` when a key has
 * not been written yet. Callers receive a fresh deep copy, never this object.
 */
export const STORAGE_DEFAULTS: StorageSchema = {
  blockedRules: [],
  keywordRules: [],
  userPreferences: DEFAULT_PREFERENCES,
  settingsLock: { enabled: false, passwordHash: null, salt: null },
  accountabilityPartner: { enabled: false, email: null, codeHash: null, salt: null },
  cooldownPendingChanges: [],
  streakSummary: { current: 0, longest: 0, lastSolvedDate: null, damaged: false },
  unlockTokens: [],
  solvedProblems: [],
  streakHistory: [],
  draftCode: {},
  submissionHistory: {},
  aiSettings: { geminiApiKey: null, enabled: false, model: DEFAULT_GEMINI_MODEL },
  feedback: [],
};
