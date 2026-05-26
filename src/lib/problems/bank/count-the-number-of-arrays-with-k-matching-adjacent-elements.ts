import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-arrays-with-k-matching-adjacent-elements',
  title: 'Count the Number of Arrays With K Matching Adjacent Elements',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given three integers \`n\`, \`m\`, and \`k\`. A **good** array is an array of length \`n\` where:
- Every element is in the range \`[1, m]\`.
- There are **exactly** \`k\` indices \`i\` (where \`0 <= i < n - 1\`) such that \`a[i] == a[i + 1]\`.

Return the number of **good** arrays modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= m <= 10^5',
    '0 <= k < n',
  ],
  examples: [
    {
      input: 'n = 3, m = 2, k = 1',
      output: '4',
      explanation: 'Good arrays: [1,1,2],[1,2,2],[2,2,1],[2,1,1]. There are C(2,1)=2 ways to place the equal pair, 2 choices for the first element, 1 choice per different transition. Total = 2*2*1 = 4.',
    },
    {
      input: 'n = 4, m = 2, k = 2',
      output: '6',
      explanation: 'C(3,2)=3 positions for equal pairs, 2 first-element choices, (2-1)^1=1 for the remaining different transition. Total = 3*2*1 = 6.',
    },
    {
      input: 'n = 5, m = 2, k = 0',
      output: '2',
      explanation: 'No adjacent equal pairs: must be fully alternating. Only [1,2,1,2,1] and [2,1,2,1,2]. Total = C(4,0)*2*(2-1)^4 = 1*2*1 = 2.',
    },
  ],
  hints: [
    'Choose which k of the n-1 adjacent positions are "equal" positions: C(n-1, k) ways. The rest (n-1-k) are "different" positions.',
    'The first element has m choices. Each "equal" transition is forced (same as previous). Each "different" transition has m-1 choices (any value except the previous).',
    'Answer = C(n-1, k) * m * (m-1)^(n-1-k) mod 10^9+7. Use modular exponentiation and precomputed factorial/inverse-factorial for the binomial coefficient.',
  ],
  functionName: 'countGoodArrays',
  params: ['n', 'm', 'k'],
  starterCode: {
    javascript: `function countGoodArrays(n, m, k) {
  // Answer = C(n-1, k) * m * (m-1)^(n-1-k) mod (10^9+7).
  // Precompute factorials and inverse factorials for the binomial coefficient.
}`,
    python: `def countGoodArrays(n, m, k):
    # Answer = C(n-1, k) * m * (m-1)^(n-1-k) mod (10^9+7).
    # Use Python's built-in pow(base, exp, mod) for fast modular exponentiation.
    pass`,
  },
  visibleTests: [
    { args: [3, 2, 1], expected: 4 },
    { args: [4, 2, 2], expected: 6 },
    { args: [5, 2, 0], expected: 2 },
  ],
  hiddenTests: [
    { args: [1, 1, 0], expected: 1 },
    { args: [2, 5, 0], expected: 20 },
    { args: [3, 3, 0], expected: 12 },
    { args: [4, 4, 3], expected: 4 },
    { args: [5, 3, 2], expected: 72 },
  ],
};
