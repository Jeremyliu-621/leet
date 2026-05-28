import type { Problem } from '../types';

export const problem: Problem = {
  id: 'strange-printer-ii',
  title: 'Strange Printer II',
  difficulty: 'hard',
  tags: ['graph'],
  description: `There is a strange printer with the following two special requirements:

- On each turn, the printer will print a solid rectangular pattern of a single color on the grid. This will cover up the existing colors in the rectangle.
- Once the printer has used a color for the above operation, the same color cannot be used again.

You are given a \`m × n\` matrix \`targetGrid\`, where \`targetGrid[row][col]\` is the color in the position \`(row, col)\` of the grid.

Return \`true\` if it is possible to print the matrix \`targetGrid\`, otherwise return \`false\`.`,
  constraints: [
    '`m == targetGrid.length`',
    '`n == targetGrid[i].length`',
    '`1 <= m, n <= 60`',
    '`1 <= targetGrid[row][col] <= 60`',
  ],
  examples: [
    {
      input: 'targetGrid = [[1,1,1,1],[1,2,2,1],[1,2,2,1],[1,1,1,1]]',
      output: 'true',
      explanation: 'Print color 2 in rows 1-2, cols 1-2. Then print color 1 over the full grid (color 1 is the outermost layer, printed last... or first, then overlaid by 2). Actually print 1 first then 2 on top.',
    },
    {
      input: 'targetGrid = [[1,1,1,1],[1,1,3,3],[1,1,3,3],[2,2,1,1]]',
      output: 'true',
    },
    {
      input: 'targetGrid = [[1,2],[2,1]]',
      output: 'false',
      explanation: 'Color 1 and color 2 each need to be painted over the other, creating a cycle.',
    },
  ],
  hints: [
    'For each color, find its bounding box (min/max row and col where it appears).',
    'If any cell inside the bounding box has a different color, that color must be printed after (on top of) the current color. Add a dependency edge.',
    'Build a directed graph of these dependencies. If there is a cycle, return false (topological sort fails).',
  ],
  functionName: 'isPrintable',
  params: ['targetGrid'],
  starterCode: {
    javascript: `function isPrintable(targetGrid) {

}`,
    typescript: "function isPrintable(targetGrid: number[][]): boolean {\n\n}",

    python: `def isPrintable(targetGrid):
    pass`,
  },
  visibleTests: [
    { args: [[[1, 1, 1, 1], [1, 2, 2, 1], [1, 2, 2, 1], [1, 1, 1, 1]]], expected: true },
    { args: [[[1, 1, 1, 1], [1, 1, 3, 3], [1, 1, 3, 3], [2, 2, 1, 1]]], expected: true },
    { args: [[[1, 2], [2, 1]]], expected: false },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: true },
    { args: [[[1, 2], [1, 2]]], expected: true },
    { args: [[[1, 1], [2, 2]]], expected: true },
  ],
};
