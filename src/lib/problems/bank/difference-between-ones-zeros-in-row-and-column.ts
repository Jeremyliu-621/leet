import type { Problem } from '../types';

export const problem: Problem = {
  id: 'difference-between-ones-zeros-in-row-and-column',
  title: 'Difference Between Ones and Zeros in Row and Column',
  difficulty: 'easy',
  tags: ['arrays', 'math'],
  description: `You are given a **0-indexed** \`m x n\` binary matrix \`grid\`.

A **0-indexed** \`m x n\` difference matrix \`diff\` is created with the following procedure:
- Let \`onesRow[i]\` be the number of \`1\`s in the \`i\`-th row.
- Let \`onesCol[j]\` be the number of \`1\`s in the \`j\`-th column.
- Let \`zerosRow[i]\` be the number of \`0\`s in the \`i\`-th row.
- Let \`zerosCol[j]\` be the number of \`0\`s in the \`j\`-th column.

Then \`diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j]\`.

Return the difference matrix \`diff\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    'grid[i][j] is either 0 or 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1,1],[1,0,1],[0,0,1]]',
      output: '[[0,0,4],[0,0,4],[-2,-2,2]]',
      explanation: 'Row 0: ones=2, zeros=1. Row 1: ones=2, zeros=1. Row 2: ones=1, zeros=2. Col 0: ones=1, zeros=2. Col 1: ones=1, zeros=2. Col 2: ones=3, zeros=0. diff[0][0]=2+1-1-2=0, diff[0][2]=2+3-1-0=4, etc.',
    },
    {
      input: 'grid = [[1,1,1],[1,1,1]]',
      output: '[[5,5,5],[5,5,5]]',
      explanation: 'Every row has 3 ones and 0 zeros; every column has 2 ones and 0 zeros. diff=3+2-0-0=5.',
    },
  ],
  hints: [
    'Pre-compute onesRow[i] for each row and onesCol[j] for each column. Zeros can be derived: zerosRow[i] = n - onesRow[i].',
    'zerosRow[i] = n - onesRow[i] and zerosCol[j] = m - onesCol[j]. So diff[i][j] = onesRow[i] + onesCol[j] - (n - onesRow[i]) - (m - onesCol[j]) = 2*onesRow[i] + 2*onesCol[j] - m - n.',
    'const m=grid.length,n=grid[0].length,or=grid.map(r=>r.reduce((a,v)=>a+v,0)),oc=Array.from({length:n},(_,j)=>grid.reduce((a,r)=>a+r[j],0));return grid.map((r,i)=>r.map((_,j)=>2*or[i]+2*oc[j]-m-n));',
  ],
  functionName: 'onesMinusZeros',
  params: ['grid'],
  starterCode: {
    javascript: 'function onesMinusZeros(grid) {\n  // your code here\n}\n',
    typescript: 'function onesMinusZeros(grid: number[][]): number[][] {\n  // your code here\n  return [];\n}',
    python: 'def onesMinusZeros(grid):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    {
      args: [[[0, 1, 1], [1, 0, 1], [0, 0, 1]]],
      expected: [[0, 0, 4], [0, 0, 4], [-2, -2, 2]],
    },
    {
      args: [[[1, 1, 1], [1, 1, 1]]],
      expected: [[5, 5, 5], [5, 5, 5]],
    },
  ],
  hiddenTests: [
    {
      args: [[[0]]],
      expected: [[-2]],
    },
    {
      args: [[[1]]],
      expected: [[2]],
    },
    {
      args: [[[0, 0], [0, 0]]],
      expected: [[-4, -4], [-4, -4]],
    },
    {
      args: [[[1, 0], [0, 1]]],
      expected: [[0, 0], [0, 0]],
    },
    {
      args: [[[1, 1], [0, 0]]],
      expected: [[2, 2], [-2, -2]],
    },
    {
      args: [[[1, 0, 1], [0, 1, 0]]],
      expected: [[1, 1, 1], [-1, -1, -1]],
    },
    {
      args: [[[0, 1], [1, 1], [1, 0]]],
      expected: [[1, 1], [3, 3], [1, 1]],
    },
    {
      args: [[[1, 1, 0], [0, 0, 1]]],
      expected: [[1, 1, 1], [-1, -1, -1]],
    },
  ],
};
