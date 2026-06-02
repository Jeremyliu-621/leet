import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-special-integers',
  title: 'Count Special Integers',
  difficulty: 'hard',
  tags: ['math', 'dynamic-programming'],
  description: `We call a positive integer **special** if all of its digits are **distinct**.

Given a positive integer \`n\`, return the number of special integers in the range \`[1, n]\`.`,
  constraints: [
    '`1 <= n <= 2 * 10^9`',
  ],
  examples: [
    {
      input: 'n = 20',
      output: '19',
      explanation: 'All integers from 1 to 20 are special except 11, which has two identical digits (1 and 1).',
    },
    {
      input: 'n = 5',
      output: '5',
      explanation: '1, 2, 3, 4, and 5 are all special.',
    },
    {
      input: 'n = 135',
      output: '110',
      explanation: '9 single-digit + 81 two-digit + 20 three-digit special numbers up to 135.',
    },
  ],
  hints: [
    'Count digit by digit using a "digit DP" approach. Track which digits have been used with a bitmask.',
    'Separate the count into: numbers with fewer digits than `n`, and numbers with the same number of digits as `n` but constrained by `n\'s` actual digits.',
    '```js\nfunction countSpecialNumbers(n) {\n  const digits = String(n).split("").map(Number);\n  const len = digits.length;\n  const memo = new Map();\n  function dp(pos, mask, tight, started) {\n    if (pos === len) return started ? 1 : 0;\n    const key = `${pos},${mask},${tight},${started}`;\n    if (memo.has(key)) return memo.get(key);\n    const limit = tight ? digits[pos] : 9;\n    let res = 0;\n    for (let d = 0; d <= limit; d++) {\n      if (started && (mask >> d & 1)) continue;\n      res += dp(pos + 1,\n        (started || d !== 0) ? mask | (1 << d) : 0,\n        tight && d === limit,\n        started || d !== 0);\n    }\n    memo.set(key, res);\n    return res;\n  }\n  return dp(0, 0, true, false);\n}\n```',
  ],
  functionName: 'countSpecialNumbers',
  params: ['n'],
  starterCode: {
    javascript: `function countSpecialNumbers(n) {
  const digits = String(n).split('').map(Number);
  const len = digits.length;
  const memo = new Map();
  function dp(pos, mask, tight, started) {
    if (pos === len) return started ? 1 : 0;
    const key = \`\${pos},\${mask},\${tight},\${started}\`;
    if (memo.has(key)) return memo.get(key);
    const limit = tight ? digits[pos] : 9;
    let res = 0;
    for (let d = 0; d <= limit; d++) {
      if (started && (mask >> d & 1)) continue;
      const newStarted = started || d !== 0;
      const newMask = newStarted ? mask | (1 << d) : 0;
      res += dp(pos + 1, newMask, tight && d === limit, newStarted);
    }
    memo.set(key, res);
    return res;
  }
  return dp(0, 0, true, false);
}`,
    typescript: `function countSpecialNumbers(n: number): number {
  const digits = String(n).split('').map(Number);
  const len = digits.length;
  const memo = new Map<string, number>();
  function dp(pos: number, mask: number, tight: boolean, started: boolean): number {
    if (pos === len) return started ? 1 : 0;
    const key = \`\${pos},\${mask},\${tight},\${started}\`;
    if (memo.has(key)) return memo.get(key)!;
    const limit = tight ? digits[pos]! : 9;
    let res = 0;
    for (let d = 0; d <= limit; d++) {
      if (started && (mask >> d & 1)) continue;
      const newStarted = started || d !== 0;
      const newMask = newStarted ? mask | (1 << d) : 0;
      res += dp(pos + 1, newMask, tight && d === limit, newStarted);
    }
    memo.set(key, res);
    return res;
  }
  return dp(0, 0, true, false);
}`,
    python: `def countSpecialNumbers(n):
    digits = list(map(int, str(n)))
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(pos, mask, tight, started):
        if pos == len(digits): return 1 if started else 0
        limit = digits[pos] if tight else 9
        res = 0
        for d in range(limit + 1):
            if started and (mask >> d & 1): continue
            new_started = started or d != 0
            new_mask = mask | (1 << d) if new_started else 0
            res += dp(pos + 1, new_mask, tight and d == limit, new_started)
        return res
    return dp(0, 0, True, False)`,
  },
  visibleTests: [
    { args: [20], expected: 19 },
    { args: [5], expected: 5 },
    { args: [135], expected: 110 },
  ],
  hiddenTests: [
    { args: [1], expected: 1 },
    { args: [9], expected: 9 },
    { args: [10], expected: 10 },
    { args: [99], expected: 90 },
    { args: [100], expected: 90 },
    { args: [999], expected: 738 },
    { args: [1000], expected: 738 },
    { args: [9999], expected: 5274 },
    { args: [100000], expected: 32490 },
    { args: [1234567890], expected: 5658004 },
  ],
};
