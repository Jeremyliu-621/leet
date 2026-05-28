import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sliding-puzzle',
  title: 'Sliding Puzzle',
  difficulty: 'hard',
  tags: ['graph'],
  description: `On a 2 x 3 board, there are five tiles labeled \`1\` through \`5\`, and an empty square represented by \`0\`. A **move** consists of choosing \`0\` and a 4-directionally adjacent number and swapping it.

The state of the board is solved if and only if the board is \`[[1,2,3],[4,5,0]]\`.

Given the puzzle board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return \`-1\`.`,
  constraints: [
    'board.length == 2',
    'board[i].length == 3',
    '0 <= board[i][j] <= 5',
    'Each value board[i][j] is unique.',
  ],
  examples: [
    {
      input: 'board = [[1,2,3],[4,0,5]]',
      output: '1',
      explanation: 'Swap the 0 and the 5 in one move.',
    },
    {
      input: 'board = [[1,2,3],[5,4,0]]',
      output: '-1',
    },
    {
      input: 'board = [[4,1,2],[5,0,3]]',
      output: '5',
    },
  ],
  hints: [
    'Encode the board as a string (e.g. "123405"). BFS from the initial state to the goal state "123450".',
    'Pre-compute the neighbors of each position in the flat 2x3 board: position 0↔[1,3], position 1↔[0,2,4], position 2↔[1,5], position 3↔[0,4], position 4↔[1,3,5], position 5↔[2,4].',
    'Use a visited set to avoid revisiting states. Each swap generates a new state string.',
  ],
  functionName: 'slidingPuzzle',
  params: ['board'],
  starterCode: {
    javascript: 'function slidingPuzzle(board) {\n\n}\n',
    typescript: "function slidingPuzzle(board: number[][]): number {\n\n}",

    python: 'def slidingPuzzle(board):\n    pass\n',
  },
  visibleTests: [
    { args: [[[1,2,3],[4,0,5]]], expected: 1 },
    { args: [[[1,2,3],[5,4,0]]], expected: -1 },
    { args: [[[4,1,2],[5,0,3]]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[[1,2,3],[4,5,0]]], expected: 0 },
    { args: [[[1,2,3],[0,4,5]]], expected: 2 },
    { args: [[[0,1,2],[4,5,3]]], expected: 3 },
    { args: [[[1,2,0],[4,5,3]]], expected: 1 },
  ],
};
