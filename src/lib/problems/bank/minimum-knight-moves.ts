import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-knight-moves',
  title: 'Minimum Knight Moves',
  difficulty: 'medium',
  tags: ['graph'],
  description: `In an **infinite** chessboard with coordinates from \`-Infinity\` to \`+Infinity\`, you have a knight at square \`[0, 0]\`.

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square \`[x, y]\`. It is guaranteed the answer exists.`,
  constraints: [
    '-300 <= x, y <= 300',
    '0 <= |x| + |y| <= 300',
  ],
  examples: [
    {
      input: 'x = 2, y = 1',
      output: '1',
      explanation: 'The knight can move from [0,0] to [2,1] in 1 move.',
    },
    {
      input: 'x = 5, y = 5',
      output: '4',
      explanation: 'One path: [0,0] → [2,1] → [4,2] → [3,4] → [5,5].',
    },
  ],
  hints: [
    'BFS from (0,0) to (|x|,|y|) — symmetry lets you fold to the first quadrant.',
    'Allow a small buffer beyond the target (e.g., go to -1,-1 region) to handle edge positions like (1,1).',
    'Mark visited cells to avoid revisiting.',
  ],
  functionName: 'minKnightMoves',
  params: ['x', 'y'],
  starterCode: {
    javascript: `function minKnightMoves(x, y) {

}`,
    python: `def minKnightMoves(x, y):
    pass`,
  },
  visibleTests: [
    { args: [2, 1], expected: 1 },
    { args: [5, 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [3, 3], expected: 2 },
    { args: [1, 0], expected: 3 },
    { args: [1, 1], expected: 2 },
  ],
};
