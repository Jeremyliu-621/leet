import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit',
  title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
  difficulty: 'medium',
  tags: ['sliding-window', 'heap', 'arrays'],
  description: `Given an array of integers \`nums\` and an integer \`limit\`, return the size of the **longest non-empty subarray** such that the absolute difference between any two elements of this subarray is less than or equal to \`limit\`.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '0 <= limit <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [8,2,4,7], limit = 4',
      output: '2',
      explanation: 'The longest subarray with abs diff ≤ 4 is [2,4] or [4,7], length 2.',
    },
    {
      input: 'nums = [10,1,2,4,7,2], limit = 5',
      output: '4',
      explanation: 'Subarray [2,4,7,2] has max diff 5 ≤ 5, length 4.',
    },
    {
      input: 'nums = [4,2,2,2,4,4,2,2], limit = 0',
      output: '3',
      explanation: 'Longest subarray where all elements are equal: [2,2,2] or [4,4,4], length 3.',
    },
  ],
  hints: [
    'Use a sliding window with two monotonic deques: one for the running max (decreasing) and one for the running min (increasing).',
    'For each right pointer, shrink the left pointer while max - min > limit.',
    'The max of the window is deque_max[0] and min is deque_min[0] (front of each deque).',
  ],
  functionName: 'longestSubarray',
  params: ['nums', 'limit'],
  starterCode: {
    javascript: 'function longestSubarray(nums, limit) {\n  \n}\n',
    typescript: "function longestSubarray(nums: number[], limit: number): number {\n  \n}",

    python: 'def longestSubarray(nums, limit):\n    pass\n',
  },
  visibleTests: [
    { args: [[8, 2, 4, 7], 4], expected: 2 },
    { args: [[10, 1, 2, 4, 7, 2], 5], expected: 4 },
    { args: [[4, 2, 2, 2, 4, 4, 2, 2], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1], 0], expected: 1 },
    { args: [[1, 1, 1], 0], expected: 3 },
    { args: [[1, 5, 6, 7, 8, 10, 6, 5, 6], 4], expected: 5 },
    { args: [[1, 2, 3, 4, 100], 3], expected: 4 },
  ],
};
