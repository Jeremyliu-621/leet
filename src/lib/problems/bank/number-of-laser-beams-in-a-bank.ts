import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-laser-beams-in-a-bank',
  title: 'Number of Laser Beams in a Bank',
  difficulty: 'medium',
  tags: ['arrays', 'math', 'strings'],
  description: `Anti-theft security devices are activated inside a bank. You are given a **0-indexed** binary string array \`bank\` representing the floor plan of the bank, which is an \`m x n\` 2D matrix. \`bank[i]\` represents the \`i\`-th row, consisting of \`'0'\`s and \`'1'\`s. \`'1'\` means there is a security device on the cell, and \`'0'\` means there is none.

There is **one** laser beam between any **two** security devices if **both** conditions are met:
- The two devices are located on two **different rows**: \`r1\` and \`r2\`, where \`r1 < r2\`.
- For **each** row \`i\` where \`r1 < i < r2\`, there are **no security devices** in the \`i\`-th row.

Laser beams are independent, i.e., one beam does not interfere with another.

Return the total number of laser beams in the bank.`,
  constraints: [
    'm == bank.length',
    'n == bank[i].length',
    '1 <= m, n <= 500',
    'bank[i][j] is either "0" or "1".',
  ],
  examples: [
    {
      input: 'bank = ["011001","000000","010100","001000"]',
      output: '8',
      explanation: 'Row 0 has 3 devices. Row 2 has 2 devices. Row 3 has 1 device. Rows with 0 devices are skipped. Pairs: 3*2 + 2*1 = 6 + 2 = 8.',
    },
    {
      input: 'bank = ["000","111","000"]',
      output: '0',
      explanation: 'Row 1 has 3 devices but no other row has devices.',
    },
  ],
  hints: [
    'Collect the count of 1s in each non-zero row, skipping rows with no devices.',
    'Laser beams between two consecutive non-empty rows: prev_count * curr_count.',
    'Sum all consecutive products.',
  ],
  functionName: 'numberOfBeams',
  params: ['bank'],
  starterCode: {
    javascript: 'function numberOfBeams(bank) {\n\n}\n',
    typescript: "function numberOfBeams(bank: string[]): number {\n\n}",

    python: 'def numberOfBeams(bank: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [["011001","000000","010100","001000"]], expected: 8 },
    { args: [["000","111","000"]], expected: 0 },
  ],
  hiddenTests: [
    { args: [['1', '1', '1']], expected: 2 },
    { args: [['1']], expected: 0 },
    { args: [['10', '00', '01']], expected: 1 },
    { args: [['11', '11']], expected: 4 },
  ],
};
