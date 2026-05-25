import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-an-array',
  title: 'Sort an Array',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an array of integers \`nums\`, sort the array in ascending order and return it.

You must solve the problem **without using any built-in functions** in O(nlog(n)) time complexity and with the smallest space complexity possible.`,
  constraints: [
    '1 <= nums.length <= 5 * 10^4',
    '-5 * 10^4 <= nums[i] <= 5 * 10^4',
  ],
  examples: [
    {
      input: 'nums = [5,2,3,1]',
      output: '[1,2,3,5]',
    },
    {
      input: 'nums = [5,1,1,2,0,0]',
      output: '[0,0,1,1,2,5]',
    },
  ],
  hints: [
    'Implement merge sort: divide the array in half, sort each half recursively, then merge the two sorted halves.',
    'Merge two sorted halves by comparing the front elements and taking the smaller one into the result array.',
    'Alternatively, implement heap sort using a max-heap built in-place.',
  ],
  functionName: 'sortArray',
  params: ['nums'],
  starterCode: {
    javascript: 'function sortArray(nums) {\n\n}\n',
    python: 'def sortArray(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[5,2,3,1]], expected: [1,2,3,5] },
    { args: [[5,1,1,2,0,0]], expected: [0,0,1,1,2,5] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[-1,-2,-3]], expected: [-3,-2,-1] },
    { args: [[3,3,3]], expected: [3,3,3] },
    { args: [[10,-10,0,5,-5]], expected: [-10,-5,0,5,10] },
  ],
};
