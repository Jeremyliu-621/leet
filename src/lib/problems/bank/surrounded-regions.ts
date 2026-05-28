import type { Problem } from '../types';

export const problem: Problem = {
  id: 'surrounded-regions',
  title: 'Surrounded Regions',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You are given an \`m × n\` matrix \`board\` containing \`'X'\` and \`'O'\`. **Capture** all regions that are 4-directionally surrounded by \`'X'\`.

A region is captured by flipping all \`'O'\`s in that region into \`'X'\`s. An \`'O'\` on the **border** is never captured, nor are any \`'O'\`s connected to a border \`'O'\`.

Return the modified \`board\` as a 2D array of strings.`,
  constraints: [
    '`m == board.length`',
    '`n == board[i].length`',
    '`1 <= m, n <= 200`',
    '`board[i][j]` is `\'X\'` or `\'O\'`',
  ],
  examples: [
    {
      input: 'board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]',
      output: '[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]',
      explanation:
        'The bottom-left O is connected to the border and is not captured. The interior Os are surrounded and become X.',
    },
    {
      input: 'board = [["X"]]',
      output: '[["X"]]',
    },
  ],
  hints: [
    'Instead of finding surrounded regions directly, find the *unsurrounded* ones first: any "O" connected to a border "O" is safe.',
    'Run DFS/BFS from every border cell that is "O", marking reachable "O"s as safe (e.g., temporarily mark them as "S").',
    'After the traversal: flip every remaining "O" to "X", and restore every "S" back to "O".',
  ],
  functionName: 'solve',
  params: ['board'],
  starterCode: {
    javascript: `function solve(board) {

}`,
    typescript: "function solve(board: string[][]): string[][] {\n\n}",

    python: `def solve(board):
    pass`,
  },
  visibleTests: [
    {
      args: [
        [
          ['X', 'X', 'X', 'X'],
          ['X', 'O', 'O', 'X'],
          ['X', 'X', 'O', 'X'],
          ['X', 'O', 'X', 'X'],
        ],
      ],
      expected: [
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['X', 'O', 'X', 'X'],
      ],
    },
    { args: [[['X']]], expected: [['X']] },
    { args: [[['O']]], expected: [['O']] },
  ],
  hiddenTests: [
    {
      args: [
        [
          ['O', 'X', 'X', 'O'],
          ['X', 'O', 'O', 'X'],
          ['X', 'O', 'O', 'X'],
          ['O', 'X', 'X', 'O'],
        ],
      ],
      expected: [
        ['O', 'X', 'X', 'O'],
        ['X', 'X', 'X', 'X'],
        ['X', 'X', 'X', 'X'],
        ['O', 'X', 'X', 'O'],
      ],
    },
    {
      args: [[['X', 'O', 'X'], ['O', 'X', 'O'], ['X', 'O', 'X']]],
      expected: [
        ['X', 'O', 'X'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X'],
      ],
    },
  ],
};
