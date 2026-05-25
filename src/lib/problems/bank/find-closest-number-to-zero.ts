import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-closest-number-to-zero',
  title: 'Find Closest Number to Zero',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\` of size \`n\`, return the number with the value **closest to 0** in \`nums\`. If there are multiple answers, return the number with the **largest value**.`,
  constraints: [
    '1 <= n <= 1000',
    '-10^5 <= nums[i] <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [-4,-2,1,4,8]',
      output: '1',
      explanation: '1 is closest to 0.',
    },
    {
      input: 'nums = [2,-1,1]',
      output: '1',
      explanation: '1 and -1 are equally close to 0; return the largest (1).',
    },
  ],
  hints: [
    'Track the current best answer. For each number, compare its absolute value to the current best. If equal absolute value, prefer the positive one.',
    'Sort-based: sort by (abs(x), -x) ascending, return the first element.',
  ],
  functionName: 'findClosestNumber',
  params: ['nums'],
  starterCode: {
    javascript: 'function findClosestNumber(nums) {\n  \n}\n',
    python: 'def findClosestNumber(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[-4, -2, 1, 4, 8]], expected: 1 },
    { args: [[2, -1, 1]], expected: 1 },
    { args: [[5, 3, 7]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-1, 1]], expected: 1 },
    { args: [[-1]], expected: -1 },
    { args: [[100, 200, -100, -200]], expected: 100 },
    { args: [[-3, -2, -1]], expected: -1 },
  ],
};
