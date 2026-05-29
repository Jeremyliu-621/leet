/**
 * PasswordModal — collects current (if set) and new password with confirmation.
 * Used for both "set / change password" and "set / change partner code" flows.
 *
 * The parent is responsible for calling hashSecret and writing to storage;
 * this component only handles the UI and validation.
 */

import { useState, useId, useRef, useEffect } from 'react';
import { validatePassword, passwordsMatch } from '../options-helpers';

interface PasswordModalProps {
  /** Title shown at top of modal. */
  title: string;
  /** Label for the "current password" field. Omit when no password is set yet. */
  currentLabel?: string;
  /** Label for the "new password" field. */
  newLabel?: string;
  /** Whether the user needs to enter a current password to proceed. */
  requireCurrent: boolean;
  /** Called when the user confirms with valid input. */
  onConfirm: (current: string | null, newPassword: string) => Promise<void>;
  /** Called when the user cancels. */
  onCancel: () => void;
  /** Optional external error (e.g. wrong current password from the parent). */
  externalError?: string | null;
}

export function PasswordModal({
  title,
  currentLabel = 'Current password',
  newLabel = 'New password',
  requireCurrent,
  onConfirm,
  onCancel,
  externalError,
}: PasswordModalProps) {
  const uid = useId();
  const currentId = `${uid}-current`;
  const newId = `${uid}-new`;
  const confirmId = `${uid}-confirm`;
  const errorId = `${uid}-error`;

  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [localError, setLocalError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Capture return-focus target and restore it on unmount.
  useEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    firstInputRef.current?.focus();
    return () => { returnFocusRef.current?.focus(); };
  }, []);

  // Escape to close + Tab key trap.
  useEffect(() => {
    const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { onCancel(); return; }
      if (e.key !== 'Tab' || !dialogRef.current) return;
      const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
      if (focusable.length === 0) return;
      const first = focusable[0]!;
      const last = focusable[focusable.length - 1]!;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);

  const displayError = localError ?? externalError ?? null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLocalError(null);

    const newErr = validatePassword(next);
    if (newErr) {
      setLocalError(newErr);
      return;
    }
    if (!passwordsMatch(next, confirm)) {
      setLocalError('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    try {
      await onConfirm(requireCurrent ? current : null, next);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/80 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onCancel();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${uid}-title`}
        tabIndex={-1}
        className="w-full max-w-sm rounded-card border border-border bg-surface shadow-2xl focus:outline-none"
      >
        {/* Header */}
        <div className="border-b border-border px-5 py-4">
          <h3
            id={`${uid}-title`}
            className="font-mono text-[10px] uppercase tracking-widest text-faint"
          >
            {title}
          </h3>
        </div>

        <form onSubmit={(e) => void handleSubmit(e)} noValidate>
          <div className="space-y-4 px-5 py-5">
            {/* Current password (only when required) */}
            {requireCurrent && (
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor={currentId}
                  className="font-mono text-[10px] uppercase tracking-widest text-faint"
                >
                  {currentLabel}
                </label>
                <input
                  ref={firstInputRef}
                  id={currentId}
                  type="password"
                  autoComplete="current-password"
                  value={current}
                  onChange={(e) => setCurrent(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-sm border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40"
                  placeholder="Enter current password"
                />
              </div>
            )}

            {/* New password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={newId}
                className="font-mono text-[10px] uppercase tracking-widest text-faint"
              >
                {newLabel}
              </label>
              <input
                ref={requireCurrent ? undefined : firstInputRef}
                id={newId}
                type="password"
                autoComplete="new-password"
                value={next}
                onChange={(e) => setNext(e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-sm border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40"
                placeholder="Minimum 4 characters"
              />
            </div>

            {/* Confirm new password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={confirmId}
                className="font-mono text-[10px] uppercase tracking-widest text-faint"
              >
                Confirm password
              </label>
              <input
                id={confirmId}
                type="password"
                autoComplete="new-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                disabled={isSubmitting}
                className="w-full rounded-sm border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40"
                placeholder="Re-enter password"
              />
            </div>

            {/* Error */}
            {displayError && (
              <p id={errorId} role="alert" className="font-mono text-[11px] text-text">
                {displayError}
              </p>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-2 border-t border-border px-5 py-4">
            <button
              type="button"
              onClick={onCancel}
              disabled={isSubmitting}
              className="rounded-sm border border-border px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40"
            >
              cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="rounded-sm bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'saving…' : 'save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
