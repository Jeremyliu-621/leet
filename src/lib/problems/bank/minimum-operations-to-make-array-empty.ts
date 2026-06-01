import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-empty',
  title: 'Minimum Number of Operations to Make Array Empty',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** array \`nums\` consisting of positive integers.

In one operation, you can:
- Remove **exactly 2** elements from the array that are **equal**.
- Remove **exactly 3** elements from the array that are **equal**.

Return the **minimum** number of operations to make the array empty, or \`-1\` if it is not possible.`,
  constraints: [
    '2 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
  ],
  examples: [
    {
      input: 'nums = [2,3,3,2,2,4,2,3,4]',
      output: '4',
      explanation: 'Counts: {2:4, 3:3, 4:2}. Operations: remove 2 pairs of 2s (2 ops), remove 1 triple of 3s (1 op), remove 1 pair of 4s (1 op). Total = 4.',
    },
    {
      input: 'nums = [2,1,2,2,3,3]',
      output: '-1',
      explanation: 'The value 1 appears exactly once and cannot be removed by any operation.',
    },
  ],
  hints: [
    'Count the frequency of each distinct value.',
    'If any value appears exactly once, return -1.',
    'For a value with count c ≥ 2, you need Math.ceil(c / 3) operations: groups of 3 where possible, with pairs filling the remainder.',
  ],
  functionName: 'minOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minOperations(nums) {\n  \n}\n',
    typescript: 'function minOperations(nums: number[]): number {\n  \n}',
    python: 'def minOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 3, 2, 2, 4, 2, 3, 4]], expected: 4 },
    { args: [[2, 1, 2, 2, 3, 3]], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1, 1, 1]], expected: 2 },
    { args: [[1, 2, 1, 2, 1]], expected: 2 },
    { args: [[3, 3, 3]], expected: 1 },
    { args: [[1, 1, 2, 2, 2]], expected: 2 },
    { args: [[5, 5, 5, 5, 5, 5, 5]], expected: 3 },
  ],
};
