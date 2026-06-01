import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-valid-strings-to-form-target-ii',
  title: 'Minimum Number of Valid Strings to Form Target II',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `You are given an array of strings \`words\` and a string \`target\`.

A string \`x\` is called **valid** if \`x\` is a prefix of **any** string in \`words\`.

Return the **minimum** number of valid strings that can be **concatenated** to form \`target\`. If it is not possible to form \`target\`, return \`-1\`.

> **Note:** The same valid string (or prefix) can be used multiple times.`,
  constraints: [
    '1 <= words.length <= 100',
    '1 <= words[i].length <= 5 * 10^4',
    'The total length of all words is at most 10^6',
    '1 <= target.length <= 5 * 10^4',
    'words[i] and target consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'words = ["abc","aaaaa","bcdef"], target = "aaaabc"',
      output: '2',
      explanation:
        'Take "aaaa" (prefix of "aaaaa") from position 0 and "bc" (prefix of "bcdef") from position 4. Two valid strings.',
    },
    {
      input: 'words = ["ab","bc","cd"], target = "abcd"',
      output: '2',
      explanation: 'Take "ab" (prefix of "ab") then "cd" (prefix of "cd"). Two valid strings.',
    },
    {
      input: 'words = ["abcde"], target = "xyz"',
      output: '-1',
      explanation: 'No valid prefix of "abcde" begins with "x", so no coverage is possible.',
    },
  ],
  hints: [
    'Level 1: Model this as a jump game. For each position j in target, compute reach[j] = j + max_l, where max_l is the length of the longest valid prefix of any word that matches target[j:j+max_l]. Then use the standard greedy BFS for minimum jumps.',
    'Level 2: To compute reach[j] efficiently: build a polynomial rolling hash of target and store hashes of all prefixes of all words in a HashSet. For each j, binary search for the largest l such that H(target[j:j+l]) is in the set.',
    'Level 3: Use two hash bases (to reduce collision probability). Precompute power arrays and prefix hashes for the target. For each word, add hashes of all its prefixes to the set. Then for each j, binary search for max l (1..min(maxWordLen, n-j)) and update reach[j]. Finally, greedy jump game with curEnd/farthest pointers.',
  ],
  functionName: 'minValidStrings',
  params: ['words', 'target'],
  starterCode: {
    javascript: `function minValidStrings(words, target) {

}`,
    typescript: `function minValidStrings(words: string[], target: string): number {

}`,
    python: `def minValidStrings(words, target):
    pass`,
  },
  visibleTests: [
    { args: [['abc', 'aaaaa', 'bcdef'], 'aaaabc'], expected: 2 },
    { args: [['ab', 'bc', 'cd'], 'abcd'], expected: 2 },
    { args: [['abcde'], 'xyz'], expected: -1 },
  ],
  hiddenTests: [
    { args: [['abc'], 'abc'], expected: 1 },
    { args: [['a', 'b', 'c'], 'abc'], expected: 3 },
    { args: [['ab', 'abc'], 'abc'], expected: 1 },
    { args: [['a'], 'aaaa'], expected: 4 },
    { args: [['aa'], 'aaaa'], expected: 2 },
    { args: [['abc', 'def'], 'abcdef'], expected: 2 },
    { args: [['abc', 'de'], 'abcde'], expected: 2 },
    { args: [['a', 'ab', 'abc'], 'abcabc'], expected: 2 },
    { args: [['xyz'], 'abc'], expected: -1 },
    { args: [['ab', 'cd'], 'abbc'], expected: -1 },
  ],
};
