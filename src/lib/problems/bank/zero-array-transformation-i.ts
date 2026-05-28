import type { Problem } from '../types';

export const problem: Problem = {
  id: 'zero-array-transformation-i',
  title: 'Zero Array Transformation I',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given an integer array \`nums\` of length \`n\` and a 2D array \`queries\`, where \`queries[i] = [l_i, r_i]\`.

For each query \`i\`, you may choose any subset of indices within the range \`[l_i, r_i]\` in \`nums\` and decrement the values at the chosen indices by \`1\`.

A **Zero Array** is an array where all elements equal \`0\`.

Return \`true\` if it is possible to transform \`nums\` into a Zero Array after processing all the queries in sequence, or \`false\` otherwise.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '0 <= nums[i] <= 10^5',
    '1 <= queries.length <= 10^5',
    '0 <= l_i <= r_i < nums.length',
  ],
  examples: [
    {
      input: 'nums = [1,0,1], queries = [[0,2]]',
      output: 'true',
      explanation: 'Choose indices 0 and 2 in query [0,2], decrement them by 1. All become 0.',
    },
    {
      input: 'nums = [4,3,2,1], queries = [[1,3],[0,2]]',
      output: 'false',
      explanation: 'nums[0]=4 but only query [0,2] covers index 0, allowing at most 1 decrement. 4 > 1, so impossible.',
    },
  ],
  hints: [
    'Each index i can be decremented at most once per query that covers it.',
    'The total number of decrements possible at index i equals the number of queries that cover it.',
    'Use a difference array: for each query [l,r], increment diff[l] and decrement diff[r+1]. Prefix sum gives coverage at each index.',
    'If coverage[i] < nums[i] for any i, return false.',
  ],
  functionName: 'isZeroArray',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: 'function isZeroArray(nums, queries) {\n\n}',
    typescript: "function isZeroArray(nums: number[], queries: number[][]): boolean {\n\n}",

    python: 'def isZeroArray(nums, queries):\n    pass',
  },
  visibleTests: [
    { args: [[1, 0, 1], [[0, 2]]], expected: true },
    { args: [[4, 3, 2, 1], [[1, 3], [0, 2]]], expected: false },
  ],
  hiddenTests: [
    { args: [[0], [[0, 0]]], expected: true },
    { args: [[1], []], expected: false },
    { args: [[0, 0, 0], [[0, 2]]], expected: true },
    { args: [[1, 1, 1], [[0, 0], [1, 1], [2, 2]]], expected: true },
    { args: [[2, 1], [[0, 1], [0, 0]]], expected: true },
    { args: [[3, 0, 2], [[0, 2], [0, 2], [1, 2]]], expected: false },
  ],
};
