import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reachable-nodes-with-restrictions',
  title: 'Reachable Nodes With Restrictions',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `There is an undirected tree with \`n\` nodes labeled from \`0\` to \`n - 1\` and \`n - 1\` edges.

You are given a 2D integer array \`edges\` of length \`n - 1\` where \`edges[i] = [a_i, b_i]\` indicates that there is an edge between nodes \`a_i\` and \`b_i\` in the tree. You are also given an integer array \`restricted\` which represents **restricted** nodes.

Return the **maximum** number of nodes you can reach from node \`0\` without visiting a restricted node. Note that node \`0\` will **not** be a restricted node.

**Args:** \`n: number, edges: number[][], restricted: number[]\`

**Example 1:**

\`\`\`
Input: n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
Output: 4
Explanation: From 0, we can reach 0, 1, 2, 3 (nodes 4, 5, 6 are blocked or beyond 5).
\`\`\`

**Example 2:**

\`\`\`
Input: n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]
Output: 3
Explanation: From 0 we can reach 0, 5, 6.
\`\`\``,
  constraints: [
    '2 <= n <= 10^5',
    'edges.length == n - 1',
    'edges[i].length == 2',
    '0 <= a_i, b_i < n',
    'a_i != b_i',
    '1 <= restricted.length < n',
    '1 <= restricted[i] < n',
    'All values of restricted[] are unique',
    'The input is guaranteed to be a valid tree',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]',
      output: '4',
    },
    {
      input: 'n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]',
      output: '3',
    },
  ],
  hints: [
    'Build an adjacency list from the edges. Store restricted nodes in a Set for O(1) lookup.',
    'BFS or DFS from node 0. Do not visit any node that is in the restricted set.',
    'Count the visited nodes — that is the answer.',
  ],
  functionName: 'reachableNodes',
  params: ['n', 'edges', 'restricted'],
  starterCode: {
    javascript: 'function reachableNodes(n, edges, restricted) {\n  \n}\n',
    python: 'def reachableNodes(n, edges, restricted):\n    ',
    typescript:
      'function reachableNodes(n: number, edges: number[][], restricted: number[]): number {\n  \n}\n',
  },
  visibleTests: [
    {
      args: [7, [[0, 1], [1, 2], [3, 1], [4, 0], [0, 5], [5, 6]], [4, 5]],
      expected: 4,
    },
    {
      args: [7, [[0, 1], [0, 2], [0, 5], [0, 4], [3, 2], [6, 5]], [4, 2, 1]],
      expected: 3,
    },
  ],
  hiddenTests: [
    {
      args: [3, [[0, 1], [1, 2]], [2]],
      expected: 2,
    },
    {
      args: [3, [[0, 1], [1, 2]], [1]],
      expected: 1,
    },
    {
      args: [5, [[0, 1], [0, 2], [0, 3], [0, 4]], [2, 3]],
      expected: 3,
    },
    {
      args: [6, [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]], [3]],
      expected: 3,
    },
    {
      args: [2, [[0, 1]], [1]],
      expected: 1,
    },
  ],
};
