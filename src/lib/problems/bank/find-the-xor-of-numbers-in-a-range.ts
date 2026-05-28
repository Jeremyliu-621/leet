import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-xor-of-numbers-in-a-range',
  title: 'Find the XOR of Numbers in a Range',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given two integers \`l\` and \`r\`, return the **XOR of all numbers** from \`l\` to \`r\` (inclusive).

That is, return \`l XOR (l+1) XOR ... XOR r\`.`,
  constraints: [
    '1 <= l <= r <= 1000',
  ],
  examples: [
    {
      input: 'l = 3, r = 9',
      output: '2',
      explanation: '3 XOR 4 XOR 5 XOR 6 XOR 7 XOR 8 XOR 9 = 2.',
    },
    {
      input: 'l = 1, r = 5',
      output: '1',
      explanation: '1 XOR 2 XOR 3 XOR 4 XOR 5 = 1.',
    },
    {
      input: 'l = 1, r = 1',
      output: '1',
      explanation: 'XOR of a single number is itself.',
    },
  ],
  hints: [
    'A simple loop from l to r accumulating XOR works within the given constraints.',
    'XOR is associative and commutative; x XOR x = 0 and x XOR 0 = x.',
    'For an O(1) solution, note that XOR(1..n) follows a 4-cycle pattern: n, 1, n+1, or 0 depending on n mod 4.',
  ],
  functionName: 'xorQuery',
  params: ['l', 'r'],
  starterCode: {
    javascript: `function xorQuery(l, r) {

}`,
    python: `def xorQuery(l, r):
    pass`,
  },
  visibleTests: [
    { args: [3, 9], expected: 2 },
    { args: [1, 5], expected: 1 },
    { args: [1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [2, 3], expected: 1 },
    { args: [1, 10], expected: 11 },
    { args: [4, 6], expected: 7 },
    { args: [5, 5], expected: 5 },
    { args: [1, 2], expected: 3 },
  ],
};
