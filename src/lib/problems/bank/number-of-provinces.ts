import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-provinces',
  title: 'Number of Provinces',
  difficulty: 'easy',
  tags: ['graph'],
  description: `There are \`n\` cities. You are given an \`n x n\` matrix \`isConnected\` where \`isConnected[i][j] = 1\` if city \`i\` and city \`j\` are directly connected, and \`isConnected[i][j] = 0\` otherwise.

A **province** is a group of directly or indirectly connected cities with no other cities outside the group. Return the **total number of provinces**.`,
  constraints: [
    '`1 <= n <= 200`',
    '`n == isConnected.length`',
    '`n == isConnected[i].length`',
    '`isConnected[i][j]` is `0` or `1`',
    '`isConnected[i][i] == 1`',
    '`isConnected[i][j] == isConnected[j][i]`',
  ],
  examples: [
    {
      input: 'isConnected = [[1,1,0],[1,1,0],[0,0,1]]',
      output: '2',
      explanation: 'Cities 0 and 1 are directly connected, forming one province. City 2 is isolated, forming a second province.',
    },
    {
      input: 'isConnected = [[1,0,0],[0,1,0],[0,0,1]]',
      output: '3',
      explanation: 'No cities are connected to each other, so each city is its own province.',
    },
    {
      input: 'isConnected = [[1,1,1],[1,1,1],[1,1,1]]',
      output: '1',
      explanation: 'All cities are connected, forming a single province.',
    },
  ],
  hints: [
    'This is a graph connectivity problem. Model cities as nodes and direct connections as edges.',
    'Use DFS or BFS: maintain a `visited` array. For each unvisited city, traverse all reachable cities (marking them visited) and increment the province count by 1.',
    'Alternatively, use Union-Find: for each pair (i, j) where `isConnected[i][j] == 1`, union i and j. The answer is the number of distinct root representatives.',
  ],
  functionName: 'findCircleNum',
  params: ['isConnected'],
  starterCode: {
    javascript: `function findCircleNum(isConnected) {

}`,
    python: `def findCircleNum(isConnected):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]], expected: 2 },
    { args: [[[1, 0, 0], [0, 1, 0], [0, 0, 1]]], expected: 3 },
    { args: [[[1, 1, 1], [1, 1, 1], [1, 1, 1]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 1 },
    { args: [[[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1]]], expected: 2 },
    { args: [[[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 1, 1], [0, 0, 1, 1]]], expected: 2 },
  ],
};
