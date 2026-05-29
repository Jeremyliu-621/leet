import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-winning-player-in-coin-game',
  title: 'Find the Winning Player in Coin Game',
  difficulty: 'easy',
  tags: ['math', 'simulation'],
  description: `You are given two positive integers \`x\` and \`y\`, representing the number of coins with values **75** and **10** respectively.

Alice and Bob are playing a game. Each round of the game consists of the following steps:

1. Alice picks one coin with value 75.
2. Bob picks three coins with value 10.

The game ends when someone cannot make their pick. The person who **cannot** pick loses.

Return \`"Alice"\` if Alice wins the game, otherwise return \`"Bob"\`.`,
  constraints: [
    '1 <= x, y <= 100',
  ],
  examples: [
    {
      input: 'x = 2, y = 7',
      output: '"Bob"',
      explanation: 'The game plays out: Round 1 — Alice takes 1×75 (x=1), Bob takes 3×10 (y=4). Round 2 — Alice takes 1×75 (x=0), Bob takes 3×10 (y=1). Round 3 — Alice cannot pick (x=0), so Alice loses. Bob wins.',
    },
    {
      input: 'x = 4, y = 11',
      output: '"Alice"',
      explanation: 'floor(11/3)=3, but x=4 > 3, so Bob runs out of coins in round 4. Alice wins.',
    },
  ],
  hints: [
    'How many full rounds can each player sustain alone?',
    'Alice can sustain x rounds (one 75-coin each). Bob can sustain floor(y/3) rounds (three 10-coins each).',
    'The player who runs out first loses. Compare x and floor(y/3).',
    'If floor(y/3) < x, Bob runs out while Alice still has coins — Alice wins.',
  ],
  functionName: 'winningPlayer',
  params: ['x', 'y'],
  starterCode: {
    javascript: `function winningPlayer(x, y) {\n  \n}`,
    typescript: `function winningPlayer(x: number, y: number): string {\n  \n}`,
    python: `def winningPlayer(x, y):\n    `,
  },
  visibleTests: [
    { args: [2, 7], expected: 'Bob' },
    { args: [4, 11], expected: 'Alice' },
    { args: [1, 3], expected: 'Bob' },
  ],
  hiddenTests: [
    { args: [2, 7], expected: 'Bob' },
    { args: [4, 11], expected: 'Alice' },
    { args: [1, 3], expected: 'Bob' },
    { args: [1, 2], expected: 'Alice' },
    { args: [5, 15], expected: 'Bob' },
    { args: [5, 14], expected: 'Alice' },
    { args: [100, 300], expected: 'Bob' },
    { args: [100, 299], expected: 'Alice' },
  ],
};
