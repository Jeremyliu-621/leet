import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bridge-finding-undirected',
  title: 'Find All Bridges in an Undirected Graph',
  difficulty: 'hard',
  tags: ['graph'],
  description: `Given an undirected graph with \`n\` nodes (0 to n−1) and a list of undirected \`edges\`, find all **bridges**.

A **bridge** is an edge whose removal increases the number of connected components (i.e., disconnects the graph).

Use the **DFS-based bridge-finding algorithm** (O(V+E)):
- Track \`disc[u]\` (discovery time) and \`low[u]\` (the lowest discovery time reachable from the subtree rooted at u via at most one back edge).
- Edge (parent → child) is a bridge if \`low[child] > disc[parent]\` — meaning the child's subtree cannot reach the parent or any ancestor without going through this edge.

Return each bridge as \`[min(u,v), max(u,v)]\`, with the list of bridges sorted by first element, then second.`,
  constraints: [
    '2 <= n <= 1000',
    '0 <= edges.length <= n * (n - 1) / 2',
    'No self-loops or parallel edges.',
    'The graph may be disconnected.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1],[1,2],[2,0],[1,3]]',
      output: '[[1,3]]',
      explanation: 'Nodes 0,1,2 form a cycle so their edges are not bridges. Edge 1-3 is a bridge — removing it disconnects node 3.',
    },
    {
      input: 'n = 5, edges = [[0,1],[0,2],[1,2],[2,3],[3,4]]',
      output: '[[2,3],[3,4]]',
      explanation: 'The triangle 0-1-2 has no bridges. Edges 2-3 and 3-4 are both bridges.',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2]]',
      output: '[[0,1],[1,2]]',
      explanation: 'A path graph — every edge is a bridge.',
    },
  ],
  hints: [
    'Build an adjacency list. Run DFS from each unvisited node. Maintain a `disc` array (initialized to -1) and `low` array, and a `timer` counter.',
    'In DFS at node u with parent p: disc[u] = low[u] = timer++. For each neighbor v: if v === p, skip (avoid trivially going back). If unvisited, DFS(v, u) then low[u] = min(low[u], low[v]); if low[v] > disc[u] then [min(u,v), max(u,v)] is a bridge. If already visited, low[u] = min(low[u], disc[v]).',
    'After collecting all bridges, sort by first element then second before returning.',
  ],
  functionName: 'findBridges',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function findBridges(n, edges) {\n\n}`,
    typescript: `function findBridges(n: number, edges: number[][]): number[][] {\n\n}`,
    python: `def findBridges(n: int, edges: list[list[int]]) -> list[list[int]]:\n    pass`,
  },
  visibleTests: [
    { args: [4, [[0, 1], [1, 2], [2, 0], [1, 3]]], expected: [[1, 3]] },
    { args: [5, [[0, 1], [0, 2], [1, 2], [2, 3], [3, 4]]], expected: [[2, 3], [3, 4]] },
    { args: [3, [[0, 1], [1, 2]]], expected: [[0, 1], [1, 2]] },
    { args: [2, [[0, 1]]], expected: [[0, 1]] },
  ],
  hiddenTests: [
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 0]]], expected: [] },
    { args: [4, [[0, 1], [1, 2], [2, 3], [3, 1]]], expected: [[0, 1]] },
    { args: [6, [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 3]]], expected: [] },
    { args: [5, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4]]], expected: [[2, 3], [3, 4]] },
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: [[0, 1], [1, 2], [2, 3]] },
  ],
};
