import { describe, it, expect } from 'vitest';
import {
  formatCooldownMs,
  formatTimeUntil,
  formatSyncTime,
  formatTimeLimitSec,
  validateBlockPattern,
  validateKeyword,
  validateRedirectUrl,
  validatePassword,
  passwordsMatch,
  capitalise,
  formatTag,
  matchCooldownPreset,
  COOLDOWN_PRESETS,
  isReducingUnlockDuration,
  isReducingTimeLimitSec,
  isIncreasingMaxAttempts,
  isReducingCooldownMs,
} from '../src/pages/options/options-helpers';
import type { UserPreferences } from '../src/lib/types';
import { DEFAULT_PREFERENCES } from '../src/lib/storage/defaults';

// ---------------------------------------------------------------------------
// formatCooldownMs
// ---------------------------------------------------------------------------

describe('formatCooldownMs', () => {
  it('formats 0 ms as 0m', () => {
    expect(formatCooldownMs(0)).toBe('0m');
  });

  it('formats sub-hour durations in minutes', () => {
    expect(formatCooldownMs(10 * 60 * 1000)).toBe('10m');
    expect(formatCooldownMs(30 * 60 * 1000)).toBe('30m');
    expect(formatCooldownMs(59 * 60 * 1000)).toBe('59m');
  });

  it('formats exact hours without trailing minutes', () => {
    expect(formatCooldownMs(60 * 60 * 1000)).toBe('1h');
    expect(formatCooldownMs(24 * 60 * 60 * 1000)).toBe('24h');
  });

  it('formats hours with minutes', () => {
    expect(formatCooldownMs(90 * 60 * 1000)).toBe('1h 30m');
    expect(formatCooldownMs(125 * 60 * 1000)).toBe('2h 5m');
  });

  it('handles negative values as 0m', () => {
    expect(formatCooldownMs(-1000)).toBe('0m');
  });
});

// ---------------------------------------------------------------------------
// formatTimeUntil
// ---------------------------------------------------------------------------

describe('formatTimeUntil', () => {
  const now = 100_000;

  it('returns "applying now" when appliesAt <= now', () => {
    expect(formatTimeUntil(now, now)).toBe('applying now');
    expect(formatTimeUntil(now - 1, now)).toBe('applying now');
  });

  it('shows seconds when under a minute', () => {
    expect(formatTimeUntil(now + 30_000, now)).toBe('applies in 30s');
  });

  it('shows minutes and seconds', () => {
    expect(formatTimeUntil(now + 90_000, now)).toBe('applies in 1m 30s');
  });

  it('shows hours, minutes, and seconds', () => {
    expect(formatTimeUntil(now + 3_661_000, now)).toBe('applies in 1h 1m 1s');
  });

  it('rounds up partial seconds', () => {
    // 500ms remaining — should round up to 1s
    expect(formatTimeUntil(now + 500, now)).toBe('applies in 1s');
  });
});

// ---------------------------------------------------------------------------
// formatSyncTime
// ---------------------------------------------------------------------------

describe('formatSyncTime', () => {
  it('returns "just now" for sub-minute timestamps', () => {
    const now = Date.now();
    expect(formatSyncTime(now - 30_000)).toBe('just now');
    expect(formatSyncTime(now)).toBe('just now');
  });

  it('returns "Xm ago" for under an hour', () => {
    const now = Date.now();
    expect(formatSyncTime(now - 5 * 60_000)).toBe('5m ago');
    expect(formatSyncTime(now - 59 * 60_000)).toBe('59m ago');
  });

  it('returns "Xh ago" for under 24 hours', () => {
    const now = Date.now();
    expect(formatSyncTime(now - 2 * 3_600_000)).toBe('2h ago');
  });
});

// ---------------------------------------------------------------------------
// formatTimeLimitSec
// ---------------------------------------------------------------------------

describe('formatTimeLimitSec', () => {
  it('formats sub-minute seconds', () => {
    expect(formatTimeLimitSec(45)).toBe('45s');
  });

  it('formats exact minutes', () => {
    expect(formatTimeLimitSec(600)).toBe('10m');
    expect(formatTimeLimitSec(60)).toBe('1m');
  });

  it('formats minutes with remainder', () => {
    expect(formatTimeLimitSec(90)).toBe('1m 30s');
    expect(formatTimeLimitSec(3661)).toBe('61m 1s');
  });
});

// ---------------------------------------------------------------------------
// validateBlockPattern
// ---------------------------------------------------------------------------

describe('validateBlockPattern', () => {
  describe('kind=domain', () => {
    it('accepts a valid hostname', () => {
      expect(validateBlockPattern('youtube.com', 'domain')).toBeNull();
      expect(validateBlockPattern('www.reddit.com', 'domain')).toBeNull();
    });

    it('rejects an empty string', () => {
      expect(validateBlockPattern('', 'domain')).not.toBeNull();
    });

    it('rejects a string with spaces', () => {
      expect(validateBlockPattern('you tube.com', 'domain')).not.toBeNull();
    });

    it('rejects a hostname without a dot', () => {
      expect(validateBlockPattern('localhost', 'domain')).not.toBeNull();
    });

    it('rejects a full URL', () => {
      expect(validateBlockPattern('https://youtube.com', 'domain')).not.toBeNull();
    });
  });

  describe('kind=url', () => {
    it('accepts a valid full URL', () => {
      expect(validateBlockPattern('https://reddit.com/r/all', 'url')).toBeNull();
      expect(validateBlockPattern('http://example.com/path', 'url')).toBeNull();
    });

    it('rejects a bare hostname', () => {
      expect(validateBlockPattern('youtube.com', 'url')).not.toBeNull();
    });

    it('rejects an empty string', () => {
      expect(validateBlockPattern('', 'url')).not.toBeNull();
    });
  });
});

// ---------------------------------------------------------------------------
// validateKeyword
// ---------------------------------------------------------------------------

describe('validateKeyword', () => {
  it('accepts a valid keyword', () => {
    expect(validateKeyword('shorts')).toBeNull();
    expect(validateKeyword('reels')).toBeNull();
  });

  it('rejects an empty string', () => {
    expect(validateKeyword('')).not.toBeNull();
    expect(validateKeyword('   ')).not.toBeNull();
  });

  it('rejects keywords with spaces', () => {
    expect(validateKeyword('youtube shorts')).not.toBeNull();
  });

  it('rejects keywords over 100 characters', () => {
    expect(validateKeyword('a'.repeat(101))).not.toBeNull();
  });

  it('accepts a keyword of exactly 100 characters', () => {
    expect(validateKeyword('a'.repeat(100))).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validateRedirectUrl
// ---------------------------------------------------------------------------

describe('validateRedirectUrl', () => {
  it('accepts https URLs', () => {
    expect(validateRedirectUrl('https://example.com')).toBeNull();
    expect(validateRedirectUrl('https://example.com/path?q=1')).toBeNull();
  });

  it('accepts http URLs', () => {
    expect(validateRedirectUrl('http://example.com')).toBeNull();
  });

  it('rejects an empty string', () => {
    expect(validateRedirectUrl('')).not.toBeNull();
    expect(validateRedirectUrl('   ')).not.toBeNull();
  });

  it('rejects a bare hostname', () => {
    expect(validateRedirectUrl('example.com')).not.toBeNull();
  });

  it('rejects non-http schemes', () => {
    expect(validateRedirectUrl('ftp://example.com')).not.toBeNull();
    expect(validateRedirectUrl('chrome-extension://abc/page.html')).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// validatePassword
// ---------------------------------------------------------------------------

describe('validatePassword', () => {
  it('accepts a 4-character password', () => {
    expect(validatePassword('abcd')).toBeNull();
  });

  it('accepts a long password', () => {
    expect(validatePassword('my very long password 123!')).toBeNull();
  });

  it('rejects an empty password', () => {
    expect(validatePassword('')).not.toBeNull();
  });

  it('rejects a password shorter than 4 characters', () => {
    expect(validatePassword('abc')).not.toBeNull();
    expect(validatePassword('a')).not.toBeNull();
  });
});

// ---------------------------------------------------------------------------
// passwordsMatch
// ---------------------------------------------------------------------------

describe('passwordsMatch', () => {
  it('returns true for matching non-empty passwords', () => {
    expect(passwordsMatch('secret', 'secret')).toBe(true);
  });

  it('returns false for mismatched passwords', () => {
    expect(passwordsMatch('secret', 'Secret')).toBe(false);
  });

  it('returns false when both are empty', () => {
    expect(passwordsMatch('', '')).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// capitalise / formatTag
// ---------------------------------------------------------------------------

describe('capitalise', () => {
  it('capitalises first letter', () => {
    expect(capitalise('easy')).toBe('Easy');
    expect(capitalise('HARD')).toBe('Hard');
  });

  it('handles empty string', () => {
    expect(capitalise('')).toBe('');
  });
});

describe('formatTag', () => {
  it('replaces hyphens with spaces and capitalises each word', () => {
    expect(formatTag('hash-map')).toBe('Hash Map');
    expect(formatTag('two-pointers')).toBe('Two Pointers');
    expect(formatTag('sliding-window')).toBe('Sliding Window');
    expect(formatTag('binary-search')).toBe('Binary Search');
  });

  it('handles a single word', () => {
    expect(formatTag('arrays')).toBe('Arrays');
    expect(formatTag('math')).toBe('Math');
  });
});

// ---------------------------------------------------------------------------
// matchCooldownPreset
// ---------------------------------------------------------------------------

describe('matchCooldownPreset', () => {
  it('matches each preset exactly', () => {
    for (const preset of COOLDOWN_PRESETS) {
      expect(matchCooldownPreset(preset.ms)).toEqual(preset);
    }
  });

  it('returns null for a non-preset value', () => {
    expect(matchCooldownPreset(999)).toBeNull();
    expect(matchCooldownPreset(0)).toBeNull();
  });
});

// ---------------------------------------------------------------------------
// Strictness detection helpers
// ---------------------------------------------------------------------------

const basePrefs: UserPreferences = { ...DEFAULT_PREFERENCES };

describe('isReducingUnlockDuration', () => {
  it('returns true when unlockDurationMin is increasing', () => {
    expect(isReducingUnlockDuration({ ...basePrefs, unlockDurationMin: 10 }, { unlockDurationMin: 20 })).toBe(true);
  });

  it('returns false when unlockDurationMin is decreasing', () => {
    expect(isReducingUnlockDuration({ ...basePrefs, unlockDurationMin: 10 }, { unlockDurationMin: 5 })).toBe(false);
  });

  it('returns false when unlockDurationMin is unchanged', () => {
    expect(isReducingUnlockDuration({ ...basePrefs, unlockDurationMin: 10 }, { unlockDurationMin: 10 })).toBe(false);
  });

  it('returns false when the key is absent', () => {
    expect(isReducingUnlockDuration(basePrefs, {})).toBe(false);
  });
});

describe('isReducingTimeLimitSec', () => {
  it('returns true when challengeTimeLimitSec is increasing (strictness-reducing)', () => {
    expect(isReducingTimeLimitSec({ ...basePrefs, challengeTimeLimitSec: 300 }, { challengeTimeLimitSec: 600 })).toBe(true);
  });

  it('returns false when challengeTimeLimitSec is decreasing (strictness-increasing)', () => {
    expect(isReducingTimeLimitSec({ ...basePrefs, challengeTimeLimitSec: 600 }, { challengeTimeLimitSec: 300 })).toBe(false);
  });

  it('returns false when the key is absent', () => {
    expect(isReducingTimeLimitSec(basePrefs, {})).toBe(false);
  });
});

describe('isIncreasingMaxAttempts', () => {
  it('returns true when maxSubmissionAttempts is increasing', () => {
    expect(isIncreasingMaxAttempts({ ...basePrefs, maxSubmissionAttempts: 5 }, { maxSubmissionAttempts: 10 })).toBe(true);
  });

  it('returns false when maxSubmissionAttempts is decreasing', () => {
    expect(isIncreasingMaxAttempts({ ...basePrefs, maxSubmissionAttempts: 10 }, { maxSubmissionAttempts: 5 })).toBe(false);
  });

  it('returns false when the key is absent', () => {
    expect(isIncreasingMaxAttempts(basePrefs, {})).toBe(false);
  });
});

describe('isReducingCooldownMs', () => {
  it('returns true when settingsCooldownMs is decreasing', () => {
    expect(isReducingCooldownMs({ ...basePrefs, settingsCooldownMs: 3_600_000 }, { settingsCooldownMs: 600_000 })).toBe(true);
  });

  it('returns false when settingsCooldownMs is increasing', () => {
    expect(isReducingCooldownMs({ ...basePrefs, settingsCooldownMs: 600_000 }, { settingsCooldownMs: 3_600_000 })).toBe(false);
  });

  it('returns false when the key is absent', () => {
    expect(isReducingCooldownMs(basePrefs, {})).toBe(false);
  });
});
