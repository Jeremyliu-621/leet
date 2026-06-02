import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-good-subsets',
  title: 'The Number of Good Subsets',
  difficulty: 'hard',
  tags: ['arrays', 'dynamic-programming'],
  description: `You are given an integer array \`nums\` (1-indexed). We call a set of numbers **good** if the product of its elements can be represented as a product of one or more **distinct** primes.

For example, \`[2, 3]\` is good because the product is \`6 = 2 × 3\`. \`[2, 4]\` is not good because the product is \`8 = 2^3\`.

Return the number of **non-empty subsets** of \`nums\` (each chosen index is distinct) such that the product of their elements forms a product of distinct primes.

Since the answer may be too large, return it **modulo** \`10^9 + 7\`.

**Notes:**
- Two subsets are different if they use different indices.
- Elements equal to 1 can appear in any good subset without affecting the primeness of the product.`,
  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 30',
  ],
  examples: [
    {
      input: 'nums = [1,2,3,4]',
      output: '6',
      explanation:
        'Good subsets by value (ignoring 4 since 4=2² fails): {2}, {3}, {2,3}. Each of these 3 can pair with or without the one "1", giving 3 × 2 = 6.',
    },
    {
      input: 'nums = [4,2,3,15]',
      output: '5',
      explanation:
        'Good subsets: {2}=2, {3}=3, {15}=3×5, {2,3}=6, {2,15}=30. Note {3,15}=45=3²×5 fails. Total = 5.',
    },
  ],
  hints: [
    'Level 1: Notice nums[i] ≤ 30, so there are only 10 primes up to 30 (2,3,5,7,11,13,17,19,23,29). A good subset must pick numbers whose combined prime factorization uses each prime at most once (squarefree product with no overlapping primes between elements).',
    'Level 2: First, discard numbers with any squared prime factor (4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28). For the rest, encode each as a bitmask of its prime factors. Use DP: dp[mask] = number of ways to build a "good" selection using exactly those primes. Multiply by 2^(count_of_1s) since each 1 can independently be included.',
    'Level 3: dp[0]=1. For each valid v (2..30, squarefree) with frequency freq[v] and primeMask[v]: for each mask where mask & primeMask[v]==0, dp[mask | primeMask[v]] += dp[mask] * freq[v]. Answer = sum(dp[1..]) * 2^ones mod 10^9+7.',
  ],
  functionName: 'numberOfGoodSubsets',
  params: ['nums'],
  starterCode: {
    javascript: `function numberOfGoodSubsets(nums) {
  const MOD = 1000000007n;
  const primes = [2,3,5,7,11,13,17,19,23,29];
  const freq = new Array(31).fill(0);
  for (const v of nums) freq[v]++;
  function squarefree(v) {
    for (const p of primes) if (v % (p * p) === 0) return false;
    return true;
  }
  function primeMask(v) {
    let mask = 0;
    for (let i = 0; i < primes.length; i++) if (v % primes[i] === 0) mask |= 1 << i;
    return mask;
  }
  const dp = new Array(1 << 10).fill(0n);
  dp[0] = 1n;
  for (let v = 2; v <= 30; v++) {
    if (!freq[v] || !squarefree(v)) continue;
    const mask = primeMask(v);
    const f = BigInt(freq[v]);
    for (let m = (1 << 10) - 1; m >= 0; m--) {
      if (dp[m] && (m & mask) === 0) dp[m | mask] = (dp[m | mask] + dp[m] * f) % MOD;
    }
  }
  let ans = 0n;
  for (let m = 1; m < (1 << 10); m++) ans = (ans + dp[m]) % MOD;
  let pow2 = 1n;
  for (let i = 0; i < freq[1]; i++) pow2 = pow2 * 2n % MOD;
  return Number(ans * pow2 % MOD);
}`,
    typescript: `function numberOfGoodSubsets(nums: number[]): number {
  const MOD = 1000000007n;
  const primes = [2,3,5,7,11,13,17,19,23,29];
  const freq = new Array(31).fill(0) as number[];
  for (const v of nums) freq[v]!++;
  function squarefree(v: number): boolean {
    for (const p of primes) if (v % (p * p) === 0) return false;
    return true;
  }
  function primeMask(v: number): number {
    let mask = 0;
    for (let i = 0; i < primes.length; i++) if (v % primes[i]! === 0) mask |= 1 << i;
    return mask;
  }
  const dp = new Array(1 << 10).fill(0n) as bigint[];
  dp[0] = 1n;
  for (let v = 2; v <= 30; v++) {
    if (!freq[v] || !squarefree(v)) continue;
    const mask = primeMask(v);
    const f = BigInt(freq[v]!);
    for (let m = (1 << 10) - 1; m >= 0; m--) {
      if (dp[m]! && (m & mask) === 0) dp[m | mask] = (dp[m | mask]! + dp[m]! * f) % MOD;
    }
  }
  let ans = 0n;
  for (let m = 1; m < (1 << 10); m++) ans = (ans + dp[m]!) % MOD;
  let pow2 = 1n;
  for (let i = 0; i < freq[1]!; i++) pow2 = pow2 * 2n % MOD;
  return Number(ans * pow2 % MOD);
}`,
    python: `def numberOfGoodSubsets(nums):
    if hasattr(nums, 'to_py'): nums = nums.to_py()
    nums = [int(x) for x in nums]
    MOD = 10**9+7
    primes = [2,3,5,7,11,13,17,19,23,29]
    freq = [0]*31
    for v in nums: freq[v] += 1
    def squarefree(v):
        for p in primes:
            if v % (p*p) == 0: return False
        return True
    def prime_mask(v):
        mask = 0
        for i, p in enumerate(primes):
            if v % p == 0: mask |= 1 << i
        return mask
    dp = [0]*(1<<10); dp[0] = 1
    for v in range(2, 31):
        if not freq[v] or not squarefree(v): continue
        mask = prime_mask(v); f = freq[v]
        for m in range((1<<10)-1, -1, -1):
            if dp[m] and (m & mask) == 0:
                dp[m | mask] = (dp[m | mask] + dp[m]*f) % MOD
    ans = sum(dp[1:]) % MOD
    pow2 = pow(2, freq[1], MOD)
    return ans * pow2 % MOD`,
  },
  visibleTests: [
    {
      args: [[1,2,3,4]],
      expected: 6,
    },
    {
      args: [[4,2,3,15]],
      expected: 5,
    },
  ],
  hiddenTests: [
    {
      args: [[1]],
      expected: 0,
    },
    {
      args: [[2]],
      expected: 1,
    },
    {
      args: [[1,1,2]],
      expected: 4,
    },
    {
      args: [[2,3,5]],
      expected: 7,
    },
    {
      args: [[2,3,6]],
      expected: 4,
    },
    {
      args: [[30,1,1]],
      expected: 4,
    },
  ],
};
