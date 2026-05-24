import type { Problem } from '../../../lib/problems/types';
import type { Difficulty } from '../../../lib/types';
import { ProblemDescription } from './ProblemDescription';
import { HintsSection } from './HintsSection';

interface ProblemPanelProps {
  problem: Problem;
}

/** Maps difficulty to Tailwind classes for the pill label. */
function difficultyClasses(difficulty: Difficulty): string {
  // Pure grayscale — only contrast differentiates difficulty.
  // easy → faint, medium → muted, hard → text (all uppercase mono).
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
export function ProblemPanel({ problem }: ProblemPanelProps) {
  const { title, difficulty, tags, description, examples, constraints, hints } = problem;

  return (
    <section
      className="flex h-full flex-col overflow-y-auto"
      aria-label="Problem statement"
      tabIndex={-1}
    >
      <div className="px-6 pb-8 pt-6">
        {/* Title row */}
        <div className="mb-4 flex flex-wrap items-baseline gap-3">
          <h1 className="text-base font-semibold leading-snug text-text">{title}</h1>
          {/* Difficulty pill */}
          <span
            className={[
              'inline-block rounded-sm border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest',
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
                className="inline-block rounded-sm border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Description — markdown (GFM); plain text still renders cleanly. */}
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
                  className="rounded-card border border-border bg-surface-2 px-4 py-3"
                  aria-label={`Example ${i + 1}`}
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                        Input
                      </span>
                      <code className="font-mono text-xs text-text">{example.input}</code>
                    </div>
                    <div className="flex flex-wrap gap-x-2 gap-y-1">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-faint">
                        Output
                      </span>
                      <code className="font-mono text-xs text-text">{example.output}</code>
                    </div>
                    {example.explanation && (
                      <p className="pt-1 text-xs leading-relaxed text-muted">
                        {example.explanation}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Hints — progressively revealed by user click */}
        {hints && hints.length > 0 && <HintsSection hints={hints} />}

        {/* Constraints */}
        {constraints.length > 0 && (
          <div>
            <h2 className="mb-3 font-mono text-[10px] uppercase tracking-widest text-faint">
              Constraints
            </h2>
            <ul className="space-y-1.5" aria-label="Problem constraints">
              {constraints.map((constraint, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
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
