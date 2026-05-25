import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-with-given-prefix',
  title: 'Count Words With a Given Prefix',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given an array of strings \`words\` and a string \`pref\`.

Return the number of strings in \`words\` that contain \`pref\` as a **prefix**.

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
      explanation: '"attention" and "attend" start with "at".',
    },
    {
      input: 'words = ["leetcode","win","loops","success"], pref = "code"',
      output: '0',
    },
  ],
  hints: [
    'Level 1: Check each word to see if it starts with pref.',
    'Level 2: Use startsWith in JavaScript or str.startswith() in Python.',
    'Level 3: return words.filter(w=>w.startsWith(pref)).length;',
  ],
  functionName: 'prefixCount',
  params: ['words', 'pref'],
  starterCode: {
    javascript: 'function prefixCount(words, pref) {\n  // your code here\n}\n',
    python: 'def prefixCount(words, pref):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [['pay', 'attention', 'practice', 'attend'], 'at'], expected: 2 },
    { args: [['leetcode', 'win', 'loops', 'success'], 'code'], expected: 0 },
  ],
  hiddenTests: [
    { args: [['abc', 'ab', 'a'], 'a'], expected: 3 },
    { args: [['hello', 'world'], 'hello'], expected: 1 },
    { args: [['pre', 'prefix', 'preview', 'test'], 'pre'], expected: 3 },
    { args: [['a', 'b', 'c'], 'ab'], expected: 0 },
    { args: [['abc'], 'abc'], expected: 1 },
  ],
};
