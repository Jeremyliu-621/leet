import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-three-consecutive-integers-that-sum-to-a-given-number',
  title: 'Find Three Consecutive Integers That Sum to a Given Number',
  difficulty: 'medium',
  tags: ['math'],
  description: `Given an integer \`num\`, return **three consecutive integers** (as a sorted array) that **sum to** \`num\`. If \`num\` cannot be expressed as the sum of three consecutive integers, return an **empty array**.`,
  constraints: [
    '0 <= num <= 10^15',
  ],
  examples: [
    {
      input: 'num = 33',
      output: '[10,11,12]',
      explanation: '33 can be expressed as 10 + 11 + 12 = 33. 10, 11, 12 are 3 consecutive integers, so we return [10,11,12].',
    },
    {
      input: 'num = 4',
      output: '[]',
      explanation: 'There is no way to express 4 as the sum of 3 consecutive integers.',
    },
  ],
  hints: [
    'Three consecutive integers are (n-1, n, n+1). Their sum is 3n.',
    'If num is divisible by 3, then n = num/3 and the three integers are [n-1, n, n+1].',
    'If num % 3 !== 0, return an empty array.',
  ],
  functionName: 'sumOfThree',
  params: ['num'],
  starterCode: {
    javascript: 'function sumOfThree(num) {\n\n}\n',
    typescript: "function sumOfThree(num: number): number[] {\n\n}",

    python: 'def sumOfThree(num: int) -> list:\n    pass\n',
  },
  visibleTests: [
    { args: [33], expected: [10, 11, 12] },
    { args: [4], expected: [] },
  ],
  hiddenTests: [
    { args: [0], expected: [-1, 0, 1] },
    { args: [3], expected: [0, 1, 2] },
    { args: [9], expected: [2, 3, 4] },
    { args: [1], expected: [] },
    { args: [12], expected: [3, 4, 5] },
  ],
};
