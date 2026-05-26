import { useState, useCallback } from 'react';
import type { Problem } from '../../../lib/problems/types';
import type { Difficulty } from '../../../lib/types';
import { ProblemDescription } from './ProblemDescription';
import { HintsSection } from './HintsSection';

/** Inline copy button for example inputs and outputs. */
function InlineCopy({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  }, [value]);
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy to clipboard"
      className="ml-1 shrink-0 font-mono text-faint transition-colors hover:text-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm"
      style={{ fontSize: '9px', letterSpacing: '0.05em' }}
    >
      {copied ? '✓' : 'copy'}
    </button>
  );
}

interface ProblemPanelProps {
  problem: Problem;
  /** Called when the user reveals a hint, with the 0-based hint index. */
  onHintRevealed?: (index: number) => void;
  /** Cost label rendered on the reveal button (e.g. "1 min"). */
  hintCostLabel?: string;
}

/** Maps difficulty to Tailwind classes for the pill label. */
function difficultyClasses(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return 'text-faint border-faint';
    case 'medium':
      return 'text-muted border-muted';
    case 'hard':
      return 'text-text border-border-strong';
  }
}

/**
 * Left panel — renders the full problem statement: title, difficulty, tags,
 * the markdown description, worked examples, optional hints, and constraints.
 */
export function ProblemPanel({ problem, onHintRevealed, hintCostLabel }: ProblemPanelProps) {
  const { title, difficulty, tags, description, examples, constraints, hints } = problem;

  return (
    <section
      className="flex h-full flex-col overflow-y-auto"
      aria-label="Problem statement"
      tabIndex={-1}
    >
      <div className="px-6 pb-8 pt-6">
        {/* Title row */}
        <div className="mb-3 flex flex-wrap items-center gap-3">
          <h1 className="text-base font-semibold leading-snug text-text">{title}</h1>
          {/* Difficulty pill */}
          <span
            className={[
              'inline-block rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest',
              difficultyClasses(difficulty),
            ].join(' ')}
            aria-label={`Difficulty: ${difficulty}`}
          >
            {difficulty}
          </span>
        </div>

        {/* Tag pills */}
        {tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5" role="list" aria-label="Problem tags">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="inline-block rounded-sm border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <ProblemDescription markdown={description} />
        </div>

        {/* Examples */}
        {examples.length > 0 && (
          <div className="mb-6">
            <h2 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-faint">
              Examples
            </h2>
            <div className="space-y-3">
              {examples.map((example, i) => (
                <div
                  key={i}
                  className="rounded-card border border-border bg-surface px-4 py-3"
                  aria-label={`Example ${i + 1}`}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-faint w-14 shrink-0">
                        Input
                      </span>
                      <code className="font-mono text-xs text-text break-all">{example.input}</code>
                      <InlineCopy value={example.input} />
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-faint w-14 shrink-0">
                        Output
                      </span>
                      <code className="font-mono text-xs text-text break-all">
                        {example.output}
                      </code>
                      <InlineCopy value={example.output} />
                    </div>
                    {example.explanation && (
                      <div className="border-t border-border pt-2 mt-1">
                        <p className="text-xs leading-relaxed text-muted">{example.explanation}</p>
                      </div>
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
                  <span className="font-mono text-xs leading-relaxed text-muted">{constraint}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
