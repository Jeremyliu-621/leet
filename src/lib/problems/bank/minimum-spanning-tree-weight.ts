import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-spanning-tree-weight',
  title: 'Minimum Spanning Tree Weight',
  difficulty: 'medium',
  tags: ['union-find', 'graph'],
  description: `You are given \`n\` nodes (labeled \`0\` to \`n-1\`) and a list of weighted undirected edges \`edges\` where \`edges[i] = [u, v, w]\` represents an edge between nodes \`u\` and \`v\` with weight \`w\`.

Return the **total weight of the Minimum Spanning Tree (MST)**. If the graph is not fully connected, return \`-1\`.

A **Minimum Spanning Tree** is a subset of edges that connects all nodes with the minimum possible total edge weight, without forming any cycle.

**Algorithm hint:** Use Kruskal's algorithm — sort edges by weight, then greedily add each edge if it connects two previously disconnected components (use Union-Find to detect cycles).`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= edges.length <= 5000',
    'edges[i].length == 3',
    '0 <= u, v < n',
    'u != v',
    '1 <= w <= 10^4',
    'There are no duplicate edges.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,1]]',
      output: '4',
      explanation: 'MST edges: (0,1,1), (2,3,1), (1,2,2). Total = 4.',
    },
    {
      input: 'n = 3, edges = [[0,1,3],[1,2,2]]',
      output: '5',
      explanation: 'Only one spanning tree: total weight = 3 + 2 = 5.',
    },
    {
      input: 'n = 3, edges = [[0,1,1]]',
      output: '-1',
      explanation: 'Node 2 is disconnected; no spanning tree exists.',
    },
  ],
  hints: [
    'Sort edges by weight in ascending order. Use a Union-Find (DSU) structure with path compression and union by rank.',
    'Iterate sorted edges. For each edge (u, v, w): if find(u) != find(v), the edge is safe to add — union them and add w to the total. Count included edges.',
    'An MST of a graph with n nodes has exactly n-1 edges. If you cannot include n-1 edges (graph is disconnected), return -1.',
  ],
  functionName: 'minimumSpanningTreeWeight',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function minimumSpanningTreeWeight(n, edges) {
  // Sort edges by weight, use Union-Find to build MST (Kruskal's).
  // Return total MST weight, or -1 if graph is not fully connected.
}`,
    typescript: `function minimumSpanningTreeWeight(n: number, edges: number[][]): number {
  // Sort edges by weight, use Union-Find to build MST (Kruskal's).
  // Return total MST weight, or -1 if graph is not fully connected.
}`,
    python: `def minimumSpanningTreeWeight(n, edges):
    # Sort edges by weight, use Union-Find to build MST (Kruskal's).
    # Return total MST weight, or -1 if graph is not fully connected.
    pass`,
  },
  visibleTests: [
    { args: [4, [[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,1]]], expected: 4 },
    { args: [3, [[0,1,3],[1,2,2]]], expected: 5 },
    { args: [3, [[0,1,1]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 0 },
    { args: [2, [[0,1,7]]], expected: 7 },
    { args: [4, [[0,1,1],[1,2,1],[2,3,1]]], expected: 3 },
    { args: [4, [[0,1,2],[1,2,3],[0,2,1],[2,3,4]]], expected: 7 },
    { args: [5, [[0,1,1],[0,2,2],[0,3,3],[0,4,4]]], expected: 10 },
    { args: [5, [[0,1,10],[1,2,10],[2,3,10],[3,4,10],[0,4,1],[1,3,1]]], expected: 22 },
    { args: [3, []], expected: -1 },
    { args: [4, [[0,1,5],[1,2,3],[0,3,2],[2,3,4],[0,2,6]]], expected: 9 },
    { args: [4, [[0,1,5],[1,2,3],[2,3,1],[0,3,10]]], expected: 9 },
  ],
};
