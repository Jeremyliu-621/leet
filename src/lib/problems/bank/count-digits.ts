import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-digits',
  title: 'Count Digits That Divide Its Number',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, return the number of digits in \`num\` that divide \`num\`.

An integer \`val\` divides \`nums\` if \`nums % val == 0\`.`,
  constraints: ['1 <= num <= 10^9'],
  examples: [
    { input: 'num = 7', output: '1', explanation: '7 has one digit (7), and 7 % 7 == 0. Count = 1.' },
    { input: 'num = 121', output: '2', explanation: 'Digits: 1, 2, 1. 121 % 1 == 0 and 121 % 1 == 0 (twice), but 121 % 2 != 0. Count = 2.' },
    { input: 'num = 1248', output: '4', explanation: 'All digits (1,2,4,8) divide 1248.' },
  ],
  hints: [
    'Level 1: Extract each digit of num and check if it divides num.',
    'Level 2: Iterate through each digit: num % digit === 0 means it divides.',
    'Level 3: let n=num,c=0;while(n>0){const d=n%10;if(d!==0&&num%d===0)c++;n=Math.floor(n/10);}return c;',
  ],
  functionName: 'countDigits',
  params: ['num'],
  starterCode: {
    javascript: `function countDigits(num) {
  let n = num, c = 0;
  while (n > 0) { const d = n % 10; if (d !== 0 && num % d === 0) c++; n = Math.floor(n / 10); }
  return c;
}`,
    typescript: `function countDigits(num: number): number {
  let n = num, c = 0;
  while (n > 0) { const d = n % 10; if (d !== 0 && num % d === 0) c++; n = Math.floor(n / 10); }
  return c;
}`,
    python: `def countDigits(num):
    n, c = num, 0
    while n > 0:
        d = n % 10
        if d != 0 and num % d == 0: c += 1
        n //= 10
    return c`,
  },
  visibleTests: [
    { args: [7], expected: 1 },
    { args: [121], expected: 2 },
    { args: [1248], expected: 4 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [10], expected: 1 },
    { args: [12], expected: 2 },
    { args: [1000000000], expected: 1 },
    { args: [100], expected: 1 },
    { args: [102], expected: 2 },
  ],
};
