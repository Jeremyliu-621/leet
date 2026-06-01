import type { Problem } from '../types';

export const problem: Problem = {
  id: 'arithmetic-slices-ii-subsequence',
  title: 'Arithmetic Slices II - Subsequence',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `Given an integer array \`nums\`, return the number of all **arithmetic subsequences** of \`nums\`.

A sequence of numbers is called **arithmetic** if it consists of **at least three elements** and if the difference between any two consecutive elements is the same.

A **subsequence** is derived from \`nums\` by deleting some (possibly zero) elements without changing the order of the remaining elements.`,
  constraints: [
    '1 <= nums.length <= 1000',
    '-2^31 <= nums[i] <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'nums = [2,4,6,8,10]',
      output: '7',
      explanation:
        'APs with d=2: [2,4,6],[4,6,8],[6,8,10],[2,4,6,8],[4,6,8,10],[2,4,6,8,10] (6 total). APs with d=4: [2,6,10] (1 total). Grand total = 7.',
    },
    {
      input: 'nums = [7,7,7,7,7]',
      output: '16',
      explanation: 'Any subsequence of length >= 3 with difference 0 is valid.',
    },
    {
      input: 'nums = [1,2,3,4]',
      output: '3',
      explanation: '[1,2,3], [2,3,4], and [1,2,3,4] are the only valid arithmetic subsequences (all with d=1).',
    },
  ],
  hints: [
    'For each index i and common difference d, track how many "weak arithmetic subsequences" of length >= 2 end at i with difference d. A weak subsequence becomes a valid one when extended to length >= 3.',
    'Use dp[i] as a Map from difference d to count of weak subsequences ending at nums[i]. For each pair (i, j) with j < i and d = nums[i] - nums[j]: add dp[j].get(d, 0) to the answer (these become length >= 3), and set dp[i][d] += dp[j].get(d, 0) + 1.',
    'Numbers can be large — use BigInt differences or handle overflow carefully. The count itself fits in a 32-bit integer for reasonable inputs.',
  ],
  functionName: 'countArithmeticSlices',
  params: ['nums'],
  starterCode: {
    javascript: `function countArithmeticSlices(nums) {
  const n = nums.length;
  const dp = Array.from({length: n}, () => new Map());
  let ans = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[i] - nums[j];
      const cnt = dp[j].get(d) ?? 0;
      ans += cnt;
      dp[i].set(d, (dp[i].get(d) ?? 0) + cnt + 1);
    }
  }
  return ans;
}`,
    typescript: `function countArithmeticSlices(nums: number[]): number {
  const n = nums.length;
  const dp = Array.from({length: n}, () => new Map<number, number>());
  let ans = 0;
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      const d = nums[i]! - nums[j]!;
      const cnt = dp[j]!.get(d) ?? 0;
      ans += cnt;
      dp[i]!.set(d, (dp[i]!.get(d) ?? 0) + cnt + 1);
    }
  }
  return ans;
}`,
    python: `def countArithmeticSlices(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    from collections import defaultdict
    n = len(nums)
    dp = [defaultdict(int) for _ in range(n)]
    ans = 0
    for i in range(1, n):
        for j in range(i):
            d = nums[i] - nums[j]
            cnt = dp[j][d]
            ans += cnt
            dp[i][d] += cnt + 1
    return ans`,
  },
  visibleTests: [
    { args: [[2, 4, 6, 8, 10]], expected: 7 },
    { args: [[7, 7, 7, 7, 7]], expected: 16 },
    { args: [[1, 2, 3, 4]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[3, 6, 9, 12]], expected: 3 },
    { args: [[1, 1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 1 },
  ],
};
