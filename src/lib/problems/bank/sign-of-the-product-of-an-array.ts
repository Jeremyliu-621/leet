import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sign-of-the-product-of-an-array',
  title: 'Sign of the Product of an Array',
  difficulty: 'easy',
  tags: ['math'],
  description: `There is a function \`signFunc(x)\` that returns:
- \`1\` if \`x\` is positive.
- \`-1\` if \`x\` is negative.
- \`0\` if \`x\` is equal to \`0\`.

Given an integer array \`nums\`, return \`signFunc(product of all values in nums)\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [-1,-2,-3,-4,3,2,1]',
      output: '1',
      explanation: 'Product is 144 (positive). signFunc(144) = 1.',
    },
    {
      input: 'nums = [1,5,0,2,-3]',
      output: '0',
      explanation: 'Product is 0. signFunc(0) = 0.',
    },
    {
      input: 'nums = [-1,1,-1,1,-1]',
      output: '-1',
      explanation: 'Product is -1 (3 negative numbers). signFunc(-1) = -1.',
    },
  ],
  hints: [
    'You do not need to compute the actual product — it could overflow.',
    'If any element is 0, the product is 0, so return 0 immediately.',
    'Count the number of negative elements. An even count gives a positive product; odd gives negative.',
  ],
  functionName: 'arraySign',
  params: ['nums'],
  starterCode: {
    javascript: `function arraySign(nums) {\n  \n}`,
    typescript: `function arraySign(nums: number[]): number {\n  \n}`,
    python: `def arraySign(nums):\n    `,
  },
  visibleTests: [
    { args: [[-1, -2, -3, -4, 3, 2, 1]], expected: 1 },
    { args: [[1, 5, 0, 2, -3]], expected: 0 },
    { args: [[-1, 1, -1, 1, -1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3, -4, 3, 2, 1]], expected: 1 },
    { args: [[1, 5, 0, 2, -3]], expected: 0 },
    { args: [[-1, 1, -1, 1, -1]], expected: -1 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[-1, -1, -1, -1]], expected: 1 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[0]], expected: 0 },
    { args: [[-5, 3, -4]], expected: 1 },
  ],
};
