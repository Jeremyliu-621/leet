import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-given-prefix',
  title: 'Count Words With a Given Prefix',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given an array of strings \`words\` and a string \`pref\`.

Return the number of strings in \`words\` that contain \`pref\` as a **prefix**.

A **prefix** of a string \`s\` is any leading contiguous substring of \`s\`.`,
  constraints: [
    '1 ≤ words.length ≤ 100',
    '1 ≤ words[i].length, pref.length ≤ 100',
    'words[i] and pref consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["pay","attention","practice","attend"], pref = "at"',
      output: '2',
      explanation: '"attention" and "attend" start with "at".',
    },
    {
      input: 'words = ["leetcode","win","loops","success"], pref = "code"',
      output: '0',
      explanation: 'No word starts with "code".',
    },
    {
      input: 'words = ["a","b","c"], pref = "a"',
      output: '1',
      explanation: 'Only "a" starts with "a".',
    },
  ],
  hints: [
    'Iterate through each word and check if it starts with the prefix.',
    'Use the built-in startsWith method (or equivalent substring check) for each word.',
    'For a manual check without startsWith: verify that word.slice(0, pref.length) === pref. Time complexity: O(n × |pref|).',
  ],
  functionName: 'prefixCount',
  params: ['words', 'pref'],
  starterCode: {
    javascript: `function prefixCount(words, pref) {

}`,
    typescript: `function prefixCount(words: string[], pref: string): number {

}`,
    python: `def prefixCount(words, pref):
    pass`,
  },
  visibleTests: [
    { args: [['pay', 'attention', 'practice', 'attend'], 'at'], expected: 2 },
    { args: [['leetcode', 'win', 'loops', 'success'], 'code'], expected: 0 },
    { args: [['a', 'b', 'c'], 'a'], expected: 1 },
  ],
  hiddenTests: [
    { args: [['abc', 'abcdef', 'ab', 'xyz'], 'abc'], expected: 2 },
    { args: [['hello', 'world'], 'hello'], expected: 1 },
    { args: [['pre', 'prefix', 'prepend', 'suffix'], 'pre'], expected: 3 },
    { args: [['a'], 'a'], expected: 1 },
    { args: [['a'], 'b'], expected: 0 },
    { args: [['x', 'xy', 'xyz', 'xyzw'], 'xy'], expected: 3 },
    { args: [['aa', 'aaa', 'aaaa'], 'aaa'], expected: 2 },
  ],
};
