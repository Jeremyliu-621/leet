import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-color-of-chessboard-square',
  title: 'Determine Color of a Chessboard Square',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `You are given \`coordinates\`, a string that represents the coordinates of a square on an 8x8 chessboard. Below is a chess diagram:

- Columns are labeled 'a' through 'h' (left to right).
- Rows are labeled '1' through '8' (bottom to top).

Return \`true\` if the square is white, and \`false\` if the square is black.

The square named "a1" is black.`,
  constraints: [
    'coordinates.length == 2',
    '\'a\' <= coordinates[0] <= \'h\'',
    '\'1\' <= coordinates[1] <= \'8\'',
  ],
  examples: [
    {
      input: 'coordinates = "a1"',
      output: 'false',
      explanation: '"a1" is a black square on a standard chessboard.',
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
    'A square is white when (column_index + row) is odd.',
    'Use the character code of the column letter plus the digit to check parity.',
    `\`\`\`js
function squareIsWhite(coordinates) {
  // col char: a=0,b=1,...h=7; row char: 1-8
  // white if (col + row) is odd
  return (coordinates.charCodeAt(0) + Number(coordinates[1])) % 2 === 1;
}\`\`\``,
  ],
  functionName: 'squareIsWhite',
  params: ['coordinates'],
  starterCode: {
    javascript: `function squareIsWhite(coordinates) {

}`,
    typescript: "function squareIsWhite(coordinates: string): boolean {\n\n}",

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
    { args: ['b1'], expected: true },
    { args: ['h8'], expected: false },
    { args: ['d4'], expected: false },
  ],
};
