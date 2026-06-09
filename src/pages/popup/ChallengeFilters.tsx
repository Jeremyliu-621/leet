import { useMemo, useState } from 'react';
import type { Difficulty, ProblemList, ProblemTag, UserPreferences } from '../../lib/types';
import {
  DIFFICULTIES,
  PROBLEM_LISTS,
  PROBLEM_LIST_LABEL,
  PROBLEM_TAGS,
} from '../../lib/types';
import { getAllProblems, filterProblems } from '../../lib/problems';
import type { ProblemKind } from '../../lib/problems';
import { formatTag } from '../../lib/format';

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

// Type of question. `dsa` is LeetCode-style solve-from-scratch; `debug` is the
// find-and-fix-the-bug pool; `mixed` draws from both.
const CHALLENGE_MODES = [
  { value: 'dsa', label: 'LeetCode' },
  { value: 'debug', label: 'Debug' },
  { value: 'mixed', label: 'Mixed' },
] as const;

const DIFF_LABEL: Record<Difficulty, string> = { easy: 'Easy', medium: 'Med', hard: 'Hard' };

/** Maps the challenge-mode preference to the problem kinds it selects. */
function kindsForMode(mode: UserPreferences['challengeMode']): ProblemKind[] | undefined {
  if (mode === 'dsa') return ['function'];
  if (mode === 'debug') return ['debug'];
  return undefined; // mixed → any kind
}

type DisclosureKey = 'genre' | 'bank';

interface ChallengeFiltersProps {
  prefs: Pick<UserPreferences, 'difficulties' | 'challengeMode' | 'tags' | 'lists'>;
  onChange: (patch: Partial<UserPreferences>) => void;
}

/**
 * Quick problem-selection filters for the popup. The two short, high-frequency
 * filters (difficulty, type) are inline segmented controls; the two long ones
 * (genre/tags, bank/lists) are disclosures that expand to a chip grid. A live
 * "N match" count gives instant feedback on the current combination. Changes
 * write straight to user preferences, so they stay in sync with Settings.
 */
export function ChallengeFilters({ prefs, onChange }: ChallengeFiltersProps) {
  // At most one disclosure open keeps the popup compact.
  const [open, setOpen] = useState<DisclosureKey | null>(null);

  const matchCount = useMemo(
    () =>
      filterProblems({
        difficulties: prefs.difficulties,
        tags: prefs.tags,
        lists: prefs.lists,
        kinds: kindsForMode(prefs.challengeMode),
      }).length,
    [prefs.difficulties, prefs.tags, prefs.lists, prefs.challengeMode],
  );

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

  // Disclosure summaries: the first selected option (in canonical order) plus a
  // "+n" overflow, or "Any" when unfiltered.
  const firstTag = PROBLEM_TAGS.find((t) => prefs.tags.includes(t));
  const genreSummary =
    prefs.tags.length === 0
      ? 'Any'
      : `${formatTag(firstTag!)}${prefs.tags.length > 1 ? ` +${prefs.tags.length - 1}` : ''}`;
  const firstList = PROBLEM_LISTS.find((l) => prefs.lists.includes(l));
  const bankSummary =
    prefs.lists.length === 0
      ? 'Any'
      : `${PROBLEM_LIST_LABEL[firstList!]}${prefs.lists.length > 1 ? ` +${prefs.lists.length - 1}` : ''}`;

  return (
    <section
      className="mt-5 overflow-hidden rounded-md border border-border bg-surface"
      aria-label="Problem filters"
    >
      {/* Header with live match count */}
      <div className="flex items-baseline justify-between border-b border-border px-3 py-2">
        <h2 className="font-mono text-[9px] uppercase tracking-widest text-faint">
          Problem filters
        </h2>
        <p
          className="font-mono text-[9px] tabular-nums"
          aria-live="polite"
          aria-label={`${matchCount} problems match the current filters`}
        >
          <span className={matchCount === 0 ? 'text-error' : 'text-text'}>{matchCount}</span>
          <span className="text-faint"> {matchCount === 1 ? 'match' : 'matches'}</span>
        </p>
      </div>

      <div className="space-y-3 px-3 py-3">
        {/* Difficulty — inline segmented multi-toggle */}
        <Segmented label="Difficulty">
          {DIFFICULTIES.map((d) => {
            const selected = prefs.difficulties.includes(d);
            const isLast = selected && prefs.difficulties.length === 1;
            return (
              <SegButton
                key={d}
                selected={selected}
                disabled={isLast}
                onClick={() => toggleDifficulty(d)}
                ariaLabel={`${DIFF_LABEL[d]} — ${DIFF_COUNTS[d]} problems${isLast ? ' (cannot deselect last)' : ''}`}
              >
                {DIFF_LABEL[d]}
              </SegButton>
            );
          })}
        </Segmented>

        {/* Type — inline segmented single-select */}
        <Segmented label="Type">
          {CHALLENGE_MODES.map((m) => (
            <SegButton
              key={m.value}
              selected={prefs.challengeMode === m.value}
              onClick={() => onChange({ challengeMode: m.value })}
              role="radio"
              ariaLabel={m.label}
            >
              {m.label}
            </SegButton>
          ))}
        </Segmented>
      </div>

      {/* Genre + Bank — disclosures with chip grids */}
      <Disclosure
        label="Genre"
        summary={genreSummary}
        active={prefs.tags.length > 0}
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
      </Disclosure>

      <Disclosure
        label="Bank"
        summary={bankSummary}
        active={prefs.lists.length > 0}
        isOpen={open === 'bank'}
        onToggle={() => setOpen(open === 'bank' ? null : 'bank')}
        onClear={prefs.lists.length > 0 ? () => onChange({ lists: [] }) : undefined}
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
      </Disclosure>
    </section>
  );
}

/** A labelled row holding an equal-width segmented button group. */
function Segmented({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-widest text-faint">
        {label}
      </span>
      <div className="grid flex-1 auto-cols-fr grid-flow-col gap-1" role="group">
        {children}
      </div>
    </div>
  );
}

interface SegButtonProps {
  selected: boolean;
  disabled?: boolean;
  onClick: () => void;
  ariaLabel: string;
  role?: 'radio' | 'button';
  children: React.ReactNode;
}

function SegButton({ selected, disabled, onClick, ariaLabel, role = 'button', children }: SegButtonProps) {
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
        'rounded-sm border px-2 py-1.5 text-center font-mono text-[10px] transition-colors',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-accent',
        'disabled:cursor-not-allowed disabled:opacity-60',
        selected
          ? 'border-accent bg-accent text-on-accent'
          : 'border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text',
      ].join(' ')}
    >
      {children}
    </button>
  );
}

interface DisclosureProps {
  label: string;
  summary: string;
  active: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClear?: () => void;
  children: React.ReactNode;
}

function Disclosure({ label, summary, active, isOpen, onToggle, onClear, children }: DisclosureProps) {
  return (
    <div className="border-t border-border">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-2 px-3 py-2.5 text-left transition-colors hover:bg-surface-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
      >
        <span className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-faint">{label}</span>
          {/* Active-filter dot */}
          {active && <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />}
        </span>
        <span className="flex items-center gap-1.5">
          <span className={`font-mono text-[10px] ${active ? 'text-text' : 'text-muted'}`}>{summary}</span>
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
        <div className="ll-animate-pop px-3 pb-3 pt-0.5">
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
  onClick: () => void;
  label: string;
  count: number;
  ariaLabel: string;
}

function Chip({ selected, onClick, label, count, ariaLabel }: ChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      aria-label={ariaLabel}
      className={[
        'rounded-sm border px-2 py-1 font-mono text-[10px] transition-colors',
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-accent',
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
