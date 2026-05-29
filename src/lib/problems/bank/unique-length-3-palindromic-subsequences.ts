import type { Problem } from '../types';

export const problem: Problem = {
  id: 'unique-length-3-palindromic-subsequences',
  title: 'Unique Length-3 Palindromic Subsequences',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\`, return the number of **unique palindromes of length 3** that are a **subsequence** of \`s\`.

A palindrome of length 3 has the form "xyx" where both ends are the same character.

Note: Even if there are multiple ways to pick a subsequence, count each unique string only once.`,
  constraints: [
    '`3 <= s.length <= 10^5`',
    '`s` consists of only lowercase English letters',
  ],
  examples: [
    {
      input: 's = "aabca"',
      output: '3',
      explanation: 'The 3 unique palindromes are "aba", "aaa", "aca". (We find first and last \'a\' at indices 0 and 4; the characters between them are {a,b,c} giving 3 palindromes.)',
    },
    {
      input: 's = "adc"',
      output: '0',
      explanation: 'No character appears more than once.',
    },
    {
      input: 's = "bbcbaba"',
      output: '4',
      explanation: '"bbb", "bcb", "bab", "aba" are the 4 unique palindromes.',
    },
  ],
  hints: [
    'For each character c (\'a\'..\'z\'), find its leftmost and rightmost occurrence in s. Any character between those two positions can form the middle of a palindrome "c_c".',
    'Use a Set (or a 26-bit bitmask) to count distinct characters between the leftmost and rightmost occurrences. Sum these counts over all 26 letters.',
    '```js\nfunction countPalindromicSubsequence(s) {\n  let count = 0;\n  for (let c = 0; c < 26; c++) {\n    const ch = String.fromCharCode(97 + c);\n    const left = s.indexOf(ch);\n    const right = s.lastIndexOf(ch);\n    if (left === -1 || left === right) continue;\n    const between = new Set();\n    for (let i = left + 1; i < right; i++) between.add(s[i]);\n    count += between.size;\n  }\n  return count;\n}\n```',
  ],
  functionName: 'countPalindromicSubsequence',
  params: ['s'],
  starterCode: {
    javascript: `function countPalindromicSubsequence(s) {

}`,
    typescript: `function countPalindromicSubsequence(s: string): number {

}`,
    python: `def countPalindromicSubsequence(s: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['aabca'], expected: 3 },
    { args: ['adc'], expected: 0 },
    { args: ['bbcbaba'], expected: 4 },
  ],
  hiddenTests: [
    { args: ['abc'], expected: 0 },
    { args: ['aaaa'], expected: 1 },
    { args: ['abacaba'], expected: 5 },
    { args: ['zzzz'], expected: 1 },
    { args: ['abcba'], expected: 3 },
  ],
};
