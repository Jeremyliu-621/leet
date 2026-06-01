import type { Problem } from '../types';

export const problem: Problem = {
  id: 'euler-path-circuit',
  title: "Euler Path / Circuit — Hierholzer's Algorithm",
  difficulty: 'hard',
  tags: ['graph'],
  description: `Given a directed graph with \`n\` nodes (0 to n−1) and a list of directed \`edges\`, find an **Eulerian path or circuit** if one exists.

- An **Eulerian circuit** visits every edge exactly once and returns to the starting node. It exists iff every node has equal in-degree and out-degree.
- An **Eulerian path** visits every edge exactly once but may start and end at different nodes. It exists iff exactly one node has out−in = 1 (start) and exactly one node has in−out = 1 (end), with all others balanced.

Use **Hierholzer's algorithm** (O(V+E)): iterative DFS using a stack; when a node has no remaining outgoing edges, append it to the path. Reverse at the end.

Return the Eulerian path/circuit as a node sequence (length = edges.length + 1). If none exists, return \`[]\`.`,
  constraints: [
    '2 <= n <= 1000',
    '1 <= edges.length <= 10^4',
    'Edges are given in order; the algorithm consumes them in that order.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,0],[0,3],[3,4],[4,0]]',
      output: '[0,1,2,0,3,4,0]',
      explanation: 'Every node has equal in/out degree → Eulerian circuit starting at 0.',
    },
    {
      input: 'n = 4, edges = [[0,1],[1,2],[2,3]]',
      output: '[0,1,2,3]',
      explanation: 'Node 0 has out−in=1 (start); node 3 has in−out=1 (end) → Eulerian path.',
    },
    {
      input: 'n = 3, edges = [[0,1],[0,2]]',
      output: '[]',
      explanation: 'Node 0 has out−in=2, which is not 0 or 1 → no Eulerian path or circuit.',
    },
  ],
  hints: [
    'Check degree balance first. Compute out-degree and in-degree for each node. For a circuit: all nodes must have out==in. For a path: exactly one node with out-in=+1 (start), exactly one with in-out=+1 (end), all others balanced.',
    "Hierholzer iterative DFS: build adjacency lists (use an index pointer per node for O(1) next-edge access). Push the start node onto a stack. While stack is non-empty: if top node u has unused edges, take the next one and push the neighbor; otherwise pop u and prepend it to the result.",
    'After Hierholzer, verify result length == edges.length + 1. If shorter, some edges were unreachable (disconnected graph over used edges) → return []. Start at the +1 out-degree surplus node for a path, or any node with edges for a circuit.',
  ],
  functionName: 'eulerPathCircuit',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function eulerPathCircuit(n, edges) {\n\n}`,
    typescript: `function eulerPathCircuit(n: number, edges: number[][]): number[] {\n\n}`,
    python: `def eulerPathCircuit(n: int, edges: list[list[int]]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 2], [2, 0], [0, 3], [3, 4], [4, 0]]], expected: [0, 1, 2, 0, 3, 4, 0] },
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: [0, 1, 2, 3] },
    { args: [3, [[0, 1], [0, 2]]], expected: [] },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [0, 1, 2, 0] },
  ],
  hiddenTests: [
    { args: [3, [[0, 1], [1, 2], [2, 0], [0, 1]]], expected: [0, 1, 2, 0, 1] },
    { args: [4, [[0, 1], [1, 0], [0, 2], [2, 0], [0, 3], [3, 0]]], expected: [0, 1, 0, 2, 0, 3, 0] },
    { args: [2, [[0, 1], [1, 0]]], expected: [0, 1, 0] },
    { args: [3, [[0, 1], [1, 2]]], expected: [0, 1, 2] },
    { args: [2, [[0, 1]]], expected: [0, 1] },
  ],
};
