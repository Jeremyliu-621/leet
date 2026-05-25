import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-ways-to-arrive-at-destination',
  title: 'Number of Ways to Arrive at Destination',
  difficulty: 'medium',
  tags: ['graph', 'dynamic-programming'],
  description: `You are in a city that consists of \`n\` intersections numbered from \`0\` to \`n - 1\` with **bi-directional** roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.

You are given an integer \`n\` and a 2D integer array \`roads\` where \`roads[i] = [u_i, v_i, time_i]\` means that there is a road between intersections \`u_i\` and \`v_i\` that takes \`time_i\` minutes to travel.

You want to know in how many ways you can travel from intersection \`0\` to intersection \`n - 1\` in the **shortest amount of time**.

Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 200',
    'n - 1 <= roads.length <= n * (n - 1) / 2',
    'roads[i].length == 3',
    '0 <= u_i, v_i <= n - 1',
    '1 <= time_i <= 10^9',
    'u_i != v_i',
    'There is at most one road connecting any two intersections.',
    'You can reach any intersection from any other intersection.',
  ],
  examples: [
    {
      input: 'n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]',
      output: '4',
      explanation: 'The shortest amount of time to reach intersection 6 is 7 minutes. The four ways are: 0 ➝ 6, 0 ➝ 4 ➝ 6, 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6, 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6.',
    },
    {
      input: 'n = 2, roads = [[1,0,10]]',
      output: '1',
      explanation: 'There is only one way to go from intersection 0 to intersection 1, which is 0 ➝ 1.',
    },
  ],
  hints: [
    'Run Dijkstra from source 0 to find the shortest distance to every node.',
    'Maintain a count array: ways[v] = number of shortest paths from 0 to v.',
    'When you find a strictly shorter path to v, reset ways[v] = ways[u]. When you find an equal-length path, add ways[u] to ways[v]. Return ways[n-1] mod 10^9+7.',
  ],
  functionName: 'countPaths',
  params: ['n', 'roads'],
  starterCode: {
    javascript: 'function countPaths(n, roads) {\n\n}\n',
    python: 'def countPaths(n, roads):\n    pass\n',
  },
  visibleTests: [
    {
      args: [7, [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]],
      expected: 4,
    },
    { args: [2, [[1, 0, 10]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    {
      args: [3, [[0,1,1],[1,2,1],[0,2,2]]],
      expected: 2,
    },
    {
      args: [4, [[0,1,1],[0,2,2],[1,3,3],[2,3,2]]],
      expected: 2,
    },
    {
      args: [5, [[0,1,1],[0,2,1],[1,3,1],[2,3,1],[3,4,1]]],
      expected: 2,
    },
  ],
};
