import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-key-of-the-numbers',
  title: 'Find the Key of the Numbers',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given three **positive** integers \`num1\`, \`num2\`, and \`num3\`.

The **key** of \`num1\`, \`num2\`, and \`num3\` is defined as a four-digit number such that:
- The **ones** digit of the key is the **minimum** of the ones digits of \`num1\`, \`num2\`, and \`num3\`.
- The **tens** digit of the key is the **minimum** of the tens digits of \`num1\`, \`num2\`, and \`num3\`.
- The **hundreds** digit of the key is the **minimum** of the hundreds digits of \`num1\`, \`num2\`, and \`num3\`.
- The **thousands** digit of the key is the **minimum** of the thousands digits of \`num1\`, \`num2\`, and \`num3\`.

If any number does not have a digit at a given position, that digit is treated as \`0\`.

Return the **key** of the three numbers **without** leading zeros (if the result is 0, return 0).`,
  constraints: [
    '100 <= num1, num2, num3 <= 999',
  ],
  examples: [
    {
      input: 'num1 = 1, num2 = 10, num3 = 1000',
      output: '0',
      explanation: 'Ones: min(1,0,0)=0. Tens: min(0,1,0)=0. Hundreds: min(0,0,0)=0. Thousands: min(0,0,1)=0. Key = 0.',
    },
    {
      input: 'num1 = 987, num2 = 879, num3 = 798',
      output: '777',
      explanation: 'Ones: min(7,9,8)=7. Tens: min(8,7,9)=7. Hundreds: min(9,8,7)=7. Key = 777.',
    },
    {
      input: 'num1 = 1, num2 = 2, num3 = 3',
      output: '1',
      explanation: 'Ones: min(1,2,3)=1. All higher digits are 0. Key = 1.',
    },
  ],
  hints: [
    'Extract each digit position (ones, tens, hundreds, thousands) from all three numbers using integer division and modulo.',
    'For each position, take the minimum of the three values. If a number is too small to have that digit, treat it as 0.',
    '`const d = (n, p) => Math.floor(n / p) % 10; return Math.min(d(a,1000),d(b,1000),d(c,1000))*1000 + Math.min(d(a,100),d(b,100),d(c,100))*100 + Math.min(d(a,10),d(b,10),d(c,10))*10 + Math.min(d(a,1),d(b,1),d(c,1));`',
  ],
  functionName: 'generateKey',
  params: ['num1', 'num2', 'num3'],
  starterCode: {
    javascript: 'function generateKey(num1, num2, num3) {\n  \n}\n',
    typescript: 'function generateKey(num1: number, num2: number, num3: number): number {\n  \n}\n',
    python: 'def generateKey(num1, num2, num3):\n    pass\n',
  },
  visibleTests: [
    { args: [1, 10, 1000], expected: 0 },
    { args: [987, 879, 798], expected: 777 },
    { args: [1, 2, 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [100, 100, 100], expected: 100 },
    { args: [999, 999, 999], expected: 999 },
    { args: [123, 456, 789], expected: 123 },
    { args: [500, 50, 5], expected: 0 },
    { args: [111, 222, 333], expected: 111 },
    { args: [321, 231, 132], expected: 121 },
  ],
};
