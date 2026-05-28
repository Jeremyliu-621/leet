import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ugly-number',
  title: 'Ugly Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `An **ugly number** is a positive integer whose prime factors are limited to **2**, **3**, and **5**.

Given an integer \`n\`, return \`true\` if \`n\` is an ugly number.

**Examples:**
- \`n = 6\` → \`true\` (6 = 2 × 3)
- \`n = 14\` → \`false\` (14 = 2 × 7, 7 is not allowed)
- \`n = 1\` → \`true\` (1 has no prime factors)`,
  constraints: [
    '-2^31 <= n <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'n = 6',
      output: 'true',
      explanation: '6 = 2 × 3',
    },
    {
      input: 'n = 1',
      output: 'true',
      explanation: '1 has no prime factors.',
    },
    {
      input: 'n = 14',
      output: 'false',
      explanation: '14 = 2 × 7, and 7 is not a factor of 2, 3, or 5.',
    },
  ],
  hints: [
    'If n ≤ 0, it cannot be ugly (ugly numbers are positive).',
    'Repeatedly divide n by 2, 3, and 5 as long as it is divisible. If the result is 1, n is ugly.',
    'Write a helper: `while (n % factor === 0) n /= factor`. Apply this for factors 2, 3, 5. Then check `n === 1`.',
  ],
  functionName: 'isUgly',
  params: ['n'],
  starterCode: {
    javascript: `function isUgly(n) {
  // n: integer
  // Return true if n's prime factors are only 2, 3, and 5
}`,
    python: `def isUgly(n):
    # n: int
    # Return True if n's prime factors are only 2, 3, and 5
    pass`,
  },
  visibleTests: [
    { args: [6], expected: true },
    { args: [1], expected: true },
    { args: [14], expected: false },
  ],
  hiddenTests: [
    { args: [0], expected: false },
    { args: [-6], expected: false },
    { args: [8], expected: true },
    { args: [12], expected: true },
    { args: [30], expected: true },
    { args: [7], expected: false },
    { args: [2147483647], expected: false },
    { args: [5], expected: true },
    { args: [9], expected: true },
    { args: [25], expected: true },
  ],
};
