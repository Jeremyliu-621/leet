import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-two-strings-almost-equivalent',
  title: 'Check Whether Two Strings are Almost Equivalent',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Two strings \`word1\` and \`word2\` are considered **almost equivalent** if the differences between the frequencies of each letter from \`'a'\` to \`'z'\` between \`word1\` and \`word2\` is **at most** 3.

Given two strings \`word1\` and \`word2\`, each of length \`n\`, return \`true\` if \`word1\` and \`word2\` are **almost equivalent**, or \`false\` otherwise.`,
  constraints: [
    '`n == word1.length == word2.length`',
    '`1 <= n <= 100`',
    '`word1` and `word2` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "aaaa", word2 = "bccb"',
      output: 'false',
      explanation: '"a" appears 4 times in word1, 0 in word2. |4-0|=4 > 3.',
    },
    {
      input: 'word1 = "abcdeef", word2 = "abaaacc"',
      output: 'true',
      explanation: 'All letter frequency differences are at most 3.',
    },
    {
      input: 'word1 = "cccddabba", word2 = "babababab"',
      output: 'true',
    },
  ],
  hints: [
    'Count frequencies of each letter in both strings. Check if |freq1[c] - freq2[c]| <= 3 for all letters a-z.',
    'Count character frequencies for both strings. For every character `c` that appears in either, check that `|freq1[c] - freq2[c]| <= 3`.',
    `\`\`\`js
const f1 = {}, f2 = {};
for (const c of word1) f1[c] = (f1[c]||0)+1;
for (const c of word2) f2[c] = (f2[c]||0)+1;
const all = new Set([...Object.keys(f1), ...Object.keys(f2)]);
return [...all].every(c => Math.abs((f1[c]||0)-(f2[c]||0)) <= 3);\`\`\``
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
    { args: ['a', 'a'], expected: true },
    { args: ['a', 'b'], expected: true },
    { args: ['aaaa', 'aaaa'], expected: true },
    { args: ['abcd', 'dcba'], expected: true },
    { args: ['aaaaaaa', 'b'], expected: false },
  ],
};
