import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-incompatibility',
  title: 'Minimum Incompatibility',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'arrays'],
  description: `You are given an integer array \`nums\` and an integer \`k\`. Partition \`nums\` into exactly \`k\` subsets of equal size \`n/k\` such that each subset has **distinct elements**. The incompatibility of a subset is \`max(subset) - min(subset)\`. Return the minimum total incompatibility, or \`-1\` if impossible.

**Bitmask DP:** Precompute the cost of each valid subset mask of size \`n/k\` (all distinct elements). Then \`dp[mask]\` = min incompatibility for the set of indices in \`mask\`. Transition: extend \`dp[mask]\` by adding any valid subset of the unselected indices.`,
  constraints: [
    '1 <= k <= n <= 16',
    '1 <= nums[i] <= n',
    'n is divisible by k',
  ],
  examples: [
    {
      input: 'nums = [1,2,1,4], k = 2',
      output: '4',
      explanation: 'Partition [1,4] and [1,2]: incompatibility = (4-1)+(2-1) = 3+1 = 4.',
    },
    {
      input: 'nums = [6,3,8,1,3,1,2,2], k = 4',
      output: '6',
    },
    {
      input: 'nums = [5,3,3,6,3,3], k = 3',
      output: '-1',
      explanation: '3 appears 4 times but k=3, so impossible to make distinct subsets.',
    },
  ],
  hints: [
    'If any value appears more than k times, return -1 immediately.',
    'Precompute the cost of each valid bitmask of size n/k: elements must all be distinct, cost = max - min.',
    'dp[mask] = min incompatibility for the subset of indices in mask. Build up by adding valid subsets of the complement.',
  ],
  functionName: 'minimumIncompatibility',
  params: ['nums', 'k'],
  starterCode: {
    javascript: `function minimumIncompatibility(nums, k) {
  const n = nums.length, sz = n / k | 0;
  const cnt = {};
  for (const v of nums) { cnt[v] = (cnt[v] || 0) + 1; if (cnt[v] > k) return -1; }
  const pc = m => { let c = 0; while (m) { m &= m - 1; c++; } return c; };
  const subCost = new Array(1 << n).fill(-1);
  for (let mask = 1; mask < (1 << n); mask++) {
    if (pc(mask) !== sz) continue;
    let lo = Infinity, hi = -Infinity, valid = true;
    const seen = new Set();
    for (let i = 0; i < n; i++) {
      if (!((mask >> i) & 1)) continue;
      const v = nums[i];
      if (seen.has(v)) { valid = false; break; }
      seen.add(v); if (v < lo) lo = v; if (v > hi) hi = v;
    }
    if (valid) subCost[mask] = hi - lo;
  }
  const dp = new Array(1 << n).fill(Infinity); dp[0] = 0;
  const full = (1 << n) - 1;
  for (let mask = 0; mask < full; mask++) {
    if (!isFinite(dp[mask]) || pc(mask) % sz !== 0) continue;
    const rem = full ^ mask, lowest = rem & -rem; let sub = rem;
    while (sub > 0) {
      if ((sub & lowest) && subCost[sub] !== -1) { const c = dp[mask] + subCost[sub]; if (c < dp[mask | sub]) dp[mask | sub] = c; }
      sub = (sub - 1) & rem;
    }
  }
  return isFinite(dp[full]) ? dp[full] : -1;
}`,
    typescript: `function minimumIncompatibility(nums: number[], k: number): number {
  const n = nums.length, sz = n / k | 0;
  const cnt: Record<number, number> = {};
  for (const v of nums) { cnt[v] = (cnt[v] ?? 0) + 1; if (cnt[v]! > k) return -1; }
  const pc = (m: number) => { let c = 0; while (m) { m &= m - 1; c++; } return c; };
  const subCost = new Array(1 << n).fill(-1);
  for (let mask = 1; mask < (1 << n); mask++) {
    if (pc(mask) !== sz) continue;
    let lo = Infinity, hi = -Infinity, valid = true;
    const seen = new Set<number>();
    for (let i = 0; i < n; i++) {
      if (!((mask >> i) & 1)) continue;
      const v = nums[i]!;
      if (seen.has(v)) { valid = false; break; }
      seen.add(v); if (v < lo) lo = v; if (v > hi) hi = v;
    }
    if (valid) subCost[mask] = hi - lo;
  }
  const dp = new Array(1 << n).fill(Infinity); dp[0] = 0;
  const full = (1 << n) - 1;
  for (let mask = 0; mask < full; mask++) {
    if (!isFinite(dp[mask]) || pc(mask) % sz !== 0) continue;
    const rem = full ^ mask, lowest = rem & -rem; let sub = rem;
    while (sub > 0) {
      if ((sub & lowest) && subCost[sub] !== -1) { const c = dp[mask] + subCost[sub]; if (c < dp[mask | sub]) dp[mask | sub] = c; }
      sub = (sub - 1) & rem;
    }
  }
  return isFinite(dp[full]) ? dp[full] : -1;
}`,
    python: `def minimumIncompatibility(nums: list, k: int) -> int:
    if hasattr(nums, 'to_py'): nums = list(nums.to_py())
    n = len(nums); sz = n // k
    cnt = {}
    for v in nums:
        cnt[v] = cnt.get(v, 0) + 1
        if cnt[v] > k: return -1
    pc = lambda m: bin(m).count('1')
    sub_cost = {}
    for mask in range(1, 1 << n):
        if pc(mask) != sz: continue
        vals = [nums[i] for i in range(n) if (mask >> i) & 1]
        if len(set(vals)) == sz: sub_cost[mask] = max(vals) - min(vals)
    dp = [float('inf')] * (1 << n); dp[0] = 0
    full = (1 << n) - 1
    for mask in range(full):
        if dp[mask] == float('inf'): continue
        rem = full ^ mask; lowest = rem & -rem; sub = rem
        while sub > 0:
            if (sub & lowest) and sub in sub_cost:
                nxt = mask | sub; c = dp[mask] + sub_cost[sub]
                if c < dp[nxt]: dp[nxt] = c
            sub = (sub - 1) & rem
    return dp[full] if dp[full] < float('inf') else -1`,
  },
  visibleTests: [
    { args: [[1, 2, 1, 4], 2], expected: 4 },
    { args: [[6, 3, 8, 1, 3, 1, 2, 2], 4], expected: 6 },
    { args: [[5, 3, 3, 6, 3, 3], 3], expected: -1 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 2], expected: 2 },
    { args: [[1, 1, 2, 2], 2], expected: 2 },
    { args: [[1, 3, 3, 2], 2], expected: 3 },
    { args: [[2, 3, 5, 4], 2], expected: 2 },
  ],
};
