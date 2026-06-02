import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-min-query-segment-tree',
  title: 'Range Minimum Query — Segment Tree',
  difficulty: 'medium',
  tags: ['segment-tree', 'arrays'],
  description: `Given an array of integers \`nums\` and a list of queries, answer each query \`[left, right]\` with the **minimum** value in the subarray \`nums[left..right]\` (inclusive).

Implement this using a **segment tree** for O(log n) per query after O(n) build time.

Return an array of answers, one per query.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '1 <= queries.length <= 10^4',
    '0 <= left <= right < nums.length',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 2, 7, 9, 11], queries = [[0, 2], [1, 4], [3, 5]]',
      output: '[1, 2, 7]',
      explanation: 'min(1,3,2) = 1; min(3,2,7,9) = 2; min(7,9,11) = 7.',
    },
  ],
  hints: [
    'Build a segment tree where each node stores the minimum of its range. Leaf nodes store individual elements; internal nodes store min(left child, right child).',
    'To query [l, r]: if the node range is entirely within [l, r], return node value. If disjoint, return Infinity. Otherwise recurse on both children and return min.',
    `\`\`\`js
function rangeMinQuery(nums, queries) {
  const n = nums.length, tree = new Array(4*n).fill(Infinity);
  function build(i, lo, hi) {
    if (lo === hi) { tree[i] = nums[lo]; return; }
    const mid = (lo + hi) >> 1;
    build(2*i, lo, mid); build(2*i+1, mid+1, hi);
    tree[i] = Math.min(tree[2*i], tree[2*i+1]);
  }
  function query(i, lo, hi, l, r) {
    if (r < lo || hi < l) return Infinity;
    if (l <= lo && hi <= r) return tree[i];
    const mid = (lo + hi) >> 1;
    return Math.min(query(2*i,lo,mid,l,r), query(2*i+1,mid+1,hi,l,r));
  }
  build(1, 0, n-1);
  return queries.map(([l,r]) => query(1, 0, n-1, l, r));
}\`\`\``,
  ],
  functionName: 'rangeMinQuery',
  params: ['nums', 'queries'],
  starterCode: {
    javascript: `function rangeMinQuery(nums, queries) {\n\n}`,
    typescript: `function rangeMinQuery(nums: number[], queries: number[][]): number[] {\n\n}`,
    python: `def rangeMinQuery(nums, queries):\n    pass`,
  },
  visibleTests: [
    {
      args: [[1, 3, 2, 7, 9, 11], [[0, 2], [1, 4], [3, 5]]],
      expected: [1, 2, 7],
    },
    {
      args: [[5, 1, 4, 2, 3], [[0, 4], [2, 3], [0, 0]]],
      expected: [1, 2, 5],
    },
  ],
  hiddenTests: [
    {
      args: [[42], [[0, 0]]],
      expected: [42],
    },
    {
      args: [[-5, -3, -1, -4], [[0, 3], [1, 2], [2, 3]]],
      expected: [-5, -3, -4],
    },
    {
      args: [[10, 20, 30, 40, 50], [[0, 1], [1, 3], [0, 4], [4, 4]]],
      expected: [10, 20, 10, 50],
    },
    {
      args: [[3, 3, 3, 3], [[0, 3], [1, 2]]],
      expected: [3, 3],
    },
    {
      args: [[100, -100, 50, -50], [[0, 1], [2, 3], [0, 3], [1, 2]]],
      expected: [-100, -50, -100, -100],
    },
  ],
};
