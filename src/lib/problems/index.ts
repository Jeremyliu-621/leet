import type { Difficulty, ProblemTag, UserPreferences } from '../types';
import type { Problem } from './types';
import { problems as bank } from './bank';

export type { Problem, ProblemExample, TestCase } from './types';

/** Every problem in the local bank. */
export function getAllProblems(): readonly Problem[] {
  return bank;
}

/** Looks up a problem by its id. */
export function getProblemById(id: string): Problem | undefined {
  return bank.find((problem) => problem.id === id);
}

export interface ProblemFilter {
  /** Allowed difficulties; empty or omitted means "any difficulty". */
  difficulties?: readonly Difficulty[];
  /** Allowed tags; a problem matches if it has at least one. Empty means "any". */
  tags?: readonly ProblemTag[];
  /** Problem ids to exclude (e.g. recently solved). */
  excludeIds?: readonly string[];
}

/** Returns every problem matching the filter, preserving bank order. */
export function filterProblems(filter: ProblemFilter): readonly Problem[] {
  const { difficulties, tags, excludeIds } = filter;
  return bank.filter((problem) => {
    if (difficulties && difficulties.length > 0 && !difficulties.includes(problem.difficulty)) {
      return false;
    }
    if (tags && tags.length > 0 && !problem.tags.some((tag) => tags.includes(tag))) {
      return false;
    }
    if (excludeIds && excludeIds.includes(problem.id)) {
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
  random?: () => number;
}

/**
 * Picks a problem for a new challenge from the user's preferences. If the exact
 * preferences match nothing, the filter is progressively relaxed — tags first,
 * then difficulty, then the exclusion list — so a challenge can always be
 * presented as long as the bank is non-empty.
 */
export function pickChallengeProblem(
  prefs: Pick<UserPreferences, 'difficulties' | 'tags'>,
  options: PickChallengeOptions = {},
): Problem | undefined {
  const random = options.random ?? Math.random;
  const { excludeIds } = options;

  return (
    selectProblem({ difficulties: prefs.difficulties, tags: prefs.tags, excludeIds }, random) ??
    selectProblem({ difficulties: prefs.difficulties, excludeIds }, random) ??
    selectProblem({ tags: prefs.tags, excludeIds }, random) ??
    selectProblem({ excludeIds }, random) ??
    selectProblem({}, random)
  );
}
