import type { Problem } from '../types';

export const problem: Problem = {
  id: 'right-triangles',
  title: 'Right Triangles',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given a 2D boolean matrix \`grid\`.

Return an integer that is the **number of right triangles** that can be formed with 3 elements of \`grid\` such that **all** of them have a value of 1.

A **right triangle** is a triangle where one of the angles is exactly 90 degrees. In a matrix context, the right angle vertex is the cell where the horizontal and vertical legs of the triangle meet.

Formally, a right triangle consists of three cells:
- A vertex cell \`(r, c)\` with \`grid[r][c] = 1\`
- One cell in the **same row** as the vertex: \`(r, c')\` with \`c' ≠ c\` and \`grid[r][c'] = 1\`
- One cell in the **same column** as the vertex: \`(r', c)\` with \`r' ≠ r\` and \`grid[r'][c] = 1\`

The right angle is always at the vertex cell.`,
  constraints: [
    '1 <= grid.length, grid[0].length <= 1000',
    '0 <= grid[i][j] <= 1',
  ],
  examples: [
    {
      input: 'grid = [[0,1,0],[0,1,1],[0,1,0]]',
      output: '2',
      explanation:
        'The cell (1,1) has row_ones=2 and col_ones=3. It contributes (2-1)*(3-1)=2 right triangles. All other 1-cells contribute 0. Total = 2.',
    },
    {
      input: 'grid = [[1,0,0,0],[0,1,0,1],[1,0,0,0]]',
      output: '0',
      explanation:
        'For each cell with value 1, either row_ones=1 or col_ones=1, so (row_ones-1)*(col_ones-1)=0. Total = 0.',
    },
    {
      input: 'grid = [[1,1],[1,1]]',
      output: '4',
      explanation:
        'row_ones=[2,2], col_ones=[2,2]. Each of the 4 cells contributes (2-1)*(2-1)=1. Total = 4.',
    },
  ],
  hints: [
    'Level 1: For each cell (i,j) with grid[i][j]=1, count how many right triangles have the right angle at (i,j). The row leg must go to another 1 in row i; the column leg must go to another 1 in column j.',
    'Level 2: If rowOnes[i] is the count of 1s in row i and colOnes[j] is the count of 1s in column j, then the number of right triangles with right angle at (i,j) is exactly (rowOnes[i]-1) * (colOnes[j]-1).',
    'Level 3: Precompute rowOnes and colOnes in O(m*n). Then iterate over all cells with value 1 and sum the contributions. Total O(m*n).',
  ],
  functionName: 'numberOfRightTriangles',
  params: ['grid'],
  starterCode: {
    javascript: `function numberOfRightTriangles(grid) {
  const m = grid.length, n = grid[0].length;
  const rowOnes = grid.map(row => row.reduce((s, v) => s + v, 0));
  const colOnes = Array(n).fill(0);
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      colOnes[j] += grid[i][j];
  let ans = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (grid[i][j] === 1)
        ans += (rowOnes[i] - 1) * (colOnes[j] - 1);
  return ans;
}`,
    typescript: `function numberOfRightTriangles(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  const rowOnes = grid.map(row => row.reduce((s, v) => s + v, 0));
  const colOnes = new Array(n).fill(0);
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      colOnes[j] += grid[i]![j]!;
  let ans = 0;
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      if (grid[i]![j] === 1)
        ans += (rowOnes[i]! - 1) * (colOnes[j]! - 1);
  return ans;
}`,
    python: `def numberOfRightTriangles(grid):
    m, n = len(grid), len(grid[0])
    row_ones = [sum(row) for row in grid]
    col_ones = [sum(grid[i][j] for i in range(m)) for j in range(n)]
    ans = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                ans += (row_ones[i] - 1) * (col_ones[j] - 1)
    return ans`,
  },
  visibleTests: [
    { args: [[[0, 1, 0], [0, 1, 1], [0, 1, 0]]], expected: 2 },
    { args: [[[1, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]]], expected: 0 },
    { args: [[[1, 1], [1, 1]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: 0 },
    { args: [[[1, 1, 1]]], expected: 0 },
    { args: [[[1], [1], [1]]], expected: 0 },
    { args: [[[1, 0], [0, 1]]], expected: 0 },
    { args: [[[1, 1], [0, 1]]], expected: 1 },
    { args: [[[0, 1, 0], [1, 1, 1], [0, 1, 0]]], expected: 4 },
    { args: [[[1, 1, 0], [1, 1, 0], [0, 0, 1]]], expected: 4 },
    { args: [[[1, 1, 1], [1, 0, 1], [1, 1, 1]]], expected: 24 },
  ],
};
