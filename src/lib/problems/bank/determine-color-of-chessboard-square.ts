import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-color-of-chessboard-square',
  title: 'Determine Color of a Chessboard Square',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `You are given \`coordinates\`, a string that represents the coordinates of a square on a chessboard. Below is a chessboard for reference.

Return \`true\` if the square is white, and \`false\` if the square is black.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.`,
  constraints: [
    'coordinates.length == 2',
    '\'a\' <= coordinates[0] <= \'h\'',
    '\'1\' <= coordinates[1] <= \'8\'',
  ],
  examples: [
    {
      input: 'coordinates = "a1"',
      output: 'false',
      explanation: '"a1" is a black square (bottom-left corner).',
    },
    {
      input: 'coordinates = "h3"',
      output: 'true',
      explanation: '"h3" is a white square.',
    },
    {
      input: 'coordinates = "c7"',
      output: 'false',
      explanation: '"c7" is a black square.',
    },
  ],
  hints: [
    'Convert the column letter to a number (a=1, b=2, ..., h=8).',
    'A square is white if (col + row) is even, and black if (col + row) is odd.',
    'Wait — actually check the convention: a1 is black means (1+1)=2 is even → black.',
  ],
  functionName: 'squareIsWhite',
  params: ['coordinates'],
  starterCode: {
    javascript: `function squareIsWhite(coordinates) {

}`,
    python: `def squareIsWhite(coordinates):
    pass`,
  },
  visibleTests: [
    { args: ['a1'], expected: false },
    { args: ['h3'], expected: true },
    { args: ['c7'], expected: false },
  ],
  hiddenTests: [
    { args: ['a2'], expected: true },
    { args: ['h8'], expected: false },
    { args: ['d4'], expected: false },
    { args: ['e5'], expected: false },
  ],
};
