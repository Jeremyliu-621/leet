/**
 * PasswordLockSection — shows lock status, opens PasswordModal to set/change,
 * and allows disabling (gated by entering the current password via VerifyModal).
 */

import { useState } from 'react';
import type { SettingsLock } from '../../../lib/types';
import { hashSecret, verifySecret } from '../../../lib/crypto';
import { SectionCard } from './SectionCard';
import { PasswordModal } from './PasswordModal';
import { VerifyModal } from './VerifyModal';

type ModalState =
  | { kind: 'none' }
  | { kind: 'set-password'; error: string | null }
  | { kind: 'verify-disable'; error: string | null };

interface PasswordLockSectionProps {
  lock: SettingsLock;
  onSave: (updated: SettingsLock) => Promise<void>;
}

export function PasswordLockSection({ lock, onSave }: PasswordLockSectionProps) {
  const [modal, setModal] = useState<ModalState>({ kind: 'none' });
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  async function handleSetPassword(current: string | null, newPassword: string) {
    // If a password is already set, verify the current one first.
    if (lock.enabled && lock.passwordHash && lock.salt) {
      if (!current) {
        setModal({ kind: 'set-password', error: 'Current password is required.' });
        return;
      }
      const ok = await verifySecret(current, lock.passwordHash, lock.salt);
      if (!ok) {
        setModal({ kind: 'set-password', error: 'Incorrect current password.' });
        return;
      }
    }

    const { hash, salt } = await hashSecret(newPassword);
    await onSave({ enabled: true, passwordHash: hash, salt });
    setModal({ kind: 'none' });
    setStatusMsg('Password saved.');
    setTimeout(() => setStatusMsg(null), 3000);
  }

  async function handleVerifyDisable(entered: string) {
    if (!lock.passwordHash || !lock.salt) {
      setModal({ kind: 'none' });
      return;
    }
    const ok = await verifySecret(entered, lock.passwordHash, lock.salt);
    if (!ok) {
      setModal({ kind: 'verify-disable', error: 'Incorrect password.' });
      return;
    }
    await onSave({ enabled: false, passwordHash: null, salt: null });
    setModal({ kind: 'none' });
    setStatusMsg('Password lock disabled.');
    setTimeout(() => setStatusMsg(null), 3000);
  }

  return (
    <>
      <SectionCard
        label="Password lock"
        description="Require a password to make any strictness-reducing settings change."
        id="section-password-lock"
      >
        <div className="flex flex-col gap-4">
          {/* Status row */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-text">
                {lock.enabled ? 'Password lock is active.' : 'No password set.'}
              </p>
              <p className="mt-0.5 text-[11px] text-muted">
                {lock.enabled
                  ? 'Enter your password to change protected settings.'
                  : 'Set a password to gate settings changes.'}
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setModal({ kind: 'set-password', error: null })}
                className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                {lock.enabled ? 'change' : 'set password'}
              </button>

              {lock.enabled && (
                <button
                  type="button"
                  onClick={() => setModal({ kind: 'verify-disable', error: null })}
                  className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                  disable
                </button>
              )}
            </div>
          </div>

          {/* Inline status message */}
          {statusMsg && (
            <p role="status" aria-live="polite" className="font-mono text-[11px] text-text">
              {statusMsg}
            </p>
          )}
        </div>
      </SectionCard>

      {/* Set / change modal */}
      {modal.kind === 'set-password' && (
        <PasswordModal
          title={lock.enabled ? 'Change password' : 'Set password'}
          requireCurrent={lock.enabled}
          onConfirm={handleSetPassword}
          onCancel={() => setModal({ kind: 'none' })}
          externalError={modal.error}
        />
      )}

      {/* Verify to disable modal */}
      {modal.kind === 'verify-disable' && (
        <VerifyModal
          title="Disable password lock"
          inputLabel="Current password"
          placeholder="Enter current password"
          onConfirm={handleVerifyDisable}
          onCancel={() => setModal({ kind: 'none' })}
          externalError={modal.error}
        />
      )}
    </>
  );
}
