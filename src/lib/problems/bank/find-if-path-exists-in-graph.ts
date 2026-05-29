import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-if-path-exists-in-graph',
  title: 'Find if Path Exists in Graph',
  difficulty: 'easy',
  tags: ['graph', 'union-find'],
  description: `There is a **bi-directional** graph with \`n\` vertices, where each vertex is labeled from \`0\` to \`n - 1\`. The edges in the graph are represented as a 2D integer array \`edges\`, where each \`edges[i] = [u_i, v_i]\` denotes a bi-directional edge between vertex \`u_i\` and vertex \`v_i\`.

Given \`source\` and \`destination\`, return \`true\` if there is a **valid path** from \`source\` to \`destination\`, or \`false\` otherwise.`,
  constraints: [
    '1 <= n <= 2 * 10^5',
    '0 <= edges.length <= 2 * 10^5',
    'edges[i].length == 2',
    '0 <= u_i, v_i <= n - 1',
    'u_i != v_i',
    'There are no duplicate edges.',
    '0 <= source, destination <= n - 1',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2',
      output: 'true',
      explanation: 'Paths: 0→1→2 or 0→2.',
    },
    {
      input: 'n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5',
      output: 'false',
      explanation: 'Vertices 0,1,2 are disconnected from 3,4,5.',
    },
    {
      input: 'n = 1, edges = [], source = 0, destination = 0',
      output: 'true',
      explanation: 'source and destination are the same vertex.',
    },
  ],
  hints: [
    'Build an adjacency list from the edges.',
    'Use BFS or DFS starting from source; return true if destination is reached.',
    'Alternatively, use Union-Find: merge connected components and check if source and destination share a root.',
  ],
  functionName: 'validPath',
  params: ['n', 'edges', 'source', 'destination'],
  starterCode: {
    javascript: 'function validPath(n, edges, source, destination) {\n  \n}\n',
    typescript: "function validPath(n: number, edges: number[][], source: number, destination: number): boolean {\n  \n}",

    python: 'def validPath(n, edges, source, destination):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[0, 1], [1, 2], [2, 0]], 0, 2], expected: true },
    { args: [6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5], expected: false },
  ],
  hiddenTests: [
    { args: [1, [], 0, 0], expected: true },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4], expected: true },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 3], expected: true },
    { args: [4, [[0, 1], [2, 3]], 0, 3], expected: false },
  ],
};
