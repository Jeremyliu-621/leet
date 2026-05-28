import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minesweeper',
  title: 'Minesweeper',
  difficulty: 'medium',
  tags: ['graph', 'arrays'],
  description: `You are given an \`m × n\` char matrix \`board\` representing a Minesweeper game board, and an integer array \`click\` where \`click = [clickr, clickc]\` represents the position of the next click.

The board cells contain:
- \`'M'\`: an **unrevealed mine**
- \`'E'\`: an **unrevealed empty** cell
- \`'B'\`: a **revealed blank** cell (no adjacent mines)
- \`'1'\`–\`'8'\`: a revealed cell with that many adjacent mines
- \`'X'\`: a **revealed mine** (game over)

Apply the following rules for the click:
1. If the clicked cell is an unrevealed mine \`'M'\`, reveal it as \`'X'\` — game over.
2. If the clicked cell is an unrevealed empty cell \`'E'\`:
   - Count the number of mines in the 8 adjacent cells.
   - If count > 0, reveal it as the digit character (\`'1'\`–\`'8'\`).
   - If count == 0, reveal it as \`'B'\` and recursively reveal all 8 neighbors.

Return the **updated board**.`,
  constraints: [
    'm == board.length',
    'n == board[i].length',
    '1 <= m, n <= 50',
    '`board[i][j]` is one of `\'M\'`, `\'E\'`, `\'B\'`, `\'1\'`–`\'8\'`',
    'click.length == 2',
    '0 <= clickr < m, 0 <= clickc < n',
    '`board[clickr][clickc]` is `\'M\'` or `\'E\'`',
  ],
  examples: [
    {
      input: 'board = [["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]], click = [3,0]',
      output: '[["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]',
      explanation: 'Clicking an empty cell with no adjacent mines triggers a BFS/DFS reveal.',
    },
    {
      input: 'board = [["B","1","E","1","B"],["B","1","M","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]], click = [1,2]',
      output: '[["B","1","E","1","B"],["B","1","X","1","B"],["B","1","1","1","B"],["B","B","B","B","B"]]',
      explanation: 'Clicking on a mine reveals it as \'X\'.',
    },
  ],
  hints: [
    'Handle the two base cases first: if the click lands on `\'M\'`, change it to `\'X\'` and return. Otherwise, start a DFS/BFS from the clicked cell.',
    'For each revealed `\'E\'` cell, count mines in all 8 directions. If count > 0, set the cell to the digit; if count == 0, set it to `\'B\'` and enqueue/recurse all 8 neighbors that are still `\'E\'`.',
    'Mark cells as `\'B\'` or a digit before recursing to avoid revisiting. Only `\'E\'` cells are candidates for further revelation.',
  ],
  functionName: 'updateBoard',
  params: ['board', 'click'],
  starterCode: {
    javascript: `function updateBoard(board, click) {

}`,
    python: `def updateBoard(board: list[list[str]], click: list[int]) -> list[list[str]]:
    pass`,
  },
  visibleTests: [
    {
      args: [
        [['E','E','E','E','E'],['E','E','M','E','E'],['E','E','E','E','E'],['E','E','E','E','E']],
        [3, 0],
      ],
      expected: [['B','1','E','1','B'],['B','1','M','1','B'],['B','1','1','1','B'],['B','B','B','B','B']],
    },
    {
      args: [
        [['B','1','E','1','B'],['B','1','M','1','B'],['B','1','1','1','B'],['B','B','B','B','B']],
        [1, 2],
      ],
      expected: [['B','1','E','1','B'],['B','1','X','1','B'],['B','1','1','1','B'],['B','B','B','B','B']],
    },
    {
      args: [
        [['M']],
        [0, 0],
      ],
      expected: [['X']],
    },
  ],
  hiddenTests: [
    {
      args: [
        [['E']],
        [0, 0],
      ],
      expected: [['B']],
    },
    {
      args: [
        [['E','M'],['E','E']],
        [0, 0],
      ],
      expected: [['1','M'],['E','E']],
    },
    {
      args: [
        [['E','E','E'],['E','M','E'],['E','E','E']],
        [0, 0],
      ],
      expected: [['1','E','E'],['E','M','E'],['E','E','E']],
    },
    {
      args: [
        [['E','E','E'],['E','E','E'],['E','E','E']],
        [1, 1],
      ],
      expected: [['B','B','B'],['B','B','B'],['B','B','B']],
    },
    {
      args: [
        [['M','E'],['E','E']],
        [1, 1],
      ],
      expected: [['M','E'],['E','1']],
    },
  ],
};
