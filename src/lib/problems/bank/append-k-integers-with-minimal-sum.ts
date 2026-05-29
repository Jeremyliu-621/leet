import type { Problem } from '../types';

export const problem: Problem = {
  id: 'append-k-integers-with-minimal-sum',
  title: 'Append K Integers With Minimal Sum',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Append \`k\` **unique positive** integers that **do not** appear in \`nums\` to maximize the resulting array's sum.

Return the sum of the \`k\` integers appended to \`nums\`.

The answer may exceed a 32-bit integer, so use a 64-bit integer.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^8',
  ],
  examples: [
    {
      input: 'nums = [1,4,25,10,25], k = 2',
      output: '5',
      explanation: 'The unique integers not in nums are: 2, 3, 5, 6, ... The 2 smallest are 2 and 3 with sum 5.',
    },
    {
      input: 'nums = [5,6], k = 6',
      output: '25',
      explanation: 'The 6 smallest positive integers not in {5,6} are: 1, 2, 3, 4, 7, 8. Sum = 25.',
    },
  ],
  hints: [
    'Sort and deduplicate nums.',
    'Greedily fill the gaps between consecutive nums elements.',
    'Use the arithmetic sum formula to avoid iterating over each integer.',
    'After exhausting all gaps from nums, continue filling from the last used value.',
  ],
  functionName: 'minimalKSum',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimalKSum(nums, k) {\n  \n}`,
    typescript: `function minimalKSum(nums: number[], k: number): number {\n  \n}`,
    python: `def minimalKSum(nums, k):\n    `,
  },
  visibleTests: [
    { args: [[1, 4, 25, 10, 25], 2], expected: 5 },
    { args: [[5, 6], 6], expected: 25 },
    { args: [[1, 2, 3], 3], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1, 4, 25, 10, 25], 2], expected: 5 },
    { args: [[5, 6], 6], expected: 25 },
    { args: [[1, 2, 3], 3], expected: 15 },
    { args: [[1], 1], expected: 2 },
    { args: [[2], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 40 },
    { args: [[1000000000], 3], expected: 6 },
    { args: [[3, 1, 5, 2, 6], 4], expected: 28 },
  ],
};
