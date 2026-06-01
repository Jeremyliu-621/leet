import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-flow-edmonds-karp',
  title: 'Maximum Flow — Edmonds-Karp (BFS Ford-Fulkerson)',
  difficulty: 'hard',
  tags: ['graph', 'shortest-path'],
  description: `Given a directed graph with \`n\` nodes (0 to n−1), a list of edges \`[u, v, capacity]\`, a \`source\` node, and a \`sink\` node, find the **maximum flow** from source to sink.

Use the **Edmonds-Karp** algorithm — Ford-Fulkerson with BFS augmenting paths (O(VE²)):
1. Build a **residual graph** where each edge \`(u, v, cap)\` also creates a reverse edge \`(v, u, 0)\`.
2. Repeatedly find the **shortest augmenting path** from source to sink via BFS on the residual graph.
3. Find the **bottleneck** (min residual capacity along the path) and augment: subtract from forward edges, add to reverse edges.
4. Repeat until no augmenting path exists. Return the total flow accumulated.`,
  constraints: [
    '2 <= n <= 100',
    '1 <= edges.length <= 1000',
    '0 <= capacity <= 10^4',
    'source != sink',
    'There may be multiple edges between the same pair of nodes.',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,1,16],[0,2,13],[1,2,10],[1,3,12],[2,1,4],[2,4,14],[3,2,9],[3,5,20],[4,3,7],[4,5,4]], source = 0, sink = 5',
      output: '23',
      explanation: 'Classic max-flow example. The maximum flow from node 0 to node 5 is 23.',
    },
    {
      input: 'n = 3, edges = [[0,1,5],[1,2,3],[0,2,2]], source = 0, sink = 2',
      output: '5',
      explanation: 'Flow: 3 via 0→1→2 and 2 via 0→2 = total 5.',
    },
    {
      input: 'n = 2, edges = [[0,1,7]], source = 0, sink = 1',
      output: '7',
      explanation: 'Single edge of capacity 7 limits the flow.',
    },
  ],
  hints: [
    'Represent the residual graph as an adjacency list of edge objects {to, cap, rev} where rev is the index of the reverse edge in the neighbor list. This allows O(1) reverse-edge access.',
    'BFS from source in the residual graph: for each edge with remaining capacity > 0, explore the neighbor. Record parent edges to reconstruct the path.',
    'Once BFS finds the sink, trace back through parent edges to find the bottleneck (min cap along path). Augment: reduce forward edge caps and increase reverse edge caps. Accumulate the bottleneck into total flow.',
  ],
  functionName: 'maxFlowEdmondsKarp',
  params: ['n', 'edges', 'source', 'sink'],
  starterCode: {
    javascript: `function maxFlowEdmondsKarp(n, edges, source, sink) {\n\n}`,
    typescript: `function maxFlowEdmondsKarp(n: number, edges: number[][], source: number, sink: number): number {\n\n}`,
    python: `def maxFlowEdmondsKarp(n: int, edges: list[list[int]], source: int, sink: int) -> int:\n    pass`,
  },
  visibleTests: [
    {
      args: [6, [[0, 1, 16], [0, 2, 13], [1, 2, 10], [1, 3, 12], [2, 1, 4], [2, 4, 14], [3, 2, 9], [3, 5, 20], [4, 3, 7], [4, 5, 4]], 0, 5],
      expected: 23,
    },
    { args: [3, [[0, 1, 5], [1, 2, 3], [0, 2, 2]], 0, 2], expected: 5 },
    { args: [2, [[0, 1, 7]], 0, 1], expected: 7 },
  ],
  hiddenTests: [
    { args: [4, [[0, 1, 10], [0, 2, 10], [1, 3, 10], [2, 3, 10], [1, 2, 1]], 0, 3], expected: 20 },
    { args: [4, [[0, 1, 3], [0, 2, 3], [1, 3, 2], [2, 3, 3]], 0, 3], expected: 5 },
    { args: [4, [[0, 1, 100], [0, 2, 100], [1, 2, 1], [1, 3, 100], [2, 3, 100]], 0, 3], expected: 200 },
    { args: [2, [[0, 1, 0]], 0, 1], expected: 0 },
    { args: [3, [[0, 1, 3], [0, 2, 2], [1, 2, 2], [2, 1, 1]], 0, 2], expected: 4 },
  ],
};
