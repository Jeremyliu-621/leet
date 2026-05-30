import type { Problem } from '../types';

export const problem: Problem = {
  id: 'replace-elements-in-an-array',
  title: 'Replace Elements in an Array',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'simulation'],
  description: `You are given a **0-indexed** array \`nums\` that consists of \`n\` **distinct** positive integers. Apply \`m\` operations to this array, where in the \`i\`th operation you replace the number \`operations[i][0]\` with \`operations[i][1]\`.

It is guaranteed that in the \`i\`th operation:

- \`operations[i][0]\` **exists** in \`nums\`.
- \`operations[i][1]\` does **not** exist in \`nums\`.

Return the array obtained after applying all the operations.`,
  constraints: [
    '`n == nums.length`',
    '`m == operations.length`',
    '`1 <= n, m <= 10^5`',
    'All integers in `nums` are **distinct**.',
    '`1 <= nums[i], operations[i][0], operations[i][1] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [1,2,4,6], operations = [[1,3],[4,7],[6,1]]',
      output: '[3,2,7,1]',
      explanation: 'Replace 1→3, then 4→7, then 6→1: [1,2,4,6]→[3,2,4,6]→[3,2,7,6]→[3,2,7,1].',
    },
    {
      input: 'nums = [1,2], operations = [[1,3],[2,1],[3,2]]',
      output: '[2,1]',
      explanation: 'Step by step: [1,2]→[3,2]→[3,1]→[2,1].',
    },
  ],
  hints: [
    'Since all values in nums are distinct, you can build a map from value → index.',
    'For each operation [oldVal, newVal]: look up the index of oldVal, update nums[index] = newVal, then update the map.',
    'Delete the old mapping and insert the new one to keep the map consistent.',
  ],
  functionName: 'arrayChange',
  params: ['nums', 'operations'],
  starterCode: {
    javascript: `function arrayChange(nums, operations) {

}`,
    typescript: `function arrayChange(nums: number[], operations: number[][]): number[] {

}`,
    python: `def arrayChange(nums, operations):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 4, 6], [[1, 3], [4, 7], [6, 1]]], expected: [3, 2, 7, 1] },
    { args: [[1, 2], [[1, 3], [2, 1], [3, 2]]], expected: [2, 1] },
  ],
  hiddenTests: [
    { args: [[5], [[5, 10]]], expected: [10] },
    { args: [[2, 3], [[3, 5]]], expected: [2, 5] },
    { args: [[1], [[1, 2], [2, 3]]], expected: [3] },
    { args: [[1, 2, 3], [[1, 4], [2, 5], [3, 6]]], expected: [4, 5, 6] },
    { args: [[10, 20, 30], [[10, 5], [20, 10]]], expected: [5, 10, 30] },
  ],
};
