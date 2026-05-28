import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-maximum-number-of-string-pairs',
  title: 'Find Maximum Number of String Pairs',
  difficulty: 'easy',
  tags: ['arrays', 'strings', 'hash-map'],
  description: `You are given a **0-indexed** array \`words\` of strings.

A **pair** \`(i, j)\` forms a string pair if \`words[i]\` is equal to the **reverse** of \`words[j]\` and \`i < j\`.

Return the **maximum number** of such pairs. A word can be part of **at most one** pair.`,
  constraints: [
    '1 <= words.length <= 50',
    'words[i].length == 2',
    'words[i] consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["cd","ac","dc","ca","zz"]',
      output: '2',
      explanation: '"cd" and "dc" form one pair; "ac" and "ca" form another.',
    },
    {
      input: 'words = ["ab","ba","cc"]',
      output: '1',
      explanation: '"ab" and "ba" form one pair. "cc" reversed is "cc" but there is only one "cc".',
    },
    {
      input: 'words = ["aa","ab"]',
      output: '0',
      explanation: '"aa" reversed is "aa" (no duplicate), "ab" reversed is "ba" which is absent.',
    },
  ],
  hints: [
    'For each word, check if its reverse appears later in the array.',
    'Use a hash map: for each word, if its reverse has been seen before, count a pair and remove that entry.',
    'Since all strings have length 2, there are only 676 possible strings — the map stays small.',
  ],
  functionName: 'maximumNumberOfStringPairs',
  params: ['words'],
  starterCode: {
    javascript: `function maximumNumberOfStringPairs(words) {

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
    { args: [['ab']], expected: 0 },
    { args: [['ab', 'ba']], expected: 1 },
    { args: [['aa', 'aa']], expected: 1 },
    { args: [['ab', 'ba', 'ab', 'ba']], expected: 2 },
    { args: [['xy', 'yx', 'pq', 'qp', 'mn']], expected: 2 },
    { args: [['ab', 'cd', 'ef']], expected: 0 },
  ],
};
