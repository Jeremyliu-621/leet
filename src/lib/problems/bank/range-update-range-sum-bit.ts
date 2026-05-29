import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-update-range-sum-bit',
  title: 'Range Update Range Sum with BIT',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `You have an array of \`n\` zeros. Process a sequence of operations:

- **Type 0** — \`[0, l, r, val]\`: add \`val\` to every element in positions \`l\` through \`r\` (inclusive, 0-indexed).
- **Type 1** — \`[1, l, r, 0]\`: return the sum of elements in positions \`l\` through \`r\` (inclusive).

Return an array containing the results of all type-1 operations, in order.

**Challenge:** Implement both operations in **O(log n)** using a Fenwick tree (BIT).`,
  constraints: [
    '1 ≤ n ≤ 10^5',
    '1 ≤ operations.length ≤ 10^4',
    'operations[i] = [type, l, r, val]',
    'type is 0 (range add) or 1 (range query)',
    '0 ≤ l ≤ r < n',
    '-10^4 ≤ val ≤ 10^4 for type-0 operations',
  ],
  examples: [
    {
      input: 'n = 5, operations = [[0,0,4,1],[1,0,4,0]]',
      output: '[5]',
      explanation: 'After adding 1 to all positions, the array is [1,1,1,1,1]. Sum of [0,4] = 5.',
    },
    {
      input: 'n = 5, operations = [[0,1,3,2],[1,0,4,0]]',
      output: '[6]',
      explanation: 'After adding 2 to positions 1-3, the array is [0,2,2,2,0]. Sum of [0,4] = 6.',
    },
  ],
  hints: [
    'A plain prefix-sum array answers range-sum queries in O(1) but requires O(n) to update. A difference array inverts this. To get O(log n) for both, you need a BIT.',
    'For range updates, maintain a difference array D where D[l] += val and D[r+1] -= val. The element value at position i is the prefix sum of D up to i. A BIT over D answers point queries (element values) in O(log n), but not range sums yet.',
    'Maintain two BITs B1 and B2 such that prefix_sum(i) = B1.prefix(i)·(i+1) − B2.prefix(i). A range-add [l,r,v] updates B1 and B2 at positions l and r+1. A range query [l,r] = prefix_sum(r) − prefix_sum(l−1).',
  ],
  functionName: 'rangeUpdateRangeSum',
  params: ['n', 'operations'],
  starterCode: {
    javascript: `function rangeUpdateRangeSum(n, operations) {\n\n}`,
    python: `def rangeUpdateRangeSum(n, operations) -> list:\n    pass`,
    typescript: `function rangeUpdateRangeSum(n: number, operations: number[][]): number[] {\n\n}`,
  },
  visibleTests: [
    { args: [5, [[0,0,4,1],[1,0,4,0]]], expected: [5] },
    { args: [5, [[0,1,3,2],[1,0,4,0]]], expected: [6] },
    { args: [4, [[0,0,3,1],[0,1,2,2],[1,0,3,0]]], expected: [8] },
  ],
  hiddenTests: [
    { args: [1, [[0,0,0,5],[1,0,0,0]]], expected: [5] },
    { args: [5, [[1,0,4,0]]], expected: [0] },
    { args: [5, [[0,1,3,2],[1,0,0,0],[1,2,4,0]]], expected: [0, 4] },
    { args: [3, [[0,0,2,10],[0,1,1,-5],[1,0,2,0]]], expected: [25] },
    { args: [6, [[0,0,5,1],[0,2,4,3],[1,0,5,0]]], expected: [15] },
    { args: [4, [[0,0,0,100],[0,3,3,200],[1,0,3,0]]], expected: [300] },
    { args: [5, [[0,0,4,3],[0,0,4,-1],[1,0,4,0]]], expected: [10] },
  ],
};
