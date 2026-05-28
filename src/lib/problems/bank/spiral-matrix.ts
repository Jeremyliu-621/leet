import type { Problem } from '../types';

export const problem: Problem = {
  id: 'spiral-matrix',
  title: 'Spiral Matrix',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given an \`m × n\` matrix, return all elements of the matrix in **spiral order** (clockwise from the top-left).

Traverse: right across the top row, down the right column, left across the bottom row, up the left column — then repeat for the inner submatrix until all elements are visited.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 10',
    '-100 <= matrix[i][j] <= 100',
  ],
  examples: [
    {
      input: 'matrix = [[1,2,3],[4,5,6],[7,8,9]]',
      output: '[1,2,3,6,9,8,7,4,5]',
      explanation: 'Spiral: right [1,2,3], down [6,9], left [8,7], up [4], center [5].',
    },
    {
      input: 'matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]',
      output: '[1,2,3,4,8,12,11,10,9,5,6,7]',
      explanation: 'Spiral traversal of a 3×4 matrix.',
    },
    {
      input: 'matrix = [[1]]',
      output: '[1]',
      explanation: 'Single element — return it.',
    },
  ],
  hints: [
    'Maintain four boundaries: top, bottom, left, right. On each pass: traverse right across the top row, then shrink the top boundary; traverse down the right column, then shrink right; traverse left across the bottom row (if top <= bottom), then shrink bottom; traverse up the left column (if left <= right), then shrink left.',
    'Continue the loop while top <= bottom && left <= right. Each of the four edge traversals must check the boundary condition before running to handle rectangular (non-square) matrices.',
    '`let top=0,bottom=m-1,left=0,right=n-1; const res=[]; while(top<=bottom && left<=right){ for(let c=left;c<=right;c++) res.push(matrix[top][c]); top++; for(let r=top;r<=bottom;r++) res.push(matrix[r][right]); right--; if(top<=bottom){ for(let c=right;c>=left;c--) res.push(matrix[bottom][c]); bottom--; } if(left<=right){ for(let r=bottom;r>=top;r--) res.push(matrix[r][left]); left++; } } return res;`',
  ],
  functionName: 'spiralOrder',
  params: ['matrix'] as readonly string[],
  starterCode: {
    javascript: 'function spiralOrder(matrix) {\n  // your code here\n}\n',
    typescript: "function spiralOrder(matrix: number[][]): number[] {\n  // your code here\n}",

    python: 'def spiralOrder(matrix: list[list[int]]) -> list[int]:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2,3],[4,5,6],[7,8,9]]], expected: [1,2,3,6,9,8,7,4,5] },
    { args: [[[1,2,3,4],[5,6,7,8],[9,10,11,12]]], expected: [1,2,3,4,8,12,11,10,9,5,6,7] },
    { args: [[[1]]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[[1,2],[3,4]]], expected: [1,2,4,3] },
    { args: [[[1,2,3]]], expected: [1,2,3] },
    { args: [[[1],[2],[3]]], expected: [1,2,3] },
    { args: [[[1,2,3],[4,5,6]]], expected: [1,2,3,6,5,4] },
    { args: [[[1,2],[3,4],[5,6]]], expected: [1,2,4,6,5,3] },
  ],
};
