import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-total-reward-using-operations-ii',
  title: 'Maximize Total Reward Using Operations II',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'bit-manipulation'],
  description: `You are given a **0-indexed** integer array \`rewardValues\` of length \`n\`, representing the values of rewards.

Initially, your total reward \`x\` is \`0\`, and all indices are **unmarked**. You are allowed to perform the following operation any number of times:

- Choose an index \`i\` from the range \`[0, n - 1]\` that is **not** marked.
- If \`rewardValues[i]\` is **greater** than your current total reward \`x\`, then add \`rewardValues[i]\` to \`x\` (i.e., \`x += rewardValues[i]\`), and mark the index \`i\`.

Return an integer denoting the **maximum** total reward you can collect by performing the operations optimally.

**Note:** This is the same problem as Maximize Total Reward Using Operations I, but with larger constraints (up to 5 × 10^4), requiring a bitset-based DP rather than the direct O(n × maxVal) approach.`,
  constraints: [
    '1 <= rewardValues.length <= 5 × 10^4',
    '1 <= rewardValues[i] <= 5 × 10^4',
  ],
  examples: [
    {
      input: 'rewardValues = [1,1,3,3]',
      output: '4',
      explanation: 'Pick index 0 (value 1, x=1). Pick index 2 (3>1, x=4). No further picks possible.',
    },
    {
      input: 'rewardValues = [1,6,4,3,2]',
      output: '11',
      explanation: 'Optimal sequence: pick 1 (x=1), pick 4 (4>1, x=5), pick 6 (6>5, x=11).',
    },
  ],
  hints: [
    'Level 1: As in Part I, deduplicate and sort values. The key DP insight is: dp[j]=1 if total reward j is achievable. For each value r, iterate sums j < r and set dp[j+r]=1 if dp[j]=1.',
    'Level 2: For large maxVal (5×10^4), the dp array has up to 10^5 bits. Represent it as a BigInt (JS) or Python int — both support arbitrary-precision bit ops. Per step: dp |= (dp & ((1n << r) - 1n)) << r, which processes all valid transitions in O(maxVal/64) time.',
    'Level 3: After processing all values, the answer is the position of the highest set bit in dp. In JS: dp.toString(2).length - 1. In Python: dp.bit_length() - 1. Total complexity O(n × maxVal / 64).',
  ],
  functionName: 'maxTotalReward',
  params: ['rewardValues'],
  starterCode: {
    javascript: `function maxTotalReward(rewardValues) {
  const sorted = [...new Set(rewardValues)].sort((a, b) => a - b);
  let dp = 1n; // bit j set means sum j is reachable
  for (const r of sorted) {
    const rb = BigInt(r);
    // mask: bits 0..r-1 (valid current sums strictly less than r)
    dp |= (dp & ((1n << rb) - 1n)) << rb;
  }
  return dp.toString(2).length - 1;
}`,
    typescript: `function maxTotalReward(rewardValues: number[]): number {
  const sorted = [...new Set(rewardValues)].sort((a, b) => a - b);
  let dp = 1n;
  for (const r of sorted) {
    const rb = BigInt(r);
    dp |= (dp & ((1n << rb) - 1n)) << rb;
  }
  return dp.toString(2).length - 1;
}`,
    python: `def maxTotalReward(rewardValues):
    unique = sorted(set(rewardValues))
    dp = 1  # Python ints are arbitrary precision; bit j set means sum j is reachable
    for r in unique:
        dp |= (dp & ((1 << r) - 1)) << r
    return dp.bit_length() - 1`,
  },
  visibleTests: [
    { args: [[1, 1, 3, 3]], expected: 4 },
    { args: [[1, 6, 4, 3, 2]], expected: 11 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 3 },
    { args: [[1, 3, 5]], expected: 9 },
    { args: [[2000]], expected: 2000 },
    { args: [[3, 5, 7]], expected: 12 },
    { args: [[1, 1, 1, 1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 5 },
    { args: [[2, 4, 8]], expected: 14 },
  ],
};
