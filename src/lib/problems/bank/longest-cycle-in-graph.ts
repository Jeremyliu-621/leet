import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-cycle-in-graph',
  title: 'Longest Cycle in a Graph',
  difficulty: 'hard',
  tags: ['graph'],
  description: `You are given a **directed** graph of \`n\` nodes numbered from \`0\` to \`n - 1\`, where each node has **at most one** outgoing edge.

The graph is represented with a given **0-indexed** array \`edges\` of size \`n\`, indicating that there is a directed edge from node \`i\` to node \`edges[i]\`. If there is no outgoing edge from node \`i\`, then \`edges[i] == -1\`.

Return the **length of the longest cycle** in the graph. If no cycle exists, return \`-1\`.

A cycle is a path that starts and ends at the **same node**.`,
  constraints: [
    'n == edges.length',
    '2 <= n <= 10^5',
    '-1 <= edges[i] < n',
    'edges[i] != i',
  ],
  examples: [
    {
      input: 'edges = [3,3,4,2,3]',
      output: '3',
      explanation: 'Cycle: 2 → 4 → 3 → 2, length 3.',
    },
    {
      input: 'edges = [1,2,0]',
      output: '3',
      explanation: 'Cycle: 0 → 1 → 2 → 0, length 3.',
    },
    {
      input: 'edges = [-1,2,1]',
      output: '2',
      explanation: 'Cycle: 1 → 2 → 1, length 2.',
    },
  ],
  hints: [
    'Since each node has at most one outgoing edge, each connected component has at most one cycle.',
    'Use a timestamp-based DFS: record visit time for each node. When you reach a node visited in the current traversal, the cycle length is globalTime - visitTime[node].',
    'Skip nodes already fully processed from previous traversals.',
  ],
  functionName: 'longestCycle',
  params: ['edges'],
  starterCode: {
    javascript: `function longestCycle(edges) {

}`,
    typescript: "function longestCycle(edges: number[]): number {\n\n}",

    python: `def longestCycle(edges):
    pass`,
  },
  visibleTests: [
    { args: [[3,3,4,2,3]], expected: 3 },
    { args: [[1,2,0]], expected: 3 },
    { args: [[-1,2,1]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[-1,-1]], expected: -1 },
    { args: [[1,0]], expected: 2 },
    { args: [[1,2,3,4,0]], expected: 5 },
    { args: [[-1,0,-1,4,3]], expected: 2 },
    { args: [[1,2,-1,-1]], expected: -1 },
    { args: [[2,-1,3,1]], expected: -1 },
  ],
};
