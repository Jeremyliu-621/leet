import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-good-subsets',
  title: 'The Number of Good Subsets',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` (1-indexed). We call a set of numbers **good** if the product of its elements can be represented as a product of one or more **distinct** primes.

For example, \`[2, 3]\` is good because the product is \`6 = 2 × 3\`. \`[2, 4]\` is not good because the product is \`8 = 2^3\`.

Return the number of **non-empty subsets** of \`nums\` (each chosen index is distinct) such that the product of their elements forms a product of distinct primes.

Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

**Notes:**
- Two subsets are different if they use different indices.
- Elements equal to 1 can appear in any good subset without affecting the primeness of the product.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 30',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '6',
      explanation:
        'Good subsets by value (ignoring 4 since 4=2² fails): {2}, {3}, {2,3}. Each of these 3 can pair with or without the one "1", giving 3 × 2 = 6.',
    },
    {
      input: 'nums = [4,2,3,15]',
      output: '5',
      explanation:
        'Good subsets: {2}=2, {3}=3, {15}=3×5, {2,3}=6, {2,15}=30. Note {3,15}=45=3²×5 fails. Total = 5.',
    },
  ],
  hints: [
    'Level 1: Notice nums[i] ≤ 30, so there are only 10 primes up to 30 (2,3,5,7,11,13,17,19,23,29). A good subset must pick numbers whose combined prime factorization uses each prime at most once (squarefree product with no overlapping primes between elements).',
    'Level 2: First, discard numbers with any squared prime factor (4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28). For the rest, encode each as a bitmask of its prime factors. Use DP: dp[mask] = number of ways to build a "good" selection using exactly those primes. Multiply by 2^(count_of_1s) since each 1 can independently be included.',
    'Level 3: dp[0]=1. For each valid v (2..30, squarefree) with frequency freq[v] and primeMask[v]: for each mask where mask & primeMask[v]==0, dp[mask | primeMask[v]] += dp[mask] * freq[v]. Answer = sum(dp[1..]) * 2^ones mod 10^9+7.',
  ],
  functionName: 'numberOfGoodSubsets',
  params: ['nums'],
  starterCode: {
    javascript: 'function numberOfGoodSubsets(nums) {\n  // your code here\n}\n',
    typescript: 'function numberOfGoodSubsets(nums: number[]): number {\n  // your code here\n}\n',
    python: 'def numberOfGoodSubsets(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[1,2,3,4]],
      expected: 6,
    },
    {
      args: [[4,2,3,15]],
      expected: 5,
    },
  ],
  hiddenTests: [
    {
      args: [[1]],
      expected: 0,
    },
    {
      args: [[2]],
      expected: 1,
    },
    {
      args: [[1,1,2]],
      expected: 4,
    },
    {
      args: [[2,3,5]],
      expected: 7,
    },
    {
      args: [[2,3,6]],
      expected: 4,
    },
    {
      args: [[30,1,1]],
      expected: 4,
    },
  ],
};
