import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-anagrams',
  title: 'Count Anagrams',
  difficulty: 'hard',
  tags: ['strings', 'math', 'hash-map'],
  description: `You are given a string \`s\`, where every **two** consecutive words in \`s\` will be separated by exactly one space.

Return *the number of **distinct** strings that can be formed by rearranging the letters of each word in s, for all possible arrangements of each word, and all arrangements of all these words together*.

Since the answer may be very large, return it **modulo** \`10^9 + 7\`.

**Note:** Two strings formed from different rearrangements of the same word are considered distinct only if the strings themselves are different.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters and spaces.',
    'There is exactly one space between consecutive words in s.',
  ],
  examples: [
    {
      input: 's = "too hot"',
      output: '18',
      explanation: '"too" has 3!/2!=3 arrangements; "hot" has 3!=6 arrangements. Total = 18.',
    },
    {
      input: 's = "aa"',
      output: '1',
      explanation: '"aa" has 2!/2!=1 distinct arrangement.',
    },
  ],
  hints: [
    'Level 1: For each word of length n with character frequencies f1, f2, ..., the number of distinct arrangements is n! / (f1! * f2! * ...). Multiply across all words, modulo 10^9+7.',
    'Level 2: To compute division modulo a prime p, use modular inverse: a/b ≡ a * b^(p-2) (mod p) by Fermat\'s little theorem. Precompute factorials and inverse factorials mod 10^9+7.',
    'Level 3: Precompute fact[i] and inv_fact[i] for i up to max_word_length. For each word, result = fact[n] * prod(inv_fact[f_c]) mod p. Multiply across words.',
  ],
  functionName: 'countAnagrams',
  params: ['s'],
  starterCode: {
    javascript: `function countAnagrams(s) {

}`,
    typescript: `function countAnagrams(s: string): number {

}`,
    python: `def countAnagrams(s):
    pass`,
  },
  visibleTests: [
    { args: ['too hot'], expected: 18 },
    { args: ['aa'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['ab'], expected: 2 },
    { args: ['abc'], expected: 6 },
    { args: ['a'], expected: 1 },
    { args: ['aa bb'], expected: 1 },
    { args: ['ab cd'], expected: 4 },
    { args: ['aaa bb c'], expected: 1 },
    { args: ['abcde'], expected: 120 },
  ],
};
