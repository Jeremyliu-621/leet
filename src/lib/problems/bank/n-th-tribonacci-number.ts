import type { Problem } from '../types';

export const problem: Problem = {
  id: 'n-th-tribonacci-number',
  title: 'N-th Tribonacci Number',
  difficulty: 'easy',
  tags: ['dynamic-programming', 'math'],
  description: `The Tribonacci sequence T_n is defined as follows:

T_0 = 0, T_1 = 1, T_2 = 1, and T_n+3 = T_n + T_n+1 + T_n+2 for n >= 0.

Given \`n\`, return the value of T_n.`,
  constraints: ['0 <= n <= 37', 'The answer is guaranteed to fit in a 32-bit integer.'],
  examples: [
    {
      input: 'n = 4',
      output: '4',
      explanation: 'T_3 = 0+1+1 = 2. T_4 = 1+1+2 = 4.',
    },
    {
      input: 'n = 25',
      output: '1389537',
    },
  ],
  hints: [
    'T0=0, T1=1, T2=1. Each subsequent value is the sum of the previous three.',
    'Iterate from T3 onwards, maintaining a rolling window of 3 values to avoid storing the full sequence.',
    'Handle the base cases n=0, n=1, n=2 directly. For n>=3, loop from 3 to n updating three variables each step.',
  ],
  functionName: 'tribonacci',
  params: ['n'],
  starterCode: {
    javascript: 'function tribonacci(n) {\n  \n}\n',
    typescript: 'function tribonacci(n: number): number {\n  \n}\n',
    python: 'def tribonacci(n):\n    pass\n',
  },
  visibleTests: [
    { args: [4], expected: 4 },
    { args: [25], expected: 1389537 },
  ],
  hiddenTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [10], expected: 149 },
    { args: [37], expected: 2082876103 },
  ],
};
