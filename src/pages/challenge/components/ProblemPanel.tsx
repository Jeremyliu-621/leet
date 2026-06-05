import { useState, useCallback } from 'react';
import type { Problem } from '../../../lib/problems/types';
import type { Difficulty } from '../../../lib/types';
import { ProblemDescription } from './ProblemDescription';
import { HintsSection } from './HintsSection';

/** Serialises a Problem to plain text suitable for pasting into an AI tool. */
function problemToText(problem: Problem): string {
  const lines: string[] = [];
  lines.push(`# ${problem.title}`);
  lines.push(`Difficulty: ${problem.difficulty} · Tags: ${problem.tags.join(', ')}`);
  lines.push('');
  lines.push(problem.description);
  if (problem.examples.length > 0) {
    lines.push('');
    lines.push('## Examples');
    for (const [i, ex] of problem.examples.entries()) {
      lines.push('');
      lines.push(`**Example ${i + 1}:**`);
      lines.push(`Input: ${ex.input}`);
      lines.push(`Output: ${ex.output}`);
      if (ex.explanation) lines.push(`Explanation: ${ex.explanation}`);
    }
  }
  if (problem.constraints.length > 0) {
    lines.push('');
    lines.push('## Constraints');
    for (const c of problem.constraints) {
      lines.push(`- ${c}`);
    }
  }
  return lines.join('\n');
}

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

/** Header button that copies the full problem as plain text — useful for pasting into AI tools. */
function CopyProblemButton({ problem }: { problem: Problem }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = useCallback(() => {
    void navigator.clipboard.writeText(problemToText(problem)).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [problem]);
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label="Copy problem statement to clipboard"
      title="Copy problem as text (for AI tools)"
      className="ml-auto shrink-0 rounded-sm border border-transparent px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint transition-colors hover:border-border hover:text-muted focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:rounded-sm"
    >
      {copied ? '✓ copied' : 'copy'}
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

/** Maps difficulty to Tailwind classes for the pill label (LeetCode colors). */
function difficultyClasses(difficulty: Difficulty): string {
  switch (difficulty) {
    case 'easy':
      return 'text-success border-success bg-success-bg';
    case 'medium':
      return 'text-warning border-warning bg-warning-bg';
    case 'hard':
      return 'text-error border-error bg-error-bg';
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
              'inline-block rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest',
              difficultyClasses(difficulty),
            ].join(' ')}
            aria-label={`Difficulty: ${difficulty}`}
          >
            {difficulty}
          </span>
          {/* Copy problem text — placed at end of title row */}
          <CopyProblemButton problem={problem} />
        </div>

        {/* Tag pills */}
        {tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-1.5" role="list" aria-label="Problem tags">
            {tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="inline-block rounded-md border border-border bg-surface-2 px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-faint"
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
            <h2 className="mb-4 text-base font-bold text-text">Examples</h2>
            <div className="space-y-5">
              {examples.map((example, i) => (
                <div key={i} aria-label={`Example ${i + 1}`}>
                  <h3 className="mb-1.5 text-[13px] font-bold text-text">Example {i + 1}:</h3>
                  <div className="space-y-1.5 border-l-2 border-border pl-3.5">
                    <p className="text-[13px] leading-relaxed">
                      <span className="font-semibold text-text">Input: </span>
                      <code className="font-mono text-[13px] text-muted break-all">{example.input}</code>
                    </p>
                    <p className="text-[13px] leading-relaxed">
                      <span className="font-semibold text-text">Output: </span>
                      <code className="font-mono text-[13px] text-muted break-all">{example.output}</code>
                    </p>
                    {example.explanation && (
                      <p className="text-[13px] leading-relaxed">
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
