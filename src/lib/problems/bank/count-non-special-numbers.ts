import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-non-special-numbers',
  title: 'Count Non-Special Numbers',
  difficulty: 'medium',
  tags: ['math', 'arrays'],
  description: `You are given positive integers \`l\` and \`r\`.

A positive integer is called **special** if it has **exactly 2 proper divisors**. The **proper divisors** of a positive integer \`n\` are all positive divisors of \`n\` except \`n\` itself.

Return the count of integers in the range \`[l, r]\` that are **not special**.

**Note:** A number \`n\` is special if and only if \`n = p²\` for some prime \`p\` (its proper divisors are exactly \`1\` and \`p\`).`,
  constraints: [
    '1 <= l <= r <= 10^9',
  ],
  examples: [
    {
      input: 'l = 5, r = 7',
      output: '3',
      explanation: 'The integers in [5, 7] are 5, 6, 7. None of them are special (the nearest special number is 4 = 2²). So all 3 are non-special.',
    },
    {
      input: 'l = 4, r = 16',
      output: '11',
      explanation: 'The special numbers in [4, 16] are: 4 = 2² and 9 = 3². So 13 total − 2 special = 11 non-special.',
    },
  ],
  hints: [
    'A number n is special if and only if n = p² for some prime p. So its proper divisors are exactly 1 and p.',
    'To find all special numbers in [l, r], find all primes p ≤ √r where p² ≥ l. Use the Sieve of Eratosthenes up to floor(√r).',
    'Count the special numbers in [l, r] using the sieve, then subtract from the total count (r − l + 1).',
  ],
  functionName: 'nonSpecialCount',
  params: ['l', 'r'],
  starterCode: {
    javascript: `function nonSpecialCount(l, r) {

}`,
    typescript: "function nonSpecialCount(l: number, r: number): number {\n\n}",

    python: `def nonSpecialCount(l, r):
    pass`,
  },
  visibleTests: [
    { args: [5, 7], expected: 3 },
    { args: [4, 16], expected: 11 },
  ],
  hiddenTests: [
    { args: [4, 4], expected: 0 },
    { args: [1, 100], expected: 96 },
    { args: [1, 1], expected: 1 },
    { args: [2, 3], expected: 2 },
    { args: [1, 4], expected: 3 },
    { args: [100, 100], expected: 1 },
    { args: [49, 49], expected: 0 },
    { args: [50, 50], expected: 1 },
    { args: [1, 1000000000], expected: 999996599 },
  ],
};
