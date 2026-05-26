import type { Problem } from '../types';

export const problem: Problem = {
  id: 'range-update-point-query-bit',
  title: 'Range Update and Point Query (BIT)',
  difficulty: 'medium',
  tags: ['binary-indexed-tree', 'arrays'],
  description: `You have an array of \`n\` zeros. Process a list of operations:

- \`["add", l, r, v]\` — add integer \`v\` to every element from index \`l\` to \`r\` (0-indexed, inclusive).
- \`["query", i]\` — return the current value of \`nums[i]\`.

Use a Binary Indexed Tree on the **difference array** to support both operations in O(log n).

Return an array containing the results of all \`"query"\` operations, in order.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= operations.length <= 10^5',
    '0 <= l <= r < n',
    '0 <= i < n',
    '-10^4 <= v <= 10^4',
  ],
  examples: [
    {
      input: 'n = 5, operations = [["add",0,2,3],["query",1],["add",1,4,2],["query",3],["query",0]]',
      output: '[3,2,3]',
      explanation: 'Start: [0,0,0,0,0]. After add(0,2,3): [3,3,3,0,0]. query(1)=3. After add(1,4,2): [3,5,5,2,2]. query(3)=2. query(0)=3.',
    },
    {
      input: 'n = 3, operations = [["add",0,2,1],["add",0,2,1],["query",0]]',
      output: '[2]',
      explanation: 'Two range adds of 1 over [0,2]: nums[0]=2.',
    },
  ],
  hints: [
    'Store a difference array diff where diff[i] = nums[i] − nums[i−1]. Range add v to [l,r] becomes diff[l]+=v and diff[r+1]−=v. Point query nums[i] = prefix sum of diff[0..i].',
    'Maintain the difference array as a BIT. "add l r v": BIT.update(l, +v) and BIT.update(r+1, −v). "query i": return BIT.prefixSum(i).',
    'Use 0-indexed BIT internally (shift by 1 when interfacing). The difference BIT\'s prefix sum from 0 to i gives the actual value at position i.',
  ],
  functionName: 'rangeUpdatePointQuery',
  params: ['n', 'operations'],
  starterCode: {
    javascript: `function rangeUpdatePointQuery(n, operations) {
  // Maintain a BIT on the difference array.
  // add(l, r, v): BIT.update(l, +v), BIT.update(r+1, -v)
  // query(i): return BIT.prefixSum(i)
  // Return results of all "query" operations.
}`,
    python: `def rangeUpdatePointQuery(n, operations):
    # Maintain a BIT on the difference array.
    # add(l, r, v): update(l, +v), update(r+1, -v)
    # query(i): return prefix_sum(i)
    # Return results of all "query" operations.
    pass`,
  },
  visibleTests: [
    {
      args: [5, [['add', 0, 2, 3], ['query', 1], ['add', 1, 4, 2], ['query', 3], ['query', 0]]],
      expected: [3, 2, 3],
    },
    {
      args: [3, [['add', 0, 2, 1], ['add', 0, 2, 1], ['query', 0]]],
      expected: [2],
    },
  ],
  hiddenTests: [
    {
      args: [1, [['query', 0]]],
      expected: [0],
    },
    {
      args: [4, [['add', 1, 3, 5], ['query', 0], ['query', 2], ['query', 3]]],
      expected: [0, 5, 5],
    },
    {
      args: [5, [['add', 0, 4, 10], ['add', 2, 4, -3], ['query', 1], ['query', 3]]],
      expected: [10, 7],
    },
    {
      args: [6, [['add', 0, 5, 1], ['add', 2, 3, 2], ['query', 1], ['query', 2], ['query', 4]]],
      expected: [1, 3, 1],
    },
  ],
};
