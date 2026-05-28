import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-disappeared-numbers',
  title: 'Find All Numbers Disappeared in an Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\` of \`n\` integers where \`nums[i]\` is in the range \`[1, n]\`, return an array of all the integers in the range \`[1, n]\` that do not appear in \`nums\`.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '1 <= nums[i] <= n',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,7,8,2,3,1]',
      output: '[5,6]',
    },
    {
      input: 'nums = [1,1]',
      output: '[2]',
    },
  ],
  hints: [
    'Use the array itself as a hash map. For each number nums[i], negate the value at index abs(nums[i])-1.',
    'After marking, indices with positive values correspond to missing numbers.',
    'Alternatively, use a set to track all numbers present, then find which 1..n are missing.',
  ],
  functionName: 'findDisappearedNumbers',
  params: ['nums'],
  starterCode: {
    javascript: `function findDisappearedNumbers(nums) {
  // Return all integers in [1, n] missing from nums
}`,
    typescript: "function findDisappearedNumbers(nums: number[]): number[] {\n  // Return all integers in [1, n] missing from nums\n}",

    python: `def findDisappearedNumbers(nums):
    # Return all integers in [1, n] missing from nums
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 7, 8, 2, 3, 1]], expected: [5, 6] },
    { args: [[1, 1]], expected: [2] },
    { args: [[2, 2]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4]], expected: [] },
    { args: [[2, 3, 4, 5, 5]], expected: [1] },
    { args: [[1, 1, 2, 2]], expected: [3, 4] },
    { args: [[1]], expected: [] },
  ],
};
