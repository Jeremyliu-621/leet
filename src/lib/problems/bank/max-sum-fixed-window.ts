import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-sum-fixed-window',
  title: 'Maximum Sum of Fixed-Length Subarray',
  difficulty: 'easy',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the **maximum sum** among all contiguous subarrays of length exactly \`k\`.

A subarray is a contiguous part of the array. You must consider every possible window of length \`k\` and return the largest sum found.`,
  constraints: [
    '1 <= k <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,1,5,1,3,2], k = 3',
      output: '9',
      explanation: 'The subarray [5,1,3] has sum 9, which is the largest among all windows of length 3.',
    },
    {
      input: 'nums = [2,3,4,1,5], k = 2',
      output: '7',
      explanation: 'Windows: [2,3]=5, [3,4]=7, [4,1]=5, [1,5]=6. Maximum is 7.',
    },
    {
      input: 'nums = [1,4,2,10,23,3,1,0,20], k = 4',
      output: '39',
      explanation: 'The window [4,2,10,23] has sum 39.',
    },
  ],
  functionName: 'maxSumFixedWindow',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSumFixedWindow(nums, k) {\n  // your code here\n}\n',
    python: 'def maxSumFixedWindow(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
    { args: [[2, 3, 4, 1, 5], 2], expected: 7 },
    { args: [[1, 4, 2, 10, 23, 3, 1, 0, 20], 4], expected: 39 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5, 5], 2], expected: 10 },
    { args: [[-1, -2, -3, -4], 2], expected: -3 },
    { args: [[1], 1], expected: 1 },
    { args: [[100, 1, 1, 1, 100], 3], expected: 102 },
    { args: [[3, 3, 3, 3, 3], 3], expected: 9 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3], expected: 27 },
    { args: [[10, 9, 8, 7, 6], 2], expected: 19 },
  ],
  hints: [
    'A brute-force approach computes the sum of every window from scratch — that works but is O(n·k). Can you reuse information from the previous window?',
    'When the window slides one step to the right, you add one new element on the right and drop one old element on the left. Update a running sum in O(1) per step.',
    'Compute the sum of the first window `nums[0..k-1]`. Then iterate from index `k` to `n-1`: `windowSum += nums[i] - nums[i-k]`. Track the maximum after each update.',
  ],
};
