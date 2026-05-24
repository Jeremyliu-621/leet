import type { Problem } from '../types';

export const problem: Problem = {
  id: 'squares-of-sorted-array',
  title: 'Squares of a Sorted Array',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description: `Given an integer array \`nums\` sorted in **non-decreasing** order, return an array of the **squares of each number** sorted in non-decreasing order.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    'nums is sorted in non-decreasing order',
  ],
  examples: [
    {
      input: 'nums = [-4,-1,0,3,10]',
      output: '[0,1,9,16,100]',
    },
    {
      input: 'nums = [-7,-3,2,3,11]',
      output: '[4,9,9,49,121]',
    },
  ],
  hints: [
    'Use two pointers from both ends. The largest square must come from either the leftmost or rightmost element.',
    'Compare |nums[left]| with |nums[right]| and fill the result array from right to left.',
    'Move the pointer inward whose absolute value was larger.',
  ],
  functionName: 'sortedSquares',
  params: ['nums'],
  starterCode: {
    javascript: `function sortedSquares(nums) {
  // Return sorted array of squares
}`,
    python: `def sortedSquares(nums):
    # Return sorted array of squares
    pass`,
  },
  visibleTests: [
    { args: [[-4, -1, 0, 3, 10]], expected: [0, 1, 9, 16, 100] },
    { args: [[-7, -3, 2, 3, 11]], expected: [4, 9, 9, 49, 121] },
    { args: [[-2, -1]], expected: [1, 4] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[-1, 2, 3]], expected: [1, 4, 9] },
    { args: [[-3, -2, -1]], expected: [1, 4, 9] },
    { args: [[1, 2, 3]], expected: [1, 4, 9] },
  ],
};
