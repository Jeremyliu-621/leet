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
  let count = 0;
  for (let r = 0; r <= grid.length - 3; r++) {
    for (let c = 0; c <= grid[r].length - 3; c++) {
      if (isMagic(grid, r, c)) count++;
    }
  }
  return count;
}

function isMagic(grid, r, c) {
  const vals = new Set();
  for (let dr = 0; dr < 3; dr++) {
    for (let dc = 0; dc < 3; dc++) {
      const v = grid[r + dr][c + dc];
      if (v < 1 || v > 9 || vals.has(v)) return false;
      vals.add(v);
    }
  }
  for (let i = 0; i < 3; i++) {
    let rs = 0, cs = 0;
    for (let j = 0; j < 3; j++) { rs += grid[r + i][c + j]; cs += grid[r + j][c + i]; }
    if (rs !== 15 || cs !== 15) return false;
  }
  if (grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2] !== 15) return false;
  if (grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c] !== 15) return false;
  return true;
}`,
    typescript: `function numMagicSquaresInside(grid: number[][]): number {
  let count = 0;
  for (let r = 0; r <= grid.length - 3; r++) {
    for (let c = 0; c <= grid[r]!.length - 3; c++) {
      if (isMagic(grid, r, c)) count++;
    }
  }
  return count;
}

function isMagic(grid: number[][], r: number, c: number): boolean {
  const vals = new Set<number>();
  for (let dr = 0; dr < 3; dr++) {
    for (let dc = 0; dc < 3; dc++) {
      const v = grid[r + dr]![c + dc]!;
      if (v < 1 || v > 9 || vals.has(v)) return false;
      vals.add(v);
    }
  }
  for (let i = 0; i < 3; i++) {
    let rs = 0, cs = 0;
    for (let j = 0; j < 3; j++) { rs += grid[r + i]![c + j]!; cs += grid[r + j]![c + i]!; }
    if (rs !== 15 || cs !== 15) return false;
  }
  if (grid[r]![c]! + grid[r+1]![c+1]! + grid[r+2]![c+2]! !== 15) return false;
  if (grid[r]![c+2]! + grid[r+1]![c+1]! + grid[r+2]![c]! !== 15) return false;
  return true;
}`,
    python: `def numMagicSquaresInside(grid):
    rows, cols = len(grid), len(grid[0])
    count = 0

    def is_magic(r, c):
        vals = set()
        for dr in range(3):
            for dc in range(3):
                v = grid[r + dr][c + dc]
                if v < 1 or v > 9 or v in vals:
                    return False
                vals.add(v)
        for i in range(3):
            if sum(grid[r + i][c + j] for j in range(3)) != 15:
                return False
            if sum(grid[r + j][c + i] for j in range(3)) != 15:
                return False
        if grid[r][c] + grid[r+1][c+1] + grid[r+2][c+2] != 15:
            return False
        if grid[r][c+2] + grid[r+1][c+1] + grid[r+2][c] != 15:
            return False
        return True

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
