import type { Problem } from '../types';

export const problem: Problem = {
  id: 'nim-game',
  title: 'Nim Game',
  difficulty: 'easy',
  tags: ['math'],
  description: `You and your friend play a game with a pile of **n** stones. On each turn the current player removes **1, 2, or 3** stones. The player who removes the last stone **wins**.

Given the number of stones \`n\`, return \`true\` if you can **guarantee a win** assuming you go first and both players play optimally.

**Key insight:** Think about what values of \`n\` are losing positions when both players play perfectly.`,
  constraints: ['1 <= n <= 2^31 - 1'],
  examples: [
    {
      input: 'n = 4',
      output: 'false',
      explanation:
        'With 4 stones, no matter if you take 1, 2, or 3, your opponent can always take the remainder and win.',
    },
    {
      input: 'n = 1',
      output: 'true',
      explanation: 'Take the only stone — you win immediately.',
    },
    {
      input: 'n = 5',
      output: 'true',
      explanation: 'Take 1 stone, leaving 4 for your opponent (a losing position for them).',
    },
  ],
  hints: [
    'Think about the base cases: n = 1, 2, 3 are all wins. What about n = 4?',
    'If n = 4, any move leaves 1, 2, or 3 stones — all wins for your opponent. So n = 4 is a loss.',
    'The pattern repeats every 4 stones. You lose if and only if n is a multiple of 4.',
  ],
  functionName: 'canWinNim',
  params: ['n'],
  starterCode: {
    javascript: 'function canWinNim(n) {\n  // your code here\n}\n',
    typescript: "function canWinNim(n: number): boolean {\n  // your code here\n}",

    python: 'def canWinNim(n):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [4], expected: false },
    { args: [1], expected: true },
    { args: [5], expected: true },
  ],
  hiddenTests: [
    { args: [2], expected: true },
    { args: [3], expected: true },
    { args: [8], expected: false },
    { args: [7], expected: true },
    { args: [12], expected: false },
    { args: [13], expected: true },
    { args: [2147483647], expected: true },
  ],
};
