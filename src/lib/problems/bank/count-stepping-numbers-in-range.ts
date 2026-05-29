import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-stepping-numbers-in-range',
  title: 'Count Stepping Numbers in Range',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'math'],
  description: `A **stepping number** is an integer such that every pair of adjacent digits has an absolute difference of exactly \`1\`. For example, \`321\` is a stepping number while \`421\` is not.

Given two positive integers \`low\` and \`high\` represented as strings, return the count of stepping numbers in the inclusive range \`[low, high]\`.

Return the answer modulo \`10^9 + 7\`.`,
  constraints: [
    '`1 <= low.length, high.length <= 100`',
    '`low` and `high` consist of only digits.',
    '`low <= high`',
    '`low` and `high` do not contain leading zeros.',
  ],
  examples: [
    {
      input: 'low = "1", high = "11"',
      output: '10',
      explanation:
        'The stepping numbers in the range [1, 11] are 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Note that 11 is not a stepping number because |1 - 1| = 0.',
    },
    {
      input: 'low = "90", high = "101"',
      output: '2',
      explanation: 'The stepping numbers in the range [90, 101] are 98 and 101.',
    },
  ],
  hints: [
    'Use digit DP: count stepping numbers up to X, then answer = countUpTo(high) - countUpTo(low - 1).',
    'States for digit DP: (position, last_digit, is_tight, has_started). `is_tight` tracks whether the current prefix is still bounded by the limit. `has_started` tracks whether we\'ve placed a non-zero digit yet.',
    'For each position, try digits 0–9. If `is_tight`, the current digit cannot exceed the corresponding digit in the limit. If `has_started`, the new digit must differ from `last_digit` by exactly 1.',
    `\`\`\`js
function countSteppingNumbers(low, high) {
  const MOD = 1_000_000_007n;
  function countUpTo(s) {
    const n = s.length;
    const memo = new Map();
    function dp(pos, last, tight, started) {
      if (pos === n) return started ? 1n : 0n;
      const key = \`\${pos},\${last},\${tight},\${started}\`;
      if (memo.has(key)) return memo.get(key);
      const limit = tight ? +s[pos] : 9;
      let res = 0n;
      for (let d = 0; d <= limit; d++) {
        const newTight = tight && d === limit;
        if (!started && d === 0) { res = (res + dp(pos+1, -1, newTight, false)) % MOD; continue; }
        if (started && Math.abs(d - last) !== 1) continue;
        res = (res + dp(pos+1, d, newTight, true)) % MOD;
      }
      memo.set(key, res);
      return res;
    }
    return dp(0, -1, true, false);
  }
  function subtractOne(s) {
    const a = s.split('').map(Number);
    let i = a.length - 1;
    while (i >= 0 && a[i] === 0) { a[i] = 9; i--; }
    a[i]--;
    const r = a.join('').replace(/^0+/, '') || '0';
    return r;
  }
  const hi = countUpTo(high);
  const lo = countUpTo(subtractOne(low));
  return Number((hi - lo + MOD) % MOD);
}
\`\`\``,
  ],
  functionName: 'countSteppingNumbers',
  params: ['low', 'high'],
  starterCode: {
    javascript: `function countSteppingNumbers(low, high) {

}`,
    typescript: `function countSteppingNumbers(low: string, high: string): number {

}`,
    python: `def countSteppingNumbers(low, high):
    pass`,
  },
  visibleTests: [
    { args: ['1', '11'], expected: 10 },
    { args: ['90', '101'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['1', '9'], expected: 9 },
    { args: ['10', '15'], expected: 2 },
    { args: ['1', '21'], expected: 12 },
    { args: ['100', '200'], expected: 3 },
    { args: ['1', '999'], expected: 58 },
    { args: ['10', '99'], expected: 17 },
    { args: ['1', '1'], expected: 1 },
    { args: ['11', '11'], expected: 0 },
  ],
};
