import type { Problem } from '../types';

export const problem: Problem = {
  id: 'monotonic-increasing-digits',
  title: 'Monotonic Increasing Digits',
  difficulty: 'medium',
  tags: ['math'],
  description: `An integer has **monotone increasing digits** if and only if each pair of adjacent digits \`x\` and \`y\` satisfy \`x <= y\`.

Given an integer \`n\`, return the largest number that is less than or equal to \`n\` with monotone increasing digits.`,
  constraints: [
    '0 <= n <= 10^9',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '9',
      explanation: '9 ≤ 10 and 9 has monotone increasing digits.',
    },
    {
      input: 'n = 1234',
      output: '1234',
      explanation: '1234 itself has monotone increasing digits.',
    },
    {
      input: 'n = 332',
      output: '299',
      explanation: '299 ≤ 332 and has monotone increasing digits; 300 and 301 do not.',
    },
  ],
  hints: [
    'Convert n to an array of digits. Scan from right to left to find the first position where digits[i-1] > digits[i].',
    'When you find such a position, decrement digits[i-1] by 1 and mark that everything from position i onward should become \'9\'.',
    'Repeat leftward until no violation remains, then fill the marked suffix with 9s and reconstruct the number.',
  ],
  functionName: 'monotoneIncreasingDigits',
  params: ['n'],
  starterCode: {
    javascript: `function monotoneIncreasingDigits(n) {

}`,
    typescript: `function monotoneIncreasingDigits(n: number): number {

}`,
    python: `def monotoneIncreasingDigits(n: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [10], expected: 9 },
    { args: [1234], expected: 1234 },
    { args: [332], expected: 299 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [9], expected: 9 },
    { args: [100], expected: 99 },
    { args: [1000000000], expected: 999999999 },
    { args: [121], expected: 119 },
    { args: [999], expected: 999 },
    { args: [310], expected: 299 },
    { args: [4321], expected: 3999 },
  ],
};
