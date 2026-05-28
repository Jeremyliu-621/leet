import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-cutting',
  title: 'Maximum Product Cutting',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'math'],
  description: `Given an integer \`n\`, break it into the sum of \`k\` **positive integers** (where \`k >= 2\`) and maximize the product of those integers. Return the maximum product.

You must make at least one cut — you cannot keep \`n\` intact.

**Example:** \`n = 10\` → cut into \`[3, 3, 4]\` → product = \`36\`.

**DP approach:** Let \`dp[i]\` = maximum product achievable by breaking \`i\` into at least two positive integer parts. For each \`i\`, try every first cut \`j\` from \`1\` to \`i-1\`: the remaining piece \`i - j\` can either stay intact (contributing \`i - j\`) or be further cut (contributing \`dp[i - j]\`). So \`dp[i] = max over j of (j * max(i-j, dp[i-j]))\`.`,
  constraints: [
    '2 <= n <= 58',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '1',
      explanation: '2 = 1 + 1; the product is 1 × 1 = 1.',
    },
    {
      input: 'n = 10',
      output: '36',
      explanation: '10 = 3 + 3 + 4; the product is 3 × 3 × 4 = 36.',
    },
    {
      input: 'n = 4',
      output: '4',
      explanation: '4 = 2 + 2; the product is 2 × 2 = 4.',
    },
  ],
  hints: [
    'Build the answer bottom-up. dp[2] = 1, dp[3] = 2. For each value i, try all first cuts j from 1 to i-1. The piece (i-j) can either be kept whole or be further split — take whichever is larger.',
    'For each i and each first piece j, the contribution is j * max(i-j, dp[i-j]). The second factor is the best outcome for the remaining piece (whole vs. further cut). Take the maximum over all j.',
    '`const dp = new Array(n+1).fill(0); for (let i=2; i<=n; i++) { for (let j=1; j<i; j++) { dp[i] = Math.max(dp[i], j * Math.max(i-j, dp[i-j])); } } return dp[n];`',
  ],
  functionName: 'integerBreak',
  params: ['n'] as readonly string[],
  starterCode: {
    javascript: 'function integerBreak(n) {\n  // your code here\n}\n',
    typescript: "function integerBreak(n: number): number {\n  // your code here\n}",

    python: 'def integerBreak(n: int) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [2], expected: 1 },
    { args: [10], expected: 36 },
    { args: [4], expected: 4 },
  ],
  hiddenTests: [
    { args: [3], expected: 2 },
    { args: [5], expected: 6 },
    { args: [6], expected: 9 },
    { args: [7], expected: 12 },
    { args: [8], expected: 18 },
    { args: [58], expected: 1549681956 },
  ],
};
