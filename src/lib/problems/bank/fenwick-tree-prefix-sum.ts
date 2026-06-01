import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fenwick-tree-prefix-sum',
  title: 'Fenwick Tree — Range Sum Queries',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `You are given an array of integers \`nums\` (1-indexed) and a list of **operations**. Each operation is one of:

- \`["update", i, delta]\` — add \`delta\` to \`nums[i]\` (1-indexed).
- \`["query", l, r]\` — return the sum of \`nums[l..r]\` (inclusive, 1-indexed).

Implement this using a **Fenwick tree** (binary indexed tree) so each update and each query runs in **O(log n)**.

Return an array of the results for every \`"query"\` operation, in order.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= l <= r <= nums.length',
    '1 <= i <= nums.length',
    '-10^4 <= delta <= 10^4',
    '1 <= operations.length <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1, 3, 5, 7, 9, 11], operations = [["query",1,3],["update",1,3],["query",1,3]]',
      output: '[9, 12]',
      explanation: 'Initial prefix sums: [1,4,9,16,25,36]. query(1,3)=9. update(1,+3) → nums=[4,3,5,7,9,11]. query(1,3)=4+3+5=12.',
    },
    {
      input: 'nums = [2, 4, 6], operations = [["query",1,3],["update",2,-2],["query",2,3]]',
      output: '[12, 4]',
      explanation: 'query(1,3)=2+4+6=12. update(2,-2) → nums=[2,2,6]. query(2,3)=2+6=8. Wait: 2+6=8.',
    },
  ],
  hints: [
    'A Fenwick tree (BIT) uses the lowest-set-bit trick: for index i, the node stores the sum of a range whose length is `i & (-i)`. Point update: add delta at i, then at i+(i&-i), etc. Prefix sum up to i: sum at i, then at i-(i&-i), etc.',
    'Build the BIT by calling `update(i, nums[i])` for each i (1-indexed). For a range query [l,r], return `prefixSum(r) - prefixSum(l-1)`.',
    `\`\`\`js\nfunction fenwickRangeSum(nums, operations) {\n  const n = nums.length;\n  const bit = new Array(n + 1).fill(0);\n  const add = (i, v) => { for (; i <= n; i += i & -i) bit[i] += v; };\n  const sum = i => { let s = 0; for (; i > 0; i -= i & -i) s += bit[i]; return s; };\n  for (let i = 0; i < n; i++) add(i + 1, nums[i]);\n  const res = [];\n  for (const [op, a, b] of operations) {\n    if (op === 'update') add(a, b);\n    else res.push(sum(b) - sum(a - 1));\n  }\n  return res;\n}\n\`\`\``,
  ],
  functionName: 'fenwickRangeSum',
  params: ['nums', 'operations'],
  starterCode: {
    javascript: `function fenwickRangeSum(nums, operations) {\n\n}`,
    typescript: `function fenwickRangeSum(nums: number[], operations: [string, number, number][]): number[] {\n\n}`,
    python: `def fenwickRangeSum(nums: list[int], operations: list[list]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    {
      args: [[1, 3, 5, 7, 9, 11], [['query', 1, 3], ['update', 1, 3], ['query', 1, 3]]],
      expected: [9, 12],
    },
    {
      args: [[2, 4, 6], [['query', 1, 3], ['update', 2, -2], ['query', 2, 3]]],
      expected: [12, 8],
    },
    {
      args: [[5], [['query', 1, 1], ['update', 1, 10], ['query', 1, 1]]],
      expected: [5, 15],
    },
  ],
  hiddenTests: [
    {
      args: [[1, 2, 3, 4, 5], [['query', 1, 5]]],
      expected: [15],
    },
    {
      args: [[10, 20, 30], [['update', 2, 5], ['query', 1, 3]]],
      expected: [65],
    },
    {
      args: [[1, 1, 1, 1, 1], [['query', 2, 4], ['update', 3, 9], ['query', 2, 4]]],
      expected: [3, 12],
    },
    {
      args: [[0, 0, 0], [['update', 1, 5], ['update', 2, 3], ['update', 3, 7], ['query', 1, 3]]],
      expected: [15],
    },
    {
      args: [[100], [['query', 1, 1], ['update', 1, -100], ['query', 1, 1]]],
      expected: [100, 0],
    },
  ],
};
