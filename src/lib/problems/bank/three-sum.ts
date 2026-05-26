import type { Problem } from '../types';

export const problem: Problem = {
  id: 'three-sum',
  title: '3Sum',
  difficulty: 'medium',
  tags: ['two-pointers', 'arrays'],
  description: `Given an integer array \`nums\`, return all the triplets \`[nums[i], nums[j], nums[k]]\` such that \`i != j\`, \`i != k\`, and \`j != k\`, and \`nums[i] + nums[j] + nums[k] == 0\`.

Notice that the solution set must not contain duplicate triplets.

Return the triplets sorted in non-decreasing order, and the list of triplets sorted lexicographically.`,
  examples: [
    {
      input: 'nums = [-1,0,1,2,-1,-4]',
      output: '[[-1,-1,2],[-1,0,1]]',
      explanation: 'The distinct triplets are [-1,-1,2] and [-1,0,1].',
    },
    {
      input: 'nums = [0,1,1]',
      output: '[]',
      explanation: 'No triplet sums to 0.',
    },
    {
      input: 'nums = [0,0,0]',
      output: '[[0,0,0]]',
    },
  ],
  constraints: [
    '3 <= nums.length <= 3000',
    '-10^5 <= nums[i] <= 10^5',
  ],
  functionName: 'threeSum',
  params: ['nums'],
  starterCode: {
    javascript: 'function threeSum(nums) {\n  // your code here\n}\n',
    python: 'def threeSum(nums):\n    # your code here\n    pass\n',
  },
  hints: [
    'Sort the array first. Then fix the first element and use two pointers for the remaining pair.',
    'For each index i, set left = i+1, right = n-1. Move pointers inward based on the sum.',
    'Skip duplicate values of nums[i] and skip duplicates after finding a valid triplet to avoid duplicates in the output.',
  ],
  visibleTests: [
    { args: [[-1, 0, 1, 2, -1, -4]], expected: [[-1, -1, 2], [-1, 0, 1]] },
    { args: [[0, 1, 1]], expected: [] },
    { args: [[0, 0, 0]], expected: [[0, 0, 0]] },
  ],
  hiddenTests: [
    { args: [[1, 2, -2, -1]], expected: [] },
    { args: [[-2, 0, 1, 1, 2]], expected: [[-2, 0, 2], [-2, 1, 1]] },
    { args: [[-1, 0, 0, 0, 1]], expected: [[-1, 0, 1], [0, 0, 0]] },
  ],
};
