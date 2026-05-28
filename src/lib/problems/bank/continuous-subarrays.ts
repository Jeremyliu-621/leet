import type { Problem } from '../types';

export const problem: Problem = {
  id: 'continuous-subarrays',
  title: 'Continuous Subarrays',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `You are given a **0-indexed** integer array \`nums\`. A subarray of \`nums\` with indices \`[l, r]\` is **continuous** if the following condition is met:

- For every pair \`i, j\` such that \`l <= i, j <= r\`, \`|nums[i] - nums[j]| <= 2\`.

Return the **total number of continuous subarrays**.

A subarray is a contiguous **non-empty** sequence of elements within an array.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [5,4,2,4]',
      output: '8',
      explanation: 'Valid subarrays: [5],[4],[2],[4],[5,4],[4,2],[2,4],[4,2,4]. [5,4,2] is invalid (|5-2|=3>2).',
    },
    {
      input: 'nums = [1,2,3]',
      output: '6',
      explanation: 'All 6 subarrays are valid since |max-min| <= 2 for every window.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '6',
      explanation: 'All 6 subarrays are valid since all elements are equal.',
    },
  ],
  hints: [
    'A subarray is continuous iff max - min <= 2.',
    'Use a sliding window with two monotone deques: one for the running max, one for the running min.',
    'When the window becomes invalid (max - min > 2), advance the left pointer and remove stale deque fronts.',
    'Each valid window [l..r] contributes r - l + 1 subarrays.',
  ],
  functionName: 'continuousSubarrays',
  params: ['nums'],
  starterCode: {
    javascript: 'function continuousSubarrays(nums) {\n  \n}\n',
    typescript: "function continuousSubarrays(nums: number[]): number {\n  \n}",

    python: 'def continuousSubarrays(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 4, 2, 4]], expected: 8 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[1, 1, 1]], expected: 6 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 12 },
    { args: [[89, 1, 2, 3]], expected: 7 },
    { args: [[1, 2, 1, 2, 1]], expected: 15 },
    { args: [[3, 3, 3, 3, 3]], expected: 15 },
  ],
};
