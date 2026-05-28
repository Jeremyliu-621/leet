import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-k-equal-subset-sum',
  title: 'Partition to K Equal Sum Subsets',
  difficulty: 'medium',
  tags: ['backtracking', 'dynamic-programming'],
  description: `Given an integer array \`nums\` and an integer \`k\`, return \`true\` if it is possible to divide this array into \`k\` non-empty subsets whose sums are all equal.`,
  constraints: [
    '1 <= k <= nums.length <= 16',
    '1 <= nums[i] <= 10^4',
    'The frequency of each element is in the range [1, 4]',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,3,5,2,1], k = 4',
      output: 'true',
      explanation: 'Possible partition: (5), (1,4), (2,3), (2,3)',
    },
    {
      input: 'nums = [1,2,3,4], k = 3',
      output: 'false',
    },
  ],
  hints: [
    'First check: if the total sum is not divisible by k, return false immediately.',
    'Try to fill k buckets each of size sum/k using backtracking. Sort nums in descending order to prune early — large numbers fail quickly.',
    'Track which numbers have been used with a bitmask or a visited array. When a bucket fills up, start filling the next one.',
  ],
  functionName: 'canPartitionKSubsets',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function canPartitionKSubsets(nums, k) {\n\n}\n',
    python: 'def canPartitionKSubsets(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 3, 2, 3, 5, 2, 1], 4], expected: true },
    { args: [[1, 2, 3, 4], 3], expected: false },
  ],
  hiddenTests: [
    { args: [[2, 2, 2, 2, 3, 4, 5], 4], expected: false },
    { args: [[1, 1, 1, 1, 2, 2, 2, 2], 4], expected: true },
    { args: [[10], 1], expected: true },
    { args: [[5, 5, 5, 5], 2], expected: true },
  ],
};
