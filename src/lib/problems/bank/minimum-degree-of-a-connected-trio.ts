import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-degree-of-a-connected-trio',
  title: 'Minimum Degree of a Connected Trio',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given an undirected graph with \`n\` nodes labeled \`1\` through \`n\`.

A **connected trio** is a set of three nodes where every pair is connected by an edge.

The **degree** of a connected trio is the total number of edges that are incident to **exactly one** node in the trio (i.e., edges going outside the trio).

Return the **minimum degree** of a connected trio, or \`-1\` if no trio exists.`,
  constraints: [
    '2 <= n <= 400',
    'edges[i].length == 2',
    '1 <= ai < bi <= n',
    'There are no repeated edges',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]',
      output: '3',
      explanation: 'Trio (1,2,3): degrees 3+3+3−6=3. That\'s the minimum.',
    },
    {
      input: 'n = 7, edges = [[1,3],[4,1],[4,3],[2,5],[5,6],[6,2],[6,7],[3,7],[4,7]]',
      output: '1',
      explanation: 'Trio (2,5,6) with degrees 2+2+3−6=1 is the minimum.',
    },
  ],
  hints: [
    'For a trio (u, v, w), its degree = deg[u] + deg[v] + deg[w] − 6 (subtract the 3 internal edges, each counted twice).',
    'Enumerate all edges (u, v) and for each common neighbor w, check if (u, v, w) is a trio.',
    'Use an adjacency matrix or adjacency sets for O(1) edge-existence queries.',
  ],
  functionName: 'minTrioDegree',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function minTrioDegree(n, edges) {
  // your code here
}`,
    typescript: `function minTrioDegree(n: number, edges: number[][]): number {
  // your code here
}`,
    python: `def minTrioDegree(n, edges):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [6, [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]], expected: 3 },
    { args: [7, [[1,3],[4,1],[4,3],[2,5],[5,6],[6,2],[6,7],[3,7],[4,7]]], expected: 1 },
    { args: [3, [[1,2],[2,3],[1,3]]], expected: 0 },
    { args: [3, [[1,2],[2,3]]], expected: -1 },
    { args: [4, [[1,2],[2,3],[3,1]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [5, [[1,2],[2,3],[3,1],[1,4],[2,4],[3,4],[4,5]]], expected: 3 },
    { args: [4, [[1,2],[2,3],[3,4],[4,1],[1,3]]], expected: 2 },
    { args: [4, [[1,2],[2,3],[3,1],[1,4],[2,4]]], expected: 2 },
    { args: [5, [[1,2],[2,3],[3,4],[4,5],[1,5],[1,3]]], expected: 2 },
    { args: [2, [[1,2]]], expected: -1 },
    { args: [5, [[1,2],[2,3],[3,1],[4,1],[4,2],[4,3]]], expected: 3 },
    { args: [6, [[1,2],[2,3],[3,1],[4,5],[5,6],[6,4],[1,4]]], expected: 1 },
    { args: [4, [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]], expected: 3 },
    { args: [5, [[1,2],[1,3],[2,3],[1,4],[2,5]]], expected: 2 },
    { args: [6, [[1,2],[1,3],[2,3],[4,5],[4,6],[5,6]]], expected: 0 },
  ],
};
