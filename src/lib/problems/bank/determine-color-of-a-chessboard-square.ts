import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-color-of-a-chessboard-square',
  title: 'Determine Color of a Chessboard Square',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given \`coordinates\`, a string that represents the coordinates of a square on a chessboard. Below is a chessboard for your reference.

Return \`true\` if the square is **white**, and \`false\` if the square is **black**.

The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first and the number second.

*(Standard chess coloring: \`a1\` is a dark/black square.)*`,
  constraints: [
    'coordinates.length == 2',
    "'a' <= coordinates[0] <= 'h'",
    "'1' <= coordinates[1] <= '8'",
  ],
  examples: [
    {
      input: 'coordinates = "a1"',
      output: 'false',
      explanation: 'a1 is a black square (column a=1, row 1; 1+1=2, even → black).',
    },
    {
      input: 'coordinates = "h3"',
      output: 'true',
      explanation: 'h3 is a white square (column h=8, row 3; 8+3=11, odd → white).',
    },
  ],
  hints: [
    'Convert the letter column to a number (a=1, b=2, ..., h=8) and get the numeric row.',
    'A square is white if (column_index + row) is odd, and black if that sum is even.',
    'You can use charCodeAt to get the column index: col = coordinates.charCodeAt(0) - "a".charCodeAt(0) + 1.',
  ],
  functionName: 'squareIsWhite',
  params: ['coordinates'],
  starterCode: {
    javascript: `function squareIsWhite(coordinates) {
  // your code here
}`,
    typescript: `function squareIsWhite(coordinates: string): boolean {
  // your code here
}`,
    python: `def squareIsWhite(coordinates):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: ['a1'], expected: false },
    { args: ['h3'], expected: true },
    { args: ['c5'], expected: false },
    { args: ['d1'], expected: true },
    { args: ['h8'], expected: false },
  ],
  hiddenTests: [
    { args: ['a2'], expected: true },
    { args: ['b1'], expected: true },
    { args: ['g7'], expected: false },
    { args: ['e5'], expected: false },
    { args: ['f6'], expected: false },
  ],
};
