import type { Problem } from '../types';

export const problem: Problem = {
  id: 'length-of-longest-subsequence-that-sums-to-target',
  title: 'Length of the Longest Subsequence That Sums to Target',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`target\`.

Return the **length** of the **longest subsequence** of \`nums\` that sums to \`target\`. If no such subsequence exists, return \`-1\`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '1 <= nums[i] <= 1000',
    '1 <= target <= 1000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], target = 9',
      output: '3',
      explanation: 'The longest subsequences that sum to 9 are [1,3,5] and [2,3,4], each of length 3.',
    },
    {
      input: 'nums = [4,1,3,2,1,5], target = 7',
      output: '4',
      explanation: 'The longest subsequence that sums to 7 is [1,3,2,1], which has length 4.',
    },
    {
      input: 'nums = [1,2], target = 4',
      output: '-1',
      explanation: 'No subsequence sums to 4.',
    },
  ],
  hints: [
    'Use a knapsack-style DP: dp[j] = maximum length of a subsequence that sums to j.',
    'Initialize dp[0] = 0 and all other entries to -Infinity.',
    'For each number, iterate j from target down to num and update dp[j] = max(dp[j], dp[j-num]+1) if dp[j-num] is valid.',
    'Return dp[target], or -1 if it is still -Infinity.',
  ],
  functionName: 'lengthOfLongestSubsequence',
  params: ['nums', 'target'],
  starterCode: {
    javascript: `function lengthOfLongestSubsequence(nums, target) {
  const dp = new Array(target + 1).fill(-Infinity);
  dp[0] = 0;
  for (const num of nums) {
    for (let s = target; s >= num; s--) {
      if (dp[s - num] !== -Infinity) dp[s] = Math.max(dp[s], dp[s - num] + 1);
    }
  }
  return dp[target] === -Infinity ? -1 : dp[target];
}`,
    typescript: `function lengthOfLongestSubsequence(nums: number[], target: number): number {
  const dp = new Array(target + 1).fill(-Infinity) as number[];
  dp[0] = 0;
  for (const num of nums) {
    for (let s = target; s >= num; s--) {
      if (dp[s - num]! !== -Infinity) dp[s] = Math.max(dp[s]!, dp[s - num]! + 1);
    }
  }
  return dp[target]! === -Infinity ? -1 : dp[target]!;
}`,
    python: `def lengthOfLongestSubsequence(nums, target):
    NEG_INF = float('-inf')
    dp = [NEG_INF] * (target + 1)
    dp[0] = 0
    for num in nums:
        for s in range(target, num - 1, -1):
            if dp[s - num] != NEG_INF:
                dp[s] = max(dp[s], dp[s - num] + 1)
    return dp[target] if dp[target] != NEG_INF else -1`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 9], expected: 3 },
    { args: [[4, 1, 3, 2, 1, 5], 7], expected: 4 },
    { args: [[1, 2], 4], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 5, 2, 1], 3], expected: 3 },
    { args: [[1], 1], expected: 1 },
    { args: [[1], 2], expected: -1 },
    { args: [[2, 3, 1, 4], 10], expected: 4 },
    { args: [[1, 2, 3], 6], expected: 3 },
    { args: [[5, 5, 5], 10], expected: 2 },
    { args: [[1000], 1000], expected: 1 },
    { args: [[1, 1, 1, 1], 3], expected: 3 },
  ],
};
