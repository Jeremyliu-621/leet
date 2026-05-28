import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reorder-routes-to-make-all-paths-lead-to-city-zero',
  title: 'Reorder Routes to Make All Paths Lead to the City Zero',
  difficulty: 'medium',
  tags: ['graph'],
  description: `There are \`n\` cities numbered from \`0\` to \`n - 1\` and \`n - 1\` roads such that there is only one way to travel between two different cities (this network forms a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.

Roads are represented by \`connections\` where \`connections[i] = [a_i, b_i]\` represents a road from city \`a_i\` to city \`b_i\`.

This year, there will be a big event in the capital (city \`0\`), and many people want to travel to this city.

Return the **minimum** number of edges changed so that each node can reach the city \`0\`.`,
  constraints: [
    '2 <= n <= 5 * 10^4',
    'connections.length == n - 1',
    'connections[i].length == 2',
    '0 <= a_i, b_i <= n - 1',
    'a_i != b_i',
  ],
  examples: [
    {
      input: 'n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]',
      output: '3',
      explanation: 'Change edges 0→1, 1→3, 2→3 to point inward: 1→0, 3→1, 3→2.',
    },
    {
      input: 'n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]',
      output: '2',
      explanation: 'Change edges 1→2 and 3→4.',
    },
  ],
  hints: [
    'Build an undirected adjacency list. Mark each original directed edge (u→v) so you know whether traversing it would require a reversal.',
    'Do a BFS/DFS from city 0. For each neighbor, if the original edge points away from 0 (u→v where we came from v), it must be reversed — count +1.',
    'Edges that already point toward 0 (original v→u) need no change.',
  ],
  functionName: 'minReorder',
  params: ['n', 'connections'],
  starterCode: {
    javascript: 'function minReorder(n, connections) {\n\n}\n',
    python: 'def minReorder(n, connections):\n    pass\n',
  },
  visibleTests: [
    { args: [6, [[0,1],[1,3],[2,3],[4,0],[4,5]]], expected: 3 },
    { args: [5, [[1,0],[1,2],[3,2],[3,4]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [3, [[1,0],[2,0]]], expected: 0 },
    { args: [3, [[0,1],[0,2]]], expected: 2 },
    { args: [4, [[3,2],[2,1],[1,0]]], expected: 0 },
    { args: [4, [[0,1],[1,2],[2,3]]], expected: 3 },
  ],
};
