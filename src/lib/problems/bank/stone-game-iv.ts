import type { Problem } from '../types';

export const problem: Problem = {
  id: 'stone-game-iv',
  title: 'Stone Game IV',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'math'],
  description: `Alice and Bob take turns playing a game, with Alice starting first.

Initially, there are \`n\` stones in a pile. On each player's turn, that player makes a **move** consisting of removing any **non-zero square number** of stones in the pile.

Also, if a player cannot make a move, he/she loses the game.

Given a positive integer \`n\`, return \`true\` if and only if Alice wins the game otherwise return \`false\`, assuming both players play optimally.`,
  constraints: ['1 <= n <= 10^5'],
  examples: [
    { input: 'n = 1', output: 'true', explanation: 'Alice removes 1 stone and wins.' },
    { input: 'n = 2', output: 'false', explanation: 'Alice can only remove 1 stone, leaving Bob with 1. Bob wins.' },
    { input: 'n = 4', output: 'true', explanation: 'Alice removes 4 stones and wins.' },
  ],
  hints: [
    'Define dp[i] = true if the current player wins when there are i stones remaining.',
    'dp[0] = false (current player loses — no moves available).',
    'dp[i] = true if there exists some perfect square k² ≤ i such that dp[i - k²] is false (opponent loses after our move).',
    'Precompute all perfect squares up to n and iterate through them for each dp[i].',
  ],
  functionName: 'winnerSquareGame',
  params: ['n'],
  starterCode: {
    javascript: 'function winnerSquareGame(n) {\n\n}\n',
    typescript: "function winnerSquareGame(n: number): boolean {\n\n}",

    python: 'def winnerSquareGame(n):\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: true },
    { args: [2], expected: false },
    { args: [4], expected: true },
  ],
  hiddenTests: [
    { args: [7], expected: false },
    { args: [17], expected: false },
    { args: [100], expected: true },
    { args: [5], expected: false },
    { args: [9], expected: true },
  ],
};
