import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-with-a-given-prefix',
  title: 'Count Words With a Given Prefix',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given an array of strings \`words\` and a string \`pref\`.

Return the number of strings in \`words\` that contain \`pref\` as a **prefix**.

A **prefix** of a string \`s\` is any leading contiguous substring of \`s\`.`,
  constraints: [
    '`1 <= words.length <= 100`',
    '`1 <= words[i].length, pref.length <= 100`',
    '`words[i]` and `pref` consist of lowercase English letters.',
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
      explanation: 'No string in words starts with "code".',
    },
  ],
  hints: [
    'Level 1: Iterate over each word and check whether it starts with pref.',
    'Level 2: Use the built-in startsWith method (JavaScript/Python str.startswith) so you don\'t have to implement the prefix check manually.',
    'Level 3: One-liner in JS: words.filter(w => w.startsWith(pref)).length. O(n * p) time where p is the length of pref.',
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
  ],
  hiddenTests: [
    { args: [['a'], 'a'], expected: 1 },
    { args: [['abc', 'abcd', 'ab', 'xyz'], 'abc'], expected: 2 },
    { args: [['prefix', 'pre', 'preview', 'precise'], 'pre'], expected: 4 },
    { args: [['hello', 'world'], 'z'], expected: 0 },
    { args: [['apple', 'applet', 'application', 'banana'], 'apple'], expected: 2 },
    { args: [['x'], 'xx'], expected: 0 },
  ],
};
