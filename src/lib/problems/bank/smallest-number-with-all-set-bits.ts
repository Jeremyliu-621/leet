import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-number-with-all-set-bits',
  title: 'Smallest Number With All Set Bits',
  difficulty: 'easy',
  tags: ['bit-manipulation', 'math'],
  description: `You are given a positive integer \`n\`.

Return the **smallest** number that is **greater than or equal to** \`n\` and has **all set bits** — that is, every bit in the binary representation of the returned number is \`1\`.

A number with all set bits is of the form \`2^k - 1\` (e.g., 1, 3, 7, 15, 31, ...).`,
  constraints: [
    '`1 <= n <= 1000`',
  ],
  examples: [
    {
      input: 'n = 5',
      output: '7',
      explanation: '5 = 101₂. The smallest number ≥ 5 with all bits set is 7 = 111₂.',
    },
    {
      input: 'n = 7',
      output: '7',
      explanation: '7 = 111₂ already has all bits set.',
    },
    {
      input: 'n = 8',
      output: '15',
      explanation: '8 = 1000₂. The smallest number ≥ 8 with all bits set is 15 = 1111₂.',
    },
  ],
  hints: [
    'All-set-bit numbers have the form 2^k - 1: 1, 3, 7, 15, 31, ...',
    'Start with mask = 1, then shift-left and OR with 1 until mask ≥ n.',
    'Equivalently, find the bit length of n and return 2^(bitLength) - 1.',
  ],
  functionName: 'smallestNumber',
  params: ['n'],
  starterCode: {
    javascript: `function smallestNumber(n) {

}`,
    typescript: `function smallestNumber(n: number): number {

}`,
    python: `def smallestNumber(n):
    pass`,
  },
  visibleTests: [
    { args: [5], expected: 7 },
    { args: [7], expected: 7 },
    { args: [8], expected: 15 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 3 },
    { args: [3], expected: 3 },
    { args: [4], expected: 7 },
    { args: [10], expected: 15 },
    { args: [16], expected: 31 },
    { args: [1000], expected: 1023 },
    { args: [512], expected: 1023 },
  ],
};
