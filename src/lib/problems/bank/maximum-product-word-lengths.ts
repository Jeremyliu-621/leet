import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-product-word-lengths',
  title: 'Maximum Product of Word Lengths',
  difficulty: 'medium',
  tags: ['arrays'],
  description: `Given a string array \`words\`, return *the maximum value of* \`length(word[i]) * length(word[j])\` *where the two words do not share common letters*. If no such two words exist, return \`0\`.`,
  constraints: [
    '2 <= words.length <= 1000',
    '1 <= words[i].length <= 1000',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abcw","baz","foo","bar","xtfn","abcdef"]',
      output: '16',
      explanation: 'The two words can be "abcw" (4) and "xtfn" (4).',
    },
    {
      input: 'words = ["a","ab","abc","d","cd","bcd","abcd"]',
      output: '4',
      explanation: 'The two words can be "ab" (2) and "cd" (2).',
    },
    {
      input: 'words = ["a","aa","aaa","aaaa"]',
      output: '0',
    },
  ],
  hints: [
    'Represent each word as a bitmask of 26 bits — set bit i if character \'a\'+i is present.',
    'Two words share no common letters if and only if (mask[i] & mask[j]) === 0.',
    'Try all pairs and track the maximum product.',
  ],
  functionName: 'maxProduct',
  params: ['words'],
  starterCode: {
    javascript: `function maxProduct(words) {
  // Return max product of lengths of two words with no shared letters
}`,
    python: `def maxProduct(words):
    # Return max product of lengths of two words with no shared letters
    pass`,
  },
  visibleTests: [
    { args: [['abcw', 'baz', 'foo', 'bar', 'xtfn', 'abcdef']], expected: 16 },
    { args: [['a', 'ab', 'abc', 'd', 'cd', 'bcd', 'abcd']], expected: 4 },
    { args: [['a', 'aa', 'aaa', 'aaaa']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a', 'b']], expected: 1 },
    { args: [['abc', 'xyz']], expected: 9 },
    { args: [['ab', 'cd', 'ef']], expected: 4 },
    { args: [['a', 'aa']], expected: 0 },
  ],
};
