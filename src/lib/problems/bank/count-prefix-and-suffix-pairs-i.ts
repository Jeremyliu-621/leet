import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-prefix-and-suffix-pairs-i',
  title: 'Count Prefix and Suffix Pairs I',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** string array \`words\`.

Let's define a boolean function \`isPrefixAndSuffix(str1, str2)\`:

- It returns \`true\` if \`str1\` is **both** a prefix **and** a suffix of \`str2\`, and \`false\` otherwise.

Return an integer denoting the **number of pairs** \`(i, j)\` such that \`i < j\` and \`isPrefixAndSuffix(words[i], words[j])\` is \`true\`.`,
  constraints: [
    '1 <= words.length <= 50',
    '1 <= words[i].length <= 10',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["a","aba","ababa","aa"]',
      output: '4',
      explanation: 'Pairs where isPrefixAndSuffix is true:\n(0,1): "a" is prefix and suffix of "aba" ✓\n(0,2): "a" is prefix and suffix of "ababa" ✓\n(0,3): "a" is prefix of "aa" and suffix of "aa" ✓\n(2,3): "ababa" is not prefix/suffix of "aa" ✗\n(1,2): "aba" is prefix and suffix of "ababa" ✓\nTotal: 4.',
    },
    {
      input: 'words = ["a","aba","abba"]',
      output: '2',
      explanation: '(0,1): "a" is prefix and suffix of "aba" ✓\n(0,2): "a" is prefix and suffix of "abba" ✓\n(1,2): "aba" is NOT a prefix of "abba" (starts with "abb") ✗\nTotal: 2.',
    },
    {
      input: 'words = ["abab","ab"]',
      output: '0',
      explanation: '"abab" is longer than "ab", so no pair works.',
    },
  ],
  hints: [
    'For each pair (i, j) with i < j, check if words[i] is both a prefix and suffix of words[j].',
    'Use startsWith and endsWith (or slice comparisons) for the checks.',
    'Only valid if words[i].length <= words[j].length.',
  ],
  functionName: 'countPrefixSuffixPairs',
  params: ['words'],
  starterCode: {
    javascript: `function countPrefixSuffixPairs(words) {

}`,
    python: `def countPrefixSuffixPairs(words):
    pass`,
  },
  visibleTests: [
    { args: [['a', 'aba', 'ababa', 'aa']], expected: 4 },
    { args: [['a', 'aba', 'abba']], expected: 2 },
    { args: [['abab', 'ab']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 0 },
    { args: [['ab', 'ab']], expected: 1 },
    { args: [['a', 'b', 'aa']], expected: 1 },
    { args: [['abc', 'abcabc']], expected: 1 },
    { args: [['a', 'aa', 'aaa']], expected: 3 },
    { args: [['x', 'y', 'z']], expected: 0 },
  ],
};
