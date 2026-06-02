import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-edge-weight-equilibrium-queries-in-a-tree',
  title: 'Minimum Edge Weight Equilibrium Queries in a Tree',
  difficulty: 'hard',
  tags: ['tree', 'graph', 'binary-search'],
  description: `There is an undirected tree with \`n\` nodes labeled from \`0\` to \`n - 1\`. You are given the integer \`n\` and a 2D integer array \`edges\` of length \`n - 1\`, where \`edges[i] = [u_i, v_i, w_i]\` indicates that there is an edge between nodes \`u_i\` and \`v_i\` with weight \`w_i\` in the tree. Edge weights are positive integers from \`1\` to \`26\`.

You are also given a 2D integer array \`queries\` of length \`m\`, where \`queries[i] = [a_i, b_i, w_i]\`. For each query, find the **minimum number of operations** required to make all edge weights on the path from \`a_i\` to \`b_i\` equal to \`w_i\`. In one operation, you can change the weight of any edge to any value.

Return an array \`answer\` of length \`m\` where \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '1 <= n <= 10^4',
    'edges.length == n - 1',
    'edges[i].length == 3',
    '0 <= u_i, v_i < n',
    '1 <= w_i <= 26',
    '1 <= queries.length <= 2 * 10^4',
    'queries[i].length == 3',
    '0 <= a_i, b_i < n',
    '1 <= queries[i][2] <= 26',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]], queries = [[0,3,1],[0,3,2],[0,6,1],[0,6,2]]',
      output: '[0,3,3,3]',
      explanation: 'Path 0-3 has 3 edges all with weight 1. For w=1: 0 changes. For w=2: 3 changes. Path 0-6 has 6 edges (3 with w=1, 3 with w=2). For w=1: 3 changes. For w=2: 3 changes.',
    },
    {
      input: 'n = 4, edges = [[0,1,1],[1,2,1],[2,3,2]], queries = [[0,3,1],[0,3,2],[1,3,1]]',
      output: '[1,2,1]',
    },
  ],
  hints: [
    'Level 1: The answer for query (a, b, w) = (path length from a to b) - (number of edges on path with weight w). Path length = depth[a] + depth[b] - 2*depth[LCA(a,b)].',
    'Level 2: To count edges with a given weight on a path, use prefix counts: cnt[v][w] = number of edges with weight w on the path from root to v. Then count on path a-b = cnt[a][w] + cnt[b][w] - 2*cnt[LCA][w].',
    'Level 3: Build binary lifting for LCA in O(n log n). Use BFS from root 0 to compute depth, parent arrays, and prefix weight-count arrays. Answer each query in O(log n).',
  ],
  functionName: 'minOperationsQueries',
  params: ['n', 'edges', 'queries'],
  starterCode: {
    javascript: `function minOperationsQueries(n, edges, queries) {

}`,
    typescript: `function minOperationsQueries(n: number, edges: number[][], queries: number[][]): number[] {

}`,
    python: `def minOperationsQueries(n: int, edges: list[list[int]], queries: list[list[int]]) -> list[int]:
    pass`,
  },
  visibleTests: [
    { args: [7, [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]], [[0,3,1],[0,3,2],[0,6,1],[0,6,2]]], expected: [0,3,3,3] },
    { args: [4, [[0,1,1],[1,2,1],[2,3,2]], [[0,3,1],[0,3,2],[1,3,1]]], expected: [1,2,1] },
  ],
  hiddenTests: [
    { args: [1, [], [[0,0,1]]], expected: [0] },
    { args: [2, [[0,1,3]], [[0,1,3],[0,1,1]]], expected: [0,1] },
    { args: [3, [[0,1,1],[1,2,2]], [[0,2,1],[0,2,2],[0,2,3]]], expected: [1,1,2] },
    { args: [5, [[0,1,1],[0,2,2],[0,3,3],[0,4,4]], [[1,2,1],[1,2,2],[3,4,1]]], expected: [1,1,2] },
    { args: [4, [[0,1,1],[0,2,1],[0,3,1]], [[1,2,1],[1,3,1],[2,3,1]]], expected: [0,0,0] },
  ],
};
