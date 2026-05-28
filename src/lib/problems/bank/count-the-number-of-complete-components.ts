import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-complete-components',
  title: 'Count the Number of Complete Components',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an integer \`n\`. There is an **undirected** graph with \`n\` vertices, numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\` where \`edges[i] = [a_i, b_i]\` denotes that there exists an **undirected** edge connecting vertices \`a_i\` and \`b_i\`.

Return the number of **complete connected components** of the graph.

A **connected component** is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be **complete** if there exists an edge between every pair of its vertices.`,
  examples: [
    {
      input: 'n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]',
      output: '3',
      explanation: 'Component {0,1,2} has 3 vertices and 3 edges — complete (K3). Component {3,4} has 2 vertices and 1 edge — complete (K2). Component {5} has 1 vertex — trivially complete. Total: 3.',
    },
    {
      input: 'n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]',
      output: '1',
      explanation: 'Component {0,1,2} is complete. Component {3,4,5} has 3 vertices but only 2 edges (missing edge 4-5), so it is NOT complete. Total: 1.',
    },
  ],
  constraints: [
    '1 <= n <= 50',
    '0 <= edges.length <= n * (n - 1) / 2',
    'edges[i].length == 2',
    '0 <= a_i, b_i <= n - 1',
    'a_i != b_i',
    'There are no repeated edges.',
  ],
  functionName: 'countCompleteComponents',
  params: ['n', 'edges'],
  starterCode: {
    javascript: 'function countCompleteComponents(n, edges) {\n  // your code here\n}\n',
    typescript: "function countCompleteComponents(n: number, edges: number[][]): number {\n  // your code here\n}",

    python: 'def countCompleteComponents(n, edges):\n    # your code here\n    pass\n',
  },
  hints: [
    'Use Union-Find or BFS/DFS to find connected components. Collect all vertices in each component.',
    'For a component with `k` vertices, it is complete if and only if it has exactly `k*(k-1)/2` edges.',
    'Build an adjacency list or count edge contributions per component to verify the edge count.',
  ],
  visibleTests: [
    { args: [6, [[0, 1], [0, 2], [1, 2], [3, 4]]], expected: 3 },
    { args: [6, [[0, 1], [0, 2], [1, 2], [3, 4], [3, 5]]], expected: 1 },
    { args: [3, []], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [2, [[0, 1]]], expected: 1 },
    { args: [4, [[0, 1], [2, 3]]], expected: 2 },
    { args: [5, [[0, 1], [1, 2], [0, 2], [3, 4]]], expected: 2 },
    { args: [4, [[0, 1], [1, 2], [2, 3], [3, 0], [0, 2], [1, 3]]], expected: 1 },
  ],
};
