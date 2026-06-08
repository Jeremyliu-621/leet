import { useState, useRef, useEffect, useCallback, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import type { Problem } from '../../../lib/problems/types';
import type { SupportedLanguage } from '../../../lib/types';
import { getValue } from '../../../lib/storage';
import { fetchHints, AiError, DEFAULT_GEMINI_MODEL, normalizeModel } from '../../../lib/ai';
import type { AiHint, AiHintResponse, HintMode } from '../../../lib/ai';

interface HintBotProps {
  problem: Problem;
  language: SupportedLanguage;
  /** Reads the live editor contents. */
  getCode: () => string;
  /** Pushes hints into the editor as inline decorations. */
  onApplyHints: (hints: AiHint[]) => void;
  /** Clears all inline decorations. */
  onClearHints: () => void;
  /** Scrolls to + flashes a 1-based line in the editor. */
  onRevealLine: (line: number) => void;
}

type Status =
  | { kind: 'idle' }
  | { kind: 'loading'; mode: HintMode }
  | { kind: 'ready'; mode: HintMode; response: AiHintResponse }
  | { kind: 'error'; message: string };

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8 1.5l1.2 3.3L12.5 6 9.2 7.2 8 10.5 6.8 7.2 3.5 6l3.3-1.2L8 1.5Z" />
      <path d="M12.5 9.5l.6 1.6 1.6.6-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.6-1.6Z" opacity="0.7" />
    </svg>
  );
}

export function HintBot({
  problem,
  language,
  getCode,
  onApplyHints,
  onClearHints,
  onRevealLine,
}: HintBotProps) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [model, setModel] = useState(DEFAULT_GEMINI_MODEL);
  const abortRef = useRef<AbortController | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Fixed-position coordinates for the portaled panel, recomputed from the
  // trigger's viewport rect. null until the first measurement after opening.
  const [coords, setCoords] = useState<
    { left: number; width: number; maxHeight: number } & (
      | { top: number; bottom?: undefined }
      | { bottom: number; top?: undefined }
    )
  >();

  // (Re)load AI settings whenever the panel opens, so a key the user just added
  // in Settings is picked up without a page reload.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    void (async () => {
      try {
        const s = await getValue('aiSettings');
        if (cancelled) return;
        setApiKey(s.geminiApiKey);
        setEnabled(s.enabled);
        // Upgrade any retired stored model (e.g. gemini-2.0-flash) to a valid
        // one so the request doesn't 404 on a model Google has shut down.
        setModel(normalizeModel(s.model));
      } catch {
        /* storage unavailable */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [open]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        // Return focus to the trigger so keyboard users aren't dropped to <body>.
        triggerRef.current?.focus();
      }
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Move focus into the panel when it opens, so keyboard / screen-reader users
  // land on the dialog rather than staying on the trigger behind it.
  useEffect(() => {
    if (!open) return;
    const id = requestAnimationFrame(() => panelRef.current?.focus());
    return () => cancelAnimationFrame(id);
  }, [open]);

  // The panel renders in a portal on <body> so it escapes the editor card's
  // `overflow-hidden` clipping and sits above everything. Because it's no longer
  // a positioned child of the trigger, we measure the trigger's viewport rect
  // and place the panel with `position: fixed`, re-measuring on scroll/resize so
  // it tracks the button. Right-aligned to the trigger, opening downward.
  useLayoutEffect(() => {
    if (!open) {
      setCoords(undefined);
      return;
    }
    function place() {
      const trigger = triggerRef.current;
      if (!trigger) return;
      const rect = trigger.getBoundingClientRect();
      const margin = 8;
      const width = Math.min(340, window.innerWidth - margin * 2);
      // Right edge of the panel aligns with the right edge of the trigger,
      // clamped so it never spills off either side of the viewport.
      const left = Math.min(Math.max(margin, rect.right - width), window.innerWidth - width - margin);
      const spaceBelow = window.innerHeight - rect.bottom - margin;
      const spaceAbove = rect.top - margin;
      // Open downward by default; flip up only when there's genuinely more room
      // above (a low trigger / short viewport). Either way the panel is capped to
      // the space on its chosen side so its own scroll handles the overflow and
      // it is never clipped by the viewport edge.
      if (spaceBelow >= 240 || spaceBelow >= spaceAbove) {
        setCoords({ left, width, top: rect.bottom + margin, maxHeight: spaceBelow });
      } else {
        setCoords({ left, width, bottom: window.innerHeight - rect.top + margin, maxHeight: spaceAbove });
      }
    }
    place();
    window.addEventListener('resize', place);
    // Capture phase so scrolling inside any nested container also repositions.
    window.addEventListener('scroll', place, true);
    return () => {
      window.removeEventListener('resize', place);
      window.removeEventListener('scroll', place, true);
    };
  }, [open]);

  useEffect(() => () => abortRef.current?.abort(), []);

  const settingsUrl = (() => {
    try {
      return chrome.runtime.getURL('src/pages/options/index.html') + '#ai';
    } catch {
      return undefined;
    }
  })();

  // Open Settings in a NEW tab. The challenge page is a gate with a
  // beforeunload guard, so navigating the current tab via an <a href> gets
  // cancelled and the panel just disappears. chrome.tabs.create keeps the
  // challenge open and deep-links to the AI section.
  const openSettingsTab = useCallback(() => {
    if (!settingsUrl) return;
    setOpen(false);
    try {
      void chrome.tabs.create({ url: settingsUrl });
    } catch {
      window.open(settingsUrl, '_blank', 'noopener');
    }
  }, [settingsUrl]);

  const run = useCallback(
    async (mode: HintMode) => {
      if (!apiKey) return;
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;
      setStatus({ kind: 'loading', mode });
      try {
        const response = await fetchHints({
          apiKey,
          model,
          problem,
          code: getCode(),
          language,
          mode,
          signal: controller.signal,
        });
        if (controller.signal.aborted) return;
        setStatus({ kind: 'ready', mode, response });
        onApplyHints(response.hints);
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') return;
        const message =
          err instanceof AiError ? err.message : 'Something went wrong fetching hints.';
        setStatus({ kind: 'error', message });
      }
    },
    [apiKey, model, problem, language, getCode, onApplyHints],
  );

  const handleClear = useCallback(() => {
    onClearHints();
    setStatus({ kind: 'idle' });
  }, [onClearHints]);

  const hasKey = !!apiKey && enabled;

  // Number of inline annotations currently in the editor — surfaced as a badge
  // so the user knows hints are active even with the panel closed.
  const activeHintCount =
    status.kind === 'ready' ? status.response.hints.filter((h) => h.line !== null).length : 0;

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={activeHintCount > 0 ? `AI hint assistant — ${activeHintCount} active` : 'AI hint assistant'}
        title="AI hints (Gemini)"
        className={[
          'relative inline-flex items-center gap-1 rounded-md border px-2 py-1 font-sans text-[11px] font-medium transition-colors focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
          open
            ? 'border-brand bg-surface-2 text-brand'
            : 'border-border bg-surface-2 text-brand hover:border-brand',
        ].join(' ')}
      >
        <SparkleIcon />
        <span className="hidden sm:inline">AI</span>
        {activeHintCount > 0 && (
          <span
            className="absolute -right-1.5 -top-1.5 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-brand px-1 font-mono text-[9px] font-semibold leading-none text-on-accent"
            aria-hidden="true"
          >
            {activeHintCount}
          </span>
        )}
      </button>

      {open && coords && createPortal(
        <div
          ref={panelRef}
          role="dialog"
          aria-label="AI hint assistant"
          tabIndex={-1}
          style={{
            position: 'fixed',
            top: coords.top,
            bottom: coords.bottom,
            left: coords.left,
            width: coords.width,
            maxHeight: coords.maxHeight,
            // Above modals and every editor surface — the panel must never be
            // clipped or covered. Just under the 32-bit max so a deliberate
            // overlay could still go higher if ever needed.
            zIndex: 2147483646,
          }}
          className="ll-animate-pop flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl focus:outline-none"
        >
          {/* Header */}
          <div className="flex shrink-0 items-center justify-between border-b border-border px-3 py-2">
            <span className="inline-flex items-center gap-1.5 font-sans text-[12px] font-semibold text-text">
              <span className="text-brand">
                <SparkleIcon />
              </span>
              AI Hints
            </span>
            <span className="font-mono text-[9px] uppercase tracking-wider text-faint">Gemini</span>
          </div>

          {!hasKey ? (
            <div className="min-h-0 space-y-2.5 overflow-y-auto scrollbar-thin px-3 py-3">
              <p className="text-[12px] leading-relaxed text-muted">
                Connect your own Gemini API key to get spoiler-free nudges and an AI review of your
                code, annotated right in the editor.
              </p>
              {settingsUrl && (
                <button
                  type="button"
                  onClick={openSettingsTab}
                  className="inline-flex items-center gap-1.5 rounded-md bg-brand px-3 py-1.5 font-sans text-[11px] font-semibold text-on-accent transition-opacity hover:opacity-90 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                  {apiKey && !enabled ? 'Enable in Settings' : 'Add your key in Settings'}
                </button>
              )}
              <p className="text-[10px] leading-relaxed text-faint">
                Your key is stored only on this device (never synced, never sent anywhere but
                Google). Get a free key at aistudio.google.com.
              </p>
            </div>
          ) : (
            <div className="min-h-0 overflow-y-auto scrollbar-thin px-3 py-3">
              {/* Action buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => void run('nudge')}
                  disabled={status.kind === 'loading'}
                  className="flex-1 rounded-md border border-border bg-surface-2 px-3 py-2 text-left transition-colors hover:border-brand disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                  <span className="block font-sans text-[12px] font-semibold text-text">Nudge me</span>
                  <span className="block font-sans text-[10px] text-faint">no spoilers</span>
                </button>
                <button
                  type="button"
                  onClick={() => void run('review')}
                  disabled={status.kind === 'loading'}
                  className="flex-1 rounded-md border border-border bg-surface-2 px-3 py-2 text-left transition-colors hover:border-brand disabled:cursor-not-allowed disabled:opacity-50 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                >
                  <span className="block font-sans text-[12px] font-semibold text-text">Review my code</span>
                  <span className="block font-sans text-[10px] text-faint">find bugs</span>
                </button>
              </div>

              {/* Result region */}
              <div className="mt-3">
                {status.kind === 'loading' && (
                  <div className="flex items-center gap-2 py-3 text-[12px] text-muted" role="status">
                    <svg className="h-4 w-4 motion-safe:animate-spin text-brand" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.25" />
                      <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {status.mode === 'nudge' ? 'Thinking of a nudge…' : 'Reviewing your code…'}
                  </div>
                )}

                {status.kind === 'error' && (
                  <div className="rounded-md border border-error bg-error-bg px-3 py-2 text-[12px] text-error" role="alert">
                    {status.message}
                  </div>
                )}

                {status.kind === 'ready' && (
                  <div className="space-y-2">
                    {status.response.summary && (
                      <p className="rounded-md border border-border bg-surface-2 px-3 py-2 text-[12px] leading-relaxed text-text">
                        {status.response.summary}
                      </p>
                    )}
                    {status.response.hints.length > 0 ? (
                      <ul className="space-y-1.5" role="list">
                        {status.response.hints.map((h, i) => (
                          <li key={i}>
                            <button
                              type="button"
                              onClick={() => h.line !== null && onRevealLine(h.line)}
                              disabled={h.line === null}
                              className="flex w-full items-start rounded-md border border-border bg-surface-2 px-2.5 py-2 text-left transition-colors enabled:hover:border-border-strong disabled:cursor-default focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                            >
                              <span className="min-w-0 flex-1">
                                <span className="flex items-center gap-2">
                                  <span className="truncate font-sans text-[11px] font-semibold text-text">{h.title}</span>
                                  {h.line !== null && (
                                    <span className="shrink-0 rounded bg-surface-2 px-1 font-mono text-[9px] text-faint">L{h.line}</span>
                                  )}
                                </span>
                                <span className="mt-0.5 block font-sans text-[11px] leading-snug text-muted">{h.comment}</span>
                              </span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="px-1 py-1 text-[11px] text-faint">
                        No specific line hints — see the summary above.
                      </p>
                    )}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        onClick={handleClear}
                        className="font-sans text-[10px] text-faint transition-colors hover:text-muted focus:outline-none focus-visible:underline"
                      >
                        clear annotations
                      </button>
                      <span className="font-mono text-[9px] text-faint">
                        {status.mode === 'review' ? 'review' : 'nudge'}
                      </span>
                    </div>
                  </div>
                )}

                {status.kind === 'idle' && (
                  <p className="px-1 pt-2 text-[11px] leading-relaxed text-faint">
                    Hints anchor to your code lines and appear inline. Nudges never spoil the
                    answer.
                  </p>
                )}
              </div>
            </div>
          )}
        </div>,
        document.body,
      )}
    </div>
  );
}
