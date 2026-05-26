import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-three-consecutive-integers-that-sum-to-given-number',
  title: 'Find Three Consecutive Integers That Sum to a Given Number',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`num\`, return **three consecutive integers** (as a sorted array) that **sum to \`num\`**. If no such triplet exists, return an **empty array**.`,
  constraints: [
    '`0 <= num <= 10^15`',
  ],
  examples: [
    {
      input: 'num = 33',
      output: '[10,11,12]',
      explanation: '10 + 11 + 12 = 33.',
    },
    {
      input: 'num = 4',
      output: '[]',
      explanation: 'There are no three consecutive integers that sum to 4.',
    },
  ],
  hints: [
    'Three consecutive integers can be written as (n-1), n, (n+1). What is their sum in terms of n?',
    'Sum = 3n, so n = num / 3. This is only an integer when num is divisible by 3.',
    'If num % 3 === 0, return [num/3 - 1, num/3, num/3 + 1]. Otherwise return [].',
  ],
  functionName: 'sumOfThree',
  params: ['num'],
  starterCode: {
    javascript: `function sumOfThree(num) {

}`,
    python: `def sumOfThree(num):
    pass`,
  },
  visibleTests: [
    { args: [33], expected: [10, 11, 12] },
    { args: [4], expected: [] },
    { args: [0], expected: [-1, 0, 1] },
  ],
  hiddenTests: [
    { args: [3], expected: [0, 1, 2] },
    { args: [6], expected: [1, 2, 3] },
    { args: [100], expected: [] },
    { args: [99], expected: [32, 33, 34] },
  ],
};
