/**
 * ProblemSelectionSection — difficulty multi-toggle + tag multi-toggle.
 */

import type { Difficulty, ProblemList, ProblemTag, UserPreferences } from '../../../lib/types';
import { DIFFICULTIES, PROBLEM_LISTS, PROBLEM_LIST_LABEL, PROBLEM_TAGS } from '../../../lib/types';
import { getAllProblems } from '../../../lib/problems';
import { formatTag, capitalise } from '../options-helpers';
import { SectionCard } from './SectionCard';

const _all = getAllProblems();

const TAG_COUNTS: Readonly<Record<ProblemTag, number>> = Object.fromEntries(
  PROBLEM_TAGS.map((tag) => [tag, _all.filter((p) => p.tags.includes(tag)).length]),
) as Readonly<Record<ProblemTag, number>>;

const DIFF_COUNTS: Readonly<Record<Difficulty, number>> = Object.fromEntries(
  DIFFICULTIES.map((d) => [d, _all.filter((p) => p.difficulty === d).length]),
) as Readonly<Record<Difficulty, number>>;

const LIST_COUNTS: Readonly<Record<ProblemList, number>> = Object.fromEntries(
  PROBLEM_LISTS.map((l) => [l, _all.filter((p) => p.lists?.includes(l)).length]),
) as Readonly<Record<ProblemList, number>>;

interface ProblemSelectionSectionProps {
  prefs: UserPreferences;
  onChange: (patch: Partial<UserPreferences>) => void;
}

export function ProblemSelectionSection({ prefs, onChange }: ProblemSelectionSectionProps) {
  function toggleDifficulty(d: Difficulty) {
    const current = prefs.difficulties;
    if (current.includes(d)) {
      // Don't allow deselecting the last difficulty.
      if (current.length === 1) return;
      onChange({ difficulties: current.filter((x) => x !== d) });
    } else {
      onChange({ difficulties: [...current, d] });
    }
  }

  function toggleList(list: ProblemList) {
    const current = prefs.lists;
    if (current.includes(list)) {
      onChange({ lists: current.filter((l) => l !== list) });
    } else {
      onChange({ lists: [...current, list] });
    }
  }

  function toggleTag(tag: ProblemTag) {
    const current = prefs.tags;
    if (current.includes(tag)) {
      onChange({ tags: current.filter((t) => t !== tag) });
    } else {
      onChange({ tags: [...current, tag] });
    }
  }

  return (
    <SectionCard
      label="Problem selection"
      description="Which difficulties, curated lists, and topic tags are eligible for challenges. Empty lists or tags means no filter."
      id="section-problem-selection"
    >
      <div className="space-y-5">
        {/* Difficulties */}
        <div>
          <p
            className="mb-2.5 font-mono text-[10px] uppercase tracking-widest text-faint"
            id="difficulties-label"
          >
            Difficulties
          </p>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-labelledby="difficulties-label"
          >
            {DIFFICULTIES.map((d) => {
              const selected = prefs.difficulties.includes(d);
              const isLast = selected && prefs.difficulties.length === 1;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => toggleDifficulty(d)}
                  disabled={isLast}
                  aria-pressed={selected}
                  aria-label={`${capitalise(d)} difficulty — ${DIFF_COUNTS[d]} problems${isLast ? ' (cannot deselect last)' : ''}`}
                  className={[
                    'rounded-sm border px-3 py-1.5 font-mono text-xs transition-colors',
                    'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                    'disabled:cursor-not-allowed disabled:opacity-50',
                    selected
                      ? 'border-accent bg-accent text-on-accent'
                      : 'border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text',
                  ].join(' ')}
                >
                  {d}
                  <span className="ml-1.5 opacity-50">{DIFF_COUNTS[d]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lists */}
        <div>
          <div className="mb-2.5 flex items-baseline gap-3">
            <p
              className="font-mono text-[10px] uppercase tracking-widest text-faint"
              id="lists-label"
            >
              Lists
            </p>
            {prefs.lists.length === 0 ? (
              <span className="font-mono text-[9px] text-muted">any list</span>
            ) : (
              <button
                type="button"
                onClick={() => onChange({ lists: [] })}
                className="font-mono text-[9px] text-muted underline-offset-2 hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                aria-label="Clear all list filters"
              >
                clear all
              </button>
            )}
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-labelledby="lists-label"
          >
            {PROBLEM_LISTS.map((list) => {
              const selected = prefs.lists.includes(list);
              const count = LIST_COUNTS[list];
              return (
                <button
                  key={list}
                  type="button"
                  onClick={() => toggleList(list)}
                  aria-pressed={selected}
                  aria-label={`${PROBLEM_LIST_LABEL[list]} — ${count} problems${selected ? ' (selected)' : ''}`}
                  className={[
                    'rounded-sm border px-3 py-1.5 font-mono text-xs transition-colors',
                    'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                    selected
                      ? 'border-accent bg-accent text-on-accent'
                      : 'border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text',
                  ].join(' ')}
                >
                  {PROBLEM_LIST_LABEL[list]}
                  <span className="ml-1.5 opacity-50">{count}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tags */}
        <div>
          <div className="mb-2.5 flex items-baseline gap-3">
            <p
              className="font-mono text-[10px] uppercase tracking-widest text-faint"
              id="tags-label"
            >
              Tags
            </p>
            {prefs.tags.length === 0 ? (
              <span className="font-mono text-[9px] text-muted">any topic</span>
            ) : (
              <button
                type="button"
                onClick={() => onChange({ tags: [] })}
                className="font-mono text-[9px] text-muted underline-offset-2 hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                aria-label="Clear all tag filters"
              >
                clear all
              </button>
            )}
          </div>
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-labelledby="tags-label"
          >
            {PROBLEM_TAGS.map((tag) => {
              const selected = prefs.tags.includes(tag);
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  aria-pressed={selected}
                  aria-label={`${formatTag(tag)} topic — ${TAG_COUNTS[tag]} problems${selected ? ' (selected)' : ''}`}
                  className={[
                    'rounded-sm border px-3 py-1.5 font-mono text-xs transition-colors',
                    'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                    selected
                      ? 'border-accent bg-accent text-on-accent'
                      : 'border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text',
                  ].join(' ')}
                >
                  {formatTag(tag)}
                  <span className="ml-1.5 opacity-50">{TAG_COUNTS[tag]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
