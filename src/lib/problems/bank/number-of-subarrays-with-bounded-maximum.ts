import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-subarrays-with-bounded-maximum',
  title: 'Number of Subarrays with Bounded Maximum',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given an integer array \`nums\` and two integers \`left\` and \`right\`, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range \`[left, right]\`.

The test cases are generated so that the answer will fit in a **32-bit** integer.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^9',
    '0 <= left <= right <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [2,1,4,3], left = 2, right = 3',
      output: '3',
      explanation: 'Valid subarrays: [2], [2,1], [3] — each has max in [2,3].',
    },
    {
      input: 'nums = [2,9,2,5,6], left = 2, right = 8',
      output: '7',
    },
  ],
  hints: [
    'Track the last index where nums[i] > right (call it `lo`) and last index where nums[i] >= left (call it `hi`).',
    'For each index i, if nums[i] > right, reset both pointers. Otherwise, the count of valid subarrays ending at i is max(0, hi - lo).',
  ],
  functionName: 'numSubarrayBoundedMax',
  params: ['nums', 'left', 'right'],
  starterCode: {
    javascript: 'function numSubarrayBoundedMax(nums, left, right) {\n\n}\n',
    python: 'def numSubarrayBoundedMax(nums, left, right):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 4, 3], 2, 3], expected: 3 },
    { args: [[2, 9, 2, 5, 6], 2, 8], expected: 7 },
  ],
  hiddenTests: [
    { args: [[1, 3, 5, 2, 7, 5], 3, 5], expected: 9 },
    { args: [[1], 1, 1], expected: 1 },
    { args: [[5], 1, 4], expected: 0 },
    { args: [[1, 2, 3], 2, 2], expected: 2 },
  ],
};
