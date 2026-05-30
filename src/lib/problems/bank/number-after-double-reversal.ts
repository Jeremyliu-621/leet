import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-after-double-reversal',
  title: 'A Number After a Double Reversal',
  difficulty: 'easy',
  tags: ['math'],
  description: `**Reversing** an integer means to reverse all its digits.

- For example, reversing \`2021\` gives \`1202\`. Reversing \`12300\` gives \`321\` as the **leading zeros are not retained**.

Given an integer \`num\`, **reverse** \`num\` to get \`reversed1\`, **then reverse** \`reversed1\` to get \`reversed2\`. Return \`true\` if \`reversed2\` equals \`num\`. Otherwise return \`false\`.`,
  constraints: [
    '`0 <= num <= 10^6`',
  ],
  examples: [
    {
      input: 'num = 526',
      output: 'true',
      explanation: 'Reverse 526 → 625. Reverse 625 → 526. 526 == 526, so return true.',
    },
    {
      input: 'num = 1800',
      output: 'false',
      explanation: 'Reverse 1800 → 81 (leading zeros dropped). Reverse 81 → 18. 18 ≠ 1800, return false.',
    },
    {
      input: 'num = 0',
      output: 'true',
      explanation: 'Reverse 0 → 0. Reverse 0 → 0. 0 == 0, return true.',
    },
  ],
  hints: [
    'Reversing a number twice returns the original only if reversing once does not drop any leading zeros.',
    'Reversing creates leading zeros only when the original number ends in 0 (i.e., num % 10 == 0), because those trailing zeros become leading zeros in the reversed number.',
    'Return true if num == 0 or num % 10 != 0.',
  ],
  functionName: 'isSameAfterReversals',
  params: ['num'],
  starterCode: {
    javascript: `function isSameAfterReversals(num) {

}`,
    typescript: `function isSameAfterReversals(num: number): boolean {

}`,
    python: `def isSameAfterReversals(num):
    pass`,
  },
  visibleTests: [
    { args: [526], expected: true },
    { args: [1800], expected: false },
    { args: [0], expected: true },
  ],
  hiddenTests: [
    { args: [10], expected: false },
    { args: [100], expected: false },
    { args: [1], expected: true },
    { args: [120], expected: false },
    { args: [123], expected: true },
    { args: [1000000], expected: false },
    { args: [999999], expected: true },
  ],
};
