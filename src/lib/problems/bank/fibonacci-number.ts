import type { Problem } from '../types';

export const problem: Problem = {
  id: 'fibonacci-number',
  title: 'Fibonacci Number',
  difficulty: 'easy',
  tags: ['math', 'dynamic-programming'],
  description: `The **Fibonacci sequence** is defined as:

- F(0) = 0
- F(1) = 1
- F(n) = F(n - 1) + F(n - 2) for n >= 2

Given \`n\`, return \`F(n)\`.

A naive recursive solution works but is exponential. An iterative approach solves this in O(n) time and O(1) space by keeping track of only the last two values.`,
  constraints: [
    '0 <= n <= 30',
  ],
  examples: [
    {
      input: 'n = 0',
      output: '0',
      explanation: 'F(0) = 0 by definition.',
    },
    {
      input: 'n = 4',
      output: '3',
      explanation: 'F(4) = F(3)+F(2) = 2+1 = 3. Sequence: 0,1,1,2,3.',
    },
    {
      input: 'n = 10',
      output: '55',
      explanation: 'The 10th Fibonacci number is 55.',
    },
  ],
  hints: [
    'Base cases: if `n <= 1`, return `n` directly (F(0)=0, F(1)=1).',
    'Keep two variables `a = 0` and `b = 1`. Each step, set `[a, b] = [b, a + b]`. Repeat `n - 1` times.',
    '`if (n <= 1) return n; let a = 0, b = 1; for (let i = 2; i <= n; i++) { [a, b] = [b, a + b]; } return b;`',
  ],
  functionName: 'fibonacci',
  params: ['n'],
  starterCode: {
    javascript: `function fibonacci(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}`,
    typescript: `function fibonacci(n: number): number {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}`,
    python: `def fibonacci(n):
    if n <= 1: return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b`,
  },
  visibleTests: [
    { args: [0], expected: 0 },
    { args: [4], expected: 3 },
    { args: [10], expected: 55 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [5], expected: 5 },
    { args: [7], expected: 13 },
    { args: [30], expected: 832040 },
  ],
};
