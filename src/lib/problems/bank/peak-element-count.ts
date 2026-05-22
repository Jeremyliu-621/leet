import type { Problem } from '../types';

export const problem: Problem = {
  id: 'peak-element-count',
  title: 'Count Interior Peaks',
  difficulty: 'easy',
  tags: ['arrays'],
  description:
    'An interior peak is an element that is strictly greater than both of its immediate neighbours.\n\nGiven an integer array nums, count how many interior peaks it contains. The first and last elements can never be interior peaks because they each have only one neighbour.\n\nReturn the count as a number.',
  constraints: [
    '1 <= nums.length <= 1000',
    'All values in nums are integers.',
    '-10000 <= nums[i] <= 10000',
  ],
  examples: [
    {
      input: 'nums = [1,3,2,4,1]',
      output: '2',
      explanation: '3 is greater than 1 and 2; 4 is greater than 2 and 1.',
    },
    {
      input: 'nums = [5,4,3,2,1]',
      output: '0',
      explanation: 'A strictly decreasing array has no peaks.',
    },
    {
      input: 'nums = [1,2,2,1]',
      output: '0',
      explanation: 'A peak must be strictly greater than both neighbours.',
    },
  ],
  functionName: 'countInteriorPeaks',
  params: ['nums'],
  starterCode: {
    javascript: 'function countInteriorPeaks(nums) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 4, 1]], expected: 2 },
    { args: [[5, 4, 3, 2, 1]], expected: 0 },
    { args: [[1, 2, 2, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 5, 1]], expected: 1 },
    { args: [[0, 10, 0, 10, 0, 10, 0]], expected: 3 },
    { args: [[-3, -1, -3, -1, -3]], expected: 2 },
    { args: [[2, 2, 2, 2]], expected: 0 },
  ],
};
