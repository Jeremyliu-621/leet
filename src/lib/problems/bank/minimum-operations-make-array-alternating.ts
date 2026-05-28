import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-make-array-alternating',
  title: 'Minimum Operations to Make the Array Alternating',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `You are given a **0-indexed** array \`nums\` consisting of \`n\` positive integers.

The array \`nums\` is called **alternating** if:
- \`nums[i - 2] == nums[i]\` for all indices \`i\` where \`2 <= i <= n - 1\`.
- \`nums[i - 1] != nums[i]\` for all indices \`i\` where \`1 <= i <= n - 1\`.

In one operation, you can choose an index \`i\` and **change** \`nums[i]\` to any positive integer.

Return the **minimum number of operations** to make the array alternating.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'nums = [3,1,3,2,4,3]',
      output: '3',
      explanation: 'Change elements at indices 1, 2, 5 to make [3,3,3,3,3,3] → no wait. Change indices 1,3,5 to [3,3,3,3,3,3]... actually [3,3,3,3,3,3] is not alternating. The optimal is [3,1,3,1,3,1] with 3 changes.',
    },
    {
      input: 'nums = [1,2,2,2,2]',
      output: '2',
      explanation: 'Change indices 1 and 2 to get [1,2,1,2,1] or change indices 2,3 to get [1,2,1,2,1].',
    },
  ],
  hints: [
    'Even indices must all have the same value; odd indices must all have the same value; even and odd values must differ.',
    'Find the most frequent element at even positions and most frequent at odd positions.',
    'Use the top-2 frequencies in case the top even and odd frequencies share the same element value.',
  ],
  functionName: 'minimumOperations',
  params: ['nums'],
  starterCode: {
    javascript: 'function minimumOperations(nums) {\n  \n}\n',
    typescript: "function minimumOperations(nums: number[]): number {\n  \n}",

    python: 'def minimumOperations(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 1, 3, 2, 4, 3]], expected: 3 },
    { args: [[1, 2, 2, 2, 2]], expected: 2 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1]], expected: 1 },
    { args: [[1, 2, 1, 2]], expected: 0 },
    { args: [[5, 5, 5, 5]], expected: 2 },
    { args: [[2, 3, 3, 3, 2]], expected: 1 },
  ],
};
