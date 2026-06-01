import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-unique-number',
  title: 'Largest Unique Number',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `Given an integer array \`nums\`, return the **largest** integer that appears **exactly once** in the array. If no such integer exists, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 2000',
    '0 <= nums[i] <= 1000',
  ],
  examples: [
    {
      input: 'nums = [5,7,3,9,4,9,8,3,1]',
      output: '8',
      explanation: 'The numbers that appear exactly once are [5,7,4,8,1]. The largest of these is 8.',
    },
    {
      input: 'nums = [9,9,8,8]',
      output: '-1',
      explanation: 'Every number appears more than once, so there is no unique number. Return -1.',
    },
    {
      input: 'nums = [1,2,3,1,2]',
      output: '3',
      explanation: 'Only 3 appears exactly once, so the answer is 3.',
    },
  ],
  hints: [
    'Count the frequency of each number using a hash map or an array indexed by value.',
    'Once you have the frequencies, iterate through all numbers that appear exactly once and track the maximum.',
    'You can iterate from the largest possible value downward and return the first number with a count of exactly 1.',
  ],
  functionName: 'largestUniqueNumber',
  params: ['nums'],
  starterCode: {
    javascript: 'function largestUniqueNumber(nums) {\n  // your code here\n}\n',
    typescript: `function largestUniqueNumber(nums: number[]): number {

}`,
    python: 'def largestUniqueNumber(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 7, 3, 9, 4, 9, 8, 3, 1]], expected: 8 },
    { args: [[9, 9, 8, 8]], expected: -1 },
    { args: [[1, 2, 3, 1, 2]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 0 },
    { args: [[1, 1]], expected: -1 },
    { args: [[10, 5, 10, 3]], expected: 5 },
    { args: [[4, 4, 4, 4, 7]], expected: 7 },
    { args: [[100, 99, 100, 98, 99]], expected: 98 },
    { args: [[5, 3, 5, 2, 3, 7]], expected: 7 },
    { args: [[1, 2, 3, 4, 5]], expected: 5 },
    { args: [[0, 0, 1, 1, 2]], expected: 2 },
  ],
};
