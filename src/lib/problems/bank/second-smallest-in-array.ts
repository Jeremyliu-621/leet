import type { Problem } from '../types';

export const problem: Problem = {
  id: 'second-smallest-in-array',
  title: 'Second Smallest in Array',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` with at least two **distinct** elements, return the **second smallest** distinct value in the array.`,
  constraints: [
    '2 <= nums.length <= 1000',
    '-10^4 <= nums[i] <= 10^4',
    'The array has at least two distinct values',
  ],
  examples: [
    {
      input: 'nums = [3,1,2]',
      output: '2',
      explanation: 'Distinct sorted values: [1, 2, 3]. The second smallest is 2.',
    },
    {
      input: 'nums = [5,5,3,1,2]',
      output: '2',
      explanation: 'Distinct sorted values: [1, 2, 3, 5]. The second smallest is 2.',
    },
    {
      input: 'nums = [-3,-1,-4,-1,-5,-9,-2,-6]',
      output: '-6',
      explanation: 'Distinct sorted values: [-9, -6, -5, -4, -3, -2, -1]. The second smallest is -6.',
    },
  ],
  hints: [
    'Deduplicate the array to get only distinct values — a `Set` is a clean way to do this.',
    'Sort the distinct values in ascending order, then return the element at index 1.',
    'Remember that numeric sort in JavaScript requires a comparator: `.sort((a, b) => a - b)`. Without it, elements are sorted as strings.',
  ],
  functionName: 'secondSmallest',
  params: ['nums'],
  starterCode: {
    javascript: `function secondSmallest(nums) {

}`,
    typescript: `function secondSmallest(nums: number[]): number {

}`,
    python: `def secondSmallest(nums):
    pass`,
  },
  visibleTests: [
    { args: [[3, 1, 2]], expected: 2 },
    { args: [[5, 5, 3, 1, 2]], expected: 2 },
    { args: [[-3, -1, -4, -1, -5, -9, -2, -6]], expected: -6 },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: 2 },
    { args: [[10, 1, 10, 1, 5]], expected: 5 },
    { args: [[100, 200]], expected: 200 },
    { args: [[-5, -3, -1]], expected: -3 },
    { args: [[1, 1, 1, 2]], expected: 2 },
    { args: [[0, 0, -1]], expected: 0 },
    { args: [[1000, -1000, 0]], expected: 0 },
    { args: [[7, 7, 7, 7, 8]], expected: 8 },
  ],
};
