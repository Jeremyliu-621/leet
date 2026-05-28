import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowel-permutation',
  title: 'Count Vowels Permutation',
  difficulty: 'medium',
  tags: ['dynamic-programming'],
  description: `Given an integer \`n\`, count how many strings of length \`n\` can be formed under the following rules:

- Each character is a lowercase vowel (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`).
- Each vowel \`'a'\` may only be followed by \`'e'\`.
- Each vowel \`'e'\` may only be followed by \`'a'\` or \`'i'\`.
- Each vowel \`'i'\` **may not** be followed by another \`'i'\`.
- Each vowel \`'o'\` may only be followed by \`'i'\` or \`'u'\`.
- Each vowel \`'u'\` may only be followed by \`'a'\`.

Return the number of strings of length \`n\`. Since the answer may be too large, return it **modulo** \`10^9 + 7\`.`,
  constraints: ['1 <= n <= 2 * 10^4'],
  examples: [
    {
      input: 'n = 1',
      output: '5',
      explanation: 'All possible strings are: "a", "e", "i", "o" and "u".',
    },
    {
      input: 'n = 2',
      output: '10',
      explanation: 'All possible strings are: "ae", "ea", "ei", "ia", "ie", "io", "iu", "oi", "ou" and "ua".',
    },
    {
      input: 'n = 5',
      output: '68',
    },
  ],
  hints: [
    'Use DP where dp[vowel] = number of valid strings ending with that vowel.',
    'Reverse the "can follow" rules to get "can precede" rules: a is preceded by e, i, or u; e by a or i; i by e or o; o by i; u by i or o.',
    'Each step: new_a = e+i+u, new_e = a+i, new_i = e+o, new_o = i, new_u = i+o. Sum all after n−1 steps.',
  ],
  functionName: 'countVowelPermutation',
  params: ['n'],
  starterCode: {
    javascript: 'function countVowelPermutation(n) {\n\n}\n',
    typescript: "function countVowelPermutation(n: number): number {\n\n}",

    python: 'def countVowelPermutation(n):\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: 5 },
    { args: [2], expected: 10 },
    { args: [5], expected: 68 },
  ],
  hiddenTests: [
    { args: [3], expected: 19 },
    { args: [10], expected: 1739 },
    { args: [100], expected: 173981881 },
    { args: [20000], expected: 759959057 },
  ],
};
