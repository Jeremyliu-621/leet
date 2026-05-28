import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-sorted-rotated',
  title: 'Check if Array Is Sorted and Rotated',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\`, return \`true\` if the array was originally sorted in **non-decreasing** order, then rotated some number of positions (including zero). Otherwise, return \`false\`.

There may be **duplicates** in the original array.

**Note:** An array \`A\` rotated by \`x\` positions results in the array \`B\` where \`B[i] == A[(i+x) % A.length]\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: 'true',
      explanation: '[1,2,3,4,5] is the original sorted array. Rotated by 3 positions gives [3,4,5,1,2].',
    },
    {
      input: 'nums = [2,1,3,4]',
      output: 'false',
      explanation: 'There is no rotation of a sorted array that gives [2,1,3,4].',
    },
    {
      input: 'nums = [1,2,3]',
      output: 'true',
      explanation: '[1,2,3] rotated by 0 positions.',
    },
  ],
  hints: [
    'Count the number of "drops" (positions where nums[i] > nums[i+1], treating the array as circular).',
    'If there is at most 1 drop, the array is a valid sorted rotation.',
    'Treat the last-to-first pair as circular: check nums[n-1] > nums[0] as well.',
  ],
  functionName: 'check',
  params: ['nums'],
  starterCode: {
    javascript: `function check(nums) {
  // Return true if nums is a rotation of a sorted array
}`,
    python: `def check(nums):
    # Return True if nums is a rotation of a sorted array
    pass`,
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: true },
    { args: [[2, 1, 3, 4]], expected: false },
    { args: [[1, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: true },
    { args: [[3, 3, 1, 2, 3]], expected: true },
    { args: [[1]], expected: true },
    { args: [[2, 1, 2]], expected: true },
  ],
};
