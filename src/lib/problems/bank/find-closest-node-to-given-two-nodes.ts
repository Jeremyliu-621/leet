import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-closest-node-to-given-two-nodes',
  title: 'Find Closest Node to Given Two Nodes',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a **directed** graph of \`n\` nodes numbered \`0\` to \`n - 1\`, where each node has **at most one** outgoing edge.

The graph is given as \`edges\`, where \`edges[i]\` is the destination of node \`i\`'s edge, or \`-1\` if node \`i\` has no outgoing edge.

Given two nodes \`node1\` and \`node2\`, return the index of the node that can be reached from **both** \`node1\` and \`node2\`, such that the **maximum** of the two distances is **minimized**. If there are multiple answers, return the one with the **smallest index**. If no such node exists, return \`-1\`.`,
  constraints: [
    'n == edges.length',
    '2 <= n <= 10^5',
    '-1 <= edges[i] < n',
    'edges[i] != i',
    '0 <= node1, node2 < n',
  ],
  examples: [
    {
      input: 'edges = [2,2,3,-1], node1 = 0, node2 = 1',
      output: '2',
      explanation: 'Node 2 is reachable from 0 in 1 step and from 1 in 1 step. max(1,1)=1.',
    },
    {
      input: 'edges = [1,2,-1], node1 = 0, node2 = 2',
      output: '2',
      explanation: 'Node 2 is reachable from 0 in 2 steps and from 2 in 0 steps. max(2,0)=2.',
    },
  ],
  hints: [
    'Since each node has at most one outgoing edge, following a path from a node is O(n) — just walk until you revisit or hit -1.',
    'Compute dist1[i] = distance from node1 to i, dist2[i] = distance from node2 to i (or -1 if unreachable).',
    'Find the node with minimum max(dist1[i], dist2[i]) among nodes reachable from both.',
  ],
  functionName: 'closestMeetingNode',
  params: ['edges', 'node1', 'node2'],
  starterCode: {
    javascript: `function closestMeetingNode(edges, node1, node2) {

}`,
    python: `def closestMeetingNode(edges, node1, node2):
    pass`,
  },
  visibleTests: [
    { args: [[2,2,3,-1], 0, 1], expected: 2 },
    { args: [[1,2,-1], 0, 2], expected: 2 },
  ],
  hiddenTests: [
    { args: [[-1,-1], 0, 1], expected: -1 },
    { args: [[2,0,1], 0, 1], expected: 0 },
    { args: [[1,-1], 0, 1], expected: 1 },
  ],
};
