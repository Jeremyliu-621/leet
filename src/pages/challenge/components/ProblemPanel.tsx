import type { Problem } from '../../../lib/problems/types';
import { ProblemDescription } from './ProblemDescription';
import { HintsSection } from './HintsSection';

/**
 * Renders a single line of text that may contain inline code spans (backticks).
 * Splits on `` `...` `` patterns and renders code spans with the design-system
 * code style. Avoids running the full remark/rehype pipeline for simple strings.
 */
function InlineText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g);
  if (parts.length === 1) return <>{text}</>;
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <code
            key={i}
            className="rounded-sm bg-surface-2 px-1 py-0.5 font-mono text-[0.85em] text-text"
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

interface ProblemPanelProps {
  problem: Problem;
  /** Called when the user reveals a hint, with the 0-based hint index. */
  onHintRevealed?: (index: number) => void;
  /** Cost label rendered on the reveal button (e.g. "1 min"). */
  hintCostLabel?: string;
}

/**
 * Left panel — renders the full problem statement: title, difficulty, tags,
 * the markdown description, worked examples, optional hints, and constraints.
 */
export function ProblemPanel({ problem, onHintRevealed, hintCostLabel }: ProblemPanelProps) {
  const { title, difficulty, description, examples, constraints, hints } = problem;

  return (
    <section
      className="scrollbar-thin flex h-full flex-col overflow-y-auto"
      aria-label="Problem statement"
      tabIndex={-1}
    >
      <div className="px-6 pb-8 pt-6">
        {/* Header — title + difficulty pill */}
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-base font-semibold leading-snug text-text">{title}</h1>
          <span
            style={{ borderRadius: '16px 10px 18px 12px / 12px 18px 10px 16px' }}
            className="inline-block border-[1.5px] border-text px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-text"
            aria-label={`Difficulty: ${difficulty}`}
          >
            {difficulty}
          </span>
        </div>

        {/* Full-width divider separating the header from the statement */}
        <div className="-mx-6 mt-4 mb-6 h-px bg-border" aria-hidden="true" />

        {/* Description */}
        <div className="mb-6">
          <ProblemDescription markdown={description} />
        </div>

        {/* Examples */}
        {examples.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-4 text-base font-bold text-text">Examples</h2>
            <div className="space-y-5">
              {examples.map((example, i) => (
                <div key={i} aria-label={`Example ${i + 1}`}>
                  <h3 className="mb-1.5 text-sm font-bold text-text">Example {i + 1}:</h3>
                  <div className="space-y-1.5 border-l-2 border-border pl-3.5">
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-text">Input: </span>
                      <code className="font-mono text-sm text-muted break-all">{example.input}</code>
                    </p>
                    <p className="text-sm leading-relaxed">
                      <span className="font-semibold text-text">Output: </span>
                      <code className="font-mono text-sm text-muted break-all">{example.output}</code>
                    </p>
                    {example.explanation && (
                      <p className="text-sm leading-relaxed">
                        <span className="font-semibold text-text">Explanation: </span>
                        <span className="text-muted">
                          <InlineText text={example.explanation} />
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hints — progressively revealed by user click */}
        {hints && hints.length > 0 && (
          <HintsSection hints={hints} onReveal={onHintRevealed} costLabel={hintCostLabel} />
        )}

        {/* Constraints */}
        {constraints.length > 0 && (
          <div>
            <h2 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-faint">
              Constraints
            </h2>
            <ul className="space-y-1.5" aria-label="Problem constraints">
              {constraints.map((constraint, i) => (
                <li key={i} className="flex gap-2.5">
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-border-strong"
                    aria-hidden="true"
                  />
                  <span className="font-mono text-xs leading-relaxed text-muted">
                    <InlineText text={constraint} />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
