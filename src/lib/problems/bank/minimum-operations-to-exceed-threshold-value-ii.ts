import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-exceed-threshold-value-ii',
  title: 'Minimum Operations to Exceed Threshold Value II',
  difficulty: 'medium',
  tags: ['arrays', 'heap'],
  description: `You are given a **0-indexed** integer array \`nums\`, and an integer \`k\`.

In one operation, you will:

- Take the two smallest integers \`x\` and \`y\` in \`nums\`.
- Remove \`x\` and \`y\` from \`nums\`.
- Add \`min(x, y) * 2 + max(x, y)\` anywhere in the array.

**Note** that you can only apply the described operation if \`nums\` has at least two elements.

Return the **minimum** number of operations needed so that all elements of the array are greater than or equal to \`k\`.`,
  constraints: [
    '2 <= nums.length <= 2 * 10^5',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
    'The input is generated such that an answer always exists.',
  ],
  examples: [
    {
      input: 'nums = [2,11,10,1,3], k = 10',
      output: '2',
      explanation: 'Op 1: x=1,y=2 → add 1*2+2=4. Array: [4,11,10,3]. Op 2: x=3,y=4 → add 3*2+4=10. Array: [10,11,10]. All ≥ 10.',
    },
    {
      input: 'nums = [1,1,2,4,9], k = 20',
      output: '4',
      explanation: 'After 4 operations, all elements reach ≥ 20.',
    },
  ],
  hints: [
    'Use a min-heap (priority queue) to always efficiently get the two smallest elements.',
    'Repeat the operation until all elements are >= k.',
    'Count how many operations you perform.',
  ],
  functionName: 'minOperations',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minOperations(nums, k) {

}`,
    typescript: "function minOperations(nums: number[], k: number): number {\n\n}",

    python: `def minOperations(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[2, 11, 10, 1, 3], 10], expected: 2 },
    { args: [[1, 1, 2, 4, 9], 20], expected: 4 },
  ],
  hiddenTests: [
    { args: [[10, 20, 30], 5], expected: 0 },
    { args: [[1, 5, 2, 3], 4], expected: 2 },
    { args: [[3, 3, 3, 3], 9], expected: 2 },
    { args: [[2, 2, 2, 2, 2], 8], expected: 4 },
  ],
};
