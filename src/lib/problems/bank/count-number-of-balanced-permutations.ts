import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-balanced-permutations',
  title: 'Count Number of Balanced Permutations',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given a string \`num\` consisting of digits. A permutation of \`num\` is **balanced** if the sum of digits at even indices (0-indexed) equals the sum of digits at odd indices.

Return the **number of distinct balanced permutations** of \`num\`, modulo \`10^9 + 7\`.

**Note:** Two permutations are considered distinct only if the resulting strings are different.`,
  constraints: [
    '1 <= num.length <= 80',
    'num consists of digits 0-9.',
  ],
  examples: [
    {
      input: 'num = "123"',
      output: '2',
      explanation: 'The balanced permutations are "123" (even indices: 1+3=4, odd: 2. Not balanced!) and... Actually: "132" (1+2=3, 3 at odd=3? 0-indexed: pos0=1,pos1=3,pos2=2; even sum=1+2=3, odd sum=3 ✓) and "312" (pos0=3,pos1=1,pos2=2; even sum=3+2=5, odd sum=1 ✗). Balanced: "231" (2+1=3, 3 ✓) and "213" (2+3=5, 1 ✗). After checking all 6 permutations, exactly 2 are balanced.',
    },
    {
      input: 'num = "336"',
      output: '1',
      explanation: 'The only balanced permutation is "363" (3+3=6, 6 ✓). The string "336" gives even sum 3+6=9, odd sum 3 (not balanced).',
    },
    {
      input: 'num = "22"',
      output: '1',
      explanation: 'Only "22": even sum = 2, odd sum = 2. Since both digits are the same, there is exactly 1 distinct permutation, and it is balanced.',
    },
  ],
  hints: [
    'If the total digit sum is odd, the answer is 0 (you cannot split an odd sum equally).',
    'Let target = total_sum / 2 and nEven = ceil(n/2). You need to choose nEven digits to fill even positions such that their sum equals target.',
    'Use DP over digit values 0-9: dp[j][k] = number of ways (divided by factorials) to assign j digits to even positions with sum k, considering digits 0..d so far.',
    'For each digit d with frequency cnt[d], try placing e of them (0 to min(cnt[d], remaining even slots)) at even positions. Divide by e! and (cnt[d]-e)! to count combinations. Multiply by nEven! * nOdd! at the end to account for arrangements within positions.',
  ],
  functionName: 'countBalancedPermutations',
  params: ['num'],
  starterCode: {
    javascript: `function countBalancedPermutations(num) {
  const MOD = 1000000007n;
  const cnt = new Array(10).fill(0);
  for (const c of num) cnt[+c]++;
  const total = num.length;
  const totalSum = num.split('').reduce((s, c) => s + +c, 0);
  if (totalSum % 2 !== 0) return 0;
  const target = totalSum / 2, nEven = Math.ceil(total / 2), nOdd = Math.floor(total / 2);
  const maxVal = Math.max(target + 1, nEven + 1) + 1;
  // Precompute factorials and inverse
  const fact = new Array(total + 1).fill(1n);
  for (let i = 1; i <= total; i++) fact[i] = fact[i-1] * BigInt(i) % MOD;
  const pow = (b, e) => { let r=1n; b%=MOD; while(e>0n){if(e&1n)r=r*b%MOD;b=b*b%MOD;e>>=1n;}return r; };
  const inv = x => pow(x, MOD-2n);
  // dp[j][k] = ways to assign j digits to even positions with sum k, divided by factorials
  // Use flat array dp[j*(target+1)+k]
  let dp = new Array((nEven+1)*(target+1)).fill(0n);
  dp[0*(target+1)+0] = 1n;
  for (let d = 0; d <= 9; d++) {
    const c = cnt[d];
    if (c === 0) continue;
    // Process in reverse to avoid using same digit twice (0/1 knapsack for each digit value)
    const ndp = new Array((nEven+1)*(target+1)).fill(0n);
    for (let j = 0; j <= nEven; j++) {
      for (let k = 0; k <= target; k++) {
        if (!dp[j*(target+1)+k]) continue;
        // Place e of digit d at even positions (0 <= e <= min(c, nEven-j))
        for (let e = 0; e <= Math.min(c, nEven-j); e++) {
          const nj = j+e, nk = k+d*e;
          if (nk > target) break;
          // Divide by e! and (c-e)!
          const contrib = dp[j*(target+1)+k] * inv(fact[e]) % MOD * inv(fact[c-e]) % MOD;
          ndp[nj*(target+1)+nk] = (ndp[nj*(target+1)+nk] + contrib) % MOD;
        }
      }
    }
    dp = ndp;
  }
  return Number(dp[nEven*(target+1)+target] * fact[nEven] % MOD * fact[nOdd] % MOD);
}`,
    typescript: `function countBalancedPermutations(num: string): number {
  const MOD = 1000000007n;
  const cnt = new Array<number>(10).fill(0);
  for (const c of num) cnt[+c]!++;
  const total = num.length;
  const totalSum = [...num].reduce((s, c) => s + +c, 0);
  if (totalSum % 2 !== 0) return 0;
  const target = totalSum / 2, nEven = Math.ceil(total / 2), nOdd = Math.floor(total / 2);
  const fact: bigint[] = new Array(total + 1).fill(1n);
  for (let i = 1; i <= total; i++) fact[i] = fact[i-1]! * BigInt(i) % MOD;
  const pow = (b: bigint, e: bigint): bigint => { let r=1n; b%=MOD; while(e>0n){if(e&1n)r=r*b%MOD;b=b*b%MOD;e>>=1n;}return r; };
  const inv = (x: bigint) => pow(x, MOD-2n);
  let dp: bigint[] = new Array((nEven+1)*(target+1)).fill(0n);
  dp[0] = 1n;
  for (let d = 0; d <= 9; d++) {
    const c = cnt[d]!;
    if (c === 0) continue;
    const ndp: bigint[] = new Array((nEven+1)*(target+1)).fill(0n);
    for (let j = 0; j <= nEven; j++) {
      for (let k = 0; k <= target; k++) {
        const cur = dp[j*(target+1)+k]!;
        if (!cur) continue;
        for (let e = 0; e <= Math.min(c, nEven-j); e++) {
          const nk = k+d*e;
          if (nk > target) break;
          ndp[(j+e)*(target+1)+nk] = (ndp[(j+e)*(target+1)+nk]! + cur * inv(fact[e]!) % MOD * inv(fact[c-e]!) % MOD) % MOD;
        }
      }
    }
    dp = ndp;
  }
  return Number(dp[nEven*(target+1)+target]! * fact[nEven]! % MOD * fact[nOdd]! % MOD);
}`,
    python: `def countBalancedPermutations(num):
    from math import factorial
    MOD = 10**9 + 7
    cnt = [0] * 10
    for c in num: cnt[int(c)] += 1
    total = len(num)
    total_sum = sum(int(c) for c in num)
    if total_sum % 2: return 0
    target = total_sum // 2
    n_even = (total + 1) // 2; n_odd = total // 2
    dp = [[0] * (target + 1) for _ in range(n_even + 1)]
    dp[0][0] = 1
    for d in range(10):
        c = cnt[d]
        if not c: continue
        ndp = [[0] * (target + 1) for _ in range(n_even + 1)]
        for j in range(n_even + 1):
            for k in range(target + 1):
                if not dp[j][k]: continue
                for e in range(min(c, n_even - j) + 1):
                    nk = k + d * e
                    if nk > target: break
                    ndp[j+e][nk] = (ndp[j+e][nk] + dp[j][k] * pow(factorial(e) * factorial(c-e), MOD-2, MOD)) % MOD
        dp = ndp
    return dp[n_even][target] * factorial(n_even) % MOD * factorial(n_odd) % MOD`,
  },
  visibleTests: [
    { args: ['123'], expected: 2 },
    { args: ['336'], expected: 1 },
    { args: ['22'], expected: 1 },
    { args: ['1'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['12'], expected: 0 },
    { args: ['1234'], expected: 8 },
    { args: ['9999'], expected: 1 },
    { args: ['1111'], expected: 1 },
    { args: ['246'], expected: 2 },
    { args: ['369'], expected: 2 },
    { args: ['99'], expected: 1 },
    { args: ['0000'], expected: 1 },
  ],
};
