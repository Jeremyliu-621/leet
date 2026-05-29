import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-make-array-elements-zero',
  title: 'Minimum Operations to Make Array Elements Zero',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a 2D array \`queries\` where \`queries[i] = [l, r]\`. Each query specifies a range \`[l, r]\`.

For each query, you can perform the following operation **any number of times**: choose two indices \`i\` and \`j\` such that \`l <= i, j <= r\` and \`queries[i][0] == queries[j][0]\`, and set both \`queries[i][0]\` and \`queries[j][0]\` to 0.

Wait — let me restate the actual problem:

You are given an integer array \`nums\`. In one operation, you can select **any two equal non-zero elements** \`nums[i] == nums[j]\` (where \`i != j\`) and set both to \`0\`.

Return the **minimum number of operations** to make all elements zero, or \`-1\` if it is impossible.`,
  constraints: [
    '`1 <= nums.length <= 1000`',
    '`0 <= nums[i] <= 1000`',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,2,3,3]',
      output: '3',
      explanation: 'Pair 1+1, pair 2+2, pair 3+3 — 3 operations.',
    },
    {
      input: 'nums = [1,2,3]',
      output: '-1',
      explanation: 'All values appear only once; no two equal elements exist.',
    },
  ],
  hints: [
    'Zero elements are already zero and don\'t need to be processed — ignore them.',
    'For each distinct non-zero value, count how many times it appears. If any value appears an odd number of times, return -1 (you can\'t pair them all up).',
    'Otherwise, each distinct value with frequency `f` requires exactly `f / 2` operations. Sum these up across all values.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: `function minOperations(nums) {

}`,
    typescript: `function minOperations(nums: number[]): number {

}`,
    python: `def minOperations(nums):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 2, 3, 3]], expected: 3 },
    { args: [[1, 2, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[0, 0]], expected: 0 },
    { args: [[5, 5]], expected: 1 },
    { args: [[1, 1, 1]], expected: -1 },
    { args: [[2, 2, 2, 2]], expected: 2 },
    { args: [[0, 1, 2, 1, 2]], expected: 2 },
    { args: [[7, 7, 8, 8, 9, 9, 10]], expected: -1 },
    { args: [[4, 4, 4, 4, 4, 4]], expected: 3 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
};
