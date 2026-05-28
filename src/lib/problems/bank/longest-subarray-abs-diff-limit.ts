import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-subarray-abs-diff-limit',
  title: 'Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit',
  difficulty: 'medium',
  tags: ['sliding-window', 'heap'],
  description: `Given an array of integers \`nums\` and an integer \`limit\`, return the size of the longest **non-empty** subarray such that the absolute difference between any two elements of this subarray is less than or equal to \`limit\`.`,
  constraints: ['1 <= nums.length <= 10^5', '1 <= nums[i] <= 10^9', '0 <= limit <= 10^9'],
  examples: [
    { input: 'nums = [8,2,4,7], limit = 4', output: '2', explanation: 'All subarrays: [8]→0, [2]→0, [4]→0, [7]→0, [8,2]→6>4, [2,4]→2≤4, [4,7]→3≤4, [2,4,7]→5>4, etc. Max length = 2.' },
    { input: 'nums = [10,1,2,4,7,2], limit = 5', output: '4', explanation: 'Subarray [2,4,7,2] has max abs diff |7-2|=5≤5. Length = 4.' },
    { input: 'nums = [4,2,2,2,4,4,2,2], limit = 0', output: '3', explanation: '[2,2,2] has all same elements, max diff = 0.' },
  ],
  hints: [
    'Use a sliding window with two monotonic deques: one for the maximum and one for the minimum.',
    'When max - min > limit, advance the left pointer and remove elements from deques.',
    'The window size is right - left + 1 at each step.',
  ],
  functionName: 'longestSubarrayWithLimit',
  params: ['nums', 'limit'],
  starterCode: {
    javascript: 'function longestSubarrayWithLimit(nums, limit) {\n\n}\n',
    typescript: "function longestSubarrayWithLimit(nums: number[], limit: number): number {\n\n}",

    python: 'def longestSubarrayWithLimit(nums, limit):\n    pass\n',
  },
  visibleTests: [
    { args: [[8, 2, 4, 7], 4], expected: 2 },
    { args: [[10, 1, 2, 4, 7, 2], 5], expected: 4 },
    { args: [[4, 2, 2, 2, 4, 4, 2, 2], 0], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 3 },
    { args: [[1, 5, 1, 5], 0], expected: 1 },
    { args: [[1], 0], expected: 1 },
    { args: [[1, 2, 3], 10], expected: 3 },
  ],
};
