import type { Problem } from '../types';

export const problem: Problem = {
  id: 'magic-squares-in-grid',
  title: 'Magic Squares In Grid',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `A **3 × 3** magic square is a 3 × 3 grid filled with **distinct** numbers from **1** to **9** such that each row, column, and both diagonals all have the same sum (**15**).

Given a \`rows × cols\` grid of integers, return the number of 3 × 3 contiguous magic square subgrids.

**Note:** while a magic square can only contain numbers from 1 to 9, the grid may contain numbers outside this range.`,
  constraints: [
    'rows == grid.length',
    'cols == grid[i].length',
    '1 <= rows, cols <= 10',
    '0 <= grid[i][j] <= 15',
  ],
  examples: [
    {
      input: 'grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]',
      output: '1',
      explanation: 'The inner 3x3 subgrid starting at (0,0) contains 4,3,8 / 9,5,1 / 2,7,6 but position (0,3)/(1,3)/(2,3) duplicate values make only one valid magic square. Precisely, columns 0-2 rows 0-2 form the magic square.',
    },
    {
      input: 'grid = [[2,7,6],[9,5,1],[4,3,8]]',
      output: '1',
      explanation: 'The 3×3 grid itself is a magic square: rows/cols/diags all sum to 15 and it contains digits 1–9.',
    },
    {
      input: 'grid = [[8]]',
      output: '0',
      explanation: 'Grid is smaller than 3×3, no 3×3 subgrid exists.',
    },
  ],
  hints: [
    'Iterate over every possible 3×3 subgrid top-left corner (i, j) where i ≤ rows-3 and j ≤ cols-3.',
    'For each subgrid, check: (1) all 9 values are distinct and in [1,9], (2) each row sums to 15, (3) each column sums to 15, (4) both diagonals sum to 15.',
    'Alternatively, a 3×3 magic square with distinct 1–9 has exactly 8 orientations. Hard-code the center must be 5 and check corner/edge arrangements.',
  ],
  functionName: 'numMagicSquaresInside',
  params: ['grid'],
  starterCode: {
    javascript: `function numMagicSquaresInside(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let r = 0; r <= rows - 3; r++) {
    for (let c = 0; c <= cols - 3; c++) {
      if (isMagic(grid, r, c)) count++;
    }
  }
  return count;
}

function isMagic(grid, r, c) {
  // check distinct 1-9
  // check rows, cols, diags sum to 15
}`,
    typescript: `function numMagicSquaresInside(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  for (let r = 0; r <= rows - 3; r++) {
    for (let c = 0; c <= cols - 3; c++) {
      if (isMagic(grid, r, c)) count++;
    }
  }
  return count;
}

function isMagic(grid: number[][], r: number, c: number): boolean {
  // check distinct 1-9
  // check rows, cols, diags sum to 15
  return false;
}`,
    python: `def numMagicSquaresInside(grid):
    rows, cols = len(grid), len(grid[0])
    count = 0

    def is_magic(r, c):
        # check distinct 1-9
        # check rows, cols, diags sum to 15
        pass

    for r in range(rows - 2):
        for c in range(cols - 2):
            if is_magic(r, c):
                count += 1
    return count`,
  },
  visibleTests: [
    {
      args: [[[4, 3, 8, 4], [9, 5, 1, 9], [2, 7, 6, 2]]],
      expected: 1,
    },
    {
      args: [[[2, 7, 6], [9, 5, 1], [4, 3, 8]]],
      expected: 1,
    },
    {
      args: [[[8]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[[5, 5, 5], [5, 5, 5], [5, 5, 5]]],
      expected: 0,
    },
    {
      args: [[[2, 7, 6, 1], [9, 5, 1, 3], [4, 3, 8, 0]]],
      expected: 1,
    },
    {
      args: [[[4, 3, 8, 4, 2], [9, 5, 1, 9, 7], [2, 7, 6, 2, 6], [6, 1, 8, 6, 2], [5, 7, 3, 5, 4]]],
      expected: 1,
    },
    {
      args: [[[1, 2, 3], [4, 5, 6], [7, 8, 9]]],
      expected: 0,
    },
    {
      args: [[[2, 9, 4], [7, 5, 3], [6, 1, 8]]],
      expected: 1,
    },
  ],
};
