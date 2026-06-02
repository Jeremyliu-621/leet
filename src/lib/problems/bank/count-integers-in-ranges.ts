import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-integers-in-ranges',
  title: 'Count Integers in Ranges',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given two integers \`lo\` and \`hi\`. Return the count of **stepping numbers** in the inclusive range \`[lo, hi]\`.

A **stepping number** is an integer such that all of its adjacent digits have an absolute difference of exactly \`1\`.

Since the answer may be very large, return it **modulo 10^9 + 7**.`,
  constraints: ['0 <= lo <= hi <= 10^15'],
  examples: [
    {
      input: 'lo = 0, hi = 21',
      output: '13',
      explanation: 'Stepping numbers in [0, 21]: 0,1,2,3,4,5,6,7,8,9,10,12,21. Total = 13.',
    },
    {
      input: 'lo = 10, hi = 15',
      output: '2',
      explanation: 'Stepping numbers in [10, 15]: 10, 12. Total = 2.',
    },
  ],
  hints: [
    'Use digit DP: count stepping numbers ≤ n. Answer = count(hi) - count(lo - 1).',
    'State: (position, last_digit, tight, started). tight = whether we\'re still bounded by n\'s digits. started = whether a non-zero digit has been placed.',
    'At each position, try digits 0-9 (limited by tight). The next digit must be last_digit ± 1 (once started).',
  ],
  functionName: 'countSteppingNumbers',
  params: ['lo', 'hi'],
  starterCode: {
    javascript: `function countSteppingNumbers(lo, hi) {
  const MOD = 1_000_000_007;
  function count(n) {
    if (n < 0) return 0;
    const digits = String(n).split('').map(Number);
    const len = digits.length;
    const memo = new Map();
    function dp(pos, last, tight, started) {
      if (pos === len) return 1;
      const key = pos + ',' + last + ',' + tight + ',' + started;
      if (!tight && memo.has(key)) return memo.get(key);
      const limit = tight ? digits[pos] : 9;
      let res = 0;
      for (let d = 0; d <= limit; d++) {
        const isTight = tight && d === limit;
        if (!started) {
          if (d === 0) res = (res + dp(pos + 1, -1, isTight, false)) % MOD;
          else res = (res + dp(pos + 1, d, isTight, true)) % MOD;
        } else if (Math.abs(d - last) === 1) {
          res = (res + dp(pos + 1, d, isTight, true)) % MOD;
        }
      }
      if (!tight) memo.set(key, res);
      return res;
    }
    return dp(0, -1, true, false);
  }
  return (count(hi) - count(lo - 1) + MOD) % MOD;
}`,
    typescript: `function countSteppingNumbers(lo: number, hi: number): number {
  const MOD = 1_000_000_007;
  function count(n: number): number {
    if (n < 0) return 0;
    const digits = String(n).split('').map(Number);
    const len = digits.length;
    const memo = new Map<string, number>();
    function dp(pos: number, last: number, tight: boolean, started: boolean): number {
      if (pos === len) return 1;
      const key = pos + ',' + last + ',' + tight + ',' + started;
      if (!tight && memo.has(key)) return memo.get(key)!;
      const limit = tight ? digits[pos]! : 9;
      let res = 0;
      for (let d = 0; d <= limit; d++) {
        const isTight = tight && d === limit;
        if (!started) {
          if (d === 0) res = (res + dp(pos + 1, -1, isTight, false)) % MOD;
          else res = (res + dp(pos + 1, d, isTight, true)) % MOD;
        } else if (Math.abs(d - last) === 1) {
          res = (res + dp(pos + 1, d, isTight, true)) % MOD;
        }
      }
      if (!tight) memo.set(key, res);
      return res;
    }
    return dp(0, -1, true, false);
  }
  return (count(hi) - count(lo - 1) + MOD) % MOD;
}`,
    python: `def countSteppingNumbers(lo, hi):
    MOD = 10**9 + 7
    from functools import lru_cache
    def count(n):
        if n < 0:
            return 0
        digits = [int(c) for c in str(n)]
        length = len(digits)
        @lru_cache(maxsize=None)
        def dp(pos, last, tight, started):
            if pos == length:
                return 1
            limit = digits[pos] if tight else 9
            res = 0
            for d in range(limit + 1):
                is_tight = tight and d == limit
                if not started:
                    if d == 0:
                        res = (res + dp(pos + 1, -1, is_tight, False)) % MOD
                    else:
                        res = (res + dp(pos + 1, d, is_tight, True)) % MOD
                elif abs(d - last) == 1:
                    res = (res + dp(pos + 1, d, is_tight, True)) % MOD
            return res
        result = dp(0, -1, True, False)
        dp.cache_clear()
        return result
    return (count(hi) - count(lo - 1) + MOD) % MOD`,
  },
  visibleTests: [
    { args: [0, 21], expected: 13 },
    { args: [10, 15], expected: 2 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 1 },
    { args: [1, 9], expected: 9 },
    { args: [0, 9], expected: 10 },
    { args: [100, 200], expected: 3 },
    { args: [0, 100], expected: 27 },
    { args: [1000000000000000, 1000000000000000], expected: 0 },
  ],
};
