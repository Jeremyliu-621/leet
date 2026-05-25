import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-array-sorted-rotated',
  title: 'Check if Array is Sorted and Rotated',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\`, return \`true\` if the array was originally sorted in **non-decreasing order** and then **rotated** some number of positions (including zero). Otherwise, return \`false\`.

There may be **duplicate** values in the original array.

A rotation of an array \`[a[0], a[1], ..., a[n-1]]\` produces the array \`[a[k], a[k+1], ..., a[n-1], a[0], a[1], ..., a[k-1]]\` for some \`k\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: 'true',
      explanation: 'The original sorted array [1,2,3,4,5] rotated by 3 positions gives [3,4,5,1,2].',
    },
    {
      input: 'nums = [2,1,3,4]',
      output: 'false',
      explanation: 'There is no rotation of a sorted array that gives [2,1,3,4].',
    },
    {
      input: 'nums = [1,2,3]',
      output: 'true',
      explanation: 'Zero rotations applied to the already-sorted array.',
    },
  ],
  hints: [
    'A sorted-then-rotated array has at most one "descent" — a position where nums[i] > nums[i+1]. Count these descents (treating the array as circular so you also compare the last element to the first).',
    'If the number of descents is 0 or 1, the array is a valid sorted rotation.',
  ],
  functionName: 'check',
  params: ['nums'],
  starterCode: {
    javascript: 'function check(nums) {\n  \n}\n',
    python: 'def check(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: true },
    { args: [[2, 1, 3, 4]], expected: false },
    { args: [[1, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 1, 1]], expected: true },
    { args: [[2, 3, 4, 1, 1]], expected: true },
    { args: [[3, 1, 2, 1]], expected: false },
    { args: [[5, 1, 2, 3, 4]], expected: true },
  ],
};
