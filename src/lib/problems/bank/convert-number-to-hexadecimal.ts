import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-number-to-hexadecimal',
  title: 'Convert a Number to Hexadecimal',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `Given a 32-bit signed integer \`num\`, return a string representing its value in **hexadecimal**. For negative integers, use **two's complement** representation.

All lowercase letters should be used in the hexadecimal string.
Leading zeros are not allowed except for the number 0 itself.`,
  constraints: [
    '-2^31 <= num <= 2^31 - 1',
  ],
  examples: [
    { input: 'num = 26', output: '"1a"', explanation: '26 = 1×16 + 10, and 10 maps to "a".' },
    { input: 'num = -1', output: '"ffffffff"', explanation: '-1 in 32-bit two\'s complement is all 1-bits = 0xFFFFFFFF.' },
  ],
  hints: [
    'Use >>> 0 (unsigned right-shift by 0) to reinterpret a signed integer as unsigned 32-bit.',
    'Extract the lowest 4 bits with & 0xF and map to "0123456789abcdef".',
    'Right-shift by 4 each iteration until the number is 0.',
  ],
  functionName: 'toHex',
  params: ['num'],
  starterCode: {
    javascript: `function toHex(num) {
  if (num === 0) return '0';
  const hex = '0123456789abcdef';
  let n = num >>> 0, result = '';
  while (n > 0) { result = hex[n & 15] + result; n >>>= 4; }
  return result;
}`,
    typescript: `function toHex(num: number): string {
  if (num === 0) return '0';
  const hex = '0123456789abcdef';
  let n = num >>> 0, result = '';
  while (n > 0) { result = hex[n & 15]! + result; n >>>= 4; }
  return result;
}`,
    python: `def toHex(num: int) -> str:
    if num == 0: return '0'
    n = num & 0xffffffff
    return hex(n)[2:]`,
  },
  visibleTests: [
    { args: [26], expected: '1a' },
    { args: [-1], expected: 'ffffffff' },
    { args: [0], expected: '0' },
  ],
  hiddenTests: [
    { args: [1], expected: '1' },
    { args: [15], expected: 'f' },
    { args: [16], expected: '10' },
    { args: [255], expected: 'ff' },
    { args: [256], expected: '100' },
    { args: [-2], expected: 'fffffffe' },
    { args: [2147483647], expected: '7fffffff' },
    { args: [-2147483648], expected: '80000000' },
  ],
};
