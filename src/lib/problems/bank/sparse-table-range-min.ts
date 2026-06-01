import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sparse-table-range-min',
  title: 'Range Minimum Query — Sparse Table',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `Given an array \`nums\` and a list of \`queries\` where each query is \`[l, r]\` (0-indexed, inclusive), return the **minimum value** in \`nums[l..r]\` for each query.

Use a **Sparse Table** for O(n log n) preprocessing and **O(1) per query** (instead of O(n) naive or O(log n) segment tree):
1. **Build:** Precompute \`table[k][i]\` = minimum of \`nums[i..i+2^k−1]\` for each power \`k\` and start \`i\`. Base case: \`table[0][i] = nums[i]\`. Recurrence: \`table[k][i] = min(table[k-1][i], table[k-1][i+2^(k-1)])\`.
2. **Query [l, r]:** Compute \`k = floor(log2(r−l+1))\`. Overlap the two ranges of size 2^k: \`min(table[k][l], table[k][r−2^k+1])\`. These two ranges together cover \`[l, r]\` completely (overlap is fine for min queries).

Return an array of minimum values, one per query.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= queries.length <= 10^5',
    '0 <= l <= r < nums.length',
    '-10^4 <= nums[i] <= 10^4',
  ],
  examples: [
    {
      input: 'nums = [2,4,3,1,6,7,8,9], queries = [[0,4],[1,3],[2,7]]',
      output: '[1,1,1]',
      explanation: 'nums[0..4]=[2,4,3,1,6] → min=1; nums[1..3]=[4,3,1] → min=1; nums[2..7]=[3,1,6,7,8,9] → min=1.',
    },
    {
      input: 'nums = [5,1,3,2,4], queries = [[0,4],[0,2],[3,4]]',
      output: '[1,1,2]',
      explanation: 'Min of whole array=1; min of [5,1,3]=1; min of [2,4]=2.',
    },
    {
      input: 'nums = [7], queries = [[0,0]]',
      output: '[7]',
      explanation: 'Single element.',
    },
  ],
  hints: [
    'Precompute `log2[i]` for all i from 1 to n using `log2[1]=0; log2[i]=log2[i/2]+1` to avoid calling Math.log2 in the query hot path.',
    'Build sparse table bottom-up: for k from 1 to LOG, for i from 0 to n-2^k: table[k][i] = min(table[k-1][i], table[k-1][i + 2^(k-1)]).',
    'For query [l, r]: let len=r-l+1, k=log2[len]. Return min(table[k][l], table[k][r - (1<<k) + 1]). The two intervals [l, l+2^k-1] and [r-2^k+1, r] both have length 2^k and together cover [l,r].',
  ],
  functionName: 'sparseTableRMQ',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function sparseTableRMQ(nums, queries) {\n\n}`,
    typescript: `function sparseTableRMQ(nums: number[], queries: number[][]): number[] {\n\n}`,
    python: `def sparseTableRMQ(nums: list[int], queries: list[list[int]]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [[2, 4, 3, 1, 6, 7, 8, 9], [[0, 4], [1, 3], [2, 7]]], expected: [1, 1, 1] },
    { args: [[5, 1, 3, 2, 4], [[0, 4], [0, 2], [3, 4]]], expected: [1, 1, 2] },
    { args: [[7], [[0, 0]]], expected: [7] },
    { args: [[-3, -1, -4, -1, -5, -9, -2, -6], [[0, 7], [2, 5], [4, 6]]], expected: [-9, -9, -9] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], [[0, 4], [1, 3], [2, 4]]], expected: [1, 2, 3] },
    { args: [[3, 1, 4, 1, 5, 9, 2, 6], [[0, 0], [0, 7], [3, 6]]], expected: [3, 1, 1] },
    { args: [[10, 9, 8, 7, 6, 5, 4], [[0, 6], [2, 5], [1, 4]]], expected: [4, 5, 6] },
    { args: [[1], [[0, 0]]], expected: [1] },
    { args: [[2, 2, 2], [[0, 2], [0, 1], [1, 2]]], expected: [2, 2, 2] },
  ],
};
