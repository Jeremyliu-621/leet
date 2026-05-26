import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-islands-ii',
  title: 'Number of Islands II',
  difficulty: 'hard',
  tags: ['arrays', 'union-find'],
  description: `You are given an empty \`m x n\` 2D grid representing a sea. You receive a list of positions where land is added one at a time. After each land addition, return the **number of islands** in the grid.

An island is surrounded by water and is formed by connecting adjacent (horizontal or vertical) lands.

Given \`positions\`, where \`positions[i] = [r_i, c_i]\` adds land at row \`r_i\` and column \`c_i\`, return an array of integers representing the number of islands after each addition.`,
  constraints: [
    '1 <= m, n, positions.length <= 10^4',
    '1 <= m * n <= 10^4',
    'positions[i].length == 2',
    '0 <= r_i < m',
    '0 <= c_i < n',
  ],
  examples: [
    {
      input: 'm = 3, n = 3, positions = [[0,0],[0,1],[1,2],[2,1]]',
      output: '[1,1,2,3]',
      explanation: 'After (0,0): 1 island. After (0,1): merges, still 1. After (1,2): 2 islands. After (2,1): 3 islands.',
    },
    {
      input: 'm = 1, n = 1, positions = [[0,0]]',
      output: '[1]',
    },
  ],
  hints: [
    'Use a Union-Find (Disjoint Set Union) data structure on all m*n cells.',
    'Convert 2D coordinates (r, c) to a 1D index: idx = r * n + c.',
    'Maintain a set of "land cells" to avoid re-processing duplicates.',
    'When adding a cell: increment island count by 1, then for each of the 4 adjacent land neighbors, if they are in a different component, union them and decrement the count.',
  ],
  functionName: 'numIslands2',
  params: ['m', 'n', 'positions'],
  starterCode: {
    javascript: `function numIslands2(m, n, positions) {

}`,
    python: `def numIslands2(m, n, positions):
    pass`,
  },
  visibleTests: [
    { args: [3, 3, [[0, 0], [0, 1], [1, 2], [2, 1]]], expected: [1, 1, 2, 3] },
    { args: [1, 1, [[0, 0]]], expected: [1] },
  ],
  hiddenTests: [
    { args: [2, 2, [[0, 0], [1, 1], [0, 1]]], expected: [1, 2, 1] },
    { args: [3, 3, [[0, 0], [0, 0], [1, 1]]], expected: [1, 1, 2] },
    { args: [1, 4, [[0, 0], [0, 2], [0, 1]]], expected: [1, 2, 1] },
  ],
};
