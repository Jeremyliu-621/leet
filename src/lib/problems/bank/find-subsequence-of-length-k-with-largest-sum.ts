import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-subsequence-of-length-k-with-largest-sum',
  title: 'Find Subsequence of Length K With the Largest Sum',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. You want to find a **subsequence** of \`nums\` of length \`k\` that has the **largest sum**.

Return *any* such subsequence as an integer array of length \`k\`.

A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-10^5 <= nums[i] <= 10^5',
    '1 <= k <= nums.length',
  ],
  examples: [
    {
      input: 'nums = [2,1,3,3], k = 2',
      output: '[3,3]',
      explanation: 'The two largest values are 3,3 at indices 2,3. Maintain original order: [3,3].',
    },
    {
      input: 'nums = [-1,-2,3,4], k = 3',
      output: '[-1,3,4]',
      explanation: 'Top 3 by value: 4, 3, -1 at indices 3,2,0. Sorted by index: [-1,3,4].',
    },
  ],
  hints: [
    'Sort by value descending to find the top k elements.',
    'Then sort the selected elements by their original indices to maintain order.',
  ],
  functionName: 'maxSubsequence',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maxSubsequence(nums, k) {

}`,
    python: `def maxSubsequence(nums, k):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3, 3], 2], expected: [3, 3] },
    { args: [[-1, -2, 3, 4], 3], expected: [-1, 3, 4] },
  ],
  hiddenTests: [
    { args: [[3, 4, 3, 4], 2], expected: [4, 4] },
    { args: [[1, 2, 3, 4, 5], 3], expected: [3, 4, 5] },
    { args: [[5, 4, 3, 2, 1], 3], expected: [5, 4, 3] },
    { args: [[-5], 1], expected: [-5] },
  ],
};
