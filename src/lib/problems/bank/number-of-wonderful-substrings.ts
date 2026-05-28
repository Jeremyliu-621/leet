import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-wonderful-substrings',
  title: 'Number of Wonderful Substrings',
  difficulty: 'medium',
  tags: ['strings', 'hash-map'],
  description: `A **wonderful** string is a string where **at most one** letter appears an **odd** number of times.

- For example, \`"ccjjc"\` is wonderful because it has three \`c\` and two \`j\` — only \`c\` has an odd count.
- \`"abc"\` is not wonderful because \`a\`, \`b\`, and \`c\` all appear once.

Given a string \`word\` that consists of the first ten lowercase English letters (\`'a'\` through \`'j'\`), return the **number of wonderful non-empty substrings** of \`word\`. Count each occurrence of a substring separately.`,
  constraints: [
    '1 <= word.length <= 10^5',
    "word consists of lowercase English letters from 'a' to 'j'.",
  ],
  examples: [
    {
      input: 'word = "aba"',
      output: '4',
      explanation: 'The four wonderful substrings are "a", "b", "a", and "aba".',
    },
    {
      input: 'word = "aabb"',
      output: '9',
      explanation: '"a","a","b","b","aa","aab","aabb","abb","bb" — 9 wonderful substrings.',
    },
    {
      input: 'word = "he"',
      output: '2',
      explanation: '"h" and "e" each have one odd-count letter. "he" has two — not wonderful.',
    },
  ],
  hints: [
    "Represent the parity of each letter's frequency as a bitmask over 10 bits (bit k = parity of letter k).",
    'Compute a prefix XOR mask as you scan left to right.',
    'Substrings with all-even counts: prefix[r] == prefix[l-1] (same mask).',
    'Substrings with exactly one odd count: prefix[r] == prefix[l-1] XOR (1 << k) for some k.',
    'Use a frequency map of prefix masks seen so far, initialized with count[0] = 1.',
  ],
  functionName: 'wonderfulSubstrings',
  params: ['word'],
  starterCode: {
    javascript: 'function wonderfulSubstrings(word) {\n  \n}\n',
    typescript: "function wonderfulSubstrings(word: string): number {\n  \n}",

    python: 'def wonderfulSubstrings(word):\n    pass\n',
  },
  visibleTests: [
    { args: ['aba'], expected: 4 },
    { args: ['aabb'], expected: 9 },
    { args: ['he'], expected: 2 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aaaa'], expected: 10 },
    { args: ['aab'], expected: 5 },
    { args: ['abcde'], expected: 5 },
    { args: ['abab'], expected: 7 },
  ],
};
