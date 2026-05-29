import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-edge-reversals-to-reach-destination',
  title: 'Minimum Edge Reversals to Reach Destination',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `Given a **directed** graph of \`n\` nodes (labeled \`0\` to \`n - 1\`) and a list of directed edges, return the **minimum number of edges that must be reversed** so that there is a directed path from \`source\` to \`destination\`.

If no path can be created (even after reversing edges), return \`-1\`.

An edge reversal turns a directed edge \`u → v\` into \`v → u\`.`,
  constraints: [
    '2 ≤ n ≤ 1000',
    '0 ≤ edges.length ≤ 5000',
    'edges[i].length == 2',
    '0 ≤ edges[i][0], edges[i][1] < n',
    'source != destination',
    '0 ≤ source, destination < n',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[0,1],[1,2],[2,3]], source = 0, destination = 3',
      output: '0',
      explanation: 'The path 0→1→2→3 already exists.',
    },
    {
      input: 'n = 4, edges = [[0,1],[1,2],[2,3]], source = 3, destination = 0',
      output: '3',
      explanation: 'All three edges must be reversed to form 3→2→1→0.',
    },
    {
      input: 'n = 3, edges = [[0,1],[2,0]], source = 2, destination = 1',
      output: '0',
      explanation: 'Path 2→0→1 already exists with no reversals.',
    },
  ],
  hints: [
    'Crossing an edge in its original direction is free, but traversing it backwards (reversing it) costs 1. What graph algorithm minimises a sum of edge weights?',
    'Build a bidirectional weighted graph: for each original directed edge u→v, add a forward edge u→v with cost 0 and a backward edge v→u with cost 1. The answer is the shortest path from source to destination in this new graph.',
    'With only 0 and 1 edge weights, use 0-1 BFS (deque: push cost-0 neighbours to front, cost-1 to back) or standard Dijkstra. Return -1 if destination is unreachable.',
  ],
  functionName: 'minEdgeReversals',
  params: ['n', 'edges', 'source', 'destination'],
  starterCode: {
    javascript: `function minEdgeReversals(n, edges, source, destination) {\n\n}`,
    python: `def minEdgeReversals(n, edges, source, destination) -> int:\n    pass`,
    typescript: `function minEdgeReversals(n: number, edges: number[][], source: number, destination: number): number {\n\n}`,
  },
  visibleTests: [
    { args: [4, [[0,1],[1,2],[2,3]], 0, 3], expected: 0 },
    { args: [4, [[0,1],[1,2],[2,3]], 3, 0], expected: 3 },
    { args: [3, [[0,1],[2,0]], 2, 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [2, [[0,1]], 0, 1], expected: 0 },
    { args: [2, [[0,1]], 1, 0], expected: 1 },
    { args: [4, [[0,1],[2,3]], 0, 3], expected: -1 },
    { args: [5, [[0,1],[1,2],[3,1],[4,3]], 0, 4], expected: 2 },
    { args: [4, [[0,1],[0,2],[1,3],[2,3]], 3, 0], expected: 2 },
    { args: [3, [[0,1],[1,2],[0,2]], 2, 0], expected: 1 },
    { args: [5, [[0,1],[1,2],[2,3],[3,4]], 2, 0], expected: 2 },
  ],
};
