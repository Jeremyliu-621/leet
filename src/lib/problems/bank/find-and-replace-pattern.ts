import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-and-replace-pattern',
  title: 'Find and Replace Pattern',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `Given a list of strings \`words\` and a string \`pattern\`, return *a list of* \`words[i]\` *that match* \`pattern\`. You may return the answer in **any order**.

A word matches the pattern if there exists a **permutation of letters** \`p\` so that after replacing every letter \`x\` in the pattern with \`p(x)\`, we get the desired word.

Formally, given a pattern, a word matches the pattern if there is a bijection from the letters in the pattern to the letters in the word.`,
  constraints: [
    '1 <= pattern.length <= 20',
    '1 <= words.length <= 50',
    'words[i].length == pattern.length',
    'pattern and words[i] are lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["aa","bb","bc","ac","ca","ab","ba"], pattern = "ab"',
      output: '["bc","ac","ca","ab","ba"]',
      explanation: '"aa" and "bb" don\'t match (same letter maps to two different pattern chars). The rest match.',
    },
    {
      input: 'words = ["a","b","c"], pattern = "a"',
      output: '["a","b","c"]',
      explanation: 'Every single-character word matches the single-character pattern.',
    },
  ],
  hints: [
    'For each word, check if there\'s a bijection to the pattern.',
    'Use two maps: one for word→pattern char and one for pattern→word char.',
  ],
  functionName: 'findAndReplacePattern',
  params: ['words', 'pattern'],
  starterCode: {
    javascript: `function findAndReplacePattern(words, pattern) {

}`,
    python: `def findAndReplacePattern(words, pattern):
    pass`,
  },
  visibleTests: [
    { args: [['aa', 'bb', 'bc', 'ac', 'ca', 'ab', 'ba'], 'ab'], expected: ['bc', 'ac', 'ca', 'ab', 'ba'] },
    { args: [['a', 'b', 'c'], 'a'], expected: ['a', 'b', 'c'] },
  ],
  hiddenTests: [
    { args: [['mee', 'aqq', 'dkd', 'ccc'], 'abb'], expected: ['mee', 'aqq'] },
    { args: [['abc', 'cba', 'xyx', 'xyz'], 'abc'], expected: ['abc', 'cba', 'xyz'] },
    { args: [['aa', 'bb', 'cc'], 'aa'], expected: ['aa', 'bb', 'cc'] },
    { args: [['xyz', 'aab'], 'aab'], expected: ['aab'] },
  ],
};
