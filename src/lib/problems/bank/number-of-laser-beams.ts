import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-laser-beams',
  title: 'Number of Laser Beams in a Bank',
  difficulty: 'medium',
  tags: ['arrays', 'strings'],
  description: `Anti-theft security devices are activated inside a bank. You are given a **0-indexed** binary string array \`bank\` representing the floor plan of the bank, where \`bank[i]\` represents the \`i\`-th row.

- \`'1'\` means a security device is installed.
- \`'0'\` means no security device is installed.

Laser beams form between any two adjacent rows (with no all-zero row between them). Each device in row \`i\` forms exactly one beam with each device in the **next** non-empty row.

Return *the total number of laser beams in the bank*.`,
  constraints: [
    'm == bank.length',
    'n == bank[i].length',
    '1 <= m, n <= 500',
    'bank[i][j] is either \'0\' or \'1\'',
  ],
  examples: [
    {
      input: 'bank = ["011001","000000","010100","001000"]',
      output: '8',
      explanation: 'Row 0 has 3 devices, row 2 has 2 devices: 3×2=6 beams. Row 2 has 2, row 3 has 1: 2×1=2 beams. Total: 8.',
    },
    {
      input: 'bank = ["000","111","000"]',
      output: '0',
      explanation: 'Row 1 has devices but rows 0 and 2 are empty, so no beams.',
    },
  ],
  hints: [
    'Count the number of \'1\'s in each row, ignoring rows with zero devices.',
    'The beams between consecutive non-empty rows equals (count of row i) × (count of row i+1).',
    'Accumulate the product of each consecutive non-empty pair.',
  ],
  functionName: 'numberOfBeams',
  params: ['bank'],
  starterCode: {
    javascript: `function numberOfBeams(bank) {

}`,
    python: `def numberOfBeams(bank):
    pass`,
  },
  visibleTests: [
    { args: [['011001', '000000', '010100', '001000']], expected: 8 },
    { args: [['000', '111', '000']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['1']], expected: 0 },
    { args: [['1', '1']], expected: 1 },
    { args: [['1', '0', '1']], expected: 1 },
    { args: [['11', '00', '11']], expected: 4 },
    { args: [['01', '10', '11']], expected: 3 },
  ],
};
