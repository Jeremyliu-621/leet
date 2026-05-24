import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-unique-elements',
  title: 'Sum of Unique Elements',
  difficulty: 'easy',
  tags: ['hash-map'],
  description: `You are given an integer array \`nums\`. The **unique elements** of an array are the elements that appear **exactly once** in the array.

Return the **sum** of all the unique elements of \`nums\`.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 100`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,2]',
      output: '4',
      explanation: 'The unique elements are [1,3], and the sum is 4.',
    },
    {
      input: 'nums = [1,1,1,1,1]',
      output: '0',
      explanation: 'There are no unique elements, so the sum is 0.',
    },
    {
      input: 'nums = [1,2,3,4,5]',
      output: '15',
    },
  ],
  hints: [
    'Count the frequency of each element using a hash map, then sum the elements that appear exactly once.',
  ],
  functionName: 'sumOfUnique',
  params: ['nums'],
  starterCode: {
    javascript: `function sumOfUnique(nums) {

}`,
    python: `def sumOfUnique(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 2]], expected: 4 },
    { args: [[1, 1, 1, 1, 1]], expected: 0 },
    { args: [[1, 2, 3, 4, 5]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5, 5]], expected: 0 },
    { args: [[1, 2, 2, 3, 3]], expected: 1 },
    { args: [[10, 20, 30]], expected: 60 },
    { args: [[1, 2, 3, 1, 2, 3]], expected: 0 },
  ],
};
