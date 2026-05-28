import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-equal-subset-sum',
  title: 'Partition Equal Subset Sum',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given a non-empty array of **positive** integers \`nums\`, return \`true\` if you can partition the array into two subsets such that the sum of elements in both subsets is equal, or \`false\` otherwise.`,
  constraints: [
    '1 <= nums.length <= 200',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1, 5, 11, 5]',
      output: 'true',
      explanation: 'The array can be partitioned as [1, 5, 5] and [11].',
    },
    {
      input: 'nums = [1, 2, 3, 5]',
      output: 'false',
      explanation: 'The array cannot be partitioned into equal sum subsets.',
    },
  ],
  hints: [
    'The total sum must be even — if it is odd, return false immediately. Then the problem reduces to: can you pick a subset that sums to `total / 2`?',
    'Use a 1D boolean DP array `dp` of size `target + 1` where `dp[j]` = true means "some subset of processed elements sums to j". Initialise `dp[0] = true`. For each number, iterate j from `target` down to `num` and set `dp[j] |= dp[j - num]`.',
    '`const target = sum / 2; const dp = new Array(target + 1).fill(false); dp[0] = true; for (const num of nums) for (let j = target; j >= num; j--) dp[j] = dp[j] || dp[j - num]; return dp[target];`',
  ],
  functionName: 'canPartition',
  params: ['nums'],
  starterCode: {
    javascript: 'function canPartition(nums) {\n  \n}\n',
    python: 'def canPartition(nums: list[int]) -> bool:\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 5, 11, 5]], expected: true },
    { args: [[1, 2, 3, 5]], expected: false },
    { args: [[2, 2, 3, 5]], expected: false },
    { args: [[3, 3, 3, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: false },
    { args: [[1, 1]], expected: true },
    { args: [[100, 100]], expected: true },
    { args: [[1, 2, 5]], expected: false },
    { args: [[14, 9, 8, 4, 3, 2]], expected: true },
  ],
};
