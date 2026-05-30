import type { Problem } from '../types';

export const problem: Problem = {
  id: 'closest-fair-integer',
  title: 'Closest Fair Integer',
  difficulty: 'medium',
  tags: ['math'],
  description: `You are given a **positive** integer \`n\`.

We call an integer \`k\` **fair** if the number of **even** digits in \`k\` equals the number of **odd** digits in it.

Return the **smallest** fair integer that is **greater than or equal to** \`n\`.

Note: A digit is **odd** if it is in \`{1, 3, 5, 7, 9}\` and **even** if it is in \`{0, 2, 4, 6, 8}\`.`,
  constraints: ['`1 <= n <= 10^9`'],
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
    {
      input: 'n = 403',
      output: '1001',
      explanation: '403 has 3 digits (odd count), so no 3-digit fair integer exists. The first 4-digit fair integer ≥ 403 is 1001 (two odd: 1,1; two even: 0,0).',
    },
  ],
  hints: [
    'A fair integer must have an even number of digits (otherwise equal even/odd counts are impossible).',
    'If n has an odd number of digits, the answer is 10^(numDigits), which is the smallest even-length number.',
    'If n has an even number of digits, scan forward from n until you find a number where exactly half the digits are odd.',
  ],
  functionName: 'closestFair',
  params: ['n'],
  starterCode: {
    javascript: `function closestFair(n) {

}`,
    typescript: `function closestFair(n: number): number {

}`,
    python: `def closestFair(n):
    pass`,
  },
  visibleTests: [
    { args: [2], expected: 10 },
    { args: [11], expected: 12 },
    { args: [403], expected: 1001 },
  ],
  hiddenTests: [
    { args: [1], expected: 10 },
    { args: [10], expected: 10 },
    { args: [12], expected: 12 },
    { args: [13], expected: 14 },
    { args: [50], expected: 50 },
    { args: [51], expected: 52 },
    { args: [99], expected: 1001 },
    { args: [100], expected: 1001 },
    { args: [1000], expected: 1001 },
    { args: [1023], expected: 1023 },
  ],
};
