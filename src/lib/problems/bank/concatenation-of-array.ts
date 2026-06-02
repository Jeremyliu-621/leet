import type { Problem } from '../types';

export const problem: Problem = {
  id: 'concatenation-of-array',
  title: 'Concatenation of Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` of length \`n\`, you want to create an array \`ans\` of length \`2n\` where \`ans[i] == nums[i]\` and \`ans[i + n] == nums[i]\` for \`0 <= i < n\` (**0-indexed**).

Specifically, \`ans\` is the **concatenation** of two \`nums\` arrays.

Return the array \`ans\`.`,
  constraints: [
    '`n == nums.length`',
    '`1 <= n <= 1000`',
    '`1 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,2,1]',
      output: '[1,2,1,1,2,1]',
    },
    {
      input: 'nums = [1,3,2,1]',
      output: '[1,3,2,1,1,3,2,1]',
    },
  ],
  hints: [
    'Simply concatenate nums with itself.',
    'Use spread: return [...nums, ...nums]. Or nums.concat(nums).',
    'return [...nums,...nums];',
  ],
  functionName: 'getConcatenation',
  params: ['nums'],
  starterCode: {
    javascript: `function getConcatenation(nums) {
  return [...nums, ...nums];
}`,
    typescript: `function getConcatenation(nums: number[]): number[] {
  return [...nums, ...nums];
}`,
    python: `def getConcatenation(nums):
    return nums + nums`,
  },
  visibleTests: [
    { args: [[1, 2, 1]], expected: [1, 2, 1, 1, 2, 1] },
    { args: [[1, 3, 2, 1]], expected: [1, 3, 2, 1, 1, 3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1, 1] },
    { args: [[1, 2]], expected: [1, 2, 1, 2] },
    { args: [[5, 4, 3]], expected: [5, 4, 3, 5, 4, 3] },
    { args: [[1000, 1000]], expected: [1000, 1000, 1000, 1000] },
  ],
};
