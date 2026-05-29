import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-score-of-numbers-in-ranges',
  title: 'Maximize Score of Numbers in Ranges',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given an array of integers \`start\` and an integer \`d\`.

For each index \`i\`, you can choose any integer from the range \`[start[i], start[i] + d]\`.

The **score** is the **minimum absolute difference** between any two chosen integers.

Return the **maximum possible score**.`,
  constraints: [
    '2 <= start.length <= 10^5',
    '0 <= start[i] <= 10^9',
    '0 <= d <= 10^9',
  ],
  examples: [
    {
      input: 'start = [6,0,3], d = 2',
      output: '4',
      explanation: 'Sort ranges: [0,2], [3,5], [6,8]. Choose 0, 4, 8 → minimum gap = 4.',
    },
    {
      input: 'start = [2,6,13,12,14], d = 5',
      output: '3',
      explanation: 'Sort ranges, then greedily place each value at least 3 apart: 2, 6, 12, 15, 18 — all within their respective expanded ranges.',
    },
    {
      input: 'start = [1,2,3], d = 0',
      output: '1',
      explanation: 'Each start is forced (d=0). Sorted: {1,2,3}. Minimum gap = 1.',
    },
  ],
  hints: [
    'Binary search on the answer: can we pick one integer per range such that all consecutive chosen values (when sorted) differ by at least m?',
    'Sort start. For a candidate minimum gap m, greedily pick values: curr = start[0], then for each subsequent range curr = max(start[i], prev + m). Check curr ≤ start[i] + d.',
    'The answer is the largest m for which the greedy check succeeds. Binary search between 0 and (max_start + d − min_start).',
    'After sorting, if any greedy-chosen value exceeds start[i] + d, m is infeasible.',
  ],
  functionName: 'maxScore',
  params: ['start', 'd'],
  starterCode: {
    javascript: `function maxScore(start, d) {

}`,
    typescript: `function maxScore(start: number[], d: number): number {

}`,
    python: `def maxScore(start: list[int], d: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[6, 0, 3], 2], expected: 4 },
    { args: [[2, 6, 13, 12, 14], 5], expected: 3 },
    { args: [[1, 2, 3], 0], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0, 5], 0], expected: 5 },
    { args: [[0, 5], 3], expected: 8 },
    { args: [[3, 5, 1], 2], expected: 3 },
    { args: [[1, 3], 5], expected: 7 },
    { args: [[1, 1, 1, 1], 1], expected: 0 },
    { args: [[0, 0, 0], 100], expected: 50 },
    { args: [[1, 2, 3, 4, 5], 10], expected: 3 },
    { args: [[5, 5, 5], 0], expected: 0 },
    { args: [[0, 1000000000], 1000000000], expected: 2000000000 },
    { args: [[10, 20, 30, 40], 5], expected: 11 },
  ],
};
