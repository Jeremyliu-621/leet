import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-two-elements',
  title: 'Maximum Product of Two Elements in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given the array of integers \`nums\`, return the **maximum value** of \`(nums[i] - 1) * (nums[j] - 1)\` where \`i != j\`.`,
  constraints: [
    '`2 <= nums.length <= 500`',
    '`1 <= nums[i] <= 10^3`',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '12',
      explanation: '(5-1)*(4-1) = 4*3 = 12.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '16',
      explanation: '(5-1)*(5-1) = 4*4 = 16.',
    },
    {
      input: 'nums = [3,7]',
      output: '12',
      explanation: '(7-1)*(3-1) = 6*2 = 12.',
    },
  ],
  hints: [
    'The product (a-1)*(b-1) is maximized when a and b are the two largest values in the array.',
    'Find the two largest values in one pass (or sort).',
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
    typescript: "function maxProduct(nums: number[]): number {\n\n}",

    python: `def maxProduct(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 2]], expected: 12 },
    { args: [[1, 5, 4, 5]], expected: 16 },
    { args: [[3, 7]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[10, 2, 5, 2]], expected: 36 },
    { args: [[1, 1]], expected: 0 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1000, 999]], expected: 999 * 998 },
  ],
};
