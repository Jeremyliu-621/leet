import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-strength-of-k-disjoint-subarrays',
  title: 'Maximum Strength of K Disjoint Subarrays',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an array of integers \`nums\` with length \`n\`, and a positive integer \`k\`.

The **strength** of \`k\` disjoint subarrays is defined as:

\`strength = Σ_{i=1}^{k} (-1)^{i+1} × i × sum(sub_i)\`

Where \`sub_1, sub_2, ..., sub_k\` are \`k\` **non-overlapping** (disjoint) subarrays chosen from \`nums\`, appearing in the array in **left-to-right** order.

In other words:
- The 1st subarray contributes \`+1 × sum(sub_1)\`
- The 2nd subarray contributes \`-2 × sum(sub_2)\`
- The 3rd subarray contributes \`+3 × sum(sub_3)\`
- ...and so on alternating sign, scaled by position.

Return the **maximum** possible strength achievable.`,
  constraints: [
    '1 <= n <= 10^4',
    '-10^9 <= nums[i] <= 10^9',
    '1 <= k <= n',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,-1,2], k = 3',
      output: '14',
      explanation:
        'Choose sub1=[1,2,3] (sum=6), sub2=[-1] (sum=-1), sub3=[2] (sum=2). Strength = 1×6 + (-2)×(-1) + 3×2 = 6+2+6 = 14.',
    },
    {
      input: 'nums = [-1,-2,-3], k = 1',
      output: '-1',
      explanation: 'Only one subarray needed. Best single-element: [-1]. Strength = 1×(-1) = -1.',
    },
    {
      input: 'nums = [2,-1,2], k = 2',
      output: '4',
      explanation: 'sub1=[2] (sum=2), sub2=[-1] (sum=-1). Strength = 1×2 + (-2)×(-1) = 2+2 = 4.',
    },
  ],
  hints: [
    'Level 1: Use DP with states dp[j][0] = max strength with exactly j complete subarrays (not currently in one), and dp[j][1] = max strength currently inside the j-th subarray. Initialize dp[0][0] = 0, all others = -∞.',
    'Level 2: For each element nums[i], update j from k down to 1: dp[j][1] = max(dp[j][1] + sign(j)*nums[i], dp[j-1][0] + sign(j)*nums[i]). Then dp[j][0] = max(dp[j][0], dp[j][1]). sign(j) = j if j is odd, -j if j is even.',
    'Level 3: Process elements left to right, updating j in decreasing order to avoid using updated values from the same step. The answer is dp[k][0].',
  ],
  functionName: 'maximumStrength',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumStrength(nums, k) {
  const n = nums.length;
  const NEG_INF = -Infinity;
  const dp = Array.from({length: k + 1}, () => [NEG_INF, NEG_INF]);
  dp[0][0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = k; j >= 1; j--) {
      const sg = j % 2 === 1 ? j : -j;
      const ext = dp[j][1] === NEG_INF ? NEG_INF : dp[j][1] + sg * nums[i];
      const start = dp[j-1][0] === NEG_INF ? NEG_INF : dp[j-1][0] + sg * nums[i];
      dp[j][1] = Math.max(ext, start);
      dp[j][0] = Math.max(dp[j][0], dp[j][1]);
    }
  }
  return dp[k][0];
}`,
    typescript: `function maximumStrength(nums: number[], k: number): number {
  const n = nums.length;
  const NEG_INF = -Infinity;
  const dp: [number, number][] = Array.from({length: k + 1}, () => [NEG_INF, NEG_INF]);
  dp[0]![0] = 0;
  for (let i = 0; i < n; i++) {
    for (let j = k; j >= 1; j--) {
      const sg = j % 2 === 1 ? j : -j;
      const ext = dp[j]![1] === NEG_INF ? NEG_INF : dp[j]![1]! + sg * nums[i]!;
      const start = dp[j-1]![0] === NEG_INF ? NEG_INF : dp[j-1]![0]! + sg * nums[i]!;
      dp[j]![1] = Math.max(ext, start);
      dp[j]![0] = Math.max(dp[j]![0]!, dp[j]![1]!);
    }
  }
  return dp[k]![0]!;
}`,
    python: `def maximumStrength(nums, k):
    n = len(nums)
    NEG_INF = float('-inf')
    dp = [[NEG_INF, NEG_INF] for _ in range(k + 1)]
    dp[0][0] = 0
    for i in range(n):
        for j in range(k, 0, -1):
            sg = j if j % 2 == 1 else -j
            ext = dp[j][1] + sg * nums[i] if dp[j][1] != NEG_INF else NEG_INF
            start = dp[j-1][0] + sg * nums[i] if dp[j-1][0] != NEG_INF else NEG_INF
            dp[j][1] = max(ext, start)
            dp[j][0] = max(dp[j][0], dp[j][1])
    return dp[k][0]`,
  },
  visibleTests: [
    { args: [[1, 2, 3, -1, 2], 3], expected: 14 },
    { args: [[-1, -2, -3], 1], expected: -1 },
    { args: [[2, -1, 2], 2], expected: 4 },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: 1 },
    { args: [[-1], 1], expected: -1 },
    { args: [[3, -2, 1], 2], expected: 7 },
    { args: [[5, -5, 5], 1], expected: 5 },
    { args: [[5, -5, 5], 2], expected: 15 },
    { args: [[1, 2, 3, 4, 5], 2], expected: 0 },
    { args: [[1, -1, 1, -1, 1, -1, 1], 4], expected: 10 },
  ],
};
