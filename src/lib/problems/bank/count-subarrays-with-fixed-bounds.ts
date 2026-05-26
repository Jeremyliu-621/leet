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

Return *the **number** of fixed-bound subarrays*.

A **subarray** is a **contiguous** part of an array.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i], minK, maxK <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [1,3,5,2,7,5], minK = 1, maxK = 5',
      output: '2',
      explanation: 'The fixed-bound subarrays are [1,3,5] and [1,3,5,2].',
    },
    {
      input: 'nums = [1,1,1,1], minK = 1, maxK = 1',
      output: '10',
      explanation: 'Every subarray of nums has minimum and maximum value equal to 1.',
    },
  ],
  hints: [
    'Maintain three pointers: lastBad (last index out of [minK, maxK]), lastMin (last index where nums[i]==minK), lastMax (last index where nums[i]==maxK).',
    'For each right end, the count of valid subarrays ending here is max(0, min(lastMin, lastMax) - lastBad).',
    'Any element outside [minK, maxK] resets lastBad to the current index.',
  ],
  functionName: 'countSubarrays',
  params: ['nums', 'minK', 'maxK'],
  starterCode: {
    javascript: 'function countSubarrays(nums, minK, maxK) {\n\n}',
    python: 'def countSubarrays(nums, minK, maxK):\n    pass',
  },
  visibleTests: [
    { args: [[1, 3, 5, 2, 7, 5], 1, 5], expected: 2 },
    { args: [[1, 1, 1, 1], 1, 1], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1], 1, 1], expected: 1 },
    { args: [[1, 2], 1, 2], expected: 1 },
    { args: [[2, 1, 3], 1, 3], expected: 2 },
    { args: [[5, 1, 3, 5, 1, 5], 1, 5], expected: 13 },
    { args: [[3, 3, 3], 3, 3], expected: 6 },
  ],
};
