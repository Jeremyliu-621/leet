import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-champion-graph',
  title: 'Find Champion I',
  difficulty: 'easy',
  tags: ['arrays'],
  description: `There are \`n\` teams numbered from \`0\` to \`n - 1\` in a tournament. Given a **0-indexed** 2D boolean matrix \`grid\` of size \`n x n\`, \`grid[i][j]\` is \`1\` if team \`i\` is stronger than team \`j\`, and \`0\` otherwise.

The **champion** of the tournament is the team that is stronger than all other teams.

Return the index of the **champion** team, or \`-1\` if there is no champion.`,
  constraints: [
    'n == grid.length',
    'n == grid[i].length',
    '1 <= n <= 100',
    'grid[i][j] is either 0 or 1.',
    'For all i, grid[i][i] is 0.',
  ],
  examples: [
    { input: 'grid = [[0,1],[0,0]]', output: '0', explanation: 'Team 0 is stronger than team 1, so team 0 is the champion.' },
    { input: 'grid = [[0,0,1],[1,0,1],[0,0,0]]', output: '1', explanation: 'Team 1 is stronger than teams 0 and 2, so team 1 is the champion.' },
  ],
  hints: [
    'Level 1: The champion must beat all other teams. For each team, check if it beats every other team.',
    'Level 2: A team is a champion if and only if its row sum equals n-1 (it beats all others).',
    'Level 3: for(let i=0;i<n;i++){if(grid[i].reduce((s,v)=>s+v,0)===n-1)return i;}return -1;',
  ],
  functionName: 'findChampion',
  params: ['grid'],
  starterCode: {
    javascript: 'function findChampion(grid) {\n  // your code here\n}\n',
    typescript: "function findChampion(grid: number[][]): number {\n  // your code here\n}",

    python: 'def findChampion(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[0, 1], [0, 0]]], expected: 0 },
    { args: [[[0, 0, 1], [1, 0, 1], [0, 0, 0]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[0, 1, 1], [0, 0, 1], [0, 0, 0]]], expected: 0 },
    { args: [[[0, 0], [0, 0]]], expected: -1 },
    { args: [[[0, 1, 0], [0, 0, 0], [1, 1, 0]]], expected: 2 },
  ],
};
