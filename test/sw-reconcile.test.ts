import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { RECONCILE_ALARM, applyPendingChanges, earliest, reconcile } from '../src/background/reconcile';
import { installFakeChrome, uninstallFakeChrome } from './helpers/fake-chrome';
import type { FakeChrome } from './helpers/fake-chrome';
import { getValue, setValue } from '../src/lib/storage/store';
import type {
  BlockRule,
  CooldownPendingChange,
  KeywordRule,
  UnlockToken,
} from '../src/lib/types';

// Integration tests for the SW reconcile pipeline against an in-memory chrome.
// These exercise the full end-to-end of: storage → reconcile → DNR rule set
// produced + alarm scheduled. The closest thing to a true e2e test we can run
// without a real browser.

const NOW = 1_700_000_000_000;

function blockDomain(id: string, pattern: string, enabled = true): BlockRule {
  return { id, kind: 'domain', pattern, enabled, createdAt: 0 };
}
function keyword(id: string, kw: string, enabled = true): KeywordRule {
  return { id, keyword: kw, enabled, createdAt: 0 };
}
function token(
  domain: string,
  grantedAt: number,
  durationMs: number,
  problemId = 'two-sum',
): UnlockToken {
  return { domain, grantedAt, expiresAt: grantedAt + durationMs, problemId, durationMs };
}
function pendingChange(
  id: string,
  kind: CooldownPendingChange['kind'],
  payload: unknown,
  appliesAt: number,
): CooldownPendingChange {
  return { id, kind, payload, description: kind, requestedAt: 0, appliesAt };
}

describe('SW reconcile integration', () => {
  let fake: FakeChrome;

  beforeEach(() => {
    fake = installFakeChrome();
  });
  afterEach(() => {
    uninstallFakeChrome();
  });

  describe('DNR rule build', () => {
    it('produces one rule per enabled block rule and per enabled keyword', async () => {
      await setValue('blockedRules', [
        blockDomain('b1', 'youtube.com'),
        blockDomain('b2', 'reddit.com'),
        blockDomain('b3', 'disabled.example', false),
      ]);
      await setValue('keywordRules', [keyword('k1', 'shorts'), keyword('k2', 'disabled', false)]);

      await reconcile(NOW);

      const rules = await fake.declarativeNetRequest.getDynamicRules();
      expect(rules).toHaveLength(3); // youtube, reddit, shorts
      const patterns = rules.map((rule) => rule.condition.regexFilter ?? '');
      expect(patterns.some((p) => p.includes('youtube\\.com'))).toBe(true);
      expect(patterns.some((p) => p.includes('reddit\\.com'))).toBe(true);
      expect(patterns.some((p) => p.includes('shorts'))).toBe(true);
    });

    it('skips DNR rule for a domain with an active unlock', async () => {
      await setValue('blockedRules', [blockDomain('b1', 'youtube.com'), blockDomain('b2', 'reddit.com')]);
      await setValue('unlockTokens', [token('youtube.com', NOW, 60_000)]);

      await reconcile(NOW);

      const rules = await fake.declarativeNetRequest.getDynamicRules();
      expect(rules).toHaveLength(1);
      expect(rules[0]?.condition.regexFilter).toContain('reddit\\.com');
    });

    it('keeps a keyword rule even when a domain is unlocked', async () => {
      await setValue('blockedRules', [blockDomain('b1', 'youtube.com')]);
      await setValue('keywordRules', [keyword('k1', 'shorts')]);
      await setValue('unlockTokens', [token('youtube.com', NOW, 60_000)]);

      await reconcile(NOW);

      const rules = await fake.declarativeNetRequest.getDynamicRules();
      expect(rules).toHaveLength(1);
      expect(rules[0]?.condition.regexFilter).toContain('shorts');
    });

    it('fully replaces existing DNR rules on each reconcile', async () => {
      await setValue('blockedRules', [blockDomain('b1', 'youtube.com')]);
      await reconcile(NOW);
      expect((await fake.declarativeNetRequest.getDynamicRules()).map((r) => r.id)).toEqual([1]);

      await setValue('blockedRules', [
        blockDomain('b1', 'youtube.com'),
        blockDomain('b2', 'reddit.com'),
      ]);
      await reconcile(NOW);
      const rules = await fake.declarativeNetRequest.getDynamicRules();
      // IDs restart at 1 on every rebuild → no stale leftovers.
      expect(rules.map((r) => r.id)).toEqual([1, 2]);
    });

    it('emits a redirect action whose substitution carries the original URL', async () => {
      await setValue('blockedRules', [blockDomain('b1', 'youtube.com')]);
      await reconcile(NOW);

      const [rule] = await fake.declarativeNetRequest.getDynamicRules();
      expect(rule?.action.type).toBe('redirect');
      expect(rule?.action.redirect?.regexSubstitution).toMatch(/^chrome-extension:\/\/.+\?target=\\0$/);
    });
  });

  describe('unlock token pruning', () => {
    it('drops expired tokens from storage', async () => {
      await setValue('unlockTokens', [
        token('a.com', NOW - 5000, 1000), // expired
        token('b.com', NOW, 60_000), // active
      ]);
      await reconcile(NOW);
      const after = await getValue('unlockTokens');
      expect(after.map((t) => t.domain)).toEqual(['b.com']);
    });

    it('does not write back tokens when nothing changed', async () => {
      await setValue('unlockTokens', [token('a.com', NOW, 60_000)]);
      const before = await getValue('unlockTokens');
      await reconcile(NOW);
      const after = await getValue('unlockTokens');
      expect(after).toEqual(before);
    });
  });

  describe('cooldown pending-change application', () => {
    it('applies a remove-block-rule whose appliesAt has elapsed', async () => {
      await setValue('blockedRules', [
        blockDomain('b1', 'youtube.com'),
        blockDomain('b2', 'reddit.com'),
      ]);
      await setValue('cooldownPendingChanges', [
        pendingChange('p1', 'remove-block-rule', { ruleId: 'b1' }, NOW - 1000),
      ]);

      await reconcile(NOW);

      expect((await getValue('blockedRules')).map((r) => r.id)).toEqual(['b2']);
      expect(await getValue('cooldownPendingChanges')).toEqual([]);
      expect((await getValue('streakSummary')).damaged).toBe(true);
    });

    it('does NOT apply a pending change whose appliesAt is in the future', async () => {
      await setValue('blockedRules', [blockDomain('b1', 'youtube.com')]);
      await setValue('cooldownPendingChanges', [
        pendingChange('p1', 'remove-block-rule', { ruleId: 'b1' }, NOW + 10_000),
      ]);

      await reconcile(NOW);

      expect((await getValue('blockedRules'))).toHaveLength(1);
      expect((await getValue('cooldownPendingChanges'))).toHaveLength(1);
      expect((await getValue('streakSummary')).damaged).toBe(false);
    });

    it('applies a disable-strict-mode pending change', async () => {
      await setValue('userPreferences', {
        ...(await getValue('userPreferences')),
        strictMode: true,
      });
      await setValue('cooldownPendingChanges', [
        pendingChange('p1', 'disable-strict-mode', null, NOW - 1),
      ]);

      await reconcile(NOW);

      expect((await getValue('userPreferences')).strictMode).toBe(false);
    });

    it('merges a reduce-friction patch into preferences', async () => {
      await setValue('cooldownPendingChanges', [
        pendingChange('p1', 'reduce-friction', { unlockDurationMin: 30 }, NOW - 1),
      ]);

      await reconcile(NOW);

      expect((await getValue('userPreferences')).unlockDurationMin).toBe(30);
    });
  });

  describe('alarm scheduling', () => {
    it('schedules the alarm at the earliest token expiry when no pending exists', async () => {
      await setValue('unlockTokens', [
        token('a.com', NOW, 100_000),
        token('b.com', NOW, 50_000),
      ]);
      await reconcile(NOW);
      expect(fake.alarms.scheduled.get(RECONCILE_ALARM)?.when).toBe(NOW + 50_000);
    });

    it('schedules at the earliest of pending-apply vs token-expiry', async () => {
      await setValue('unlockTokens', [token('a.com', NOW, 100_000)]);
      await setValue('cooldownPendingChanges', [
        pendingChange('p1', 'disable-strict-mode', null, NOW + 25_000),
      ]);
      await reconcile(NOW);
      expect(fake.alarms.scheduled.get(RECONCILE_ALARM)?.when).toBe(NOW + 25_000);
    });

    it('clears the alarm when nothing is upcoming', async () => {
      fake.alarms.scheduled.set(RECONCILE_ALARM, { when: 1 }); // stale
      await reconcile(NOW);
      expect(fake.alarms.scheduled.has(RECONCILE_ALARM)).toBe(false);
    });
  });

  describe('applyPendingChanges (unit)', () => {
    it('is a no-op when nothing is applicable', async () => {
      await setValue('cooldownPendingChanges', [
        pendingChange('p1', 'remove-block-rule', { ruleId: 'b1' }, NOW + 1000),
      ]);
      await applyPendingChanges(NOW);
      // Pending list untouched, streak undamaged.
      expect((await getValue('cooldownPendingChanges')).length).toBe(1);
      expect((await getValue('streakSummary')).damaged).toBe(false);
    });
  });
});

describe('earliest', () => {
  it('picks the smaller of two timestamps', () => {
    expect(earliest(10, 5)).toBe(5);
    expect(earliest(5, 10)).toBe(5);
  });
  it('returns the non-null value when one side is null', () => {
    expect(earliest(null, 5)).toBe(5);
    expect(earliest(5, null)).toBe(5);
  });
  it('returns null when both are null', () => {
    expect(earliest(null, null)).toBeNull();
  });
});
