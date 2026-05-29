import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-k-reducible-numbers-less-than-n',
  title: 'Count K-Reducible Numbers Less Than N',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming', 'math'],
  description: `You are given a binary string \`s\` representing a positive integer \`N\` in binary, and a positive integer \`k\`.

An integer \`x\` is called **k-reducible** if performing the following operation **at most** \`k\` times reduces \`x\` to \`1\`:

- Replace \`x\` with the count of set bits in \`x\` (its popcount / number of 1-bits).

Return the number of positive integers **strictly less than** \`N\` that are k-reducible. Since the answer may be very large, return it **modulo 10^9 + 7**.

**Note:** \`1\` itself requires \`0\` operations (it is already 1), so it is always 0-reducible and therefore also k-reducible for any k ≥ 0.`,
  constraints: [
    '1 <= s.length <= 800',
    "s[0] == '1'",
    "s consists only of '0' and '1'.",
    '1 <= k <= 5',
  ],
  examples: [
    {
      input: 's = "111", k = 1',
      output: '3',
      explanation:
        'N = 7. Integers in [1,6]: 1(1→ done, 0 ops), 2(10→1, 1 op), 3(11→2→1, 2 ops), 4(100→1, 1 op), 5(101→2→1, 2 ops), 6(110→2→1, 2 ops). Exactly 1 op: {1 is 0 ops}, {2, 4} are 1-reducible. With k=1: x is 1-reducible if it needs ≤1 ops: 1 (0 ops), 2 (1 op), 4 (1 op) → 3 numbers.',
    },
    {
      input: 's = "1000", k = 2',
      output: '6',
      explanation:
        'N = 8. Numbers in [1,7] with ≤2 reduction steps to reach 1: 1(0), 2(1), 3(2), 4(1), 5(2), 6(2), 7(3 ops: 7→3→2→1). So 1,2,3,4,5,6 qualify → 6.',
    },
    {
      input: 's = "1", k = 1',
      output: '0',
      explanation: 'N = 1. There are no positive integers strictly less than 1.',
    },
  ],
  hints: [
    'For each popcount value `c` (1 ≤ c ≤ len(s)), precompute `steps[c]` = minimum operations to reduce `c` to 1. `steps[1]=0`; for `c>1`, `steps[c] = 1 + steps[popcount(c)}`.',
    'Use digit DP on the binary string to count, for each `c`, how many integers in `[1, N-1]` have exactly `c` set bits. A number less than N has a `1` bit flipped to `0` at some position `i`, with the remaining bits freely chosen.',
    'For each position `i` where `s[i] == \'1\'`, the numbers that "branch off" here have `prefix_ones` set bits already, and can freely set any subset of the remaining `n-1-i` bits. So they contribute `C(n-1-i, c - prefix_ones)` numbers with total popcount `c`.',
    'Sum `count[c]` for all `c` where `steps[c] <= k-1`. Use Pascal\'s triangle mod 10^9+7 for the binomial coefficients.',
  ],
  functionName: 'countKReducibleNumbers',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countKReducibleNumbers(s, k) {
  // your code here
}`,
    python: `def countKReducibleNumbers(s, k):
    # your code here
    pass`,
  },
  visibleTests: [
    { args: ['111', 1], expected: 3 },
    { args: ['1000', 2], expected: 6 },
    { args: ['1', 1], expected: 0 },
  ],
  hiddenTests: [
    { args: ['10', 1], expected: 1 },
    { args: ['11', 1], expected: 2 },
    { args: ['100', 1], expected: 2 },
    { args: ['11111', 2], expected: 20 },
    { args: ['111', 2], expected: 6 },
    { args: ['1000', 1], expected: 3 },
    { args: ['10000', 3], expected: 15 },
    { args: ['11111111', 3], expected: 246 },
    { args: ['11', 2], expected: 2 },
  ],
};
