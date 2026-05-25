import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-string-pairs',
  title: 'Maximum Number of String Pairs',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `You are given a **0-indexed** array \`words\` consisting of **distinct** strings.

The string \`words[i]\` can be **paired** with the string \`words[j]\` if \`words[i] = reverse(words[j])\` and \`0 <= i < j <= words.length - 1\`.

Return the **maximum** number of pairs.`,
  constraints: [
    '1 <= words.length <= 50',
    'words[i].length == 2',
    'words consists of distinct lowercase English letters.',
  ],
  examples: [
    { input: 'words = ["cd","ac","dc","ca","zz"]', output: '2', explanation: '"cd" and "dc" form one pair; "ac" and "ca" form another.' },
    { input: 'words = ["ab","ba","cc"]', output: '1', explanation: '"ab" and "ba" are a pair; "cc" is its own reverse but appears only once.' },
    { input: 'words = ["aa","ab"]', output: '0', explanation: 'No string is the reverse of another.' },
  ],
  hints: [
    'Use a set. For each word, check if its reverse is already in the set; if so, count a pair. Otherwise add the word.',
  ],
  functionName: 'maximumNumberOfStringPairs',
  params: ['words'],
  starterCode: {
    javascript: 'function maximumNumberOfStringPairs(words) {\n  \n}\n',
    python: 'def maximumNumberOfStringPairs(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['cd','ac','dc','ca','zz']], expected: 2 },
    { args: [['ab','ba','cc']], expected: 1 },
    { args: [['aa','ab']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['ab','ba']], expected: 1 },
    { args: [['pq','qr']], expected: 0 },
    { args: [['xy','yx','ab']], expected: 1 },
    { args: [['ab','cd','dc','ba']], expected: 2 },
    { args: [['aa','bb','cc']], expected: 0 },
  ],
};
