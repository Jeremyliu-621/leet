import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-visit-disappearing-nodes',
  title: 'Minimum Time to Visit Disappearing Nodes',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `You have \`n\` nodes numbered \`0\` to \`n - 1\` and an array of undirected weighted edges \`edges[i] = [u, v, w]\`. Node \`i\` **disappears** at time \`disappear[i]\` — you cannot arrive at node \`i\` at or after time \`disappear[i]\`.

Starting at node \`0\` at time \`0\`, return an array \`answer\` of length \`n\` where \`answer[i]\` is the **minimum time** to reach node \`i\`, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= n <= 5000',
    '0 <= edges.length <= 10^5',
    'edges[i] = [ui, vi, wi] where 1 <= wi <= 10^9',
    '1 <= disappear[i] <= 10^9',
    'disappear[0] is always large enough to allow departure from node 0',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1,2],[1,2,1],[0,2,4]], disappear = [1,1,5]',
      output: '[0,-1,4]',
      explanation: 'From node 0 (time 0): edge to node 1 arrives at time 2, but disappear[1] = 1 so node 1 is unreachable. Edge to node 2 arrives at time 4, and disappear[2] = 5 > 4, so it is reachable.',
    },
    {
      input: 'n = 3, edges = [[0,1,2],[1,2,1],[0,2,4]], disappear = [1,3,5]',
      output: '[0,2,3]',
      explanation: 'Node 1 is reached at time 2 (disappear[1]=3 > 2). From node 1, node 2 is reached at time 3 (2+1=3 < 5). So going via node 1 is faster than the direct edge.',
    },
  ],
  hints: [
    'Run Dijkstra from node 0. Use a min-heap ordered by arrival time.',
    'When relaxing an edge (u → v, weight w) at time t: the new arrival time is t + w. This is only valid if t + w < disappear[v] (strictly less — at the disappear time the node is gone).',
    'Nodes that cannot be reached (either because all paths are blocked or their distance remains Infinity) should output -1.',
  ],
  functionName: 'minimumTime',
  params: ['n', 'edges', 'disappear'],
  starterCode: {
    javascript: `function minimumTime(n, edges, disappear) {
  // Build adjacency list, then run Dijkstra from node 0.
  // A relaxation to node v is only valid if the new time < disappear[v].
}`,
    typescript: "function minimumTime(n: number, edges: number[][], disappear: number[]): number[] {\n  // Build adjacency list, then run Dijkstra from node 0.\n  // A relaxation to node v is only valid if the new time < disappear[v].\n}",

    python: `def minimumTime(n, edges, disappear):
    # Build adjacency list, then run Dijkstra from node 0.
    # A relaxation to node v is only valid if the new time < disappear[v].
    pass`,
  },
  visibleTests: [
    { args: [3, [[0, 1, 2], [1, 2, 1], [0, 2, 4]], [1, 1, 5]], expected: [0, -1, 4] },
    { args: [3, [[0, 1, 2], [1, 2, 1], [0, 2, 4]], [1, 3, 5]], expected: [0, 2, 3] },
  ],
  hiddenTests: [
    { args: [1, [], [10]], expected: [0] },
    { args: [2, [[0, 1, 5]], [10, 4]], expected: [0, -1] },
    { args: [4, [[0, 1, 1], [1, 2, 1], [2, 3, 1]], [10, 10, 10, 4]], expected: [0, 1, 2, 3] },
    { args: [3, [[0, 1, 3], [0, 2, 1], [1, 2, 1]], [10, 10, 3]], expected: [0, 2, 1] },
    { args: [2, [[0, 1, 1]], [5, 1]], expected: [0, -1] },
  ],
};
