import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-balanced-subsequence-sum',
  title: 'Maximum Balanced Subsequence Sum',
  difficulty: 'hard',
  tags: ['binary-indexed-tree', 'dynamic-programming', 'arrays'],
  description: `You are given a **0-indexed** integer array \`nums\`.

A subsequence of \`nums\` with indices \`i₀ < i₁ < ... < iₖ\` is **balanced** if for every adjacent pair in the subsequence:

\`nums[iⱼ] - iⱼ <= nums[iⱼ₊₁] - iⱼ₊₁\`

Return the **maximum possible sum** of a non-empty balanced subsequence.

**Note:** A subsequence of length 1 is always balanced.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '-10^9 <= nums[i] <= 10^9',
  ],
  examples: [
    {
      input: 'nums = [3,3,9,9,5]',
      output: '12',
      explanation: 'Take the subsequence [3,9] at indices 0 and 2. Check: 3-0=3, 9-2=7, 3<=7 ✓. Sum=12.',
    },
    {
      input: 'nums = [-1,-2,-3]',
      output: '-1',
      explanation: 'Every single element is a valid balanced subsequence. Maximum is -1 (index 0).',
    },
    {
      input: 'nums = [4,5,6,7,8]',
      output: '30',
      explanation: 'All elements: key[i]=nums[i]-i gives [4,4,4,4,4] — non-decreasing — so the full array is balanced. Sum=4+5+6+7+8=30.',
    },
  ],
  hints: [
    'Define key[i] = nums[i] - i. The balanced condition becomes key[i₀] <= key[i₁] <= ... — a non-decreasing subsequence of key values. So you want the maximum-sum subsequence where the key values are non-decreasing.',
    'Let dp[i] = max sum of balanced subsequence ending at index i. Then dp[i] = nums[i] + max(0, max dp[j] for j < i where key[j] <= key[i]). The answer is max(dp[i]).',
    'Use a Binary Indexed Tree (Fenwick tree) indexed by coordinate-compressed key values to query "maximum dp[j] among all j with key[j] <= key[i]" in O(log n). Update the BIT with dp[i] after computing it.',
  ],
  functionName: 'maximumBalancedSubsequenceSum',
  params: ['nums'],
  starterCode: {
    javascript: `function maximumBalancedSubsequenceSum(nums) {
  const n = nums.length;
  const keys = nums.map((v, i) => v - i);
  const sorted = [...new Set(keys)].sort((a, b) => a - b);
  const rankMap = new Map(sorted.map((v, i) => [v, i + 1]));
  const m = sorted.length;
  const bit = new Array(m + 1).fill(-Infinity);
  const update = (i, val) => { for (; i <= m; i += i & -i) if (val > bit[i]) bit[i] = val; };
  const query = (i) => { let r = -Infinity; for (; i > 0; i -= i & -i) if (bit[i] > r) r = bit[i]; return r; };
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    const r = rankMap.get(keys[i]);
    const prev = query(r);
    const dp = nums[i] + Math.max(0, prev === -Infinity ? -Infinity : prev);
    if (dp > ans) ans = dp;
    update(r, dp);
  }
  return ans;
}`,
    typescript: `function maximumBalancedSubsequenceSum(nums: number[]): number {
  const n = nums.length;
  const keys = nums.map((v, i) => v - i);
  const sorted = [...new Set(keys)].sort((a, b) => a - b);
  const rankMap = new Map(sorted.map((v, i) => [v, i + 1]));
  const m = sorted.length;
  const bit = new Array<number>(m + 1).fill(-Infinity);
  const update = (i: number, val: number) => { for (; i <= m; i += i & -i) if (val > bit[i]!) bit[i] = val; };
  const query = (i: number) => { let r = -Infinity; for (; i > 0; i -= i & -i) if (bit[i]! > r) r = bit[i]!; return r; };
  let ans = -Infinity;
  for (let i = 0; i < n; i++) {
    const r = rankMap.get(keys[i]!)!;
    const prev = query(r);
    const dp = nums[i]! + (prev > 0 ? prev : 0);
    if (dp > ans) ans = dp;
    update(r, dp);
  }
  return ans;
}`,

    python: `def maximumBalancedSubsequenceSum(nums):
    n = len(nums)
    keys = [v - i for i, v in enumerate(nums)]
    sorted_keys = sorted(set(keys))
    rank = {v: i + 1 for i, v in enumerate(sorted_keys)}
    m = len(sorted_keys)
    bit = [-float('inf')] * (m + 1)
    def update(i, val):
        while i <= m:
            if val > bit[i]:
                bit[i] = val
            i += i & -i
    def query(i):
        r = -float('inf')
        while i > 0:
            if bit[i] > r:
                r = bit[i]
            i -= i & -i
        return r
    ans = -float('inf')
    for i in range(n):
        r = rank[keys[i]]
        prev = query(r)
        dp = nums[i] + max(0, prev) if prev != -float('inf') else nums[i]
        if dp > ans:
            ans = dp
        update(r, dp)
    return ans
`,
  },
  visibleTests: [
    { args: [[3, 3, 9, 9, 5]], expected: 12 },
    { args: [[-1, -2, -3]], expected: -1 },
    { args: [[4, 5, 6, 7, 8]], expected: 30 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[-5]], expected: -5 },
    { args: [[1, 2]], expected: 3 },
    { args: [[3, -5]], expected: 3 },
    { args: [[2, 4, 6]], expected: 12 },
    { args: [[5, 1, 3]], expected: 5 },
    { args: [[1, 2, -1, 3]], expected: 3 },
    { args: [[-3, -2, -1]], expected: -1 },
    { args: [[10, -5, 10]], expected: 10 },
    { args: [[1, 1, 1, 1, 1]], expected: 1 },
  ],
};
