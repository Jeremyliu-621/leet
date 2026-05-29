import type { Problem } from '../types';

export const problem: Problem = {
  id: 'dijkstra-single-source-shortest-path',
  title: "Dijkstra's Single-Source Shortest Path",
  difficulty: 'medium',
  tags: ['shortest-path', 'graph', 'heap'],
  description: `You are given a **directed weighted graph** with \`n\` nodes labeled \`1\` to \`n\` and a list of edges \`edges\` where \`edges[i] = [u, v, w]\` represents a directed edge from \`u\` to \`v\` with weight \`w\`.

Given a \`source\` node, find the shortest distance from \`source\` to every other node. Return an array \`dist\` of length \`n + 1\` where \`dist[i]\` is the shortest distance from \`source\` to node \`i\`. Use \`dist[0] = 0\` as a placeholder (nodes are 1-indexed).

If a node is **unreachable** from \`source\`, its distance should be \`-1\`.

**Note:** All edge weights are **non-negative**, so Dijkstra's algorithm applies.

**Example:**
- \`n = 4\`, \`edges = [[1,2,1],[1,3,4],[2,3,2],[3,4,1]]\`, \`source = 1\`
- Shortest paths: 1→2 = 1, 1→3 = 3 (via 2), 1→4 = 4 (via 2→3)
- Output: \`[0, 0, 1, 3, 4]\` (index 0 is placeholder)`,
  constraints: [
    '1 <= n <= 100',
    '0 <= edges.length <= 500',
    'edges[i].length == 3',
    '1 <= u, v <= n',
    'u != v',
    '0 <= w <= 10^4',
    '1 <= source <= n',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[1,2,1],[1,3,4],[2,3,2],[3,4,1]], source = 1',
      output: '[0,0,1,3,4]',
      explanation: '1→2: cost 1; 1→3: cost 3 (1→2→3); 1→4: cost 4 (1→2→3→4). dist[0]=0 is placeholder.',
    },
    {
      input: 'n = 3, edges = [[1,2,1],[2,3,1]], source = 1',
      output: '[0,0,1,2]',
      explanation: 'All nodes reachable via the single path.',
    },
    {
      input: 'n = 3, edges = [[1,2,1]], source = 1',
      output: '[0,0,1,-1]',
      explanation: 'Node 3 is unreachable from source 1, so dist[3] = -1.',
    },
  ],
  hints: [
    'Build an adjacency list from the edges. Initialize dist[source] = 0 and dist[all others] = Infinity. Use a min-heap (priority queue) seeded with [0, source].',
    'Each step: extract the node with the smallest tentative distance. For each neighbor, if dist[node] + weight < dist[neighbor], update dist[neighbor] and push [new_dist, neighbor] to the heap.',
    'Skip a node from the heap if the stored distance is greater than the current known distance (stale entry). After the heap is empty, replace Infinity with -1 for unreachable nodes. Remember dist[0] is always 0 (unused placeholder).',
  ],
  functionName: 'dijkstra',
  params: ['n', 'edges', 'source'],
  starterCode: {
    javascript: `function dijkstra(n, edges, source) {

}
`,
    typescript: `function dijkstra(n: number, edges: number[][], source: number): number[] {

  return [];
}`,
    python: `def dijkstra(n, edges, source):
    pass
`,
  },
  visibleTests: [
    { args: [4, [[1, 2, 1], [1, 3, 4], [2, 3, 2], [3, 4, 1]], 1], expected: [0, 0, 1, 3, 4] },
    { args: [3, [[1, 2, 1], [2, 3, 1]], 1], expected: [0, 0, 1, 2] },
    { args: [3, [[1, 2, 1]], 1], expected: [0, 0, 1, -1] },
  ],
  hiddenTests: [
    { args: [1, [], 1], expected: [0, 0] },
    { args: [4, [[1, 2, 1], [1, 3, 4], [2, 3, 2], [3, 4, 1]], 2], expected: [0, -1, 0, 2, 3] },
    { args: [5, [[1, 2, 2], [1, 3, 6], [2, 3, 3], [2, 4, 8], [3, 5, 7], [4, 5, 1]], 1], expected: [0, 0, 2, 5, 10, 11] },
    { args: [3, [[1, 2, 5], [2, 3, 3], [1, 3, 10]], 1], expected: [0, 0, 5, 8] },
    { args: [4, [], 1], expected: [0, 0, -1, -1, -1] },
    { args: [3, [[2, 1, 1], [3, 1, 1]], 1], expected: [0, 0, -1, -1] },
    { args: [4, [[1, 2, 1], [2, 3, 1], [3, 4, 1], [1, 4, 10]], 1], expected: [0, 0, 1, 2, 3] },
    { args: [5, [[1, 2, 3], [1, 3, 1], [3, 2, 1], [2, 4, 5], [3, 4, 8]], 1], expected: [0, 0, 2, 1, 7, -1] },
  ],
};
