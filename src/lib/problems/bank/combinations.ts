import type { Problem } from '../types';

export const problem: Problem = {
  id: 'combinations',
  title: 'Combinations',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Given two integers \`n\` and \`k\`, return all possible combinations of \`k\` numbers chosen from the range \`[1, n]\`.

You may return the answer in **any order**.`,
  constraints: ['1 <= n <= 20', '1 <= k <= n'],
  examples: [
    {
      input: 'n = 4, k = 2',
      output: '[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]',
      explanation: 'All 2-combinations of [1,2,3,4], returned in sorted order.',
    },
    {
      input: 'n = 1, k = 1',
      output: '[[1]]',
    },
  ],
  hints: [
    'Use backtracking. Maintain a `start` pointer and a `current` list. At each step, try each number from `start` to `n` as the next element.',
    'Prune early: if the remaining numbers from `start` to `n` can\'t fill up the remaining slots needed (`n - start + 1 < k - current.length`), skip.',
    'When `current.length == k`, add a copy of the current list to the results.',
  ],
  functionName: 'combine',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function combine(n, k) {\n  \n}\n',
    typescript: "function combine(n: number, k: number): number[][] {\n  \n}",

    python: 'def combine(n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [4, 2], expected: [[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]] },
    { args: [1, 1], expected: [[1]] },
    { args: [3, 3], expected: [[1, 2, 3]] },
  ],
  hiddenTests: [
    { args: [4, 1], expected: [[1], [2], [3], [4]] },
    { args: [5, 2], expected: [[1, 2], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5], [3, 4], [3, 5], [4, 5]] },
    { args: [3, 2], expected: [[1, 2], [1, 3], [2, 3]] },
  ],
};
