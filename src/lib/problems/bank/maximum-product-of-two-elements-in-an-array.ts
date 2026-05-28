import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-two-elements-in-an-array',
  title: 'Maximum Product of Two Elements in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given the array of integers \`nums\`, you will choose two **different** indices \`i\` and \`j\` of that array. Return the **maximum value** of \`(nums[i]-1) * (nums[j]-1)\`.`,
  constraints: [
    '2 <= nums.length <= 500',
    '1 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '12',
      explanation: 'If you choose the indices i=1 and i=2 (0-indexed), you get (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 12.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '16',
      explanation: 'Choose the two 5s: (5-1)*(5-1) = 16.',
    },
    {
      input: 'nums = [3,7]',
      output: '12',
      explanation: '(7-1)*(3-1) = 6*2 = 12.',
    },
  ],
  hints: [
    'The answer is maximized by using the two largest numbers in the array.',
    'Find the first and second maximum values. The answer is (max1 - 1) * (max2 - 1).',
    'You can sort the array descending and use the first two elements, or find the two maximums in a single pass.',
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
    { args: [[1, 1]], expected: 0 },
    { args: [[10, 2, 5, 2]], expected: 36 },
    { args: [[1, 1, 1, 1]], expected: 0 },
    { args: [[2, 3, 4, 5, 6]], expected: 20 },
    { args: [[100, 100]], expected: 9801 },
  ],
};
