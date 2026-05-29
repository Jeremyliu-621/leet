import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-longest-special-substring-that-occurs-thrice-ii',
  title: 'Find Longest Special Substring That Occurs Thrice II',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given a string \`s\` that consists of lowercase English letters.

A string is called **special** if it is made up of only a single character. For example, the string \`"abc"\` is not special, whereas the strings \`"ddd"\`, \`"zz"\`, and \`"f"\` are special.

Return the length of the **longest** special substring of \`s\` which occurs **at least thrice**, or \`-1\` if no special substring occurs at least thrice.

A substring is a contiguous **non-empty** sequence of characters within a string.`,
  constraints: [
    '3 <= s.length <= 5 * 10^4',
    's consists of only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "aaaa"',
      output: '2',
      explanation: '"aa" occurs 3 times as a substring of "aaaa". "aaa" only occurs 2 times.',
    },
    {
      input: 's = "abcdef"',
      output: '-1',
      explanation: 'No character appears 3 or more times in a row as a substring.',
    },
    {
      input: 's = "abcaba"',
      output: '1',
      explanation:
        '"a" appears 3 times and "b" appears 2 times. The longest special substring occurring thrice is "a" with length 1.',
    },
  ],
  hints: [
    'For each character, collect all run lengths (consecutive sequences of that character).',
    'For a run of length r, it contains r-l+1 substrings of length l (for l ≤ r).',
    'Binary search on the length l: count total occurrences across all runs and check if ≥ 3. Find the maximum such l.',
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
    { args: ['aaabbb'], expected: 1 },
    { args: ['aabbbbcc'], expected: 2 },
    { args: ['aaaaaaa'], expected: 5 },
    { args: ['aabbaa'], expected: 1 },
    { args: ['aaabaaab'], expected: 2 },
    { args: ['zzzzz'], expected: 3 },
  ],
};
