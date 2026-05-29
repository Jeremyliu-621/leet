import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-one-bit-operations-to-make-integers-zero',
  title: 'Minimum One Bit Operations to Make Integers Zero',
  difficulty: 'hard',
  tags: ['bit-manipulation', 'math', 'binary-search'],
  description: `Given an integer \`n\`, you must transform it into \`0\` using the following operations any number of times:

- Change the rightmost (\`0th\`) bit in the binary representation of \`n\`.
- Change the \`ith\` bit in the binary representation of \`n\` if the \`(i-1)th\` bit of \`n\` is \`1\` and the \`(i-2)th\` through \`0th\` bits of \`n\` are \`0\`.

Return the **minimum number of operations** needed to transform \`n\` into \`0\`.`,
  constraints: [
    '0 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 0',
      output: '0',
    },
    {
      input: 'n = 3',
      output: '2',
      explanation: '3 (11) → 2 (10) → 3 (11)? No — 3→2→0. Step 1: flip bit 1 (allowed since bit 0 is 1). Step 2: flip bit 0. Result: 0.',
    },
    {
      input: 'n = 6',
      output: '4',
    },
  ],
  hints: [
    'This is equivalent to computing the inverse of the Gray code of n.',
    'Gray code: G(k) = k XOR (k >> 1). The answer is G^{-1}(n).',
    'Compute Gray code inverse iteratively: result = n; while n > 0 { n >>= 1; result ^= n; }',
  ],
  functionName: 'minimumOneBitOperations',
  params: ['n'],
  starterCode: {
    javascript: 'function minimumOneBitOperations(n) {\n  \n}\n',
    typescript: "function minimumOneBitOperations(n: number): number {\n  \n}",

    python: 'def minimumOneBitOperations(n):\n    pass\n',
  },
  visibleTests: [
    { args: [0], expected: 0 },
    { args: [3], expected: 2 },
    { args: [6], expected: 4 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [7], expected: 5 },
    { args: [25], expected: 17 },
    { args: [100], expected: 71 },
  ],
};
