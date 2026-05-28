import type { Problem } from '../types';

export const problem: Problem = {
  id: 'build-array-from-permutation',
  title: 'Build Array from Permutation',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given a **zero-based permutation** \`nums\` (**0-indexed**), build an array \`ans\` of the **same length** where \`ans[i] = nums[nums[i]]\` for each \`0 <= i < nums.length\` and return it.

A **zero-based permutation** \`nums\` is an array of **distinct** integers from \`0\` to \`nums.length - 1\` (**inclusive**).`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`0 <= nums[i] < nums.length`',
    'The elements in `nums` are **distinct**.',
  ],
  examples: [
    {
      input: 'nums = [0,2,1,5,3,4]',
      output: '[0,1,2,4,5,3]',
      explanation: 'ans[0] = nums[nums[0]] = nums[0] = 0, ans[1] = nums[nums[1]] = nums[2] = 1, etc.',
    },
    {
      input: 'nums = [5,0,1,2,3,4]',
      output: '[4,5,0,1,2,3]',
    },
  ],
  hints: [
    'For each index i, the result at position i is nums[nums[i]].',
    'nums is a permutation of [0..n-1], so every index is valid. Just map each position to its double-indexed value.',
    'return nums.map((v,i)=>nums[v]??0);',
  ],
  functionName: 'buildArray',
  params: ['nums'],
  starterCode: {
    javascript: `function buildArray(nums) {

}`,
    typescript: "function buildArray(nums: number[]): number[] {\n\n}",

    python: `def buildArray(nums):
    pass`,
  },
  visibleTests: [
    { args: [[0, 2, 1, 5, 3, 4]], expected: [0, 1, 2, 4, 5, 3] },
    { args: [[5, 0, 1, 2, 3, 4]], expected: [4, 5, 0, 1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[1, 0]], expected: [0, 1] },
    { args: [[0, 1, 2]], expected: [0, 1, 2] },
    { args: [[3, 2, 1, 0]], expected: [0, 1, 2, 3] },
    { args: [[4, 3, 2, 1, 0]], expected: [0, 1, 2, 3, 4] },
  ],
};
