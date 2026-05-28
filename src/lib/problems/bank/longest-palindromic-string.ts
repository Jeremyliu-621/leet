import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-palindromic-string',
  title: 'Longest Palindromic Substring',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given a string \`s\`, return the **longest palindromic substring** — the longest contiguous part of \`s\` that reads the same forwards and backwards.

**Key insight:** Expand around center. Every palindrome has a center — either a single character (odd length) or a pair of equal characters (even length). Try expanding outward from each possible center.`,
  constraints: [
    '1 <= s.length <= 1000',
    's consists of digits and English letters.',
  ],
  examples: [
    {
      input: 's = "babad"',
      output: '"bab"',
      explanation: '"bab" is a palindrome of length 3. "aba" is also valid but we return the first found.',
    },
    {
      input: 's = "cbbd"',
      output: '"bb"',
      explanation: '"bb" is the longest palindromic substring.',
    },
    {
      input: 's = "racecar"',
      output: '"racecar"',
      explanation: 'The whole string is a palindrome.',
    },
  ],
  hints: [
    'The brute-force O(n³) checks all substrings. O(n²) is achievable by trying to expand around every possible center position.',
    'For each position `i`, try two expansions: (a) odd-length palindrome centered at `i`, and (b) even-length palindrome centered between `i` and `i+1`. Expand outward as long as the characters match. Track the longest found.',
    '`function expand(s, l, r) { while (l >= 0 && r < s.length && s[l] === s[r]) { l--; r++; } return s.slice(l+1, r); } let best = ""; for (let i = 0; i < s.length; i++) { const a = expand(s, i, i), b = expand(s, i, i+1); if (a.length > best.length) best = a; if (b.length > best.length) best = b; } return best;`',
  ],
  functionName: 'longestPalindrome',
  params: ['s'],
  starterCode: {
    javascript: 'function longestPalindrome(s) {\n  // your code here\n}\n',
    typescript: "function longestPalindrome(s: string): string {\n  // your code here\n}",

    python: 'def longestPalindrome(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['babad'], expected: 'bab' },
    { args: ['cbbd'], expected: 'bb' },
    { args: ['racecar'], expected: 'racecar' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aa'], expected: 'aa' },
    { args: ['ab'], expected: 'a' },
    { args: ['abcba'], expected: 'abcba' },
    { args: ['aacabdkacaa'], expected: 'aca' },
    { args: ['aaaa'], expected: 'aaaa' },
  ],
};
