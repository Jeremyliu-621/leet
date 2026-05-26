import type { Problem } from '../types';

export const problem: Problem = {
  id: 'append-characters-to-string-to-make-subsequence',
  title: 'Append Characters to String to Make Subsequence',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `You are given two strings \`s\` and \`t\` consisting of only lowercase English letters.

Return the **minimum** number of characters that need to be **appended** to the end of \`s\` so that \`t\` becomes a **subsequence** of \`s\`.

A **subsequence** is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.`,
  constraints: [
    '1 <= s.length, t.length <= 10^5',
    's and t consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "coaching", t = "coding"',
      output: '4',
      explanation: '"coding" matched up to "co" in "coaching". The remaining "ding" (4 chars) must be appended.',
    },
    {
      input: 's = "abcde", t = "a"',
      output: '0',
      explanation: '"a" is already a subsequence of "abcde". No characters need to be appended.',
    },
    {
      input: 's = "z", t = "abcde"',
      output: '5',
      explanation: '"a" cannot be matched in "z". All 5 characters of "abcde" must be appended.',
    },
  ],
  hints: [
    'Use two pointers: one on s, one on t. Advance both when s[i] == t[j], else advance only s pointer.',
    'When s is exhausted, the remaining characters in t (from j to end) are what must be appended.',
    `\`\`\`js
let j = 0;
for (const c of s) if (j < t.length && c === t[j]) j++;
return t.length - j;\`\`\``
  ],
  functionName: 'appendCharacters',
  params: ['s', 't'],
  starterCode: {
    javascript: `function appendCharacters(s, t) {

}`,
    python: `def appendCharacters(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['coaching', 'coding'], expected: 4 },
    { args: ['abcde', 'a'], expected: 0 },
    { args: ['z', 'abcde'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: 0 },
    { args: ['abc', 'adc'], expected: 2 },
    { args: ['a', 'a'], expected: 0 },
    { args: ['aa', 'aaaa'], expected: 2 },
  ],
};
