import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-squareful-arrays',
  title: 'Number of Squareful Arrays',
  difficulty: 'hard',
  tags: ['backtracking', 'arrays', 'math'],
  description: `An array is **squareful** if the sum of every pair of adjacent elements is a **perfect square**.

Given an integer array \`nums\`, return the number of **distinct squareful permutations** of \`nums\`.

A **permutation** of \`nums\` is a rearrangement of all its elements. Two permutations are considered distinct if they differ at some index.`,
  constraints: [
    '1 <= nums.length <= 12',
    '0 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [1,17,8]',
      output: '2',
      explanation: '[1,8,17] and [17,8,1] are the two squareful permutations. 1+8=9 (3²), 8+17=25 (5²).',
    },
    {
      input: 'nums = [2,2,2]',
      output: '1',
      explanation: '[2,2,2] is the only distinct permutation, and 2+2=4 (2²) for each adjacent pair.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '0',
      explanation: 'No permutation has all adjacent pairs summing to a perfect square.',
    },
  ],
  hints: [
    'Sort the array first to detect duplicate elements easily. Use backtracking to build permutations position by position.',
    'At each position, try each unused element. Skip an element if it is the same as the previous sibling at this level (to avoid duplicate permutations).',
    'Only add an element if its sum with the previous element in the built sequence is a perfect square. Check with Math.round(Math.sqrt(s)) ** 2 === s.',
    'A number n is a perfect square if Math.floor(Math.sqrt(n)) ** 2 === n.',
  ],
  functionName: 'numSquarefulPerms',
  params: ['nums'],
  starterCode: {
    javascript: `function numSquarefulPerms(nums) {

}`,
    typescript: "function numSquarefulPerms(nums: number[]): number {\n\n}",

    python: `def numSquarefulPerms(nums):
    `,
  },
  visibleTests: [
    { args: [[1, 17, 8]], expected: 2 },
    { args: [[2, 2, 2]], expected: 1 },
    { args: [[1, 2, 3]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[4, 5]], expected: 2 },
    { args: [[1, 3, 6, 10]], expected: 2 },
    { args: [[9, 0]], expected: 2 },
  ],
};
