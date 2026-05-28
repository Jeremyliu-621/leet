import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-subarrays-with-fixed-bounds',
  title: 'Count Subarrays With Fixed Bounds',
  difficulty: 'hard',
  tags: ['arrays', 'sliding-window'],
  description: `You are given an integer array \`nums\` and two integers \`minK\` and \`maxK\`.

A **fixed-bound subarray** of \`nums\` is a subarray that satisfies the following conditions:

- The **minimum** value in the subarray is equal to \`minK\`.
- The **maximum** value in the subarray is equal to \`maxK\`.

Return the **number** of fixed-bound subarrays.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i], minK, maxK <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,3,3,2,2], minK = 1, maxK = 3',
      output: '4',
      explanation: 'The fixed-bound subarrays are [1,3], [1,3,3], [1,3,3,2], and [1,3,3,2,2].',
    },
    {
      input: 'nums = [2,1,3,1,2], minK = 1, maxK = 3',
      output: '8',
      explanation: 'There are 8 subarrays where min = 1 and max = 3.',
    },
    {
      input: 'nums = [1,1,1], minK = 1, maxK = 1',
      output: '6',
      explanation: 'Every subarray has min = max = 1, giving all 6 subarrays.',
    },
  ],
  hints: [
    'Track the last index where an out-of-range element appeared (jbad), and the last indices where minK and maxK appeared.',
    'For each right endpoint i, valid left endpoints are between jbad+1 and min(jmin, jmax), inclusive.',
    'Count += max(0, min(jmin, jmax) - jbad).',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'minK', 'maxK'],
  starterCode: {
    javascript: 'function countSubarrays(nums, minK, maxK) {\n  \n}\n',
    python: 'def countSubarrays(nums, minK, maxK):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 3, 2, 2], 1, 3], expected: 4 },
    { args: [[2, 1, 3, 1, 2], 1, 3], expected: 8 },
    { args: [[1, 1, 1], 1, 1], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[2, 3], 2, 3], expected: 1 },
    { args: [[1, 2, 3], 1, 3], expected: 1 },
    { args: [[1, 2, 1, 2], 1, 2], expected: 6 },
    { args: [[5, 1, 3], 1, 5], expected: 2 },
  ],
};
