import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-reward-using-operations-i',
  title: 'Maximum Total Reward Using Operations I',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** integer array \`rewardValues\` of length \`n\`, representing the values of rewards.

Initially, your total reward \`x\` is \`0\`, and all indices are **unmarked**. You are allowed to perform the following operation any number of times:

- Choose an index \`i\` from the range \`[0, n - 1]\` that is **unmarked**.
- If \`rewardValues[i]\` is **greater** than your current total reward \`x\`, then add \`rewardValues[i]\` to \`x\` (i.e., \`x = x + rewardValues[i]\`), and **mark** index \`i\`.

Return an integer denoting the **maximum** total reward you can collect by performing the operations optimally.`,
  constraints: [
    '1 <= rewardValues.length <= 2000',
    '1 <= rewardValues[i] <= 2000',
  ],
  examples: [
    {
      input: 'rewardValues = [1,1,3,3]',
      output: '4',
      explanation: 'Mark index 0: x = 0 + 1 = 1. Mark index 2: 3 > 1, x = 1 + 3 = 4. No more valid moves.',
    },
    {
      input: 'rewardValues = [1,6,4,3,2]',
      output: '11',
      explanation: 'Sort to [1,2,3,4,6]. Pick 1 (x=1), pick 4 (x=5), pick 6 (x=11).',
    },
  ],
  hints: [
    'Sort the array and deduplicate, then think greedily.',
    'After sorting, you want to pick values that keep building on each other.',
    'Use DP where dp[j] = true means total reward j is achievable. For each value v in sorted order, if dp[j] is true and j < v, then dp[j+v] becomes true.',
  ],
  functionName: 'maxTotalReward',
  params: ['rewardValues'],
  starterCode: {
    javascript: `function maxTotalReward(rewardValues) {

}`,
    typescript: "function maxTotalReward(rewardValues: number[]): number {\n\n}",

    python: `def maxTotalReward(rewardValues):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 3]], expected: 4 },
    { args: [[1, 6, 4, 3, 2]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5]], expected: 5 },
    { args: [[1, 2]], expected: 3 },
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[2, 2, 2]], expected: 2 },
    { args: [[1, 3, 5, 7]], expected: 13 },
  ],
};
