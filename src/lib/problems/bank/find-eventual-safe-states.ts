import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-eventual-safe-states',
  title: 'Find Eventual Safe States',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There is a directed graph with \`n\` nodes labeled \`0\` to \`n - 1\`. The graph is represented by a **0-indexed** 2D integer array \`graph\` where \`graph[i]\` is an integer array of nodes adjacent to node \`i\`.

A node is a **terminal node** if there are no outgoing edges. A node is a **safe node** if every possible path starting from that node leads to a terminal node (or another safe node).

Return an array containing all the **safe nodes** of the graph. The answer should be sorted in **ascending order**.`,
  constraints: [
    'n == graph.length',
    '1 <= n <= 10^4',
    '0 <= graph[i].length <= n',
    '0 <= graph[i][j] <= n - 1',
    'graph[i] is sorted in a strictly increasing order',
    'The graph may contain self-loops',
    'The number of edges in the graph will be in the range [1, 4 * 10^4]',
  ],
  examples: [
    {
      input: 'graph = [[1,2],[2,3],[5],[0],[5],[],[]]',
      output: '[2,4,5,6]',
      explanation: 'Nodes 5 and 6 are terminal. Node 2 leads only to 5 (safe). Node 4 leads only to 5 (safe).',
    },
    {
      input: 'graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]',
      output: '[4]',
      explanation: 'Only node 4 is terminal (and safe). All other nodes eventually reach a cycle.',
    },
  ],
  hints: [
    'A node is unsafe if it\'s part of or leads to a cycle. Use DFS with 3 states: unvisited (0), in-progress (1), safe (2).',
    'If during DFS we reach an in-progress node, we\'ve found a cycle — mark this path as unsafe.',
    'Alternatively, reverse the graph and do BFS from terminal nodes. A node is safe if it\'s reachable from all its successors\' safe set.',
  ],
  functionName: 'eventualSafeNodes',
  params: ['graph'],
  starterCode: {
    javascript: `function eventualSafeNodes(graph) {
  // Return sorted array of safe node indices
}`,
    python: `def eventualSafeNodes(graph):
    # Return sorted list of safe node indices
    pass`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [5], [0], [5], [], []]], expected: [2, 4, 5, 6] },
    { args: [[[1, 2, 3, 4], [1, 2], [3, 4], [0, 4], []]], expected: [4] },
    { args: [[[1], [2], [3], []]], expected: [0, 1, 2, 3] },
  ],
  hiddenTests: [
    { args: [[[1], [0]]], expected: [] },
    { args: [[[], [0, 2, 3, 4], [3], [4], []]], expected: [0, 1, 2, 3, 4] },
    { args: [[[1, 2], [2], [3], []]], expected: [0, 1, 2, 3] },
    { args: [[[0]]], expected: [] },
  ],
};
