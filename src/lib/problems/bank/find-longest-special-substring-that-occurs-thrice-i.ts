import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-longest-special-substring-that-occurs-thrice-i',
  title: 'Find Longest Special Substring That Occurs Thrice I',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\` that consists of lowercase English letters.

A string is called **special** if it is made up of only a single character. For example, the string \`"abc"\` is **not** special, whereas the strings \`"ddd"\`, \`"zz"\`, and \`"f"\` are special.

Return the length of the **longest** special substring of \`s\` which occurs **at least thrice**, or \`-1\` if no special substring occurs at least thrice.

A **substring** is a contiguous **non-empty** sequence of characters within a string.`,
  constraints: [
    '3 <= s.length <= 50',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaaa"',
      output: '2',
      explanation: 'The longest special substring which occurs thrice is "aa": substrings "aaaa"[0..1], "aaaa"[1..2], "aaaa"[2..3].',
    },
    {
      input: 's = "abcdef"',
      output: '-1',
      explanation: 'There is no special substring which occurs at least thrice. Return -1.',
    },
    {
      input: 's = "abcaba"',
      output: '1',
      explanation: 'The longest special substring which occurs thrice is "a".',
    },
  ],
  hints: [
    'A special substring consists of repeated copies of a single character.',
    'For each character c and each possible length L, count how many times the string of L copies of c appears in s.',
    'Binary search on length L or iterate from largest to smallest, returning the first L with count >= 3.',
  ],
  functionName: 'maximumLength',
  params: ['s'],
  starterCode: {
    javascript: `function maximumLength(s) {
  const runs = {};
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    if (!runs[s[i]]) runs[s[i]] = [];
    runs[s[i]].push(j - i);
    i = j;
  }
  let ans = -1;
  for (const rr of Object.values(runs)) {
    rr.sort((a, b) => b - a);
    let lo = 1, hi = rr[0];
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      let count = 0;
      for (const r of rr) { if (r < mid) break; count += r - mid + 1; if (count >= 3) break; }
      if (count >= 3) { ans = Math.max(ans, mid); lo = mid + 1; } else hi = mid - 1;
    }
  }
  return ans;
}`,
    typescript: `function maximumLength(s: string): number {
  const runs: Record<string, number[]> = {};
  let i = 0;
  while (i < s.length) {
    let j = i;
    while (j < s.length && s[j] === s[i]) j++;
    if (!runs[s[i]!]) runs[s[i]!] = [];
    runs[s[i]!]!.push(j - i);
    i = j;
  }
  let ans = -1;
  for (const rr of Object.values(runs)) {
    rr.sort((a, b) => b - a);
    let lo = 1, hi = rr[0]!;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      let count = 0;
      for (const r of rr) { if (r < mid) break; count += r - mid + 1; if (count >= 3) break; }
      if (count >= 3) { ans = Math.max(ans, mid); lo = mid + 1; } else hi = mid - 1;
    }
  }
  return ans;
}`,
    python: `def maximumLength(s):
    from collections import defaultdict
    runs = defaultdict(list)
    i = 0
    while i < len(s):
        j = i
        while j < len(s) and s[j] == s[i]: j += 1
        runs[s[i]].append(j - i); i = j
    ans = -1
    for rr in runs.values():
        rr.sort(reverse=True)
        lo, hi = 1, rr[0]
        while lo <= hi:
            mid = (lo + hi) // 2
            count = sum(r - mid + 1 for r in rr if r >= mid)
            if count >= 3: ans = max(ans, mid); lo = mid + 1
            else: hi = mid - 1
    return ans`,
  },
  visibleTests: [
    { args: ['aaaa'], expected: 2 },
    { args: ['abcdef'], expected: -1 },
    { args: ['abcaba'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: 1 },
    { args: ['aaabaaab'], expected: 2 },
    { args: ['aaaaaa'], expected: 4 },
    { args: ['abc'], expected: -1 },
    { args: ['aaabb'], expected: 1 },
  ],
};
