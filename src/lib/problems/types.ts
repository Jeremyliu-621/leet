import type { Difficulty, ProblemTag } from '../types';

/** A worked example shown on the challenge problem panel. */
export interface ProblemExample {
  /** Display string for the input, e.g. "nums = [2,7,11,15], target = 9". */
  input: string;
  /** Display string for the output, e.g. "[0,1]". */
  output: string;
  /** Optional plain-language explanation. */
  explanation?: string;
}

/**
 * A single test case. `args` is the positional argument list applied to the
 * user's solution function; the return value is compared to `expected` by
 * deep structural equality.
 */
export interface TestCase {
  args: readonly unknown[];
  expected: unknown;
}

/** A coding problem in the local question bank. */
export interface Problem {
  /** Stable, unique, kebab-case id, e.g. "two-sum". */
  id: string;
  /** Display title, e.g. "Two Sum". */
  title: string;
  difficulty: Difficulty;
  tags: readonly ProblemTag[];
  /**
   * Problem statement. Markdown (GitHub-flavoured) is supported — plain text
   * with blank-line paragraph breaks renders cleanly too, so older bank
   * entries authored as plain text keep working.
   */
  description: string;
  /** Constraint lines, rendered as a list. */
  constraints: readonly string[];
  /** Worked examples shown to the user. */
  examples: readonly ProblemExample[];
  /** Name of the function the user must implement, e.g. "twoSum". */
  functionName: string;
  /** Ordered parameter names for that function. */
  params: readonly string[];
  /**
   * Starter code skeleton per language. JavaScript is **required**. Python
   * is added problem-by-problem during the Pyodide rollout (see
   * `docs/PYODIDE_PLAN.md`); additional languages stay optional.
   */
  starterCode: Readonly<{ javascript: string; python?: string }>;
  /** Tests shown to the user and run by the "Run" button. */
  visibleTests: readonly TestCase[];
  /** Tests hidden from the user and run only by the "Submit" button. */
  hiddenTests: readonly TestCase[];
  /**
   * Optional progressive hints. Each hint is markdown. The challenge UI
   * reveals them one at a time, gated by an explicit user click.
   */
  hints?: readonly string[];
}
