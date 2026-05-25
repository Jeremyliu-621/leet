import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-operations-make-array-empty',
  title: 'Minimum Number of Operations to Make Array Empty',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map', 'math'],
  description: `You are given a **0-indexed** array \`nums\` consisting of positive integers.

There are two types of operations that you can apply on the array **any** number of times:
- Choose **2** elements with equal values and delete them from the array.
- Choose **3** elements with equal values and delete them from the array.

Return the **minimum** number of operations required to make the array empty, or \`-1\` if it is not possible.`,
  constraints: [
    '`2 <= nums.length <= 10^5`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [2,3,3,2,2,4,2,3,4]',
      output: '4',
      explanation: '2 appears 4 times: use 2 delete-2 ops. 3 appears 3 times: 1 delete-3 op. 4 appears 2 times: 1 delete-2 op. Total = 4.',
    },
    {
      input: 'nums = [2,1,2,2,3,3]',
      output: '3',
      explanation: '2 appears 3 times (1 op), 1 appears 1 time (impossible). Wait — 1 appears 1 time, return -1.',
    },
  ],
  hints: [
    'Count the frequency of each element. If any frequency is 1, return -1.',
    'For a frequency f, the minimum operations are ceil(f/3): use as many delete-3 as possible, but if f%3==1 swap one delete-3 for two delete-2.',
    'ceil(f/3) = Math.ceil(f/3) handles all cases correctly.',
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
    { args: [[3, 3, 3, 3, 3, 3]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[14, 12, 14, 14, 12, 14, 14, 12, 12, 12, 12, 14, 14, 12, 14, 14, 14, 12, 12]], expected: 7 },
    { args: [[2, 2]], expected: 1 },
    { args: [[1]], expected: -1 },
    { args: [[5, 5, 5, 5]], expected: 2 },
  ],
};
