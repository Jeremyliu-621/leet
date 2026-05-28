import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-common-words-with-one-occurrence',
  title: 'Count Common Words With One Occurrence',
  difficulty: 'easy',
  tags: ['hash-map', 'strings'],
  description: `Given two string arrays \`words1\` and \`words2\`, return the number of strings that appear **exactly once** in each of the two arrays.`,
  constraints: [
    '1 <= words1.length, words2.length <= 1000',
    '1 <= words1[i].length, words2[j].length <= 30',
    'words1[i] and words2[j] consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]',
      output: '2',
      explanation: '"leetcode" appears exactly once in both arrays. "amazing" appears exactly once in both arrays. "is" appears twice in words1. So the answer is 2.',
    },
    {
      input: 'words1 = ["b","bb","bbb"], words2 = ["a","b"]',
      output: '1',
    },
    {
      input: 'words1 = ["a","ab"], words2 = ["a","a","a","ab"]',
      output: '1',
    },
  ],
  hints: [
    'Count the frequency of each word in both arrays using hash maps.',
    'Iterate over words in one map and check if the word has frequency 1 in both maps.',
    'A word counts if count1[word] === 1 AND count2[word] === 1.',
  ],
  functionName: 'countWords',
  params: ['words1', 'words2'],
  starterCode: {
    javascript: 'function countWords(words1, words2) {\n\n}\n',
    python: 'def countWords(words1: list, words2: list) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: [["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]], expected: 2 },
    { args: [["b","bb","bbb"], ["a","b"]], expected: 1 },
    { args: [["a","ab"], ["a","a","a","ab"]], expected: 1 },
  ],
  hiddenTests: [
    { args: [["a"], ["a"]], expected: 1 },
    { args: [["a","a"], ["a"]], expected: 0 },
    { args: [["x","y","z"], ["z","y","x"]], expected: 3 },
    { args: [["foo","bar"], ["baz","qux"]], expected: 0 },
  ],
};
