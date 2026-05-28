import type { Problem } from '../types';

export const problem: Problem = {
  id: 'gray-code',
  title: 'Gray Code',
  difficulty: 'medium',
  tags: ['backtracking', 'math'],
  description: `An **n-bit gray code sequence** is a sequence of \`2^n\` integers where:

- Every integer is in the inclusive range \`[0, 2^n - 1]\`,
- The first integer is \`0\`,
- An integer appears **no more than once**,
- The binary representation of every pair of **adjacent** integers differs by exactly **one bit**,
- The binary representation of the **first** and **last** integers also differs by exactly one bit.

Given an integer \`n\`, return **any** valid n-bit gray code sequence.`,
  constraints: ['1 <= n <= 16'],
  examples: [
    {
      input: 'n = 2',
      output: '[0,1,3,2]',
      explanation:
        'Binary: 00 → 01 → 11 → 10. Each adjacent pair (including last-to-first: 10→00) differs by exactly 1 bit.',
    },
    {
      input: 'n = 1',
      output: '[0,1]',
    },
  ],
  hints: [
    'Start with n=1: [0, 1]. To go from n to n+1, take the sequence for n, then append the same sequence reversed but with the leading bit set (add 2^n to each element).',
    'This "mirror" construction works because the last element of the original sequence and the first of the mirrored sequence differ by exactly 1 bit (only the new leading bit).',
    'Even simpler: for i from 0 to 2^n-1, the gray code for i is `i XOR (i >> 1)`. Build the result array directly with this formula.',
  ],
  functionName: 'grayCode',
  params: ['n'],
  starterCode: {
    javascript: `function grayCode(n) {\n\n}`,
    python: `def grayCode(n):\n    pass`,
  },
  visibleTests: [
    { args: [2], expected: [0, 1, 3, 2] },
    { args: [1], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [3], expected: [0, 1, 3, 2, 6, 7, 5, 4] },
    { args: [4], expected: [0, 1, 3, 2, 6, 7, 5, 4, 12, 13, 15, 14, 10, 11, 9, 8] },
  ],
};
