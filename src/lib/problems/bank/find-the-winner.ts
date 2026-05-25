import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-winner',
  title: 'Find the Winner of the Circular Game',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There are \`n\` friends in a circle numbered \`1\` to \`n\`. Starting from friend \`1\`, counting clockwise, every \`k\`th friend is eliminated. The last remaining friend wins.

Return the winner's number (1-indexed).

This is a classic **Josephus problem**.`,
  constraints: ['1 <= k <= n <= 500'],
  examples: [
    { input: 'n = 5, k = 2', output: '3', explanation: 'Eliminate: 2, 4, 1, 5. Winner is 3.' },
    { input: 'n = 6, k = 5', output: '1', explanation: 'Eliminate: 5, 4, 6, 2, 3. Winner is 1.' },
  ],
  hints: [
    'Level 1: Simulate the process using an array or list and repeatedly remove every k-th element.',
    'Level 2: Use the Josephus recurrence: f(1,k)=0; f(n,k)=(f(n-1,k)+k)%n. The winner is f(n,k)+1 (1-indexed).',
    'Level 3: let pos=0;for(let i=2;i<=n;i++)pos=(pos+k)%i;return pos+1;',
  ],
  functionName: 'findTheWinner',
  params: ['n', 'k'],
  starterCode: {
    javascript: 'function findTheWinner(n, k) {\n  // your code here\n}\n',
    python: 'def findTheWinner(n, k):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [5, 2], expected: 3 },
    { args: [6, 5], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 1 },
    { args: [3, 1], expected: 3 },
    { args: [3, 3], expected: 2 },
    { args: [10, 3], expected: 4 },
  ],
};
