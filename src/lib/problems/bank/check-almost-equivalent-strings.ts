import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-almost-equivalent-strings',
  title: 'Check Whether Two Strings are Almost Equivalent',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Two strings \`word1\` and \`word2\` are considered **almost equivalent** if the differences between the frequencies of each letter from \`'a'\` to \`'z'\` between \`word1\` and \`word2\` is **at most** 3.

Given two strings \`word1\` and \`word2\`, each of length \`n\`, return \`true\` if \`word1\` and \`word2\` are **almost equivalent**, or \`false\` otherwise.`,
  constraints: [
    'n == word1.length == word2.length',
    '1 <= n <= 100',
    'word1 and word2 consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word1 = "aaaa", word2 = "bccb"',
      output: 'false',
      explanation: '"a" appears 4 times in word1 and 0 times in word2; |4-0| = 4 > 3.',
    },
    {
      input: 'word1 = "abcdeef", word2 = "abaaacc"',
      output: 'true',
      explanation: 'All character differences are at most 3.',
    },
  ],
  hints: [
    'Level 1: Count frequencies of each character in both strings.',
    'Level 2: For each of the 26 letters, check if |freq1[c] - freq2[c]| <= 3.',
    'Level 3: const f=(w)=>{const m=new Map();for(const c of w)m.set(c,(m.get(c)??0)+1);return m;};const m1=f(word1),m2=f(word2);return "abcdefghijklmnopqrstuvwxyz".split("").every(c=>Math.abs((m1.get(c)??0)-(m2.get(c)??0))<=3);',
  ],
  functionName: 'checkAlmostEquivalent',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: 'function checkAlmostEquivalent(word1, word2) {\n  // your code here\n}\n',
    typescript: "function checkAlmostEquivalent(word1: string, word2: string): boolean {\n  // your code here\n}",

    python: 'def checkAlmostEquivalent(word1, word2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['aaaa', 'bccb'], expected: false },
    { args: ['abcdeef', 'abaaacc'], expected: true },
  ],
  hiddenTests: [
    { args: ['abc', 'abc'], expected: true },
    { args: ['aaabbb', 'bbbaaa'], expected: true },
    { args: ['aaaa', 'aaaa'], expected: true },
    { args: ['aaab', 'bbba'], expected: true },
    { args: ['aaa', 'bbb'], expected: true },
  ],
};
