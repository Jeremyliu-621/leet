import type { Problem } from '../types';

export const problem: Problem = {
  id: 'z-algorithm-longest-prefix-suffix',
  title: 'Longest Proper Prefix Which Is Also Suffix',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `Given a string \`s\`, find the **length of the longest proper prefix** of \`s\` that is also a suffix of \`s\`.

A **proper prefix** is any prefix that is not equal to the entire string (length < s.length). A **proper suffix** is any suffix that is not equal to the entire string.

Return 0 if no such prefix-suffix exists.

This is the core computation of the **KMP failure function** (also called the prefix function or pi function).

**Examples:**
- \`"abab"\`: prefix \`"ab"\` (length 2) is also a suffix → **2**
- \`"aabaab"\`: longest prefix-suffix is \`"aab"\` (length 3) → **3**
- \`"abcde"\`: no prefix is also a suffix → **0**`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "abab"',
      output: '2',
      explanation: '"ab" is both a prefix and a suffix of "abab".',
    },
    {
      input: 's = "aabaab"',
      output: '3',
      explanation: '"aab" is a prefix (positions 0-2) and a suffix (positions 3-5).',
    },
    {
      input: 's = "abcde"',
      output: '0',
      explanation: 'No proper prefix is also a suffix.',
    },
  ],
  hints: [
    'This is equivalent to computing `pi[n-1]` from the KMP prefix function (failure function). Build the full pi array where `pi[i]` = length of the longest proper prefix of `s[0..i]` that is also a suffix.',
    'Build the pi array iteratively: start with `pi[0] = 0`. For each index `i`, start with `k = pi[i-1]`. While `k > 0` and `s[i] != s[k]`, set `k = pi[k-1]`. If `s[i] == s[k]`, `pi[i] = k+1`, else `pi[i] = 0`.',
    'The answer is `pi[s.length - 1]`. You can also use the Z-array approach: `z[i]` = length of the longest substring starting at `i` equal to a prefix. The answer is max over all `i + z[i] == n` of `z[i]`, excluding `i=0`.',
  ],
  functionName: 'longestPrefixSuffix',
  params: ['s'],
  starterCode: {
    javascript: `function longestPrefixSuffix(s) {
  // Return length of longest proper prefix of s that is also a suffix
}`,
    python: `def longestPrefixSuffix(s: str) -> int:
    # Return length of longest proper prefix of s that is also a suffix
    pass`,
  },
  visibleTests: [
    { args: ['abab'], expected: 2 },
    { args: ['aabaab'], expected: 3 },
    { args: ['abcde'], expected: 0 },
    { args: ['aaaa'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aa'], expected: 1 },
    { args: ['aab'], expected: 0 },
    { args: ['aabaab'], expected: 3 },
    { args: ['abacaba'], expected: 3 },
    { args: ['abcabcabc'], expected: 6 },
    { args: ['abacabab'], expected: 4 },
    { args: ['aabaabaab'], expected: 6 },
  ],
};
