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

}`,
    typescript: "function maximumLength(s: string): number {\n\n}",

    python: `def maximumLength(s: str) -> int:
    pass`,
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
