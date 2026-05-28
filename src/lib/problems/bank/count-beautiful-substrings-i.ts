import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-beautiful-substrings-i',
  title: 'Count Beautiful Substrings I',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a string \`s\` and a positive integer \`k\`.

A substring of \`s\` is **beautiful** if:
- The number of **vowels** equals the number of **consonants**, **and**
- The length of the substring is **divisible by \`k\`**.

The vowels are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`; every other lowercase letter is a consonant.

Return the **total number of beautiful substrings** in \`s\`.`,
  constraints: [
    '1 <= s.length <= 1000',
    '1 <= k <= s.length',
    's consists only of lowercase English letters',
  ],
  examples: [
    {
      input: "s = 'baeyh', k = 2",
      output: '4',
      explanation: "Beautiful substrings: \"ba\" (1v, 1c, len=2), \"ey\" (1v, 1c, len=2), \"baey\" (2v, 2c, len=4), \"aeyh\" (2v, 2c, len=4). Total = 4.",
    },
    {
      input: "s = 'abba', k = 1",
      output: '3',
      explanation: "Beautiful substrings: \"ab\" (1v, 1c, len=2), \"ba\" (1v, 1c, len=2), \"abba\" (2v, 2c, len=4). Total = 3.",
    },
    {
      input: "s = 'bcdf', k = 1",
      output: '0',
      explanation: 'No substring has equal vowels and consonants since there are no vowels.',
    },
  ],
  hints: [
    'A beautiful substring must have even length (since #vowels = #consonants = length/2). You can immediately skip substrings of odd length.',
    'For a substring starting at index i and ending at j, maintain running counts of vowels and consonants as you extend j. The length is j − i + 1.',
    'Check the beautiful condition: vowels == consonants AND (j - i + 1) % k == 0. A brute-force O(n²) scan over all starting indices is sufficient for n ≤ 1000.',
  ],
  functionName: 'beautifulSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function beautifulSubstrings(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  // Try all starting indices i; extend j and check the beautiful condition.
}`,
    typescript: "function beautifulSubstrings(s: string, k: number): number {\n  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);\n  // Try all starting indices i; extend j and check the beautiful condition.\n}",

    python: `def beautifulSubstrings(s, k):
    vowels = set('aeiou')
    # Try all starting indices i; extend j and check the beautiful condition.
    pass`,
  },
  visibleTests: [
    { args: ['baeyh', 2], expected: 4 },
    { args: ['abba', 1], expected: 3 },
    { args: ['bcdf', 1], expected: 0 },
  ],
  hiddenTests: [
    { args: ['aeiou', 1], expected: 0 },
    { args: ['aeioubc', 1], expected: 2 },
    { args: ['leetcode', 1], expected: 13 },
    { args: ['aabb', 2], expected: 2 },
    { args: ['aaabbb', 3], expected: 1 },
  ],
};
