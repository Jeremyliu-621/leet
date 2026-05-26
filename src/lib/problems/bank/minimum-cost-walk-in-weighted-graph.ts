import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-walk-in-weighted-graph',
  title: 'Minimum Cost Walk in Weighted Graph',
  difficulty: 'medium',
  tags: ['union-find', 'graph', 'arrays'],
  description: `There is an undirected weighted graph with \`n\` vertices labeled from \`0\` to \`n - 1\`.

You are given the integer \`n\` and an array \`edges\`, where \`edges[i] = [ui, vi, wi]\` indicates there is an edge between vertices \`ui\` and \`vi\` with weight \`wi\`.

A **walk** on a graph is a sequence of vertices and edges. The walk starts and ends at a vertex and each consecutive pair of vertices must be connected by an edge. A walk's **cost** is the bitwise AND of the weights of all edges in the walk.

The cost of a walk starting at vertex \`s\` and ending at vertex \`t\` is the minimum among all possible walks from \`s\` to \`t\`. If there is no path between \`s\` and \`t\`, the answer is \`-1\`.

Return an array \`answer\` where \`answer[i]\` is the minimum cost of the walk for query \`queries[i]\`.`,
  constraints: [
    '2 <= n <= 10^5',
    '0 <= edges.length <= 10^5',
    'edges[i].length == 3',
    '0 <= ui, vi <= n - 1',
    'ui != vi',
    '0 <= wi <= 10^5',
    '1 <= queries.length <= 10^5',
    'queries[i].length == 2',
    '0 <= si, ti <= n - 1',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], queries = [[0,3],[3,4]]',
      output: '[1,-1]',
      explanation: 'Nodes {0,1,2,3} form one component with AND = 7&7&1 = 1. Node 4 is isolated. Query [0,3]: same component, cost = 1. Query [3,4]: different components, cost = -1.',
    },
    {
      input: 'n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], queries = [[1,2]]',
      output: '[0]',
      explanation: 'All nodes are connected. AND of all edges: 7 & 15 & 6 & 1 = 0. Any walk between nodes in this component can use all edges, so cost = 0.',
    },
  ],
  hints: [
    'Key insight: if two nodes are in the same connected component, you can always find a walk that uses every edge in the component (by going back and forth). So the minimum cost = AND of all edges in the component.',
    'Build a Union-Find. For each edge (u, v, w), union u and v. For each component root, track the AND of all edge weights that connect nodes in that component.',
    'For a query (s, t): if find(s) != find(t), return -1. Otherwise return the precomputed AND for the component containing s and t.',
  ],
  functionName: 'minimumCost',
  params: ['n', 'edges', 'queries'],
  starterCode: {
    javascript: 'function minimumCost(n, edges, queries) {\n  \n}\n',
    python: 'def minimumCost(n, edges, queries):\n    pass\n',
  },
  visibleTests: [
    { args: [5, [[0,1,7],[1,3,7],[1,2,1]], [[0,3],[3,4]]], expected: [1, -1] },
    { args: [3, [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], [[1,2]]], expected: [0] },
  ],
  hiddenTests: [
    // n=2, single edge weight 5: path (0→1) direct cost = 5
    { args: [2, [[0,1,5]], [[0,1],[1,0]]], expected: [5, 5] },
    // n=4, disconnected: no edges at all
    { args: [4, [], [[0,3],[0,1]]], expected: [-1, -1] },
    // n=4, parallel edges between 0-1: AND = 4&3 = 0
    { args: [4, [[0,1,4],[0,1,3]], [[0,1]]], expected: [0] },
    // n=3, chain: AND of (2,4) = 0 for the full component
    // 0-1 weight 6 (0b110), 1-2 weight 5 (0b101): AND = 0b100 = 4
    { args: [3, [[0,1,6],[1,2,5]], [[0,2],[1,2]]], expected: [4, 4] },
    // n=5, two components: {0,1,2} and {3,4}
    // edges in {0,1,2}: (0,1,3),(1,2,7). AND = 3&7 = 3.
    // edges in {3,4}: (3,4,5). AND = 5.
    // queries: [0,2]→3, [3,4]→5, [0,3]→-1
    { args: [5, [[0,1,3],[1,2,7],[3,4,5]], [[0,2],[3,4],[0,3]]], expected: [3, 5, -1] },
  ],
};
