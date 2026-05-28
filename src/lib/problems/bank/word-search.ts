import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-search',
  title: 'Word Search',
  difficulty: 'medium',
  tags: ['graph', 'backtracking'],
  description: `Given an \`m × n\` grid of characters \`board\` and a string \`word\`, return \`true\` if \`word\` exists in the grid.

The word can be constructed from letters of sequentially **adjacent cells** (horizontally or vertically neighboring). The same cell may **not** be used more than once.`,
  constraints: [
    '`m == board.length`',
    '`n == board[i].length`',
    '`1 <= m, n <= 6`',
    '`1 <= word.length <= 15`',
    '`board[i][j]` and `word[k]` are lowercase English letters',
  ],
  examples: [
    {
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"',
      output: 'true',
    },
    {
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"',
      output: 'true',
    },
    {
      input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"',
      output: 'false',
      explanation: 'You cannot reuse the "B" at (0,1).',
    },
  ],
  hints: [
    'Use DFS/backtracking. For each cell matching word[0], attempt to build the full word by exploring neighbors.',
    'Mark a cell as visited before recursing (e.g., temporarily set it to \'#\'), then restore it afterward.',
    'Prune early: if the current character doesn\'t match word[index], return false immediately.',
  ],
  functionName: 'exist',
  params: ['board', 'word'],
  starterCode: {
    javascript: `function exist(board, word) {

}`,
    typescript: "function exist(board: string[][], word: string): boolean {\n\n}",

    python: `def exist(board, word):
    pass`,
  },
  visibleTests: [
    {
      args: [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED'],
      expected: true,
    },
    {
      args: [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'SEE'],
      expected: true,
    },
    {
      args: [[['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB'],
      expected: false,
    },
  ],
  hiddenTests: [
    { args: [[['-']], '-'], expected: true },
    {
      args: [[['A', 'B'], ['C', 'D']], 'ABDC'],
      expected: true,
    },
    {
      args: [[['A', 'A']], 'AAA'],
      expected: false,
    },
  ],
};
