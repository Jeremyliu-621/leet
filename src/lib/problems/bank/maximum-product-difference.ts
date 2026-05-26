import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-difference',
  title: 'Maximum Product Difference Between Two Pairs',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `The **product difference** between two pairs \`(a, b)\` and \`(c, d)\` is defined as \`(a * b) - (c * d)\`.

Given an integer array \`nums\`, choose four **distinct** indices \`w\`, \`x\`, \`y\`, and \`z\` such that the product difference between pairs \`(nums[w], nums[x])\` and \`(nums[y], nums[z])\` is **maximized**.

Return the **maximum** such product difference.`,
  constraints: [
    '4 <= nums.length <= 10^4',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [5,6,2,7,4]',
      output: '34',
      explanation: 'Choose w=1,x=3,y=2,z=4: (6*7)-(2*4) = 42-8 = 34.',
    },
    {
      input: 'nums = [4,2,5,9,7,4,8]',
      output: '64',
      explanation: 'The two largest are 9 and 8; the two smallest are 2 and 4. (9*8)-(2*4) = 72-8 = 64.',
    },
  ],
  hints: [
    'To maximize (a*b) - (c*d), you want a and b to be as large as possible and c and d to be as small as possible.',
    'Sort the array. The answer is (nums[n-1] * nums[n-2]) - (nums[0] * nums[1]).',
    `\`\`\`js
function maxProductDifference(nums) {
  nums.sort((a,b)=>a-b);
  const n = nums.length;
  return nums[n-1]*nums[n-2] - nums[0]*nums[1];
}\`\`\``,
  ],
  functionName: 'maxProductDifference',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxProductDifference(nums) {\n  \n}\n',
    python: 'def maxProductDifference(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 6, 2, 7, 4]], expected: 34 },
    { args: [[4, 2, 5, 9, 7, 4, 8]], expected: 64 },
    { args: [[1, 2, 3, 4]], expected: 10 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[1, 2, 100, 100]], expected: 9998 },
    { args: [[3, 7, 5, 1, 8, 6]], expected: 53 },
    { args: [[10000, 10000, 1, 1]], expected: 99999999 },
    { args: [[2, 3, 4, 5, 6]], expected: 24 },
  ],
};
