import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-coins-heroes-can-collect',
  title: 'Maximum Coins Heroes Can Collect',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `There are \`n\` heroes and \`m\` monsters. You are given:
- \`heroes[i]\`: the power of hero \`i\`
- \`health[j]\`: the health of monster \`j\`
- \`coins[j]\`: the coins dropped by monster \`j\`

Hero \`i\` can defeat monster \`j\` if and only if \`heroes[i] >= health[j]\`. A hero collects the coins from **every** monster they can defeat.

Return an array \`result\` of length \`n\` where \`result[i]\` is the total coins hero \`i\` can collect.`,
  constraints: [
    '1 <= n == heroes.length <= 10^5',
    '1 <= m == health.length == coins.length <= 10^5',
    '1 <= heroes[i], health[j] <= 10^9',
    '1 <= coins[j] <= 10^4',
  ],
  examples: [
    {
      input: 'heroes = [1,4,2], health = [1,1,4,4], coins = [1,3,5,2]',
      output: '[4,11,4]',
      explanation:
        'Hero 0 (power=1) beats health ≤ 1: coins = 1+3 = 4. Hero 1 (power=4) beats all: 1+3+5+2 = 11. Hero 2 (power=2) beats health ≤ 2: 1+3 = 4.',
    },
    {
      input: 'heroes = [5], health = [1,2,3], coins = [10,20,30]',
      output: '[60]',
      explanation: 'Hero beats all 3 monsters. Total = 10+20+30 = 60.',
    },
  ],
  hints: [
    'Sort the monsters by health. Compute a prefix sum of coins over the sorted order.',
    'For each hero, binary search for the rightmost monster index with health ≤ heroes[i].',
    'The total coins = prefix[index + 1] where prefix[i] is the sum of the first i sorted coins.',
  ],
  functionName: 'maximumCoins',
  params: ['heroes', 'health', 'coins'],
  starterCode: {
    javascript: `function maximumCoins(heroes, health, coins) {\n  \n}`,
    typescript: `function maximumCoins(heroes: number[], health: number[], coins: number[]): number[] {\n  \n}`,
    python: `def maximumCoins(heroes, health, coins):\n    `,
  },
  visibleTests: [
    { args: [[1, 4, 2], [1, 1, 4, 4], [1, 3, 5, 2]], expected: [4, 11, 4] },
    { args: [[5], [1, 2, 3], [10, 20, 30]], expected: [60] },
    { args: [[1], [5], [100]], expected: [0] },
  ],
  hiddenTests: [
    { args: [[1, 4, 2], [1, 1, 4, 4], [1, 3, 5, 2]], expected: [4, 11, 4] },
    { args: [[5], [1, 2, 3], [10, 20, 30]], expected: [60] },
    { args: [[1], [5], [100]], expected: [0] },
    { args: [[3, 5, 7], [3, 5, 7], [1, 2, 3]], expected: [1, 3, 6] },
    { args: [[10], [1, 10, 100], [5, 15, 25]], expected: [20] },
    { args: [[100, 1], [50, 50], [7, 7]], expected: [14, 0] },
    { args: [[2, 2], [1, 1, 1], [10, 20, 30]], expected: [60, 60] },
    { args: [[1, 2, 3], [1, 2, 3], [100, 200, 300]], expected: [100, 300, 600] },
  ],
};
