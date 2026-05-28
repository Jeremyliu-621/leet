import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-subsequence-of-length-k',
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
      explanation: 'The two largest values are 3 and 3. Return them in original order.',
    },
    {
      input: 'nums = [-1,-2,3,4], k = 3',
      output: '[-1,3,4]',
      explanation: 'Three largest: 4, 3, -1. In original order: [-1, 3, 4].',
    },
  ],
  hints: [
    'Level 1: Identify the k largest values. Then return them in original order.',
    'Level 2: Sort indices by nums[i] descending, take the first k indices, sort those indices ascending, then map to values.',
    'Level 3: const idx=[...nums.keys()].sort((a,b)=>nums[b]-nums[a]).slice(0,k).sort((a,b)=>a-b);return idx.map(i=>nums[i]);',
  ],
  functionName: 'maxSubsequence',
  params: ['nums', 'k'],
  starterCode: {
    javascript: 'function maxSubsequence(nums, k) {\n  // your code here\n}\n',
    typescript: "function maxSubsequence(nums: number[], k: number): number[] {\n  // your code here\n}",

    python: 'def maxSubsequence(nums, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3, 3], 2], expected: [3, 3] },
    { args: [[-1, -2, 3, 4], 3], expected: [-1, 3, 4] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [1] },
    { args: [[3, 4, 3, 3], 2], expected: [3, 4] },
    { args: [[5, 4, 3, 2, 1], 3], expected: [5, 4, 3] },
    { args: [[-5, -4, -3], 2], expected: [-4, -3] },
    { args: [[1, 2, 3, 4, 5], 5], expected: [1, 2, 3, 4, 5] },
  ],
};
