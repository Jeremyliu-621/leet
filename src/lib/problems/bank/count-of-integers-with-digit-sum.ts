import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-integers-with-digit-sum',
  title: 'Count of Integers',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given two numeric strings \`num1\` and \`num2\` and two integers \`min_sum\` and \`max_sum\`. Return the number of integers \`x\` such that:

- \`num1 <= x <= num2\`
- The **digit sum** of \`x\` is in the range \`[min_sum, max_sum]\` (inclusive).

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

The **digit sum** of a number is the sum of all its decimal digits.`,
  constraints: [
    '`1 <= num1 <= num2 <= 10^22`',
    '`1 <= min_sum <= max_sum <= 400`',
  ],
  examples: [
    {
      input: 'num1 = "1", num2 = "12", min_sum = 1, max_sum = 8',
      output: '11',
      explanation: 'Integers from 1 to 12 with digit sum in [1,8]: 1,2,3,4,5,6,7,8,10,11,12. (9 has digit sum 9 > 8.) Count = 11.',
    },
    {
      input: 'num1 = "1", num2 = "5", min_sum = 1, max_sum = 5',
      output: '5',
      explanation: 'All integers 1–5 have digit sum in [1,5]. Count = 5.',
    },
  ],
  hints: [
    'Use digit DP: define f(n) = count of integers in [1..n] with digit sum in [min_sum, max_sum].',
    'Answer = f(num2) − f(num1) + (1 if num1\'s own digit sum is in range, else 0).',
    'In the digit DP, state = (position, tight, current_digit_sum). At each digit position, try placing 0–9 (or 0–digits[pos] if tight).',
    'Memoize: non-tight states depend only on (position, current_sum), so the table is small (≤22 × 400).',
    'Use BigInt or modular arithmetic carefully since counts can exceed 2^53.',
  ],
  functionName: 'count',
  params: ['num1', 'num2', 'min_sum', 'max_sum'],
  starterCode: {
    javascript: `function count(num1, num2, min_sum, max_sum) {
  const MOD = 1_000_000_007;
  function f(num) {
    const digits = num.split('').map(Number);
    const n = digits.length;
    const memo = new Map();
    function dp(pos, tight, sum) {
      if (sum > max_sum) return 0;
      if (pos === n) return sum >= min_sum ? 1 : 0;
      const key = tight + ',' + pos + ',' + sum;
      if (!tight && memo.has(key)) return memo.get(key);
      const limit = tight ? digits[pos] : 9;
      let res = 0;
      for (let d = 0; d <= limit; d++)
        res = (res + dp(pos + 1, tight && d === limit, sum + d)) % MOD;
      if (!tight) memo.set(key, res);
      return res;
    }
    return dp(0, true, 0);
  }
  function subtractOne(s) {
    const a = s.split('').map(Number);
    let i = a.length - 1;
    while (a[i] === 0) { a[i--] = 9; }
    a[i]--;
    let start = 0;
    while (start < a.length - 1 && a[start] === 0) start++;
    return a.slice(start).join('');
  }
  return (f(num2) - f(subtractOne(num1)) + MOD) % MOD;
}`,
    typescript: `function count(num1: string, num2: string, min_sum: number, max_sum: number): number {
  const MOD = 1_000_000_007;
  function f(num: string): number {
    const digits = num.split('').map(Number);
    const n = digits.length;
    const memo = new Map<string, number>();
    function dp(pos: number, tight: boolean, sum: number): number {
      if (sum > max_sum) return 0;
      if (pos === n) return sum >= min_sum ? 1 : 0;
      const key = tight + ',' + pos + ',' + sum;
      if (!tight && memo.has(key)) return memo.get(key)!;
      const limit = tight ? digits[pos]! : 9;
      let res = 0;
      for (let d = 0; d <= limit; d++)
        res = (res + dp(pos + 1, tight && d === limit, sum + d)) % MOD;
      if (!tight) memo.set(key, res);
      return res;
    }
    return dp(0, true, 0);
  }
  function subtractOne(s: string): string {
    const a = s.split('').map(Number);
    let i = a.length - 1;
    while (a[i] === 0) { a[i--] = 9; }
    a[i]!--;
    let start = 0;
    while (start < a.length - 1 && a[start] === 0) start++;
    return a.slice(start).join('');
  }
  return (f(num2) - f(subtractOne(num1)) + MOD) % MOD;
}`,
    python: `def count(num1, num2, min_sum, max_sum):
    MOD = 10**9 + 7
    from functools import lru_cache
    def f(num):
        digits = [int(c) for c in num]
        n = len(digits)
        @lru_cache(maxsize=None)
        def dp(pos, tight, s):
            if s > max_sum: return 0
            if pos == n: return 1 if s >= min_sum else 0
            limit = digits[pos] if tight else 9
            res = 0
            for d in range(limit + 1):
                res = (res + dp(pos + 1, tight and d == limit, s + d)) % MOD
            return res
        result = dp(0, True, 0)
        dp.cache_clear()
        return result
    def subtract_one(s):
        a = list(map(int, s))
        i = len(a) - 1
        while a[i] == 0:
            a[i] = 9
            i -= 1
        a[i] -= 1
        start = 0
        while start < len(a) - 1 and a[start] == 0:
            start += 1
        return ''.join(map(str, a[start:]))
    return (f(num2) - f(subtract_one(num1)) + MOD) % MOD`,
  },
  visibleTests: [
    { args: ['1', '12', 1, 8], expected: 11 },
    { args: ['1', '5', 1, 5], expected: 5 },
  ],
  hiddenTests: [
    { args: ['1', '9', 1, 9], expected: 9 },
    { args: ['1', '9', 5, 5], expected: 1 },
    { args: ['1', '100', 1, 9], expected: 55 },
    { args: ['10', '20', 1, 10], expected: 11 },
    { args: ['1', '1000', 10, 15], expected: 428 },
    { args: ['1', '99', 1, 1], expected: 2 },
    { args: ['5', '5', 5, 5], expected: 1 },
    { args: ['5', '5', 6, 6], expected: 0 },
    { args: ['1', '99999999999999999999', 1, 400], expected: 4899 },
  ],
};
