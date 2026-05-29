import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotating-the-box',
  title: 'Rotating the Box',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `You are given an \`m x n\` matrix of characters \`box\` representing a side-view of a box. Each cell of the box is one of the following:

- \`'#'\` — a stone
- \`'*'\` — a stationary obstacle
- \`'.'\` — empty space

The box is rotated **90 degrees clockwise**, causing some of the stones to fall due to gravity. Each stone falls until it lands on an obstacle, another stone, or the bottom of the box. Gravity **does not** affect stationary obstacles.

Return an \`n x m\` matrix representing the box after the rotation.`,
  constraints: [
    '`m == box.length`',
    '`n == box[0].length`',
    '`1 <= m, n <= 500`',
    '`box[i][j]` is either `\'#\'`, `\'*\'`, or `\'.\'`',
  ],
  examples: [
    {
      input: 'box = [["#",".","#"]]',
      output: '[["."],["#"],["#"]]',
      explanation: 'Gravity moves the leftmost stone right to position [0][1]. After gravity box = [[".", "#", "#"]]. Rotating 90° clockwise gives [["."], ["#"], ["#"]].',
    },
    {
      input: 'box = [["#",".","*","."],[".","#",".","."],["#","#","*","."]]',
      output: '[["#",".","."],["#",".","#"],["*",".","*"],[".","#","."]]',
      explanation: 'Stones slide right in each row (obstacles block movement), then the box is rotated 90° clockwise.',
    },
    {
      input: 'box = [["#","#","*","."],["#","#","*","."]]',
      output: '[["#","#"],["#","#"],["*","*"],[".","."]]]',
      explanation: 'Obstacles block stones — no stone can slide. Rotation produces a 4-row, 2-column matrix.',
    },
  ],
  hints: [
    'First apply gravity in the original orientation: stones slide RIGHT (towards the last column) in each row.',
    'Use a write pointer starting at n-1. Scan each row from right to left: when you find a stone, swap it to the write pointer and decrement the pointer; when you find an obstacle, reset the pointer to (obstacle_col - 1).',
    'After gravity, rotate 90° clockwise: result[j][m-1-i] = box[i][j] for all (i, j).',
  ],
  functionName: 'rotateTheBox',
  params: ['box'],
  starterCode: {
    javascript: `function rotateTheBox(box) {

}`,
    typescript: `function rotateTheBox(box: string[][]): string[][] {

}`,
    python: `def rotateTheBox(box):
    pass`,
  },
  visibleTests: [
    { args: [[['#', '.', '#']]], expected: [['.'], ['#'], ['#']] },
    {
      args: [[['#', '.', '*', '.'], ['.', '#', '.', '.'], ['#', '#', '*', '.']]],
      expected: [['#', '.', '.'], ['#', '.', '#'], ['*', '.', '*'], ['.', '#', '.']],
    },
    {
      args: [[['#', '#', '*', '.'], ['#', '#', '*', '.']]],
      expected: [['#', '#'], ['#', '#'], ['*', '*'], ['.', '.']],
    },
  ],
  hiddenTests: [
    { args: [[['#']]], expected: [['#']] },
    { args: [[['.']]], expected: [['.']] },
    { args: [[['.', '#', '.']]], expected: [['.'], ['.'], ['#']] },
    { args: [[['*', '#', '.']]], expected: [['*'], ['.'], ['#']] },
    { args: [[['#', '#', '#']]], expected: [['#'], ['#'], ['#']] },
    {
      args: [[['#', '.', '.'], ['#', '#', '.']]],
      expected: [['.', '.'], ['#', '.'], ['#', '#']],
    },
    {
      args: [[['#', '*', '.', '#']]],
      expected: [['#'], ['*'], ['.'], ['#']],
    },
  ],
};
