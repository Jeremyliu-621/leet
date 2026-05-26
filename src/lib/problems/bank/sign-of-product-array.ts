import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sign-of-product-array',
  title: 'Sign of the Product of an Array',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `There is a function \`signFunc(x)\` that returns:

- \`1\` if \`x\` is positive.
- \`-1\` if \`x\` is negative.
- \`0\` if \`x\` is equal to \`0\`.

You are given an integer array \`nums\`. Let \`product\` be the product of all values in the array \`nums\`.

Return \`signFunc(product)\`.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`-100 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [-1,-2,-3,-4,3,2,1]',
      output: '1',
      explanation: 'Product = 144. signFunc(144) = 1.',
    },
    {
      input: 'nums = [1,5,0,2,-3]',
      output: '0',
    },
    {
      input: 'nums = [-1,1,-1,1,-1]',
      output: '-1',
    },
  ],
  hints: [
    'If any element is 0, return 0. Count the number of negative numbers. If the count is odd, return -1; otherwise return 1.',
    'You don\'t need the actual product. If any element is `0`, return `0`. Count negatives: even count → `1`, odd count → `-1`.',
    `\`\`\`js
if (nums.includes(0)) return 0;
return nums.filter(x => x < 0).length % 2 === 0 ? 1 : -1;\`\`\``
  ],
  functionName: 'arraySign',
  params: ['nums'],
  starterCode: {
    javascript: `function arraySign(nums) {

}`,
    python: `def arraySign(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-1, -2, -3, -4, 3, 2, 1]], expected: 1 },
    { args: [[1, 5, 0, 2, -3]], expected: 0 },
    { args: [[-1, 1, -1, 1, -1]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1]], expected: -1 },
    { args: [[0]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
    { args: [[-1, -1]], expected: 1 },
    { args: [[-1, 2, -3]], expected: 1 },
  ],
};
