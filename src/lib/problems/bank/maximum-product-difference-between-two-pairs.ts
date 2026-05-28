import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-difference-between-two-pairs',
  title: 'Maximum Product Difference Between Two Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `The **product difference** between two pairs \`(a, b)\` and \`(c, d)\` is defined as \`(a * b) - (c * d)\`.

Given an integer array \`nums\`, choose four **distinct** indices \`w\`, \`x\`, \`y\`, and \`z\` such that the **product difference** between pairs \`(nums[w], nums[x])\` and \`(nums[y], nums[z])\` is **maximized**.

Return the **maximum** such product difference.`,
  constraints: [
    '4 <= nums.length <= 10^4',
    '1 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [5,6,2,7,4]',
      output: '34',
      explanation: 'Choose (7,6) and (2,4): 7*6 - 2*4 = 42 - 8 = 34.',
    },
    {
      input: 'nums = [4,2,5,9,7,4,8]',
      output: '64',
      explanation: 'Choose (9,8) and (2,4): 9*8 - 2*4 = 72 - 8 = 64.',
    },
  ],
  hints: [
    'To maximize the product difference, you want to maximize the first product and minimize the second product.',
    'The maximum product of two elements is always formed by the two largest values; the minimum product is formed by the two smallest values.',
    'Sort the array: answer = nums[n-1] * nums[n-2] - nums[0] * nums[1]. Time: O(n log n).',
  ],
  functionName: 'maxProductDifference',
  params: ['nums'],
  starterCode: {
    javascript: 'function maxProductDifference(nums) {\n\n}\n',
    typescript: "function maxProductDifference(nums: number[]): number {\n\n}",

    python: 'def maxProductDifference(nums: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [[5,6,2,7,4]], expected: 34 },
    { args: [[4,2,5,9,7,4,8]], expected: 64 },
  ],
  hiddenTests: [
    { args: [[1,2,3,4]], expected: 10 },
    { args: [[1,1,1,10000]], expected: 9999 },
    { args: [[3,4,5,6]], expected: 18 },
    { args: [[1,2,3,4,5,6,7,8,9,10]], expected: 88 },
  ],
};
