import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-steps-to-make-two-strings-anagram',
  title: 'Minimum Number of Steps to Make Two Strings Anagram',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `You are given two strings of the same length \`s\` and \`t\`. In one step you can choose **any character** of \`t\` and replace it with another character.

Return the **minimum number of steps** to make \`t\` an anagram of \`s\`.

An **anagram** of a string is a string that contains the same characters with a different (or the same) ordering.`,
  constraints: [
    '1 <= s.length <= 5 * 10^4',
    's.length == t.length',
    's and t contain only lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "bab", t = "aba"',
      output: '1',
      explanation: 'Replace the first \'a\' in t with \'b\', t = "bba" which is an anagram of s.',
    },
    {
      input: 's = "leetcode", t = "practice"',
      output: '5',
      explanation: 'Replace \'p\', \'r\', \'a\', \'i\' and \'c\' from t with proper characters.',
    },
  ],
  hints: [
    'Count character frequencies in both strings.',
    'For each character, if t has more of it than s, those extras need to be replaced.',
    'Sum up max(0, countT[c] - countS[c]) for all characters — that\'s the number of replacements needed.',
  ],
  functionName: 'minSteps',
  params: ['s', 't'],
  starterCode: {
    javascript: 'function minSteps(s, t) {\n\n}\n',
    python: 'def minSteps(s, t):\n    pass\n',
  },
  visibleTests: [
    { args: ['bab', 'aba'], expected: 1 },
    { args: ['leetcode', 'practice'], expected: 5 },
  ],
  hiddenTests: [
    { args: ['anagram', 'mangaar'], expected: 0 },
    { args: ['a', 'b'], expected: 1 },
    { args: ['abc', 'abc'], expected: 0 },
    { args: ['aab', 'bba'], expected: 1 },
  ],
};
