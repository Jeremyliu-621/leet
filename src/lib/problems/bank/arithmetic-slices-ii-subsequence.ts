import type { Problem } from '../types';

export const problem: Problem = {
  id: 'arithmetic-slices-ii-subsequence',
  title: 'Arithmetic Slices II - Subsequence',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an integer array \`nums\`, return the number of all **arithmetic subsequences** of \`nums\`.

A sequence of numbers is called **arithmetic** if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

A **subsequence** is derived from \`nums\` by deleting some (possibly zero) elements without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [2,4,6,8,10]',
      output: '7',
      explanation:
        'APs with d=2: [2,4,6],[4,6,8],[6,8,10],[2,4,6,8],[4,6,8,10],[2,4,6,8,10] (6 total). APs with d=4: [2,6,10] (1 total). Grand total = 7.',
    },
    {
      input: 'nums = [7,7,7,7,7]',
      output: '16',
      explanation: 'Any subsequence of length >= 3 with difference 0 is valid.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '3',
      explanation: '[1,2,3], [2,3,4], and [1,2,3,4] are the only valid arithmetic subsequences (all with d=1).',
    },
  ],
  hints: [
    'For each index i and common difference d, track how many "weak arithmetic subsequences" of length >= 2 end at i with difference d. A weak subsequence becomes a valid one when extended to length >= 3.',
    'Use dp[i] as a Map from difference d to count of weak subsequences ending at nums[i]. For each pair (i, j) with j < i and d = nums[i] - nums[j]: add dp[j].get(d, 0) to the answer (these become length >= 3), and set dp[i][d] += dp[j].get(d, 0) + 1.',
    'Numbers can be large — use BigInt differences or handle overflow carefully. The count itself fits in a 32-bit integer for reasonable inputs.',
  ],
  functionName: 'countArithmeticSlices',
  params: ['nums'],
  starterCode: {
    javascript: `function countArithmeticSlices(nums) {

}`,
    python: `def countArithmeticSlices(nums):
    `,
  },
  visibleTests: [
    { args: [[2, 4, 6, 8, 10]], expected: 7 },
    { args: [[7, 7, 7, 7, 7]], expected: 16 },
    { args: [[1, 2, 3, 4]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3, 6, 9, 12]], expected: 3 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
  ],
};
