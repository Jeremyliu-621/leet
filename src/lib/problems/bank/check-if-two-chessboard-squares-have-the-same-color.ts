import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-two-chessboard-squares-have-the-same-color',
  title: 'Check if Two Chessboard Squares Have the Same Color',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `You are given two strings \`coordinate1\` and \`coordinate2\`, representing the coordinates of a square on a standard 8×8 chessboard.

A chessboard square is labeled with a letter (a–h, for column) and a digit (1–8, for row). The color of a square alternates: \`a1\` is dark, \`b1\` is light, etc.

Return \`true\` if both squares have the **same color**, and \`false\` otherwise.`,
  constraints: [
    'coordinate1.length == coordinate2.length == 2',
    "'a' <= coordinate1[0], coordinate2[0] <= 'h'",
    "'1' <= coordinate1[1], coordinate2[1] <= '8'",
  ],
  examples: [
    {
      input: 'coordinate1 = "a1", coordinate2 = "c3"',
      output: 'true',
      explanation: 'a1 is dark (column 1 + row 1 = even), c3 is dark (column 3 + row 3 = even). Same color.',
    },
    {
      input: 'coordinate1 = "a1", coordinate2 = "h1"',
      output: 'false',
      explanation: 'a1 is dark (even sum), h1 is light (column 8 + row 1 = odd). Different colors.',
    },
    {
      input: 'coordinate1 = "a1", coordinate2 = "h8"',
      output: 'true',
      explanation: 'a1: sum = 97+1=98 (even). h8: sum = 104+8=112 (even). Same color.',
    },
  ],
  hints: [
    "Level 1: A square's color is determined by (column_index + row_index) % 2. Two squares have the same color if and only if this parity matches.",
    "Level 2: Use charCodeAt(0) for the column letter and parseInt for the row digit. Sum them and compare parities.",
    "Level 3: val(c) = c.charCodeAt(0) + parseInt(c[1]). Return val(c1) % 2 === val(c2) % 2.",
  ],
  functionName: 'checkTwoChessboards',
  params: ['coordinate1', 'coordinate2'],
  starterCode: {
    javascript: `function checkTwoChessboards(coordinate1, coordinate2) {
  const val = (c) => c.charCodeAt(0) + parseInt(c[1]);
  return val(coordinate1) % 2 === val(coordinate2) % 2;
}`,
    typescript: `function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
  const val = (c: string) => c.charCodeAt(0) + parseInt(c[1]);
  return val(coordinate1) % 2 === val(coordinate2) % 2;
}`,
    python: `def checkTwoChessboards(coordinate1, coordinate2):
    def val(c):
        return ord(c[0]) + int(c[1])
    return val(coordinate1) % 2 == val(coordinate2) % 2`,
  },
  visibleTests: [
    { args: ['a1', 'c3'], expected: true },
    { args: ['a1', 'h1'], expected: false },
    { args: ['a1', 'h8'], expected: true },
  ],
  hiddenTests: [
    { args: ['a1', 'a2'], expected: false },
    { args: ['b2', 'd4'], expected: true },
    { args: ['a1', 'b2'], expected: true },
    { args: ['h8', 'g7'], expected: true },
    { args: ['a8', 'h1'], expected: true },
    { args: ['d4', 'e5'], expected: true },
    { args: ['a1', 'a1'], expected: true },
    { args: ['c5', 'd6'], expected: true },
  ],
};
