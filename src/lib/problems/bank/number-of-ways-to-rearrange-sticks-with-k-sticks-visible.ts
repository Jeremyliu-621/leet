import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-rearrange-sticks-with-k-sticks-visible',
  title: 'Number of Ways to Rearrange Sticks With K Sticks Visible',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `There are \`n\` uniquely-sized sticks whose lengths are 1 to \`n\`. Arrange the \`n\` sticks in a row such that exactly \`k\` sticks are **visible** from the left. A stick is visible if there are no longer sticks to its left.

Return the number of arrangements. Answer mod 10^9 + 7.

**DP (Stirling numbers):** \`dp[n][k] = dp[n-1][k-1] + (n-1) * dp[n-1][k]\`.
- Place stick \`n\` at position 1 (leftmost): \`n\` is always visible, remaining \`n-1\` sticks need \`k-1\` visible → \`dp[n-1][k-1]\`.
- Place stick \`n\` at any of \`n-1\` other positions: \`n\` is still visible (tallest), remaining must give \`k\` visible → \`(n-1) * dp[n-1][k]\`.`,
  constraints: [
    '1 <= n <= 1000',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'n = 3, k = 2',
      output: '3',
      explanation: '[1,3,2], [2,3,1], [2,1,3]',
    },
    {
      input: 'n = 5, k = 5',
      output: '1',
      explanation: 'Only [1,2,3,4,5]',
    },
    {
      input: 'n = 20, k = 11',
      output: '647427950',
    },
  ],
  hints: [
    'dp[n][k] = dp[n-1][k-1] + (n-1) * dp[n-1][k] (mod 10^9+7).',
    'Base cases: dp[1][1] = 1, dp[n][0] = 0, dp[0][0] = 1.',
    'Build the dp table iteratively. Answer is dp[n][k].',
  ],
  functionName: 'rearrangeSticks',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function rearrangeSticks(n, k) {\n\n}\n',
    typescript: "function rearrangeSticks(n: number, k: number): number {\n\n}",

    python: 'def rearrangeSticks(n: int, k: int) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [3, 2], expected: 3 },
    { args: [5, 5], expected: 1 },
    { args: [20, 11], expected: 647427950 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [3, 1], expected: 2 },
    { args: [3, 3], expected: 1 },
    { args: [5, 2], expected: 50 },
  ],
};
