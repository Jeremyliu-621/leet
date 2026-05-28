import type { Problem } from '../types';

export const problem: Problem = {
  id: 'construct-k-palindrome-strings',
  title: 'Construct K Palindrome Strings',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a string \`s\` and an integer \`k\`, return \`true\` if you can use **all the characters** in \`s\` to construct \`k\` palindrome strings, or \`false\` otherwise.

**Key insight:** A palindrome can have at most one character with an odd frequency (the center character). So you need at least as many palindromes as characters with odd frequency. You also need at most \`s.length\` palindromes (one per character).`,
  constraints: [
    '1 <= k <= 10^5',
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 'k = 3, s = "annabelle"',
      output: 'true',
      explanation: '"annabelle" has 1 odd-frequency char (b). 1 ≤ 3 ≤ 9. Possible.',
    },
    {
      input: 'k = 3, s = "leetcode"',
      output: 'false',
      explanation: '6 characters have odd frequency; you need at least 6 palindromes.',
    },
    {
      input: 'k = 1, s = "aabbcd"',
      output: 'false',
      explanation: '2 odd-frequency chars (c and d). Need at least 2 palindromes.',
    },
  ],
  hints: [
    'Count the frequency of each character. The number of characters with odd frequency is the minimum number of palindromes needed (each odd-count char must be a center of its own palindrome).',
    'You also can\'t make more palindromes than the total string length (at minimum, each palindrome must contain 1 character). So: `oddCount <= k <= s.length`.',
    '```js\nconst freq = {};\nfor (const c of s) freq[c] = (freq[c] ?? 0) + 1;\nconst odds = Object.values(freq).filter(v => v % 2 === 1).length;\nreturn odds <= k && k <= s.length;\n```',
  ],
  functionName: 'canConstruct',
  params: ['k', 's'],
  starterCode: {
    javascript: `function canConstruct(k, s) {
  // return true if all characters of s can form k palindromes

}`,
    typescript: "function canConstruct(k: number, s: string): boolean {\n  // return true if all characters of s can form k palindromes\n\n}",

    python: `def canConstruct(k: int, s: str) -> bool:
    # return True if all characters of s can form k palindromes
    pass
`,
  },
  visibleTests: [
    { args: [3, 'annabelle'], expected: true },
    { args: [3, 'leetcode'], expected: false },
    { args: [1, 'aabbcd'], expected: false },
  ],
  hiddenTests: [
    { args: [1, 'a'], expected: true },
    { args: [4, 'true'], expected: true },
    { args: [2, 'aa'], expected: true },
    { args: [3, 'abc'], expected: true },
    { args: [4, 'abc'], expected: false },
  ],
};
