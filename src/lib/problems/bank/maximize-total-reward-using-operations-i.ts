import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-total-reward-using-operations-i',
  title: 'Maximize Total Reward Using Operations I',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given a **0-indexed** integer array \`rewardValues\` of length \`n\`, representing the values of rewards.

Initially, your total reward \`x\` is \`0\`, and all indices are **unmarked**. You are allowed to perform the following operation any number of times:

- Choose an index \`i\` from the range \`[0, n - 1]\` that is **not** marked.
- If \`rewardValues[i]\` is **greater** than your current total reward \`x\`, then add \`rewardValues[i]\` to \`x\` (i.e., \`x += rewardValues[i]\`), and mark the index \`i\`.

Return an integer denoting the **maximum** total reward you can collect by performing the operations optimally.`,
  constraints: [
    '1 <= rewardValues.length <= 2000',
    '1 <= rewardValues[i] <= 2000',
  ],
  examples: [
    {
      input: 'rewardValues = [1,1,3,3]',
      output: '4',
      explanation: 'Pick index 0 (value 1, total=1). Pick index 2 (value 3>1, total=4). No further picks possible.',
    },
    {
      input: 'rewardValues = [1,6,4,3,2]',
      output: '11',
      explanation: 'Sorted: [1,2,3,4,6]. Pick 1→2→3→4→? (total=10, 6≤10 can\'t). Or: 1→4→6 = 11.',
    },
    {
      input: 'rewardValues = [1,2,3]',
      output: '5',
      explanation: 'Sorted: [1,2,3]. Pick 1 (total=1), pick 2 (2>1, total=3), pick 3? (3≥3, can\'t). Or pick 2,3: total=5. Max=5.',
    },
  ],
  hints: [
    'Level 1: Elements must be chosen in increasing order (since you can only pick x_i > current total). Sort first.',
    'Level 2: Use 0/1 knapsack DP: dp[j]=1 if sum j is achievable. For each value r, iterate j from r-1 down to 0; if dp[j]=1 then dp[j+r]=1.',
    'Level 3: The answer is the maximum j with dp[j]=1. DP size is at most 2*max_value. O(n * max_val) total.',
  ],
  functionName: 'maxTotalReward',
  params: ['rewardValues'],
  starterCode: {
    javascript: `function maxTotalReward(rewardValues) {
  rewardValues.sort((a, b) => a - b);
  const maxVal = rewardValues[rewardValues.length - 1];
  const dp = new Uint8Array(2 * maxVal + 1);
  dp[0] = 1;
  for (const r of rewardValues) {
    for (let j = r - 1; j >= 0; j--) {
      if (dp[j]) dp[j + r] = 1;
    }
  }
  for (let j = dp.length - 1; j >= 0; j--) if (dp[j]) return j;
  return 0;
}`,
    typescript: `function maxTotalReward(rewardValues: number[]): number {
  rewardValues.sort((a, b) => a - b);
  const maxVal = rewardValues[rewardValues.length - 1]!;
  const dp = new Uint8Array(2 * maxVal + 1);
  dp[0] = 1;
  for (const r of rewardValues) {
    for (let j = r - 1; j >= 0; j--) {
      if (dp[j]) dp[j + r] = 1;
    }
  }
  for (let j = dp.length - 1; j >= 0; j--) if (dp[j]) return j;
  return 0;
}`,
    python: `def maxTotalReward(rewardValues):
    rewardValues.sort()
    max_val = rewardValues[-1]
    dp = [False] * (2 * max_val + 1)
    dp[0] = True
    for r in rewardValues:
        for j in range(r - 1, -1, -1):
            if dp[j]:
                dp[j + r] = True
    for j in range(len(dp) - 1, -1, -1):
        if dp[j]:
            return j
    return 0`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 3]], expected: 4 },
    { args: [[1, 6, 4, 3, 2]], expected: 11 },
    { args: [[1, 2, 3]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[1, 3, 5]], expected: 9 },
    { args: [[2000]], expected: 2000 },
    { args: [[3, 5, 7]], expected: 12 },
    { args: [[1, 1, 1, 1]], expected: 1 },
  ],
};
