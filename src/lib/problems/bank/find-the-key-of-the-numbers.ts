import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-key-of-the-numbers',
  title: 'Find the Key of the Numbers',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given three **positive** integers \`num1\`, \`num2\`, and \`num3\`.

The **key** of \`num1\`, \`num2\`, and \`num3\` is defined as a four-digit number such that:
- The **1st digit** is the minimum of the units digits of \`num1\`, \`num2\`, and \`num3\`.
- The **2nd digit** is the minimum of the tens digits of \`num1\`, \`num2\`, and \`num3\`.
- The **3rd digit** is the minimum of the hundreds digits of \`num1\`, \`num2\`, and \`num3\`.
- The **4th digit** is the minimum of the thousands digits of \`num1\`, \`num2\`, and \`num3\`.

**Note** that numbers less than four digits are padded with leading zeros to make them four-digit numbers.

Return the **key** of the three numbers **without** leading zeros (if any).`,
  constraints: [
    '1 <= num1, num2, num3 <= 9999',
  ],
  examples: [
    {
      input: 'num1 = 1, num2 = 10, num3 = 1000',
      output: '0',
      explanation: 'Padded: 0001, 0010, 1000. Min of units=min(1,0,0)=0. Min of tens=min(0,1,0)=0. Min of hundreds=min(0,0,0)=0. Min of thousands=min(0,0,1)=0. Key = 0000 = 0.',
    },
    {
      input: 'num1 = 987, num2 = 879, num3 = 798',
      output: '777',
      explanation: 'Padded: 0987, 0879, 0798. Units: min(7,9,8)=7. Tens: min(8,7,9)=7. Hundreds: min(9,8,7)=7. Thousands: min(0,0,0)=0. Key = 0777 = 777.',
    },
    {
      input: 'num1 = 1, num2 = 1, num3 = 1',
      output: '1',
      explanation: 'All digits are 1 at each position. Key = 0001 = 1.',
    },
  ],
  hints: [
    'Process each digit position (units, tens, hundreds, thousands) independently.',
    'Extract the digit at position p using Math.floor(n / 10^p) % 10, then take the minimum across all three numbers.',
    'Accumulate the result: key += min_digit * 10^p for each position p (p = 1, 10, 100, 1000).',
  ],
  functionName: 'generateKey',
  params: ['num1', 'num2', 'num3'],
  starterCode: {
    javascript: `function generateKey(num1, num2, num3) {
  let key = 0;
  for (let p = 0; p < 4; p++) {
    const pw = 10 ** p;
    key += Math.min(Math.floor(num1 / pw) % 10, Math.floor(num2 / pw) % 10, Math.floor(num3 / pw) % 10) * pw;
  }
  return key;
}`,
    typescript: `function generateKey(num1: number, num2: number, num3: number): number {
  let key = 0;
  for (let p = 0; p < 4; p++) {
    const pw = 10 ** p;
    key += Math.min(Math.floor(num1 / pw) % 10, Math.floor(num2 / pw) % 10, Math.floor(num3 / pw) % 10) * pw;
  }
  return key;
}`,
    python: `def generateKey(num1: int, num2: int, num3: int) -> int:
    key = 0
    for p in range(4):
        pw = 10 ** p
        key += min(num1 // pw % 10, num2 // pw % 10, num3 // pw % 10) * pw
    return key`,
  },
  visibleTests: [
    { args: [1, 10, 1000], expected: 0 },
    { args: [987, 879, 798], expected: 777 },
    { args: [1, 1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: [9999, 9999, 9999], expected: 9999 },
    { args: [1234, 5678, 9012], expected: 1012 },
    { args: [100, 200, 300], expected: 100 },
    { args: [9, 99, 999], expected: 9 },
    { args: [5555, 4444, 3333], expected: 3333 },
    { args: [1111, 2222, 3333], expected: 1111 },
    { args: [9876, 6789, 7896], expected: 6776 },
  ],
};
