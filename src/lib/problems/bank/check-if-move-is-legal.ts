import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-move-is-legal',
  title: 'Check if Move is Legal',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given a **0-indexed** \`8 x 8\` grid \`board\`, where \`board[r][c]\` represents the cell \`(r, c)\` on a game board. On the board, free cells are represented by \`'.'\`, white cells are represented by \`'W'\`, and black cells are represented by \`'B'\`.

Each move in the game consists of choosing a free cell and changing it to the color you are playing as (either white or black). However, a move is only **legal** if, after changing it, the cell forms a **good line** with some other cells of that same color.

A **good line** is a line of **three or more cells** (including the new cell) where:
- The endpoints of the line are of the **same color** as the new cell.
- The **inside** of the line (the cells strictly between the endpoints) are all of the **opposite** color.

Given two integers \`rMove\` and \`cMove\` and a character \`color\` representing the color you are playing as (either \`'W'\` or \`'B'\`), return \`true\` *if changing cell* \`(rMove, cMove)\` *to* \`color\` *is a legal move, or* \`false\` *if it is not legal*.`,
  constraints: [
    'board.length == board[i].length == 8',
    '0 <= rMove, cMove < 8',
    'board[rMove][cMove] == \'.\'',
    'color is either \'W\' or \'B\'.',
  ],
  examples: [
    {
      input:
        'board = [[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]]\nrMove = 4, cMove = 3, color = "B"',
      output: 'true',
      explanation:
        'Placing B at (4,3) creates a good line in the vertical direction: B at row 0, Ws at rows 1-3, new B at row 4.',
    },
    {
      input:
        'board = [[".",".",".",".",".",".",".","."],[".","B",".",".","W",".",".","."],[".",".","W",".",".",".",".","."],[".",".",".","W","B",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".","B","W",".","."],[".",".",".",".",".",".","W","."],[".",".",".",".",".",".",".","B"]]\nrMove = 4, cMove = 4, color = "W"',
      output: 'false',
      explanation: 'Placing W at (4,4) does not create any good line in any direction.',
    },
  ],
  hints: [
    'Level 1: Check all 8 directions from (rMove, cMove).',
    'Level 2: In each direction, step through cells. You need at least one opposite-color cell immediately adjacent, then a same-color endpoint.',
    'Level 3: A good line: step 1 must be opposite color, then continue while seeing opposite color, then the first same-color cell you see (at distance >= 2) validates that direction.',
  ],
  functionName: 'checkMove',
  params: ['board', 'rMove', 'cMove', 'color'],
  starterCode: {
    javascript: `function checkMove(board, rMove, cMove, color) {
  const opposite = color === 'W' ? 'B' : 'W';
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  for (const [dr, dc] of dirs) {
    let r = rMove + dr, c = cMove + dc, len = 0;
    while (r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === opposite) {
      r += dr; c += dc; len++;
    }
    if (len > 0 && r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === color) return true;
  }
  return false;
}`,
    typescript: `function checkMove(board: string[][], rMove: number, cMove: number, color: string): boolean {
  const opposite = color === 'W' ? 'B' : 'W';
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  for (const [dr, dc] of dirs) {
    let r = rMove + dr, c = cMove + dc, len = 0;
    while (r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === opposite) {
      r += dr; c += dc; len++;
    }
    if (len > 0 && r >= 0 && r < 8 && c >= 0 && c < 8 && board[r][c] === color) return true;
  }
  return false;
}`,
    python: `def checkMove(board, rMove, cMove, color):
    opposite = 'B' if color == 'W' else 'W'
    for dr, dc in [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]:
        r, c, length = rMove + dr, cMove + dc, 0
        while 0 <= r < 8 and 0 <= c < 8 and board[r][c] == opposite:
            r += dr; c += dc; length += 1
        if length > 0 and 0 <= r < 8 and 0 <= c < 8 and board[r][c] == color:
            return True
    return False`,
  },
  visibleTests: [
    {
      args: [
        [
          ['.', '.', '.', 'B', '.', '.', '.', '.'],
          ['.', '.', '.', 'W', '.', '.', '.', '.'],
          ['.', '.', '.', 'W', '.', '.', '.', '.'],
          ['.', '.', '.', 'W', '.', '.', '.', '.'],
          ['W', 'B', 'B', '.', 'W', 'W', 'W', 'B'],
          ['.', '.', '.', 'B', '.', '.', '.', '.'],
          ['.', '.', '.', 'B', '.', '.', '.', '.'],
          ['.', '.', '.', 'W', '.', '.', '.', '.'],
        ],
        4, 3, 'B',
      ],
      expected: true,
    },
    {
      args: [
        [
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', 'B', '.', '.', 'W', '.', '.', '.'],
          ['.', '.', 'W', '.', '.', '.', '.', '.'],
          ['.', '.', '.', 'W', 'B', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', 'B', 'W', '.', '.'],
          ['.', '.', '.', '.', '.', '.', 'W', '.'],
          ['.', '.', '.', '.', '.', '.', '.', 'B'],
        ],
        4, 4, 'W',
      ],
      expected: false,
    },
  ],
  hiddenTests: [
    {
      args: [
        [
          ['.', 'W', '.', '.', '.', '.', '.', '.'],
          ['B', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        0, 0, 'B',
      ],
      expected: false,
    },
    {
      args: [
        [
          ['B', 'W', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.'],
        ],
        0, 2, 'B',
      ],
      expected: true,
    },
  ],
};
