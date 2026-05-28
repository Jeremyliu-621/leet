import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-prefix-suffix-pairs',
  title: 'Count Prefix and Suffix Pairs I',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a **0-indexed** string array \`words\`.

Let's define a boolean function \`isPrefixAndSuffix\` that takes two strings, \`str1\` and \`str2\`:
- \`isPrefixAndSuffix(str1, str2)\` returns \`true\` if \`str1\` is **both** a prefix and a suffix of \`str2\`, and \`false\` otherwise.

For example, \`isPrefixAndSuffix("aba", "ababa")\` is \`true\` because \`"aba"\` is a prefix of \`"ababa"\` and also a suffix of \`"ababa"\`.

Return an integer denoting the **number of pairs** of indices \`(i, j)\` such that \`i < j\`, and \`isPrefixAndSuffix(words[i], words[j])\` is \`true\`.`,
  constraints: [
    '1 <= words.length <= 50',
    '1 <= words[i].length <= 10',
    'words[i] consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["a","aba","ababa","aa"]',
      output: '4',
      explanation: '(0,1): "a" is prefix+suffix of "aba". (0,2): "a" is p+s of "ababa". (0,3): "a" is p+s of "aa". (1,2): "aba" is p+s of "ababa". Total = 4.',
    },
    {
      input: 'words = ["pa","papa","ma","mama"]',
      output: '2',
      explanation: '(0,1): "pa" is p+s of "papa". (2,3): "ma" is p+s of "mama". Total = 2.',
    },
  ],
  hints: [
    'For each pair (i,j) with i<j, check if words[j].startsWith(words[i]) && words[j].endsWith(words[i]).',
    'str2.startsWith(str1) && str2.endsWith(str1) works directly in JS.',
    'With n ≤ 50 and length ≤ 10, O(n^2 * L) brute force is fast enough.',
  ],
  functionName: 'countPrefixSuffixPairs',
  params: ['words'],
  starterCode: {
    javascript: `function countPrefixSuffixPairs(words) {

}`,
    typescript: "function countPrefixSuffixPairs(words: string[]): number {\n\n}",

    python: `def countPrefixSuffixPairs(words):
    pass`,
  },
  visibleTests: [
    { args: [['a', 'aba', 'ababa', 'aa']], expected: 4 },
    { args: [['pa', 'papa', 'ma', 'mama']], expected: 2 },
  ],
  hiddenTests: [
    { args: [['a', 'a']], expected: 1 },
    { args: [['abc', 'abcabc']], expected: 1 },
    { args: [['x', 'y']], expected: 0 },
    { args: [['ab', 'ab', 'abab']], expected: 3 },
  ],
};
