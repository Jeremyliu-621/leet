import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-sum-query-segment-tree',
  title: 'Range Sum Query — Segment Tree',
  difficulty: 'medium',
  tags: ['segment-tree', 'design'],
  description: `Implement a data structure that supports the following operations on an array of integers:

1. **update(index, val)** — set the element at \`index\` to \`val\`.
2. **sumRange(left, right)** — return the sum of elements between indices \`left\` and \`right\` (inclusive).

You are given an initial array \`nums\` and a list of operations. Each operation is either \`["update", i, val]\` or \`["sumRange", left, right]\`. Return an array of results for every \`sumRange\` query.

Use a **segment tree** for O(log n) per operation.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^5 <= nums[i] <= 10^5',
    '0 <= index < nums.length',
    '0 <= left <= right < nums.length',
    'At most 10^4 operations.',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 5], ops = [["sumRange", 0, 2], ["update", 1, 2], ["sumRange", 0, 2]]',
      output: '[9, 8]',
      explanation: 'Initial sum [0..2] = 9. After update(1,2), array = [1,2,5], sum = 8.',
    },
  ],
  hints: [
    'A segment tree is a binary tree where each leaf holds one array element and each internal node holds the sum of its children. Build the tree bottom-up in O(n).',
    'To update, change the leaf and propagate the change up to the root in O(log n). To query a range, recursively combine segments that overlap the query range.',
    `\`\`\`js
function solve(nums, ops) {
  const n = nums.length;
  const tree = new Array(4 * n).fill(0);
  function build(node, start, end) {
    if (start === end) { tree[node] = nums[start]; return; }
    const mid = (start + end) >> 1;
    build(2*node, start, mid);
    build(2*node+1, mid+1, end);
    tree[node] = tree[2*node] + tree[2*node+1];
  }
  // ... update and query similarly
}\`\`\``,
  ],
  functionName: 'rangeSumSegTree',
  params: ['nums', 'ops'],
  starterCode: {
    javascript: `function rangeSumSegTree(nums, ops) {\n\n}`,
    typescript: `function rangeSumSegTree(nums: number[], ops: (string | number)[][]): number[] {\n\n}`,
    python: `def rangeSumSegTree(nums, ops):\n    pass`,
  },
  visibleTests: [
    {
      args: [[1, 3, 5], [['sumRange', 0, 2], ['update', 1, 2], ['sumRange', 0, 2]]],
      expected: [9, 8],
    },
    {
      args: [[2, 4, 6, 8], [['sumRange', 1, 3], ['update', 2, 0], ['sumRange', 1, 3]]],
      expected: [18, 12],
    },
  ],
  hiddenTests: [
    {
      args: [[0], [['sumRange', 0, 0], ['update', 0, 5], ['sumRange', 0, 0]]],
      expected: [0, 5],
    },
    {
      args: [
        [1, 2, 3, 4, 5],
        [
          ['sumRange', 0, 4],
          ['update', 0, 10],
          ['sumRange', 0, 4],
          ['update', 4, -5],
          ['sumRange', 2, 4],
        ],
      ],
      expected: [15, 24, 2],
    },
    {
      args: [
        [-1, -2, -3],
        [['sumRange', 0, 2], ['update', 1, 5], ['sumRange', 0, 2]],
      ],
      expected: [-6, 1],
    },
    {
      args: [
        [10, 20, 30, 40],
        [
          ['sumRange', 0, 0],
          ['sumRange', 3, 3],
          ['update', 0, 0],
          ['update', 3, 0],
          ['sumRange', 0, 3],
        ],
      ],
      expected: [10, 40, 50],
    },
  ],
};
