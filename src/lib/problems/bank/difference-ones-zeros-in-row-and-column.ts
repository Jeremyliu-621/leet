import type { Problem } from '../types';

export const problem: Problem = {
  id: 'difference-ones-zeros-in-row-and-column',
  title: 'Difference Between Ones and Zeros in Row and Column',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** \`m x n\` binary matrix \`grid\`.

A **0-indexed** \`m x n\` difference matrix \`diff\` is created with the following procedure:

- Let \`onesRow[i]\` be the number of \`1\`'s in the \`i\`th row.
- Let \`onesCol[j]\` be the number of \`1\`'s in the \`j\`th column.
- Let \`zerosRow[i]\` be the number of \`0\`'s in the \`i\`th row.
- Let \`zerosCol[j]\` be the number of \`0\`'s in the \`j\`th column.
- \`diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j]\`

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
      explanation: `onesRow = [2,2,1], zerosRow = [1,1,2], onesCol = [1,1,3], zerosCol = [2,2,0].
diff[0][0] = 2+1−1−2 = 0, diff[0][2] = 2+3−1−0 = 4, diff[2][2] = 1+3−2−0 = 2.`,
    },
    {
      input: 'grid = [[1,1,1],[1,1,1]]',
      output: '[[5,5,5],[5,5,5]]',
      explanation: 'onesRow = [3,3], zerosRow = [0,0], onesCol = [2,2,2], zerosCol = [0,0,0]. diff[i][j] = 3+2−0−0 = 5.',
    },
  ],
  hints: [
    'Precompute rowOnes[i] = sum of row i, and colOnes[j] = sum of column j.',
    'Note that zerosRow[i] = n − onesRow[i] and zerosCol[j] = m − onesCol[j].',
    'So diff[i][j] = 2*onesRow[i] − n + 2*onesCol[j] − m.',
    '```js\nfunction onesMinusZeros(grid) {\n  const m = grid.length, n = grid[0].length;\n  const rowOnes = grid.map(r => r.reduce((a,b) => a+b, 0));\n  const colOnes = Array.from({length:n}, (_,j) =>\n    grid.reduce((a,r) => a+r[j], 0));\n  return grid.map((r,i) => r.map((_,j) =>\n    2*rowOnes[i] - n + 2*colOnes[j] - m));\n}\n```',
  ],
  functionName: 'onesMinusZeros',
  params: ['grid'],
  starterCode: {
    javascript: `function onesMinusZeros(grid) {

}`,
    typescript: `function onesMinusZeros(grid: number[][]): number[][] {

}`,
    python: `def onesMinusZeros(grid):
    pass`,
  },
  visibleTests: [
    { args: [[[0, 1, 1], [1, 0, 1], [0, 0, 1]]], expected: [[0, 0, 4], [0, 0, 4], [-2, -2, 2]] },
    { args: [[[1, 1, 1], [1, 1, 1]]], expected: [[5, 5, 5], [5, 5, 5]] },
    { args: [[[0]]], expected: [[-2]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[2]] },
    { args: [[[0, 0], [0, 0]]], expected: [[-4, -4], [-4, -4]] },
    { args: [[[1, 0], [0, 1]]], expected: [[0, 0], [0, 0]] },
    { args: [[[1, 1], [1, 1]]], expected: [[4, 4], [4, 4]] },
    { args: [[[0, 1], [1, 0], [1, 1]]], expected: [[1, 1], [1, 1], [3, 3]] },
    { args: [[[1, 0, 1], [0, 1, 0]]], expected: [[1, 1, 1], [-1, -1, -1]] },
  ],
};
