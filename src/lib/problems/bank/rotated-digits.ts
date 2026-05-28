import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rotated-digits',
  title: 'Rotated Digits',
  difficulty: 'easy',
  tags: ['math'],
  description: `An integer \`x\` is a **good** integer if after rotating each digit individually by 180 degrees, we get a **valid** number that is different from \`x\`. Each digit must be rotated — we cannot choose to leave it alone.

A number is valid after rotation if each transformed digit is also a digit. The digits that can be rotated and what they become:
- \`0 → 0\`, \`1 → 1\`, \`8 → 8\` (become the same digit — allowed but don't make it "different")
- \`2 → 5\`, \`5 → 2\`, \`6 → 9\`, \`9 → 6\` (become a different digit — at least one required)
- \`3\`, \`4\`, \`7\` are **invalid** — any number containing these digits is not good.

Given an integer \`n\`, return the number of **good** integers in the range \`[1, n]\`.`,
  constraints: ['`1 <= n <= 10000`'],
  examples: [
    {
      input: 'n = 10',
      output: '4',
      explanation: 'Good numbers in [1,10]: 2 (→5), 5 (→2), 6 (→9), 9 (→6).',
    },
    {
      input: 'n = 1',
      output: '0',
      explanation: '1 rotates to 1, which is the same — not good.',
    },
  ],
  hints: [
    'For each integer `i` from 1 to `n`, check if it is a good number by examining its digits.',
    'A number is good if: (1) none of its digits are 3, 4, or 7 (invalid after rotation), AND (2) at least one digit is 2, 5, 6, or 9 (changes after rotation, making the result different from the original).',
    'Convert each number to a string and iterate over its characters to check both conditions.',
  ],
  functionName: 'rotatedDigits',
  params: ['n'],
  starterCode: {
    javascript: `function rotatedDigits(n) {

}`,
    typescript: "function rotatedDigits(n: number): number {\n\n}",

    python: `def rotatedDigits(n):
    pass`,
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [1], expected: 0 },
    { args: [2], expected: 1 },
  ],
  hiddenTests: [
    { args: [5], expected: 2 },
    { args: [9], expected: 4 },
    { args: [100], expected: 40 },
    { args: [857], expected: 247 },
    { args: [20], expected: 9 },
    { args: [11], expected: 4 },
    { args: [50], expected: 16 },
    { args: [1000], expected: 316 },
  ],
};
