import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-number-and-its-reverse',
  title: 'Sum of Number and Its Reverse',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given a **non-negative** integer \`num\`, return \`true\` if there exists a non-negative integer \`k\` such that \`k + reverse(k) == num\`, or \`false\` otherwise.

\`reverse(k)\` is \`k\` with its digits reversed (no leading zeros: \`reverse(123) = 321\`, \`reverse(120) = 21\`).`,
  constraints: [
    '0 <= num <= 10^5',
  ],
  examples: [
    {
      input: 'num = 443',
      output: 'true',
      explanation: '172 + 271 = 443.',
    },
    {
      input: 'num = 63',
      output: 'false',
      explanation: 'No k satisfies k + reverse(k) = 63.',
    },
    {
      input: 'num = 181',
      output: 'true',
      explanation: '140 + 041 = 140 + 41 = 181.',
    },
  ],
  hints: [
    'Since num <= 10^5, iterate k from 0 to num. Compute reverse(k) and check if k + reverse(k) === num.',
    'To reverse a number: convert to string, reverse, convert back. reverse(120) = parseInt("021") = 21.',
    'k + reverse(k) grows monotonically (approximately), so once k > num you can stop early.',
  ],
  functionName: 'sumOfNumberAndReverse',
  params: ['num'],
  starterCode: {
    javascript: `function sumOfNumberAndReverse(num) {

}`,
    python: `def sumOfNumberAndReverse(num):
    pass`,
  },
  visibleTests: [
    { args: [443], expected: true },
    { args: [63], expected: false },
    { args: [181], expected: true },
  ],
  hiddenTests: [
    { args: [0], expected: true },
    { args: [1], expected: false },
    { args: [11], expected: true },
    { args: [100], expected: false },
  ],
};
