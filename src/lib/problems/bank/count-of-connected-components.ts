import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-connected-components',
  title: 'Number of Connected Components in an Undirected Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You have a graph of \`n\` nodes labeled from \`0\` to \`n - 1\`. You are given an integer \`n\` and a list of \`edges\` where \`edges[i] = [a_i, b_i]\` indicates that there is an undirected edge between nodes \`a_i\` and \`b_i\` in the graph.

Return the **number of connected components** in the graph.`,
  constraints: [
    '`1 <= n <= 2000`',
    '`0 <= edges.length <= 5000`',
    '`edges[i].length == 2`',
    '`0 <= a_i, b_i < n`',
    '`a_i != b_i`',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
      output: '2',
      explanation: 'Nodes 0, 1, 2 form one component, and nodes 3, 4 form another.',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
      output: '1',
      explanation: 'All five nodes are connected in a single chain.',
    },
    {
      input: 'n = 3, edges = []',
      output: '3',
      explanation: 'No edges means every node is its own component.',
    },
  ],
  hints: [
    'Use Union-Find (Disjoint Set Union) to group nodes.',
    'Initialize each node as its own parent. For each edge, union the two endpoints.',
    'After processing all edges, count the number of distinct roots.',
    'Apply path compression and union by rank for efficiency.',
  ],
  functionName: 'countComponents',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countComponents(n, edges) {

}`,
    python: `def countComponents(n, edges):
    pass`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 1 },
    { args: [3, []], expected: 3 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [4, [[0, 1], [2, 3]]], expected: 2 },
    { args: [6, [[0, 1], [0, 2], [3, 4], [3, 5]]], expected: 2 },
    { args: [5, [[0, 1], [1, 2], [0, 2], [3, 4]]], expected: 2 },
  ],
};
