import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-winner-of-the-circular-game',
  title: 'Find the Winner of the Circular Game',
  difficulty: 'medium',
  tags: ['simulation', 'math'],
  description: `There are \`n\` friends playing a game sitting in a circle numbered \`1\` to \`n\` clockwise. Starting from friend \`1\`, count the next \`k\` friends clockwise (including the starting friend), and the last friend counted leaves the circle. The process repeats with the next friend after the one who just left, until one friend remains. Return the number of that last friend.`,
  constraints: [
    '`1 <= k <= 500`',
    '`1 <= n <= 500`',
  ],
  examples: [
    {
      input: 'n = 5, k = 2',
      output: '3',
      explanation:
        'Starting from friend 1, count 2 friends: friend 1, friend 2 — friend 2 leaves. Next start is friend 3. Count 2: friend 3, friend 4 — friend 4 leaves. Count 2 from friend 5: friend 5, friend 1 — friend 1 leaves. Count 2 from friend 3: friend 3, friend 5 — friend 5 leaves. Friend 3 wins.',
    },
    {
      input: 'n = 6, k = 5',
      output: '1',
      explanation: 'Simulate the game step by step; friend 1 is the last remaining.',
    },
  ],
  hints: [
    'The Josephus problem has a well-known mathematical recurrence: if `W(1) = 0` (0-indexed position of winner with 1 person), then `W(i) = (W(i-1) + k) % i` for `i` from 2 to `n`.',
    'Run the recurrence for `i` from 2 to `n`, then return `pos + 1` to convert from 0-indexed to 1-indexed.',
    '```js\nfunction findTheWinner(n, k) {\n  let pos = 0;\n  for (let i = 2; i <= n; i++) {\n    pos = (pos + k) % i;\n  }\n  return pos + 1;\n}\n```',
  ],
  functionName: 'findTheWinner',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function findTheWinner(n, k) {

}`,
    python: `def findTheWinner(n: int, k: int) -> int:
    pass`,
  },
  visibleTests: [
    { args: [5, 2], expected: 3 },
    { args: [6, 5], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [2, 3], expected: 2 },
    { args: [4, 1], expected: 4 },
    { args: [5, 1], expected: 5 },
    { args: [3, 2], expected: 3 },
  ],
};
