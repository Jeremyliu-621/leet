import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-make-array-values-equal-to-k',
  title: 'Minimum Operations to Make Array Values Equal to K',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map'],
  description: `You are given an integer array \`nums\` and an integer \`k\`.

An operation consists of selecting a **valid integer** \`h\` such that \`h\` divides all values in \`nums\` that are **greater than** \`h\`, then replacing every element of \`nums\` that is greater than \`h\` with \`h\`.

Return the **minimum** number of operations required to make every element in \`nums\` equal to \`k\`. If it is impossible, return \`-1\`.`,
  constraints: [
    '1 <= nums.length <= 100',
    '1 <= nums[i] <= 100',
    '1 <= k <= 100',
  ],
  examples: [
    {
      input: 'nums = [5,2,5,4,5], k = 2',
      output: '2',
      explanation: 'The operations can be: select h=4 to get [4,2,4,4,4], then select h=2 to get [2,2,2,2,2].',
    },
    {
      input: 'nums = [2,1,2], k = 2',
      output: '-1',
      explanation: 'It is impossible because 1 < k=2.',
    },
    {
      input: 'nums = [9,7,5,3], k = 1',
      output: '4',
      explanation: 'Each distinct value above k requires one operation.',
    },
  ],
  hints: [
    'If any element is less than k, it is impossible to make all elements equal to k — return -1.',
    'Each distinct value greater than k needs its own operation to reduce it.',
    'Count the number of distinct values in nums that are strictly greater than k.',
  ],
  functionName: 'minOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperations(nums, k) {

}`,
    typescript: "function minOperations(nums: number[], k: number): number {\n\n}",

    python: `def minOperations(nums: list, k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [[5, 2, 5, 4, 5], 2], expected: 2 },
    { args: [[2, 1, 2], 2], expected: -1 },
    { args: [[9, 7, 5, 3], 1], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 1], expected: 0 },
    { args: [[5, 5, 5], 5], expected: 0 },
    { args: [[3, 3, 3], 2], expected: 1 },
    { args: [[5, 4, 3, 2, 1], 3], expected: -1 },
    { args: [[10, 7, 5], 5], expected: 2 },
  ],
};
