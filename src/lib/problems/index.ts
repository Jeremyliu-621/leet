import type { Difficulty, ProblemList, ProblemTag, UserPreferences } from '../types';
import type { Problem } from './types';
import { problems as bank } from './bank';

export type { Problem, ProblemExample, TestCase } from './types';

// Module-level Map for O(1) id lookup (bank is static).
const bankById = new Map<string, Problem>(bank.map((p) => [p.id, p]));

/** Every problem in the local bank. */
export function getAllProblems(): readonly Problem[] {
  return bank;
}

/** Looks up a problem by its id. O(1). */
export function getProblemById(id: string): Problem | undefined {
  return bankById.get(id);
}

/** Problem kind for filtering. */
export type ProblemKind = 'function' | 'debug';

export interface ProblemFilter {
  /** Allowed difficulties; empty or omitted means "any difficulty". */
  difficulties?: readonly Difficulty[];
  /** Allowed tags; a problem matches if it has at least one. Empty means "any". */
  tags?: readonly ProblemTag[];
  /** Allowed lists; a problem matches if it belongs to at least one. Empty means "any". */
  lists?: readonly ProblemList[];
  /** Allowed kinds; empty or omitted means "any kind". */
  kinds?: readonly ProblemKind[];
  /** Problem ids to exclude (e.g. recently solved). */
  excludeIds?: readonly string[];
}

/** Returns every problem matching the filter, preserving bank order. */
export function filterProblems(filter: ProblemFilter): readonly Problem[] {
  const { difficulties, tags, lists, kinds, excludeIds } = filter;
  const excludeSet = excludeIds && excludeIds.length > 0 ? new Set(excludeIds) : null;
  return bank.filter((problem) => {
    if (difficulties && difficulties.length > 0 && !difficulties.includes(problem.difficulty)) {
      return false;
    }
    if (tags && tags.length > 0 && !problem.tags.some((tag) => tags.includes(tag))) {
      return false;
    }
    if (lists && lists.length > 0) {
      if (!problem.lists || !problem.lists.some((l) => lists.includes(l))) {
        return false;
      }
    }
    if (kinds && kinds.length > 0) {
      const problemKind = problem.kind ?? 'function';
      if (!kinds.includes(problemKind)) return false;
    }
    if (excludeSet && excludeSet.has(problem.id)) {
      return false;
    }
    return true;
  });
}

/**
 * Picks one problem at random from those matching the filter. `random` is
 * injectable so selection can be tested deterministically.
 */
export function selectProblem(
  filter: ProblemFilter,
  random: () => number = Math.random,
): Problem | undefined {
  const matches = filterProblems(filter);
  if (matches.length === 0) {
    return undefined;
  }
  const index = Math.min(Math.floor(random() * matches.length), matches.length - 1);
  return matches[index];
}

export interface PickChallengeOptions {
  excludeIds?: readonly string[];
  kinds?: readonly ProblemKind[];
  random?: () => number;
}

/**
 * Picks a problem for a new challenge from the user's preferences. If the exact
 * preferences match nothing, the filter is progressively relaxed — tags first,
 * then difficulty, then the exclusion list — so a challenge can always be
 * presented as long as the bank is non-empty.
 */
export function pickChallengeProblem(
  prefs: Pick<UserPreferences, 'difficulties' | 'tags'> & Partial<Pick<UserPreferences, 'lists'>>,
  options: PickChallengeOptions = {},
): Problem | undefined {
  const random = options.random ?? Math.random;
  const { excludeIds, kinds } = options;

  return (
    selectProblem({ difficulties: prefs.difficulties, tags: prefs.tags, lists: prefs.lists, kinds, excludeIds }, random) ??
    selectProblem({ difficulties: prefs.difficulties, lists: prefs.lists, kinds, excludeIds }, random) ??
    selectProblem({ tags: prefs.tags, lists: prefs.lists, kinds, excludeIds }, random) ??
    selectProblem({ lists: prefs.lists, kinds, excludeIds }, random) ??
    selectProblem({ kinds, excludeIds }, random) ??
    selectProblem({ excludeIds }, random) ??
    selectProblem({}, random)
  );
}
