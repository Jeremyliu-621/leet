import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-maximum-number-of-string-pairs',
  title: 'Find the Maximum Number of String Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'hash-map', 'strings'],
  description: `You are given a **0-indexed** array \`words\` consisting of **distinct** strings.

A **string pair** is formed by two strings \`words[i]\` and \`words[j]\` (where \`i != j\`) such that the **reverse** of \`words[i]\` equals \`words[j]\`.

Return the **maximum** number of pairs that can be formed from the array. Each string can belong to **at most one** pair.`,
  constraints: [
    '1 <= words.length <= 50',
    'words[i].length == 2',
    'words consists of distinct lowercase English letter strings.',
  ],
  examples: [
    {
      input: 'words = ["cd","ac","dc","ca","zz"]',
      output: '2',
      explanation: '"cd" pairs with "dc", and "ac" pairs with "ca". "zz" reversed is "zz" but only one copy exists.',
    },
    {
      input: 'words = ["ab","ba","cc"]',
      output: '1',
      explanation: '"ab" reversed is "ba", so they form one pair. "cc" reversed is itself but appears only once.',
    },
    {
      input: 'words = ["aa","ab"]',
      output: '0',
      explanation: '"aa" reversed is "aa" (itself, only one copy) and "ab" reversed is "ba" (not in array). No pairs possible.',
    },
  ],
  hints: [
    'Level 1: For each word, compute its reverse and check if the reverse exists elsewhere in the array.',
    'Level 2: Use a set (or map) of "available" words. For each word, check if its reverse is available. If yes, count a pair and remove both; if no, add the word to the available set.',
    'Level 3: Iterate left-to-right. For word w: if reverse(w) is in your seen-set, increment pairs and remove reverse(w) from the set. Otherwise add w to the set. This handles all cases in one pass.',
  ],
  functionName: 'maximumNumberOfStringPairs',
  params: ['words'],
  starterCode: {
    javascript: `function maximumNumberOfStringPairs(words) {

}`,
    typescript: `function maximumNumberOfStringPairs(words: string[]): number {

}`,
    python: `def maximumNumberOfStringPairs(words):
    pass`,
  },
  visibleTests: [
    { args: [['cd', 'ac', 'dc', 'ca', 'zz']], expected: 2 },
    { args: [['ab', 'ba', 'cc']], expected: 1 },
    { args: [['aa', 'ab']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['ad', 'da', 'bc', 'cb', 'xy']], expected: 2 },
    { args: [['abc', 'cba', 'xyz', 'zyx', 'a']], expected: 2 },
    { args: [['pq', 'rs', 'st', 'qp']], expected: 1 },
    { args: [['hello', 'world']], expected: 0 },
    { args: [['ab']], expected: 0 },
    { args: [['ab', 'cd', 'ba', 'dc', 'ef', 'fe']], expected: 3 },
    { args: [['mn', 'nm', 'op', 'po', 'qr']], expected: 2 },
    { args: [['az', 'za', 'by', 'yb', 'cx', 'xc', 'dw']], expected: 3 },
  ],
};
