import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-connected-components',
  title: 'Number of Connected Components in an Undirected Graph',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You have a graph of \`n\` nodes labeled from \`0\` to \`n - 1\`. You are given an integer \`n\` and a list of \`edges\` where \`edges[i] = [a, b]\` indicates that there is an undirected edge between nodes \`a\` and \`b\` in the graph.

Return the **number of connected components** in the graph.

**Approach:** Use Union-Find (Disjoint Set Union). Initialize each node as its own component. For each edge, union the two endpoints. Count the number of distinct roots at the end. Alternatively, use DFS/BFS to count the number of separate connected groups.`,
  constraints: [
    '1 <= n <= 2000',
    '1 <= edges.length <= 5000',
    'edges[i].length == 2',
    '0 <= a, b < n',
    'a != b',
    'There are no repeated edges',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
      output: '2',
      explanation: 'Components: {0,1,2} and {3,4}.',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
      output: '1',
      explanation: 'All nodes are connected in one component.',
    },
  ],
  hints: [
    'Union-Find: initialize `parent[i] = i`. For each edge, union the two nodes. Count nodes where `find(i) === i`.',
    'DFS approach: maintain a visited set. For each unvisited node, run DFS and increment a counter.',
    '`find` with path compression: `function find(x) { if (parent[x] !== x) parent[x] = find(parent[x]); return parent[x]; }`',
  ],
  functionName: 'countComponents',
  params: ['n', 'edges'],
  preamble: {},
  starterCode: {
    javascript: 'function countComponents(n, edges) {\n  \n}\n',
    python: 'def countComponents(n, edges):\n    pass\n',
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
    { args: [4, [[0, 1], [1, 2], [2, 3]]], expected: 1 },
  ],
};
