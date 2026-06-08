import { useState } from 'react';
import type { Difficulty, ProblemList, ProblemTag, UserPreferences } from '../../lib/types';
import {
  DIFFICULTIES,
  PROBLEM_LISTS,
  PROBLEM_LIST_LABEL,
  PROBLEM_TAGS,
} from '../../lib/types';
import { getAllProblems } from '../../lib/problems';
import { capitalise, formatTag } from '../../lib/format';

// Problem counts per dimension, computed once from the static bank — shown next
// to each option so the user knows how many problems a filter would allow.
const _all = getAllProblems();
const DIFF_COUNTS = Object.fromEntries(
  DIFFICULTIES.map((d) => [d, _all.filter((p) => p.difficulty === d).length]),
) as Record<Difficulty, number>;
const TAG_COUNTS = Object.fromEntries(
  PROBLEM_TAGS.map((t) => [t, _all.filter((p) => p.tags.includes(t)).length]),
) as Record<ProblemTag, number>;
const LIST_COUNTS = Object.fromEntries(
  PROBLEM_LISTS.map((l) => [l, _all.filter((p) => p.lists?.includes(l)).length]),
) as Record<ProblemList, number>;
const KIND_COUNTS = {
  dsa: _all.filter((p) => (p.kind ?? 'function') === 'function').length,
  debug: _all.filter((p) => p.kind === 'debug').length,
} as const;

// Type of question. `dsa` is LeetCode-style solve-from-scratch; `debug` is the
// find-and-fix-the-bug pool; `mixed` draws from both.
const CHALLENGE_MODES = [
  { value: 'dsa', label: 'LeetCode', count: KIND_COUNTS.dsa },
  { value: 'debug', label: 'Debugging', count: KIND_COUNTS.debug },
  { value: 'mixed', label: 'Mixed', count: KIND_COUNTS.dsa + KIND_COUNTS.debug },
] as const;

const MODE_LABEL: Record<UserPreferences['challengeMode'], string> = {
  dsa: 'LeetCode',
  debug: 'Debugging',
  mixed: 'Mixed',
};

type FilterKey = 'difficulty' | 'type' | 'genre' | 'bank';

interface ChallengeFiltersProps {
  prefs: Pick<UserPreferences, 'difficulties' | 'challengeMode' | 'tags' | 'lists'>;
  onChange: (patch: Partial<UserPreferences>) => void;
}

/**
 * Quick problem-selection filters for the popup: difficulty, question type,
 * genre (tags), and question bank (lists). Each is a disclosure "dropdown" that
 * expands to a chip grid; changes write straight to user preferences, so they
 * stay in sync with the same controls in Settings.
 */
export function ChallengeFilters({ prefs, onChange }: ChallengeFiltersProps) {
  // Accordion: at most one filter open at a time keeps the popup compact.
  const [open, setOpen] = useState<FilterKey | null>(null);

  function toggleDifficulty(d: Difficulty) {
    const current = prefs.difficulties;
    if (current.includes(d)) {
      if (current.length === 1) return; // keep at least one difficulty
      onChange({ difficulties: current.filter((x) => x !== d) });
    } else {
      onChange({ difficulties: DIFFICULTIES.filter((x) => x === d || current.includes(x)) });
    }
  }
  function toggleTag(t: ProblemTag) {
    const current = prefs.tags;
    onChange({ tags: current.includes(t) ? current.filter((x) => x !== t) : [...current, t] });
  }
  function toggleList(l: ProblemList) {
    const current = prefs.lists;
    onChange({ lists: current.includes(l) ? current.filter((x) => x !== l) : [...current, l] });
  }

  const difficultySummary = DIFFICULTIES.filter((d) => prefs.difficulties.includes(d))
    .map(capitalise)
    .join(', ');
  const genreSummary = prefs.tags.length === 0 ? 'Any' : `${prefs.tags.length} selected`;
  const bankSummary = prefs.lists.length === 0 ? 'Any' : `${prefs.lists.length} selected`;

  return (
    <section
      className="mt-5 overflow-hidden rounded-md border border-border bg-surface"
      aria-label="Problem filters"
    >
      <h2 className="border-b border-border px-3 py-2 font-mono text-[9px] uppercase tracking-widest text-faint">
        Problem filters
      </h2>

      <FilterRow
        label="Difficulty"
        summary={difficultySummary}
        isOpen={open === 'difficulty'}
        onToggle={() => setOpen(open === 'difficulty' ? null : 'difficulty')}
      >
        {DIFFICULTIES.map((d) => {
          const selected = prefs.difficulties.includes(d);
          const isLast = selected && prefs.difficulties.length === 1;
          return (
            <Chip
              key={d}
              selected={selected}
              disabled={isLast}
              onClick={() => toggleDifficulty(d)}
              label={capitalise(d)}
              count={DIFF_COUNTS[d]}
              ariaLabel={`${capitalise(d)} — ${DIFF_COUNTS[d]} problems${isLast ? ' (cannot deselect last)' : ''}`}
            />
          );
        })}
      </FilterRow>

      <FilterRow
        label="Type"
        summary={MODE_LABEL[prefs.challengeMode]}
        isOpen={open === 'type'}
        onToggle={() => setOpen(open === 'type' ? null : 'type')}
      >
        {CHALLENGE_MODES.map((m) => (
          <Chip
            key={m.value}
            selected={prefs.challengeMode === m.value}
            onClick={() => onChange({ challengeMode: m.value })}
            label={m.label}
            count={m.count}
            ariaLabel={`${m.label} — ${m.count} problems`}
            role="radio"
          />
        ))}
      </FilterRow>

      <FilterRow
        label="Genre"
        summary={genreSummary}
        isOpen={open === 'genre'}
        onToggle={() => setOpen(open === 'genre' ? null : 'genre')}
        onClear={prefs.tags.length > 0 ? () => onChange({ tags: [] }) : undefined}
      >
        {PROBLEM_TAGS.map((t) => (
          <Chip
            key={t}
            selected={prefs.tags.includes(t)}
            onClick={() => toggleTag(t)}
            label={formatTag(t)}
            count={TAG_COUNTS[t]}
            ariaLabel={`${formatTag(t)} — ${TAG_COUNTS[t]} problems${prefs.tags.includes(t) ? ' (selected)' : ''}`}
          />
        ))}
      </FilterRow>

      <FilterRow
        label="Bank"
        summary={bankSummary}
        isOpen={open === 'bank'}
        onToggle={() => setOpen(open === 'bank' ? null : 'bank')}
        onClear={prefs.lists.length > 0 ? () => onChange({ lists: [] }) : undefined}
        last
      >
        {PROBLEM_LISTS.map((l) => (
          <Chip
            key={l}
            selected={prefs.lists.includes(l)}
            onClick={() => toggleList(l)}
            label={PROBLEM_LIST_LABEL[l]}
            count={LIST_COUNTS[l]}
            ariaLabel={`${PROBLEM_LIST_LABEL[l]} — ${LIST_COUNTS[l]} problems${prefs.lists.includes(l) ? ' (selected)' : ''}`}
          />
        ))}
      </FilterRow>
    </section>
  );
}

interface FilterRowProps {
  label: string;
  summary: string;
  isOpen: boolean;
  onToggle: () => void;
  /** When provided, a "clear" affordance appears for multi-select filters. */
  onClear?: () => void;
  /** Suppresses the bottom divider on the final row. */
  last?: boolean;
  children: React.ReactNode;
}

function FilterRow({ label, summary, isOpen, onToggle, onClear, last, children }: FilterRowProps) {
  return (
    <div className={last ? '' : 'border-b border-border'}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-2 px-3 py-2 text-left transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest text-faint">{label}</span>
        <span className="flex items-center gap-1.5">
          <span className="font-mono text-[10px] text-muted">{summary}</span>
          <svg
            width="10"
            height="10"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            className={`text-faint transition-transform duration-150 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      {isOpen && (
        <div className="px-3 pb-3 pt-0.5">
          {onClear && (
            <div className="mb-2 flex justify-end">
              <button
                type="button"
                onClick={onClear}
                className="font-mono text-[9px] text-muted underline-offset-2 hover:text-text focus:outline-none focus-visible:underline"
              >
                clear
              </button>
            </div>
          )}
          <div className="flex flex-wrap gap-1.5">{children}</div>
        </div>
      )}
    </div>
  );
}

interface ChipProps {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  label: string;
  count: number;
  ariaLabel: string;
  role?: 'radio' | 'button';
}

function Chip({ selected, disabled, onClick, label, count, ariaLabel, role = 'button' }: ChipProps) {
  return (
    <button
      type="button"
      role={role}
      onClick={onClick}
      disabled={disabled}
      aria-pressed={role === 'button' ? selected : undefined}
      aria-checked={role === 'radio' ? selected : undefined}
      aria-label={ariaLabel}
      className={[
        'rounded-sm border px-2 py-1 font-mono text-[10px] transition-colors',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-accent',
        'disabled:cursor-not-allowed disabled:opacity-50',
        selected
          ? 'border-accent bg-accent text-on-accent'
          : 'border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text',
      ].join(' ')}
    >
      {label}
      <span className="ml-1 opacity-50">{count}</span>
    </button>
  );
}
