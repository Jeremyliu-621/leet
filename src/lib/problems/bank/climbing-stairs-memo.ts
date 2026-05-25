import type { Problem } from '../types';

export const problem: Problem = {
  id: 'climbing-stairs-memo',
  title: 'Climbing Stairs (Memoization)',
  difficulty: 'easy',
  tags: ['dynamic-programming'],
  description: `You are climbing a staircase. It takes \`n\` steps to reach the top. Each time you can either climb \`1\` or \`2\` steps. In how many distinct ways can you climb to the top?

Implement the solution using **memoization** (top-down dynamic programming).`,
  constraints: ['1 <= n <= 45'],
  examples: [
    {
      input: 'n = 2',
      output: '2',
      explanation: 'There are two ways to climb to the top: 1 step + 1 step, or 2 steps.',
    },
    {
      input: 'n = 3',
      output: '3',
      explanation: '1+1+1, 1+2, 2+1.',
    },
  ],
  hints: [
    'Define `climbStairs(n) = climbStairs(n-1) + climbStairs(n-2)` with base cases `climbStairs(0) = 1`, `climbStairs(1) = 1`.',
    'Cache results in a map so each subproblem is solved only once.',
  ],
  functionName: 'climbStairs',
  params: ['n'],
  starterCode: {
    javascript: 'function climbStairs(n) {\n  \n}\n',
    python: 'def climbStairs(n):\n    pass\n',
  },
  visibleTests: [
    { args: [2], expected: 2 },
    { args: [3], expected: 3 },
    { args: [1], expected: 1 },
  ],
  hiddenTests: [
    { args: [4], expected: 5 },
    { args: [5], expected: 8 },
    { args: [10], expected: 89 },
    { args: [45], expected: 1836311903 },
  ],
};
