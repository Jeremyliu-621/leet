import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-special-numbers',
  title: 'Count Special Numbers',
  difficulty: 'medium',
  tags: ['math', 'dynamic-programming'],
  description: `We call a positive integer **special** if all of its digits are **distinct**.

Given a positive integer \`n\`, return the number of special integers in the range \`[1, n]\`.`,
  constraints: [
    '1 <= n <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'n = 20',
      output: '19',
      explanation: 'All integers from 1 to 9 are special, plus {10,12,13,14,15,16,17,18,19,20} for a total of 19.',
    },
    {
      input: 'n = 5',
      output: '5',
      explanation: '1, 2, 3, 4, and 5 are all special.',
    },
    {
      input: 'n = 135',
      output: '110',
      explanation: '9 one-digit + 81 two-digit + 20 three-digit special numbers up to 135.',
    },
  ],
  hints: [
    'Count numbers with fewer digits separately: for d digits, first digit has 9 choices (1-9), each subsequent digit has (10-position) fewer choices.',
    'For the L-digit group (same length as n), walk digit by digit maintaining a "used" set.',
    'At position i, count non-tight completions: (count of valid digits < n[i] not yet used) × P(10-i-1, L-i-1).',
    'At the end, check if n itself has all distinct digits.',
  ],
  functionName: 'countSpecialNumbers',
  params: ['n'],
  starterCode: {
    javascript: `function countSpecialNumbers(n) {
  // Digit DP / combinatorics approach
}`,
    typescript: `function countSpecialNumbers(n: number): number {
  // Digit DP / combinatorics approach
}`,
    python: `def countSpecialNumbers(n):
    # Digit DP / combinatorics approach
    pass`,
  },
  visibleTests: [
    { args: [20], expected: 19 },
    { args: [5], expected: 5 },
    { args: [135], expected: 110 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 10 },
    { args: [100], expected: 90 },
    { args: [999], expected: 738 },
    { args: [1000], expected: 738 },
    { args: [9876543], expected: 712890 },
  ],
};
