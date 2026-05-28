import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-submatrix-with-rearrangements',
  title: 'Largest Submatrix With Rearrangements',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `You are given a binary matrix \`matrix\` of size \`m × n\`, and you are allowed to **rearrange the columns** of \`matrix\` in any order.

Return the **area** of the largest submatrix within \`matrix\` where **every element is** \`1\` after reordering the columns optimally.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[0].length',
    '1 <= m, n <= 100',
    'matrix[i][j] is either 0 or 1.',
  ],
  examples: [
    {
      input: 'matrix = [[0,0,1],[1,1,1],[1,0,1]]',
      output: '4',
      explanation:
        'After sorting columns by the height at row 2: columns become [col2, col0, col1] with heights [3,2,0]. Best area: 2×2=4.',
    },
    {
      input: 'matrix = [[1,0,1,0,1]]',
      output: '3',
      explanation: 'Sort the 1-height columns together: 3 columns of height 1 → area 3.',
    },
    {
      input: 'matrix = [[1,1,0],[1,0,1]]',
      output: '2',
      explanation: 'Best arrangement gives at most a 2×1 submatrix.',
    },
  ],
  hints: [
    'For each cell, precompute the number of consecutive 1s ending at that row in that column (height).',
    'For each row, sort the column heights in descending order. After sorting, you can freely choose any subset.',
    'For position j (0-indexed) in the sorted row, the area is heights[j] × (j+1). Take the maximum across all rows and positions.',
    'The key insight: since columns can be rearranged, taking the j+1 tallest columns with min-height heights[j] always works.',
  ],
  functionName: 'largestSubmatrix',
  params: ['matrix'],
  starterCode: {
    javascript: `function largestSubmatrix(matrix) {
  // Rearrange columns optimally, return the largest all-1s submatrix area
}`,
    typescript: "function largestSubmatrix(matrix: number[][]): number {\n  // Rearrange columns optimally, return the largest all-1s submatrix area\n}",

    python: `def largestSubmatrix(matrix: list[list[int]]) -> int:
    # Your code here
    pass`,
  },
  visibleTests: [
    {
      args: [
        [
          [0, 0, 1],
          [1, 1, 1],
          [1, 0, 1],
        ],
      ],
      expected: 4,
    },
    { args: [[[1, 0, 1, 0, 1]]], expected: 3 },
    {
      args: [
        [
          [1, 1, 0],
          [1, 0, 1],
        ],
      ],
      expected: 2,
    },
  ],
  hiddenTests: [
    { args: [[[0]]], expected: 0 },
    { args: [[[1]]], expected: 1 },
    {
      args: [
        [
          [1, 1],
          [1, 1],
        ],
      ],
      expected: 4,
    },
    {
      args: [
        [
          [1, 1, 0],
          [1, 1, 1],
          [1, 1, 1],
        ],
      ],
      expected: 6,
    },
    {
      args: [
        [
          [1, 0, 0],
          [1, 0, 0],
          [1, 0, 0],
        ],
      ],
      expected: 3,
    },
    {
      args: [
        [
          [1, 1, 1],
          [1, 1, 1],
        ],
      ],
      expected: 6,
    },
  ],
};
