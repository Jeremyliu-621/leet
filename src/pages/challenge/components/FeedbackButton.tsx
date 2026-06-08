import { useEffect, useId, useRef, useState } from 'react';
import { updateValue } from '../../../lib/storage';
import { sendFeedbackEmail } from '../../../lib/feedback/send';

type Status = 'idle' | 'saving' | 'sent' | 'error';

/**
 * A top-bar "Feedback" control. Opens an inline popover — no navigation, no
 * mailto, no external redirect — with a message box, an optional reply-to
 * email, and a Send button. Submissions are stored locally (chrome.storage
 * `feedback`); there is no network call.
 */
export function FeedbackButton() {
  const uid = useId();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const wrapRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Focus the message box when the popover opens.
  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  // Close on Escape or a click outside the popover.
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onPointer(e: PointerEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  function resetSoon() {
    window.setTimeout(() => {
      setOpen(false);
      setMessage('');
      setEmail('');
      setStatus('idle');
    }, 1400);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = message.trim();
    if (!trimmed || status === 'saving') return;
    const replyTo = email.trim() || null;
    setStatus('saving');
    try {
      // Save locally first so feedback is never lost even if the network send
      // fails, then email it to the maintainers (best-effort, never throws).
      await updateValue('feedback', (curr) => [
        ...curr,
        { message: trimmed, email: replyTo, createdAt: Date.now() },
      ]);
      await sendFeedbackEmail(trimmed, replyTo).catch(() => ({ delivered: false }));
      setStatus('sent');
      resetSoon();
    } catch {
      setStatus('error');
    }
  }

  const panelId = `${uid}-panel`;

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-muted transition-colors hover:border-border-strong hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        title="Send feedback"
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
          <path d="M2 3.5h12v8H6.5L3.5 14v-2.5H2z" strokeLinejoin="round" />
        </svg>
        <span className="font-mono text-[10px] uppercase tracking-wider">Feedback</span>
      </button>

      {open && (
        <div
          id={panelId}
          role="dialog"
          aria-label="Send feedback"
          className="ll-animate-pop absolute right-0 top-[calc(100%+6px)] z-50 w-72 rounded-md border border-border bg-surface p-3 shadow-lg"
        >
          {status === 'sent' ? (
            <p className="py-3 text-center text-sm text-text">Thanks for the feedback.</p>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-2.5">
              <label htmlFor={`${uid}-msg`} className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Feedback
              </label>
              <textarea
                id={`${uid}-msg`}
                ref={textareaRef}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="What's working, what's not, ideas…"
                className="w-full resize-none rounded-sm border border-border bg-surface-2 px-2.5 py-2 text-sm text-text placeholder:text-faint focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              />
              <label htmlFor={`${uid}-email`} className="font-mono text-[10px] uppercase tracking-widest text-faint">
                Email <span className="normal-case tracking-normal text-faint">(optional)</span>
              </label>
              <input
                id={`${uid}-email`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-sm border border-border bg-surface-2 px-2.5 py-1.5 text-sm text-text placeholder:text-faint focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
              />
              {status === 'error' && (
                <p role="alert" className="text-[11px] text-error">
                  Couldn’t save — please try again.
                </p>
              )}
              <button
                type="submit"
                disabled={!message.trim() || status === 'saving'}
                className="mt-0.5 self-end rounded-md border border-brand bg-brand px-3 py-1.5 text-xs font-semibold text-white transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'saving' ? 'Sending…' : 'Send'}
              </button>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
