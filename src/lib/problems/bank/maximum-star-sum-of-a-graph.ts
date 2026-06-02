import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-star-sum-of-a-graph',
  title: 'Maximum Star Sum of a Graph',
  difficulty: 'medium',
  tags: ['graph', 'heap'],
  description: `There is an undirected graph consisting of \`n\` nodes numbered from \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`vals\` of length \`n\` where \`vals[i]\` denotes the value of the \`i\`th node.

You are also given a 2D integer array \`edges\` where \`edges[i] = [a_i, b_i]\` denotes that there exists an **undirected** edge connecting nodes \`a_i\` and \`b_i\`.

A **star graph** is a subgraph of the given graph having a center node containing \`0\` or more neighbors. In other words, it is a subset of edges of the given graph such that every edge is incident to a particular node, called the center.

The **star sum** of a star graph is the sum of the values of all its nodes (center and neighbors).

Given an integer \`k\`, return the **maximum star sum** possible. You may pick only up to \`k\` neighbors for the center node, but you may choose **any center node** and **any neighbors** (including none).

**Note:** Edges with negative-value endpoints can be excluded.`,
  constraints: [
    '`n == vals.length`',
    '`1 <= n <= 10^5`',
    '`-10^4 <= vals[i] <= 10^4`',
    '`0 <= edges.length <= min(n * (n - 1) / 2, 10^5)`',
    '`edges[i].length == 2`',
    '`0 <= a_i, b_i <= n - 1`',
    '`a_i != b_i`',
    '`0 <= k <= n - 1`',
    'The input is generated such that the graph is **simple** (no repeated edges and no self-loops).',
  ],
  examples: [
    {
      input: 'vals = [1,2,3,4,10,-10,-20], edges = [[0,1],[1,2],[1,3],[3,4],[3,5],[3,6]], k = 2',
      output: '16',
      explanation: 'Center node 3 (val=4) with neighbors 4 (val=10) and 1 (val=2): star sum = 4+10+2=16. (Neighbor 5 val=-10 and 6 val=-20 are excluded.)',
    },
    {
      input: 'vals = [-5], edges = [], k = 0',
      output: '-5',
      explanation: 'The only star graph is the isolated node 0 with value -5 and no neighbors (k=0).',
    },
  ],
  hints: [
    'For each node, collect the values of adjacent nodes with positive values.',
    'Sort these neighboring values in descending order and take the top k.',
    'Star sum = vals[center] + sum of top min(k, positiveNeighborCount) neighbor values.',
    'Return the maximum star sum over all nodes.',
  ],
  functionName: 'maxStarSum',
  params: ['vals', 'edges', 'k'],
  starterCode: {
    javascript: `function maxStarSum(vals, edges, k) {
  const n = vals.length;
  const neighbors = Array.from({length: n}, () => []);
  for (const [a, b] of edges) {
    if (vals[b] > 0) neighbors[a].push(vals[b]);
    if (vals[a] > 0) neighbors[b].push(vals[a]);
  }
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    neighbors[i].sort((a, b) => b - a);
    let sum = vals[i];
    for (let j = 0; j < Math.min(k, neighbors[i].length); j++) sum += neighbors[i][j];
    if (sum > ans) ans = sum;
  }
  return ans;
}`,
    typescript: `function maxStarSum(vals: number[], edges: number[][], k: number): number {
  const n = vals.length;
  const neighbors: number[][] = Array.from({length: n}, () => []);
  for (const e of edges) {
    if (vals[e[1]!]! > 0) neighbors[e[0]!]!.push(vals[e[1]!]!);
    if (vals[e[0]!]! > 0) neighbors[e[1]!]!.push(vals[e[0]!]!);
  }
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    neighbors[i]!.sort((a, b) => b - a);
    let sum = vals[i]!;
    for (let j = 0; j < Math.min(k, neighbors[i]!.length); j++) sum += neighbors[i]![j]!;
    if (sum > ans) ans = sum;
  }
  return ans;
}`,
    python: `def maxStarSum(vals, edges, k):
    if hasattr(vals, 'to_py'): vals = list(vals.to_py())
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    n = len(vals)
    neighbors = [[] for _ in range(n)]
    for a, b in edges:
        if vals[b] > 0: neighbors[a].append(vals[b])
        if vals[a] > 0: neighbors[b].append(vals[a])
    ans = -float('inf')
    for i in range(n):
        neighbors[i].sort(reverse=True)
        s = vals[i] + sum(neighbors[i][:k])
        if s > ans: ans = s
    return ans`,
  },
  visibleTests: [
    {
      args: [[1, 2, 3, 4, 10, -10, -20], [[0, 1], [1, 2], [1, 3], [3, 4], [3, 5], [3, 6]], 2],
      expected: 16,
    },
    { args: [[-5], [], 0], expected: -5 },
  ],
  hiddenTests: [
    { args: [[1], [], 0], expected: 1 },
    { args: [[5, -3], [[0, 1]], 1], expected: 5 },
    { args: [[5, 3], [[0, 1]], 1], expected: 8 },
    { args: [[1, 2, 3], [[0, 1], [0, 2], [1, 2]], 1], expected: 5 },
    { args: [[1, 2, 3], [[0, 1], [0, 2], [1, 2]], 2], expected: 6 },
    { args: [[-1, -2, -3], [[0, 1], [1, 2]], 2], expected: -1 },
    { args: [[10, 10, 10, 10], [[0, 1], [0, 2], [0, 3]], 2], expected: 30 },
    { args: [[0, 0, 0], [[0, 1], [1, 2]], 1], expected: 0 },
  ],
};
