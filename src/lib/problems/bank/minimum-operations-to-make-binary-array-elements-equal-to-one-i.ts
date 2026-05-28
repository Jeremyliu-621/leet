import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-binary-array-elements-equal-to-one-i',
  title: 'Minimum Operations to Make Binary Array Elements Equal to One I',
  difficulty: 'easy',
  tags: ['arrays', 'simulation', 'sliding-window'],
  description: `You are given a binary array \`nums\`.

You can do the following operation any number of times (possibly zero):

- Choose **any** 3 **consecutive** elements from the array and **flip** all of them.

**Flipping** an element means changing its value from 0 to 1, and from 1 to 0.

Return the **minimum** number of operations required to make all elements in \`nums\` equal to 1. If it is impossible, return -1.`,
  constraints: [
    '3 <= nums.length <= 10^5',
    '0 <= nums[i] <= 1',
  ],
  examples: [
    {
      input: 'nums = [0,1,1,1,0,0]',
      output: '3',
      explanation: 'Flip [0,1,2] → [1,0,0,1,0,0], flip [1,2,3] → [1,1,1,0,0,0], flip [3,4,5] → [1,1,1,1,1,1]. 3 operations.',
    },
    {
      input: 'nums = [0,1,1,1]',
      output: '-1',
      explanation: 'There is no way to make all elements 1 with flips of 3 consecutive elements.',
    },
    {
      input: 'nums = [1,1,1]',
      output: '0',
      explanation: 'All elements are already 1.',
    },
  ],
  hints: [
    'Use a greedy approach: scan left to right. When you encounter a 0, you must flip the window of 3 starting at that index (it\'s the only way to fix this position without affecting earlier elements).',
    'After each flip, increment the operation count and update the values at indices i, i+1, i+2.',
    'If a 0 remains at index n-2 or n-1 (too close to the end for a 3-flip), return -1.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: "function minOperations(nums: number[]): number {\n\n}",

    python: `def minOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 1, 1, 0, 0]], expected: 3 },
    { args: [[0, 1, 1, 1]], expected: -1 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0, 0, 0]], expected: 1 },
    { args: [[1, 0, 0]], expected: -1 },
    { args: [[0, 0, 1]], expected: -1 },
    { args: [[1, 1, 0, 0]], expected: -1 },
    { args: [[1, 0, 1, 1, 0, 1]], expected: 2 },
    { args: [[0, 0, 0, 0, 0, 0]], expected: 2 },
    { args: [[1, 1, 1, 1, 1]], expected: 0 },
  ],
};
