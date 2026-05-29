/**
 * VerifyModal — collects a single password/code to gate a protected action.
 * Used when strictMode or a lock is active and the user attempts a
 * strictness-reducing change.
 */

import { useState, useId, useRef, useEffect } from 'react';

interface VerifyModalProps {
  /** Title for the modal dialog. */
  title: string;
  /** Label for the input field. */
  inputLabel?: string;
  /** Placeholder for the input. */
  placeholder?: string;
  /** Whether the user must enter a partner code (changes copy slightly). */
  isPartnerCode?: boolean;
  /** Called with the entered value when submitted. Parent handles verifySecret. */
  onConfirm: (value: string) => Promise<void>;
  onCancel: () => void;
  /** External error propagated after a failed verify. */
  externalError?: string | null;
}

export function VerifyModal({
  title,
  inputLabel = 'Password',
  placeholder = 'Enter password',
  onConfirm,
  onCancel,
  externalError,
}: VerifyModalProps) {
  const uid = useId();
  const inputId = `${uid}-input`;

  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  // Capture return-focus target and restore it on unmount.
  useEffect(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    inputRef.current?.focus();
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

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (value.trim().length === 0) return;
    setIsSubmitting(true);
    try {
      await onConfirm(value);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      role="presentation"
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
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={inputId}
                className="font-mono text-[10px] uppercase tracking-widest text-faint"
              >
                {inputLabel}
              </label>
              <input
                ref={inputRef}
                id={inputId}
                type="password"
                autoComplete="current-password"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={isSubmitting}
                placeholder={placeholder}
                className="w-full rounded-sm border border-border bg-surface-2 px-3 py-2 font-mono text-xs text-text placeholder-faint focus:border-border-strong focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40"
              />
            </div>

            {externalError && (
              <p role="alert" className="font-mono text-[11px] text-text">
                {externalError}
              </p>
            )}
          </div>

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
              disabled={isSubmitting || value.trim().length === 0}
              className="rounded-sm bg-accent px-3 py-1.5 font-mono text-xs font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'verifying…' : 'confirm'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
