import type { Problem } from '../types';

export const problem: Problem = {
  id: 'last-substring-in-lexicographical-order',
  title: 'Last Substring in Lexicographical Order',
  difficulty: 'hard',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\`, return the **last** substring of \`s\` in lexicographical order.`,
  constraints: [
    '1 <= s.length <= 4 * 10^5',
    's contains only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abab"',
      output: '"bab"',
      explanation: 'The substrings are "a", "ab", "aba", "abab", "b", "ba", "bab". The largest is "bab".',
    },
    {
      input: 's = "leetcode"',
      output: '"tcode"',
      explanation: 'The lexicographically largest substring starting from any index is "tcode" (starting at index 3).',
    },
    {
      input: 's = "cacacb"',
      output: '"cb"',
      explanation: '"cb" at index 4 is larger than all other suffixes.',
    },
  ],
  hints: [
    'The answer must be a suffix of s (a suffix is always larger than any proper prefix of itself when they share a common start).',
    'Use a two-pointer approach: i=0, j=1, k=0. Compare s[i+k] vs s[j+k]. If equal, advance k. If s[i+k] < s[j+k], move i to max(i+k+1, j+1). If s[i+k] > s[j+k], move j to j+k+1, reset k=0. When j reaches end, i is the answer.',
    'This runs in O(n) because each index is visited at most twice across the entire process.',
  ],
  functionName: 'lastSubstring',
  params: ['s'],
  starterCode: {
    javascript: `function lastSubstring(s) {
  let i = 0, j = 1, k = 0;
  const n = s.length;
  while (j + k < n) {
    if (i + k >= n) {
      i = j; j++; k = 0;
    } else if (s[i + k] === s[j + k]) {
      k++;
    } else if (s[i + k] < s[j + k]) {
      i = Math.max(i + k + 1, j + 1); k = 0;
    } else {
      j = j + k + 1; k = 0;
    }
    if (i === j) j++;
  }
  return s.slice(i);
}`,
    typescript: `function lastSubstring(s: string): string {
  let i = 0, j = 1, k = 0;
  const n = s.length;
  while (j + k < n) {
    if (i + k >= n) {
      i = j; j++; k = 0;
    } else if (s[i + k] === s[j + k]) {
      k++;
    } else if (s[i + k]! < s[j + k]!) {
      i = Math.max(i + k + 1, j + 1); k = 0;
    } else {
      j = j + k + 1; k = 0;
    }
    if (i === j) j++;
  }
  return s.slice(i);
}`,
    python: `def lastSubstring(s: str) -> str:
    n = len(s)
    i, j, k = 0, 1, 0
    while j + k < n:
        if i + k >= n:
            i = j; j += 1; k = 0
        elif s[i + k] == s[j + k]:
            k += 1
        elif s[i + k] < s[j + k]:
            i = max(i + k + 1, j + 1); k = 0
        else:
            j = j + k + 1; k = 0
        if i == j:
            j += 1
    return s[i:]`,
  },
  visibleTests: [
    { args: ['abab'], expected: 'bab' },
    { args: ['leetcode'], expected: 'tcode' },
    { args: ['cacacb'], expected: 'cb' },
    { args: ['z'], expected: 'z' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['ba'], expected: 'ba' },
    { args: ['ab'], expected: 'b' },
    { args: ['aaaa'], expected: 'aaaa' },
    { args: ['abcabc'], expected: 'cabc' },
    { args: ['zzzz'], expected: 'zzzz' },
    { args: ['abcdef'], expected: 'f' },
    { args: ['aab'], expected: 'b' },
    { args: ['bcabc'], expected: 'cabc' },
    { args: ['cacacb'], expected: 'cb' },
  ],
};
