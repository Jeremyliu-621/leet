import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-child-who-has-the-ball-after-k-seconds',
  title: 'Find the Child Who Has the Ball After k Seconds',
  difficulty: 'easy',
  tags: ['simulation', 'math'],
  description: `You have \`n\` children standing in a line, numbered **0** to **n - 1**. The child at position **0** starts holding the ball.

Every second, the ball is passed to the next child in the current direction:
- If moving **forward** (toward n - 1), pass to child + 1.
- When reaching child **n - 1**, the direction reverses to **backward**.
- If moving **backward** (toward 0), pass to child - 1.
- When reaching child **0**, the direction reverses to **forward**.

After **k** seconds, return the number of the child holding the ball.`,
  constraints: [
    '2 <= n <= 50',
    '0 <= k <= 50',
  ],
  examples: [
    {
      input: 'n = 3, k = 5',
      output: '1',
      explanation: 'Sequence: 0→1→2→1→0→1. After 5 seconds, child 1 holds the ball.',
    },
    {
      input: 'n = 5, k = 6',
      output: '2',
      explanation: 'Sequence: 0→1→2→3→4→3→2. After 6 seconds, child 2 holds the ball.',
    },
    {
      input: 'n = 5, k = 0',
      output: '0',
      explanation: 'No time has passed; child 0 still holds the ball.',
    },
  ],
  hints: [
    'The ball bounces back and forth between child 0 and child n-1. One full round-trip takes 2*(n-1) seconds.',
    'Use the modulo operator to reduce k into a single period: pos = k % (2*(n-1)).',
    'If pos <= n-1, the answer is pos. Otherwise the ball is on its way back: answer = 2*(n-1) - pos.',
  ],
  functionName: 'numberOfChild',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function numberOfChild(n, k) {
  const period = 2 * (n - 1);
  const pos = k % period;
  return pos <= n - 1 ? pos : period - pos;
}`,
    typescript: `function numberOfChild(n: number, k: number): number {
  const period = 2 * (n - 1);
  const pos = k % period;
  return pos <= n - 1 ? pos : period - pos;
}`,
    python: `def numberOfChild(n: int, k: int) -> int:
    period = 2 * (n - 1)
    pos = k % period
    return pos if pos <= n - 1 else period - pos`,
  },
  visibleTests: [
    { args: [3, 5], expected: 1 },
    { args: [5, 6], expected: 2 },
    { args: [5, 0], expected: 0 },
  ],
  hiddenTests: [
    { args: [3, 0], expected: 0 },
    { args: [3, 2], expected: 2 },
    { args: [3, 4], expected: 0 },
    { args: [5, 4], expected: 4 },
    { args: [5, 8], expected: 0 },
    { args: [5, 9], expected: 1 },
    { args: [2, 1], expected: 1 },
    { args: [50, 50], expected: 48 },
  ],
};
