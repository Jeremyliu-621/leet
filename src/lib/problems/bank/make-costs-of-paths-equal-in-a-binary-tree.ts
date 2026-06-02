import type { Problem } from '../types';

export const problem: Problem = {
  id: 'make-costs-of-paths-equal-in-a-binary-tree',
  title: 'Make Costs of Paths Equal in a Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming', 'arrays'],
  description: `You are given an integer \`n\` representing the number of nodes in a **perfect binary tree** consisting of nodes numbered from \`1\` to \`n\`. A **perfect binary tree** is a tree where each node (except the leaves) has exactly two children and all leaf nodes are at the same depth.

You are also given a **1-indexed** integer array \`cost\` of size \`n\`, where \`cost[i]\` is the cost of node \`i\`.

You can increment the cost of any node by 1 any number of times.

Return the **minimum number of increments** needed to make the cost of every root-to-leaf path equal.

**Note:** A root-to-leaf path is the sequence of nodes from the root to any leaf, and the cost of such a path is the sum of costs of all nodes on the path.`,
  constraints: [
    '1 <= n <= 10^5',
    'n == 2^k - 1 for some integer k (i.e., n is a perfect binary tree)',
    'cost.length == n',
    '1 <= cost[i] <= 10^6',
  ],
  examples: [
    {
      input: 'n = 7, cost = [1,5,2,2,3,3,1]',
      output: '6',
      explanation: 'Leaves are nodes 4,5,6,7 (costs 2,3,3,1). Siblings (4,5): diff=1, +1. Siblings (6,7): diff=2, +2. After leaf equalization, internal nodes 2 and 3 have subtree path sums 5+3=8 and 2+3=5, diff=3, +3. Total=1+2+3=6.',
    },
    {
      input: 'n = 3, cost = [5,3,3]',
      output: '0',
      explanation: 'Paths: 5+3=8 and 5+3=8. Already equal, no increments needed.',
    },
    {
      input: 'n = 7, cost = [1,1,1,1,1,1,1]',
      output: '0',
      explanation: 'All paths: 1+1+1=3. Already equal.',
    },
  ],
  hints: [
    'Level 1: In a perfect binary tree, nodes 1..n are stored as a 1-indexed array. Node i has children 2i (left) and 2i+1 (right). Leaves are nodes from ceil(n/2) to n.',
    'Level 2: Process the tree bottom-up level by level. For each pair of siblings (nodes 2i, 2i+1), the sibling with the smaller cumulative path cost must be incremented to match. The cost added is abs(cost[2i] - cost[2i+1]). Then propagate the max upward to parent by adding max(cost[2i], cost[2i+1]) to cost[i].',
    'Level 3: Sum all the increments: for every internal node i, ans += abs(cost[2*i] - cost[2*i+1]). Iterate i from n/2 down to 1 (or equivalently n//2 down to 1). The propagation step is: cost[i] += max(cost[2i], cost[2i+1]).',
  ],
  functionName: 'minIncrements',
  params: ['n', 'cost'],
  starterCode: {
    javascript: `function minIncrements(n, cost) {\n\n}`,
    typescript: `function minIncrements(n: number, cost: number[]): number {\n\n}`,
    python: `def minIncrements(n, cost):\n    pass`,
  },
  visibleTests: [
    { args: [7, [1, 5, 2, 2, 3, 3, 1]], expected: 6 },
    { args: [3, [5, 3, 3]], expected: 0 },
    { args: [7, [1, 1, 1, 1, 1, 1, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, [5]], expected: 0 },
    { args: [3, [1, 2, 3]], expected: 1 },
    { args: [7, [1, 1, 1, 2, 1, 1, 1]], expected: 2 },
    { args: [7, [1, 1, 1, 1, 1, 1, 7]], expected: 12 },
    { args: [15, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], expected: 0 },
    { args: [3, [1, 3, 1]], expected: 2 },
  ],
};
