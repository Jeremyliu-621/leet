import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-powerful-integers',
  title: 'Count the Number of Powerful Integers',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `You are given three integers \`start\`, \`finish\`, and \`limit\`, and a string \`s\` representing a positive integer.

A **powerful integer** is a positive integer \`x\` in the range \`[start..finish]\` such that:
- \`x\` ends with \`s\` (i.e., \`s\` is a suffix of \`x\`'s decimal representation), and
- **every digit** in \`x\` is at most \`limit\`.

Return the **total number** of powerful integers in the range \`[start, finish]\`.

**Constraints:**
- \`1 ≤ start ≤ finish ≤ 10^15\`
- \`1 ≤ limit ≤ 9\`
- \`1 ≤ s.length ≤ 6\`
- \`s\` consists only of digits and does not have leading zeros.
- All digits in \`s\` are at most \`limit\`.`,
  examples: [
    {
      input: 'start = 1, finish = 6000, limit = 4, s = "124"',
      output: '5',
      explanation: '"124", "1124", "2124", "3124", "4124" all end with "124" and each digit ≤ 4.',
    },
    {
      input: 'start = 15, finish = 215, limit = 6, s = "10"',
      output: '2',
      explanation: '"110" and "210" end with "10" and every digit ≤ 6.',
    },
    {
      input: 'start = 1000, finish = 2000, limit = 4, s = "3000"',
      output: '0',
      explanation: 's has 4 digits but 3000 and 4000 are out of range, and digits in s include 3 which is ≤ 4, but no such number is in range.',
    },
  ],
  constraints: ['Use digit DP: count(finish) - count(start-1) where count(n) = powerful integers in [1..n].'],
  hints: [
    'Convert to "count up to n" using digit DP, then subtract count(start-1) from count(finish).',
    'For count(n): treat n as a string. For the suffix to fit, the prefix of x (excluding the suffix digits) must be such that appending s gives a valid number ≤ n.',
    'Iterate from 0 to prefix max value: for each digit count d (length of n minus length of s), count prefixes where every digit ≤ limit and prefix || s ≤ n.',
  ],
  params: ['start', 'finish', 'limit', 's'],
  starterCode: {
    javascript: `function numberOfPowerfulInt(start, finish, limit, s) {
  function countUpTo(n) {
    const ns = String(n), sl = s.length, nl = ns.length;
    if (nl < sl) return 0;
    const prefixLen = nl - sl;
    // Check if suffix of ns matches s (if no prefix digits, just check n itself)
    const suffix = ns.slice(prefixLen);
    const memo = new Map();
    function dp(pos, tight) {
      if (pos === prefixLen) {
        // Now we must place s as suffix; check if it fits under n
        if (!tight) return 1;
        return suffix >= s ? 1 : 0;
      }
      const key = \`\${pos},\${tight}\`;
      if (memo.has(key)) return memo.get(key);
      const lo = pos === 0 ? 1 : 0; // no leading zeros in prefix (actually prefix can be 0 if nl > sl)
      const hi = tight ? +ns[pos] : limit;
      let res = 0;
      for (let d = (pos === 0 && prefixLen > 0 ? 1 : 0); d <= Math.min(hi, limit); d++) {
        res += dp(pos + 1, tight && d === +ns[pos]);
      }
      memo.set(key, res);
      return res;
    }
    if (prefixLen === 0) {
      // n has same length as s; check if n >= s and all digits <= limit
      for (const c of s) if (+c > limit) return 0;
      return ns >= s ? 1 : 0;
    }
    return dp(0, true);
  }
  return countUpTo(finish) - countUpTo(start - 1);
}`,
    typescript: `function numberOfPowerfulInt(start: number, finish: number, limit: number, s: string): number {
  function countUpTo(n: number): number {
    const ns = String(n), sl = s.length, nl = ns.length;
    if (nl < sl) return 0;
    const prefixLen = nl - sl;
    const suffix = ns.slice(prefixLen);
    if (prefixLen === 0) {
      for (const c of s) if (+c > limit) return 0;
      return ns >= s ? 1 : 0;
    }
    const memo = new Map<string, number>();
    function dp(pos: number, tight: boolean): number {
      if (pos === prefixLen) return !tight ? 1 : suffix >= s ? 1 : 0;
      const key = \`\${pos},\${tight}\`;
      if (memo.has(key)) return memo.get(key)!;
      const hi = tight ? Math.min(+ns[pos]!, limit) : limit;
      const lo = pos === 0 ? 1 : 0;
      let res = 0;
      for (let d = lo; d <= hi; d++) res += dp(pos + 1, tight && d === +ns[pos]!);
      memo.set(key, res);
      return res;
    }
    return dp(0, true);
  }
  return countUpTo(finish) - countUpTo(start - 1);
}`,
    python: `def numberOfPowerfulInt(start: int, finish: int, limit: int, s: str) -> int:
    from functools import lru_cache
    def count_up_to(n):
        ns = str(n); sl = len(s); nl = len(ns)
        if nl < sl: return 0
        prefix_len = nl - sl
        suffix = ns[prefix_len:]
        if prefix_len == 0:
            return 1 if all(int(c) <= limit for c in s) and ns >= s else 0
        @lru_cache(maxsize=None)
        def dp(pos, tight):
            if pos == prefix_len: return 1 if not tight or suffix >= s else 0
            hi = min(int(ns[pos]), limit) if tight else limit
            lo = 1 if pos == 0 else 0
            res = 0
            for d in range(lo, hi + 1):
                res += dp(pos + 1, tight and d == int(ns[pos]))
            return res
        return dp(0, True)
    return count_up_to(finish) - count_up_to(start - 1)`,
  },
  functionName: 'numberOfPowerfulInt',
  visibleTests: [
    { args: [1, 6000, 4, '124'], expected: 5 },
    { args: [15, 215, 6, '10'], expected: 2 },
    { args: [1000, 2000, 4, '3000'], expected: 0 },
  ],
  hiddenTests: [
    { args: [1, 100, 9, '1'], expected: 10 },
    { args: [1, 100, 1, '1'], expected: 2 },
    { args: [1, 1000000000000000, 9, '1'], expected: 100000000000000 },
    { args: [1, 10, 9, '10'], expected: 1 },
    { args: [100, 999, 5, '5'], expected: 30 },
    { args: [1, 9, 5, '6'], expected: 0 },
    { args: [1, 9, 9, '5'], expected: 1 },
  ],
};
