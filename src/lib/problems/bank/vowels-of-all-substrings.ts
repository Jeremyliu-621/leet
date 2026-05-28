import type { Problem } from '../types';

export const problem: Problem = {
  id: 'vowels-of-all-substrings',
  title: 'Vowels of All Substrings',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `Given a string \`word\`, return the **sum of the number of vowels** (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) in every substring of \`word\`.

A **substring** is a contiguous (non-empty) sequence of characters within a string.

Note: Due to the large number of substrings, the answer may be very large. Return it **modulo** 10^9 + 7.`,
  constraints: [
    '1 <= word.length <= 10^5',
    'word consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 'word = "aba"',
      output: '6',
      explanation: 'Substrings: "a"(1), "ab"(1), "aba"(2), "b"(0), "ba"(1), "a"(1). Total = 6.',
    },
    {
      input: 'word = "abc"',
      output: '3',
      explanation: '"a"(1),"ab"(1),"abc"(1),"b"(0),"bc"(0),"c"(0). Total = 3.',
    },
    {
      input: 'word = "ltcd"',
      output: '0',
      explanation: 'No vowels in word.',
    },
  ],
  hints: [
    'For each vowel at index i (0-indexed) in a string of length n, how many substrings contain it?',
    'A substring [l, r] contains index i iff l <= i and r >= i. Choices: l in [0..i] (i+1 options), r in [i..n-1] (n-i options).',
    'Contribution of vowel at index i = (i + 1) * (n - i).',
  ],
  functionName: 'countVowels',
  params: ['word'],
  starterCode: {
    javascript: 'function countVowels(word) {\n  \n}\n',
    typescript: "function countVowels(word: string): number {\n  \n}",

    python: 'def countVowels(word):\n    pass\n',
  },
  visibleTests: [
    { args: ['aba'], expected: 6 },
    { args: ['abc'], expected: 3 },
    { args: ['ltcd'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['aa'], expected: 4 },
    { args: ['aeiou'], expected: 35 },
    { args: ['xyz'], expected: 0 },
    { args: ['aab'], expected: 7 },
  ],
};
