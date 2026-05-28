import type { Problem } from '../types';

export const problem: Problem = {
  id: 'game-of-life',
  title: 'Game of Life',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `According to **Conway's Game of Life**, the next state of each cell is determined by its eight neighbors (horizontal, vertical, diagonal):

- Any **live** cell with **fewer than two** live neighbors dies (underpopulation).
- Any **live** cell with **two or three** live neighbors lives on.
- Any **live** cell with **more than three** live neighbors dies (overpopulation).
- Any **dead** cell with **exactly three** live neighbors becomes alive (reproduction).

Given the current state of the board, return the next state.

The board is given as a 2D grid of \`0\`s (dead) and \`1\`s (live). You must update the board **in-place**.`,
  constraints: [
    '`m == board.length`',
    '`n == board[i].length`',
    '`1 <= m, n <= 25`',
    '`board[i][j]` is `0` or `1`',
  ],
  examples: [
    {
      input: 'board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]',
      output: '[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]',
    },
    {
      input: 'board = [[1,1],[1,0]]',
      output: '[[1,1],[1,1]]',
    },
  ],
  hints: [
    'Count live neighbors for each cell (8-directional). Apply the rules to compute the next state.',
    'To avoid modifying cells that haven\'t been processed yet, use temporary values: encode `1→0` as `2` and `0→1` as `3`, then convert back at the end.',
    'Alternatively, work on a deep copy of the board and write the result back.',
  ],
  functionName: 'gameOfLife',
  params: ['board'],
  starterCode: {
    javascript: `function gameOfLife(board) {

}`,
    typescript: "function gameOfLife(board: number[][]): number[][] {\n\n}",

    python: `def gameOfLife(board):
    pass`,
  },
  visibleTests: [
    {
      args: [[[0,1,0],[0,0,1],[1,1,1],[0,0,0]]],
      expected: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]],
    },
    {
      args: [[[1,1],[1,0]]],
      expected: [[1,1],[1,1]],
    },
  ],
  hiddenTests: [
    {
      args: [[[1]]],
      expected: [[0]],
    },
    {
      args: [[[1,0],[0,1]]],
      expected: [[0,0],[0,0]],
    },
    {
      args: [[[0,0,0],[0,1,0],[0,0,0]]],
      expected: [[0,0,0],[0,0,0],[0,0,0]],
    },
  ],
};
