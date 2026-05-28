import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-all-good-indices',
  title: 'Find All Good Indices',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a 0-indexed integer array \`nums\` of size \`n\` and a positive integer \`k\`.

We call an index \`i\` in the range \`k <= i < n - k\` **good** if the following conditions are satisfied:
- The \`k\` elements that are just **before** the index \`i\` are in **non-increasing** order.
- The \`k\` elements that are just **after** the index \`i\` are in **non-decreasing** order.

Return an array of all good indices sorted in **increasing** order.`,
  constraints: [
    'n == nums.length',
    '3 <= n <= 10^5',
    '1 <= nums[i] <= 10^6',
    '1 <= k <= n / 2',
  ],
  examples: [
    {
      input: 'nums = [2,1,1,1,3,4,1], k = 2',
      output: '[2,3]',
      explanation: 'i=2: before=[2,1] non-increasing, after=[1,3] non-decreasing. i=3: before=[1,1], after=[3,4]. Both good.',
    },
    {
      input: 'nums = [2,1,1,2], k = 2',
      output: '[]',
      explanation: 'Only i=2 is in range. Before=[2,1] non-increasing. After=[1,2]? No: after must be k=2 elements starting at i+1=[2], but n-k=2 so range is [2,1]. i=2 after=[2] wait n=4 k=2, valid range is [2,1]. No valid indices.',
    },
  ],
  hints: [
    'Precompute dec[i] = length of non-increasing run ending at i (from the left).',
    'Precompute inc[i] = length of non-decreasing run starting at i (from the right).',
    'Index i is good if dec[i-1] >= k and inc[i+1] >= k.',
  ],
  functionName: 'goodIndices',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function goodIndices(nums, k) {\n\n}\n',
    typescript: "function goodIndices(nums: number[], k: number): number[] {\n\n}",

    python: 'def goodIndices(nums, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[2,1,1,1,3,4,1], 2], expected: [2,3] },
    { args: [[2,1,1,2], 2], expected: [] },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5], 1], expected: [1,2,3] },
    { args: [[5,4,3,2,1], 1], expected: [1,2,3] },
    { args: [[1,1,1,1,1], 2], expected: [2] },
    { args: [[3,2,1,2,3], 2], expected: [2] },
  ],
};
