import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-winner-of-circular-game',
  title: 'Find the Winner of the Circular Game',
  difficulty: 'medium',
  tags: ['math'],
  description: `There are \`n\` friends sitting in a circle numbered \`1\` to \`n\` (clockwise). Starting at position \`1\` and counting clockwise, every \`k\`-th friend is removed until only one friend remains.

Return the position of the winner.

**Example:** \`n = 5\`, \`k = 2\`

Remove 2nd (friend 2), then starting from 3 remove the 2nd (friend 4), then starting from 5 remove 2nd (friend 1), then starting from 3 remove 2nd (friend 5). Winner is **3**.

This is the **Josephus problem**. The recurrence is:
\`W(n, k) = (W(n-1, k) + k) mod n\`, with \`W(1, k) = 0\` (0-indexed), then convert to 1-indexed.`,
  constraints: [
    '1 <= k <= n <= 500',
  ],
  examples: [
    {
      input: 'n = 5, k = 2',
      output: '3',
      explanation: 'Friends are removed in order 2,4,1,5. Survivor is friend 3.',
    },
    {
      input: 'n = 6, k = 5',
      output: '1',
      explanation: 'Friends are removed in order 5,4,6,2,3. Survivor is friend 1.',
    },
  ],
  hints: [
    'This is the Josephus problem. Use the recurrence: f(1) = 0, f(n) = (f(n-1) + k) % n (0-indexed positions).',
    'Start with f(1) = 0. For each i from 2 to n, compute f(i) = (f(i-1) + k) % i.',
    'Convert the 0-indexed result to 1-indexed by adding 1.',
  ],
  functionName: 'findTheWinner',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function findTheWinner(n, k) {

}`,
    python: `def findTheWinner(n, k):
    pass
`,
  },
  visibleTests: [
    { args: [5, 2], expected: 3 },
    { args: [6, 5], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [2, 1], expected: 2 },
    { args: [3, 3], expected: 2 },
    { args: [4, 2], expected: 1 },
    { args: [10, 3], expected: 4 },
    { args: [500, 17], expected: 500 },
  ],
};
