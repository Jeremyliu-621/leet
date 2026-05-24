import { useState } from 'react';
import { ProblemDescription } from './ProblemDescription';

interface HintsSectionProps {
  hints: readonly string[];
}

/**
 * Progressive hints. Each hint is revealed only when the user explicitly asks
 * for it — the friction is the point. Hints support markdown so authors can
 * format code or emphasis.
 *
 * Future polish: each hint reveal could subtract from the timer or damage the
 * streak; the UI is wired so that's a single callback away.
 */
export function HintsSection({ hints }: HintsSectionProps) {
  const [shown, setShown] = useState(0);
  if (hints.length === 0) {
    return null;
  }
  const next = shown + 1;
  const remaining = hints.length - shown;

  return (
    <section className="mb-6" aria-label="Hints">
      <h2 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-faint">Hints</h2>

      {shown > 0 && (
        <div className="space-y-3" role="region" aria-live="polite">
          {hints.slice(0, shown).map((hint, i) => (
            <div
              key={i}
              className="rounded-card border border-border bg-surface-2 px-4 py-3"
              aria-label={`Hint ${i + 1}`}
            >
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-widest text-faint">
                Hint {i + 1}
              </div>
              <ProblemDescription markdown={hint} />
            </div>
          ))}
        </div>
      )}

      {remaining > 0 && (
        <button
          type="button"
          onClick={() => setShown(next)}
          className="mt-3 w-full rounded-card border border-border bg-bg px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:bg-surface hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        >
          {shown === 0 ? `Reveal hint 1 of ${hints.length}` : `Reveal next hint (${next} of ${hints.length})`}
        </button>
      )}
    </section>
  );
}
