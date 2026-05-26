import type { Problem } from '../types';

export const problem: Problem = {
  id: 'climbing-stairs',
  title: 'Climbing Stairs',
  difficulty: 'easy',
  tags: ['math'],
  description: `You are climbing a staircase. It takes \`n\` steps to reach the top.

Each time you can either climb \`1\` or \`2\` steps. In how many distinct ways can you climb to the top?`,
  examples: [
    { input: 'n = 2', output: '2', explanation: '1. (1 step + 1 step) 2. (2 steps)' },
    { input: 'n = 3', output: '3', explanation: '1. (1+1+1) 2. (1+2) 3. (2+1)' },
  ],
  constraints: ['1 <= n <= 45'],
  functionName: 'climbStairs',
  params: ['n'],
  starterCode: {
    javascript: 'function climbStairs(n) {\n  // your code here\n}\n',
    python: 'def climbStairs(n):\n    # your code here\n    pass\n',
  },
  hints: [
    'Notice climbStairs(n) = climbStairs(n-1) + climbStairs(n-2) — you got to step n either from step n-1 (one step) or from step n-2 (two steps).',
    'This is the Fibonacci sequence: climbStairs(1)=1, climbStairs(2)=2.',
    'Iterate from the bottom up, storing only the last two values — O(n) time, O(1) space.',
  ],
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
