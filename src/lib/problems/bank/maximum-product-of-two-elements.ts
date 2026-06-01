import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-of-two-elements',
  title: 'Maximum Product of Two Elements',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `Given an integer array \`nums\`, choose two **distinct indices** \`i\` and \`j\` such that \`(nums[i] - 1) * (nums[j] - 1)\` is maximized. Return this maximum value.`,
  constraints: [
    '2 <= nums.length <= 500',
    '1 <= nums[i] <= 10^3',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,2]',
      output: '12',
      explanation: 'Choose indices 2 and 1: (5 - 1) * (4 - 1) = 4 * 3 = 12.',
    },
    {
      input: 'nums = [1,5,4,5]',
      output: '16',
      explanation: 'Choose the two 5s: (5 - 1) * (5 - 1) = 16.',
    },
    {
      input: 'nums = [3,7]',
      output: '12',
      explanation: '(7 - 1) * (3 - 1) = 6 * 2 = 12.',
    },
  ],
  hints: [
    'The expression (a - 1) * (b - 1) grows as a and b grow. You want the two largest elements.',
    'Sort the array descending and return (nums[0] - 1) * (nums[1] - 1). Alternatively, find the two largest in a single pass.',
    '`nums.sort((a, b) => b - a); return (nums[0] - 1) * (nums[1] - 1);`',
  ],
  functionName: 'maxProduct',
  params: ['nums'],
  starterCode: {
    javascript: `function maxProduct(nums) {
  nums.sort((a, b) => b - a);
  return (nums[0] - 1) * (nums[1] - 1);
}`,
    typescript: `function maxProduct(nums: number[]): number {
  nums.sort((a, b) => b - a);
  return (nums[0]! - 1) * (nums[1]! - 1);
}`,
    python: `def maxProduct(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    nums.sort(reverse=True)
    return (nums[0] - 1) * (nums[1] - 1)`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 2]], expected: 12 },
    { args: [[1, 5, 4, 5]], expected: 16 },
    { args: [[3, 7]], expected: 12 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 0 },
    { args: [[10, 2, 5, 1, 7]], expected: 54 },
    { args: [[2, 2]], expected: 1 },
    { args: [[1000, 999]], expected: 997002 },
    { args: [[5, 5, 5]], expected: 16 },
  ],
};
