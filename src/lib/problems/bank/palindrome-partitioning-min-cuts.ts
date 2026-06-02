import type { Problem } from '../types';

export const problem: Problem = {
  id: 'palindrome-partitioning-min-cuts',
  title: 'Palindrome Partitioning — Minimum Cuts',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given a string \`s\`, partition it such that every substring is a palindrome. Return the **minimum number of cuts** needed to make such a partition.

A cut splits the string into two parts. For example, \`"aab"\` can be split with 1 cut into \`["aa", "b"]\` — both parts are palindromes, so the answer is \`1\`.

**Approach:** Precompute a table \`isPalin[i][j]\` (true if \`s[i..j]\` is a palindrome). Then let \`cuts[i]\` be the minimum cuts for \`s[0..i]\`. For each \`i\`, if \`s[0..i]\` is already a palindrome then \`cuts[i] = 0\`; otherwise \`cuts[i] = min(cuts[j-1] + 1)\` for each \`j <= i\` where \`s[j..i]\` is a palindrome.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aab"',
      output: '1',
      explanation: 'One cut: ["aa","b"] — both are palindromes.',
    },
    {
      input: 's = "a"',
      output: '0',
      explanation: 'Already a palindrome, zero cuts needed.',
    },
    {
      input: 's = "ab"',
      output: '1',
      explanation: 'One cut: ["a","b"].',
    },
  ],
  hints: [
    'First precompute which substrings are palindromes using a 2D boolean table. Expand from the center (like in Longest Palindromic Substring) to fill it efficiently.',
    'Let cuts[i] = minimum cuts for s[0..i]. Initialize all to i (worst case: cut every character). If s[0..i] is a palindrome, cuts[i] = 0. For each j > 0 where s[j..i] is a palindrome, update cuts[i] = min(cuts[i], cuts[j-1] + 1).',
    '`const n = s.length; const isPalin = Array.from({length:n},()=>new Array(n).fill(false)); for(let i=0;i<n;i++){for(let d=0;d<=i&&i+d<n;d++){if(s[i-d]===s[i+d])isPalin[i-d][i+d]=true;else break;}} for(let i=0;i<n;i++){for(let d=0;i-d>=0&&i+d+1<n;d++){if(s[i-d]===s[i+d+1])isPalin[i-d][i+d+1]=true;else break;}} const cuts=Array.from({length:n},(_,i)=>i); for(let i=1;i<n;i++){if(isPalin[0][i]){cuts[i]=0;continue;} for(let j=1;j<=i;j++){if(isPalin[j][i])cuts[i]=Math.min(cuts[i],cuts[j-1]+1);}} return cuts[n-1];`',
  ],
  functionName: 'minCut',
  params: ['s'] as readonly string[],
  starterCode: {
    javascript: `function minCut(s) {
  const n = s.length;
  const isPalin = Array.from({length: n}, () => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    for (let d = 0; i - d >= 0 && i + d < n; d++) {
      if (s[i - d] === s[i + d]) isPalin[i - d][i + d] = true; else break;
    }
    for (let d = 0; i - d >= 0 && i + d + 1 < n; d++) {
      if (s[i - d] === s[i + d + 1]) isPalin[i - d][i + d + 1] = true; else break;
    }
  }
  const cuts = Array.from({length: n}, (_, i) => i);
  for (let i = 1; i < n; i++) {
    if (isPalin[0][i]) { cuts[i] = 0; continue; }
    for (let j = 1; j <= i; j++) if (isPalin[j][i]) cuts[i] = Math.min(cuts[i], cuts[j - 1] + 1);
  }
  return cuts[n - 1];
}`,
    typescript: `function minCut(s: string): number {
  const n = s.length;
  const isPalin: boolean[][] = Array.from({length: n}, () => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    for (let d = 0; i - d >= 0 && i + d < n; d++) {
      if (s[i - d] === s[i + d]) isPalin[i - d]![i + d] = true; else break;
    }
    for (let d = 0; i - d >= 0 && i + d + 1 < n; d++) {
      if (s[i - d] === s[i + d + 1]) isPalin[i - d]![i + d + 1] = true; else break;
    }
  }
  const cuts: number[] = Array.from({length: n}, (_, i) => i);
  for (let i = 1; i < n; i++) {
    if (isPalin[0]![i]) { cuts[i] = 0; continue; }
    for (let j = 1; j <= i; j++) if (isPalin[j]![i]) cuts[i] = Math.min(cuts[i]!, cuts[j - 1]! + 1);
  }
  return cuts[n - 1]!;
}`,
    python: `def minCut(s: str) -> int:
    if hasattr(s, 'to_py'): s = s.to_py()
    s = str(s); n = len(s)
    is_p = [[False]*n for _ in range(n)]
    for i in range(n):
        d = 0
        while i-d >= 0 and i+d < n:
            if s[i-d] == s[i+d]: is_p[i-d][i+d] = True; d += 1
            else: break
        d = 0
        while i-d >= 0 and i+d+1 < n:
            if s[i-d] == s[i+d+1]: is_p[i-d][i+d+1] = True; d += 1
            else: break
    cuts = list(range(n))
    for i in range(1, n):
        if is_p[0][i]: cuts[i] = 0; continue
        for j in range(1, i+1):
            if is_p[j][i]: cuts[i] = min(cuts[i], cuts[j-1]+1)
    return cuts[n-1]`,
  },
  visibleTests: [
    { args: ['aab'], expected: 1 },
    { args: ['a'], expected: 0 },
    { args: ['ab'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aa'], expected: 0 },
    { args: ['aba'], expected: 0 },
    { args: ['abba'], expected: 0 },
    { args: ['abcba'], expected: 0 },
    { args: ['abcbad'], expected: 1 },
    { args: ['aabb'], expected: 1 },
    { args: ['aabc'], expected: 2 },
  ],
};
