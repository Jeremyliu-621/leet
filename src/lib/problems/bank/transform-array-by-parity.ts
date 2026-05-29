import type { Problem } from '../types';

export const problem: Problem = {
  id: 'transform-array-by-parity',
  title: 'Transform Array by Parity',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given an integer array \`nums\`.

Transform the array using the following rule: replace each **even** element with \`0\` and each **odd** element with \`1\`. After the transformation, **sort** the resulting array in **non-decreasing** order and return it.`,
  constraints: [
    '`1 <= nums.length <= 100`',
    '`1 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [4,3,2,1]',
      output: '[0,0,1,1]',
      explanation: '4→0, 3→1, 2→0, 1→1. After sorting: [0,0,1,1].',
    },
    {
      input: 'nums = [1,5,2,3,4]',
      output: '[0,0,1,1,1]',
      explanation: '2→0, 4→0; 1→1, 5→1, 3→1. After sorting: [0,0,1,1,1].',
    },
  ],
  hints: [
    'Count the number of even elements — those become 0 — and odd elements — those become 1.',
    'The sorted result is simply `evens` zeros followed by `odds` ones.',
    'No need to modify the array in place; build a new array of length n with 0s first, then 1s.',
  ],
  functionName: 'transformArray',
  params: ['nums'],
  starterCode: {
    javascript: `function transformArray(nums) {

}`,
    typescript: `function transformArray(nums: number[]): number[] {

}`,
    python: `def transformArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[4, 3, 2, 1]], expected: [0, 0, 1, 1] },
    { args: [[1, 5, 2, 3, 4]], expected: [0, 0, 1, 1, 1] },
  ],
  hiddenTests: [
    { args: [[2]], expected: [0] },
    { args: [[3]], expected: [1] },
    { args: [[2, 4, 6]], expected: [0, 0, 0] },
    { args: [[1, 3, 5]], expected: [1, 1, 1] },
    { args: [[10, 7, 3, 8, 5, 2]], expected: [0, 0, 0, 1, 1, 1] },
    { args: [[1000, 999]], expected: [0, 1] },
  ],
};
