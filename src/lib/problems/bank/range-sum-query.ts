import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query',
  title: 'Range Sum Query — Immutable',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `Given an integer array \`nums\`, handle multiple queries of the following type:

- Calculate the **sum** of the elements of \`nums\` between indices \`left\` and \`right\` **inclusive** where \`left <= right\`.

Implement the \`NumArray\` class, but for this problem implement a function \`sumRange(nums, left, right)\` that returns the sum of elements from index \`left\` to \`right\` inclusive.`,
  constraints: [
    '`1 <= nums.length <= 10^4`',
    '`-10^5 <= nums[i] <= 10^5`',
    '`0 <= left <= right < nums.length`',
  ],
  examples: [
    {
      input: 'nums = [-2,0,3,-5,2,-1], left = 0, right = 2',
      output: '1',
      explanation: 'sum([-2,0,3]) = 1',
    },
    {
      input: 'nums = [-2,0,3,-5,2,-1], left = 2, right = 5',
      output: '-1',
      explanation: 'sum([3,-5,2,-1]) = -1',
    },
    {
      input: 'nums = [-2,0,3,-5,2,-1], left = 0, right = 5',
      output: '-3',
      explanation: 'sum([-2,0,3,-5,2,-1]) = -3',
    },
  ],
  hints: [
    'Build a prefix sum array where `prefix[i]` is the sum of nums[0..i-1]. Then `sumRange(left, right) = prefix[right+1] - prefix[left]` in O(1).',
    'Compute a prefix sum array once. The range sum `[left, right]` = `prefix[right+1] - prefix[left]`.',
    `\`\`\`js
// Build: prefix[0]=0, prefix[i] = prefix[i-1]+nums[i-1]
// Query: prefix[right+1] - prefix[left]\`\`\``
  ],
  functionName: 'sumRange',
  params: ['nums', 'left', 'right'],
  starterCode: {
    javascript: `function sumRange(nums, left, right) {

}`,
    typescript: "function sumRange(nums: number[], left: number, right: number): number {\n\n}",

    python: `def sumRange(nums, left, right):
    pass`,
  },
  visibleTests: [
    { args: [[-2, 0, 3, -5, 2, -1], 0, 2], expected: 1 },
    { args: [[-2, 0, 3, -5, 2, -1], 2, 5], expected: -1 },
    { args: [[-2, 0, 3, -5, 2, -1], 0, 5], expected: -3 },
  ],
  hiddenTests: [
    { args: [[1], 0, 0], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 1, 3], expected: 9 },
    { args: [[1, 2, 3, 4, 5], 0, 4], expected: 15 },
    { args: [[-1, -2, -3], 0, 2], expected: -6 },
    { args: [[5, 5, 5, 5], 2, 3], expected: 10 },
  ],
};
