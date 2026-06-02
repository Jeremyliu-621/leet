import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-beautiful-numbers',
  title: 'Count Beautiful Numbers',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `Given two integers \`lo\` and \`hi\`, count integers in the range \`[lo, hi]\` that are **beautiful**.

An integer is **beautiful** if:
- It contains **no zero digits**.
- Its **digit sum** divides the integer itself.

Return the count of beautiful integers in \`[lo, hi]\`.

**Example:** 12 is beautiful because its digits are 1 and 2 (no zeros), digit sum = 3, and 12 % 3 = 0.
**Example:** 11 is not beautiful because digit sum = 2 and 11 % 2 = 1 ≠ 0.`,
  constraints: [
    '0 <= lo <= hi <= 10^9',
  ],
  examples: [
    {
      input: 'lo = 1, hi = 9',
      output: '9',
      explanation: 'Every single-digit number 1-9 is beautiful: digit sum equals the number itself, so the number always divides evenly by its digit sum.',
    },
    {
      input: 'lo = 10, hi = 22',
      output: '3',
      explanation: 'Beautiful numbers in [10,22]: 12 (sum=3, 12%3=0), 18 (sum=9, 18%9=0), 21 (sum=3, 21%3=0). Numbers like 11 (sum=2, 11%2=1) and 20 (has a zero) are not beautiful.',
    },
    {
      input: 'lo = 1, hi = 100',
      output: '23',
      explanation: 'All 9 single-digit numbers (1-9) plus beautiful two-digit numbers: 11 (no, 11%2≠0), 12 (yes), 13 (no), ..., checking all yields 14 more beautiful numbers in 10-99.',
    },
  ],
  hints: [
    'Use digit DP. Count beautiful numbers up to some limit N with a function f(N), then answer = f(hi) - f(lo-1).',
    'State: (position, digit_sum, number_mod_lcm, tight, started). The LCM of all digit sums 1..9 is 2520, so track number mod 2520.',
    'At each digit position, only allow digits 1-9 (skip zeros). If "tight" is true, the digit is bounded by the limit at that position.',
    'At the end of all digits, the number is beautiful if digit_sum > 0 and (number % digit_sum) == 0. Use (number mod 2520) mod digit_sum to check divisibility.',
  ],
  functionName: 'countBeautifulNumbers',
  params: ['lo', 'hi'],
  starterCode: {
    javascript: `function countBeautifulNumbers(lo, hi) {
  const LCM = 2520;
  function count(n) {
    if (n <= 0) return 0;
    const digits = String(n).split('').map(Number);
    const len = digits.length;
    const memo = new Map();
    function dp(pos, digitSum, numMod, tight, started) {
      if (pos === len) return started && digitSum > 0 && numMod % digitSum === 0 ? 1 : 0;
      const key = pos + ',' + digitSum + ',' + numMod + ',' + tight + ',' + started;
      if (memo.has(key)) return memo.get(key);
      const limit = tight ? digits[pos] : 9;
      let res = 0;
      for (let d = 0; d <= limit; d++) {
        if (d === 0 && !started) res += dp(pos + 1, 0, 0, tight && d === limit, false);
        else if (d === 0) continue;
        else res += dp(pos + 1, digitSum + d, (numMod * 10 + d) % LCM, tight && d === limit, true);
      }
      memo.set(key, res);
      return res;
    }
    return dp(0, 0, 0, true, false);
  }
  return count(hi) - count(lo - 1);
}`,
    typescript: `function countBeautifulNumbers(lo: number, hi: number): number {
  const LCM = 2520;
  function count(n: number): number {
    if (n <= 0) return 0;
    const digits = String(n).split('').map(Number);
    const len = digits.length;
    const memo = new Map<string, number>();
    function dp(pos: number, digitSum: number, numMod: number, tight: boolean, started: boolean): number {
      if (pos === len) return started && digitSum > 0 && numMod % digitSum === 0 ? 1 : 0;
      const key = pos + ',' + digitSum + ',' + numMod + ',' + tight + ',' + started;
      if (memo.has(key)) return memo.get(key)!;
      const limit = tight ? digits[pos]! : 9;
      let res = 0;
      for (let d = 0; d <= limit; d++) {
        if (d === 0 && !started) res += dp(pos + 1, 0, 0, tight && d === limit, false);
        else if (d === 0) continue;
        else res += dp(pos + 1, digitSum + d, (numMod * 10 + d) % LCM, tight && d === limit, true);
      }
      memo.set(key, res);
      return res;
    }
    return dp(0, 0, 0, true, false);
  }
  return count(hi) - count(lo - 1);
}`,
    python: `def countBeautifulNumbers(lo, hi):
    from functools import lru_cache
    LCM = 2520
    def count(n):
        if n <= 0:
            return 0
        digits = [int(c) for c in str(n)]
        length = len(digits)
        @lru_cache(maxsize=None)
        def dp(pos, digit_sum, num_mod, tight, started):
            if pos == length:
                return 1 if started and digit_sum > 0 and num_mod % digit_sum == 0 else 0
            limit = digits[pos] if tight else 9
            res = 0
            for d in range(limit + 1):
                if d == 0 and not started:
                    res += dp(pos + 1, 0, 0, tight and d == limit, False)
                elif d == 0:
                    continue
                else:
                    res += dp(pos + 1, digit_sum + d, (num_mod * 10 + d) % LCM, tight and d == limit, True)
            return res
        result = dp(0, 0, 0, True, False)
        dp.cache_clear()
        return result
    return count(hi) - count(lo - 1)`,
  },
  visibleTests: [
    { args: [1, 9], expected: 9 },
    { args: [10, 22], expected: 3 },
    { args: [1, 100], expected: 23 },
    { args: [10, 10], expected: 0 },
  ],
  hiddenTests: [
    { args: [12, 12], expected: 1 },
    { args: [11, 11], expected: 0 },
    { args: [100, 200], expected: 17 },
    { args: [1, 1000], expected: 131 },
    { args: [999, 999], expected: 1 },
    { args: [1000, 1000], expected: 0 },
    { args: [1, 1], expected: 1 },
    { args: [9, 9], expected: 1 },
  ],
};
