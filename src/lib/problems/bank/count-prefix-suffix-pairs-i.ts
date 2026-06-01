import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-prefix-suffix-pairs-i',
  title: 'Count Prefix and Suffix Pairs I',
  difficulty: 'easy',
  tags: ['strings', 'arrays'],
  description: `You are given a **0-indexed** string array \`words\`.

Let's define a boolean function \`isPrefixAndSuffix\` that takes two strings, \`str1\` and \`str2\`:

- \`isPrefixAndSuffix(str1, str2)\` returns \`true\` if \`str1\` is both a **prefix** and a **suffix** of \`str2\`, and \`false\` otherwise.

Return an integer denoting the number of index pairs \`(i, j)\` such that \`i < j\`, and \`isPrefixAndSuffix(words[i], words[j])\` is \`true\`.`,
  constraints: [
    '`1 <= words.length <= 50`',
    '`1 <= words[i].length <= 10`',
    '`words[i]\` consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["a","aba","ababa","aa"]',
      output: '4',
      explanation:
        '"a" is prefix+suffix of "aba" → 1. "a" is prefix+suffix of "ababa" → 1. "a" is prefix+suffix of "aa" → 1. "aba" is prefix+suffix of "ababa" → 1. Total = 4.',
    },
    {
      input: 'words = ["pa","papa","ma","mama"]',
      output: '2',
      explanation:
        '"pa" is prefix+suffix of "papa". "ma" is prefix+suffix of "mama". Total = 2.',
    },
    {
      input: 'words = ["abab","ab"]',
      output: '0',
      explanation: '"ab" is shorter, and "abab" is not a prefix/suffix of "ab" (too long). No valid pair.',
    },
  ],
  hints: [
    'For each pair (i, j) with i < j, check if words[i].length <= words[j].length.',
    'Then check if words[j] starts with words[i] AND ends with words[i].',
    'Since lengths are small (≤ 10) and array is small (≤ 50), an O(n² × len) brute force is fine.',
  ],
  functionName: 'countPrefixSuffixPairs',
  params: ['words'],
  starterCode: {
    javascript: `function countPrefixSuffixPairs(words) {

}`,
    typescript: `function countPrefixSuffixPairs(words: string[]): number {

}`,
    python: `def countPrefixSuffixPairs(words):
    pass`,
  },
  visibleTests: [
    { args: [['a', 'aba', 'ababa', 'aa']], expected: 4 },
    { args: [['pa', 'papa', 'ma', 'mama']], expected: 2 },
    { args: [['abab', 'ab']], expected: 0 },
  ],
  hiddenTests: [
    { args: [['a']], expected: 0 },
    { args: [['a', 'a']], expected: 1 },
    { args: [['aa', 'a']], expected: 0 },
    { args: [['abc', 'abcabc']], expected: 1 },
    { args: [['a', 'aa', 'aaa']], expected: 3 },
    { args: [['ab', 'ba']], expected: 0 },
    { args: [['abc', 'abc']], expected: 1 },
    { args: [['xyz', 'xyzxyz', 'xyzxyzxyz']], expected: 3 },
  ],
};
