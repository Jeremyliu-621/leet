import type { Problem } from '../types';

export const problem: Problem = {
  id: 'divisor-game',
  title: 'Divisor Game',
  difficulty: 'easy',
  tags: ['math', 'dynamic-programming'],
  description: `Alice and Bob take turns playing a game, with Alice starting first.

Initially, there is a number \`n\` on the chalkboard. On each player's turn, that player makes a move consisting of:

- Choosing any \`x\` with \`0 < x < n\` and \`n % x == 0\`.
- Replacing the number \`n\` on the chalkboard with \`n - x\`.

If a player cannot make a move, they lose the game.

Return \`true\` if and only if Alice wins the game, assuming both players play optimally.`,
  constraints: ['`1 <= n <= 1000`'],
  examples: [
    {
      input: 'n = 2',
      output: 'true',
      explanation: 'Alice chooses x=1, replaces n with 1. Bob cannot move (no x with 0<x<1). Alice wins.',
    },
    {
      input: 'n = 3',
      output: 'false',
      explanation: 'Alice must choose x=1, n becomes 2. Bob chooses x=1, n becomes 1. Alice cannot move. Bob wins.',
    },
  ],
  hints: [
    'Alice wins if and only if n is even. Can you prove this by induction or by observing the pattern for small n?',
    "If n is even, Alice subtracts 1 (a divisor of any even n), leaving Bob with an odd number. From any odd number the only move leaves an even number for Alice again — so Alice always wins when n is even.",
    'return n%2===0;',
  ],
  functionName: 'divisorGame',
  params: ['n'],
  starterCode: {
    javascript: 'function divisorGame(n) {\n  \n}\n',
    typescript: "function divisorGame(n: number): boolean {\n  \n}",

    python: 'def divisorGame(n):\n    pass\n',
  },
  visibleTests: [
    { args: [2], expected: true },
    { args: [3], expected: false },
    { args: [4], expected: true },
  ],
  hiddenTests: [
    { args: [1], expected: false },
    { args: [6], expected: true },
    { args: [1000], expected: true },
    { args: [999], expected: false },
    { args: [100], expected: true },
  ],
};
