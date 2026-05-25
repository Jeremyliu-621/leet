import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-make-array-empty',
  title: 'Minimum Number of Operations to Make Array Empty',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** array \`nums\` consisting of positive integers.

There are two types of operations that you can apply on the array **any** number of times:

- Choose **2** elements with equal values and **delete** them from the array.
- Choose **3** elements with equal values and **delete** them from the array.

Return the **minimum** number of operations required to make the array empty, or \`-1\` if it is not possible.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [2,3,3,2,2,4,2,3,4]',
      output: '4',
      explanation:
        'Frequencies: {2:4, 3:3, 4:2}. Remove 2s as 2+2 (2 ops), remove 3s as 3 (1 op), remove 4s as 2 (1 op). Total = 4.',
    },
    {
      input: 'nums = [2,1,2,2,3,3]',
      output: '-1',
      explanation: 'The value 1 appears exactly once. It cannot be removed by either operation, so the array cannot be emptied.',
    },
    {
      input: 'nums = [14,12,14,14,12,14,14,12,12,12,12]',
      output: '4',
      explanation:
        'Frequencies: {14:5, 12:6}. ceil(5/3)=2 ops for 14s, ceil(6/3)=2 ops for 12s. Total = 4.',
    },
  ],
  hints: [
    'Count the frequency of each value. For each frequency `f`: if `f === 1`, return -1. Otherwise use `Math.ceil(f / 3)` operations.',
    '`ceil(f/3)` in integer math: `Math.ceil(f/3)` or equivalently `Math.floor((f+2)/3)`. For `f % 3 === 1` you split into groups of 2+2; for `f % 3 === 2` you use one pair plus triples for the rest.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n  \n}\n',
    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 3, 2, 2, 4, 2, 3, 4]], expected: 4 },
    { args: [[2, 1, 2, 2, 3, 3]], expected: -1 },
    { args: [[14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1]], expected: 1 },
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 1, 2, 2, 2, 2]], expected: 3 },
    { args: [[1, 1, 1, 1, 1, 1, 1, 1, 1]], expected: 3 },
    { args: [[1, 2, 1, 2, 1, 2, 1]], expected: 3 },
  ],
};
