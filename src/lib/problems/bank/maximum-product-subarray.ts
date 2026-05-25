import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-subarray',
  title: 'Maximum Product Subarray',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an integer array \`nums\`, find a subarray that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a **32-bit** integer.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '-10 <= nums[i] <= 10',
    'The product of any subarray of nums is guaranteed to fit in a 32-bit integer.',
  ],
  examples: [
    { input: 'nums = [2,3,-2,4]', output: '6', explanation: '[2,3] has the largest product 6.' },
    { input: 'nums = [-2,0,-1]', output: '0', explanation: 'The result cannot be 2 because [-2,-1] is not a subarray.' },
  ],
  hints: [
    'Track both the max and min product ending at the current index.',
    'A negative number can turn a min into a max and vice versa.',
    'At each step: maxProd = max(nums[i], maxPrev * nums[i], minPrev * nums[i]).',
  ],
  functionName: 'maxProduct',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxProduct(nums) {\n\n}\n',
    python: 'def maxProduct(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, -2, 4]], expected: 6 },
    { args: [[-2, 0, -1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[-2]], expected: -2 },
    { args: [[2, -1, 1, 1]], expected: 2 },
    { args: [[-2, 3, -4]], expected: 24 },
  ],
};
