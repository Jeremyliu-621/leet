import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-submatrices-with-equal-frequency-of-x-and-y',
  title: 'Count Submatrices with Equal Frequency of X and Y',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a 2D character matrix \`grid\` of size \`m × n\` and two characters \`x\` and \`y\` where \`x != y\`.

Return the number of submatrices of \`grid\` such that:
- The submatrix **starts from** the **upper-left corner** \`(0, 0)\`.
- The frequency of \`x\` in the submatrix is **greater than 0**.
- The frequency of \`x\` equals the frequency of \`y\`.

> A submatrix from \`(0, 0)\` to \`(i, j)\` is the subgrid formed by all cells \`(r, c)\` where \`0 ≤ r ≤ i\` and \`0 ≤ c ≤ j\`.`,
  constraints: [
    '1 <= m, n <= 50',
    'grid[i][j] is either x, y, or exactly one other character.',
    'x != y',
  ],
  examples: [
    {
      input: 'grid = [["a","a","b"],["b","b","a"],["a","b","b"]], x = "a", y = "b"',
      output: '4',
      explanation: 'The valid submatrices ending at (0,2), (1,0), (1,2), (2,2) each have equal nonzero counts of "a" and "b".',
    },
    {
      input: 'grid = [["a","b"],["b","a"]], x = "a", y = "b"',
      output: '3',
      explanation: 'Submatrices ending at (0,1), (1,0), and (1,1) each have equal nonzero a and b counts.',
    },
    {
      input: 'grid = [["a"]], x = "a", y = "b"',
      output: '0',
      explanation: 'The only submatrix has freq(a)=1, freq(b)=0 — not equal.',
    },
  ],
  hints: [
    'Level 1: A submatrix from (0,0) to (i,j) is a "top-left submatrix". For each (i,j), you need the count of x and y in that submatrix.',
    'Level 2: Build 2D prefix sums for x and y separately. prefix_x[i][j] = number of x in rows 0..i, cols 0..j. Use the standard inclusion-exclusion formula to compute these incrementally.',
    'Level 3: For each (i,j), check prefix_x[i][j] >= 1 and prefix_x[i][j] == prefix_y[i][j]. Count all such valid (i,j) pairs in O(m*n).',
  ],
  functionName: 'numberOfSubmatrices',
  params: ['grid', 'x', 'y'],
  starterCode: {
    javascript: `function numberOfSubmatrices(grid, x, y) {

}`,
    typescript: `function numberOfSubmatrices(grid: string[][], x: string, y: string): number {

}`,
    python: `def numberOfSubmatrices(grid, x, y):
    pass`,
  },
  visibleTests: [
    {
      args: [[['a', 'a', 'b'], ['b', 'b', 'a'], ['a', 'b', 'b']], 'a', 'b'],
      expected: 4,
    },
    {
      args: [[['a', 'b'], ['b', 'a']], 'a', 'b'],
      expected: 3,
    },
    {
      args: [[['a']], 'a', 'b'],
      expected: 0,
    },
  ],
  hiddenTests: [
    { args: [[['b']], 'a', 'b'], expected: 0 },
    { args: [[['a', 'b']], 'a', 'b'], expected: 1 },
    { args: [[['b', 'a']], 'a', 'b'], expected: 1 },
    { args: [[['a', 'a'], ['b', 'b']], 'a', 'b'], expected: 2 },
    { args: [[['a', 'b'], ['a', 'b']], 'a', 'b'], expected: 2 },
    { args: [[['c', 'c'], ['c', 'c']], 'a', 'b'], expected: 0 },
    {
      args: [
        [
          ['a', 'b', 'a'],
          ['b', 'a', 'b'],
          ['a', 'b', 'a'],
        ],
        'a',
        'b',
      ],
      expected: 5,
    },
    { args: [[['b', 'b', 'a']], 'a', 'b'], expected: 0 },
  ],
};
