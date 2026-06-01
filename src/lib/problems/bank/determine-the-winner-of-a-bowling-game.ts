import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-the-winner-of-a-bowling-game',
  title: 'Determine the Winner of a Bowling Game',
  difficulty: 'easy',
  tags: ['arrays', 'simulation'],
  description: `You are given two **0-indexed** integer arrays \`player1\` and \`player2\`, representing the number of pins knocked down in each turn by two players.

The bowling scoring rule is:
- If a player knocks down exactly **10** pins in one of their **previous two** turns, their score for the **current** turn is **doubled**.
- Otherwise their score is the raw pin count.

Return:
- \`1\` if **player1** has a strictly greater total score,
- \`2\` if **player2** has a strictly greater total score,
- \`0\` if the scores are **equal**.`,
  constraints: [
    'n == player1.length == player2.length',
    '1 <= n <= 1000',
    '0 <= player1[i], player2[i] <= 10',
  ],
  examples: [
    {
      input: 'player1 = [4,10,7,9], player2 = [6,5,2,3]',
      output: '1',
      explanation:
        'player1: 4+10+14+18=46 (turn 2 doubled by turn-1 strike; turn 3 doubled by turn-1 strike). player2: 16. player1 wins.',
    },
    {
      input: 'player1 = [3,5,7,6], player2 = [8,10,10,2]',
      output: '2',
      explanation:
        'player2 turns 2 and 3 are doubled. Total player2 = 42, player1 = 21. player2 wins.',
    },
    {
      input: 'player1 = [2,3], player2 = [4,1]',
      output: '0',
      explanation: 'Both total 5. Tie.',
    },
  ],
  hints: [
    'Write a helper scoreOf(turns) that sums the doubled scores.',
    'For turn i: check if turns[i-1] === 10 or turns[i-2] === 10 (with bounds check).',
    'If either was a strike, multiply turns[i] by 2.',
  ],
  functionName: 'isWinner',
  params: ['player1', 'player2'],
  starterCode: {
    javascript: 'function isWinner(player1, player2) {\n\n}\n',
    typescript: 'function isWinner(player1: number[], player2: number[]): number {\n\n}\n',
    python: 'def isWinner(player1, player2):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 10, 7, 9], [6, 5, 2, 3]], expected: 1 },
    { args: [[3, 5, 7, 6], [8, 10, 10, 2]], expected: 2 },
    { args: [[2, 3], [4, 1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1, 10, 1], [1, 1, 1, 1, 1]], expected: 1 },
    { args: [[10, 10, 10], [10, 5, 5]], expected: 1 },
    { args: [[5], [5]], expected: 0 },
    { args: [[10], [9]], expected: 1 },
    { args: [[0, 0], [0, 0]], expected: 0 },
    { args: [[10, 0, 0], [0, 10, 0]], expected: 0 },
  ],
};
