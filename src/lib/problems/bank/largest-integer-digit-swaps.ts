import type { Problem } from '../types';

export const problem: Problem = {
  id: 'largest-integer-digit-swaps',
  title: 'Largest Number After Digit Swaps by Parity',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a positive integer \`num\`. You may swap any two digits of \`num\` that have the same **parity** (both odd-valued or both even-valued digits).

Return the **largest** possible value of \`num\` after **any** number of swaps.`,
  constraints: [
    '1 <= num <= 10^9',
  ],
  examples: [
    { input: 'num = 1234', output: '3412', explanation: 'Swap digit 1 (odd) with digit 3 (odd), and 2 (even) with 4 (even) → 3412.' },
    { input: 'num = 65875', output: '87655', explanation: 'Swap odd digits to get the largest arrangement.' },
  ],
  hints: [
    'Collect odd-valued and even-valued digits separately, sort each in descending order, then rebuild the number by placing the largest available digit of the correct parity at each position.',
  ],
  functionName: 'largestInteger',
  params: ['num'],
  starterCode: {
    javascript: 'function largestInteger(num) {\n  \n}\n',
    python: 'def largestInteger(num):\n    pass\n',
  },
  visibleTests: [
    { args: [1234], expected: 3412 },
    { args: [65875], expected: 87655 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [22], expected: 22 },
    { args: [4321], expected: 4321 },
    { args: [12354], expected: 54312 },
    { args: [9876543210], expected: 9876543210 },
    { args: [135], expected: 531 },
  ],
};
