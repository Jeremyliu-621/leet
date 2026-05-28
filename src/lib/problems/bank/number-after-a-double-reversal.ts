import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-after-a-double-reversal',
  title: 'A Number After a Double Reversal',
  difficulty: 'easy',
  tags: ['math'],
  description: `**Reversing** an integer means to reverse all its digits.

- For example, reversing \`2021\` gives \`1202\`. Reversing \`12300\` gives \`321\` as the **leading zeros are not retained**.

Given an integer \`num\`, **reverse** \`num\` to get \`reversed1\`, **then reverse** \`reversed1\` to get \`reversed2\`. Return \`true\` if \`reversed2\` equals \`num\`. Otherwise return \`false\`.

**Approach:** After two reversals, the number is unchanged unless it ends in zero (since leading zeros are dropped). So return \`true\` iff \`num == 0\` or \`num % 10 != 0\`.`,
  constraints: [
    '0 <= num <= 10^6',
  ],
  examples: [
    {
      input: 'num = 526',
      output: 'true',
      explanation: 'Reverse 526 → 625. Reverse 625 → 526. Equals num.',
    },
    {
      input: 'num = 1800',
      output: 'false',
      explanation: 'Reverse 1800 → 81. Reverse 81 → 18 ≠ 1800.',
    },
    {
      input: 'num = 0',
      output: 'true',
      explanation: 'Reverse 0 → 0. Reverse 0 → 0 = num.',
    },
  ],
  hints: [
    'If num ends in zero (and is non-zero), leading zeros are dropped during reversal, so the second reversal won\'t restore the original.',
    'Return num === 0 || num % 10 !== 0.',
    '```js\nfunction isSameAfterReversals(num) {\n  return num === 0 || num % 10 !== 0;\n}\n```',
  ],
  functionName: 'isSameAfterReversals',
  params: ['num'],
  starterCode: {
    javascript: `function isSameAfterReversals(num) {
  // return true if two reversals give back num

}`,
    python: `def isSameAfterReversals(num: int) -> bool:
    # return true if two reversals give back num
    pass
`,
  },
  visibleTests: [
    { args: [526], expected: true },
    { args: [1800], expected: false },
    { args: [0], expected: true },
  ],
  hiddenTests: [
    { args: [1], expected: true },
    { args: [10], expected: false },
    { args: [100], expected: false },
    { args: [999], expected: true },
    { args: [120], expected: false },
    { args: [1000000], expected: false },
    { args: [123456], expected: true },
  ],
};
