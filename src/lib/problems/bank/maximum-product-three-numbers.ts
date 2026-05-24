import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-three-numbers',
  title: 'Maximum Product of Three Numbers',
  difficulty: 'easy',
  tags: ['math', 'arrays'],
  description: `Given an integer array \`nums\`, find three numbers whose product is maximum and return the maximum product.`,
  constraints: [
    '`3 <= nums.length <= 10^4`',
    '`-1000 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '6',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '24',
    },
    {
      input: 'nums = [-1,-2,-3]',
      output: '-6',
    },
  ],
  hints: [
    'Sort the array. The answer is either the product of the three largest values, or the product of the two smallest values (which could be negative) times the largest value.',
  ],
  functionName: 'maximumProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumProduct(nums) {

}`,
    python: `def maximumProduct(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[1, 2, 3, 4]], expected: 24 },
    { args: [[-1, -2, -3]], expected: -6 },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3, -4]], expected: -6 },
    { args: [[-100, -98, 1, 2, 3]], expected: 29400 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[-5, -4, 1, 2, 3]], expected: 60 },
  ],
};
