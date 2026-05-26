import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-subarray-kadane',
  title: 'Maximum Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'sliding-window'],
  description: `Given an integer array \`nums\`, find the **subarray** with the largest sum, and return its **sum**.

A subarray is a contiguous part of an array.`,
  examples: [
    { input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', output: '6', explanation: 'Subarray [4,-1,2,1] has the largest sum = 6.' },
    { input: 'nums = [1]', output: '1' },
    { input: 'nums = [5,4,-1,7,8]', output: '23' },
  ],
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  functionName: 'maxSubArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxSubArray(nums) {\n  // your code here\n}\n',
    python: 'def maxSubArray(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'Kadane\'s algorithm: maintain a running sum `current` and a global `best`.',
    'At each element, `current = max(nums[i], current + nums[i])` — either start a new subarray at this element or extend the previous one.',
    'Update `best = max(best, current)` at each step.',
  ],
  visibleTests: [
    { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { args: [[1]], expected: 1 },
    { args: [[5, 4, -1, 7, 8]], expected: 23 },
  ],
  hiddenTests: [
    { args: [[-1]], expected: -1 },
    { args: [[-2, -1]], expected: -1 },
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[0, -1, 0]], expected: 0 },
  ],
};
