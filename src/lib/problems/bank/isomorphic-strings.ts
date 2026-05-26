import type { Problem } from '../types';

export const problem: Problem = {
  id: 'isomorphic-strings',
  title: 'Isomorphic Strings',
  difficulty: 'medium',
  tags: ['hash-map', 'strings'],
  description: `Given two strings \`s\` and \`t\`, determine if they are **isomorphic**.

Two strings \`s\` and \`t\` are isomorphic if the characters in \`s\` can be replaced to get \`t\`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.`,
  examples: [
    { input: 's = "egg", t = "add"', output: 'true', explanation: 'e→a, g→d.' },
    { input: 's = "foo", t = "bar"', output: 'false', explanation: 'o cannot map to both a and r.' },
    { input: 's = "paper", t = "title"', output: 'true', explanation: 'p→t, a→i, e→l, r→e.' },
  ],
  constraints: [
    '1 <= s.length <= 5 * 10^4',
    't.length == s.length',
    's and t consist of any valid ASCII character.',
  ],
  functionName: 'isIsomorphic',
  params: ['s', 't'],
  starterCode: {
    javascript: 'function isIsomorphic(s, t) {\n  // your code here\n}\n',
    python: 'def isIsomorphic(s, t):\n    # your code here\n    pass\n',
  },
  hints: [
    'Build two maps: one from s→t character mapping, one from t→s mapping. Both must be consistent.',
    'For each position i, check: if s[i] is already mapped, it must map to t[i]. If t[i] is already mapped-to, it must come from s[i].',
    'Return false as soon as any inconsistency is detected.',
  ],
  visibleTests: [
    { args: ['egg', 'add'], expected: true },
    { args: ['foo', 'bar'], expected: false },
    { args: ['paper', 'title'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['ab', 'aa'], expected: false },
    { args: ['ba', 'aa'], expected: false },
    { args: ['abcd', 'efgh'], expected: true },
  ],
};
