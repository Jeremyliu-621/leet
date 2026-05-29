import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-three-numbers',
  title: 'Maximum Product of Three Numbers',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, find three numbers whose product is maximum and return the maximum product.`,
  constraints: [
    '3 <= nums.length <= 10^4',
    '-1000 <= nums[i] <= 1000',
  ],
  examples: [
    { input: 'nums = [1,2,3]', output: '6' },
    { input: 'nums = [1,2,3,4]', output: '24' },
    { input: 'nums = [-1,-2,-3]', output: '-6' },
  ],
  hints: [
    'Think about which three numbers give the maximum product. It is not always the three largest.',
    'If there are two large negative numbers, their product is a large positive. Compare: (top three positives) vs (two smallest negatives × largest positive).',
    'Sort nums. Return Math.max(nums[n-1]*nums[n-2]*nums[n-3], nums[0]*nums[1]*nums[n-1]) where n = nums.length.',
  ],
  functionName: 'maximumProduct',
  params: ['nums'],
  starterCode: {
    javascript: 'function maximumProduct(nums) {\n  // your code here\n}\n',
    typescript: 'function maximumProduct(nums: number[]): number {\n  // your code here\n  return 0;\n}',
    python: 'def maximumProduct(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 6 },
    { args: [[1, 2, 3, 4]], expected: 24 },
    { args: [[-1, -2, -3]], expected: -6 },
  ],
  hiddenTests: [
    { args: [[-1, -2, -3, -4]], expected: -6 },
    { args: [[-100, -99, 1, 2, 3]], expected: 29700 },
    { args: [[0, 0, 1]], expected: 0 },
    { args: [[0, -1, -2, -3]], expected: 0 },
    { args: [[-5, -4, -3, -2, -1]], expected: -6 },
    { args: [[1000, 999, 998, -1000, -999]], expected: 999000000 },
    { args: [[-1000, -999, 1]], expected: 999000 },
    { args: [[1, 2, 3, 4, 5]], expected: 60 },
    { args: [[0, 0, 0]], expected: 0 },
    { args: [[-1, 0, 1]], expected: 0 },
  ],
};
