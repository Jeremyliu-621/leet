import type { Problem } from '../types';

export const problem: Problem = {
  id: 'closest-fair-integer',
  title: 'Closest Fair Integer',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given a **positive** integer \`n\`.

We call an integer \`k\` **fair** if the number of **even** digits in \`k\` equals the number of **odd** digits in it.

Return the **smallest** fair integer that is **greater than or equal to** \`n\`.`,
  constraints: ['1 <= n <= 10^9'],
  examples: [
    {
      input: 'n = 2',
      output: '10',
      explanation:
        'Single-digit numbers cannot be fair. 10 has one odd digit (1) and one even digit (0) → fair.',
    },
    {
      input: 'n = 11',
      output: '12',
      explanation: '11 has two odd digits → not fair. 12 has one odd (1) and one even (2) → fair.',
    },
  ],
  hints: [
    'A fair integer must have an even number of digits (otherwise equal even/odd counts are impossible).',
    'If n has an odd number of digits, the answer is 10^(numDigits), which is the smallest even-length number.',
    'If n has an even number of digits, try constructing the smallest fair number with the same digit count that is >= n. If none exists, move to 10^(numDigits).',
  ],
  functionName: 'closestFair',
  params: ['n'],
  starterCode: {
    javascript: `function closestFair(n) {
  // your code here
}`,
    typescript: `function closestFair(n: number): number {
  // your code here
}`,
    python: `def closestFair(n):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: [2], expected: 10 },
    { args: [11], expected: 12 },
    { args: [12], expected: 12 },
    { args: [10], expected: 10 },
    { args: [100], expected: 1001 },
  ],
  hiddenTests: [
    { args: [50], expected: 50 },
    { args: [51], expected: 52 },
    { args: [99], expected: 1001 },
    { args: [1], expected: 10 },
    { args: [1000], expected: 1001 },
  ],
};
