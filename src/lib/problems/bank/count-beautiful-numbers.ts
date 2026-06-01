import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-beautiful-numbers',
  title: 'Count Beautiful Numbers',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `Given two integers \`lo\` and \`hi\`, count integers in the range \`[lo, hi]\` that are **beautiful**.

An integer is **beautiful** if:
- It contains **no zero digits**.
- Its **digit sum** divides the integer itself.

Return the count of beautiful integers in \`[lo, hi]\`.

**Example:** 12 is beautiful because its digits are 1 and 2 (no zeros), digit sum = 3, and 12 % 3 = 0.
**Example:** 11 is not beautiful because digit sum = 2 and 11 % 2 = 1 ≠ 0.`,
  constraints: [
    '0 <= lo <= hi <= 10^9',
  ],
  examples: [
    {
      input: 'lo = 1, hi = 9',
      output: '9',
      explanation: 'Every single-digit number 1-9 is beautiful: digit sum equals the number itself, so the number always divides evenly by its digit sum.',
    },
    {
      input: 'lo = 10, hi = 22',
      output: '3',
      explanation: 'Beautiful numbers in [10,22]: 12 (sum=3, 12%3=0), 18 (sum=9, 18%9=0), 21 (sum=3, 21%3=0). Numbers like 11 (sum=2, 11%2=1) and 20 (has a zero) are not beautiful.',
    },
    {
      input: 'lo = 1, hi = 100',
      output: '23',
      explanation: 'All 9 single-digit numbers (1-9) plus beautiful two-digit numbers: 11 (no, 11%2≠0), 12 (yes), 13 (no), ..., checking all yields 14 more beautiful numbers in 10-99.',
    },
  ],
  hints: [
    'Use digit DP. Count beautiful numbers up to some limit N with a function f(N), then answer = f(hi) - f(lo-1).',
    'State: (position, digit_sum, number_mod_lcm, tight, started). The LCM of all digit sums 1..9 is 2520, so track number mod 2520.',
    'At each digit position, only allow digits 1-9 (skip zeros). If "tight" is true, the digit is bounded by the limit at that position.',
    'At the end of all digits, the number is beautiful if digit_sum > 0 and (number % digit_sum) == 0. Use (number mod 2520) mod digit_sum to check divisibility.',
  ],
  functionName: 'countBeautifulNumbers',
  params: ['lo', 'hi'],
  starterCode: {
    javascript: `function countBeautifulNumbers(lo, hi) {

}`,
    typescript: `function countBeautifulNumbers(lo: number, hi: number): number {

}`,
    python: `def countBeautifulNumbers(lo, hi):
    pass`,
  },
  visibleTests: [
    { args: [1, 9], expected: 9 },
    { args: [10, 22], expected: 3 },
    { args: [1, 100], expected: 23 },
    { args: [10, 10], expected: 0 },
  ],
  hiddenTests: [
    { args: [12, 12], expected: 1 },
    { args: [11, 11], expected: 0 },
    { args: [100, 200], expected: 17 },
    { args: [1, 1000], expected: 131 },
    { args: [999, 999], expected: 1 },
    { args: [1000, 1000], expected: 0 },
    { args: [1, 1], expected: 1 },
    { args: [9, 9], expected: 1 },
  ],
};
