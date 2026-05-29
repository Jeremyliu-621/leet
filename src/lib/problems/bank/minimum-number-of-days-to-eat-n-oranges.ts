import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-days-to-eat-n-oranges',
  title: 'Minimum Number of Days to Eat N Oranges',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `There are \`n\` oranges in the kitchen and you decided to eat some or all of them. You can only eat oranges in the following ways:
- Eat one orange.
- If the number of remaining oranges \`n\` is divisible by \`2\`, you can eat \`n/2\` oranges.
- If the number of remaining oranges \`n\` is divisible by \`3\`, you can eat \`2*(n/3)\` oranges.

You can only choose one of the actions each day. Return the minimum number of days to eat \`n\` oranges.`,
  constraints: [
    '1 <= n <= 2 * 10^9',
  ],
  examples: [
    {
      input: 'n = 10',
      output: '4',
      explanation: 'Use f(n) = 1 + min(n%2 + f(n//2), n%3 + f(n//3)). f(10) = 4.',
    },
    {
      input: 'n = 6',
      output: '3',
    },
  ],
  hints: [
    'Key recurrence: f(n) = 1 + min(n%2 + f(n//2), n%3 + f(n//3)). Base: f(0)=0, f(1)=1.',
    'Use memoization (HashMap). Despite n up to 2*10^9, only O(log n) unique values are computed.',
    'To reach a multiple of 2, eat n%2 ones first. To reach a multiple of 3, eat n%3 ones first.',
  ],
  functionName: 'minDays',
  params: ['n'],
  starterCode: {
    javascript: `function minDays(n) {
  // Memoized: f(n) = 1 + min(n%2 + f(n>>1), n%3 + f(Math.floor(n/3)))
}`,
    typescript: `function minDays(n: number): number {
  // Memoized: f(n) = 1 + min(n%2 + f(n>>1), n%3 + f(Math.floor(n/3)))
}`,
    python: `def minDays(n):
    # Memoized: f(n) = 1 + min(n%2 + f(n//2), n%3 + f(n//3))
    pass`,
  },
  visibleTests: [
    { args: [10], expected: 4 },
    { args: [6], expected: 3 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [2], expected: 2 },
    { args: [3], expected: 2 },
    { args: [4], expected: 3 },
    { args: [12], expected: 4 },
    { args: [56], expected: 6 },
  ],
};
