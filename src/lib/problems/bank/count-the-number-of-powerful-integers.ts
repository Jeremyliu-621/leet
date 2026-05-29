import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-powerful-integers',
  title: 'Count the Number of Powerful Integers',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given three integers \`start\`, \`finish\`, and \`limit\`, and a string \`s\` representing a positive integer.

A **powerful integer** is a positive integer \`x\` in the range \`[start..finish]\` such that:
- \`x\` ends with \`s\` (i.e., \`s\` is a suffix of \`x\`'s decimal representation), and
- **every digit** in \`x\` is at most \`limit\`.

Return the **total number** of powerful integers in the range \`[start, finish]\`.

**Constraints:**
- \`1 ≤ start ≤ finish ≤ 10^15\`
- \`1 ≤ limit ≤ 9\`
- \`1 ≤ s.length ≤ 6\`
- \`s\` consists only of digits and does not have leading zeros.
- All digits in \`s\` are at most \`limit\`.`,
  examples: [
    {
      input: 'start = 1, finish = 6000, limit = 4, s = "124"',
      output: '5',
      explanation: '"124", "1124", "2124", "3124", "4124" all end with "124" and each digit ≤ 4.',
    },
    {
      input: 'start = 15, finish = 215, limit = 6, s = "10"',
      output: '2',
      explanation: '"110" and "210" end with "10" and every digit ≤ 6.',
    },
    {
      input: 'start = 1000, finish = 2000, limit = 4, s = "3000"',
      output: '0',
      explanation: 's has 4 digits but 3000 and 4000 are out of range, and digits in s include 3 which is ≤ 4, but no such number is in range.',
    },
  ],
  constraints: ['Use digit DP: count(finish) - count(start-1) where count(n) = powerful integers in [1..n].'],
  hints: [
    'Convert to "count up to n" using digit DP, then subtract count(start-1) from count(finish).',
    'For count(n): treat n as a string. For the suffix to fit, the prefix of x (excluding the suffix digits) must be such that appending s gives a valid number ≤ n.',
    'Iterate from 0 to prefix max value: for each digit count d (length of n minus length of s), count prefixes where every digit ≤ limit and prefix || s ≤ n.',
  ],
  params: ['start', 'finish', 'limit', 's'],
  starterCode: {
    javascript: `function numberOfPowerfulInt(start, finish, limit, s) {

}`,
    typescript: `function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {

}`,
    python: `def numberOfPowerfulInt(start: int, finish: int, limit: int, s: str) -> int:
    pass`,
  },
  functionName: 'numberOfPowerfulInt',
  visibleTests: [
    { args: [1, 6000, 4, '124'], expected: 5 },
    { args: [15, 215, 6, '10'], expected: 2 },
    { args: [1000, 2000, 4, '3000'], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 100, 9, '1'], expected: 10 },
    { args: [1, 100, 1, '1'], expected: 2 },
    { args: [1, 1000000000000000, 9, '1'], expected: 100000000000000 },
    { args: [1, 10, 9, '10'], expected: 1 },
    { args: [100, 999, 5, '5'], expected: 30 },
    { args: [1, 9, 5, '6'], expected: 0 },
    { args: [1, 9, 9, '5'], expected: 1 },
  ],
};
