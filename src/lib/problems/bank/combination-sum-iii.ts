import type { Problem } from '../types';

export const problem: Problem = {
  id: 'combination-sum-iii',
  title: 'Combination Sum III',
  difficulty: 'medium',
  tags: ['arrays', 'backtracking'],
  description: `Find all valid combinations of \`k\` numbers that sum up to \`n\` such that the following conditions are true:

- Only numbers **1** through **9** are used.
- Each number is used **at most once**.

Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.`,
  constraints: [
    '`2 <= k <= 9`',
    '`1 <= n <= 60`',
  ],
  examples: [
    {
      input: 'k = 3, n = 7',
      output: '[[1,2,4]]',
      explanation: '1 + 2 + 4 = 7.',
    },
    {
      input: 'k = 3, n = 9',
      output: '[[1,2,6],[1,3,5],[2,3,4]]',
      explanation: '1+2+6=9, 1+3+5=9, 2+3+4=9.',
    },
    {
      input: 'k = 4, n = 1',
      output: '[]',
      explanation: 'No valid combinations exist.',
    },
  ],
  hints: [
    'Use backtracking. At each step try digits from `start` to 9. Stop early if the remaining sum goes negative.',
    'Prune: if the current digit is greater than the remaining sum, break (digits are increasing).',
    'Add the current path to results when its length equals `k` and its sum equals `n`.',
  ],
  functionName: 'combinationSum3',
  params: ['k', 'n'],
  starterCode: {
    javascript: `function combinationSum3(k, n) {

}`,
    python: `def combinationSum3(k, n):
    pass`,
  },
  visibleTests: [
    { args: [3, 7], expected: [[1, 2, 4]] },
    { args: [3, 9], expected: [[1, 2, 6], [1, 3, 5], [2, 3, 4]] },
    { args: [4, 1], expected: [] },
  ],
  hiddenTests: [
    { args: [2, 10], expected: [[1, 9], [2, 8], [3, 7], [4, 6]] },
    { args: [3, 15], expected: [[1, 5, 9], [1, 6, 8], [2, 4, 9], [2, 5, 8], [2, 6, 7], [3, 4, 8], [3, 5, 7], [4, 5, 6]] },
    { args: [1, 5], expected: [[5]] },
    { args: [9, 45], expected: [[1, 2, 3, 4, 5, 6, 7, 8, 9]] },
  ],
};
