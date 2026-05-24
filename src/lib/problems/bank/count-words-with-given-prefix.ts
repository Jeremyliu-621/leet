import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-words-with-given-prefix',
  title: 'Count Words With a Given Prefix',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given an array of strings \`words\` and a string \`pref\`.

Return the number of strings in \`words\` that contain \`pref\` as a **prefix**.

A **prefix** of a string \`s\` is any leading contiguous substring of \`s\`.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length, pref.length <= 100',
    'words[i] and pref consist of lowercase English letters',
  ],
  examples: [
    { input: 'words = ["pay","attention","practice","attend"], pref = "at"', output: '2', explanation: '"attention" and "attend" start with "at".' },
    { input: 'words = ["leetcode","win","loops","success"], pref = "code"', output: '0', explanation: 'No word starts with "code".' },
  ],
  hints: [
    'Use startsWith() or check if the first pref.length characters equal pref.',
  ],
  functionName: 'prefixCount',
  params: ['words', 'pref'],
  starterCode: {
    javascript: 'function prefixCount(words, pref) {\n  \n}\n',
    python: 'def prefixCount(words, pref):\n    pass\n',
  },
  visibleTests: [
    { args: [['pay', 'attention', 'practice', 'attend'], 'at'], expected: 2 },
    { args: [['leetcode', 'win', 'loops', 'success'], 'code'], expected: 0 },
    { args: [['a', 'ab', 'abc'], 'a'], expected: 3 },
  ],
  hiddenTests: [
    { args: [['hello', 'help', 'world'], 'hel'], expected: 2 },
    { args: [['x'], 'x'], expected: 1 },
    { args: [['x'], 'xy'], expected: 0 },
    { args: [['pre', 'prefix', 'present', 'prevent'], 'pre'], expected: 4 },
  ],
};
