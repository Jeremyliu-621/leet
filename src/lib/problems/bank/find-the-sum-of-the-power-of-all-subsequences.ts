import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-sum-of-the-power-of-all-subsequences',
  title: 'Find the Sum of the Power of All Subsequences',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming', 'math'],
  description: `You are given an integer array \`nums\` of length \`n\` and a **positive** integer \`k\`.

The **power** of an array is defined as the number of **subsequences** with a sum **equal to** \`k\`.

Return the **sum of power** of all subsequences of \`nums\`.

Since the answer may be very large, return it modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= n <= 100',
    '1 <= nums[i] <= 10^4',
    '1 <= k <= 10^5',
  ],
  examples: [
    {
      input: 'nums = [1, 2, 3], k = 3',
      output: '6',
      explanation: 'Subsequences summing to 3: [3] (appears in 4 outer subsequences) and [1,2] (appears in 2 outer subsequences). Total = 4+2 = 6.',
    },
    {
      input: 'nums = [2, 3, 3], k = 5',
      output: '4',
      explanation: 'Subsequences summing to 5: [2,3] (index 1) appears in 2 outer subs, [2,3] (index 2) appears in 2 outer subs. Total = 4.',
    },
    {
      input: 'nums = [1, 2, 3, 4], k = 2',
      output: '8',
      explanation: '[2] appears in 8 outer subsequences ([2], [1,2], [2,3], [2,4], [1,2,3], [1,2,4], [2,3,4], [1,2,3,4]).',
    },
  ],
  hints: [
    'For each subsequence T that sums to k, it contributes 2^(n - |T|) to the answer, since any subset of the remaining elements can be freely included or excluded.',
    'Use 2D DP: dp[i][j] = number of subsequences of the first elements considered that use exactly i elements and have sum j.',
    'The answer is sum over all lengths i of dp[i][k] * 2^(n-i) mod (10^9+7).',
  ],
  functionName: 'sumOfPower',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function sumOfPower(nums, k) {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
  dp[0][0] = 1;
  for (const v of nums) {
    for (let len = n - 1; len >= 0; len--) {
      for (let s = 0; s + v <= k; s++) {
        dp[len + 1][s + v] = (dp[len + 1][s + v] + dp[len][s]) % MOD;
      }
    }
  }
  let ans = 0, pow2 = 1;
  for (let i = n; i >= 0; i--) {
    ans = (ans + dp[i][k] * pow2) % MOD;
    pow2 = pow2 * 2 % MOD;
  }
  return ans;
}`,
    typescript: `function sumOfPower(nums: number[], k: number): number {
  const MOD = 1e9 + 7;
  const n = nums.length;
  const dp: number[][] = Array.from({ length: n + 1 }, () => new Array(k + 1).fill(0));
  dp[0]![0] = 1;
  for (const v of nums) {
    for (let len = n - 1; len >= 0; len--) {
      for (let s = 0; s + v <= k; s++) {
        dp[len + 1]![s + v]! = (dp[len + 1]![s + v]! + dp[len]![s]!) % MOD;
      }
    }
  }
  let ans = 0, pow2 = 1;
  for (let i = n; i >= 0; i--) {
    ans = (ans + dp[i]![k]! * pow2) % MOD;
    pow2 = pow2 * 2 % MOD;
  }
  return ans;
}`,
    python: `def sumOfPower(nums, k):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    MOD = 10**9 + 7
    n = len(nums)
    dp = [[0] * (k + 1) for _ in range(n + 1)]
    dp[0][0] = 1
    for v in nums:
        for length in range(n - 1, -1, -1):
            for s in range(k - v + 1):
                dp[length + 1][s + v] = (dp[length + 1][s + v] + dp[length][s]) % MOD
    ans, pow2 = 0, 1
    for i in range(n, -1, -1):
        ans = (ans + dp[i][k] * pow2) % MOD
        pow2 = pow2 * 2 % MOD
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3], 3], expected: 6 },
    { args: [[2, 3, 3], 5], expected: 4 },
    { args: [[1, 2, 3, 4], 2], expected: 8 },
    { args: [[1], 1], expected: 1 },
    { args: [[1, 1], 2], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1, 1, 1], 2], expected: 6 },
    { args: [[2, 2, 2], 2], expected: 12 },
    { args: [[1, 2, 3, 4, 5], 5], expected: 32 },
    { args: [[3, 3, 3], 3], expected: 12 },
    { args: [[1, 2], 3], expected: 1 },
    { args: [[5], 5], expected: 1 },
    { args: [[1, 1, 1, 1], 3], expected: 8 },
    { args: [[2, 4, 6], 6], expected: 6 },
  ],
};
