/**
 * Settings page for LeetLock.
 *
 * Owns all storage I/O, cooldown scheduling, and lock verification.
 * Extracted sub-components handle individual sections; this file only wires
 * state, persistence, and the strictness-deferral / password-lock rules.
 *
 * Cooldown rules (enforced when strictMode === true):
 *   - Delete block rule            → schedule 'remove-block-rule'
 *   - Delete keyword rule          → schedule 'remove-keyword-rule'
 *   - Disable strict mode          → schedule 'disable-strict-mode'
 *   - Increase unlockDurationMin   → schedule 'reduce-friction'
 *   - Decrease challengeTimeLimitSec → schedule 'reduce-friction'
 *   - Increase maxSubmissionAttempts → schedule 'reduce-friction'
 *   - Decrease settingsCooldownMs  → schedule 'reduce-friction'
 *   - Disable block / keyword rule → schedule 'reduce-friction'
 *
 * Lock rules (enforced when settingsLock.enabled || partner.enabled):
 *   All of the above strictness-reducing actions require password verification
 *   before proceeding (either applying immediately or scheduling a pending change).
 */

import { useState, useEffect, useCallback, useId } from 'react';
import type {
  BlockRule,
  BlockRuleKind,
  KeywordRule,
  UserPreferences,
  SettingsLock,
  AccountabilityPartner,
  CooldownPendingChange,
} from '../../lib/types';
import {
  getValue,
  setValue,
  updateValue,
} from '../../lib/storage';
import { DEFAULT_PREFERENCES } from '../../lib/storage/defaults';
import { verifySecret } from '../../lib/crypto';
import {
  schedulePending,
  cancelPending,
} from '../../lib/cooldown/cooldown';
import { damageStreakNow } from '../../lib/streak/damage-now';
import {
  isReducingUnlockDuration,
  isReducingTimeLimitSec,
  isIncreasingMaxAttempts,
  isReducingCooldownMs,
} from './options-helpers';
import { BlockedSitesSection } from './components/BlockedSitesSection';
import { KeywordTriggersSection } from './components/KeywordTriggersSection';
import { ChallengeSection } from './components/ChallengeSection';
import { UnlockSection } from './components/UnlockSection';
import { ProblemSelectionSection } from './components/ProblemSelectionSection';
import { FailureSection } from './components/FailureSection';
import { StrictModeSection } from './components/StrictModeSection';
import { PasswordLockSection } from './components/PasswordLockSection';
import { AccountabilitySection } from './components/AccountabilitySection';
import { PendingChangesSection } from './components/PendingChangesSection';
import { SyncStatusSection } from './components/SyncStatusSection';
import { ResetSection } from './components/ResetSection';
import { AboutSection } from './components/AboutSection';
import { VerifyModal } from './components/VerifyModal';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type PageStatus = 'loading' | 'ready' | 'error';

interface PageData {
  prefs: UserPreferences;
  blockRules: BlockRule[];
  keywordRules: KeywordRule[];
  lock: SettingsLock;
  partner: AccountabilityPartner;
  pending: CooldownPendingChange[];
}

/**
 * A queued protected action. When the user triggers an action that requires
 * password verification, we store the callback here and open a VerifyModal.
 * On success the callback is invoked; on cancel it is discarded.
 */
interface PendingAction {
  title: string;
  inputLabel: string;
  /** The action to run once the password is verified. */
  execute: () => Promise<void>;
  error: string | null;
}

// ---------------------------------------------------------------------------
// Loading / error screens
// ---------------------------------------------------------------------------

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg">
      <span className="font-mono text-xs text-faint">Loading settings…</span>
    </div>
  );
}

function ErrorScreen({ message }: { message: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-bg px-8 text-center">
      <span className="font-mono text-sm font-semibold text-text">Failed to load settings</span>
      <p className="max-w-sm text-xs leading-relaxed text-muted">{message}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export function Options() {
  const pageUid = useId();
  const liveRegionId = `${pageUid}-live`;

  const [status, setStatus] = useState<PageStatus>('loading');
  const [errorMsg, setErrorMsg] = useState('');
  const [data, setData] = useState<PageData | null>(null);

  // In-page status announcement (save confirmations, pending-change notices).
  const [announcement, setAnnouncement] = useState('');

  // Queued action awaiting password/code verification.
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);

  // ---------------------------------------------------------------------------
  // Load all settings on mount
  // ---------------------------------------------------------------------------

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const [prefs, blockRules, keywordRules, lock, partner, pending] = await Promise.all([
          getValue('userPreferences'),
          getValue('blockedRules'),
          getValue('keywordRules'),
          getValue('settingsLock'),
          getValue('accountabilityPartner'),
          getValue('cooldownPendingChanges'),
        ]);

        if (!cancelled) {
          setData({ prefs, blockRules, keywordRules, lock, partner, pending });
          setStatus('ready');
        }
      } catch (err) {
        if (!cancelled) {
          setErrorMsg(err instanceof Error ? err.message : 'Unknown error loading settings.');
          setStatus('error');
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
    };
  }, []);

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  function announce(msg: string) {
    setAnnouncement('');
    // Allow React to flush the clear before setting the new message so the
    // live region fires an announcement even for repeated identical strings.
    requestAnimationFrame(() => setAnnouncement(msg));
  }

  /** Returns true if any lock (password or partner) is active. */
  function isLocked(d: PageData): boolean {
    return d.lock.enabled || d.partner.enabled;
  }

  /**
   * Verifies the password against whichever lock is active.
   * Prefers the settings password; falls back to the partner code.
   */
  async function verifyLock(d: PageData, entered: string): Promise<boolean> {
    if (d.lock.enabled && d.lock.passwordHash && d.lock.salt) {
      return verifySecret(entered, d.lock.passwordHash, d.lock.salt);
    }
    if (d.partner.enabled && d.partner.codeHash && d.partner.salt) {
      return verifySecret(entered, d.partner.codeHash, d.partner.salt);
    }
    return true;
  }

  /**
   * Runs `action` if unlocked; otherwise opens the verify modal first.
   * `action` is called only after a successful verification or when no lock is set.
   */
  function gatedAction(
    d: PageData,
    title: string,
    inputLabel: string,
    action: () => Promise<void>,
  ) {
    if (!isLocked(d)) {
      void action();
      return;
    }
    setPendingAction({ title, inputLabel, execute: action, error: null });
  }

  async function handleVerifyConfirm(entered: string) {
    if (!pendingAction || !data) return;
    const ok = await verifyLock(data, entered);
    if (!ok) {
      setPendingAction({ ...pendingAction, error: 'Incorrect password or code.' });
      return;
    }
    const action = pendingAction.execute;
    setPendingAction(null);
    await action();
  }

  // ---------------------------------------------------------------------------
  // Schedule a pending change (strict mode) or apply immediately
  // ---------------------------------------------------------------------------

  const schedulePendingChange = useCallback(
    async (
      d: PageData,
      kind: CooldownPendingChange['kind'],
      payload: unknown,
      description: string,
    ): Promise<void> => {
      const change = schedulePending({
        kind,
        payload,
        description,
        cooldownMs: d.prefs.settingsCooldownMs,
      });
      const updated = await updateValue('cooldownPendingChanges', (curr) => [...curr, change]);
      setData((prev) => (prev ? { ...prev, pending: updated } : prev));
      announce(`Change queued: ${description}`);
    },
    [],
  );

  // ---------------------------------------------------------------------------
  // UserPreferences writer
  // ---------------------------------------------------------------------------

  const applyPrefsNow = useCallback(async (patch: Partial<UserPreferences>): Promise<void> => {
    const updated = await updateValue('userPreferences', (curr) => ({ ...curr, ...patch }));
    setData((prev) => (prev ? { ...prev, prefs: updated } : prev));
  }, []);

  /**
   * Applies or defers a preferences patch based on whether it reduces strictness.
   * The caller passes the `prev` snapshot so we can compare before/after.
   */
  const handlePrefsChange = useCallback(
    async (
      d: PageData,
      patch: Partial<UserPreferences>,
      descriptionFn?: (prev: UserPreferences) => string,
    ): Promise<void> => {
      const prev = d.prefs;
      const strict = prev.strictMode;

      const needsDefer =
        strict &&
        (isReducingUnlockDuration(prev, patch) ||
          isReducingTimeLimitSec(prev, patch) ||
          isIncreasingMaxAttempts(prev, patch) ||
          isReducingCooldownMs(prev, patch));

      if (needsDefer) {
        const description = descriptionFn ? descriptionFn(prev) : 'Change settings';
        gatedAction(d, 'Confirm change', 'Password', () =>
          schedulePendingChange(d, 'reduce-friction', patch, description),
        );
      } else {
        await applyPrefsNow(patch);
        announce('Settings saved.');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [applyPrefsNow, schedulePendingChange],
  );

  // ---------------------------------------------------------------------------
  // Block rules
  // ---------------------------------------------------------------------------

  const handleAddBlockRule = useCallback(
    (_d: PageData) => (kind: BlockRuleKind, pattern: string) => {
      const rule: BlockRule = {
        id: crypto.randomUUID(),
        kind,
        pattern: pattern.trim(),
        enabled: true,
        createdAt: Date.now(),
      };
      void (async () => {
        const updated = await updateValue('blockedRules', (curr) => [...curr, rule]);
        setData((prev) => (prev ? { ...prev, blockRules: updated } : prev));
        announce(`Blocked site added: ${pattern}`);
      })();
    },
    [],
  );

  const handleToggleBlockRule = useCallback(
    (d: PageData) => (rule: BlockRule, enabled: boolean) => {
      // Disabling a rule is a strictness-reducing action under strict mode.
      const act = async () => {
        if (d.prefs.strictMode && !enabled) {
          await schedulePendingChange(
            d,
            'reduce-friction',
            { ruleId: rule.id, enabled: false },
            `Disable block rule: ${rule.pattern}`,
          );
        } else {
          const updated = await updateValue('blockedRules', (curr) =>
            curr.map((r) => (r.id === rule.id ? { ...r, enabled } : r)),
          );
          // Disabling a rule outside the cooldown pipeline damages the streak.
          if (!enabled) {
            await damageStreakNow();
          }
          setData((prev) => (prev ? { ...prev, blockRules: updated } : prev));
          announce(`Rule ${enabled ? 'enabled' : 'disabled'}: ${rule.pattern}`);
        }
      };

      if (isLocked(d) && !enabled) {
        gatedAction(d, 'Disable block rule', 'Password', act);
      } else {
        void act();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedulePendingChange],
  );

  const handleDeleteBlockRule = useCallback(
    (d: PageData) => (rule: BlockRule) => {
      const act = async () => {
        if (d.prefs.strictMode) {
          await schedulePendingChange(
            d,
            'remove-block-rule',
            { ruleId: rule.id },
            `Remove block rule: ${rule.pattern}`,
          );
        } else {
          const updated = await updateValue('blockedRules', (curr) =>
            curr.filter((r) => r.id !== rule.id),
          );
          await damageStreakNow();
          setData((prev) => (prev ? { ...prev, blockRules: updated } : prev));
          announce(`Block rule removed: ${rule.pattern}`);
        }
      };

      if (isLocked(d)) {
        gatedAction(d, 'Delete block rule', 'Password', act);
      } else {
        void act();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedulePendingChange],
  );

  // ---------------------------------------------------------------------------
  // Keyword rules
  // ---------------------------------------------------------------------------

  const handleAddKeyword = useCallback(
    (_d: PageData) => (keyword: string) => {
      const rule: KeywordRule = {
        id: crypto.randomUUID(),
        keyword,
        enabled: true,
        createdAt: Date.now(),
      };
      void (async () => {
        const updated = await updateValue('keywordRules', (curr) => [...curr, rule]);
        setData((prev) => (prev ? { ...prev, keywordRules: updated } : prev));
        announce(`Keyword trigger added: ${keyword}`);
      })();
    },
    [],
  );

  const handleToggleKeyword = useCallback(
    (d: PageData) => (rule: KeywordRule, enabled: boolean) => {
      const act = async () => {
        if (d.prefs.strictMode && !enabled) {
          await schedulePendingChange(
            d,
            'reduce-friction',
            { ruleId: rule.id, enabled: false },
            `Disable keyword rule: ${rule.keyword}`,
          );
        } else {
          const updated = await updateValue('keywordRules', (curr) =>
            curr.map((r) => (r.id === rule.id ? { ...r, enabled } : r)),
          );
          // Disabling a keyword outside the cooldown pipeline damages the streak.
          if (!enabled) {
            await damageStreakNow();
          }
          setData((prev) => (prev ? { ...prev, keywordRules: updated } : prev));
          announce(`Keyword ${enabled ? 'enabled' : 'disabled'}: ${rule.keyword}`);
        }
      };

      if (isLocked(d) && !enabled) {
        gatedAction(d, 'Disable keyword rule', 'Password', act);
      } else {
        void act();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedulePendingChange],
  );

  const handleDeleteKeyword = useCallback(
    (d: PageData) => (rule: KeywordRule) => {
      const act = async () => {
        if (d.prefs.strictMode) {
          await schedulePendingChange(
            d,
            'remove-keyword-rule',
            { ruleId: rule.id },
            `Remove keyword rule: ${rule.keyword}`,
          );
        } else {
          const updated = await updateValue('keywordRules', (curr) =>
            curr.filter((r) => r.id !== rule.id),
          );
          await damageStreakNow();
          setData((prev) => (prev ? { ...prev, keywordRules: updated } : prev));
          announce(`Keyword removed: ${rule.keyword}`);
        }
      };

      if (isLocked(d)) {
        gatedAction(d, 'Delete keyword rule', 'Password', act);
      } else {
        void act();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [schedulePendingChange],
  );

  // ---------------------------------------------------------------------------
  // Strict mode toggle
  // ---------------------------------------------------------------------------

  const handleToggleStrict = useCallback(
    (d: PageData) => (enabled: boolean) => {
      const act = async () => {
        if (!enabled && d.prefs.strictMode) {
          // Turning strict OFF is a strictness-reducing action.
          await schedulePendingChange(d, 'disable-strict-mode', null, 'Disable strict mode');
        } else {
          // Turning strict ON applies immediately.
          await applyPrefsNow({ strictMode: enabled, allowGiveUp: enabled ? false : d.prefs.allowGiveUp });
          announce(`Strict mode ${enabled ? 'enabled' : 'disabled'}.`);
        }
      };

      if (isLocked(d) && !enabled) {
        gatedAction(d, 'Disable strict mode', 'Password', act);
      } else {
        void act();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [applyPrefsNow, schedulePendingChange],
  );

  // ---------------------------------------------------------------------------
  // Cooldown preset change
  // ---------------------------------------------------------------------------

  const handleChangeCooldown = useCallback(
    (d: PageData) => (ms: number) => {
      void handlePrefsChange(
        d,
        { settingsCooldownMs: ms },
        () => `Reduce settings cooldown`,
      );
    },
    [handlePrefsChange],
  );

  // ---------------------------------------------------------------------------
  // Cancel pending change
  // ---------------------------------------------------------------------------

  const handleCancelPending = useCallback((id: string) => {
    void (async () => {
      const updated = await updateValue('cooldownPendingChanges', (curr) =>
        cancelPending(curr, [id]),
      );
      setData((prev) => (prev ? { ...prev, pending: updated } : prev));
      announce('Pending change cancelled.');
    })();
  }, []);

  // ---------------------------------------------------------------------------
  // Lock / partner save
  // ---------------------------------------------------------------------------

  const handleSaveLock = useCallback(async (updated: SettingsLock) => {
    await setValue('settingsLock', updated);
    setData((prev) => (prev ? { ...prev, lock: updated } : prev));
    announce('Password lock updated.');
  }, []);

  const handleSavePartner = useCallback(async (updated: AccountabilityPartner) => {
    await setValue('accountabilityPartner', updated);
    setData((prev) => (prev ? { ...prev, partner: updated } : prev));
    announce('Accountability partner updated.');
  }, []);

  // ---------------------------------------------------------------------------
  // Reset to defaults
  // ---------------------------------------------------------------------------

  const handleReset = useCallback(
    (d: PageData) => async () => {
      if (d.prefs.strictMode) {
        await schedulePendingChange(
          d,
          'reduce-friction',
          { reset: true },
          'Reset settings to defaults',
        );
      } else {
        await setValue('userPreferences', DEFAULT_PREFERENCES);
        setData((prev) => (prev ? { ...prev, prefs: DEFAULT_PREFERENCES } : prev));
        announce('Settings reset to defaults.');
      }
    },
    [schedulePendingChange],
  );

  // ---------------------------------------------------------------------------
  // Derive pending-change summaries for section notices
  // ---------------------------------------------------------------------------

  function pendingNoticeForBlockRule(ruleId: string, pending: CooldownPendingChange[]): string | null {
    const match = pending.find(
      (p) =>
        p.kind === 'remove-block-rule' &&
        (p.payload as { ruleId?: string })?.ruleId === ruleId,
    );
    return match ? `Removal pending` : null;
  }

  function pendingNoticeForKeyword(ruleId: string, pending: CooldownPendingChange[]): string | null {
    const match = pending.find(
      (p) =>
        p.kind === 'remove-keyword-rule' &&
        (p.payload as { ruleId?: string })?.ruleId === ruleId,
    );
    return match ? `Removal pending` : null;
  }

  function hasPendingKind(kinds: CooldownPendingChange['kind'][], pending: CooldownPendingChange[]): boolean {
    return pending.some((p) => kinds.includes(p.kind));
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  if (status === 'loading') return <LoadingScreen />;
  if (status === 'error' || !data) return <ErrorScreen message={errorMsg} />;

  const d = data;

  // Build sets of pending rule IDs for visual feedback in the rule tables.
  const pendingBlockRuleIds = new Set(
    d.pending
      .filter((p) => p.kind === 'remove-block-rule')
      .map((p) => (p.payload as { ruleId: string }).ruleId),
  );
  const pendingKeywordRuleIds = new Set(
    d.pending
      .filter((p) => p.kind === 'remove-keyword-rule')
      .map((p) => (p.payload as { ruleId: string }).ruleId),
  );

  // Also include 'reduce-friction' entries that disable rules.
  d.pending
    .filter((p) => p.kind === 'reduce-friction')
    .forEach((p) => {
      const payload = p.payload as { ruleId?: string; enabled?: boolean };
      if (payload?.ruleId && payload.enabled === false) {
        // We can't tell if it's a block or keyword rule without extra metadata;
        // add to both sets to be safe — the rule tables only show the id if it matches.
        pendingBlockRuleIds.add(payload.ruleId);
        pendingKeywordRuleIds.add(payload.ruleId);
      }
    });

  const blockSectionPendingNotice = hasPendingKind(['remove-block-rule'], d.pending)
    ? 'One or more block rules have pending removals.'
    : null;
  const keywordSectionPendingNotice = hasPendingKind(['remove-keyword-rule'], d.pending)
    ? 'One or more keyword rules have pending removals.'
    : null;
  const strictPendingNotice = hasPendingKind(['disable-strict-mode'], d.pending)
    ? 'Strict mode will be disabled after the cooldown.'
    : null;
  const frictionPendingNotice = hasPendingKind(['reduce-friction'], d.pending)
    ? 'Some changes are pending cooldown.'
    : null;

  // Suppress unused variable warnings — these are used contextually in the render below.
  void pendingNoticeForBlockRule;
  void pendingNoticeForKeyword;

  return (
    <>
      {/* Global live region for save confirmations */}
      <div
        id={liveRegionId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
      >
        {announcement}
      </div>

      <div className="min-h-full bg-bg text-text">
        {/* Page header */}
        <header className="sticky top-0 z-10 border-b border-border bg-surface">
          <div className="mx-auto max-w-[720px] px-6 py-4">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
                LEETLOCK
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Settings
              </span>
            </div>
          </div>
        </header>

        {/* Strict-mode banner */}
        {d.prefs.strictMode && (
          <div
            className="border-b border-border bg-surface-2 px-6 py-2.5 text-center"
            role="alert"
          >
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
              Strict mode active — changes that reduce friction are deferred by{' '}
              {d.prefs.settingsCooldownMs / 60_000 >= 60
                ? `${d.prefs.settingsCooldownMs / 3_600_000}h`
                : `${d.prefs.settingsCooldownMs / 60_000}m`}
            </p>
          </div>
        )}

        {/* Main content */}
        <main
          className="mx-auto max-w-[720px] space-y-4 px-6 py-8"
          aria-label="Settings"
        >
          {/* 1. Blocked sites */}
          <BlockedSitesSection
            rules={d.blockRules}
            strictMode={d.prefs.strictMode}
            pendingRuleIds={pendingBlockRuleIds}
            pendingNotice={blockSectionPendingNotice}
            onAdd={handleAddBlockRule(d)}
            onToggle={handleToggleBlockRule(d)}
            onDelete={handleDeleteBlockRule(d)}
          />

          {/* 2. Keyword triggers */}
          <KeywordTriggersSection
            rules={d.keywordRules}
            strictMode={d.prefs.strictMode}
            pendingRuleIds={pendingKeywordRuleIds}
            pendingNotice={keywordSectionPendingNotice}
            onAdd={handleAddKeyword(d)}
            onToggle={handleToggleKeyword(d)}
            onDelete={handleDeleteKeyword(d)}
          />

          {/* 3. Challenge */}
          <ChallengeSection
            prefs={d.prefs}
            pendingNotice={frictionPendingNotice}
            onChange={(patch) =>
              void handlePrefsChange(
                d,
                patch,
                (_prev) => {
                  if (patch.challengeTimeLimitSec !== undefined) {
                    return `Reduce challenge time limit to ${patch.challengeTimeLimitSec}s`;
                  }
                  if (patch.maxSubmissionAttempts !== undefined) {
                    return `Increase max attempts to ${patch.maxSubmissionAttempts}`;
                  }
                  return 'Change challenge settings';
                },
              )
            }
          />

          {/* 4. Unlock */}
          <UnlockSection
            prefs={d.prefs}
            pendingNotice={frictionPendingNotice}
            onChange={(patch) =>
              void handlePrefsChange(
                d,
                patch,
                (prev) =>
                  `Increase unlock duration to ${(patch as Partial<UserPreferences>).unlockDurationMin ?? prev.unlockDurationMin}m`,
              )
            }
          />

          {/* 5. Problem selection */}
          <ProblemSelectionSection
            prefs={d.prefs}
            onChange={(patch) => void applyPrefsNow(patch).then(() => announce('Settings saved.'))}
          />

          {/* 6. Failure */}
          <FailureSection
            prefs={d.prefs}
            onChange={(patch) => void applyPrefsNow(patch).then(() => announce('Settings saved.'))}
          />

          {/* 7. Strict mode */}
          <StrictModeSection
            prefs={d.prefs}
            pendingNotice={strictPendingNotice}
            onToggleStrict={handleToggleStrict(d)}
            onChangeCooldown={handleChangeCooldown(d)}
          />

          {/* 8. Password lock */}
          <PasswordLockSection lock={d.lock} onSave={handleSaveLock} />

          {/* 9. Accountability partner */}
          <AccountabilitySection partner={d.partner} onSave={handleSavePartner} />

          {/* 10. Pending changes */}
          <PendingChangesSection pending={d.pending} onCancel={handleCancelPending} />

          {/* 11. Sync status */}
          <SyncStatusSection lastSyncAt={null} />

          {/* 12. Reset */}
          <ResetSection
            lock={d.lock}
            strictMode={d.prefs.strictMode}
            onReset={handleReset(d)}
          />

          {/* 13. About — bundled-Pyodide reassurance + boot-time stat */}
          <AboutSection />
        </main>
      </div>

      {/* Global verify modal — opened when a locked, strictness-reducing action is attempted */}
      {pendingAction && (
        <VerifyModal
          title={pendingAction.title}
          inputLabel={pendingAction.inputLabel}
          placeholder={d.lock.enabled ? 'Enter password' : 'Enter partner code'}
          onConfirm={handleVerifyConfirm}
          onCancel={() => setPendingAction(null)}
          externalError={pendingAction.error}
        />
      )}
    </>
  );
}
