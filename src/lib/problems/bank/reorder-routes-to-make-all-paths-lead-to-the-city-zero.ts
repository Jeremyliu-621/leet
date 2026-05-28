import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reorder-routes-to-make-all-paths-lead-to-the-city-zero',
  title: 'Reorder Routes to Make All Paths Lead to the City Zero',
  difficulty: 'medium',
  tags: ['graph', 'tree'],
  description: `There are \`n\` cities numbered from \`0\` to \`n - 1\` and \`n - 1\` roads such that there is only one way to travel between two different cities (this network forms a tree).

Last year, the ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by \`connections\` where \`connections[i] = [ai, bi]\` represents a road from city \`ai\` to city \`bi\`.

This year, there will be a very important event in the capital (city \`0\`), and many people want to travel to this city.

Return the **minimum** number of edges that need to be changed so that each node can reach the city \`0\`.

It's **guaranteed** that each node can reach the city \`0\` after reordering.`,
  constraints: [
    '2 <= n <= 5 * 10^4',
    'connections.length == n - 1',
    'connections[i].length == 2',
    '0 <= ai, bi <= n - 1',
    'ai != bi',
  ],
  examples: [
    {
      input: 'n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]',
      output: '3',
      explanation: 'Change the direction of edges 0→1, 1→3, and 2→3 so all cities can reach city 0.',
    },
    {
      input: 'n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]',
      output: '2',
      explanation: 'Change the direction of edges 1→2 and 3→2.',
    },
    {
      input: 'n = 3, connections = [[1,0],[2,0]]',
      output: '0',
      explanation: 'All roads already point toward city 0.',
    },
  ],
  hints: [
    'BFS/DFS from node 0 on the undirected tree.',
    'When traversing an edge (u→v) in the direction away from 0, it needs to be reversed (costs 1).',
    'When traversing an edge against the original direction (v→u), it points toward 0 already (costs 0).',
  ],
  functionName: 'minReorder',
  params: ['n', 'connections'],
  starterCode: {
    javascript: `function minReorder(n, connections) {\n\n}`,
    python: `def minReorder(n: int, connections) -> int:\n    pass`,
    typescript: `function minReorder(n: number, connections: number[][]): number {\n\n}`,
  },
  visibleTests: [
    {
      args: [6, [[0, 1], [1, 3], [2, 3], [4, 0], [4, 5]]],
      expected: 3,
    },
    {
      args: [5, [[1, 0], [1, 2], [3, 2], [3, 4]]],
      expected: 2,
    },
    {
      args: [3, [[1, 0], [2, 0]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [2, [[0, 1]]],
      expected: 1,
    },
    {
      args: [2, [[1, 0]]],
      expected: 0,
    },
    {
      args: [4, [[0, 1], [0, 2], [0, 3]]],
      expected: 3,
    },
    {
      args: [4, [[1, 0], [2, 0], [3, 0]]],
      expected: 0,
    },
    {
      args: [4, [[1, 0], [2, 1], [3, 2]]],
      expected: 0,
    },
  ],
};
