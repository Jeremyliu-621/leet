import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-elements-positive',
  title: 'All Elements Positive',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, return \`true\` if **all elements** are strictly positive (greater than 0), or \`false\` otherwise.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5]',
      output: 'true',
      explanation: 'Every element is greater than 0.',
    },
    {
      input: 'nums = [1,0,3]',
      output: 'false',
      explanation: '0 is not strictly positive.',
    },
    {
      input: 'nums = [-1,2,3]',
      output: 'false',
      explanation: '-1 is not strictly positive.',
    },
  ],
  hints: [
    'Return true if every element v satisfies v > 0.',
    'In JavaScript, nums.every(v => v > 0) is the idiomatic one-liner.',
    'In Python, all(v > 0 for v in nums) achieves the same result.',
  ],
  functionName: 'allElementsPositive',
  params: ['nums'],
  starterCode: {
    javascript: `function allElementsPositive(nums) {
  return nums.every(v => v > 0);
}`,
    typescript: `function allElementsPositive(nums: number[]): boolean {
  return nums.every(v => v > 0);
}`,
    python: `def allElementsPositive(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    return all(v > 0 for v in nums)`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5]], expected: true },
    { args: [[1, 0, 3]], expected: false },
    { args: [[-1, 2, 3]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[0]], expected: false },
    { args: [[-1]], expected: false },
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 2, -3]], expected: false },
    { args: [[100, 200, 300]], expected: true },
    { args: [[1, 1, 1, 1]], expected: true },
    { args: [[1, 2, 0, 4]], expected: false },
  ],
};
