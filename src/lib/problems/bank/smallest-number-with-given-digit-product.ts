import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-number-with-given-digit-product',
  title: 'Smallest Number With Given Digit Product',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given a positive integer \`n\`, return *a string representing the **smallest** positive integer whose digit product equals* \`n\`.

If no such integer exists, return \`"-1"\`.

**Note:** The digit product of a number is the product of all its digits.`,
  constraints: [
    '1 <= n <= 10^18',
  ],
  examples: [
    {
      input: 'n = 36',
      output: '"49"',
      explanation: '36 = 4 * 9. The number 49 has digit product 36. No smaller positive integer has digit product 36.',
    },
    {
      input: 'n = 100',
      output: '"455"',
      explanation: '100 = 4 * 5 * 5. The number 455 has digit product 100.',
    },
  ],
  hints: [
    'A valid number only uses digits 2–9. Greedily factor out the largest digits first (9 down to 2).',
    'If n > 1 after trying all digits 2–9, it cannot be expressed as a product of single digits — return "-1".',
    'To minimize the number, sort the collected digits ascending (fewer digits first, then numerically smallest).',
  ],
  functionName: 'smallestNumber',
  params: ['n'],
  starterCode: {
    javascript: 'function smallestNumber(n) {\n\n}\n',
    typescript: 'function smallestNumber(n: number): string {\n\n}\n',
    python: 'def smallestNumber(n):\n    pass\n',
  },
  visibleTests: [
    { args: [36], expected: '49' },
    { args: [100], expected: '455' },
  ],
  hiddenTests: [
    { args: [1], expected: '1' },
    { args: [2], expected: '2' },
    { args: [7], expected: '7' },
    { args: [11], expected: '-1' },
    { args: [18], expected: '29' },
    { args: [9], expected: '9' },
    { args: [72], expected: '89' },
  ],
};
