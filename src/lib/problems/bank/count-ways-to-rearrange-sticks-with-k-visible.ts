import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-ways-to-rearrange-sticks-with-k-visible',
  title: 'Count Ways to Rearrange Sticks With K Sticks Visible',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `There are \`n\` uniquely-sized sticks whose lengths are \`1\` to \`n\`. You want to arrange these sticks such that **exactly \`k\` sticks are visible** from the left.

A stick is **visible** if no stick to its left is longer.

Given the two integers \`n\` and \`k\`, return the **number of such arrangements**. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`1 <= k <= n <= 1000`',
  ],
  examples: [
    {
      input: 'n = 3, k = 2',
      output: '3',
      explanation: '[1,3,2], [2,3,1], [2,1,3] are the 3 valid arrangements.',
    },
    {
      input: 'n = 5, k = 5',
      output: '1',
      explanation: 'Only [1,2,3,4,5] has all 5 sticks visible.',
    },
    {
      input: 'n = 20, k = 11',
      output: '647427950',
    },
  ],
  hints: [
    'Think about where the largest stick (length n) is placed.',
    'If the longest stick is at position 0 (front), it is visible and the remaining n-1 sticks must contribute k-1 visible ones: dp[n-1][k-1] ways.',
    'If the longest stick is not at position 0, it is never visible (something before it is longer). Insert it in any of the n-1 non-front slots: (n-1) * dp[n-1][k] ways.',
    'Full recurrence: dp[n][k] = dp[n-1][k-1] + (n-1)*dp[n-1][k], base case dp[1][1] = 1. These are the unsigned Stirling numbers of the first kind.',
  ],
  functionName: 'rearrangeSticks',
  params: ['n', 'k'],
  starterCode: {
    javascript: `/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function rearrangeSticks(n, k) {

}`,
    python: `def rearrangeSticks(n: int, k: int) -> int:
    `,
  },
  visibleTests: [
    { args: [3, 2], expected: 3 },
    { args: [5, 5], expected: 1 },
    { args: [20, 11], expected: 647427950 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [2, 1], expected: 1 },
    { args: [2, 2], expected: 1 },
    { args: [5, 1], expected: 24 },
    { args: [5, 2], expected: 50 },
    { args: [3, 1], expected: 2 },
    { args: [4, 2], expected: 11 },
    { args: [10, 3], expected: 1172700 },
  ],
};
