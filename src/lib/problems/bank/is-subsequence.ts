import type { Problem } from '../types';

export const problem: Problem = {
  id: 'is-subsequence',
  title: 'Is Subsequence',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given two strings \`s\` and \`t\`, return \`true\` if \`s\` is a **subsequence** of \`t\`, or \`false\` otherwise.

A **subsequence** of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., \`"ace"\` is a subsequence of \`"abcde"\` while \`"aec"\` is not).`,
  constraints: [
    '0 <= s.length <= 100',
    '0 <= t.length <= 10^4',
    's and t consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abc", t = "ahbgdc"',
      output: 'true',
      explanation: '"a" matches at index 0, "b" at index 2, "c" at index 5.',
    },
    {
      input: 's = "axc", t = "ahbgdc"',
      output: 'false',
      explanation: '"x" never appears after "a" in t.',
    },
  ],
  hints: [
    'Use two pointers i (into s) and j (into t). Advance j always; advance i whenever s[i] === t[j].',
    'Return true if i reaches s.length before j exhausts t.',
    'Edge case: empty s is always a subsequence of any t.',
  ],
  functionName: 'isSubsequence',
  params: ['s', 't'],
  starterCode: {
    javascript: `function isSubsequence(s, t) {
  let i = 0;
  for (let j = 0; j < t.length && i < s.length; j++) {
    if (s[i] === t[j]) i++;
  }
  return i === s.length;
}`,
    typescript: `function isSubsequence(s: string, t: string): boolean {
  let i = 0;
  for (let j = 0; j < t.length && i < s.length; j++) {
    if (s[i] === t[j]) i++;
  }
  return i === s.length;
}`,
    python: `def isSubsequence(s, t):
    i = 0
    for c in t:
        if i < len(s) and s[i] == c: i += 1
    return i == len(s)`,
  },
  visibleTests: [
    { args: ['abc', 'ahbgdc'], expected: true },
    { args: ['axc', 'ahbgdc'], expected: false },
  ],
  hiddenTests: [
    { args: ['', 'ahbgdc'], expected: true },
    { args: ['ace', 'abcde'], expected: true },
    { args: ['aec', 'abcde'], expected: false },
    { args: ['b', 'abc'], expected: true },
  ],
};
