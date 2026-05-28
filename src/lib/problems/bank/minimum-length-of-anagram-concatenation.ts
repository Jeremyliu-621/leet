import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-length-of-anagram-concatenation',
  title: 'Minimum Length of Anagram Concatenation',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\`. Find the **minimum** possible length of a string \`t\` such that \`s\` can be formed by concatenating anagrams of \`t\` one after another.

An **anagram** of \`t\` is a string containing exactly the same characters (with the same counts) as \`t\`, possibly in a different order.

Return the minimum possible length of \`t\`.`,
  constraints: [
    '`1 <= s.length <= 10^5`',
    '`s` consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abab"',
      output: '2',
      explanation:
        's = "ab" + "ab". Both substrings are anagrams of t = "ab". Length of t is 2.',
    },
    {
      input: 's = "aabbcc"',
      output: '6',
      explanation:
        'No smaller t works: "aa"+"bb"+"cc" don\'t share a freq map, and "aab"+"bcc" don\'t either. t must be the whole string. Length 6.',
    },
    {
      input: 's = "abcbca"',
      output: '3',
      explanation:
        's = "abc" + "bca". Both are anagrams of t = "abc" (or any permutation). Length of t is 3.',
    },
  ],
  hints: [
    'If `t` has length `k`, then `k` must be a divisor of `s.length`, and `s` splits into `s.length / k` consecutive substrings of length `k`.',
    'For each candidate `k` (divisors of `n` in increasing order), extract the first window of length `k` as the target character-frequency map.',
    `Check every subsequent window of length \`k\`. If all windows have the same character-frequency map as the first, return \`k\`. Otherwise, try the next divisor.\n\`\`\`js\nfunction minAnagramLength(s) {\n  const n = s.length;\n  for (let k = 1; k <= n; k++) {\n    if (n % k !== 0) continue;\n    const target = new Array(26).fill(0);\n    for (let i = 0; i < k; i++) target[s.charCodeAt(i) - 97]++;\n    let valid = true;\n    for (let p = 1; p < n / k; p++) {\n      const cur = new Array(26).fill(0);\n      for (let i = p*k; i < (p+1)*k; i++) cur[s.charCodeAt(i) - 97]++;\n      if (cur.some((v,c) => v !== target[c])) { valid = false; break; }\n    }\n    if (valid) return k;\n  }\n  return n;\n}\n\`\`\``,
  ],
  functionName: 'minAnagramLength',
  params: ['s'],
  starterCode: {
    javascript: `function minAnagramLength(s) {

}`,
    typescript: "function minAnagramLength(s: string): number {\n\n}",

    python: `def minAnagramLength(s):
    pass`,
  },
  visibleTests: [
    { args: ['abab'], expected: 2 },
    { args: ['aabbcc'], expected: 6 },
    { args: ['abcbca'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaa'], expected: 1 },
    { args: ['abcabc'], expected: 3 },
    { args: ['aaabbb'], expected: 6 },
    { args: ['abcdabcd'], expected: 4 },
    { args: ['aabbccdd'], expected: 8 },
    { args: ['xyzxyz'], expected: 3 },
    { args: ['ababababab'], expected: 2 },
    { args: ['zzz'], expected: 1 },
    { args: ['abba'], expected: 2 },
  ],
};
