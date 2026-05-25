import type { Problem } from '../types';

export const problem: Problem = {
  id: 'k-inverse-pairs-array',
  title: 'K Inverse Pairs Array',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `For an integer array \`nums\`, an **inverse pair** is a pair of integers \`[nums[i], nums[j]]\` where \`i < j\` and \`nums[i] > nums[j]\`.

Given two integers \`n\` and \`k\`, return the number of different arrays consisting of numbers from \`1\` to \`n\` such that there are exactly \`k\` inverse pairs. Since the answer can be huge, return it **modulo 10^9 + 7**.`,
  constraints: ['1 <= n <= 1000', '0 <= k <= 1000'],
  examples: [
    { input: 'n = 3, k = 0', output: '1', explanation: 'Only [1,2,3] has 0 inverse pairs.' },
    { input: 'n = 3, k = 1', output: '2', explanation: '[1,3,2] and [2,1,3] each have 1 inverse pair.' },
  ],
  hints: [
    'Define dp[i][j] = number of permutations of [1..i] with exactly j inverse pairs.',
    'When we insert the number i into a permutation of [1..i-1], placing it at position p from the right adds p inverse pairs (0-indexed).',
    'dp[i][j] = sum of dp[i-1][j-p] for p in 0..min(j, i-1). Use prefix sums to compute this in O(nk) total.',
    'dp[i][j] = dp[i][j-1] - dp[i-1][j-i] + dp[i-1][j] (with MOD arithmetic).',
  ],
  functionName: 'kInversePairs',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function kInversePairs(n, k) {\n\n}\n',
    python: 'def kInversePairs(n, k):\n    pass\n',
  },
  visibleTests: [
    { args: [3, 0], expected: 1 },
    { args: [3, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, 3], expected: 1 },
    { args: [5, 4], expected: 20 },
    { args: [1000, 1000], expected: 663677020 },
    { args: [4, 0], expected: 1 },
    { args: [4, 6], expected: 1 },
  ],
};
