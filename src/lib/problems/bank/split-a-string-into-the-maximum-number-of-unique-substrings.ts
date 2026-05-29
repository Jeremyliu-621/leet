import type { Problem } from '../types';

export const problem: Problem = {
  id: 'split-a-string-into-the-maximum-number-of-unique-substrings',
  title: 'Split a String Into the Maximum Number of Unique Substrings',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `Given a string \`s\`, return the **maximum** number of unique substrings that the given string can be split into.

You can split string \`s\` into any list of **non-empty substrings**, where the concatenation of the substrings forms the original string. However, you must split the substrings such that all of them are **unique**.

A **substring** is a contiguous sequence of characters within a string.`,
  constraints: [
    '`1 <= s.length <= 16`',
    '`s` contains only lower case English letters.',
  ],
  examples: [
    {
      input: 's = "ababccc"',
      output: '5',
      explanation: 'One split: ["a","b","ab","c","cc"]. All substrings are unique.',
    },
    {
      input: 's = "aba"',
      output: '2',
      explanation: 'One split: ["a","ba"] or ["ab","a"]. Cannot split into 3 unique parts since the string only has 2 distinct single-character substrings.',
    },
    {
      input: 's = "aa"',
      output: '1',
      explanation: 'The only split with no duplicates is ["aa"] itself.',
    },
  ],
  hints: [
    'Use backtracking to try all possible splits.',
    'Maintain a set of used substrings. At each position, try all prefixes of the remaining string.',
    'If a prefix is not in the used set, add it and recurse. Track the maximum count reached.',
  ],
  functionName: 'maxUniqueSplit',
  params: ['s'],
  starterCode: {
    javascript: `function maxUniqueSplit(s) {

}`,
    typescript: `function maxUniqueSplit(s: string): number {

}`,
    python: `def maxUniqueSplit(s):
    pass`,
  },
  visibleTests: [
    { args: ['ababccc'], expected: 5 },
    { args: ['aba'], expected: 2 },
    { args: ['aa'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['abc'], expected: 3 },
    { args: ['abcd'], expected: 4 },
    { args: ['abcabc'], expected: 4 },
    { args: ['aab'], expected: 2 },
    { args: ['abcdefg'], expected: 7 },
  ],
};
