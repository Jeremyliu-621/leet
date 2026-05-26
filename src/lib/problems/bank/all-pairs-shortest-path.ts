import type { Problem } from '../types';

export const problem: Problem = {
  id: 'all-pairs-shortest-path',
  title: 'All-Pairs Shortest Path (Floyd-Warshall)',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph', 'dynamic-programming'],
  description: `Given a directed weighted graph of \`n\` nodes as an **n×n distance matrix** \`dist\`, find the shortest path between every pair of nodes using the **Floyd-Warshall algorithm**.

- \`dist[i][j]\` is the direct edge weight from node \`i\` to node \`j\`, or \`10^9\` (representing infinity) if no direct edge exists.
- \`dist[i][i] = 0\` for all \`i\`.
- All edge weights are non-negative.

Return the updated distance matrix where \`dist[i][j]\` is the shortest path from node \`i\` to node \`j\`.`,
  constraints: [
    '1 <= n <= 100',
    '0 <= dist[i][j] <= 10^4 or dist[i][j] == 10^9 (no edge)',
    'dist[i][i] == 0',
    'No self-loops (dist[i][i] == 0 for all i)',
  ],
  examples: [
    {
      input: 'dist = [[0,3,1000000000],[1000000000,0,1],[3,1000000000,0]]',
      output: '[[0,3,4],[4,0,1],[3,6,0]]',
      explanation: 'Node 0→2 via 0→1→2 (3+1=4). Node 1→0 via 1→2→0 (1+3=4). Node 2→1 via 2→0→1 (3+3=6). All direct edges preserved.',
    },
    {
      input: 'dist = [[0,1,1000000000],[1000000000,0,1],[1000000000,1000000000,0]]',
      output: '[[0,1,2],[1000000000,0,1],[1000000000,1000000000,0]]',
      explanation: 'Path 0→2 via 0→1→2 = 1+1=2.',
    },
  ],
  hints: [
    'Floyd-Warshall: for each intermediate node k (0 to n-1), for each source i, for each destination j, update dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).',
    'The key insight: after considering all intermediaries 0..k, dist[i][j] holds the shortest path using only nodes 0..k as intermediaries.',
    'Initialize the dist matrix in place (or copy it). Three nested loops: k, then i, then j. Watch for overflow when adding two large values (use a safe addition or cap at 10^9).',
  ],
  functionName: 'floydWarshall',
  params: ['dist'],
  starterCode: {
    javascript: `function floydWarshall(dist) {
  const n = dist.length;
  // Three nested loops: for k, for i, for j
  // dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
  return dist;
}`,
    python: `def floydWarshall(dist):
    n = len(dist)
    # Three nested loops: for k, for i, for j
    # dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])
    return dist`,
  },
  visibleTests: [
    {
      args: [[[0, 3, 1000000000], [1000000000, 0, 1], [3, 1000000000, 0]]],
      expected: [[0, 3, 4], [4, 0, 1], [3, 6, 0]],
    },
    {
      args: [[[0, 1, 1000000000], [1000000000, 0, 1], [1000000000, 1000000000, 0]]],
      expected: [[0, 1, 2], [1000000000, 0, 1], [1000000000, 1000000000, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [[[0]]],
      expected: [[0]],
    },
    {
      args: [[[0, 2], [3, 0]]],
      expected: [[0, 2], [3, 0]],
    },
    {
      args: [[[0, 1, 1000000000, 1000000000], [1000000000, 0, 1, 1000000000], [1000000000, 1000000000, 0, 1], [1, 1000000000, 1000000000, 0]]],
      expected: [[0, 1, 2, 3], [3, 0, 1, 2], [2, 3, 0, 1], [1, 2, 3, 0]],
    },
    {
      args: [[[0, 5, 1000000000], [1000000000, 0, 3], [2, 1000000000, 0]]],
      expected: [[0, 5, 8], [5, 0, 3], [2, 7, 0]],
    },
  ],
};
