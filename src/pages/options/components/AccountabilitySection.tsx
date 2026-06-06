/**
 * AccountabilitySection — accountability-partner email (display only) and
 * partner code (hashed). Same set/change/disable flow as PasswordLockSection.
 */

import { useState, useId } from 'react';
import type { AccountabilityPartner } from '../../../lib/types';
import { hashSecret, verifySecret } from '../../../lib/crypto';
import { SectionCard } from './SectionCard';
import { PasswordModal } from './PasswordModal';
import { VerifyModal } from './VerifyModal';

type ModalState =
  | { kind: 'none' }
  | { kind: 'set-code'; error: string | null }
  | { kind: 'verify-disable'; error: string | null };

interface AccountabilitySectionProps {
  partner: AccountabilityPartner;
  onSave: (updated: AccountabilityPartner) => Promise<void>;
}

export function AccountabilitySection({ partner, onSave }: AccountabilitySectionProps) {
  const uid = useId();
  const emailId = `${uid}-email`;
  const [modal, setModal] = useState<ModalState>({ kind: 'none' });
  const [email, setEmail] = useState(partner.email ?? '');
  const [statusMsg, setStatusMsg] = useState<string | null>(null);

  async function handleSetCode(current: string | null, newCode: string) {
    if (partner.enabled && partner.codeHash && partner.salt) {
      if (!current) {
        setModal({ kind: 'set-code', error: 'Current code is required.' });
        return;
      }
      const ok = await verifySecret(current, partner.codeHash, partner.salt);
      if (!ok) {
        setModal({ kind: 'set-code', error: 'Incorrect current code.' });
        return;
      }
    }

    const { hash, salt } = await hashSecret(newCode);
    await onSave({
      enabled: true,
      email: email.trim() || null,
      codeHash: hash,
      salt,
    });
    setModal({ kind: 'none' });
    setStatusMsg('Partner code saved.');
    setTimeout(() => setStatusMsg(null), 3000);
  }

  async function handleVerifyDisable(entered: string) {
    if (!partner.codeHash || !partner.salt) {
      setModal({ kind: 'none' });
      return;
    }
    const ok = await verifySecret(entered, partner.codeHash, partner.salt);
    if (!ok) {
      setModal({ kind: 'verify-disable', error: 'Incorrect code.' });
      return;
    }
    await onSave({ enabled: false, email: null, codeHash: null, salt: null });
    setModal({ kind: 'none' });
    setStatusMsg('Partner code disabled.');
    setTimeout(() => setStatusMsg(null), 3000);
  }

  return (
    <>
      <SectionCard
        label="Accountability partner"
        description="Share a code with a trusted person. They must enter it before commitment-reducing settings can be changed. Email is stored for display only — no email is sent in this version."
        id="section-accountability"
      >
        <div className="flex flex-col gap-4">
          {/* Email field — display only */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor={emailId}
              className="font-mono text-[10px] uppercase tracking-widest text-faint"
            >
              Partner email (display only)
            </label>
            <input
              id={emailId}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => {
                // Persist email change without touching the code.
                if (email.trim() !== (partner.email ?? '')) {
                  void onSave({ ...partner, email: email.trim() || null });
                }
              }}
              placeholder="partner@example.com"
              className="w-full max-w-xs rounded-sm border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
            />
            <p className="text-[11px] text-muted">
              Used as a reminder only. No emails are sent by LeetMeow.
            </p>
          </div>

          {/* Code status */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs text-text">
                {partner.enabled ? 'Partner code is set.' : 'No partner code set.'}
              </p>
              <p className="mt-0.5 text-[11px] text-muted">
                {partner.enabled
                  ? 'Your partner must enter the code to unlock protected changes.'
                  : 'Set a code to require partner approval for commitment-reducing changes.'}
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => setModal({ kind: 'set-code', error: null })}
                className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              >
                {partner.enabled ? 'change code' : 'set code'}
              </button>

              {partner.enabled && (
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

          {statusMsg && (
            <p role="status" aria-live="polite" className="font-mono text-[11px] text-text">
              {statusMsg}
            </p>
          )}
        </div>
      </SectionCard>

      {modal.kind === 'set-code' && (
        <PasswordModal
          title={partner.enabled ? 'Change partner code' : 'Set partner code'}
          currentLabel="Current partner code"
          newLabel="New partner code"
          requireCurrent={partner.enabled}
          onConfirm={handleSetCode}
          onCancel={() => setModal({ kind: 'none' })}
          externalError={modal.error}
        />
      )}

      {modal.kind === 'verify-disable' && (
        <VerifyModal
          title="Disable partner code"
          inputLabel="Current partner code"
          placeholder="Enter partner code"
          onConfirm={handleVerifyDisable}
          onCancel={() => setModal({ kind: 'none' })}
          externalError={modal.error}
        />
      )}
    </>
  );
}
