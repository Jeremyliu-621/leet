import type { Problem } from '../types';

export const problem: Problem = {
  id: 'difference-between-ones-and-zeros-in-row-and-column',
  title: 'Difference Between Ones and Zeros in Row and Column',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** \`m x n\` binary matrix \`grid\`.

A **0-indexed** \`m x n\` difference matrix \`diff\` is created with the following procedure:

- Let the number of ones in the \`i\`th row be \`onesRow[i]\`.
- Let the number of ones in the \`j\`th column be \`onesCol[j]\`.
- Let the number of zeros in the \`i\`th row be \`zerosRow[i]\`.
- Let the number of zeros in the \`j\`th column be \`zerosCol[j]\`.
- \`diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j]\`

Return *the difference matrix* \`diff\`.`,
  constraints: [
    'm == grid.length',
    'n == grid[i].length',
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    'grid[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'grid = [[0,1,1],[1,0,1],[0,0,1]]',
      output: '[[0,0,4],[0,0,4],[-2,-2,2]]',
      explanation:
        'Row ones: [2,2,1]. Col ones: [1,1,3]. Row zeros: [1,1,2]. Col zeros: [2,2,0]. diff[0][0]=2+1-1-2=0, diff[0][1]=2+1-1-2=0, diff[0][2]=2+3-1-0=4, ...',
    },
    {
      input: 'grid = [[1,1,1],[1,1,1]]',
      output: '[[5,5,5],[5,5,5]]',
      explanation: 'All ones. Row ones=3, col ones=2. Row zeros=0, col zeros=0. diff[i][j]=3+2-0-0=5.',
    },
  ],
  hints: [
    'Level 1: Precompute onesRow[i] and onesCol[j] for each row and column. zerosRow[i] = n - onesRow[i]; zerosCol[j] = m - onesCol[j].',
    'Level 2: Then for each cell (i,j): diff[i][j] = onesRow[i] + onesCol[j] - zerosRow[i] - zerosCol[j].',
    'Level 3: O(m*n) time and O(m+n) extra space. Two passes: first compute prefix sums, then fill diff.',
  ],
  functionName: 'onesMinusZeros',
  params: ['grid'],
  starterCode: {
    javascript: `function onesMinusZeros(grid) {
  const m = grid.length, n = grid[0].length;
  const onesRow = grid.map(row => row.reduce((a, b) => a + b, 0));
  const onesCol = Array(n).fill(0);
  for (let j = 0; j < n; j++) for (let i = 0; i < m; i++) onesCol[j] += grid[i][j];
  return grid.map((row, i) =>
    row.map((_, j) =>
      onesRow[i] + onesCol[j] - (n - onesRow[i]) - (m - onesCol[j])
    )
  );
}`,
    typescript: `function onesMinusZeros(grid: number[][]): number[][] {
  const m = grid.length, n = grid[0]!.length;
  const onesRow = grid.map(row => row.reduce((a, b) => a + b, 0));
  const onesCol = new Array<number>(n).fill(0);
  for (let j = 0; j < n; j++) for (let i = 0; i < m; i++) onesCol[j]! += grid[i]![j]!;
  return grid.map((row, i) =>
    row.map((_, j) =>
      onesRow[i]! + onesCol[j]! - (n - onesRow[i]!) - (m - onesCol[j]!)
    )
  );
}`,
    python: `def onesMinusZeros(grid):
    m, n = len(grid), len(grid[0])
    ones_row = [sum(row) for row in grid]
    ones_col = [sum(grid[i][j] for i in range(m)) for j in range(n)]
    return [
        [ones_row[i] + ones_col[j] - (n - ones_row[i]) - (m - ones_col[j])
         for j in range(n)]
        for i in range(m)
    ]`,
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
    { args: [[[0]]], expected: [[-2]] },
    { args: [[[1]]], expected: [[2]] },
    { args: [[[0, 0], [0, 0]]], expected: [[-4, -4], [-4, -4]] },
    { args: [[[1, 0], [0, 1]]], expected: [[0, 0], [0, 0]] },
    { args: [[[1, 1], [1, 1]]], expected: [[4, 4], [4, 4]] },
    { args: [[[0, 1], [1, 0], [0, 0]]], expected: [[-1, -1], [-1, -1], [-3, -3]] },
  ],
};
