import type { Problem } from '../types';

export const problem: Problem = {
  id: 'to-hex',
  title: 'Convert a Number to Hexadecimal',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given a 32-bit integer \`num\`, return a string representing its hexadecimal representation. For negative integers, **two's complement** method is used.

All the letters in the answer string should be lowercase characters, and there should be no leading zeros in the answer except for the zero itself.`,
  constraints: [
    '-2^31 <= num <= 2^31 - 1',
  ],
  examples: [
    { input: 'num = 26', output: '"1a"' },
    { input: 'num = -1', output: '"ffffffff"', explanation: '-1 in two\'s complement is 0xffffffff.' },
  ],
  hints: [
    'Use `num >>> 0` in JavaScript to treat the number as unsigned 32-bit, then convert to hex with `.toString(16)`.',
    'Alternatively, build the hex string manually by repeatedly extracting `num & 0xf` and shifting right by 4.',
    'Stop when `num === 0` (use unsigned right shift `>>>` to avoid infinite loop for negatives).',
  ],
  functionName: 'toHex',
  params: ['num'],
  starterCode: {
    javascript: 'function toHex(num) {\n  \n}\n',
    typescript: "function toHex(num: number): string {\n  \n}",

    python: 'def toHex(num):\n    pass\n',
  },
  visibleTests: [
    { args: [26], expected: '1a' },
    { args: [-1], expected: 'ffffffff' },
    { args: [0], expected: '0' },
  ],
  hiddenTests: [
    { args: [1], expected: '1' },
    { args: [16], expected: '10' },
    { args: [255], expected: 'ff' },
    { args: [-2], expected: 'fffffffe' },
    { args: [2147483647], expected: '7fffffff' },
  ],
};
