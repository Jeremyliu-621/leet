import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-positive-integer-that-exists-with-negative',
  title: 'Largest Positive Integer That Exists With Its Negative',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\` that **does not contain** any zeros, find the **largest positive** integer \`k\` such that \`-k\` also exists in the array.

Return the positive integer \`k\`. If there is no such integer, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-1000 <= nums[i] <= 1000',
    'nums[i] != 0',
  ],
  examples: [
    {
      input: 'nums = [-1,2,-3,3]',
      output: '3',
      explanation: 'Both 3 and -3 exist. k=3 is the largest such positive integer.',
    },
    {
      input: 'nums = [-1,10,6,7,-7,1]',
      output: '7',
      explanation: 'Both 7 and -7, and 1 and -1 exist. Max is 7.',
    },
    {
      input: 'nums = [-10,8,6,7,-2,-3]',
      output: '-1',
      explanation: 'No positive k has -k in the array.',
    },
  ],
  hints: [
    'Store all numbers in a set.',
    'For each positive x, check if -x is also in the set.',
  ],
  functionName: 'findMaxK',
  params: ['nums'],
  starterCode: {
    javascript: `function findMaxK(nums) {

}`,
    python: `def findMaxK(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-1, 2, -3, 3]], expected: 3 },
    { args: [[-1, 10, 6, 7, -7, 1]], expected: 7 },
    { args: [[-10, 8, 6, 7, -2, -3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, -1]], expected: 1 },
    { args: [[1, 2]], expected: -1 },
    { args: [[-5, 5, -3, 3, -1, 1]], expected: 5 },
    { args: [[-1]], expected: -1 },
  ],
};
