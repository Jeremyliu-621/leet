import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-if-path-exists',
  title: 'Find if Path Exists in Graph',
  difficulty: 'easy',
  tags: ['graph'],
  description: `There is a **bi-directional** graph with \`n\` vertices, where each vertex is labeled from \`0\` to \`n - 1\`. The edges in the graph are represented as a 2D integer array \`edges\`, where \`edges[i] = [u, v]\` denotes a bi-directional edge between vertex \`u\` and vertex \`v\`.

Given the integers \`n\`, \`edges\`, \`source\`, and \`destination\`, return \`true\` if there is a **valid path** from \`source\` to \`destination\`, or \`false\` otherwise.

**Approach:** Build an adjacency list, then use BFS or DFS from the source. Return \`true\` if you reach the destination, \`false\` if the traversal ends without finding it.`,
  constraints: [
    '1 <= n <= 2 * 10^5',
    '0 <= edges.length <= 2 * 10^5',
    'edges[i].length == 2',
    '0 <= u, v <= n - 1',
    'u != v',
    'There are no duplicate edges',
    '0 <= source, destination <= n - 1',
  ],
  examples: [
    {
      input: 'n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2',
      output: 'true',
      explanation: 'There are two paths from 0 to 2: 0→1→2 and 0→2 (directly).',
    },
    {
      input: 'n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5',
      output: 'false',
      explanation: 'Vertices 0, 1, 2 form one connected component; vertices 3, 4, 5 form another. There is no path between the two components.',
    },
    {
      input: 'n = 1, edges = [], source = 0, destination = 0',
      output: 'true',
      explanation: 'Source and destination are the same vertex.',
    },
  ],
  hints: [
    'Build an adjacency list: for each edge [u, v], add v to adj[u] and u to adj[v].',
    'Run BFS from `source`. Maintain a visited set to avoid revisiting nodes. If you dequeue `destination`, return true.',
    'If the BFS queue empties without reaching `destination`, return false. Union-Find also works: union all edges, then check if source and destination share the same root.',
  ],
  functionName: 'validPath',
  params: ['n', 'edges', 'source', 'destination'],
  starterCode: {
    javascript: 'function validPath(n, edges, source, destination) {\n  \n}\n',
    python: 'def validPath(n, edges, source, destination):\n    pass\n',
  },
  visibleTests: [
    { args: [3, [[0, 1], [1, 2], [2, 0]], 0, 2], expected: true },
    { args: [6, [[0, 1], [0, 2], [3, 5], [5, 4], [4, 3]], 0, 5], expected: false },
    { args: [1, [], 0, 0], expected: true },
  ],
  hiddenTests: [
    { args: [3, [[0, 1], [1, 2]], 0, 2], expected: true },
    { args: [4, [[0, 1], [2, 3]], 0, 3], expected: false },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]], 0, 4], expected: true },
    { args: [2, [[1, 0]], 0, 1], expected: true },
  ],
};
