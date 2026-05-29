import type { Problem } from '../types';

export const problem: Problem = {
  id: 'painting-a-grid-with-three-different-colors',
  title: 'Painting a Grid With Three Different Colors',
  difficulty: 'hard',
  tags: ['dynamic-programming'],
  description: `You are given two integers \`m\` and \`n\`. Consider an \`m x n\` grid where each cell must be painted with exactly one of **three** colors such that no two adjacent cells (sharing a side) share the same color.

Return the number of ways to paint the grid modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= m <= 5`',
    '`1 <= n <= 1000`',
  ],
  examples: [
    {
      input: 'm = 1, n = 1',
      output: '3',
      explanation: 'A single cell can be any of 3 colors.',
    },
    {
      input: 'm = 1, n = 2',
      output: '6',
      explanation: 'Three choices for the first cell, two for the second (different from the first). 3 × 2 = 6.',
    },
    {
      input: 'm = 2, n = 3',
      output: '54',
      explanation: 'There are 6 valid column patterns for 2 rows, and each column can extend to 3 compatible next columns.',
    },
  ],
  hints: [
    'Key insight: process the grid column by column. The state is the color pattern of the current column (m colors, one per row, no two adjacent rows the same).',
    'First enumerate all valid column patterns: sequences of m colors (0,1,2) where no two consecutive values are equal. There are 3 × 2^(m−1) such patterns.',
    'Two column patterns are **compatible** if they assign different colors to every row (no row has the same color in both columns). Precompute this compatibility table.',
    'Run DP: dp[col][pattern] = number of ways to color columns 0..col ending with the given pattern. Transition: dp[col][p] = sum of dp[col−1][q] for all q compatible with p.',
  ],
  functionName: 'colorTheGrid',
  params: ['m', 'n'],
  starterCode: {
    javascript: `function colorTheGrid(m, n) {

}`,
    python: `def colorTheGrid(m: int, n: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [1, 1], expected: 3 },
    { args: [1, 2], expected: 6 },
    { args: [2, 3], expected: 54 },
  ],
  hiddenTests: [
    { args: [2, 2], expected: 18 },
    { args: [1, 5], expected: 48 },
    { args: [2, 4], expected: 162 },
    { args: [3, 3], expected: 246 },
  ],
};
