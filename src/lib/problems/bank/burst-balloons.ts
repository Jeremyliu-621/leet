import type { Problem } from '../types';

export const problem: Problem = {
  id: 'burst-balloons',
  title: 'Burst Balloons',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given \`n\` balloons, indexed from \`0\` to \`n - 1\`. Each balloon has a number painted on it represented by the array \`nums\`. You are asked to burst all the balloons.

If you burst the \`i\`th balloon, you get \`nums[i - 1] * nums[i] * nums[i + 1]\` coins. If \`i - 1\` or \`i + 1\` goes out of bounds of the array, treat it as if there is a balloon with a \`1\` painted on it.

Return the **maximum coins** you can collect by bursting the balloons wisely.`,
  constraints: [
    'n == nums.length',
    '1 <= n <= 300',
    '0 <= nums[i] <= 100',
  ],
  examples: [
    {
      input: 'nums = [3, 1, 5, 8]',
      output: '167',
      explanation: 'Burst balloon 1 → coins 3*1*5 = 15; then burst 5 → 3*5*8 = 120; then burst 3 → 1*3*8 = 24; then burst 8 → 1*8*1 = 8. Total = 167.',
    },
    {
      input: 'nums = [1, 5]',
      output: '10',
    },
  ],
  hints: [
    'Think backwards: instead of "which balloon to burst first", think "which balloon to burst last in the range [left, right]". If balloon `k` is the last to be burst in [left, right], it earns `nums[left-1] * nums[k] * nums[right+1]` coins, where the boundaries are already gone.',
    'Define `dp[i][j]` = max coins from bursting all balloons in the open interval `(i, j)` (i and j are boundary sentinels, not burst). Pad nums with 1s on both ends. For each subrange, try each `k` as the last balloon: `dp[i][j] = max(dp[i][k] + nums[i]*nums[k]*nums[j] + dp[k][j])` for all `k` in `(i, j)`.',
    '`const a = [1, ...nums, 1]; const n = a.length; const dp = Array.from({length:n},()=>new Array(n).fill(0)); for(let len=2;len<n;len++) for(let i=0;i+len<n;i++) { const j=i+len; for(let k=i+1;k<j;k++) dp[i][j]=Math.max(dp[i][j],dp[i][k]+a[i]*a[k]*a[j]+dp[k][j]); } return dp[0][n-1];`',
  ],
  functionName: 'maxCoins',
  params: ['nums'],
  starterCode: {
    javascript: `function maxCoins(nums) {
  const a = [1, ...nums, 1];
  const n = a.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let len = 2; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i][k] + a[i] * a[k] * a[j] + dp[k][j]);
      }
    }
  }
  return dp[0][n - 1];
}`,
    typescript: `function maxCoins(nums: number[]): number {
  const a = [1, ...nums, 1];
  const n = a.length;
  const dp = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let len = 2; len < n; len++) {
    for (let i = 0; i + len < n; i++) {
      const j = i + len;
      for (let k = i + 1; k < j; k++) {
        dp[i][j] = Math.max(dp[i][j]!, dp[i][k]! + a[i]! * a[k]! * a[j]! + dp[k][j]!);
      }
    }
  }
  return dp[0]![n - 1]!;
}`,
    python: `def maxCoins(nums):
    a = [1] + nums + [1]
    n = len(a)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(n - length):
            j = i + length
            for k in range(i + 1, j):
                dp[i][j] = max(dp[i][j], dp[i][k] + a[i] * a[k] * a[j] + dp[k][j])
    return dp[0][n - 1]`,
  },
  visibleTests: [
    { args: [[3, 1, 5, 8]], expected: 167 },
    { args: [[1, 5]], expected: 10 },
    { args: [[5]], expected: 5 },
    { args: [[0, 0, 0]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 12 },
    { args: [[8, 3, 3, 8]], expected: 336 },
    { args: [[7, 9, 8, 0, 7, 1, 3, 5, 5, 2, 3]], expected: 1654 },
    { args: [[2, 4, 3, 5]], expected: 115 },
  ],
};
