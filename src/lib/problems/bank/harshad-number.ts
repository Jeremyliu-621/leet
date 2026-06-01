import type { Problem } from '../types';

export const problem: Problem = {
  id: 'harshad-number',
  title: 'Harshad Number',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `An integer divisible by the sum of its digits is called a **Harshad** number. For example, \`18\` is a Harshad number since \`1 + 8 = 9\` and \`18\` is divisible by \`9\`.

Given an integer \`x\`, return the *sum of the digits* of \`x\` if \`x\` is a Harshad number, or \`-1\` if it is not.`,
  constraints: [
    '1 <= x <= 100',
  ],
  examples: [
    {
      input: 'x = 18',
      output: '9',
      explanation: 'The sum of digits of 18 is 9. 18 is divisible by 9, so it is a Harshad number and we return 9.',
    },
    {
      input: 'x = 23',
      output: '-1',
      explanation: 'The sum of digits of 23 is 5. 23 is not divisible by 5, so -1 is returned.',
    },
    {
      input: 'x = 12',
      output: '3',
      explanation: 'The sum of digits of 12 is 3. 12 is divisible by 3.',
    },
  ],
  hints: [
    'Compute the digit sum by iterating over each character of the string representation of x.',
    'Check if x % digitSum === 0; if so return digitSum, otherwise return -1.',
    'const s=String(x).split("").reduce((a,c)=>a+Number(c),0);return x%s===0?s:-1;',
  ],
  functionName: 'sumOfTheDigitsOfHarshadNumber',
  params: ['x'],
  starterCode: {
    javascript: `function sumOfTheDigitsOfHarshadNumber(x) {
  const s = String(x).split('').reduce((a, c) => a + Number(c), 0);
  return x % s === 0 ? s : -1;
}`,
    typescript: `function sumOfTheDigitsOfHarshadNumber(x: number): number {
  const s = String(x).split('').reduce((a, c) => a + Number(c), 0);
  return x % s === 0 ? s : -1;
}`,
    python: `def sumOfTheDigitsOfHarshadNumber(x):
    s = sum(int(d) for d in str(x))
    return s if x % s == 0 else -1`,
  },
  visibleTests: [
    { args: [18], expected: 9 },
    { args: [23], expected: -1 },
    { args: [12], expected: 3 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [10], expected: 1 },
    { args: [100], expected: 1 },
    { args: [11], expected: -1 },
    { args: [21], expected: 3 },
    { args: [99], expected: -1 },
  ],
};
