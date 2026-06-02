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
  const [r, c] = click;
  if (board[r][c] === 'M') { board[r][c] = 'X'; return board; }
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const m = board.length, n = board[0].length;
  const queue = [[r, c]];
  board[r][c] = 'B';
  while (queue.length) {
    const [cr, cc] = queue.shift();
    let mines = 0;
    for (const [dr, dc] of dirs) {
      const nr = cr + dr, nc = cc + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'M') mines++;
    }
    if (mines > 0) {
      board[cr][cc] = String(mines);
    } else {
      for (const [dr, dc] of dirs) {
        const nr = cr + dr, nc = cc + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr][nc] === 'E') {
          board[nr][nc] = 'B';
          queue.push([nr, nc]);
        }
      }
    }
  }
  return board;
}`,
    typescript: `function updateBoard(board: string[][], click: number[]): string[][] {
  const [r, c] = click as [number, number];
  if (board[r]![c] === 'M') { board[r]![c] = 'X'; return board; }
  const dirs: [number, number][] = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  const m = board.length, n = board[0]!.length;
  const queue: [number, number][] = [[r, c]];
  board[r]![c] = 'B';
  while (queue.length) {
    const [cr, cc] = queue.shift()!;
    let mines = 0;
    for (const [dr, dc] of dirs) {
      const nr = cr + dr, nc = cc + dc;
      if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr]![nc] === 'M') mines++;
    }
    if (mines > 0) {
      board[cr]![cc] = String(mines);
    } else {
      for (const [dr, dc] of dirs) {
        const nr = cr + dr, nc = cc + dc;
        if (nr >= 0 && nr < m && nc >= 0 && nc < n && board[nr]![nc] === 'E') {
          board[nr]![nc] = 'B';
          queue.push([nr, nc]);
        }
      }
    }
  }
  return board;
}`,
    python: `def updateBoard(board: list[list[str]], click: list[int]) -> list[list[str]]:
    if hasattr(board, 'to_py'):
        board = [[str(ch) for ch in (row.to_py() if hasattr(row, 'to_py') else row)] for row in board.to_py()]
    else:
        board = [list(row) for row in board]
    if hasattr(click, 'to_py'): click = list(click.to_py())
    r, c = int(click[0]), int(click[1])
    if board[r][c] == 'M':
        board[r][c] = 'X'
        return board
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    m, n = len(board), len(board[0])
    queue = [(r, c)]
    board[r][c] = 'B'
    while queue:
        cr, cc = queue.pop(0)
        mines = sum(1 for dr, dc in dirs if 0 <= cr+dr < m and 0 <= cc+dc < n and board[cr+dr][cc+dc] == 'M')
        if mines > 0:
            board[cr][cc] = str(mines)
        else:
            for dr, dc in dirs:
                nr, nc = cr+dr, cc+dc
                if 0 <= nr < m and 0 <= nc < n and board[nr][nc] == 'E':
                    board[nr][nc] = 'B'
                    queue.append((nr, nc))
    return board`,
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
