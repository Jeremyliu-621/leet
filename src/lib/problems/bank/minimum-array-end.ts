import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-array-end',
  title: 'Minimum Array End',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `You are given two integers \`n\` and \`x\`. You have to construct an array of **positive** integers \`nums\` of size \`n\` where for every \`0 <= i < n - 1\`, \`nums[i + 1]\` is **greater than** \`nums[i]\`, and the result of the bitwise \`AND\` operation between all elements of \`nums\` is \`x\`.

Return the **minimum** possible value of \`nums[n - 1]\`.`,
  constraints: [
    '1 <= n <= 10^8',
    '1 <= x <= 10^8',
  ],
  examples: [
    {
      input: 'n = 3, x = 4',
      output: '6',
      explanation: 'Array [4, 5, 6]: AND = 4 & 5 & 6 = 4. Last element is 6.',
    },
    {
      input: 'n = 2, x = 7',
      output: '15',
      explanation: 'Array [7, 15]: AND = 7 & 15 = 7. Last element is 15.',
    },
  ],
  hints: [
    'All elements must have x\'s bits set, so the "free" bit positions are those where x has a 0.',
    'Think of n-1 (in binary) mapped into the free bit positions of x.',
    'Enumerate the zero-bit positions of x; place bits of (n-1) into those positions in order.',
  ],
  functionName: 'minEnd',
  params: ['n', 'x'],
  starterCode: {
    javascript: `function minEnd(n, x) {

}`,
    typescript: "function minEnd(n: number, x: number): number {\n\n}",

    python: `def minEnd(n, x):
    pass`,
  },
  visibleTests: [
    { args: [3, 4], expected: 6 },
    { args: [2, 7], expected: 15 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [1, 5], expected: 5 },
    { args: [2, 1], expected: 3 },
    { args: [4, 2], expected: 7 },
    { args: [3, 7], expected: 23 },
    { args: [5, 1], expected: 9 },
  ],
};
