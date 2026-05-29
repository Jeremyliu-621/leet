import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-energy-boost-from-two-drinks',
  title: 'Maximum Energy Boost From Two Drinks',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You have two energy drink arrays \`energyDrinkA\` and \`energyDrinkB\` of the same length \`n\`.

On each turn you must drink one of the two drinks. You can switch drinks at any turn, but switching means you **skip that turn** (gain no energy). The goal is to maximize total energy collected over \`n\` turns.

More formally:
- If you drink A (or B) at turn \`i\`, you gain \`energyDrinkA[i]\` (or \`energyDrinkB[i]\`).
- To switch from A to B (or B to A) at turn \`i\`, you gain **0** for turn \`i\`, and from turn \`i+1\` you drink the other type.

Return the **maximum total energy** you can collect.`,
  constraints: [
    '`1 <= n <= 10^5`',
    '`1 <= energyDrinkA[i], energyDrinkB[i] <= 10^5`',
  ],
  examples: [
    {
      input: 'energyDrinkA = [4,1,1], energyDrinkB = [1,1,3]',
      output: '7',
      explanation: 'Drink A at turn 0 (4), switch at turn 1 (skip), drink B at turn 2 (3). Total = 7.',
    },
    {
      input: 'energyDrinkA = [1,3,1,1,1], energyDrinkB = [3,1,3,1,3]',
      output: '11',
      explanation: 'Drink B every turn: 3+1+3+1+3 = 11. No switching needed.',
    },
  ],
  hints: [
    'Define dp[i][0] = max energy when drinking A at turn i, dp[i][1] = max energy when drinking B at turn i.',
    'To drink A at turn i: either you drank A at turn i−1 (no switch), or you drank B at turn i−2 (switched at turn i−1, skipping it).',
    'dp[i][0] = max(dp[i−1][0] + A[i], dp[i−2][1] + A[i]), similarly for dp[i][1].',
    'Answer is max(dp[n−1][0], dp[n−1][1]).',
  ],
  functionName: 'maxEnergyBoost',
  params: ['energyDrinkA', 'energyDrinkB'],
  starterCode: {
    javascript: `function maxEnergyBoost(energyDrinkA, energyDrinkB) {

}`,
    typescript: `function maxEnergyBoost(energyDrinkA: number[], energyDrinkB: number[]): number {

}`,
    python: `def maxEnergyBoost(energyDrinkA, energyDrinkB):
    pass`,
  },
  visibleTests: [
    { args: [[4, 1, 1], [1, 1, 3]], expected: 7 },
    { args: [[1, 3, 1, 1, 1], [3, 1, 3, 1, 3]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1], [2]], expected: 2 },
    { args: [[5, 1], [1, 5]], expected: 6 },
    { args: [[10, 0, 10], [0, 10, 0]], expected: 20 },
    { args: [[1, 1, 1], [1, 1, 1]], expected: 3 },
    { args: [[100, 1, 100], [1, 100, 1]], expected: 201 },
  ],
};
