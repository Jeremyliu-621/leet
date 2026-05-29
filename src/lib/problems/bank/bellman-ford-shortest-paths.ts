import type { Problem } from '../types';

export const problem: Problem = {
  id: 'bellman-ford-shortest-paths',
  title: 'Bellman-Ford Shortest Paths',
  difficulty: 'medium',
  tags: ['shortest-path', 'graph'],
  description: `You are given \`n\` nodes (labeled \`1\` to \`n\`) and a list of directed weighted edges \`edges\` where \`edges[i] = [u, v, w]\` means there is an edge from node \`u\` to node \`v\` with weight \`w\`. Weights may be negative.

Given a \`source\` node, return an array \`dist\` of length \`n+1\` where \`dist[i]\` is the shortest distance from \`source\` to node \`i\`.

- Use \`dist[i] = -1\` if node \`i\` is unreachable from \`source\`.
- \`dist[source] = 0\`.
- Index \`dist[0]\` should be \`0\` (placeholder, unused).

**Guarantee:** There are no negative-weight cycles in the graph.

Use the **Bellman-Ford** algorithm: relax all edges \`n-1\` times.`,
  constraints: [
    '1 <= n <= 500',
    '0 <= edges.length <= 5000',
    'edges[i].length == 3',
    '1 <= u, v <= n',
    'u != v',
    '-100 <= w <= 100',
    'No negative-weight cycles exist.',
    '1 <= source <= n',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[1,2,1],[2,3,3],[1,3,10],[3,4,2]], source = 1',
      output: '[0,0,1,4,6]',
      explanation: 'dist[1]=0, dist[2]=1, dist[3]=4 (1→2→3), dist[4]=6 (1→2→3→4). dist[0] is placeholder 0.',
    },
    {
      input: 'n = 3, edges = [[1,2,5],[2,3,-2]], source = 1',
      output: '[0,0,5,3]',
      explanation: 'dist[1]=0, dist[2]=5, dist[3]=3 (1→2→3 with negative edge).',
    },
    {
      input: 'n = 3, edges = [[1,2,1]], source = 1',
      output: '[0,0,1,-1]',
      explanation: 'Node 3 is unreachable, so dist[3]=-1.',
    },
  ],
  hints: [
    'Initialize dist[source] = 0 and dist[all others] = Infinity. Repeat n-1 times: for each edge (u, v, w), if dist[u] + w < dist[v], update dist[v].',
    'After n-1 relaxations, all shortest paths (without negative cycles) are finalized. Nodes still at Infinity are unreachable.',
    'Convert unreachable nodes (Infinity) to -1 before returning. Include dist[0] = 0 as a placeholder for 0-indexed output.',
  ],
  functionName: 'bellmanFord',
  params: ['n', 'edges', 'source'],
  starterCode: {
    javascript: `function bellmanFord(n, edges, source) {
  // Use Bellman-Ford: relax all edges n-1 times.
  // Return dist array of length n+1: dist[i] = shortest distance from source to i,
  // or -1 if unreachable. dist[0] = 0 (placeholder).
}`,
    typescript: `function bellmanFord(n: number, edges: number[][], source: number): number[] {
  // Use Bellman-Ford: relax all edges n-1 times.
  // Return dist array of length n+1: dist[i] = shortest distance from source to i,
  // or -1 if unreachable. dist[0] = 0 (placeholder).
}`,
    python: `def bellmanFord(n, edges, source):
    # Use Bellman-Ford: relax all edges n-1 times.
    # Return dist list of length n+1: dist[i] = shortest distance from source to i,
    # or -1 if unreachable. dist[0] = 0 (placeholder).
    pass`,
  },
  visibleTests: [
    { args: [4, [[1,2,1],[2,3,3],[1,3,10],[3,4,2]], 1], expected: [0,0,1,4,6] },
    { args: [3, [[1,2,5],[2,3,-2]], 1], expected: [0,0,5,3] },
    { args: [3, [[1,2,1]], 1], expected: [0,0,1,-1] },
  ],
  hiddenTests: [
    { args: [1, [], 1], expected: [0,0] },
    { args: [2, [[1,2,3]], 1], expected: [0,0,3] },
    { args: [2, [[1,2,3]], 2], expected: [0,-1,0] },
    { args: [4, [[1,2,2],[1,3,5],[2,3,1],[3,4,3]], 1], expected: [0,0,2,3,6] },
    { args: [4, [[1,2,-1],[2,3,-2],[3,4,-3]], 1], expected: [0,0,-1,-3,-6] },
    { args: [5, [[1,2,4],[1,3,2],[2,3,1],[3,4,5],[4,5,1],[2,5,8]], 1], expected: [0,0,4,2,7,8] },
    { args: [3, [[2,3,1]], 1], expected: [0,0,-1,-1] },
    { args: [4, [[1,2,1],[1,3,4],[2,3,2],[2,4,5],[3,4,1]], 1], expected: [0,0,1,3,4] },
  ],
};
