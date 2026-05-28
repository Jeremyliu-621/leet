import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-whether-two-strings-are-almost-equivalent',
  title: 'Check Whether Two Strings are Almost Equivalent',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Two strings \`word1\` and \`word2\` are considered **almost equivalent** if the difference between the frequencies of each letter from \`'a'\` to \`'z'\` between \`word1\` and \`word2\` is **at most** 3.

Given two strings \`word1\` and \`word2\`, each of length \`n\`, return \`true\` if \`word1\` and \`word2\` are **almost equivalent**, or \`false\` otherwise.

The **frequency** of a letter \`x\` is the number of times it occurs in the string.`,
  constraints: [
    'n == word1.length == word2.length',
    '1 <= n <= 100',
    'word1 and word2 consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "aaaa", word2 = "bccb"',
      output: 'false',
      explanation:
        'The letter "a" appears 4 times in word1 and 0 times in word2. |4-0| = 4 > 3, so the strings are not almost equivalent.',
    },
    {
      input: 'word1 = "abcdeef", word2 = "abaaacc"',
      output: 'true',
      explanation:
        'For each letter, the frequency difference is at most 3. e.g. "a": |1-3|=2, "e": |2-0|=2 — all within bounds.',
    },
    {
      input: 'word1 = "cccddabba", word2 = "babababab"',
      output: 'true',
      explanation:
        'word1 has c=3,d=2,a=2,b=2; word2 has b=5,a=4. Max difference: |b:2-5|=3, |a:2-4|=2, |c:3-0|=3, |d:2-0|=2 — all ≤ 3.',
    },
  ],
  hints: [
    'Count the frequency of each letter in both strings using a hash map or an array of length 26.',
    'Iterate through all 26 letters and check the absolute difference in frequencies between the two strings.',
    'If any letter has a frequency difference greater than 3, return false immediately; otherwise return true.',
  ],
  functionName: 'checkAlmostEquivalent',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: `function checkAlmostEquivalent(word1, word2) {

}`,
    python: `def checkAlmostEquivalent(word1, word2):
    pass`,
  },
  visibleTests: [
    { args: ['aaaa', 'bccb'], expected: false },
    { args: ['abcdeef', 'abaaacc'], expected: true },
    { args: ['cccddabba', 'babababab'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', 'aaaa'], expected: true },
    { args: ['abc', 'def'], expected: true },
    { args: ['aaaaabc', 'bbbbc'], expected: false },
    { args: ['aaa', 'aaa'], expected: true },
    { args: ['aaabbb', 'bbbaaa'], expected: true },
  ],
};
