import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-steps',
  title: 'Number of Steps to Reduce a Number to Zero',
  difficulty: 'easy',
  tags: ['math'],
  description: `Given an integer \`num\`, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.`,
  constraints: [
    '`0 <= num <= 10^6`',
  ],
  examples: [
    {
      input: 'num = 14',
      output: '6',
      explanation: 'Step 1) 14 is even; divide by 2 and obtain 7. Step 2) 7 is odd; subtract 1 and obtain 6. Step 3) 6 is even; divide by 2 and obtain 3. Step 4) 3 is odd; subtract 1 and obtain 2. Step 5) 2 is even; divide by 2 and obtain 1. Step 6) 1 is odd; subtract 1 and obtain 0.',
    },
    {
      input: 'num = 8',
      output: '4',
      explanation: 'Step 1) 8 is even; divide by 2 and obtain 4. Step 2) 4 is even; divide by 2 and obtain 2. Step 3) 2 is even; divide by 2 and obtain 1. Step 4) 1 is odd; subtract 1 and obtain 0.',
    },
    {
      input: 'num = 123',
      output: '12',
    },
  ],
  hints: [
    'Simulate the process: while num > 0, if even do num >>= 1, else num--. Increment step counter each time.',
    'Follow the rules: if `num` is even, divide by 2 (right-shift); if odd, subtract 1. Count steps until `num === 0`.',
    `\`\`\`js
let steps = 0;
while (num > 0) { num = num % 2 === 0 ? num >> 1 : num - 1; steps++; }
return steps;\`\`\``
  ],
  functionName: 'numberOfSteps',
  params: ['num'],
  starterCode: {
    javascript: `function numberOfSteps(num) {

}`,
    python: `def numberOfSteps(num):
    pass`,
  },
  visibleTests: [
    { args: [14], expected: 6 },
    { args: [8], expected: 4 },
    { args: [123], expected: 12 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [1000000], expected: 26 },
    { args: [7], expected: 5 },
  ],
};
