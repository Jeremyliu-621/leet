import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-most-competitive-subsequence',
  title: 'Find the Most Competitive Subsequence',
  difficulty: 'medium',
  tags: ['arrays', 'stack'],
  description: `Given an integer array \`nums\` and a positive integer \`k\`, return the **most competitive** subsequence of \`nums\` of size \`k\`.

An array's subsequence is a resulting sequence obtained by erasing some (possibly zero) elements of the array.

We define that a subsequence \`a\` is **more competitive** than a subsequence \`b\` (of the same length) if in the first position where \`a\` and \`b\` differ, subsequence \`a\` has a number **less** than the corresponding number in \`b\`. In other words, it is the lexicographically smallest subsequence of length \`k\`.`,
  constraints: [
    '`1 <= nums.length <= 10^5`',
    '`0 <= nums[i] <= 10^9`',
    '`1 <= k <= nums.length`',
  ],
  examples: [
    {
      input: 'nums = [3,5,2,6], k = 2',
      output: '[2,6]',
      explanation: 'Among all possible subsequences of size 2, [2,6] is lexicographically smallest.',
    },
    {
      input: 'nums = [2,4,3,3,5,4,9,6], k = 4',
      output: '[2,3,3,4]',
      explanation: 'The most competitive subsequence of size 4 is [2,3,3,4].',
    },
  ],
  hints: [
    'Use a monotone stack: keep a stack of selected elements in non-decreasing order.',
    'For each element, pop the stack top if it is greater than the current element AND there are enough remaining elements to fill k spots.',
    'The condition to pop is: stack.size()-1 + (n-i) >= k (i.e., after popping we can still reach k elements).',
  ],
  functionName: 'mostCompetitive',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function mostCompetitive(nums, k) {

}`,
    typescript: `function mostCompetitive(nums: number[], k: number): number[] {

}`,
    python: `def mostCompetitive(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[3, 5, 2, 6], 2], expected: [2, 6] },
    { args: [[2, 4, 3, 3, 5, 4, 9, 6], 4], expected: [2, 3, 3, 4] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[1, 2, 3], 3], expected: [1, 2, 3] },
    { args: [[3, 2, 1], 1], expected: [1] },
    { args: [[3, 2, 1], 2], expected: [2, 1] },
    { args: [[5, 2, 3, 1, 4], 3], expected: [2, 1, 4] },
    { args: [[9, 8, 7, 6, 5, 4, 3, 2, 1], 3], expected: [3, 2, 1] },
    { args: [[1, 1, 1], 2], expected: [1, 1] },
  ],
};
