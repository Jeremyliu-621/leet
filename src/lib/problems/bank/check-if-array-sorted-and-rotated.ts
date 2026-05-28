import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-array-sorted-and-rotated',
  title: 'Check if Array Is Sorted and Rotated',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\`, return \`true\` if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return \`false\`.

There may be **duplicates** in the original array.

Note: A rotation of \`x\` positions means taking the last \`x\` elements and moving them to the front.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: 'true',
      explanation: '[1,2,3,4,5] rotated 3 positions to the right gives [3,4,5,1,2].',
    },
    {
      input: 'nums = [2,1,3,4]',
      output: 'false',
      explanation: 'There is no sorted array that, when rotated, produces [2,1,3,4].',
    },
    {
      input: 'nums = [1,2,3]',
      output: 'true',
      explanation: 'Already sorted — zero rotations.',
    },
  ],
  hints: [
    'Level 1: Think about what a sorted-and-rotated array looks like when traversed circularly. There is at most one "drop" where nums[i] > nums[i+1].',
    'Level 2: Count the number of positions i where nums[i] > nums[(i+1) % n], using modular arithmetic to wrap the last element back to the first. A sorted-and-rotated array has at most one such drop.',
    'Level 3: Count c = number of i in [0, n) where nums[i] > nums[(i+1)%n]. Return c <= 1.',
  ],
  functionName: 'check',
  params: ['nums'],
  starterCode: {
    javascript: 'function check(nums) {\n  // your code here\n}\n',
    typescript: "function check(nums: number[]): boolean {\n  // your code here\n}",

    python: 'def check(nums: list[int]) -> bool:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: true },
    { args: [[2, 1, 3, 4]], expected: false },
    { args: [[1, 2, 3]], expected: true },
    { args: [[3, 3, 3, 1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[2, 2]], expected: true },
    { args: [[1, 1, 2]], expected: true },
    { args: [[2, 3, 1, 1]], expected: true },
    { args: [[3, 1, 2]], expected: true },
    { args: [[1, 3, 2]], expected: false },
    { args: [[6, 10, 6]], expected: true },
  ],
};
