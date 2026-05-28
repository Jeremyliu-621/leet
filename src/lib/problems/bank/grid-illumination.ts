import type { Problem } from '../types';

export const problem: Problem = {
  id: 'grid-illumination',
  title: 'Grid Illumination',
  difficulty: 'hard',
  tags: ['hash-map', 'arrays'],
  description: `There is a 2D grid of size \`n x n\` where each cell is either a lamp (\`1\`) or empty (\`0\`).

A lamp at position \`[row, col]\` illuminates every cell in the same row, column, and both diagonals. Multiple lamps can illuminate the same cell.

You are given an integer \`n\`, an array \`lamps\` where \`lamps[i] = [rowi, coli]\` is the position of a lamp, and an array \`queries\` where \`queries[j] = [rowj, colj]\` is a query cell.

For each query, determine if the query cell is illuminated (by any lamp). After each query, **turn off** the queried lamp (if any) and all 8 adjacent lamps.

Return an array \`ans\` of length \`queries.length\` where \`ans[j]\` is \`1\` if the query cell \`queries[j]\` is illuminated, or \`0\` if it is not.`,
  constraints: [
    '`1 <= n <= 10^9`',
    '`0 <= lamps.length <= 20000`',
    '`lamps[i].length == 2`',
    '`0 <= lamps[i][0], lamps[i][1] < n`',
    '`0 <= queries.length <= 20000`',
    '`queries[i].length == 2`',
    '`0 <= queries[i][0], queries[i][1] < n`',
  ],
  examples: [
    {
      input: 'n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]',
      output: '[1,0]',
      explanation: 'Query (1,1): lamp (0,0) is on the same diagonal → illuminated (1). Turn off (0,0) and all 8 adjacent (including (1,1)). Query (1,0): no lamps remain on row 1, col 0, or its diagonals → not illuminated (0).',
    },
    {
      input: 'n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]',
      output: '[1,1]',
      explanation: 'First query (1,1): lamp (0,0) illuminates → 1. Turn off adj. Second query (1,1): lamp (4,4) is on the same diagonal and not yet turned off → 1.',
    },
  ],
  hints: [
    'Use hash maps to track the count of active lamps per row, column, diagonal (r-c), and anti-diagonal (r+c). A cell is illuminated if any of its four counts is > 0.',
    'Use a hash set to track which specific lamp positions are currently on (to handle duplicates in input and removals).',
    'After each query, check the 9 cells (the query cell and its 8 neighbors) and remove any lamps found there, decrementing the four hash maps accordingly.',
  ],
  functionName: 'gridIllumination',
  params: ['n', 'lamps', 'queries'],
  starterCode: {
    javascript: `function gridIllumination(n, lamps, queries) {

}`,
    typescript: "function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {\n\n}",

    python: `def gridIllumination(n, lamps, queries):
    pass`,
  },
  visibleTests: [
    { args: [5, [[0,0],[4,4]], [[1,1],[1,0]]], expected: [1,0] },
    { args: [5, [[0,0],[4,4]], [[1,1],[1,1]]], expected: [1,1] },
  ],
  hiddenTests: [
    { args: [1, [[0,0]], [[0,0]]], expected: [1] },
    { args: [5, [[0,0],[2,2],[4,4]], [[1,1],[2,2],[3,3]]], expected: [1,1,1] },
    { args: [5, [[0,0],[0,4]], [[0,4],[0,1],[1,4]]], expected: [1,1,0] },
    { args: [3, [], [[0,0],[1,1]]], expected: [0,0] },
    { args: [5, [[2,2]], [[2,2],[2,3]]], expected: [1,0] },
  ],
};
