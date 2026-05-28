import type { Problem } from '../types';

export const problem: Problem = {
  id: 'climbing-stairs',
  title: 'Climbing Stairs',
  difficulty: 'easy',
  tags: ['math', 'dynamic-programming'],
  description: `You are climbing a staircase with \`n\` steps. Each time you can climb either **1** or **2** steps. In how many distinct ways can you climb to the top?

For example, with 3 steps you can go: [1,1,1], [1,2], or [2,1] — three distinct ways.

Notice the pattern: the number of ways to reach step \`n\` equals the number of ways to reach step \`n-1\` (then take one step) plus the number of ways to reach step \`n-2\` (then take two steps). This is the Fibonacci sequence!`,
  constraints: [
    '1 <= n <= 45',
  ],
  examples: [
    {
      input: 'n = 2',
      output: '2',
      explanation: 'Two ways: [1,1] or [2].',
    },
    {
      input: 'n = 3',
      output: '3',
      explanation: 'Three ways: [1,1,1], [1,2], [2,1].',
    },
    {
      input: 'n = 5',
      output: '8',
      explanation: 'Eight distinct ways to climb 5 steps.',
    },
  ],
  hints: [
    'Notice that `climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)` — you reach step `n` from either step `n-1` or step `n-2`. Base cases: `n=1 → 1`, `n=2 → 2`.',
    'This is exactly the Fibonacci recurrence (offset by 1). Implement it iteratively with two variables — no array needed.',
    '`if (n <= 2) return n; let a = 1, b = 2; for (let i = 3; i <= n; i++) { [a, b] = [b, a + b]; } return b;`',
  ],
  functionName: 'climbStairs',
  params: ['n'],
  starterCode: {
    javascript: 'function climbStairs(n) {\n  // your code here\n}\n',
    typescript: 'function climbStairs(n: number): number {\n  // your code here\n}\n',
    python: 'def climbStairs(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [5], expected: 8 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [4], expected: 5 },
    { args: [6], expected: 13 },
    { args: [10], expected: 89 },
    { args: [20], expected: 10946 },
    { args: [45], expected: 1836311903 },
  ],
};
