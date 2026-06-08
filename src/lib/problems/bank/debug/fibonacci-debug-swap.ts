import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'fibonacci-debug-swap',
  title: 'Fix the Bug: Fibonacci Number',
  difficulty: 'easy',
  tags: ['dynamic-programming', 'math'],
  kind: 'debug',
  description: `The following implementation of **Fibonacci Number** has a bug. Given \`n\`, return the n-th Fibonacci number where \`F(0) = 0\`, \`F(1) = 1\`, and \`F(n) = F(n-1) + F(n-2)\`.

Find and fix the bug so all tests pass.

**Hint:** The variables are updated in the wrong order.`,
  constraints: [
    '0 <= n <= 30',
  ],
  examples: [
    {
      input: 'n = 4',
      output: '3',
      explanation: 'F(4) = F(3) + F(2) = 2 + 1 = 3.',
    },
    {
      input: 'n = 0',
      output: '0',
    },
    {
      input: 'n = 1',
      output: '1',
    },
  ],
  hints: [
    'Trace the loop for n=3. After the first iteration, what are `a` and `b`?',
    'The assignment `a = a + b; b = a;` overwrites `a` before using its old value to update `b`.',
    'Either use a temp variable (`const tmp = a; a = a + b; b = tmp;`) or use destructuring (`[a, b] = [a + b, a]`). But careful — the correct Fibonacci update is `[a, b] = [b, a + b]`.',
  ],
  functionName: 'fib',
  params: ['n'],
  buggyCode: {
    javascript: `function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    a = a + b;
    b = a;
  }
  return b;
}`,
    python: `def fib(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for i in range(2, n + 1):
        a = a + b
        b = a
    return b`,
  },
  starterCode: {
    javascript: `function fib(n) {
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) {
    a = a + b;
    b = a;
  }
  return b;
}`,
    python: `def fib(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for i in range(2, n + 1):
        a = a + b
        b = a
    return b`,
  },
  visibleTests: [
    { args: [0], expected: 0 },
    { args: [1], expected: 1 },
    { args: [4], expected: 3 },
  ],
  hiddenTests: [
    { args: [2], expected: 1 },
    { args: [3], expected: 2 },
    { args: [5], expected: 5 },
    { args: [10], expected: 55 },
    { args: [20], expected: 6765 },
  ],
};
