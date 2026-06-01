import type { Problem } from '../types';

export const problem: Problem = {
  id: 'a-number-after-a-double-reversal',
  title: 'A Number After a Double Reversal',
  difficulty: 'easy',
  tags: ['math'],
  description: `**Reversing** an integer means shifting its digits to the opposite position. For example, reversing \`2021\` gives \`1202\`. Reversing \`12300\` gives \`321\` (leading zeros are dropped).

Given an integer \`num\`, return \`true\` if \`num\` equals the result of reversing \`num\` **twice**, and \`false\` otherwise.`,
  constraints: [
    '0 <= num <= 10^6',
  ],
  examples: [
    {
      input: 'num = 526',
      output: 'true',
      explanation: 'Reverse of 526 = 625. Reverse of 625 = 526. Returns 526 = num.',
    },
    {
      input: 'num = 1800',
      output: 'false',
      explanation: 'Reverse of 1800 = 81. Reverse of 81 = 18 ≠ 1800.',
    },
    {
      input: 'num = 0',
      output: 'true',
      explanation: 'Reverse of 0 = 0. Reverse of 0 = 0 = num.',
    },
  ],
  hints: [
    'When does reversing a number lose information? Only when it ends with a 0 (leading zeros are dropped).',
    'If num is 0, it is trivially unaffected by reversal.',
    'Otherwise, double-reversal returns num if and only if num does not end in a 0.',
  ],
  functionName: 'isSameAfterReversals',
  params: ['num'],
  starterCode: {
    javascript: `function isSameAfterReversals(num) {
  return num === 0 || num % 10 !== 0;
}`,
    typescript: `function isSameAfterReversals(num: number): boolean {
  return num === 0 || num % 10 !== 0;
}`,
    python: `def isSameAfterReversals(num):
    return num == 0 or num % 10 != 0`,
  },
  visibleTests: [
    { args: [526], expected: true },
    { args: [1800], expected: false },
    { args: [0], expected: true },
  ],
  hiddenTests: [
    { args: [10], expected: false },
    { args: [1], expected: true },
    { args: [100], expected: false },
    { args: [999], expected: true },
    { args: [120], expected: false },
  ],
};
