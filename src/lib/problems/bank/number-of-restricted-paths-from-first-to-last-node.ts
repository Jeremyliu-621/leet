import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-restricted-paths-from-first-to-last-node',
  title: 'Number of Restricted Paths From First to Last Node',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path', 'dynamic-programming'],
  description: `There is an undirected weighted connected graph. You are given a positive integer \`n\` which denotes that the graph has \`n\` nodes labeled from \`1\` to \`n\`, and an array \`edges\` where \`edges[i] = [ui, vi, weighti]\` denotes that there is an edge between nodes \`ui\` and \`vi\` with weight equal to \`weighti\`.

A path from node \`start\` to node \`end\` is a sequence of nodes where each consecutive pair has an edge between them. The **distance** of a path is the sum of the weights on the edges in the path.

Let \`distanceToLastNode(x)\` denote the shortest distance of a path between node \`x\` and node \`n\`. A **restricted path** is a path that also satisfies that \`distanceToLastNode(zi) > distanceToLastNode(zi+1)\` where \`0 <= i <= k-1\`.

Return the number of restricted paths from node \`1\` to node \`n\`. Since that number may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 2 * 10^4',
    'n - 1 <= edges.length <= 4 * 10^4',
    'edges[i].length == 3',
    '1 <= ui, vi <= n',
    'ui != vi',
    '1 <= weighti <= 10^5',
    'There is exactly one path between any two nodes.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]',
      output: '3',
      explanation: 'Three restricted paths: 1→2→5, 1→3→5, 1→2→3→5.',
    },
    {
      input: 'n = 7, edges = [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]',
      output: '1',
      explanation: 'Only one restricted path from 1 to 7.',
    },
  ],
  hints: [
    'Run Dijkstra from node n to get distanceToLastNode for every node.',
    'Sort or process nodes in increasing order of their distance to n.',
    'dp[i] = number of restricted paths from i to n.',
    'dp[n] = 1. For each node i in increasing distanceToLastNode order, sum dp[j] for all neighbors j of i where dist[j] < dist[i].',
    'Use a min-heap for Dijkstra, and memoize dp values.',
  ],
  functionName: 'countRestrictedPaths',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countRestrictedPaths(n, edges) {

}`,
    typescript: "function countRestrictedPaths(n: number, edges: number[][]): number {\n\n}",

    python: `def countRestrictedPaths(n, edges):
    pass`,
  },
  visibleTests: [
    { args: [5, [[1,2,3],[1,3,3],[2,3,1],[1,4,2],[5,2,2],[3,5,1],[5,4,10]]], expected: 3 },
    { args: [7, [[1,3,1],[4,1,2],[7,3,4],[2,5,3],[5,6,1],[6,7,2],[7,5,3],[2,6,4]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [2, [[1,2,5]]], expected: 1 },
    { args: [3, [[1,2,1],[2,3,1],[1,3,5]]], expected: 2 },
  ],
};
