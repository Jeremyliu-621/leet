import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-two-chessboard-squares-have-same-color',
  title: 'Check if Two Chessboard Squares Have the Same Color',
  difficulty: 'easy',
  tags: ['math', 'strings'],
  description: `You are given two strings \`coordinate1\` and \`coordinate2\`, representing the coordinates of a square on a standard chessboard. A standard chessboard is an 8x8 grid where columns are labeled \`'a'\` to \`'h'\` and rows are labeled \`'1'\` to \`'8'\`. Squares are colored alternately black and white with \`'a1'\` being black.

Return \`true\` if both squares have the **same** color, and \`false\` otherwise.`,
  constraints: [
    'coordinate1.length == coordinate2.length == 2',
    "'a' <= coordinate1[0], coordinate2[0] <= 'h'",
    "'1' <= coordinate1[1], coordinate2[1] <= '8'",
  ],
  examples: [
    {
      input: 'coordinate1 = "a1", coordinate2 = "c3"',
      output: 'true',
      explanation: 'Both a1 and c3 are black squares (col+row sum is even for both).',
    },
    {
      input: 'coordinate1 = "a1", coordinate2 = "h3"',
      output: 'false',
      explanation: 'a1 is black (sum=2, even), h3 is white (sum=11, odd).',
    },
  ],
  hints: [
    'A square has column index (0-based: a=0, b=1, ...) and row index (1-based). The color depends on the parity of (col + row).',
    'Two squares share a color when (col1+row1) and (col2+row2) have the same parity.',
    'Equivalently, check if (col1+row1+col2+row2) is even.',
  ],
  functionName: 'checkTwoChessboards',
  params: ['coordinate1', 'coordinate2'],
  starterCode: {
    javascript: `function checkTwoChessboards(coordinate1, coordinate2) {
  const parity = c => (c.charCodeAt(0) + Number(c[1])) % 2;
  return parity(coordinate1) === parity(coordinate2);
}`,
    typescript: `function checkTwoChessboards(coordinate1: string, coordinate2: string): boolean {
  const parity = (c: string) => (c.charCodeAt(0) + Number(c[1])) % 2;
  return parity(coordinate1) === parity(coordinate2);
}`,
    python: `def checkTwoChessboards(coordinate1, coordinate2):
    parity = lambda c: (ord(c[0]) + int(c[1])) % 2
    return parity(coordinate1) == parity(coordinate2)`,
  },
  visibleTests: [
    { args: ['a1', 'c3'], expected: true },
    { args: ['a1', 'h3'], expected: false },
  ],
  hiddenTests: [
    { args: ['a1', 'a1'], expected: true },
    { args: ['a1', 'b1'], expected: false },
    { args: ['h8', 'a1'], expected: true },
    { args: ['b2', 'd4'], expected: true },
    { args: ['c1', 'd2'], expected: true },
  ],
};
