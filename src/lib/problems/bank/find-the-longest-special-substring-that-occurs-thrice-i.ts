import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-longest-special-substring-that-occurs-thrice-i',
  title: 'Find the Longest Special Substring That Occurs Thrice I',
  difficulty: 'medium',
  tags: ['strings', 'binary-search', 'hash-map'],
  description: `You are given a string \`s\` that consists of lowercase English letters.

A string is called **special** if it is made up of only a single character. For example, the string \`"abc"\` is **not** special, whereas the strings \`"ddd"\`, \`"zz"\`, and \`"f"\` are special.

Return the length of the **longest** special substring of \`s\` which occurs **at least thrice**, or \`-1\` if no special substring occurs at least thrice.

A **substring** is a contiguous **non-empty** sequence of characters within a string.`,
  constraints: [
    '`3 <= s.length <= 50`',
    '`s` consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaaa"',
      output: '2',
      explanation: 'The longest special substring which occurs thrice is "aa": it appears at indices [0,1], [1,2], and [2,3].',
    },
    {
      input: 's = "abcdef"',
      output: '-1',
      explanation: 'There is no special substring which occurs at least thrice. Return -1.',
    },
    {
      input: 's = "abcaba"',
      output: '1',
      explanation: '"a" occurs 3 times and is the longest special substring occurring thrice.',
    },
  ],
  hints: [
    'A special substring is a run of identical characters.',
    'For each character and each possible length, count how many times that length (or longer) run occurs.',
    'Try all possible lengths from largest to smallest; return the first that occurs ≥ 3 times.',
    'A run of length L contributes special substrings of length 1 through L; a substring of length k occurs at least L-k+1 times within a single run of length L.',
  ],
  functionName: 'maximumLength',
  params: ['s'],
  starterCode: {
    javascript: `function maximumLength(s) {

}`,
    typescript: `function maximumLength(s: string): number {

}`,
    python: `def maximumLength(s):
    pass`,
  },
  visibleTests: [
    { args: ['aaaa'], expected: 2 },
    { args: ['abcdef'], expected: -1 },
    { args: ['abcaba'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: 1 },
    { args: ['aaab'], expected: 1 },
    { args: ['aaaaa'], expected: 3 },
    { args: ['aabbcc'], expected: -1 },
    { args: ['aaabbbccc'], expected: 1 },
    { args: ['aaabba'], expected: 1 },
    { args: ['aaabbaaa'], expected: 2 },
    { args: ['aaaaaaa'], expected: 5 },
  ],
};
