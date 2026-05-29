import type { Problem } from '../types';

export const problem: Problem = {
  id: 'hamming-distance',
  title: 'Hamming Distance',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `The **Hamming distance** between two integers is the number of positions at which the corresponding bits are different.

Given two integers \`x\` and \`y\`, return the **Hamming distance** between them.`,
  constraints: ['0 <= x, y <= 2^31 - 1'],
  examples: [
    {
      input: 'x = 1, y = 4',
      output: '2',
      explanation: '1 (0001) and 4 (0100) differ in 2 positions.',
    },
    {
      input: 'x = 3, y = 1',
      output: '1',
      explanation: '3 (011) and 1 (001) differ in 1 position.',
    },
  ],
  hints: [
    'XOR the two numbers, then count the set bits.',
    "XOR x and y to get the differing bits. Then count the 1-bits with a loop: repeatedly check the lowest bit (n&1) and right-shift (n>>=1) until n is 0.",
    'return (x^y).toString(2).split("").filter(b=>b==="1").length;',
  ],
  functionName: 'hammingDistance',
  params: ['x', 'y'],
  starterCode: {
    javascript: 'function hammingDistance(x, y) {\n  \n}\n',
    typescript: "function hammingDistance(x: number, y: number): number {\n  \n}",

    python: 'def hammingDistance(x, y):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 4], expected: 2 },
    { args: [3, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [0, 15], expected: 4 },
    { args: [1, 1], expected: 0 },
    { args: [7, 1], expected: 2 },
    { args: [255, 0], expected: 8 },
  ],
};
