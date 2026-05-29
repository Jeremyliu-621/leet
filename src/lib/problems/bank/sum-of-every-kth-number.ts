import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-every-kth-number',
  title: 'Sum of Every Kth Number',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `Given two positive integers \`n\` and \`k\`, return the sum of all positive multiples of \`k\` that are **less than or equal to \`n\`**.

In other words, compute \`k + 2k + 3k + ...\` for as long as each term does not exceed \`n\`.

If no multiple of \`k\` is ≤ \`n\`, return \`0\`.`,
  constraints: [
    '1 <= k <= n <= 10^5',
  ],
  examples: [
    {
      input: 'n = 10, k = 3',
      output: '18',
      explanation: 'The multiples of 3 up to 10 are 3, 6, 9. Their sum is 3 + 6 + 9 = 18.',
    },
    {
      input: 'n = 15, k = 5',
      output: '30',
      explanation: 'The multiples of 5 up to 15 are 5, 10, 15. Their sum is 5 + 10 + 15 = 30.',
    },
    {
      input: 'n = 6, k = 7',
      output: '0',
      explanation: 'There are no multiples of 7 that are ≤ 6, so the sum is 0.',
    },
  ],
  hints: [
    'Iterate through multiples of k (k, 2k, 3k, ...) and add each one to a running total as long as it does not exceed n.',
    'You can also use the arithmetic series formula: if there are m = floor(n / k) multiples, the sum equals k * m * (m + 1) / 2.',
    'The number of multiples of k that are ≤ n is exactly floor(n / k). Use this to avoid looping entirely.',
  ],
  functionName: 'sumEveryKth',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function sumEveryKth(n, k) {\n  // your code here\n}\n',
    python: 'def sumEveryKth(n, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [10, 3], expected: 18 },
    { args: [15, 5], expected: 30 },
    { args: [6, 7], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 2], expected: 0 },
    { args: [100, 10], expected: 550 },
    { args: [7, 1], expected: 28 },
    { args: [20, 4], expected: 60 },
    { args: [50, 13], expected: 78 },
    { args: [12, 3], expected: 30 },
    { args: [5, 5], expected: 5 },
  ],
};
