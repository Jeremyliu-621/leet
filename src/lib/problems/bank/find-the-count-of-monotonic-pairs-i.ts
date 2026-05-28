import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-count-of-monotonic-pairs-i',
  title: 'Find the Count of Monotonic Pairs I',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'math'],
  description: `You are given an array of **non-negative** integers \`nums\`. We define a **pair of arrays** \`(arr1, arr2)\` as **monotonic** if:
- The lengths of both arrays are equal to \`nums.length\`.
- \`arr1\` is **monotonically non-decreasing**.
- \`arr2\` is **monotonically non-increasing**.
- \`arr1[i] + arr2[i] == nums[i]\` for all \`0 <= i < nums.length\`.

Return the count of **monotonic pairs**.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '`1 <= nums.length <= 50`',
    '`0 <= nums[i] <= 50`',
  ],
  examples: [
    {
      input: 'nums = [2,2,2]',
      output: '10',
      explanation: 'Count non-decreasing sequences of length 3 with values in {0,1,2} (arr2 = 2 − arr1 is then non-increasing). That is C(2+3,3) = 10.',
    },
    {
      input: 'nums = [5,5,5,5]',
      output: '126',
    },
    {
      input: 'nums = [1,2,3]',
      output: '4',
      explanation: 'Valid pairs: (0,1,2), (0,1,3), (0,2,3), (1,2,3) for arr1.',
    },
  ],
  hints: [
    'For adjacent positions i and i+1: arr1[i+1] ≥ arr1[i], and arr2[i+1] ≤ arr2[i] means arr1[i+1] − arr1[i] ≥ nums[i+1] − nums[i].',
    'Combined: arr1[i+1] ≥ arr1[i] + max(0, nums[i+1] − nums[i]).',
    'Use DP: let dp[v] = number of ways with arr1[i] = v. Transition: for each new value v′, sum dp[v] for all valid previous values v (use prefix sums for O(n × m) total).',
  ],
  functionName: 'countOfPairs',
  params: ['nums'],
  starterCode: {
    javascript: `function countOfPairs(nums) {

}`,
    typescript: 'function countOfPairs(nums: number[]): number {\n\n}',
    python: `def countOfPairs(nums):
    pass`,
  },
  visibleTests: [
    { args: [[2, 2, 2]], expected: 10 },
    { args: [[5, 5, 5, 5]], expected: 126 },
    { args: [[1, 2, 3]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[3, 2, 1]], expected: 4 },
    { args: [[1, 1]], expected: 3 },
    { args: [[0]], expected: 1 },
    { args: [[1, 0]], expected: 1 },
    { args: [[50, 50, 50]], expected: 23426 },
    { args: [[1, 3, 2]], expected: 1 },
  ],
};
