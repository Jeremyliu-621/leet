import type { Problem } from '../types';

export const problem: Problem = {
  id: 'n-queens-ii',
  title: 'N-Queens II',
  difficulty: 'hard',
  tags: ['backtracking'],
  description: `The **n-queens** puzzle is the problem of placing \`n\` queens on an \`n x n\` chessboard such that no two queens attack each other (no two share the same row, column, or diagonal).

Return the **number** of distinct solutions to the n-queens puzzle.`,
  constraints: ['1 <= n <= 9'],
  examples: [
    {
      input: 'n = 4',
      output: '2',
      explanation: 'There are two distinct ways to place 4 queens on a 4×4 board.',
    },
    {
      input: 'n = 1',
      output: '1',
    },
  ],
  hints: [
    'Use the same backtracking approach as the N-Queens problem, but count solutions instead of collecting board configurations.',
    'Track which columns and which diagonals (row−col and row+col) are occupied. Recurse row by row, placing one queen per row.',
    'The time complexity is O(n!) in the worst case, but backtracking prunes most branches. For n ≤ 9 it runs instantly.',
  ],
  functionName: 'totalNQueens',
  params: ['n'],
  starterCode: {
    javascript: `function totalNQueens(n) {\n\n}`,
    typescript: "function totalNQueens(n: number): number {\n\n}",

    python: `def totalNQueens(n):\n    pass`,
  },
  visibleTests: [
    { args: [4], expected: 2 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [5], expected: 10 },
    { args: [6], expected: 4 },
    { args: [8], expected: 92 },
    { args: [9], expected: 352 },
  ],
};
