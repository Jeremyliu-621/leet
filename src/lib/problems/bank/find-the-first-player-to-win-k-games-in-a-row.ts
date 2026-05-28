import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-first-player-to-win-k-games-in-a-row',
  title: 'Find the First Player to Win K Games in a Row',
  difficulty: 'medium',
  tags: ['arrays', 'simulation'],
  description: `A competition consists of \`n\` players numbered \`0\` to \`n - 1\`. Given is a 0-indexed integer array \`skills\` of length \`n\` where \`skills[i]\` represents the skill level of player \`i\`, and a positive integer \`k\`.

All players stand in a queue with player \`0\` in front and player \`n - 1\` at the back.

Each round, the first two players in the queue play a game. The player with the **higher** skill level wins and stays at the front of the queue. The other player goes to the back of the queue. The winning player's **consecutive wins** counter is incremented; the losing player's counter resets to 0.

The contest ends when any player has won \`k\` games **consecutively**.

Return the **index** of the first player to win \`k\` consecutive games.

**Note:** All \`skills[i]\` values are distinct.`,
  constraints: [
    '`n == skills.length`',
    '`2 <= n <= 10^5`',
    '`1 <= k <= 10^9`',
    '`1 <= skills[i] <= 10^6`',
    'All values of `skills` are distinct.',
  ],
  examples: [
    {
      input: 'skills = [4,2,6,3,9], k = 2',
      output: '2',
      explanation: 'Round 1: 0(4) vs 1(2) → 0 wins (streak=1). Round 2: 0(4) vs 2(6) → 2 wins (streak=1). Round 3: 2(6) vs 3(3) → 2 wins (streak=2). Player 2 wins first.',
    },
    {
      input: 'skills = [3,5,7,1,6,0,1], k = 2',
      output: '2',
    },
    {
      input: 'skills = [2,5,4], k = 3',
      output: '1',
    },
  ],
  hints: [
    'Simulate the queue with the two front players competing each round.',
    'Key insight: the global maximum-skill player will eventually win all games. Once they win their first game (after at most n-1 rounds), they never lose again.',
    'If k >= n, the global maximum must be the answer. Otherwise simulate: the first player to accumulate k consecutive wins is the answer.',
  ],
  functionName: 'findWinningPlayer',
  params: ['skills', 'k'],
  starterCode: {
    javascript: `function findWinningPlayer(skills, k) {

}`,
    typescript: 'function findWinningPlayer(skills: number[], k: number): number {\n\n}',
    python: `def findWinningPlayer(skills, k):
    pass`,
  },
  visibleTests: [
    { args: [[4, 2, 6, 3, 9], 2], expected: 2 },
    { args: [[3, 5, 7, 1, 6, 0, 1], 2], expected: 2 },
    { args: [[2, 5, 4], 3], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 9], 1], expected: 1 },
    { args: [[1, 2, 3], 1], expected: 1 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 4 },
    { args: [[5, 4, 3, 2, 1], 2], expected: 0 },
    { args: [[1, 2], 1000000000], expected: 1 },
    { args: [[4, 3, 2, 1, 5], 2], expected: 0 },
  ],
};
