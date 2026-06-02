import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-substrings-with-fixed-ratio',
  title: 'Number of Substrings With Fixed Ratio',
  difficulty: 'medium',
  tags: ['strings', 'hash-map', 'math'],
  description: `You are given a binary string \`s\`, and two integers \`num1\` and \`num2\`. \`num1\` and \`num2\` are coprime numbers.

A **ratio substring** is a substring of \`s\` where the ratio of the number of \`'0'\`s to the number of \`'1'\`s equals \`num1 : num2\`.

In other words, if the substring has \`c0\` zeros and \`c1\` ones, then \`c0 * num2 == c1 * num1\` must hold (and the substring must be non-empty, containing at least one \`'0'\` and one \`'1'\`).

Return the number of **non-empty** ratio substrings.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '0 <= s[i] <= 1',
    '1 <= num1, num2 <= s.length',
    'gcd(num1, num2) == 1',
  ],
  examples: [
    {
      input: 's = "0110011", num1 = 1, num2 = 2',
      output: '4',
      explanation: 'Valid substrings with 0s:1s = 1:2 in "0110011": "011" (0-2, 1 zero 2 ones ✓), "011" (4-6, 1 zero 2 ones ✓), "110011" (1-6, 2 zeros 4 ones → 2*2=4=4*1 ✓), "10110011" does not exist. Using prefix key: key = 2*cnt0 - 1*cnt1; count pairs with equal key: key=0 at positions 0,3,6 gives 3 pairs; key=1 at positions 2,5 gives 1 pair. Total = 4.',
    },
    {
      input: 's = "10101", num1 = 3, num2 = 1',
      output: '0',
      explanation: 'No substring has ratio 3:1 (three 0s per one 1).',
    },
  ],
  hints: [
    'Define prefix counts: cnt0[i] = number of 0s in s[0..i-1], cnt1[i] = number of 1s in s[0..i-1].',
    'A substring s[l..r] is a ratio substring iff (cnt0[r+1]-cnt0[l]) * num2 == (cnt1[r+1]-cnt1[l]) * num1.',
    'Rearranging: num2*cnt0[r+1] - num1*cnt1[r+1] == num2*cnt0[l] - num1*cnt1[l]. Define key[i] = num2*cnt0[i] - num1*cnt1[i] and count pairs with equal keys using a hash map. The substring must be non-empty (need at least one 0 and one 1), so also track where each key value first appeared and ensure the substring has both 0s and 1s.',
  ],
  functionName: 'fixedRatio',
  params: ['s', 'num1', 'num2'],
  starterCode: {
    javascript: `function fixedRatio(s, num1, num2) {
  const freq = new Map();
  freq.set(0, 1);
  let cnt0 = 0, cnt1 = 0, ans = 0;
  for (const c of s) {
    if (c === '0') cnt0++; else cnt1++;
    const key = num2 * cnt0 - num1 * cnt1;
    ans += (freq.get(key) ?? 0);
    freq.set(key, (freq.get(key) ?? 0) + 1);
  }
  return ans;
}`,
    typescript: `function fixedRatio(s: string, num1: number, num2: number): number {
  const freq = new Map<number, number>();
  freq.set(0, 1);
  let cnt0 = 0, cnt1 = 0, ans = 0;
  for (const c of s) {
    if (c === '0') cnt0++; else cnt1++;
    const key = num2 * cnt0 - num1 * cnt1;
    ans += (freq.get(key) ?? 0);
    freq.set(key, (freq.get(key) ?? 0) + 1);
  }
  return ans;
}`,
    python: `def fixedRatio(s: str, num1: int, num2: int) -> int:
    from collections import defaultdict
    freq = defaultdict(int)
    freq[0] = 1
    cnt0 = cnt1 = ans = 0
    for c in s:
        if c == '0':
            cnt0 += 1
        else:
            cnt1 += 1
        key = num2 * cnt0 - num1 * cnt1
        ans += freq[key]
        freq[key] += 1
    return ans`,
  },
  visibleTests: [
    { args: ['0110011', 1, 2], expected: 4 },
    { args: ['10101', 3, 1], expected: 0 },
    { args: ['0', 1, 1], expected: 0 },
    { args: ['01', 1, 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['0011', 1, 1], expected: 2 },
    { args: ['00011011', 1, 2], expected: 5 },
    { args: ['111', 1, 1], expected: 0 },
    { args: ['000', 1, 1], expected: 0 },
    { args: ['0101010101', 1, 1], expected: 25 },
    { args: ['01', 1, 2], expected: 0 },
    { args: ['001', 2, 1], expected: 1 },
    { args: ['0011001100110011', 1, 1], expected: 44 },
  ],
};
