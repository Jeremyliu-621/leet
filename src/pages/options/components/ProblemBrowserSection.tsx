/**
 * ProblemBrowserSection — filterable read-only list of every problem in the bank.
 * Shows title, difficulty, primary tag, and whether the user has solved it.
 * Self-contained: loads its own `solvedProblems` from storage.
 */

import { useEffect, useState } from 'react';
import { SectionCard } from './SectionCard';
import { getAllProblems } from '../../../lib/problems';
import type { Difficulty, ProblemTag, SolvedProblemRecord } from '../../../lib/types';
import { DIFFICULTIES, PROBLEM_TAGS } from '../../../lib/types';
import { getValue } from '../../../lib/storage';

const ALL_PROBLEMS = getAllProblems();

const PAGE_SIZE = 50;

const DIFF_COLORS: Record<Difficulty, string> = {
  easy: 'text-text',
  medium: 'text-muted',
  hard: 'text-faint',
};

export function ProblemBrowserSection() {
  const [solvedIds, setSolvedIds] = useState<ReadonlySet<string>>(new Set());
  const [diffFilter, setDiffFilter] = useState<Difficulty | 'all'>('all');
  const [tagFilter, setTagFilter] = useState<ProblemTag | 'all'>('all');
  const [search, setSearch] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    if (!isOpen) return;
    let mounted = true;
    void getValue('solvedProblems')
      .then((records: readonly SolvedProblemRecord[]) => {
        if (mounted) setSolvedIds(new Set(records.map((r) => r.problemId)));
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [isOpen]);

  // Reset pagination when filters or search change.
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [diffFilter, tagFilter, search]);

  const query = search.trim().toLowerCase();

  const filtered = ALL_PROBLEMS.filter((p) => {
    if (diffFilter !== 'all' && p.difficulty !== diffFilter) return false;
    if (tagFilter !== 'all' && !p.tags.includes(tagFilter)) return false;
    if (query && !p.title.toLowerCase().includes(query)) return false;
    return true;
  });

  const visibleProblems = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const solvedCount = filtered.filter((p) => solvedIds.has(p.id)).length;

  const totalByDiff: Record<Difficulty, number> = {
    easy: ALL_PROBLEMS.filter((p) => p.difficulty === 'easy').length,
    medium: ALL_PROBLEMS.filter((p) => p.difficulty === 'medium').length,
    hard: ALL_PROBLEMS.filter((p) => p.difficulty === 'hard').length,
  };
  const solvedByDiff: Record<Difficulty, number> = {
    easy: ALL_PROBLEMS.filter((p) => p.difficulty === 'easy' && solvedIds.has(p.id)).length,
    medium: ALL_PROBLEMS.filter(
      (p) => p.difficulty === 'medium' && solvedIds.has(p.id),
    ).length,
    hard: ALL_PROBLEMS.filter((p) => p.difficulty === 'hard' && solvedIds.has(p.id)).length,
  };

  return (
    <SectionCard
      label="Problem bank"
      description={`${ALL_PROBLEMS.length} problems · ${solvedIds.size} solved`}
      id="section-problem-browser"
    >
      {/* Collapse / expand toggle */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="mb-4 font-mono text-[10px] text-muted underline-offset-2 hover:text-text focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
        aria-expanded={isOpen}
      >
        {isOpen ? '▾ collapse list' : '▸ browse all problems'}
      </button>

      {/* Compact difficulty summary always visible */}
      <div className="flex gap-4">
        {DIFFICULTIES.map((d) => (
          <div key={d} className="text-xs">
            <span className={`font-mono ${DIFF_COLORS[d]}`}>{d}</span>
            <span className="ml-1.5 font-mono text-faint tabular-nums">
              {solvedByDiff[d]}/{totalByDiff[d]}
            </span>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="mt-4 space-y-3">
          {/* Search input */}
          <input
            type="search"
            placeholder="Search problems…"
            value={search}
            onChange={(e) => setSearch(e.currentTarget.value)}
            aria-label="Search problems by title"
            className={[
              'w-full rounded-sm border border-border bg-surface-2 px-3 py-1.5',
              'font-mono text-xs text-text placeholder:text-faint',
              'focus:border-border-strong focus:outline-none',
            ].join(' ')}
          />

          {/* Difficulty filter tabs */}
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by difficulty">
            {(['all', ...DIFFICULTIES] as const).map((d) => {
              const selected = diffFilter === d;
              return (
                <button
                  key={d}
                  type="button"
                  onClick={() => setDiffFilter(d)}
                  aria-pressed={selected}
                  className={[
                    'rounded-sm border px-2.5 py-1 font-mono text-[10px] transition-colors',
                    'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                    selected
                      ? 'border-accent bg-accent text-on-accent'
                      : 'border-border bg-surface-2 text-muted hover:border-border-strong hover:text-text',
                  ].join(' ')}
                >
                  {d}
                </button>
              );
            })}
          </div>

          {/* Tag filter tabs */}
          <div className="flex flex-wrap gap-1.5" role="group" aria-label="Filter by tag">
            {(['all', ...PROBLEM_TAGS] as const).map((t) => {
              const selected = tagFilter === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTagFilter(t)}
                  aria-pressed={selected}
                  className={[
                    'rounded-sm border px-2 py-0.5 font-mono text-[9px] transition-colors',
                    'focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent',
                    selected
                      ? 'border-accent bg-accent text-on-accent'
                      : 'border-border bg-surface-2 text-faint hover:border-border-strong hover:text-muted',
                  ].join(' ')}
                >
                  {t}
                </button>
              );
            })}
            <span className="ml-auto self-center font-mono text-[10px] text-faint tabular-nums">
              {solvedCount}/{filtered.length}
            </span>
          </div>

          {/* Problem rows */}
          <ul className="max-h-[400px] overflow-y-auto space-y-px" aria-label="Problems">
            {filtered.length === 0 ? (
              <li className="py-4 text-center font-mono text-xs text-faint">no problems match</li>
            ) : (
              <>
                {visibleProblems.map((p) => {
                  const solved = solvedIds.has(p.id);
                  const primaryTag = p.tags[0] ?? '';
                  return (
                    <li
                      key={p.id}
                      className={`flex items-center gap-3 rounded-sm px-2 py-1.5 ${
                        solved ? 'bg-surface' : ''
                      }`}
                    >
                      {/* Solved indicator */}
                      <span
                        className={`shrink-0 font-mono text-[10px] tabular-nums ${
                          solved ? 'text-accent' : 'text-border-strong'
                        }`}
                        aria-label={solved ? 'Solved' : 'Not solved'}
                      >
                        {solved ? '✓' : '·'}
                      </span>
                      {/* Title */}
                      <span className="flex-1 truncate text-xs text-text">{p.title}</span>
                      {/* Primary tag */}
                      <span className="shrink-0 font-mono text-[9px] text-faint">{primaryTag}</span>
                      {/* Difficulty */}
                      <span
                        className={`shrink-0 w-12 text-right font-mono text-[9px] ${DIFF_COLORS[p.difficulty]}`}
                      >
                        {p.difficulty}
                      </span>
                    </li>
                  );
                })}
                {hasMore && (
                  <li className="pt-2 pb-1 text-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                      className="font-mono text-[10px] text-faint hover:text-muted transition-colors focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-accent"
                    >
                      show {Math.min(PAGE_SIZE, filtered.length - visibleCount)} more
                      <span className="text-border-strong ml-1">
                        ({filtered.length - visibleCount} remaining)
                      </span>
                    </button>
                  </li>
                )}
              </>
            )}
          </ul>
        </div>
      )}
    </SectionCard>
  );
}
