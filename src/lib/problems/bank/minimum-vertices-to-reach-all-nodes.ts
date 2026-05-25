import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-vertices-to-reach-all-nodes',
  title: 'Minimum Number of Vertices to Reach All Nodes',
  difficulty: 'medium',
  tags: ['graph'],
  description: `Given a **directed acyclic graph**, with \`n\` vertices numbered from \`0\` to \`n-1\`, and an array \`edges\` where \`edges[i] = [fromi, toi]\` represents a directed edge from node \`fromi\` to node \`toi\`.

Find **the smallest set of vertices** from which all nodes in the graph are reachable. It's guaranteed that a unique solution exists.

Notice that you can return the vertices in any order.`,
  constraints: [
    '2 <= n <= 10^5',
    '1 <= edges.length <= min(10^5, n * (n - 1) / 2)',
    'edges[i].length == 2',
    '0 <= fromi, toi < n',
    'All pairs (fromi, toi) are distinct',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]',
      output: '[0,3]',
      explanation: 'Nodes 0 and 3 have no incoming edges. All other nodes are reachable from them.',
    },
    {
      input: 'n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]',
      output: '[0,2,3]',
      explanation: 'Nodes 0, 2, 3 have no incoming edges.',
    },
  ],
  hints: [
    'A node that has no incoming edges must be in the result set.',
    'Any node with at least one incoming edge can be reached from another node.',
    'Find all nodes with in-degree 0.',
  ],
  functionName: 'findSmallestSetOfVertices',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function findSmallestSetOfVertices(n, edges) {

}`,
    python: `def findSmallestSetOfVertices(n, edges):
    pass`,
  },
  visibleTests: [
    { args: [6, [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]], expected: [0, 3] },
    { args: [5, [[0, 1], [2, 1], [3, 1], [1, 4], [2, 4]]], expected: [0, 2, 3] },
  ],
  hiddenTests: [
    { args: [2, [[0, 1]]], expected: [0] },
    { args: [3, [[0, 1], [1, 2]]], expected: [0] },
    { args: [4, [[1, 0], [2, 0], [3, 0]]], expected: [1, 2, 3] },
  ],
};
