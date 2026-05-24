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
    import copy
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

A sudoku solution must satisfy **all of the following rules**:

1. Each of the digits 1–9 must occur exactly once in each row.
2. Each of the digits 1–9 must occur exactly once in each column.
3. Each of the digits 1–9 must occur exactly once in each of the nine 3×3 sub-boxes.

Empty cells are indicated by the character \`'.'\`. It is guaranteed that the input puzzle has exactly one solution.

**Modify the board in place.** Your function receives the board and should fill it. It does not need to return anything.`,
  constraints: [
    'board.length == 9',
    'board[i].length == 9',
    "board[i][j] is a digit 1–9 or '.'",
    'It is guaranteed that the input board has only one solution',
  ],
  examples: [
    {
      input:
        'board = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]',
      output:
        '[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]',
      explanation: 'The filled board satisfies all Sudoku rules.',
    },
  ],
  hints: [
    'Use backtracking: iterate through all empty cells and try placing each digit 1–9. Before placing, check row, column, and 3×3 box constraints.',
    'For fast constraint checking, maintain three sets: one per row, one per column, one per 3×3 box (indexed by `Math.floor(row/3)*3 + Math.floor(col/3)`). Pre-populate them from the given clues.',
    'When backtracking, if no digit can be placed in an empty cell, undo the last placement and try the next option. The puzzle is guaranteed to have one solution, so the search always terminates.',
  ],
  functionName: 'solveSudokuRunner',
  params: ['board'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// solveSudokuRunner is pre-defined and calls your function below.\nfunction solveSudoku(board) {\n  // modify board in place\n}\n',
    python: '# solveSudokuRunner is pre-defined and calls your function below.\ndef solveSudoku(board):\n    # modify board in place\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        [
          ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
          ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
          ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
          ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
          ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
          ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
          ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
          ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
          ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
        ],
      ],
      expected: [
        ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
        ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
        ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
        ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
        ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
        ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
        ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
        ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
        ['3', '4', '5', '2', '8', '6', '1', '7', '9'],
      ],
    },
  ],
  hiddenTests: [
    {
      args: [
        [
          ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
          ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
          ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
          ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
          ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
          ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
          ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
          ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
          ['.', '.', '.', '2', '7', '5', '9', '.', '.'],
        ],
      ],
      expected: [
        ['5', '1', '9', '7', '4', '8', '6', '3', '2'],
        ['7', '8', '3', '6', '5', '2', '4', '1', '9'],
        ['4', '2', '6', '1', '3', '9', '8', '7', '5'],
        ['3', '5', '7', '9', '8', '6', '2', '4', '1'],
        ['2', '6', '4', '3', '1', '7', '5', '9', '8'],
        ['1', '9', '8', '5', '2', '4', '3', '6', '7'],
        ['9', '7', '5', '8', '6', '3', '1', '2', '4'],
        ['8', '3', '2', '4', '9', '1', '7', '5', '6'],
        ['6', '4', '1', '2', '7', '5', '9', '8', '3'],
      ],
    },
  ],
};
