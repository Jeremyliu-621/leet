import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-battleships-in-a-board',
  title: 'Count Battleships in a Board',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `Given an \`m x n\` matrix \`board\` where each cell is a \`'X'\` or a \`'.'\`, return the **number of battleships** on the board.

**Battleships** can only be placed horizontally or vertically on the board. In other words, they can only be made of the shape \`1 x k\` (\`1\` row, \`k\` columns) or \`k x 1\` (\`k\` rows, \`1\` column), where \`k\` can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).`,
  constraints: [
    'm == board.length',
    'n == board[0].length',
    '1 <= m, n <= 200',
    'board[i][j] is either \'.\' or \'X\'',
  ],
  examples: [
    {
      input: 'board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]',
      output: '2',
      explanation: 'One 1x1 battleship at (0,0) and one 3x1 at column 3.',
    },
    {
      input: 'board = [["."]]',
      output: '0',
    },
  ],
  hints: [
    'You can solve this in **O(m*n) time with O(1) extra space** (no DFS or BFS needed). Count only the "head" of each battleship.',
    'A cell `(i, j)` with `board[i][j] == \'X\'` is the head of a battleship if there is no `\'X\'` directly above it (i.e., `board[i-1][j] != \'X\'`) and no `\'X\'` directly to its left (i.e., `board[i][j-1] != \'X\'`).',
    'Count all such heads — that is the number of battleships.',
  ],
  functionName: 'countBattleships',
  params: ['board'],
  starterCode: {
    javascript: `function countBattleships(board) {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'X' &&
          (i === 0 || board[i-1][j] !== 'X') &&
          (j === 0 || board[i][j-1] !== 'X')) count++;
    }
  }
  return count;
}`,
    typescript: `function countBattleships(board: string[][]): number {
  let count = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0]!.length; j++) {
      if (board[i]![j] === 'X' &&
          (i === 0 || board[i-1]![j] !== 'X') &&
          (j === 0 || board[i]![j-1] !== 'X')) count++;
    }
  }
  return count;
}`,
    python: `def countBattleships(board):
    count = 0
    for i in range(len(board)):
        for j in range(len(board[0])):
            if (board[i][j] == 'X' and
                    (i == 0 or board[i-1][j] != 'X') and
                    (j == 0 or board[i][j-1] != 'X')):
                count += 1
    return count`,
  },
  visibleTests: [
    {
      args: [[['X', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X']]],
      expected: 2,
    },
    {
      args: [[['.']]],
      expected: 0,
    },
    {
      args: [[['X', 'X', 'X']]],
      expected: 1,
    },
  ],
  hiddenTests: [
    { args: [[['X']]], expected: 1 },
    { args: [[['X'], ['X'], ['X']]], expected: 1 },
    { args: [[['X', '.', 'X']]], expected: 2 },
    { args: [[['X', 'X'], ['.', '.'], ['X', 'X']]], expected: 2 },
    {
      args: [[['X', '.', 'X', '.'], ['X', '.', 'X', '.'], ['.', '.', '.', '.']]],
      expected: 2,
    },
  ],
};
