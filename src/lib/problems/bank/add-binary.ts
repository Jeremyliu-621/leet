import type { Problem } from '../types';

export const problem: Problem = {
  id: 'add-binary',
  title: 'Add Binary',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `Given two binary strings \`a\` and \`b\`, return their sum as a binary string.`,
  constraints: [
    '`1 <= a.length, b.length <= 10^4`',
    '`a` and `b` consist only of `\'0\'` or `\'1\'` characters.',
    'Each string does not contain leading zeros except for the zero itself.',
  ],
  examples: [
    {
      input: 'a = "11", b = "1"',
      output: '"100"',
    },
    {
      input: 'a = "1010", b = "1011"',
      output: '"10101"',
    },
  ],
  hints: [
    'Work from right to left, tracking a carry. At each position sum the two bits plus carry; the result bit is `sum % 2` and the new carry is `Math.floor(sum / 2)`.',
    'Use two pointers `i = a.length - 1` and `j = b.length - 1`. Build the result string and reverse it at the end.',
  ],
  functionName: 'addBinary',
  params: ['a', 'b'],
  starterCode: {
    javascript: `function addBinary(a, b) {

}`,
    python: `def addBinary(a, b):
    pass`,
  },
  visibleTests: [
    { args: ['11', '1'], expected: '100' },
    { args: ['1010', '1011'], expected: '10101' },
  ],
  hiddenTests: [
    { args: ['0', '0'], expected: '0' },
    { args: ['1', '1'], expected: '10' },
    { args: ['111', '111'], expected: '1110' },
    { args: ['1111', '1111'], expected: '11110' },
    { args: ['100', '110010'], expected: '110110' },
    { args: ['0', '1'], expected: '1' },
    { args: ['1111111', '1'], expected: '10000000' },
  ],
};
