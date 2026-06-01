import type { Problem } from '../types';

export const problem: Problem = {
  id: 'create-components-with-same-value',
  title: 'Create Components With Same Value',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `There is an undirected tree with \`n\` nodes labeled \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`nums\` of length \`n\` where \`nums[i]\` represents the value of the \`i\`th node. You are also given a 2D integer array \`edges\` of length \`n - 1\` where \`edges[j] = [aj, bj]\` indicates that there is an **undirected** edge between nodes \`aj\` and \`bj\` in the tree.

You are allowed to **delete** some edges, splitting the tree into multiple connected components. Let the **value** of a component be the sum of \`nums[i]\` for each node \`i\` in the component.

Return the **maximum number of edges** you can delete, such that every remaining component has the **same value**.

**Approach:**
- The total sum must be divisible by the number of components \`(k+1)\` where \`k\` is the number of deleted edges.
- For each valid divisor \`k\` of \`totalSum\` (trying from largest \`k\` down), check whether the tree can be split into \`k+1\` components each with sum \`totalSum / (k+1)\`.
- Use a post-order DFS: if a subtree's running sum equals the target, "cut" that edge (reset to 0) and increment the component count. If the sum exceeds the target at any node, the split is invalid.`,
  constraints: [
    '`1 <= n <= 2 * 10^4`',
    '`nums.length == n`',
    '`0 <= nums[i] <= 50`',
    '`edges.length == n - 1`',
    '`edges[j].length == 2`',
    '`0 <= aj, bj <= n - 1`',
    'The input represents a valid tree.',
  ],
  examples: [
    {
      input: 'nums = [6,2,2,2,6], edges = [[0,1],[1,2],[1,3],[3,4]]',
      output: '2',
      explanation:
        'The total sum is 18. Delete edges (0-1) and (3-4) to form 3 components: {0} with sum 6, {1,2,3} with sum 6, {4} with sum 6. All components have equal value, so 2 edges can be deleted.',
    },
    {
      input: 'nums = [2], edges = []',
      output: '0',
      explanation: 'There is only one node and no edges to delete.',
    },
  ],
  hints: [
    'The total sum of all node values must be evenly divisible by the number of components. So iterate over possible component counts from largest to smallest.',
    'For a target component sum `t = totalSum / k`, use a DFS from the root. Accumulate subtree sums. Whenever a subtree sum reaches exactly `t`, you can cut the edge above it (reset the subtree contribution to 0). If the sum ever exceeds `t`, the split is impossible for this `k`.',
    'Try divisors from largest to smallest: the first valid split maximises the number of cuts. Build an adjacency list from `edges` and track the parent to avoid re-visiting nodes.',
  ],
  functionName: 'componentValue',
  params: ['nums', 'edges'],
  starterCode: {
    javascript: `function componentValue(nums, edges) {

}`,
    typescript: `function componentValue(nums: number[], edges: number[][]): number {

}`,
    python: `def componentValue(nums, edges):
    pass`,
  },
  visibleTests: [
    { args: [[6, 2, 2, 2, 6], [[0, 1], [1, 2], [1, 3], [3, 4]]], expected: 2 },
    { args: [[2], []], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 1], [[0, 1], [1, 2], [2, 3]]], expected: 3 },
    { args: [[1, 2, 1, 2, 1, 2], [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]], expected: 2 },
    { args: [[4, 1, 1], [[0, 1], [1, 2]]], expected: 0 },
    { args: [[3, 3, 3], [[0, 1], [1, 2]]], expected: 2 },
    { args: [[6, 3, 3, 6, 3, 3], [[0, 1], [0, 2], [3, 4], [3, 5], [0, 3]]], expected: 1 },
    { args: [[1], []], expected: 0 },
    { args: [[10, 10], [[0, 1]]], expected: 1 },
  ],
};
