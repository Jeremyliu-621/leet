import { useState } from 'react';
import { ProblemDescription } from './ProblemDescription';

interface HintsSectionProps {
  hints: readonly string[];
  /**
   * Called immediately when the user reveals a hint, with the 0-based index
   * of the newly-revealed hint. The challenge page uses this to charge a
   * timer penalty — `friction is the point`.
   */
  onReveal?: (index: number) => void;
  /** Optional cost shown on the reveal button, e.g. "1 min". */
  costLabel?: string;
}

/**
 * Progressive hints. Each hint is revealed only when the user explicitly asks
 * for it. Hints support markdown so authors can format code or emphasis.
 *
 * The reveal button surfaces the cost (when supplied by the parent) so the
 * user makes an informed choice.
 */
export function HintsSection({ hints, onReveal, costLabel }: HintsSectionProps) {
  const [shown, setShown] = useState(0);
  if (hints.length === 0) {
    return null;
  }
  const next = shown + 1;
  const remaining = hints.length - shown;

  function handleReveal(): void {
    const newIndex = shown;
    setShown(shown + 1);
    onReveal?.(newIndex);
  }

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
          onClick={handleReveal}
          className="mt-3 w-full rounded-card border border-border bg-bg px-3 py-2 font-mono text-[11px] uppercase tracking-wider text-muted transition-colors hover:bg-surface hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        >
          {shown === 0 ? `Reveal hint 1 of ${hints.length}` : `Reveal next hint (${next} of ${hints.length})`}
          {costLabel ? <span className="ml-2 text-faint">· −{costLabel}</span> : null}
        </button>
      )}
    </section>
  );
}
