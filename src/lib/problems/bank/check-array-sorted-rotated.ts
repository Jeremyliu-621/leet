import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-array-sorted-rotated',
  title: 'Check if Array Is Sorted and Rotated',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an array \`nums\`, return \`true\` if the array was originally sorted in **non-decreasing** order, then rotated **some number of positions** (including zero). Otherwise, return \`false\`.

There may be **duplicates** in the original array.

**Note:** An array \`A\` rotated by \`x\` positions results in the array \`B\` such that \`B[i] == A[(i+x) % A.length]\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3,4,5,1,2]',
      output: 'true',
      explanation: '[1,2,3,4,5] rotated 3 positions to the right.',
    },
    {
      input: 'nums = [2,1,3,4]',
      output: 'false',
      explanation: 'No rotation of a sorted array produces this.',
    },
    {
      input: 'nums = [1,2,3]',
      output: 'true',
    },
  ],
  hints: [
    'Level 1: Count the number of "descents" — positions i where nums[i] > nums[(i+1) % n].',
    'Level 2: A valid sorted-and-rotated array has at most 1 descent.',
    'Level 3: const n=nums.length;let drops=0;for(let i=0;i<n;i++)if(nums[i]>nums[(i+1)%n])drops++;return drops<=1;',
  ],
  functionName: 'check',
  params: ['nums'],
  starterCode: {
    javascript: 'function check(nums) {\n  // your code here\n}\n',
    typescript: "function check(nums: number[]): boolean {\n  // your code here\n}",

    python: 'def check(nums):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2]], expected: true },
    { args: [[2, 1, 3, 4]], expected: false },
    { args: [[1, 2, 3]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[2, 1]], expected: true },
    { args: [[1, 1, 1]], expected: true },
    { args: [[3, 3, 1, 2]], expected: true },
    { args: [[1, 3, 2]], expected: false },
  ],
};
