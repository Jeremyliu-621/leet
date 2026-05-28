import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-good-paths',
  title: 'Number of Good Paths',
  difficulty: 'hard',
  tags: ['union-find', 'tree', 'graph'],
  description: `There is a tree (i.e., a connected, undirected graph with no cycles) consisting of \`n\` nodes numbered from \`0\` to \`n - 1\` and exactly \`n - 1\` edges.

You are given a **0-indexed** integer array \`vals\` of length \`n\` where \`vals[i]\` denotes the value of the \`i\`-th node. You are also given a 2D integer array \`edges\` where \`edges[i] = [ai, bi]\` denotes that there exists an **undirected** edge connecting nodes \`ai\` and \`bi\`.

A **good path** is a simple path that satisfies the following conditions:
1. The starting node and the ending node have the **same value**.
2. All nodes between the starting node and the ending node have values **less than or equal to** the starting node's value.

Return the number of **distinct** good paths.

Note that a path and its reverse are counted as the **same** path. Also, a single node is considered a valid good path.`,
  constraints: [
    'n == vals.length',
    '1 <= n <= 3 * 10^4',
    '0 <= vals[i] <= 10^5',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '0 <= edges[i][0], edges[i][1] < n',
    'edges[i][0] != edges[i][1]',
    'The input is a valid tree',
  ],
  examples: [
    {
      input: 'vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]',
      output: '6',
      explanation:
        '5 single-node paths + 1 path between nodes 1 and 4 (both have value 3, all intermediate nodes have values ≤ 3). Total = 6.',
    },
    {
      input: 'vals = [1,1,2,2,3], edges = [[0,1],[1,2],[2,3],[2,4]]',
      output: '7',
      explanation:
        '5 single-node paths + path 0-1 (both value 1) + path 3-4 ... wait: 3-2 has val 2, but 2-4 also val ... = 7.',
    },
    {
      input: 'vals = [1], edges = []',
      output: '1',
    },
  ],
  hints: [
    'Sort nodes by their values. Process edges in increasing order of the maximum value of their endpoints. Use Union-Find to merge components.',
    'When merging two components via an edge (u, v) where `max(vals[u], vals[v]) == v`, the number of new good paths equals `(count of nodes with max-val in u\'s component) * (count of nodes with max-val in v\'s component)`.',
    'Maintain for each Union-Find root the count of nodes with the maximum value in that component. When merging: if the max values differ, one component\'s count just carries over; if they are equal, multiply the counts for new paths and add them to the answer.',
  ],
  functionName: 'numberOfGoodPaths',
  params: ['vals', 'edges'],
  starterCode: {
    javascript: 'function numberOfGoodPaths(vals, edges) {\n  \n}\n',
    python: 'def numberOfGoodPaths(vals, edges):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 3, 2, 1, 3], [[0, 1], [0, 2], [2, 3], [2, 4]]], expected: 6 },
    { args: [[1, 1, 2, 2, 3], [[0, 1], [1, 2], [2, 3], [2, 4]]], expected: 7 },
    { args: [[1], []], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1], [[0, 1]]], expected: 3 },
    { args: [[1, 2, 3], [[0, 1], [1, 2]]], expected: 3 },
    { args: [[2, 2, 2], [[0, 1], [1, 2]]], expected: 6 },
    { args: [[1, 2, 1], [[0, 1], [1, 2]]], expected: 3 },
    { args: [[3, 1, 3, 1, 3], [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 8 },
  ],
};
