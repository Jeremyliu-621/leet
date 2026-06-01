import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-weighted-subgraph-path',
  title: 'Minimum Weighted Subgraph With the Required Paths',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path'],
  description: `You are given an integer \`n\` denoting the number of nodes of a **weighted directed** graph. The nodes are numbered from \`0\` to \`n - 1\`.

You are also given a 2D integer array \`edges\` where \`edges[i] = [fromi, toi, weighti]\` denotes that there exists a **directed** edge from \`fromi\` to \`toi\` with weight \`weighti\`.

Given three distinct integers \`src1\`, \`src2\`, and \`dest\`, return the **minimum weight** of a subgraph of the graph such that it is possible to reach \`dest\` from both \`src1\` and \`src2\` via a set of edges of this subgraph. If no such subgraph exists, return \`-1\`.`,
  constraints: [
    '3 <= n <= 10^5',
    '0 <= edges.length <= 10^5',
    'edges[i].length == 3',
    '0 <= fromi, toi <= n - 1',
    'fromi != toi',
    '1 <= weighti <= 10^5',
    '0 <= src1, src2, dest <= n - 1',
    'src1, src2, and dest are pairwise distinct.',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,2,2],[0,3,1],[1,2,3],[1,3,1],[3,5,2],[2,4,1],[4,5,2]], src1 = 0, src2 = 1, dest = 5',
      output: '4',
      explanation: 'Both src1=0 and src2=1 reach node 3 with cost 1 each. From 3 to dest=5 costs 2. Total = 1+1+2 = 4.',
    },
    {
      input: 'n = 3, edges = [[0,1,1],[1,2,1],[0,2,10]], src1 = 0, src2 = 0, dest = 2',
      output: '2',
      explanation: 'Both sources are node 0. The path 0→1→2 costs 2, cheaper than direct edge 0→2 (cost 10).',
    },
  ],
  hints: [
    'The optimal subgraph is "Y-shaped": paths from src1 and src2 independently reach some merge node m, then a single path goes from m to dest.',
    'Run Dijkstra three times: from src1 (forward), from src2 (forward), and from dest on the reversed graph.',
    'For each candidate merge node m, the total cost is dist1[m] + dist2[m] + dist3[m]. Return the minimum over all m, or -1 if no valid m exists.',
  ],
  functionName: 'minimumWeight',
  params: ['n', 'edges', 'src1', 'src2', 'dest'],
  starterCode: {
    javascript: 'function minimumWeight(n, edges, src1, src2, dest) {\n  \n}\n',
    typescript: 'function minimumWeight(n: number, edges: number[][], src1: number, src2: number, dest: number): number {\n  \n}',
    python: 'def minimumWeight(n, edges, src1, src2, dest):\n    pass\n',
  },
  visibleTests: [
    { args: [6, [[0, 2, 2], [0, 3, 1], [1, 2, 3], [1, 3, 1], [3, 5, 2], [2, 4, 1], [4, 5, 2]], 0, 1, 5], expected: 4 },
    { args: [3, [[0, 1, 1], [1, 2, 1], [0, 2, 10]], 0, 0, 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, [[0, 1, 1], [1, 0, 1]], 0, 0, 2], expected: -1 },
    { args: [5, [[0, 1, 2], [0, 2, 3], [1, 3, 1], [2, 3, 1], [3, 4, 1]], 0, 0, 4], expected: 4 },
    { args: [4, [[0, 2, 1], [1, 2, 1], [2, 3, 1]], 0, 1, 3], expected: 3 },
  ],
};
