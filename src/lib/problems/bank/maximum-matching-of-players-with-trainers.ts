import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-matching-of-players-with-trainers',
  title: 'Maximum Matching of Players With Trainers',
  difficulty: 'medium',
  tags: ['arrays', 'two-pointers'],
  description: `You are given a **0-indexed** integer array \`players\`, where \`players[i]\` represents the **ability** of the \`i\`th player. You are also given a **0-indexed** integer array \`trainers\`, where \`trainers[j]\` represents the **training capacity** of the \`j\`th trainer.

The \`i\`th player can **match** with the \`j\`th trainer if the player's ability is **less than or equal to** the trainer's training capacity. Additionally, the \`i\`th player can be matched with at most one trainer, and the \`j\`th trainer can be matched with at most one player.

Return *the **maximum** number of matchings between* \`players\` *and* \`trainers\` *that satisfy these conditions.*`,
  constraints: [
    '`1 <= players.length, trainers.length <= 10^5`',
    '`1 <= players[i], trainers[j] <= 10^9`',
  ],
  examples: [
    {
      input: 'players = [4,7,9], trainers = [8,2,5,8]',
      output: '2',
      explanation:
        'Sort both arrays. Match player 4 with trainer 5, and player 7 with trainer 8. Player 9 cannot be matched. Total matchings: 2.',
    },
    {
      input: 'players = [1,1,1], trainers = [10]',
      output: '1',
      explanation:
        'The single trainer (capacity 10) can match any one player. Maximum matchings: 1.',
    },
  ],
  hints: [
    'Sort both `players` and `trainers` in non-decreasing order.',
    'Use two pointers: for each player (in sorted order), find the smallest available trainer that can accommodate them.',
    `\`\`\`js
function matchPlayersAndTrainers(players, trainers) {
  players.sort((a, b) => a - b);
  trainers.sort((a, b) => a - b);
  let i = 0, j = 0, count = 0;
  while (i < players.length && j < trainers.length) {
    if (players[i] <= trainers[j]) { count++; i++; }
    j++;
  }
  return count;
}
\`\`\``,
  ],
  functionName: 'matchPlayersAndTrainers',
  params: ['players', 'trainers'],
  starterCode: {
    javascript: `function matchPlayersAndTrainers(players, trainers) {

}`,
    typescript: `function matchPlayersAndTrainers(players: number[], trainers: number[]): number {

}`,
    python: `def matchPlayersAndTrainers(players, trainers):
    pass`,
  },
  visibleTests: [
    { args: [[4, 7, 9], [8, 2, 5, 8]], expected: 2 },
    { args: [[1, 1, 1], [10]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[5], [3]], expected: 0 },
    { args: [[1, 2, 3], [1, 2, 3]], expected: 3 },
    { args: [[10], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: 1 },
    { args: [[3, 5, 7], [2, 4, 6]], expected: 2 },
    { args: [[1, 2, 3, 4, 5], [5, 5, 5, 5, 5]], expected: 5 },
    { args: [[5, 5, 5, 5], [1, 2, 3, 4]], expected: 0 },
    { args: [[1, 3, 5, 7], [2, 4, 6, 8]], expected: 4 },
    { args: [[6, 3, 1], [2, 4, 7]], expected: 3 },
  ],
};
