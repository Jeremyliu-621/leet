import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'max-subarray-debug-logic',
  title: 'Fix the Bug: Maximum Subarray',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  kind: 'debug',
  description: `The following implementation of **Maximum Subarray** (Kadane's algorithm) has a bug. Given an integer array \`nums\`, find the subarray with the largest sum and return its sum.

Find and fix the bug so all tests pass.

**Hint:** The bug is in the logic that decides when to start a new subarray.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]',
      output: '6',
      explanation: 'The subarray [4,-1,2,1] has the largest sum = 6.',
    },
    {
      input: 'nums = [1]',
      output: '1',
    },
  ],
  hints: [
    'Kadane\'s algorithm resets the current sum when it drops below the current element. What comparison is being used?',
    'The bug is `current + nums[i]` vs `nums[i]`. The code uses `current + nums[i] > 0` instead of `current + nums[i] > nums[i]` (or equivalently `current > 0`).',
    'Change `if (current + nums[i] > 0)` to `if (current > 0)` — we should start fresh from `nums[i]` whenever the running sum is negative.',
  ],
  functionName: 'maxSubArray',
  params: ['nums'],
  buggyCode: {
    javascript: `function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (current + nums[i] > 0) {
      current = current + nums[i];
    } else {
      current = nums[i];
    }
    if (current > best) best = current;
  }
  return best;
}`,
    python: `def maxSubArray(nums):
    current = nums[0]
    best = nums[0]
    for i in range(1, len(nums)):
        if current + nums[i] > 0:
            current = current + nums[i]
        else:
            current = nums[i]
        if current > best:
            best = current
    return best`,
  },
  starterCode: {
    javascript: `function maxSubArray(nums) {
  let current = nums[0];
  let best = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (current + nums[i] > 0) {
      current = current + nums[i];
    } else {
      current = nums[i];
    }
    if (current > best) best = current;
  }
  return best;
}`,
    python: `def maxSubArray(nums):
    current = nums[0]
    best = nums[0]
    for i in range(1, len(nums)):
        if current + nums[i] > 0:
            current = current + nums[i]
        else:
            current = nums[i]
        if current > best:
            best = current
    return best`,
  },
  visibleTests: [
    { args: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]], expected: 6 },
    { args: [[1]], expected: 1 },
    { args: [[5, 4, -1, 7, 8]], expected: 23 },
  ],
  hiddenTests: [
    { args: [[-1]], expected: -1 },
    { args: [[-2, -1]], expected: -1 },
    { args: [[-2, -3, -1, -5]], expected: -1 },
    { args: [[1, 2, 3, -2, 5]], expected: 9 },
    { args: [[-1, -2, 3, -1, 2]], expected: 4 },
  ],
};
