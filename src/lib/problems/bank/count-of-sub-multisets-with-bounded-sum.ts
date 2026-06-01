import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-sub-multisets-with-bounded-sum',
  title: 'Count of Sub-Multisets With Bounded Sum',
  difficulty: 'hard',
  tags: ['arrays', 'hash-map', 'dynamic-programming', 'sliding-window'],
  description: `You are given a **0-indexed** array \`nums\` of **non-negative** integers and two integers \`l\` and \`r\`.

Return the **count of sub-multisets** within \`nums\` whose sum is in the **inclusive** range \`[l, r]\`.

Since the answer may be large, return it **modulo** \`10^9 + 7\`.

A **sub-multiset** is an unordered collection of elements of \`nums\`, where a given value \`x\` can occur at most as many times as it occurs in \`nums\`. Two sub-multisets are considered **different** if the multisets of the values are different.

**Note:** For the purpose of counting, an empty sub-multiset should not be included.`,
  constraints: [
    '1 <= nums.length <= 2 * 10^4',
    '0 <= nums[i] <= 2 * 10^4',
    'nums is sorted in non-decreasing order',
    '0 <= l <= r <= 2 * 10^4',
  ],
  examples: [
    {
      input: 'nums = [1,2,2,3], l = 6, r = 6',
      output: '1',
      explanation:
        'The only sub-multiset with sum 6 is {1,2,3}. Note {2,2,2} is not valid since 2 appears only twice in nums.',
    },
    {
      input: 'nums = [2,1,4,2,7], l = 1, r = 5',
      output: '7',
      explanation:
        'The sub-multisets with sum in [1,5] are: {1}, {2}, {4}, {1,2}, {2,2}, {1,4}, {1,2,2}. That is 7 sub-multisets.',
    },
    {
      input: 'nums = [1,2,3,4,5], l = 3, r = 5',
      output: '7',
      explanation:
        'Sub-multisets with sum in [3,5]: {3}, {4}, {5}, {1,2}, {1,3}, {2,3}, {1,4}. That is 7.',
    },
  ],
  hints: [
    'Level 1: Think of this as a bounded knapsack problem. Group elements by value and count their frequencies. For each unique value with count c, you can include 0, 1, 2, ..., or c copies of it. Use DP to count combinations by total sum.',
    'Level 2: Let dp[s] = number of sub-multisets of non-zero elements with exactly sum s (including the empty sub-multiset as dp[0] = 1). Process each unique value val with count cnt: update dp with a sliding window prefix sum trick to handle "take 0..cnt copies of val" in O(r/val) per value rather than O(r*cnt).',
    'Level 3: Zeros are special: any number of them (0 to freq[0]) can be added without changing the sum. Factor out zeros: multiply the final answer by (freq[0] + 1). Remember to subtract 1 at the end for the empty sub-multiset if l <= 0.',
  ],
  functionName: 'countSubMultisets',
  params: ['nums', 'l', 'r'],
  starterCode: {
    javascript: `function countSubMultisets(nums, l, r) {
  const MOD = 1000000007n;
  const freq = new Map();
  for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
  const zeros = freq.get(0) || 0;
  freq.delete(0);
  const dp = new Array(r + 1).fill(0n);
  dp[0] = 1n;
  for (const [val, cnt] of freq) {
    if (val > r) continue;
    const ndp = [...dp];
    for (let rem = 0; rem < val; rem++) {
      let w = 0n, c = 0;
      for (let s = rem; s <= r; s += val) {
        w = (w + dp[s]) % MOD;
        c++;
        if (c > cnt + 1) {
          w = (w - dp[s - (cnt + 1) * val] + MOD) % MOD;
        }
        ndp[s] = w;
      }
    }
    for (let i = 0; i <= r; i++) dp[i] = ndp[i];
  }
  let ans = 0n;
  for (let s = l; s <= r; s++) ans = (ans + dp[s]) % MOD;
  ans = (ans * BigInt(zeros + 1)) % MOD;
  if (l === 0) ans = (ans - 1n + MOD) % MOD;
  return Number(ans);
}`,
    typescript: `function countSubMultisets(nums: number[], l: number, r: number): number {
  const MOD = 1000000007n;
  const freq = new Map<number, number>();
  for (const n of nums) freq.set(n, (freq.get(n) ?? 0) + 1);
  const zeros = freq.get(0) ?? 0;
  freq.delete(0);
  const dp = new Array(r + 1).fill(0n) as bigint[];
  dp[0] = 1n;
  for (const [val, cnt] of freq) {
    if (val > r) continue;
    const ndp = [...dp];
    for (let rem = 0; rem < val; rem++) {
      let w = 0n, c = 0;
      for (let s = rem; s <= r; s += val) {
        w = (w + dp[s]!) % MOD;
        c++;
        if (c > cnt + 1) {
          w = (w - dp[s - (cnt + 1) * val]! + MOD) % MOD;
        }
        ndp[s] = w;
      }
    }
    for (let i = 0; i <= r; i++) dp[i] = ndp[i]!;
  }
  let ans = 0n;
  for (let s = l; s <= r; s++) ans = (ans + dp[s]!) % MOD;
  ans = (ans * BigInt(zeros + 1)) % MOD;
  if (l === 0) ans = (ans - 1n + MOD) % MOD;
  return Number(ans);
}`,
    python: `def countSubMultisets(nums, l, r):
    from collections import Counter
    MOD = 10**9 + 7
    freq = Counter(nums)
    zeros = freq.pop(0, 0)
    dp = [0] * (r + 1)
    dp[0] = 1
    for val, cnt in freq.items():
        if val > r:
            continue
        ndp = dp[:]
        for rem in range(val):
            w, c = 0, 0
            for s in range(rem, r + 1, val):
                w = (w + dp[s]) % MOD
                c += 1
                if c > cnt + 1:
                    w = (w - dp[s - (cnt + 1) * val]) % MOD
                ndp[s] = w
        dp = ndp
    ans = sum(dp[l:r+1]) % MOD
    ans = ans * (zeros + 1) % MOD
    if l == 0:
        ans = (ans - 1) % MOD
    return ans`,
  },
  visibleTests: [
    { args: [[1,2,2,3], 6, 6], expected: 1 },
    { args: [[2,1,4,2,7], 1, 5], expected: 7 },
    { args: [[1,2,3,4,5], 3, 5], expected: 7 },
  ],
  hiddenTests: [
    { args: [[0,0,1,2], 0, 3], expected: 11 },
    { args: [[1,1,1], 1, 3], expected: 3 },
    { args: [[1,2,3], 1, 6], expected: 7 },
    { args: [[3,3,4], 4, 6], expected: 2 },
    { args: [[1,1,2,3], 3, 5], expected: 6 },
    { args: [[1], 1, 1], expected: 1 },
    { args: [[5], 1, 4], expected: 0 },
  ],
};
