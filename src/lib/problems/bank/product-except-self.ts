import type { Problem } from '../types';

export const problem: Problem = {
  id: 'product-except-self',
  title: 'Product of Array Except Self',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return an array \`answer\` such that \`answer[i]\` is equal to the product of all the elements of \`nums\` except \`nums[i]\`.

The product of any prefix or suffix of \`nums\` is **guaranteed** to fit in a 32-bit integer.

You must write an algorithm that runs in **O(n)** time and without using the division operation.`,
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '[24,12,8,6]',
      explanation: 'answer[0]=2*3*4=24, answer[1]=1*3*4=12, answer[2]=1*2*4=8, answer[3]=1*2*3=6.',
    },
    {
      input: 'nums = [-1,1,0,-3,3]',
      output: '[0,0,9,0,0]',
    },
  ],
  constraints: [
    '2 <= nums.length <= 10^5',
    '-30 <= nums[i] <= 30',
    'The product of any prefix or suffix fits in a 32-bit integer.',
  ],
  functionName: 'productExceptSelf',
  params: ['nums'],
  starterCode: {
    javascript: 'function productExceptSelf(nums) {\n  // your code here\n}\n',
    python: 'def productExceptSelf(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'Build a prefix product array where prefix[i] = product of nums[0..i-1]. Similarly build a suffix product array.',
    'The answer at index i is prefix[i] * suffix[i].',
    'You can do this in O(1) extra space (not counting the output) by using the output array for the prefix pass, then multiplying in the suffix in a second pass.',
  ],
  visibleTests: [
    { args: [[1, 2, 3, 4]], expected: [24, 12, 8, 6] },
    { args: [[-1, 1, 0, -3, 3]], expected: [0, 0, 9, 0, 0] },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: [1, 1] },
    { args: [[2, 3]], expected: [3, 2] },
    { args: [[1, 2, 3]], expected: [6, 3, 2] },
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[-1, -2, -3]], expected: [6, 3, 2] },
  ],
};
