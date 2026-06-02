import type { Problem } from '../types';

export const problem: Problem = {
  id: 'hamming-weight',
  title: 'Number of 1 Bits',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `Given a positive integer \`n\`, write a function that returns the number of **set bits** (bits equal to 1) in its binary representation. This is also known as the **Hamming weight**.`,
  constraints: [
    '`1 <= n <= 2³¹ - 1`',
  ],
  examples: [
    {
      input: 'n = 11',
      output: '3',
      explanation: '11 in binary is `1011`, which has 3 set bits.',
    },
    {
      input: 'n = 128',
      output: '1',
      explanation: '128 in binary is `10000000`, which has 1 set bit.',
    },
    {
      input: 'n = 2147483645',
      output: '30',
      explanation: '2147483645 in binary has 30 set bits.',
    },
  ],
  hints: [
    'The bit manipulation trick `n & (n - 1)` clears the lowest set bit of `n`. Count how many times you can do this before `n` becomes 0.',
    'Alternatively, repeatedly check the lowest bit with `n & 1` and shift right: `n >>>= 1` (unsigned right shift in JavaScript).',
    'In Python, `bin(n).count("1")` works, but a loop approach is better for understanding.',
  ],
  functionName: 'hammingWeight',
  params: ['n'],
  starterCode: {
    javascript: `function hammingWeight(n) {
  return n.toString(2).replace(/0/g, '').length;
}`,
    typescript: `function hammingWeight(n: number): number {
  return n.toString(2).replace(/0/g, '').length;
}`,
    python: `def hammingWeight(n):
    return bin(n).count('1')`,
  },
  visibleTests: [
    { args: [11], expected: 3 },
    { args: [128], expected: 1 },
    { args: [2147483645], expected: 30 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2147483647], expected: 31 },
    { args: [4294967293], expected: 31 },
  ],
};
