import type { Problem } from '../types';

export const problem: Problem = {
  id: 'topological-sort-kahn',
  title: "Topological Sort via Kahn's Algorithm",
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `Given a directed acyclic graph (DAG) with \`n\` nodes (0 to n−1) and a list of directed \`edges\` where \`edges[i] = [u, v]\` means there is a directed edge from \`u\` to \`v\` (u must come before v), return **one valid topological ordering** of all nodes.

If the graph has a **cycle** (not a DAG), return an empty array \`[]\`.

Use **Kahn's algorithm** (BFS-based): repeatedly enqueue nodes with in-degree 0, reducing in-degrees of their neighbors. A valid topological sort processes all nodes; if any remain with in-degree > 0, a cycle exists.`,
  constraints: [
    '1 <= n <= 2000',
    '0 <= edges.length <= n * (n-1)',
    '0 <= edges[i][0], edges[i][1] < n',
    'No self-loops.',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[1,0],[2,0],[3,1],[3,2]]',
      output: '[3,1,2,0]',
      explanation: 'Node 3 has no prerequisites; 1 and 2 come next; 0 last. (Other valid orderings: [3,2,1,0]).',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2]]',
      output: '[0,1,2]',
      explanation: 'Linear chain: 0 → 1 → 2.',
    },
    {
      input: 'n = 3, edges = [[0,1],[1,2],[2,0]]',
      output: '[]',
      explanation: 'Cycle 0→1→2→0 — no valid topological order.',
    },
  ],
  hints: [
    'Compute in-degrees for each node. Add all nodes with in-degree 0 to a queue. Process the queue: for each dequeued node u, add it to the result and decrement in-degrees of all neighbors. If a neighbor\'s in-degree drops to 0, enqueue it.',
    'At the end, if result.length === n, return result. Otherwise a cycle exists — return [].',
    'The order in which you process same-in-degree nodes (queue vs. stack) determines which of the many valid topological orders you get. Any valid order is acceptable.',
  ],
  functionName: 'topologicalSortKahn',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function topologicalSortKahn(n, edges) {\n\n}`,
    typescript: `function topologicalSortKahn(n: number, edges: number[][]): number[] {\n\n}`,
    python: `def topologicalSortKahn(n: int, edges: list[list[int]]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: [3, 1, 2, 0] },
    { args: [3, [[0, 1], [1, 2]]], expected: [0, 1, 2] },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: [] },
    { args: [1, []], expected: [0] },
  ],
  hiddenTests: [
    { args: [2, [[0, 1]]], expected: [0, 1] },
    { args: [2, [[0, 1], [1, 0]]], expected: [] },
    { args: [4, []], expected: [0, 1, 2, 3] },
    { args: [5, [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]]], expected: [0, 1, 2, 3, 4] },
    { args: [4, [[0, 1], [0, 2], [0, 3]]], expected: [0, 1, 2, 3] },
    { args: [3, [[2, 0], [2, 1]]], expected: [2, 0, 1] },
  ],
};
