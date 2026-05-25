import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-servers-that-communicate',
  title: 'Count Servers that Communicate',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a map of a server center, represented as an \`m x n\` integer matrix \`grid\`, where \`1\` means that on that cell there is a server and \`0\` means that it is no server. Two servers are said to communicate if they are on the same row or on the same column.

Return the number of servers that communicate with **at least one** other server.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m <= 250',
    '1 <= n <= 250',
    'grid[i][j] == 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[1,0],[0,1]]',
      output: '0',
      explanation: 'No servers communicate with each other.',
    },
    {
      input: 'grid = [[1,0],[1,1]]',
      output: '3',
      explanation: 'All three servers communicate with at least one other server.',
    },
  ],
  hints: [
    'For each row, count the number of servers in it. For each column, count the number of servers in it.',
    'A server communicates if its row count > 1 OR its column count > 1.',
    'Iterate over all cells: if the cell has a server and (rowCount > 1 or colCount > 1), add it to the answer.',
  ],
  functionName: 'countServers',
  params: ['grid'],
  starterCode: {
    javascript: 'function countServers(grid) {\n\n}\n',
    python: 'def countServers(grid):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1, 0], [0, 1]]], expected: 0 },
    { args: [[[1, 0], [1, 1]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]], expected: 4 },
    { args: [[[1]]], expected: 0 },
    { args: [[[1, 1]]], expected: 2 },
    { args: [[[1], [1]]], expected: 2 },
  ],
};
