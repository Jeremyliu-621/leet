import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-two-elements-in-an-array',
  title: 'Maximum Product of Two Elements in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given the array of integers \`nums\`, you will choose two different indices \`i\` and \`j\` of that array. Return the **maximum value** of \`(nums[i]-1)*(nums[j]-1)\`.`,
  constraints: [
    '`2 <= nums.length <= 500`',
    '`1 <= nums[i] <= 10^3`',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '12',
      explanation: 'Choose indices i=1 and j=2 (0-indexed), nums[1]=4, nums[2]=5. (4-1)*(5-1) = 3*4 = 12.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '16',
      explanation: 'Choose the two 5s: (5-1)*(5-1) = 4*4 = 16.',
    },
  ],
  hints: [
    'The product (nums[i]-1)*(nums[j]-1) is maximized when both nums[i] and nums[j] are as large as possible.',
    'Sort the array and use the two largest elements.',
    `\`\`\`js
function maxProduct(nums) {
  nums.sort((a,b)=>b-a);
  return (nums[0]-1)*(nums[1]-1);
}\`\`\``,
  ],
  functionName: 'maxProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function maxProduct(nums) {

}`,
    python: `def maxProduct(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 2]], expected: 12 },
    { args: [[1, 5, 4, 5]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[3, 7]], expected: 12 },
    { args: [[10, 2, 5, 2]], expected: 36 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1000, 1000]], expected: 998001 },
    { args: [[2, 3, 4]], expected: 6 },
  ],
};
