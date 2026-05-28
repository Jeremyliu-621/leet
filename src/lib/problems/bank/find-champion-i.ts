import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-champion-i',
  title: 'Find Champion I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` teams numbered \`0\` to \`n - 1\` in a tournament. Given an \`n × n\` binary matrix \`grid\`, where \`grid[i][j] == 1\` means team \`i\` is **stronger** than team \`j\`.

The **champion** is the team that is not beaten by any other team (no team is strictly stronger than them).

Return the champion of the tournament. It is guaranteed that there is **exactly one** champion.`,
  constraints: [
    '1 <= n <= 100',
    'grid[i][j] is either 0 or 1.',
    'For all i, grid[i][i] == 0.',
    'For all i != j, grid[i][j] != grid[j][i].',
    'The input is generated such that a unique champion exists.',
  ],
  examples: [
    {
      input: 'grid = [[0,1],[0,0]]',
      output: '0',
      explanation: 'Team 0 beats team 1. No team beats team 0. Champion = 0.',
    },
    {
      input: 'grid = [[0,0,1],[1,0,1],[0,0,0]]',
      output: '1',
      explanation: 'Team 1 beats teams 0 and 2. No team beats team 1. Champion = 1.',
    },
    {
      input: 'grid = [[0]]',
      output: '0',
      explanation: 'Only one team.',
    },
  ],
  hints: [
    'The champion is the team that has never been beaten by any other team.',
    'For each team i, count how many teams j have grid[j][i] == 1 (how many teams beat i).',
    'The champion is the team where this count is 0.',
  ],
  functionName: 'findChampion',
  params: ['grid'],
  starterCode: {
    javascript: `function findChampion(grid) {

}`,
    python: `def findChampion(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1], [0, 0]]], expected: 0 },
    { args: [[[0, 0, 1], [1, 0, 1], [0, 0, 0]]], expected: 1 },
    { args: [[[0]]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [1, 0]]], expected: 1 },
    { args: [[[0, 1, 1], [0, 0, 1], [0, 0, 0]]], expected: 0 },
    { args: [[[0, 1, 0], [0, 0, 0], [1, 1, 0]]], expected: 2 },
    { args: [[[0, 0, 0], [1, 0, 0], [1, 1, 0]]], expected: 2 },
    { args: [[[0, 1, 0, 1], [0, 0, 0, 1], [1, 1, 0, 1], [0, 0, 0, 0]]], expected: 2 },
    { args: [[[0, 0, 1, 0], [1, 0, 1, 0], [0, 0, 0, 0], [1, 1, 1, 0]]], expected: 3 },
  ],
};
