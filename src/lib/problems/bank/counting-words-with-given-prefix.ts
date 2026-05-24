import type { Problem } from '../types';

export const problem: Problem = {
  id: 'counting-words-with-given-prefix',
  title: 'Counting Words With a Given Prefix',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given an array of strings \`words\` and a string \`pref\`.

Return *the number of strings in* \`words\` *that contain* \`pref\` *as a **prefix**.*

A **prefix** of a string \`s\` is any leading contiguous substring of \`s\`.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length, pref.length <= 100',
    'words[i] and pref consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["pay","attention","practice","attend"], pref = "at"',
      output: '2',
      explanation: '"attention" and "attend" both start with "at".',
    },
    {
      input: 'words = ["leetcode","win","loops","success"], pref = "code"',
      output: '0',
      explanation: 'No string starts with "code".',
    },
  ],
  hints: [
    'Use String.startsWith (JS) or str.startswith (Python) to check the prefix.',
    'Count all words that match.',
  ],
  functionName: 'prefixCount',
  params: ['words', 'pref'],
  starterCode: {
    javascript: `function prefixCount(words, pref) {

}`,
    python: `def prefixCount(words, pref):
    pass`,
  },
  visibleTests: [
    { args: [['pay', 'attention', 'practice', 'attend'], 'at'], expected: 2 },
    { args: [['leetcode', 'win', 'loops', 'success'], 'code'], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a', 'aa', 'aaa'], 'a'], expected: 3 },
    { args: [['hello', 'world'], 'hello'], expected: 1 },
    { args: [['abc', 'def', 'ghi'], 'xyz'], expected: 0 },
    { args: [['pre', 'prefix', 'preparation'], 'pre'], expected: 3 },
    { args: [['ab', 'bc', 'cd'], 'ab'], expected: 1 },
  ],
};
