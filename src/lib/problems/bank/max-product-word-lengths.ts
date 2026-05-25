import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-product-word-lengths',
  title: 'Maximum Product of Word Lengths',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `Given a string array \`words\`, return the maximum value of \`length(word[i]) * length(word[j])\` where the two words do not share common letters. If no such two words exist, return \`0\`.`,
  constraints: [
    '2 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'words[i] consists only of lowercase English letters',
  ],
  examples: [
    {
      input: 'words = ["abcw","baz","foo","bar","xtfn","abcdef"]',
      output: '16',
      explanation: 'The two words can be "abcw", "xtfn".',
    },
    {
      input: 'words = ["a","ab","abc","d","cd","bcd","abcd"]',
      output: '4',
      explanation: 'The two words can be "ab", "cd".',
    },
    {
      input: 'words = ["a","aa","aaa","aaaa"]',
      output: '0',
      explanation: 'No such pair of words.',
    },
  ],
  hints: [
    'Represent each word as a bitmask of 26 bits, one per letter.',
    'Two words share no letters if and only if (mask[i] & mask[j]) === 0.',
  ],
  functionName: 'maxProductWordLengths',
  params: ['words'],
  starterCode: {
    javascript: 'function maxProductWordLengths(words) {\n\n}\n',
    python: 'def maxProductWordLengths(words):\n    pass\n',
  },
  visibleTests: [
    { args: [['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']], expected: 16 },
    { args: [['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']], expected: 4 },
    { args: [['a', 'aa', 'aaa', 'aaaa']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a', 'b']], expected: 1 },
    { args: [['ab', 'cd', 'ef']], expected: 4 },
    { args: [['a', 'b', 'c', 'd']], expected: 1 },
    { args: [['abc', 'efg', 'abcefg']], expected: 9 },
  ],
};
