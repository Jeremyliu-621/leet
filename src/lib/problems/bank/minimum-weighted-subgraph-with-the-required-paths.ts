import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-weighted-subgraph-with-the-required-paths',
  title: 'Minimum Weighted Subgraph With the Required Paths',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path'],
  description: `You are given an integer \`n\` denoting the number of nodes of a **weighted directed** graph. The nodes are numbered from \`0\` to \`n - 1\`.

You are also given a 2D integer array \`edges\` where \`edges[i] = [from_i, to_i, weight_i]\` denotes that there exists a **directed** edge from \`from_i\` to \`to_i\` with weight \`weight_i\`.

Lastly, you are given three **distinct** integers \`src1\`, \`src2\`, and \`dest\` denoting three nodes of the graph.

Return the **minimum weight** of a subgraph of the graph such that it is **possible** to reach \`dest\` from both \`src1\` and \`src2\` via a set of edges of this subgraph. In case such a subgraph does not exist, return \`-1\`.

A **subgraph** is a graph whose vertices and edges are subsets of the original graph. The **weight** of a subgraph is the sum of weights of its constituent edges.`,
  constraints: [
    '3 <= n <= 10^5',
    '0 <= edges.length <= 10^5',
    'edges[i].length == 3',
    '0 <= from_i, to_i <= n - 1',
    '1 <= weight_i <= 10^5',
    '0 <= src1, src2, dest <= n - 1',
    'src1, src2, and dest are pairwise distinct.',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,2,2],[0,5,6],[1,0,3],[1,4,5],[2,1,1],[2,3,3],[2,3,4],[3,4,2],[4,5,1]], src1 = 0, src2 = 1, dest = 5',
      output: '9',
      explanation: 'The minimum weight subgraph has edges: 0→2 (2), 2→1 (1), 1→4 (5), 4→5 (1). Total = 9. Both src1=0 and src2=1 can reach dest=5 via a shared meeting point.',
    },
    {
      input: 'n = 3, edges = [[0,1,1],[2,1,1]], src1 = 0, src2 = 2, dest = 1',
      output: '2',
      explanation: 'src1=0 reaches dest=1 directly (cost 1). src2=2 reaches dest=1 directly (cost 1). Total cost = 2.',
    },
  ],
  hints: [
    'Run Dijkstra from src1 to get dist1[v] = shortest path from src1 to v.',
    'Run Dijkstra from src2 to get dist2[v] = shortest path from src2 to v.',
    'Run Dijkstra on the **reversed** graph from dest to get distDest[v] = shortest path from v to dest.',
    'The optimal solution has paths from src1 and src2 merging at some node m, then continuing to dest. The cost is dist1[m] + dist2[m] + distDest[m]. Minimize over all nodes m.',
  ],
  functionName: 'minimumWeight',
  params: ['n', 'edges', 'src1', 'src2', 'dest'],
  starterCode: {
    javascript: `function minimumWeight(n, edges, src1, src2, dest) {

}`,
    python: `def minimumWeight(n, edges, src1, src2, dest):
    pass`,
  },
  visibleTests: [
    { args: [6, [[0, 2, 2], [0, 5, 6], [1, 0, 3], [1, 4, 5], [2, 1, 1], [2, 3, 3], [2, 3, 4], [3, 4, 2], [4, 5, 1]], 0, 1, 5], expected: 9 },
    { args: [3, [[0, 1, 1], [2, 1, 1]], 0, 2, 1], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, [[0, 1, 1], [1, 2, 1], [0, 2, 10]], 0, 1, 2], expected: 2 },
    { args: [3, [[0, 2, 1], [1, 2, 1]], 0, 1, 2], expected: 2 },
    { args: [4, [[0, 1, 1], [1, 3, 1], [2, 1, 1]], 0, 2, 3], expected: 3 },
    { args: [3, [], 0, 1, 2], expected: -1 },
    { args: [4, [[0, 1, 2], [1, 3, 2], [2, 1, 3]], 0, 2, 3], expected: 7 },
  ],
};
