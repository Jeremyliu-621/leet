import type { Problem } from '../types';

export const problem: Problem = {
  id: 'isomorphic-strings',
  title: 'Isomorphic Strings',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given two strings \`s\` and \`t\`, determine if they are **isomorphic**.

Two strings are isomorphic if the characters in \`s\` can be replaced to get \`t\`. Each occurrence of a character must be replaced with the same character while preserving the order of characters. No two different characters may map to the same character, but a character may map to itself.`,
  constraints: [
    '1 <= s.length <= 50000',
    's.length == t.length',
    's and t consist of any valid ASCII character',
  ],
  examples: [
    { input: 's = "egg", t = "add"', output: 'true' },
    { input: 's = "foo", t = "bar"', output: 'false' },
    { input: 's = "paper", t = "title"', output: 'true' },
  ],
  hints: [
    'At each position, you need to check if the mapping from s[i] to t[i] is consistent with all previous mappings.',
    'Use two maps: one from s characters to t characters, and one from t characters to s characters. The reverse map ensures that two different s characters do not map to the same t character.',
    'For each index i, check: if sToT has s[i] mapped already, it must equal t[i]. If tToS has t[i] mapped already, it must equal s[i]. If either check fails, return false.',
  ],
  functionName: 'isIsomorphic',
  params: ['s', 't'],
  starterCode: {
    javascript: 'function isIsomorphic(s, t) {\n  // your code here\n}\n',
    python: 'def isIsomorphic(s: str, t: str) -> bool:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['egg', 'add'], expected: true },
    { args: ['foo', 'bar'], expected: false },
    { args: ['paper', 'title'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: true },
    { args: ['ab', 'aa'], expected: false },
    { args: ['aa', 'ab'], expected: false },
    { args: ['badc', 'baba'], expected: false },
  ],
};
