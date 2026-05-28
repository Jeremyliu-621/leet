import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-closest-node-to-given-two-nodes',
  title: 'Find Closest Node to Given Two Nodes',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given a directed graph of \`n\` nodes numbered from \`0\` to \`n-1\`. Each node has **at most one outgoing edge** given by \`edges[i]\` (or \`-1\` if none).

Given two nodes \`node1\` and \`node2\`, find the node \`x\` reachable from **both** that **minimizes** \`max(dist(node1, x), dist(node2, x))\`. If multiple nodes have the same minimum value, return the one with the smallest index. Return \`-1\` if no such node exists.

**Approach:** Walk from each start node recording distances (stopping at cycles or dead ends). Then scan all nodes for the one minimizing the max distance.`,
  constraints: [
    '2 <= n <= 10^5',
    'edges.length == n',
    '-1 <= edges[i] < n',
    '0 <= node1, node2 < n',
  ],
  examples: [
    {
      input: 'edges = [2,2,3,-1], node1 = 0, node2 = 1',
      output: '2',
      explanation: 'dist(0,2)=1, dist(1,2)=1. max=1. Node 3: max=2. Best is node 2.',
    },
    {
      input: 'edges = [1,2,-1], node1 = 0, node2 = 2',
      output: '2',
      explanation: 'From node1=0: 0→1→2, dist=2. From node2=2: dist=0. max=2.',
    },
    {
      input: 'edges = [-1,-1], node1 = 0, node2 = 1',
      output: '-1',
      explanation: 'Nodes 0 and 1 have no outgoing edges; they cannot meet.',
    },
  ],
  hints: [
    'Walk from `node1` and `node2` separately, filling distance arrays. Stop when you hit a -1 edge or revisit a node (cycle).',
    'For each node reachable from both, compute max(d1[i], d2[i]). Return the node with the smallest such maximum (ties broken by smallest index).',
    '```js\nconst dist = (start) => {\n  const d = Array(n).fill(-1);\n  let cur = start, step = 0;\n  while (cur !== -1 && d[cur] === -1) { d[cur] = step++; cur = edges[cur]; }\n  return d;\n};\nconst d1 = dist(node1), d2 = dist(node2);\nlet res = -1, best = Infinity;\nfor (let i = 0; i < n; i++) {\n  if (d1[i] !== -1 && d2[i] !== -1) {\n    const mx = Math.max(d1[i], d2[i]);\n    if (mx < best) { best = mx; res = i; }\n  }\n}\nreturn res;\n```',
  ],
  functionName: 'closestMeetingNode',
  params: ['edges', 'node1', 'node2'],
  starterCode: {
    javascript: `function closestMeetingNode(edges, node1, node2) {
  // return node minimizing max distance from both node1 and node2

}`,
    python: `def closestMeetingNode(edges: list, node1: int, node2: int) -> int:
    # return node minimizing max distance from both node1 and node2
    pass
`,
  },
  visibleTests: [
    { args: [[2, 2, 3, -1], 0, 1], expected: 2 },
    { args: [[1, 2, -1], 0, 2], expected: 2 },
    { args: [[-1, -1], 0, 1], expected: -1 },
  ],
  hiddenTests: [
    { args: [[2, 0, 1], 0, 1], expected: 0 },
    { args: [[1, -1], 0, 1], expected: 1 },
    { args: [[2, 2, 3, -1], 2, 1], expected: 2 },
    { args: [[1, -1], 0, 0], expected: 0 },
    { args: [[3, 3, 3, 4, -1], 0, 1], expected: 3 },
    { args: [[-1, -1, -1], 1, 2], expected: -1 },
    { args: [[2, 2, 3, -1, 0, 2], 4, 1], expected: 2 },
  ],
};
