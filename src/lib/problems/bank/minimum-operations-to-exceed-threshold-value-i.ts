import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-exceed-threshold-value-i',
  title: 'Minimum Operations to Exceed Threshold Value I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given a **0-indexed** integer array \`nums\` and an integer \`k\`.

In one operation, you can delete one element from \`nums\`.

Return the **minimum** number of operations required so that all elements of the remaining array are **greater than or equal to** \`k\`.`,
  constraints: [
    '1 <= nums.length <= 50',
    '1 <= nums[i] <= 10^9',
    '1 <= k <= 10^9',
    'The input is generated such that there is at least one index i such that nums[i] >= k.',
  ],
  examples: [
    {
      input: 'nums = [2,11,10,1,3], k = 10',
      output: '3',
      explanation: 'Delete 2, 1, and 3 (all elements < 10). Remaining: [11, 10]. Operations = 3.',
    },
    {
      input: 'nums = [1,1,2,4,9], k = 1',
      output: '0',
      explanation: 'All elements are already >= 1.',
    },
  ],
  hints: [
    'Count the number of elements strictly less than k.',
    'That count is the minimum number of deletions needed.',
    `\`\`\`js
function minOperations(nums, k) {
  return nums.filter(n => n < k).length;
}\`\`\``,
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
    { args: [[2, 11, 10, 1, 3], 10], expected: 3 },
    { args: [[1, 1, 2, 4, 9], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[5, 5, 5], 5], expected: 0 },
    { args: [[1, 2, 3, 4, 5], 4], expected: 3 },
    { args: [[10], 10], expected: 0 },
    { args: [[1, 10, 100], 50], expected: 2 },
  ],
};
