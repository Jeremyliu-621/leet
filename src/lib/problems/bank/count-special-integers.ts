import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-special-integers',
  title: 'Count Special Integers',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `We call a positive integer **special** if all of its digits are **distinct**.

Given a **positive** integer \`n\`, return the number of special integers that belong to the interval \`[1, n]\`.`,
  constraints: [
    '1 <= n <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'n = 20',
      output: '19',
      explanation: 'All integers from 1 to 20 except 11 are special (11 has a repeated digit).',
    },
    {
      input: 'n = 5',
      output: '5',
      explanation: '1, 2, 3, 4, 5 are all special.',
    },
  ],
  hints: [
    'Use digit DP: process the decimal digits of n left-to-right, tracking which digits have been used (bitmask over 0-9).',
    'For each position, if "tight" (all prior digits matched n), count: (a) numbers with a smaller digit here (free remaining positions) + (b) recurse with the digit equal to n\'s digit.',
    'For "free" positions (not tight), the count of arrangements using k of the remaining 10 distinct digits in p positions is P(10 - used_count, p) = (10 - used_count) * (9 - used_count) * ... (one less each step).',
  ],
  functionName: 'countSpecialNumbers',
  params: ['n'],
  starterCode: {
    javascript: `function countSpecialNumbers(n) {\n  \n}`,
    typescript: `function countSpecialNumbers(n: number): number {\n  \n}`,
    python: `def countSpecialNumbers(n):\n    `,
  },
  visibleTests: [
    { args: [20], expected: 19 },
    { args: [5], expected: 5 },
    { args: [135], expected: 110 },
  ],
  hiddenTests: [
    { args: [20], expected: 19 },
    { args: [5], expected: 5 },
    { args: [135], expected: 110 },
    { args: [1], expected: 1 },
    { args: [100], expected: 90 },
    { args: [1000], expected: 738 },
    { args: [9999], expected: 5274 },
    { args: [1234567890], expected: 5658004 },
  ],
};
