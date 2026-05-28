import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-arrive-destination',
  title: 'Number of Ways to Arrive at Destination',
  difficulty: 'medium',
  tags: ['graph', 'dynamic-programming'],
  description: `You are in a city with \`n\` intersections numbered from \`0\` to \`n-1\`, connected by bidirectional roads. Each road has a travel time.

You want to travel from intersection \`0\` to intersection \`n-1\` in the **shortest time**. Count the **number of ways** to achieve this shortest time.

Return the count modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 200',
    'n-1 <= roads.length <= n*(n-1)/2',
    'roads[i].length == 3 (u, v, time)',
    '0 <= u, v < n',
    '1 <= time <= 10^9',
    'No two roads connect the same pair of intersections',
    'The graph is connected',
  ],
  examples: [
    {
      input:
        'n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,2],[0,4,5],[4,6,4]]',
      output: '4',
      explanation:
        'The shortest time from 0 to 6 is 7. The only path achieving this is the direct edge 0→6.',
    },
    {
      input: 'n = 2, roads = [[1,0,10]]',
      output: '1',
    },
  ],
  hints: [
    'Use Dijkstra\'s algorithm to find the shortest distance from 0 to all nodes. Simultaneously track the number of shortest paths to each node.',
    'When relaxing an edge: if the new distance is strictly shorter, update dist and reset the count to the source\'s count. If the new distance equals the current shortest, add the source\'s count to the destination\'s count.',
    'Initialize dist[0]=0, count[0]=1, all others dist=Infinity, count=0. Use a priority queue ordered by distance.',
  ],
  functionName: 'countPaths',
  params: ['n', 'roads'],
  starterCode: {
    javascript: `function countPaths(n, roads) {\n\n}`,
    python: `def countPaths(n, roads):\n    pass`,
  },
  visibleTests: [
    {
      args: [
        7,
        [
          [0, 6, 7],
          [0, 1, 2],
          [1, 2, 3],
          [1, 3, 3],
          [6, 3, 3],
          [3, 5, 1],
          [6, 5, 2],
          [0, 4, 5],
          [4, 6, 4],
        ],
      ],
      expected: 1,
    },
    { args: [2, [[1, 0, 10]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [3, [[0, 1, 1], [1, 2, 1], [0, 2, 2]]], expected: 2 },
    { args: [4, [[0, 1, 1], [0, 2, 1], [1, 3, 2], [2, 3, 2]]], expected: 2 },
  ],
};
