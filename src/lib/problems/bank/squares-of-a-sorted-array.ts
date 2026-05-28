import type { Problem } from '../types';

export const problem: Problem = {
  id: 'squares-of-a-sorted-array',
  title: 'Squares of a Sorted Array',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given an integer array \`nums\` sorted in **non-decreasing** order, return an array of the **squares of each number** sorted in non-decreasing order.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    'nums is sorted in non-decreasing order.',
  ],
  examples: [
    {
      input: 'nums = [-4,-1,0,3,10]',
      output: '[0,1,9,16,100]',
      explanation: 'After squaring: [16,1,0,9,100]. After sorting: [0,1,9,16,100].',
    },
    {
      input: 'nums = [-7,-3,2,3,11]',
      output: '[4,9,9,49,121]',
    },
  ],
  hints: [
    'The largest squares come from either end of the sorted array (the most negative or most positive values). A two-pointer approach can build the result in O(n).',
    'Place two pointers at the start (left) and end (right). Compare |nums[left]| vs |nums[right]| and place the larger square at the back of the result array.',
    'Decrement `right` or increment `left` depending on which side had the larger absolute value. Fill `result` from index n−1 down to 0.',
  ],
  functionName: 'sortedSquares',
  params: ['nums'],
  starterCode: {
    javascript: `function sortedSquares(nums) {

}`,
    python: `def sortedSquares(nums):
    pass`,
  },
  visibleTests: [
    { args: [[-4, -1, 0, 3, 10]], expected: [0, 1, 9, 16, 100] },
    { args: [[-7, -3, 2, 3, 11]], expected: [4, 9, 9, 49, 121] },
    { args: [[0, 1, 2]], expected: [0, 1, 4] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[-3, -1]], expected: [1, 9] },
    { args: [[1, 2, 3]], expected: [1, 4, 9] },
    { args: [[-5, -3, -2, -1]], expected: [1, 4, 9, 25] },
    { args: [[-10000, -1, 0, 1, 10000]], expected: [0, 1, 1, 100000000, 100000000] },
    { args: [[-4, -3, -2, -1, 0]], expected: [0, 1, 4, 9, 16] },
  ],
};
