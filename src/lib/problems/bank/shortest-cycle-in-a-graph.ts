import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-cycle-in-a-graph',
  title: 'Shortest Cycle in a Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There is a **bi-directional** graph with \`n\` vertices, where each vertex is labeled from \`0\` to \`n - 1\`. The edges in the graph are represented by a given 2D integer array \`edges\`, where \`edges[i] = [ui, vi]\` denotes an edge between vertex \`ui\` and vertex \`vi\`. Every vertex pair is connected by **at most one** edge, and no vertex has an edge to itself.

Return the length of the **shortest** cycle in the graph. If no cycle exists, return \`-1\`.

A **cycle** is a path that starts and ends at the same node, and each edge in the path is used only once.`,
  constraints: [
    '`2 <= n <= 1000`',
    '`1 <= edges.length <= 1000`',
    '`edges[i].length == 2`',
    '`0 <= ui, vi < n`',
    '`ui != vi`',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]',
      output: '3',
      explanation: 'The shortest cycle is the triangle 0 → 1 → 2 → 0 with length 3.',
    },
    {
      input: 'n = 4, edges = [[0,1],[0,2]]',
      output: '-1',
      explanation: 'There is no cycle in this graph.',
    },
  ],
  functionName: 'findShortestCycle',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
function findShortestCycle(n, edges) {

}`,
    python: `def findShortestCycle(n: int, edges: list[list[int]]) -> int:
    pass`,
  },
  hints: [
    'A cycle exists when BFS from a node reaches an already-visited node via a different path. Run BFS from every node.',
    'When BFS from node `start` visits edge (u, v) and v is already visited (dist[v] != -1) and v is not the parent of u, then a cycle of length dist[u] + dist[v] + 1 is found.',
    'For each starting node, run BFS tracking distances and parents. Take the minimum cycle length found across all starting points. If no cycle is found from any start, return -1.',
  ],
  visibleTests: [
    { args: [7, [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 6], [6, 3]]], expected: 3 },
    { args: [4, [[0, 1], [0, 2]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], expected: 4 },
    { args: [5, [[0, 1], [1, 2], [2, 0], [0, 3], [3, 4], [4, 0]]], expected: 3 },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: 3 },
    { args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0]]], expected: 6 },
    { args: [2, [[0, 1]]], expected: -1 },
  ],
};
