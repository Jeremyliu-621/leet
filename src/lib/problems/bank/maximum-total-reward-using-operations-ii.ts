import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-total-reward-using-operations-ii',
  title: 'Maximum Total Reward Using Operations II',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** integer array \`rewardValues\` of length \`n\`, representing the values of rewards.

Initially, your total reward \`x\` is \`0\`, and all indices are **unmarked**. You are allowed to perform the following operation any number of times:

- Choose an index \`i\` that is **unmarked**.
- If \`rewardValues[i]\` is **greater** than your current total reward \`x\`, then add \`rewardValues[i]\` to \`x\` (i.e., \`x = x + rewardValues[i]\`), and **mark** index \`i\`.

Return an integer denoting the **maximum** total reward you can collect by performing the operations optimally.`,
  constraints: [
    '1 <= rewardValues.length <= 50000',
    '1 <= rewardValues[i] <= 50000',
  ],
  examples: [
    {
      input: 'rewardValues = [1,1,3,3]',
      output: '4',
      explanation: 'Mark index 0 (value 1, x=1), then mark index 2 (value 3 > 1, x=4). No more valid moves.',
    },
    {
      input: 'rewardValues = [1,6,4,3,2]',
      output: '11',
      explanation: 'Sorted unique: [1,2,3,4,6]. Pick 1 (x=1), pick 4 (x=5), pick 6 (x=11).',
    },
    {
      input: 'rewardValues = [1,2,3,10]',
      output: '15',
      explanation: 'Pick 2 (x=2), pick 3 (x=5), pick 10 (x=15). Total = 15.',
    },
  ],
  hints: [
    'Sort and deduplicate rewardValues (duplicates beyond the first add nothing since only one index per value matters for optimal ordering). Process values in increasing order.',
    'Use a BigInt bitset DP where bit j being set means total reward j is achievable. Initially dp = 1n (only total 0 reachable).',
    'For each value v: dp |= (dp & ((1n << BigInt(v)) - 1n)) << BigInt(v). The mask ((1n << v) - 1) selects only totals strictly less than v (the condition for picking v). After processing all values, the answer is the position of the highest set bit in dp.',
  ],
  functionName: 'maxTotalReward',
  params: ['rewardValues'],
  starterCode: {
    javascript: `function maxTotalReward(rewardValues) {

}`,
    typescript: 'function maxTotalReward(rewardValues: number[]): number {\n\n}',
    python: `def maxTotalReward(rewardValues):
    pass`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 3]], expected: 4 },
    { args: [[1, 6, 4, 3, 2]], expected: 11 },
    { args: [[1, 2, 3, 10]], expected: 15 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[5]], expected: 5 },
    { args: [[1, 2]], expected: 3 },
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[2, 2, 2]], expected: 2 },
    { args: [[1, 3, 5, 7]], expected: 13 },
    { args: [[1, 2, 3, 4, 5]], expected: 9 },
    { args: [[2, 3, 5]], expected: 8 },
    { args: [[10, 20, 30]], expected: 50 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
  ],
};
