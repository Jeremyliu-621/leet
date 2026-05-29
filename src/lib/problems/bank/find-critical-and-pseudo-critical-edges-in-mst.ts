import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-critical-and-pseudo-critical-edges-in-mst',
  title: 'Find Critical and Pseudo-Critical Edges in MST',
  difficulty: 'hard',
  tags: ['union-find', 'graph'],
  description: `Given a weighted undirected connected graph with \`n\` nodes and a list of edges \`edges[i] = [u, v, weight]\`, find all **critical** and **pseudo-critical** edges in its **Minimum Spanning Tree (MST)**.

- A **critical edge** is one whose removal **increases** the MST weight (or disconnects the graph).
- A **pseudo-critical edge** is one that appears in **some** MST but not all; it is **not** critical.

Return \`[criticalEdges, pseudoCriticalEdges]\`, each a **sorted** list of edge indices (0-indexed into \`edges\`).`,
  constraints: [
    '2 ≤ n ≤ 100',
    'n - 1 ≤ edges.length ≤ min(200, n·(n-1)/2)',
    'edges[i].length == 3',
    '0 ≤ edges[i][0], edges[i][1] < n',
    '1 ≤ edges[i][2] ≤ 1000',
    'All pairs (edges[i][0], edges[i][1]) are distinct',
    'The given graph is connected',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]',
      output: '[[0,1],[2,3,4,5]]',
      explanation: 'Edges 0 and 1 (weight 1) are in every MST. Edges 2-5 each appear in some but not all MSTs.',
    },
    {
      input: 'n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]',
      output: '[[],[0,1,2,3]]',
      explanation: 'All edges have equal weight; removing any one still allows an MST of the same weight. None are critical; all are pseudo-critical.',
    },
    {
      input: 'n = 3, edges = [[0,1,1],[1,2,2],[0,2,3]]',
      output: '[[0,1],[]]',
      explanation: 'The only MST uses edges 0 and 1 (weight 3). Edge 2 is never needed.',
    },
  ],
  hints: [
    'First compute the MST weight W using Kruskal\'s algorithm (sort edges, union-find). For each edge i, test two conditions: (a) build MST ignoring edge i — if weight > W, edge i is critical; (b) build MST with edge i forced in — if weight == W, edge i is pseudo-critical.',
    'To "force" edge i: initialise the union-find with nodes edges[i][0] and edges[i][1] already merged (and add edges[i][2] to the running total), then run Kruskal\'s on the remaining edges. If the total weight equals W, edge i is pseudo-critical.',
    'Sort edges by weight once. For each of the E edges, run two O(E α(n)) Kruskal passes, giving O(E² α(n)) overall — efficient enough for E ≤ 200.',
  ],
  functionName: 'findCriticalAndPseudoCriticalEdges',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function findCriticalAndPseudoCriticalEdges(n, edges) {\n\n}`,
    python: `def findCriticalAndPseudoCriticalEdges(n, edges) -> list:\n    pass`,
    typescript: `function findCriticalAndPseudoCriticalEdges(n: number, edges: number[][]): number[][] {\n\n}`,
  },
  visibleTests: [
    {
      args: [5, [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]],
      expected: [[0,1],[2,3,4,5]],
    },
    {
      args: [4, [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]],
      expected: [[], [0,1,2,3]],
    },
    {
      args: [3, [[0,1,1],[1,2,2],[0,2,3]]],
      expected: [[0,1], []],
    },
  ],
  hiddenTests: [
    { args: [2, [[0,1,5]]], expected: [[0], []] },
    { args: [4, [[0,1,1],[1,2,2],[2,3,3],[0,3,4]]], expected: [[0,1,2], []] },
    { args: [3, [[0,1,2],[0,2,2],[1,2,2]]], expected: [[], [0,1,2]] },
    { args: [4, [[0,1,1],[0,2,1],[0,3,1]]], expected: [[0,1,2], []] },
    { args: [4, [[0,1,2],[0,2,5],[1,2,5],[1,3,5],[2,3,3]]], expected: [[0,4], [1,2,3]] },
    { args: [4, [[0,1,1],[1,2,2],[0,2,2],[2,3,3]]], expected: [[0,3], [1,2]] },
  ],
};
