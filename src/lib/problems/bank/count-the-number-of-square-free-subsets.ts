import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-square-free-subsets',
  title: 'Count the Number of Square-Free Subsets',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming', 'bit-manipulation'],
  description: `You are given a positive integer **0-indexed** array \`nums\`.

A subset of the array \`nums\` is **square-free** if the product of its elements is a **square-free integer** — that is, the product is not divisible by any perfect square other than \`1\`.

Return *the number of square-free **non-empty** subsets of the array* **nums**. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

A **subset** is a contiguous or non-contiguous part of an array with elements taken in the original order. Two subsets are different if they use different indices, even if the element values are the same.`,
  constraints: ['1 <= nums.length <= 1000', '1 <= nums[i] <= 30'],
  examples: [
    {
      input: 'nums = [3,4,4,5]',
      output: '3',
      explanation:
        'The square-free subsets are {3}, {5}, and {3,5}. The subsets containing 4 are not square-free since 4 = 2^2.',
    },
    {
      input: 'nums = [1]',
      output: '1',
      explanation: 'The only subset is {1}, and 1 is square-free.',
    },
  ],
  hints: [
    'Primes ≤ 30: 2,3,5,7,11,13,17,19,23,29 — only 10 primes, so bitmask them in a 10-bit integer.',
    'An integer is square-free iff every prime appears at most once (no p² divides it).',
    'Use 0/1 knapsack DP: dp[mask] = count of subsets whose product uses exactly the primes in mask. For each square-free num, iterate masks backward: if (mask & prime_mask(num)) == 0 → dp[mask | prime_mask(num)] += dp[mask].',
    'Integers equal to 1 have prime_mask = 0 and simply double all dp values. Non-square-free integers (divisible by 4, 9, 25, …) are skipped. Answer = sum(dp) - 1.',
  ],
  functionName: 'squareFreeSubsets',
  params: ['nums'],
  starterCode: {
    javascript: 'function squareFreeSubsets(nums) {\n\n}\n',
    typescript: 'function squareFreeSubsets(nums: number[]): number {\n\n}\n',
    python: 'def squareFreeSubsets(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 4, 5]], expected: 3 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 3 },
    { args: [[2, 3]], expected: 3 },
    { args: [[4, 8, 9]], expected: 0 },
    { args: [[2, 3, 6]], expected: 4 },
    { args: [[1, 2, 3, 6]], expected: 9 },
    { args: [[6, 10, 21]], expected: 4 },
    { args: [[2, 3, 5, 7]], expected: 15 },
  ],
};
