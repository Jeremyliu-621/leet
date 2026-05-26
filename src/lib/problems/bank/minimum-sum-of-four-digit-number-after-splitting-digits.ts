import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-sum-of-four-digit-number-after-splitting-digits',
  title: 'Minimum Sum of Four Digit Number After Splitting Digits',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are given a **four-digit** integer \`num\`. Split its digits into two new integers \`new1\` and \`new2\` by using each digit exactly once. The sum \`new1 + new2\` must be **minimized**.

Return the **minimum** possible sum.

**Note:** Leading zeros are allowed in \`new1\` and \`new2\`.`,
  constraints: [
    '`1000 <= num <= 9999`',
  ],
  examples: [
    {
      input: 'num = 2932',
      output: '52',
      explanation: 'Digits sorted: [2,2,3,9]. new1 = 23, new2 = 29 → sum = 52.',
    },
    {
      input: 'num = 4009',
      output: '13',
      explanation: 'Digits sorted: [0,0,4,9]. new1 = 04 = 4, new2 = 09 = 9 → sum = 13.',
    },
  ],
  hints: [
    'Extract the four digits and sort them in ascending order.',
    'To minimize the sum of two 2-digit numbers, pair the smallest digit with the third-smallest and the second-smallest with the largest.',
    'Return (d[0]*10 + d[2]) + (d[1]*10 + d[3]) where d is the sorted digit array.',
  ],
  functionName: 'minimumSum',
  params: ['num'],
  starterCode: {
    javascript: `function minimumSum(num) {

}`,
    python: `def minimumSum(num):
    pass`,
  },
  visibleTests: [
    { args: [2932], expected: 52 },
    { args: [4009], expected: 13 },
    { args: [1111], expected: 22 },
  ],
  hiddenTests: [
    { args: [9999], expected: 198 },
    { args: [1234], expected: 37 },
    { args: [5555], expected: 110 },
  ],
};
