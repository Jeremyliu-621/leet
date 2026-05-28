import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-graph-bipartite',
  title: 'Is Graph Bipartite?',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There is an undirected graph with \`n\` nodes, where each node is numbered between \`0\` and \`n - 1\`. You are given a 2D array \`graph\`, where \`graph[u]\` is an array of nodes that node \`u\` is adjacent to.

A graph is **bipartite** if the nodes can be partitioned into two independent sets \`A\` and \`B\` such that every edge in the graph connects a node in set \`A\` and a node in set \`B\`.

Return \`true\` if and only if it is bipartite.`,
  constraints: [
    'graph.length == n',
    '1 <= n <= 100',
    '0 <= graph[u].length < n',
    '0 <= graph[u][i] <= n - 1',
    'graph[u] does not contain u',
    'All the values of graph[u] are unique',
    'If graph[u] contains v, then graph[v] contains u',
  ],
  examples: [
    {
      input: 'graph = [[1,2,3],[0,2],[0,1,3],[0,2]]',
      output: 'false',
      explanation: 'Cannot be split into two sets. Node 0 connects to 1, 2, 3 and node 2 connects to 0, 1, 3, creating an odd cycle.',
    },
    {
      input: 'graph = [[1,3],[0,2],[1,3],[0,2]]',
      output: 'true',
      explanation: 'Set A = {0, 2}, Set B = {1, 3}. Every edge crosses between A and B.',
    },
  ],
  hints: [
    'Try to 2-color the graph using BFS or DFS. Assign color 0 to the starting node and alternate colors along each edge.',
    'If you find a neighbor with the same color as the current node, the graph is not bipartite.',
    'The graph may be disconnected — run BFS/DFS from every unvisited node.',
  ],
  functionName: 'isBipartite',
  params: ['graph'],
  starterCode: {
    javascript: `function isBipartite(graph) {
  // Return true if the graph can be 2-colored
}`,
    python: `def isBipartite(graph):
    # Return True if the graph can be 2-colored
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]], expected: false },
    { args: [[[1, 3], [0, 2], [1, 3], [0, 2]]], expected: true },
    { args: [[[1], [0, 3], [3], [1, 2]]], expected: true },
  ],
  hiddenTests: [
    { args: [[[1], [0]]], expected: true },
    { args: [[[1, 2], [0, 2], [0, 1]]], expected: false },
    { args: [[[2, 4], [2, 3], [0, 1], [1], [0]]], expected: true },
    { args: [[[1], [0], [3], [2]]], expected: true },
  ],
};
