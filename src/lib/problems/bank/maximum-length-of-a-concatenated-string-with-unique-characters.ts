import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-length-of-a-concatenated-string-with-unique-characters',
  title: 'Maximum Length of a Concatenated String with Unique Characters',
  difficulty: 'medium',
  tags: ['backtracking', 'strings'],
  description: `You are given an array of strings \`arr\`. A string \`s\` is formed by the concatenation of a **subsequence** of \`arr\` that has **unique characters**.

Return the **maximum** possible length of \`s\`.`,
  constraints: [
    '1 <= arr.length <= 16',
    '1 <= arr[i].length <= 26',
    'arr[i] contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 'arr = ["un","iq","ue"]',
      output: '4',
      explanation: 'All possible concatenations are "","un","iq","ue","uniq","ique","unue". Maximum unique chars = 4 ("uniq").',
    },
    {
      input: 'arr = ["cha","r","act","ers"]',
      output: '6',
      explanation: '"chaers" or "acters" both have 6 unique characters.',
    },
  ],
  hints: [
    'Represent each string as a bitmask of 26 bits (one per letter). Skip strings with duplicate characters.',
    'Use DFS/backtracking: for each string, include it only if its bitmask doesn\'t overlap with the current mask.',
    'Track the maximum popcount (number of set bits) encountered.',
  ],
  functionName: 'maxLength',
  params: ['arr'],
  starterCode: {
    javascript: `function maxLength(arr) {
  let dp = [[0, 0]]; // [mask, length]
  let ans = 0;
  for (const s of arr) {
    let sm = 0, valid = true;
    for (const c of s) {
      const b = 1 << (c.charCodeAt(0) - 97);
      if (sm & b) { valid = false; break; }
      sm |= b;
    }
    if (!valid) continue;
    const next = [];
    for (const [m, l] of dp) {
      if ((m & sm) === 0) {
        next.push([m | sm, l + s.length]);
        ans = Math.max(ans, l + s.length);
      }
    }
    dp = [...dp, ...next];
  }
  return ans;
}`,
    typescript: `function maxLength(arr: string[]): number {
  let dp: [number, number][] = [[0, 0]];
  let ans = 0;
  for (const s of arr) {
    let sm = 0, valid = true;
    for (const c of s) {
      const b = 1 << (c.charCodeAt(0) - 97);
      if (sm & b) { valid = false; break; }
      sm |= b;
    }
    if (!valid) continue;
    const next: [number, number][] = [];
    for (const [m, l] of dp) {
      if ((m & sm) === 0) {
        next.push([m | sm, l + s.length]);
        ans = Math.max(ans, l + s.length);
      }
    }
    dp = [...dp, ...next];
  }
  return ans;
}`,
    python: `def maxLength(arr):
    if hasattr(arr, 'to_py'): arr = list(arr.to_py())
    arr = [str(s) for s in arr]
    dp = [(0, 0)]
    ans = 0
    for s in arr:
        sm, valid = 0, True
        for c in s:
            b = 1 << (ord(c) - 97)
            if sm & b: valid = False; break
            sm |= b
        if not valid: continue
        nxt = []
        for m, l in dp:
            if not (m & sm):
                nxt.append((m | sm, l + len(s)))
                ans = max(ans, l + len(s))
        dp += nxt
    return ans`,
  },
  visibleTests: [
    { args: [['un', 'iq', 'ue']], expected: 4 },
    { args: [['cha', 'r', 'act', 'ers']], expected: 6 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 1 },
    { args: [['aa']], expected: 0 },
    { args: [['ab', 'cd', 'ef']], expected: 6 },
    { args: [['a', 'b', 'c', 'abc']], expected: 3 },
  ],
};
