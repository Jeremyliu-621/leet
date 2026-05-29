import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-the-number-is-fascinating',
  title: 'Check if the Number is Fascinating',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `You are given an integer \`n\` that is **exactly 3 digits** long.

We call the number \`n\` **fascinating** if, after the following modification, the resulting number contains the digits \`1\` to \`9\` **exactly once** and does not contain any \`0\`s:

- **Concatenate** \`n\` with the numbers \`2 * n\` and \`3 * n\`.

Return \`true\` if \`n\` is fascinating, or \`false\` otherwise.`,
  constraints: [
    '100 <= n <= 999',
  ],
  examples: [
    {
      input: 'n = 192',
      output: 'true',
      explanation: 'Concatenating 192, 384, 576 gives "192384576". Each digit 1-9 appears exactly once.',
    },
    {
      input: 'n = 100',
      output: 'false',
      explanation: 'Concatenating 100, 200, 300 gives "100200300". Contains zeros and repeated digits.',
    },
  ],
  hints: [
    'Concatenate the string representations of n, 2*n, and 3*n.',
    'Check that the concatenated string has exactly 9 characters.',
    'Check that each digit from "1" through "9" appears exactly once (and "0" does not appear).',
  ],
  functionName: 'isFascinating',
  params: ['n'],
  starterCode: {
    javascript: 'function isFascinating(n) {\n  \n}',
    typescript: 'function isFascinating(n: number): boolean {\n  \n}',
    python: 'def isFascinating(n):\n    ',
  },
  visibleTests: [
    { args: [192], expected: true },
    { args: [100], expected: false },
    { args: [273], expected: true },
  ],
  hiddenTests: [
    { args: [192], expected: true },
    { args: [100], expected: false },
    { args: [273], expected: true },
    { args: [999], expected: false },
    { args: [219], expected: true },
    { args: [327], expected: true },
    { args: [481], expected: false },
    { args: [123], expected: false },
  ],
};
