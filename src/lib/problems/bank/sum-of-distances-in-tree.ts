import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-distances-in-tree',
  title: 'Sum of Distances in Tree',
  difficulty: 'hard',
  tags: ['graph', 'dynamic-programming'],
  description: `There is an undirected connected tree with \`n\` nodes labeled from \`0\` to \`n - 1\` and \`n - 1\` edges.

You are given the integer \`n\` and the array \`edges\` where \`edges[i] = [a_i, b_i]\` indicates that there is an edge between nodes \`a_i\` and \`b_i\` in the tree.

Return an array \`answer\` of length \`n\` where \`answer[i]\` is the sum of the distances between the \`i\`th node and all other nodes.`,
  constraints: [
    '1 <= n <= 3 * 10^4',
    'edges.length == n - 1',
    '0 <= ai < bi < n',
    'The given input represents a valid tree',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,1],[0,2],[2,3],[2,4],[2,5]]',
      output: '[8,12,6,10,10,10]',
      explanation: 'Node 0 has distances 1,1,2,2,2 (sum=8). Node 2 has distances 1,2,1,1,1 (sum=6).',
    },
    { input: 'n = 1, edges = []', output: '[0]' },
    { input: 'n = 2, edges = [[1,0]]', output: '[1,1]' },
  ],
  hints: [
    'Root the tree at node 0. First DFS: compute count[i] (subtree size) and dp[i] (sum of distances from node i to all nodes in its subtree).',
    'dp[root] is the answer for node 0.',
    'Second DFS (rerooting): for an edge from parent to child, answer[child] = answer[parent] - count[child] + (n - count[child]).',
  ],
  functionName: 'sumOfDistancesInTree',
  params: ['n', 'edges'],
  starterCode: {
    javascript: 'function sumOfDistancesInTree(n, edges) {\n\n}\n',
    python: 'def sumOfDistancesInTree(n, edges):\n    pass\n',
  },
  visibleTests: [
    { args: [6, [[0, 1], [0, 2], [2, 3], [2, 4], [2, 5]]], expected: [8, 12, 6, 10, 10, 10] },
    { args: [1, []], expected: [0] },
    { args: [2, [[1, 0]]], expected: [1, 1] },
  ],
  hiddenTests: [
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: [6, 4, 4, 6] },
    { args: [3, [[0, 1], [0, 2]]], expected: [2, 3, 3] },
  ],
};
