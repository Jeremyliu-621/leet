import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-subsets',
  title: 'Word Subsets',
  difficulty: 'medium',
  tags: ['strings'],
  description: `You are given two string arrays \`words1\` and \`words2\`.

A string \`b\` is a **subset** of string \`a\` if every letter in \`b\` occurs in \`a\` including multiplicity.

A string \`a\` from \`words1\` is **universal** if for every string \`b\` in \`words2\`, \`b\` is a subset of \`a\`.

Return an array of all the **universal** strings in \`words1\`. You may return the answer in any order.`,
  constraints: [
    '1 <= words1.length, words2.length <= 10^4',
    '1 <= words1[i].length, words2[i].length <= 10',
    'words1[i] and words2[i] consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"]',
      output: '["facebook","google","leetcode"]',
    },
    {
      input: 'words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["l","e"]',
      output: '["apple","google","leetcode"]',
    },
    {
      input: 'words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["lo","eo"]',
      output: '["google","leetcode"]',
    },
  ],
  hints: [
    'For each character c, compute maxFreq[c] = max frequency of c across all words in words2.',
    'A word in words1 is universal if its frequency for every character meets maxFreq.',
    'One pass over words2 to build maxFreq, then one pass over words1 to filter.',
  ],
  functionName: 'wordSubsets',
  params: ['words1', 'words2'],
  starterCode: {
    javascript: 'function wordSubsets(words1, words2) {\n\n}\n',
    python: 'def wordSubsets(words1, words2):\n    pass\n',
  },
  visibleTests: [
    {
      args: [['amazon','apple','facebook','google','leetcode'], ['e','o']],
      expected: ['facebook','google','leetcode'],
    },
    {
      args: [['amazon','apple','facebook','google','leetcode'], ['l','e']],
      expected: ['apple','google','leetcode'],
    },
    {
      args: [['amazon','apple','facebook','google','leetcode'], ['lo','eo']],
      expected: ['google','leetcode'],
    },
  ],
  hiddenTests: [
    { args: [['a','b','ab'], ['a','b']], expected: ['ab'] },
    { args: [['apple','plum'], ['ap','pl']], expected: ['apple'] },
    { args: [['hello','world'], ['h']], expected: ['hello'] },
    { args: [['abc'], ['a','b','c','abc']], expected: ['abc'] },
  ],
};
