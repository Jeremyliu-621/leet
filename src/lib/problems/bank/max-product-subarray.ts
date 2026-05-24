import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-product-subarray',
  title: 'Maximum Product Subarray',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, find the contiguous subarray (containing at least one element) that has the **largest product**, and return that product.

Unlike the maximum sum subarray, a **negative number can become a maximum** when multiplied by another negative number. You must track both the current maximum and current minimum at each step.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10 <= nums[i] <= 10',
    'The product of any subarray is guaranteed to fit in a 32-bit integer.',
  ],
  examples: [
    {
      input: 'nums = [2,3,-2,4]',
      output: '6',
      explanation: '[2,3] has the largest product = 6.',
    },
    {
      input: 'nums = [-2,0,-1]',
      output: '0',
      explanation: 'The result cannot be -2 or -1 because a subarray must be contiguous. [0] gives 0.',
    },
    {
      input: 'nums = [-2,3,-4]',
      output: '24',
      explanation: '[-2,3,-4] = 24. Two negatives multiply to a positive.',
    },
  ],
  hints: [
    'Unlike maximum sum (Kadane\'s), you cannot simply drop a negative subarray — a negative times a future negative yields a large positive. You need to track both the max and min product ending at each position.',
    'At each index `i`, maintain `curMax` (max product ending here) and `curMin` (min product ending here). Update them as `Math.max(nums[i], curMax * nums[i], curMin * nums[i])` and the symmetric min.',
    '`let curMax = nums[0], curMin = nums[0], best = nums[0]; for (let i = 1; i < nums.length; i++) { const v = nums[i]; const newMax = Math.max(v, curMax*v, curMin*v); curMin = Math.min(v, curMax*v, curMin*v); curMax = newMax; if (curMax > best) best = curMax; } return best;`',
  ],
  functionName: 'maxProductSubarray',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxProductSubarray(nums) {\n  // your code here\n}\n',
    python: 'def maxProductSubarray(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, -2, 4]], expected: 6 },
    { args: [[-2, 0, -1]], expected: 0 },
    { args: [[-2, 3, -4]], expected: 24 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: -1 },
    { args: [[0, 2]], expected: 2 },
    { args: [[-2, -3]], expected: 6 },
    { args: [[2, -5, -2, -4, 3]], expected: 24 },
    { args: [[-1, -2, -3, -4]], expected: 24 },
  ],
};
