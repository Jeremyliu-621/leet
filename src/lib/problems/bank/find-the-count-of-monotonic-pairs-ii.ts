import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-count-of-monotonic-pairs-ii',
  title: 'Find the Count of Monotonic Pairs II',
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
    '`1 <= nums.length <= 2000`',
    '`0 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [2,2,2]',
      output: '10',
      explanation: 'Count non-decreasing sequences of length 3 with values in {0,1,2}. That is C(2+3,3) = 10.',
    },
    {
      input: 'nums = [5,5,5,5]',
      output: '126',
      explanation: 'C(5+4,4) = C(9,4) = 126.',
    },
    {
      input: 'nums = [2,3,2]',
      output: '4',
      explanation: 'Valid arr1 choices: (0,3,3),(1,3,3),(0,2,2),(0,2,3)... trace the DP to find 4 total.',
    },
  ],
  hints: [
    'For adjacent positions i and i+1, the constraint on arr1[i+1] is: arr1[i+1] ≥ arr1[i] + max(0, nums[i+1] − nums[i]).',
    'Let delta = max(0, nums[i+1] − nums[i]). Then new_dp[v′] = sum of dp[v] for all v ≤ v′ − delta. Use a prefix-sum array so each transition is O(max_val) rather than O(max_val²).',
    'Initialize dp[v] = 1 for v in [0, nums[0]]. For each step, compute the prefix sum of dp, then fill new_dp[v′] = prefix[v′ − delta] (where v′ − delta < 0 gives 0). Sum all dp values at the end for the answer.',
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
    { args: [[2, 3, 2]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[0, 0]], expected: 1 },
    { args: [[1, 1]], expected: 3 },
    { args: [[3, 2, 1]], expected: 4 },
    { args: [[1, 3]], expected: 3 },
    { args: [[2, 5, 3]], expected: 1 },
    { args: [[1, 2, 1]], expected: 1 },
    { args: [[100]], expected: 101 },
    { args: [[1000, 1000]], expected: 501501 },
    { args: [[1, 2, 3]], expected: 4 },
  ],
};
