/**
 * ResetSection — "Reset to defaults" button, gated by password if set.
 * Under strict mode the reset is deferred by the cooldown.
 */

import { useState } from 'react';
import type { SettingsLock } from '../../../lib/types';
import { verifySecret } from '../../../lib/crypto';
import { SectionCard } from './SectionCard';
import { VerifyModal } from './VerifyModal';

interface ResetSectionProps {
  lock: SettingsLock;
  strictMode: boolean;
  onReset: () => Promise<void>;
}

type ModalState = { open: false } | { open: true; error: string | null };

export function ResetSection({ lock, strictMode, onReset }: ResetSectionProps) {
  const [modal, setModal] = useState<ModalState>({ open: false });
  const [isResetting, setIsResetting] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  function handleResetClick() {
    if (lock.enabled) {
      setModal({ open: true, error: null });
    } else {
      void doReset();
    }
  }

  async function doReset() {
    setIsResetting(true);
    try {
      await onReset();
      setStatusMsg(
        strictMode
          ? 'Reset scheduled — will apply after cooldown.'
          : 'Settings reset to defaults.',
      );
      setTimeout(() => setStatusMsg(null), 4000);
    } finally {
      setIsResetting(false);
    }
  }

  async function handleVerify(entered: string) {
    if (!lock.passwordHash || !lock.salt) {
      setModal({ open: false });
      await doReset();
      return;
    }
    const ok = await verifySecret(entered, lock.passwordHash, lock.salt);
    if (!ok) {
      setModal({ open: true, error: 'Incorrect password.' });
      return;
    }
    setModal({ open: false });
    await doReset();
  }

  return (
    <>
      <SectionCard
        label="Reset"
        description="Restore all settings to their factory defaults. Blocked sites and keyword rules are preserved."
        id="section-reset"
      >
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] leading-relaxed text-muted">
              {strictMode
                ? 'In strict mode, the reset will be deferred by the cooldown.'
                : 'This action takes effect immediately.'}
              {lock.enabled && ' Password required.'}
            </p>

            <button
              type="button"
              onClick={handleResetClick}
              disabled={isResetting}
              aria-label="Reset settings to defaults"
              className="shrink-0 rounded-sm border border-border-strong px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isResetting ? 'resetting…' : 'reset to defaults'}
            </button>
          </div>

          {statusMsg && (
            <p role="status" aria-live="polite" className="font-mono text-[11px] text-text">
              {statusMsg}
            </p>
          )}
        </div>
      </SectionCard>

      {modal.open && (
        <VerifyModal
          title="Reset settings"
          inputLabel="Password"
          placeholder="Enter password to confirm reset"
          onConfirm={handleVerify}
          onCancel={() => setModal({ open: false })}
          externalError={modal.error}
        />
      )}
    </>
  );
}
