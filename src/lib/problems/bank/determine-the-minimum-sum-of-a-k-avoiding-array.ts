import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-the-minimum-sum-of-a-k-avoiding-array',
  title: 'Determine the Minimum Sum of a k-avoiding Array',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two integers \`n\` and \`k\`. An array of **distinct positive integers** is called **k-avoiding** if there is no pair of distinct elements that sum to \`k\`.

Return the **minimum possible sum** of a k-avoiding array of length \`n\`.`,
  constraints: [
    '1 <= n, k <= 50',
  ],
  examples: [
    {
      input: 'n = 5, k = 4',
      output: '18',
      explanation: 'Minimum k-avoiding array: [1,2,4,5,6]. Sum = 18. We skip 3 since 1+3=4.',
    },
    {
      input: 'n = 2, k = 6',
      output: '3',
      explanation: 'Minimum k-avoiding array: [1,2]. Sum = 3.',
    },
  ],
  hints: [
    'Level 1: Greedily build the array by taking the smallest positive integers that do not form a pair summing to k with any already-chosen integer.',
    'Level 2: Iterate i = 1, 2, 3, … and include i if (k - i) is not already in the chosen set. If k - i == i, it is safe to include i. Collect n such values.',
    'Level 3: Use a Set to track chosen values. For each candidate i: if k-i is not in the set, add i and decrement the count needed. Return the sum of all chosen values.',
  ],
  functionName: 'minimumSum',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function minimumSum(n, k) {\n  // your code here\n}\n',
    typescript: 'function minimumSum(n: number, k: number): number {\n  // your code here\n}\n',
    python: 'def minimumSum(n, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [5, 4],
      expected: 18,
    },
    {
      args: [2, 6],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [3, 3],
      expected: 8,
    },
    {
      args: [1, 2],
      expected: 1,
    },
    {
      args: [4, 4],
      expected: 12,
    },
    {
      args: [4, 6],
      expected: 12,
    },
    {
      args: [3, 5],
      expected: 8,
    },
  ],
};
