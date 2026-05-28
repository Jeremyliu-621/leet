import type { Problem } from '../types';

const JS_PREAMBLE = `
function solveSudokuRunner(board) {
  const b = board.map(row => [...row]);
  solveSudoku(b);
  return b;
}
`.trim();

const PY_PREAMBLE = `
def solveSudokuRunner(board):
    b = [list(row) for row in board]
    solveSudoku(b)
    return b
`.trim();

export const problem: Problem = {
  id: 'sudoku-solver',
  title: 'Sudoku Solver',
  difficulty: 'hard',
  tags: ['arrays', 'backtracking'],
  description: `Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy **all** of the following rules:

1. Each of the digits \`1-9\` must occur exactly once in each row.
2. Each of the digits \`1-9\` must occur exactly once in each column.
3. Each of the digits \`1-9\` must occur exactly once in each of the nine \`3x3\` sub-boxes of the grid.

Empty cells are indicated by the character \`'.'\`. You may assume the puzzle has a unique solution.

The board is a \`9x9\` array of strings. Modify it **in place**.

> **Note:** The \`solveSudokuRunner\` wrapper is pre-defined. Implement \`solveSudoku(board)\`.`,
  constraints: [
    '`board.length == 9`',
    '`board[i].length == 9`',
    "`board[i][j]` is a digit `'1'`-`'9'` or `'.'`",
    'The input board has a unique solution',
  ],
  examples: [
    {
      input: 'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
      output: '[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]',
    },
  ],
  hints: [
    'Scan for the next empty cell (`"."`) and try placing digits `"1"` through `"9"`. If a digit is valid, place it and recurse. If recursion fails, reset the cell to `"."` and try the next digit (backtracking).',
    "To check validity: a digit is valid if it doesn't appear in the same row, the same column, or the same 3x3 box. The box row-start is `Math.floor(row/3)*3` and box col-start is `Math.floor(col/3)*3`.",
    'Return `true` from your recursive function when all cells are filled (base case: no empty cell found). Return `false` when no digit works in the current cell, signalling the caller to backtrack.',
  ],
  functionName: 'solveSudokuRunner',
  params: ['board'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function solveSudoku(board) {\n  \n}\n',
    typescript: "function solveSudokuRunner(board: string[][]): string[][] {\n  \n}",

    python: 'def solveSudoku(board):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [
          ['5','3','.','.','7','.','.','.','.'],
          ['6','.','.','1','9','5','.','.','.'],
          ['.','9','8','.','.','.','.','6','.'],
          ['8','.','.','.','6','.','.','.','3'],
          ['4','.','.','8','.','3','.','.','1'],
          ['7','.','.','.','2','.','.','.','6'],
          ['.','6','.','.','.','.','2','8','.'],
          ['.','.','.','4','1','9','.','.','5'],
          ['.','.','.','.','8','.','.','7','9'],
        ],
      ],
      expected: [
        ['5','3','4','6','7','8','9','1','2'],
        ['6','7','2','1','9','5','3','4','8'],
        ['1','9','8','3','4','2','5','6','7'],
        ['8','5','9','7','6','1','4','2','3'],
        ['4','2','6','8','5','3','7','9','1'],
        ['7','1','3','9','2','4','8','5','6'],
        ['9','6','1','5','3','7','2','8','4'],
        ['2','8','7','4','1','9','6','3','5'],
        ['3','4','5','2','8','6','1','7','9'],
      ],
    },
  ],
  hiddenTests: [
    {
      args: [
        [
          ['.','.','9','7','4','8','.','.','.'],
          ['7','.','.','.','.','.','.','.','.'],
          ['.','2','.','1','.','9','.','.','.'],
          ['.','.','7','.','.','.','2','4','.'],
          ['.','6','4','.','1','.','5','9','.'],
          ['.','9','8','.','.','.','3','.','.'],
          ['.','.','.','8','.','3','.','2','.'],
          ['.','.','.','.','.','.','.','.','6'],
          ['.','.','.','2','7','5','9','.','.'],
        ],
      ],
      expected: [
        ['5','1','9','7','4','8','6','3','2'],
        ['7','8','3','6','5','2','4','1','9'],
        ['4','2','6','1','3','9','8','7','5'],
        ['3','5','7','9','8','6','2','4','1'],
        ['2','6','4','3','1','7','5','9','8'],
        ['1','9','8','5','2','4','3','6','7'],
        ['9','7','5','8','6','3','1','2','4'],
        ['8','3','2','4','9','1','7','5','6'],
        ['6','4','1','2','7','5','9','8','3'],
      ],
    },
  ],
};
