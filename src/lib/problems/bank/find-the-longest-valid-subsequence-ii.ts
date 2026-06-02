import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-valid-subsequence-ii',
  title: 'Find the Longest Valid Subsequence II',
  difficulty: 'medium',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` and a **positive** integer \`k\`.

A subsequence \`sub\` of \`nums\` with length \`x\` is called **valid** if it satisfies:

- \`(sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k\`

Return the length of the **longest valid subsequence** of \`nums\`.`,
  constraints: [
    '`2 <= nums.length <= 10^3`',
    '`1 <= nums[i] <= 10^7`',
    '`1 <= k <= 10^3`',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4,5], k = 2',
      output: '5',
      explanation: 'The longest valid subsequence is [1,2,3,4,5]. All consecutive sums are odd (1+2=3, 2+3=5, 3+4=7, 4+5=9), each ≡ 1 (mod 2).',
    },
    {
      input: 'nums = [1,4,2,3,1,4], k = 3',
      output: '4',
      explanation: 'The longest valid subsequence is [1,4,1,4]. Consecutive sums: 5%3=2, 5%3=2, 5%3=2.',
    },
  ],
  hints: [
    'For a fixed target remainder r (0 ≤ r < k), find the longest subsequence where every consecutive pair sums to r (mod k).',
    'Use DP: dp[r][v] = the length of the longest valid subsequence ending with a value whose remainder mod k is v, and the required sum remainder is r. When you append a number num (with remainder m = num % k), it can extend any subsequence ending with value v where (v + m) % k == r, i.e. v = (r - m + k) % k.',
    'For each target r, iterate through nums. For each num with m = num % k, update dp[r][m] = dp[r][(r - m + k) % k] + 1. The answer is max over all dp[r][m].',
  ],
  functionName: 'maximumLength',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function maximumLength(nums, k) {
  let ans = 1;
  for (let r = 0; r < k; r++) {
    const dp = new Array(k).fill(0);
    for (const num of nums) {
      const m = num % k;
      const prev = (r - m + k) % k;
      dp[m] = Math.max(dp[m], dp[prev] + 1);
    }
    ans = Math.max(ans, ...dp);
  }
  return ans;
}`,
    typescript: `function maximumLength(nums: number[], k: number): number {
  let ans = 1;
  for (let r = 0; r < k; r++) {
    const dp = new Array(k).fill(0);
    for (const num of nums) {
      const m = num % k;
      const prev = (r - m + k) % k;
      dp[m] = Math.max(dp[m], dp[prev] + 1);
    }
    ans = Math.max(ans, ...dp);
  }
  return ans;
}`,
    python: `def maximumLength(nums: list[int], k: int) -> int:
    ans = 1
    for r in range(k):
        dp = [0] * k
        for num in nums:
            m = num % k
            prev = (r - m + k) % k
            dp[m] = max(dp[m], dp[prev] + 1)
        ans = max(ans, max(dp))
    return ans`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5], 2], expected: 5 },
    { args: [[1, 4, 2, 3, 1, 4], 3], expected: 4 },
    { args: [[1, 2, 3], 1], expected: 3 },
    { args: [[1, 2, 3, 4], 4], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1, 2], 2], expected: 2 },
    { args: [[4, 5, 4, 5], 3], expected: 4 },
    { args: [[6, 9, 3, 3], 3], expected: 4 },
    { args: [[1, 1, 1, 1], 2], expected: 4 },
    { args: [[2, 4, 6, 8], 4], expected: 4 },
    { args: [[1, 3, 5, 2, 4, 6], 2], expected: 3 },
    { args: [[3, 3, 3, 3, 3], 5], expected: 5 },
  ],
};
