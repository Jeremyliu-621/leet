import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-array-by-increasing-frequency',
  title: 'Sort Array by Increasing Frequency',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\`, sort the array in **increasing** order based on the frequency of the values. If multiple values have the same frequency, sort them in **decreasing** order.

Return the sorted array.`,
  constraints: [
    '1 <= nums.length <= 100',
    '-100 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [1,1,2,2,2,3]',
      output: '[3,1,1,2,2,2]',
      explanation: '3 has frequency 1, 1 has frequency 2, 2 has frequency 3. Sort by frequency ascending.',
    },
    {
      input: 'nums = [2,3,1,3,2]',
      output: '[1,3,3,2,2]',
      explanation: '1 and 2 and 3 each appear 1 or 2 times. Ties broken by decreasing value.',
    },
    {
      input: 'nums = [-1,1,-6,4,5,-6,1,4,1]',
      output: '[5,-1,4,4,-6,-6,1,1,1]',
    },
  ],
  hints: [
    'Count frequencies with a Map/object. Then sort by (frequency ascending, value descending).',
    'comparator: (a, b) => freq[a] !== freq[b] ? freq[a] - freq[b] : b - a',
    'Build the frequency map first (one pass), then sort the original array.',
  ],
  functionName: 'frequencySort',
  params: ['nums'],
  starterCode: {
    javascript: `function frequencySort(nums) {

}`,
    python: `def frequencySort(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 2, 2, 2, 3]], expected: [3, 1, 1, 2, 2, 2] },
    { args: [[2, 3, 1, 3, 2]], expected: [1, 3, 3, 2, 2] },
    { args: [[-1, 1, -6, 4, 5, -6, 1, 4, 1]], expected: [5, -1, 4, 4, -6, -6, 1, 1, 1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [2, 1] },
    { args: [[3, 3, 3]], expected: [3, 3, 3] },
    { args: [[1, 1, 2]], expected: [2, 1, 1] },
  ],
};
