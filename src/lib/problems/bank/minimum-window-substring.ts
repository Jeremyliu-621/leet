import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-window-substring',
  title: 'Minimum Window Substring',
  difficulty: 'hard',
  tags: ['strings', 'sliding-window', 'hash-map'],
  description: `Given two strings \`s\` and \`t\`, return the **minimum window substring** of \`s\` such that every character in \`t\` (including duplicates) is included in the window. If there is no such substring, return \`""\`.

A **window** is a contiguous substring of \`s\`. The characters from \`t\` do not need to appear in the same order in the window — only all characters must be present with correct multiplicity.

**Example:** \`s = "ADOBECODEBANC"\`, \`t = "ABC"\` → \`"BANC"\` (length 4).`,
  constraints: [
    '1 <= s.length, t.length <= 1000',
    's and t consist of uppercase and lowercase English letters',
    'The answer is unique when it exists',
  ],
  examples: [
    {
      input: 's = "ADOBECODEBANC", t = "ABC"',
      output: '"BANC"',
      explanation: 'The minimum window "BANC" contains A, B, and C.',
    },
    {
      input: 's = "a", t = "a"',
      output: '"a"',
      explanation: 'The entire string is the minimum window.',
    },
    {
      input: 's = "a", t = "b"',
      output: '""',
      explanation: 't has a character not present in s, so return "".',
    },
  ],
  hints: [
    'Use a sliding window with two pointers. Expand the right pointer until the window contains all characters of t, then contract the left pointer to find the smallest valid window.',
    'Keep a frequency map of characters needed from t. Maintain a "have" count of how many distinct characters are fully satisfied. When "have === need", record the window and try shrinking from the left.',
    '`const need = {}; for (const c of t) need[c] = (need[c] || 0) + 1;\nconst have = {}; let formed = 0, required = Object.keys(need).length;\nlet best = [Infinity, 0, 0], l = 0;\nfor (let r = 0; r < s.length; r++) {\n  have[s[r]] = (have[s[r]] || 0) + 1;\n  if (need[s[r]] && have[s[r]] === need[s[r]]) formed++;\n  while (formed === required) {\n    if (r - l + 1 < best[0]) best = [r - l + 1, l, r];\n    have[s[l]]--;\n    if (need[s[l]] && have[s[l]] < need[s[l]]) formed--;\n    l++;\n  }\n}\nreturn best[0] === Infinity ? "" : s.slice(best[1], best[2] + 1);`',
  ],
  functionName: 'minWindow',
  params: ['s', 't'],
  starterCode: {
    javascript: `function minWindow(s, t) {
  const need = {}, have = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;
  const required = Object.keys(need).length;
  let formed = 0, l = 0, best = [Infinity, 0, 0];
  for (let r = 0; r < s.length; r++) {
    have[s[r]] = (have[s[r]] || 0) + 1;
    if (need[s[r]] && have[s[r]] === need[s[r]]) formed++;
    while (formed === required) {
      if (r - l + 1 < best[0]) best = [r - l + 1, l, r];
      have[s[l]]--;
      if (need[s[l]] && have[s[l]] < need[s[l]]) formed--;
      l++;
    }
  }
  return best[0] === Infinity ? '' : s.slice(best[1], best[2] + 1);
}`,
    typescript: `function minWindow(s: string, t: string): string {
  const need: Record<string, number> = {}, have: Record<string, number> = {};
  for (const c of t) need[c] = (need[c] ?? 0) + 1;
  const required = Object.keys(need).length;
  let formed = 0, l = 0, best: [number, number, number] = [Infinity, 0, 0];
  for (let r = 0; r < s.length; r++) {
    have[s[r]!] = (have[s[r]!] ?? 0) + 1;
    if (need[s[r]!] && have[s[r]!] === need[s[r]!]) formed++;
    while (formed === required) {
      if (r - l + 1 < best[0]) best = [r - l + 1, l, r];
      have[s[l]!]!--;
      if (need[s[l]!] && have[s[l]!]! < need[s[l]!]!) formed--;
      l++;
    }
  }
  return best[0] === Infinity ? '' : s.slice(best[1], best[2] + 1);
}`,
    python: `def minWindow(s, t):
    if hasattr(s, 'to_py'): s = s.to_py()
    if hasattr(t, 'to_py'): t = t.to_py()
    from collections import Counter
    need = Counter(t); have = {}
    required = len(need); formed = 0; l = 0
    best = (float('inf'), 0, 0)
    for r, c in enumerate(s):
        have[c] = have.get(c, 0) + 1
        if c in need and have[c] == need[c]: formed += 1
        while formed == required:
            if r - l + 1 < best[0]: best = (r - l + 1, l, r)
            have[s[l]] -= 1
            if s[l] in need and have[s[l]] < need[s[l]]: formed -= 1
            l += 1
    return '' if best[0] == float('inf') else s[best[1]:best[2]+1]`,
  },
  visibleTests: [
    { args: ['ADOBECODEBANC', 'ABC'], expected: 'BANC' },
    { args: ['a', 'a'], expected: 'a' },
    { args: ['a', 'b'], expected: '' },
  ],
  hiddenTests: [
    { args: ['AA', 'AA'], expected: 'AA' },
    { args: ['AABABC', 'ABC'], expected: 'ABC' },
    { args: ['cabwefgewcwaefgcf', 'cae'], expected: 'cwae' },
    { args: ['ab', 'b'], expected: 'b' },
    { args: ['aaflslflsldkalskaaa', 'aaa'], expected: 'aaa' },
  ],
};
