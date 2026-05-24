import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotate-left-one',
  title: 'Shift Left By One',
  difficulty: 'easy',
  tags: ['arrays'],
  description:
    'Given an integer array nums, return a new array in which every element has moved one position to the left.\n\nThe element that falls off the front wraps around and becomes the last element of the result. For example, [1,2,3] becomes [2,3,1].\n\nThe original array must not be modified. If the array has a single element, the result equals the input.',
  constraints: [
    '1 <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [1,2,3]',
      output: '[2,3,1]',
      explanation: 'The leading 1 wraps to the back.',
    },
    {
      input: 'nums = [9]',
      output: '[9]',
      explanation: 'Shifting a single element changes nothing.',
    },
    {
      input: 'nums = [4,8,15,16]',
      output: '[8,15,16,4]',
    },
  ],
  functionName: 'shiftLeftByOne',
  params: ['nums'],
  starterCode: {
    javascript: 'function shiftLeftByOne(nums) {\n  // your code here\n}\n',
    python: 'def shiftLeftByOne(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [2, 3, 1] },
    { args: [[9]], expected: [9] },
    { args: [[4, 8, 15, 16]], expected: [8, 15, 16, 4] },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: [0, 0] },
    { args: [[-1, -2, -3]], expected: [-2, -3, -1] },
    { args: [[5, 5, 5, 5]], expected: [5, 5, 5, 5] },
    { args: [[7, 1]], expected: [1, 7] },
    { args: [[10, 20, 30, 40, 50]], expected: [20, 30, 40, 50, 10] },
    { args: [[-100]], expected: [-100] },
  ],
};
