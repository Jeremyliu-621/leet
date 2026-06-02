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
  const m = board.length, n = board[0].length;
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const copy = board.map(r => r.slice());
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;
      for (const [di, dj] of dirs) {
        const ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n) live += copy[ni][nj];
      }
      if (copy[i][j] === 1) board[i][j] = live === 2 || live === 3 ? 1 : 0;
      else board[i][j] = live === 3 ? 1 : 0;
    }
  }
  return board;
}`,
    typescript: `function gameOfLife(board: number[][]): number[][] {
  const m = board.length, n = board[0].length;
  const dirs: [number,number][] = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const copy = board.map(r => r.slice());
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let live = 0;
      for (const [di, dj] of dirs) {
        const ni = i + di, nj = j + dj;
        if (ni >= 0 && ni < m && nj >= 0 && nj < n) live += copy[ni][nj];
      }
      if (copy[i][j] === 1) board[i][j] = live === 2 || live === 3 ? 1 : 0;
      else board[i][j] = live === 3 ? 1 : 0;
    }
  }
  return board;
}`,
    python: `def gameOfLife(board):
    m, n = len(board), len(board[0])
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    copy = [row[:] for row in board]
    for i in range(m):
        for j in range(n):
            live = sum(copy[i+di][j+dj] for di,dj in dirs if 0<=i+di<m and 0<=j+dj<n)
            if copy[i][j]: board[i][j] = 1 if live in (2,3) else 0
            else: board[i][j] = 1 if live == 3 else 0
    return board`,
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
