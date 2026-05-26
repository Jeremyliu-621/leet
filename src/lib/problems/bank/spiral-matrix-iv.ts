import type { Problem } from '../types';

export const problem: Problem = {
  id: 'spiral-matrix-iv',
  title: 'Spiral Matrix IV',
  difficulty: 'medium',
  tags: ['simulation', 'arrays'],
  description: `You are given two integers \`m\` and \`n\` representing the dimensions of a matrix, and a flat array \`vals\` representing the values of a linked list.

Fill an \`m × n\` matrix in **spiral order** (starting from the top-left, going right, then down, then left, then up, and repeat) with the values from \`vals\`. If there are remaining cells after all values are used, fill them with \`-1\`.

Return the resulting \`m × n\` matrix.`,
  constraints: [
    '1 <= m, n <= 10^5',
    '1 <= m * n <= 10^5',
    '0 <= vals.length <= m * n',
    '0 <= vals[i] <= 1000',
  ],
  examples: [
    {
      input: 'm = 3, n = 5, vals = [3,0,2,6,8,1,7,9,4,2,5,5,0]',
      output: '[[3,0,2,6,8],[5,0,-1,-1,1],[5,2,4,9,7]]',
      explanation: 'Fill the 3×5 matrix in spiral order with the linked list values, leaving no cell as -1 (list has 13 = 3*5-2 values, so last 2 cells get -1). The spiral order visits: (0,0),(0,1),(0,2),(0,3),(0,4),(1,4),(2,4),(2,3),(2,2),(2,1),(2,0),(1,0),(1,1).',
    },
    {
      input: 'm = 1, n = 4, vals = [0,1,2]',
      output: '[[0,1,2,-1]]',
      explanation: 'Single row; fill left to right, last cell gets -1.',
    },
    {
      input: 'm = 2, n = 2, vals = [1,2,3,4]',
      output: '[[1,2],[4,3]]',
      explanation: 'Spiral: (0,0)=1, (0,1)=2, (1,1)=3, (1,0)=4.',
    },
  ],
  hints: [
    'Simulate spiral traversal with four direction vectors: right, down, left, up. Use boundary variables (top, bottom, left, right) that shrink as each layer is completed.',
    'Keep a pointer into the vals array. Fill each cell in spiral order with the next value, or -1 if the pointer has gone past the end.',
    'After traversing the top row, increment top. After the right column, decrement right. After the bottom row, decrement bottom. After the left column, increment left. Repeat until all cells are filled.',
  ],
  functionName: 'spiralMatrix',
  params: ['m', 'n', 'vals'],
  starterCode: {
    javascript: `function spiralMatrix(m, n, vals) {
  // Initialize m×n matrix of -1.
  // Traverse in spiral order: right, down, left, up.
  // Fill cells with vals[ptr++] or leave -1.
  // Return the matrix.
}`,
    python: `def spiralMatrix(m, n, vals):
    # Initialize m×n matrix of -1.
    # Traverse in spiral order: right, down, left, up.
    # Fill cells with vals[ptr] or leave -1.
    # Return the matrix.
    pass`,
  },
  visibleTests: [
    {
      args: [3, 5, [3, 0, 2, 6, 8, 1, 7, 9, 4, 2, 5, 5, 0]],
      expected: [[3, 0, 2, 6, 8], [5, 0, -1, -1, 1], [5, 2, 4, 9, 7]],
    },
    {
      args: [1, 4, [0, 1, 2]],
      expected: [[0, 1, 2, -1]],
    },
    {
      args: [2, 2, [1, 2, 3, 4]],
      expected: [[1, 2], [4, 3]],
    },
  ],
  hiddenTests: [
    {
      args: [1, 1, [7]],
      expected: [[7]],
    },
    {
      args: [2, 3, [1, 2, 3, 4, 5, 6]],
      expected: [[1, 2, 3], [6, 5, 4]],
    },
    {
      args: [3, 3, [1, 2, 3, 4, 5]],
      expected: [[1, 2, 3], [-1, -1, 4], [-1, -1, 5]],
    },
    {
      args: [2, 2, []],
      expected: [[-1, -1], [-1, -1]],
    },
  ],
};
