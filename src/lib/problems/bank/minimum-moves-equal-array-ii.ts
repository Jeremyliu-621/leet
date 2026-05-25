import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-moves-equal-array-ii',
  title: 'Minimum Moves to Equal Array Elements II',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `Given an integer array \`nums\` of size \`n\`, return the **minimum number of moves** required to make all array elements equal.

In one move, you can increment or decrement an element of the array by 1.

**Note:** The answer is guaranteed to fit in a 32-bit integer.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    { input: 'nums = [1,2,3]', output: '2', explanation: 'Move to median 2: |1-2|+|2-2|+|3-2| = 1+0+1 = 2.' },
    { input: 'nums = [1,10,2,9]', output: '16' },
  ],
  hints: [
    'This is equivalent to minimizing the sum of absolute differences to a target value.',
    'The optimal target value is the median of the array. Sort the array and pick the middle element.',
    'Sum up |nums[i] - median| for all i.',
  ],
  functionName: 'minMoves2',
  params: ['nums'],
  starterCode: {
    javascript: 'function minMoves2(nums) {\n\n}\n',
    python: 'def minMoves2(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 10, 2, 9]], expected: 16 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 1, 1]], expected: 0 },
    { args: [[1, 3, 5, 7, 9]], expected: 12 },
    { args: [[-10, -1, 0, 1, 10]], expected: 22 },
  ],
};
