import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-score-after-n-operations',
  title: 'Maximize Score After N Operations',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'dynamic-programming'],
  description: `You are given \`nums\`, an array of positive integers of size \`2 * n\`. You must perform \`n\` operations on this array.

In the \`i\`-th operation (**1-indexed**), you will:
- Choose two elements, \`x\` and \`y\`.
- Receive a score of \`i * gcd(x, y)\`.
- Remove \`x\` and \`y\` from \`nums\`.

Return the **maximum** score you can receive after performing \`n\` operations.

\`gcd(x, y)\` is the Greatest Common Divisor of \`x\` and \`y\`.`,
  constraints: [
    '`1 <= n <= 7`',
    '`nums.length == 2 * n`',
    '`1 <= nums[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'nums = [1,2]',
      output: '1',
      explanation: 'The optimal choice is to pair (1, 2) in operation 1. Score = 1 * gcd(1,2) = 1.',
    },
    {
      input: 'nums = [3,4,6,8]',
      output: '11',
      explanation:
        'Operation 1: pair (3,6) → 1 * gcd(3,6) = 3. Operation 2: pair (4,8) → 2 * gcd(4,8) = 8. Total = 11.',
    },
    {
      input: 'nums = [1,2,3,4,5,6]',
      output: '14',
      explanation:
        'Pair (1,5),(2,6),(3,?) optimally: op1 pair (1,5)→1, op2 pair (2,4)→4, op3 pair (3,6)→9. Total=14.',
    },
  ],
  hints: [
    'Use **bitmask DP**. Let `dp[mask]` = max score achievable using exactly the elements indicated by the set bits in `mask`. Iterate masks with an even number of set bits.',
    'For each such mask, the operation number is `popcount(mask) / 2 + 1` (next op to perform is the (k+1)-th). Try all pairs of unset bits `(i, j)` and update `dp[mask | (1<<i) | (1<<j)]`.',
    'Precompute `gcd[i][j]` for all pairs to avoid recomputation. The full DP runs in O(4^n × n²) which is fast for n ≤ 7 (mask ≤ 2^14 = 16384).',
  ],
  functionName: 'maxScore',
  params: ['nums'],
  starterCode: {
    javascript: `function maxScore(nums) {
  const m = nums.length;
  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  const g = Array.from({length: m}, (_, i) => Array.from({length: m}, (_, j) => gcd(nums[i], nums[j])));
  const dp = new Array(1 << m).fill(0);
  function popcount(x) { let c = 0; while (x) { c += x & 1; x >>= 1; } return c; }
  for (let mask = 0; mask < (1 << m); mask++) {
    const pc = popcount(mask);
    if (pc % 2 !== 0 || pc === m) continue;
    const op = pc >> 1;
    for (let i = 0; i < m; i++) {
      if (mask & (1 << i)) continue;
      for (let j = i + 1; j < m; j++) {
        if (mask & (1 << j)) continue;
        const next = mask | (1 << i) | (1 << j);
        dp[next] = Math.max(dp[next], dp[mask] + (op + 1) * g[i][j]);
      }
    }
  }
  return dp[(1 << m) - 1];
}`,
    typescript: `function maxScore(nums: number[]): number {
  const m = nums.length;
  function gcd(a: number, b: number): number { return b === 0 ? a : gcd(b, a % b); }
  const g = Array.from({length: m}, (_, i) => Array.from({length: m}, (_, j) => gcd(nums[i]!, nums[j]!)));
  const dp = new Array<number>(1 << m).fill(0);
  function popcount(x: number): number { let c = 0; while (x) { c += x & 1; x >>= 1; } return c; }
  for (let mask = 0; mask < (1 << m); mask++) {
    const pc = popcount(mask);
    if (pc % 2 !== 0 || pc === m) continue;
    const op = pc >> 1;
    for (let i = 0; i < m; i++) {
      if (mask & (1 << i)) continue;
      for (let j = i + 1; j < m; j++) {
        if (mask & (1 << j)) continue;
        const next = mask | (1 << i) | (1 << j);
        dp[next] = Math.max(dp[next]!, dp[mask]! + (op + 1) * g[i]![j]!);
      }
    }
  }
  return dp[(1 << m) - 1]!;
}`,
    python: `def maxScore(nums):
    from math import gcd
    m = len(nums)
    g = [[gcd(nums[i], nums[j]) for j in range(m)] for i in range(m)]
    dp = [0] * (1 << m)
    for mask in range(1 << m):
        pc = bin(mask).count('1')
        if pc % 2 != 0 or pc == m: continue
        op = pc >> 1
        for i in range(m):
            if mask & (1 << i): continue
            for j in range(i + 1, m):
                if mask & (1 << j): continue
                nxt = mask | (1 << i) | (1 << j)
                dp[nxt] = max(dp[nxt], dp[mask] + (op + 1) * g[i][j])
    return dp[(1 << m) - 1]`,
  },
  visibleTests: [
    { args: [[1, 2]], expected: 1 },
    { args: [[3, 4, 6, 8]], expected: 11 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 14 },
  ],
  hiddenTests: [
    { args: [[2, 4]], expected: 2 },
    { args: [[2, 4, 6, 8]], expected: 10 },
    { args: [[1, 1, 1, 1, 1, 1]], expected: 6 },
    { args: [[4, 8, 12, 16]], expected: 20 },
    { args: [[6, 9, 12, 18]], expected: 24 },
    { args: [[2, 3]], expected: 1 },
    { args: [[6, 6, 6, 6]], expected: 18 },
    { args: [[10, 20]], expected: 10 },
  ],
};
