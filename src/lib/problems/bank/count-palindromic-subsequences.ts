import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-palindromic-subsequences',
  title: 'Count Palindromic Subsequences',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Given a string \`s\`, return the number of **distinct** palindromic subsequences of length 5. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

A **subsequence** is a string derived from another by deleting some (or no) characters without changing the order of the remaining characters.

Two subsequences are considered **different** if they have different characters at the same position.

A string is **palindromic** if it reads the same forward and backward.`,
  constraints: [
    '`1 <= s.length <= 10^4`',
    '`s` consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 's = "aaaaa"',
      output: '1',
      explanation: 'The only distinct palindromic subsequence of length 5 is "aaaaa".',
    },
    {
      input: 's = "aabcbaa"',
      output: '3',
      explanation: 'The three distinct palindromic subsequences are "aabaa", "aacaa", and "abcba".',
    },
  ],
  hints: [
    'A 5-character palindrome has the form c1 c2 c3 c2 c1. Iterate over all 26×26 = 676 (c1, c2) pairs.',
    'For a fixed pair (c1, c2): find l1 = leftmost c1, l2 = leftmost c2 after l1, r1 = rightmost c1, r2 = rightmost c2 before r1. If l2 < r2, then any distinct character strictly between l2 and r2 is a valid middle.',
    'The greedy boundaries are optimal: the leftmost inner c2 and rightmost inner c2 maximise the window, ensuring all reachable middle characters are counted.',
  ],
  functionName: 'countPalindromes',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromes(s) {
  const MOD = 1000000007;
  const n = s.length;
  const pos = Array.from({length: 26}, () => []);
  for (let i = 0; i < n; i++) pos[s.charCodeAt(i) - 97].push(i);
  let ans = 0;
  for (let c1 = 0; c1 < 26; c1++) {
    const p1 = pos[c1];
    if (p1.length < 2) continue;
    const l1 = p1[0], r1 = p1[p1.length - 1];
    for (let c2 = 0; c2 < 26; c2++) {
      const p2 = pos[c2];
      // l2 = first c2 after l1, r2 = last c2 before r1
      let l2 = -1, r2 = -1;
      for (const idx of p2) { if (idx > l1) { l2 = idx; break; } }
      for (let i = p2.length - 1; i >= 0; i--) { if (p2[i] < r1) { r2 = p2[i]; break; } }
      if (l2 === -1 || r2 === -1 || l2 >= r2) continue;
      // Count distinct chars strictly between l2 and r2
      const present = new Set();
      for (let i = 0; i < 26; i++) {
        for (const idx of pos[i]) {
          if (idx > l2 && idx < r2) { present.add(i); break; }
        }
      }
      ans = (ans + present.size) % MOD;
    }
  }
  return ans;
}`,
    typescript: `function countPalindromes(s: string): number {
  const MOD = 1000000007;
  const n = s.length;
  const pos: number[][] = Array.from({length: 26}, () => []);
  for (let i = 0; i < n; i++) pos[s.charCodeAt(i) - 97]!.push(i);
  let ans = 0;
  for (let c1 = 0; c1 < 26; c1++) {
    const p1 = pos[c1]!;
    if (p1.length < 2) continue;
    const l1 = p1[0]!, r1 = p1[p1.length - 1]!;
    for (let c2 = 0; c2 < 26; c2++) {
      const p2 = pos[c2]!;
      let l2 = -1, r2 = -1;
      for (const idx of p2) { if (idx > l1) { l2 = idx; break; } }
      for (let i = p2.length - 1; i >= 0; i--) { if (p2[i]! < r1) { r2 = p2[i]!; break; } }
      if (l2 === -1 || r2 === -1 || l2 >= r2) continue;
      const present = new Set<number>();
      for (let i = 0; i < 26; i++) {
        for (const idx of pos[i]!) { if (idx > l2 && idx < r2) { present.add(i); break; } }
      }
      ans = (ans + present.size) % MOD;
    }
  }
  return ans;
}`,
    python: `def countPalindromes(s):
    MOD = 10**9 + 7
    n = len(s)
    pos = [[] for _ in range(26)]
    for i, c in enumerate(s): pos[ord(c) - 97].append(i)
    ans = 0
    for c1 in range(26):
        p1 = pos[c1]
        if len(p1) < 2: continue
        l1, r1 = p1[0], p1[-1]
        for c2 in range(26):
            p2 = pos[c2]
            l2 = next((idx for idx in p2 if idx > l1), -1)
            r2 = next((idx for idx in reversed(p2) if idx < r1), -1)
            if l2 == -1 or r2 == -1 or l2 >= r2: continue
            present = set()
            for i in range(26):
                for idx in pos[i]:
                    if l2 < idx < r2: present.add(i); break
            ans = (ans + len(present)) % MOD
    return ans`,
  },
  visibleTests: [
    { args: ['aaaaa'], expected: 1 },
    { args: ['aabcbaa'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: 0 },
    { args: ['abcba'], expected: 1 },
    { args: ['aabaa'], expected: 1 },
    { args: ['abacaba'], expected: 4 },
    { args: ['abcaabca'], expected: 4 },
  ],
};
