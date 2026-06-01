import type { Problem } from '../types';

export const problem: Problem = {
  id: 'tarjan-strongly-connected',
  title: "Strongly Connected Components — Tarjan's Algorithm",
  difficulty: 'hard',
  tags: ['graph', 'stack'],
  description: `Given a directed graph with \`n\` nodes (0 to n−1) and a list of directed \`edges\`, find all **strongly connected components** (SCCs).

A **strongly connected component** is a maximal set of nodes where every node is reachable from every other node in the set.

Use **Tarjan's algorithm** (DFS-based, O(V+E)): assign each node a discovery time and a low-link value. Nodes with the same low-link value belong to the same SCC.

Return the SCCs as an array of arrays, where each inner array lists the nodes in one SCC in **reverse topological order** (first SCC contains nodes that depend on no other SCC). Sort each SCC and the array of SCCs by their minimum node value.`,
  constraints: [
    '1 <= n <= 1000',
    '0 <= edges.length <= n * n',
    '0 <= u, v < n',
    'No self-loops.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[1,0],[0,2],[2,1],[0,3],[3,4]]',
      output: '[[0,1,2],[3],[4]]',
      explanation: '{0,1,2} form one SCC (each can reach the others). {3} and {4} are isolated SCCs.',
    },
    {
      input: 'n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]',
      output: '[[0,1,2,3]]',
      explanation: 'All 4 nodes form one SCC (0→1→2→3→0).',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2]]',
      output: '[[0],[1],[2]]',
      explanation: 'No cycles — each node is its own SCC.',
    },
  ],
  hints: [
    'Tarjan\'s DFS: maintain `disc[]` (discovery time), `low[]` (lowest disc reachable), and a stack. On visiting node u, set disc[u] = low[u] = timer++. For each neighbor v: if unvisited, DFS and update low[u] = min(low[u], low[v]); if on stack, low[u] = min(low[u], disc[v]).',
    'After processing all neighbors: if low[u] === disc[u], u is the root of an SCC. Pop from the stack until u is popped — all popped nodes form one SCC.',
    'Return SCCs sorted by minimum node value. Each SCC should also be sorted internally.',
  ],
  functionName: 'tarjanSCC',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function tarjanSCC(n, edges) {\n\n}`,
    typescript: `function tarjanSCC(n: number, edges: number[][]): number[][] {\n\n}`,
    python: `def tarjanSCC(n: int, edges: list[list[int]]) -> list[list[int]]:\n    pass`,
  },
  visibleTests: [
    { args: [5, [[1, 0], [0, 2], [2, 1], [0, 3], [3, 4]]], expected: [[0, 1, 2], [3], [4]] },
    { args: [4, [[0, 1], [1, 2], [2, 3], [3, 0]]], expected: [[0, 1, 2, 3]] },
    { args: [3, [[0, 1], [1, 2]]], expected: [[0], [1], [2]] },
    { args: [1, []], expected: [[0]] },
  ],
  hiddenTests: [
    { args: [2, [[0, 1], [1, 0]]], expected: [[0, 1]] },
    { args: [2, [[0, 1]]], expected: [[0], [1]] },
    { args: [6, [[0, 1], [1, 2], [2, 0], [3, 4], [4, 5], [5, 3]]], expected: [[0, 1, 2], [3, 4, 5]] },
    { args: [4, [[0, 1], [1, 0], [2, 3], [3, 2]]], expected: [[0, 1], [2, 3]] },
    { args: [5, [[0, 1], [1, 2], [2, 0], [2, 3], [3, 4]]], expected: [[0, 1, 2], [3], [4]] },
  ],
};
