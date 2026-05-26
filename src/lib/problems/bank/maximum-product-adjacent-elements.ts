import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-adjacent-elements',
  title: 'Maximum Product of Adjacent Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, find the **adjacent pair** \`(nums[i], nums[i+1])\` that yields the maximum product, and return that product.

Note: Only adjacent pairs (consecutive elements) are considered.`,
  constraints: [
    '`2 <= nums.length <= 500`',
    '`1 <= nums[i] <= 10^3`',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '20',
      explanation: 'Adjacent products: 3×4=12, 4×5=20, 5×2=10. Maximum is 20.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '20',
      explanation: 'Adjacent products: 1×5=5, 5×4=20, 4×5=20. Maximum is 20.',
    },
    {
      input: 'nums = [3,7]',
      output: '21',
      explanation: 'Only one adjacent pair: 3×7=21.',
    },
  ],
  hints: [
    'Iterate through adjacent pairs and track the maximum product.',
    "Loop from index 0 to nums.length-2. At each step compute nums[i]*nums[i+1] and compare with the running maximum.",
    'let m=nums[0]*nums[1];for(let i=1;i<nums.length-1;i++)if(nums[i]*nums[i+1]>m)m=nums[i]*nums[i+1];return m;',
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
    { args: [[3, 4, 5, 2]], expected: 20 },
    { args: [[1, 5, 4, 5]], expected: 20 },
    { args: [[3, 7]], expected: 21 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3, 4, 5]], expected: 20 },
    { args: [[100, 100]], expected: 10000 },
    { args: [[5, 4, 3, 2, 1]], expected: 20 },
    { args: [[2, 3, 4, 5, 6, 7]], expected: 42 },
  ],
};
