import type { Problem } from '../types';

export const problem: Problem = {
  id: 'partition-array-maximum-difference',
  title: 'Partition Array Such That Maximum Difference Is K',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. You may partition \`nums\` into one or more **subsequences** such that each element in \`nums\` appears in exactly one of the subsequences.

A partition is valid if for each subsequence the **difference** between the maximum and minimum values is at most \`k\`.

Return the **minimum number of subsequences** needed for a valid partition.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= k <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,6,1,2,5], k = 2',
      output: '2',
      explanation: 'Sort to [1,2,3,5,6]. Group 1: [1,2,3] (max-min=2). Group 2: [5,6] (max-min=1).',
    },
    {
      input: 'nums = [1,2,3], k = 1',
      output: '2',
      explanation: 'Sort to [1,2,3]. Group 1: [1,2]. Group 2: [3].',
    },
    {
      input: 'nums = [2,2,4,5], k = 0',
      output: '3',
      explanation: 'Groups: [2,2], [4], [5]. Each group needs max-min = 0.',
    },
  ],
  hints: [
    'Sort the array — elements in the same subsequence need not be contiguous originally, so order doesn\'t matter.',
    'Greedily extend the current group as long as nums[i] - group_start <= k.',
    'When the difference exceeds k, start a new group at nums[i] and increment the count.',
  ],
  functionName: 'partitionArray',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function partitionArray(nums, k) {

}`,
    typescript: "function partitionArray(nums: number[], k: number): number {\n\n}",

    python: `def partitionArray(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 6, 1, 2, 5], 2], expected: 2 },
    { args: [[1, 2, 3], 1], expected: 2 },
    { args: [[2, 2, 4, 5], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 4], expected: 1 },
    { args: [[1, 3, 5, 7], 1], expected: 4 },
    { args: [[1, 2, 3, 4, 5], 0], expected: 5 },
  ],
};
