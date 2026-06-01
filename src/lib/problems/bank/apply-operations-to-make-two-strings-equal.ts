import type { Problem } from '../types';

export const problem: Problem = {
  id: 'apply-operations-to-make-two-strings-equal',
  title: 'Apply Operations to Make Two Strings Equal',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given two **0-indexed** binary strings \`s1\` and \`s2\`, both of length \`n\`, and a positive integer \`x\`.

You can perform the following operations on the string \`s1\` any number of times:

- **Operation 1:** Choose two indices \`i\` and \`j\`, and flip both \`s1[i]\` and \`s1[j]\`. The cost of this operation is **1**.
  *(Restriction: \`|i - j| = 1\`, i.e., the indices are adjacent.)*
- **Operation 2:** Choose an index \`i\` and flip \`s1[i]\`. The cost of this operation is \`x\`.

Return *the **minimum** cost needed to make the strings equal*, or \`-1\` if it is impossible.`,
  constraints: [
    '1 <= x <= 500',
    '2 <= n <= 500',
    's1.length == s2.length == n',
    's1 and s2 consist of "0" and "1".',
  ],
  examples: [
    {
      input: 's1 = "1110000", s2 = "0001111", x = 4',
      output: '7',
      explanation: 'Collect all 7 mismatches at consecutive positions. Pair 3 adjacent pairs at cost 1 each = 3; the 7th mismatch requires op2 at cost 4. Total = 7.',
    },
    {
      input: 's1 = "10", s2 = "01", x = 5',
      output: '1',
      explanation: 'Mismatches at positions 0 and 1. One op1 (adjacent flip) at cost 1 fixes both. Cheaper than two op2s (cost 10).',
    },
  ],
  hints: [
    'Find all positions where s1 and s2 differ — call this list diffs[].',
    'If |diffs| is odd and x is large, we may need one op2; otherwise every pair is cheaper as adjacent flips (cost = distance) vs. two op2s.',
    'DP: dp[i] = min cost to resolve first i diffs. Either fix diff[i] alone (cost x) or pair diff[i] and diff[i+1] (cost min(diff[i+1]-diff[i], 2x)).',
  ],
  functionName: 'minOperations',
  params: ['s1', 's2', 'x'],
  starterCode: {
    javascript: `function minOperations(s1, s2, x) {
  // Collect positions where strings differ
  const diffs = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diffs.push(i);
  }
  const n = diffs.length;
  if (n === 0) return 0;
  // If odd number of diffs, one op2 is unavoidable (cost x/2 per flip counted separately)
  // dp[i] = min cost to resolve diffs[i..n-1]
  // dp[i] = min(
  //   x/2 + dp[i+1],           // use op2 on diffs[i] alone (half of x since one flip)
  //   min(dist, x) + dp[i+2]   // pair diffs[i] with diffs[i+1]
  // )
  // Use 2*dp to avoid fractions: multiply all costs by 2
  const dp = new Array(n + 1).fill(Infinity);
  dp[n] = 0;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = x + dp[i + 1]; // op2 costs x (= x/2 * 2)
    if (i + 1 < n) {
      const pairCost = 2 * Math.min(diffs[i + 1] - diffs[i], x); // dist or x, doubled
      dp[i] = Math.min(dp[i], pairCost + dp[i + 2]);
    }
  }
  return dp[0] / 2;
}`,
    typescript: `function minOperations(s1: string, s2: string, x: number): number {
  const diffs: number[] = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) diffs.push(i);
  }
  const n = diffs.length;
  if (n === 0) return 0;
  const dp = new Array(n + 1).fill(Infinity);
  dp[n] = 0;
  for (let i = n - 1; i >= 0; i--) {
    dp[i] = x + dp[i + 1];
    if (i + 1 < n) {
      const pairCost = 2 * Math.min(diffs[i + 1] - diffs[i], x);
      dp[i] = Math.min(dp[i], pairCost + dp[i + 2]);
    }
  }
  return dp[0] / 2;
}`,
    python: `def minOperations(s1, s2, x):
    diffs = [i for i in range(len(s1)) if s1[i] != s2[i]]
    n = len(diffs)
    if n == 0:
        return 0
    dp = [float('inf')] * (n + 1)
    dp[n] = 0
    for i in range(n - 1, -1, -1):
        dp[i] = x + dp[i + 1]
        if i + 1 < n:
            pair_cost = 2 * min(diffs[i + 1] - diffs[i], x)
            dp[i] = min(dp[i], pair_cost + dp[i + 2])
    return dp[0] // 2
`,
  },
  visibleTests: [
    { args: ['1110000', '0001111', 4], expected: 7 },
    { args: ['10', '01', 5], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0', '1', 3], expected: 3 },
    { args: ['00', '11', 3], expected: 1 },
    { args: ['111', '000', 1], expected: 2 },
    { args: ['01', '01', 5], expected: 0 },
    { args: ['0110', '1001', 2], expected: 2 },
    { args: ['1010', '0110', 4], expected: 1 },
    { args: ['1111', '0000', 4], expected: 2 },
  ],
};
