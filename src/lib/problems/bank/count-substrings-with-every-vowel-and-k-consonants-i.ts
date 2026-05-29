import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-every-vowel-and-k-consonants-i',
  title: 'Count Substrings Containing Every Vowel and K Consonants I',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a string \`s\` and an integer \`k\`.

Return the total number of substrings of \`s\` that contain **every vowel** (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) **at least once** and have **exactly** \`k\` consonants.

A **consonant** is any letter that is not a vowel.`,
  constraints: [
    '5 <= s.length <= 250',
    's consists only of lowercase English letters.',
    '0 <= k <= s.length - 5',
  ],
  examples: [
    {
      input: 's = "aeioqu", k = 1',
      output: '1',
      explanation: 'The only substring with all 5 vowels and exactly 1 consonant is "aeioqu" itself.',
    },
    {
      input: 's = "iqeaouqi", k = 2',
      output: '3',
      explanation: 'Valid substrings: "iqeaouqi" [0,7], "iqeaouq" [0,6], and "qeaouqi" [1,7] — each contains all 5 vowels and exactly 2 consonants.',
    },
    {
      input: 's = "aeiou", k = 0',
      output: '1',
      explanation: 'Only the full string contains all 5 vowels with 0 consonants.',
    },
  ],
  hints: [
    'For n ≤ 250, an O(n²) approach works: fix the start index i and extend j rightward, tracking vowel frequencies and consonant count.',
    'Keep a `Map` of vowel frequencies and a `consonants` counter. When `consonants > k`, break early — extending j further can only increase consonants.',
    'A substring is valid when `vowelFreq.size === 5` (all 5 distinct vowels seen) and `consonants === k`.',
  ],
  functionName: 'countOfSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countOfSubstrings(s, k) {\n\n}`,
    python: `def countOfSubstrings(s: str, k: int) -> int:\n    pass`,
  },
  visibleTests: [
    { args: ['aeioqu', 1], expected: 1 },
    { args: ['iqeaouqi', 2], expected: 3 },
    { args: ['aeiou', 0], expected: 1 },
  ],
  hiddenTests: [
    // single consonant region — only i=0 can gather all 5 vowels before hitting consonants
    { args: ['aeioubcd', 0], expected: 1 },
    { args: ['aeioubcd', 1], expected: 1 },
    { args: ['aeioubcd', 2], expected: 1 },
    { args: ['aeioubcd', 3], expected: 1 },
    // duplicate vowels extend valid windows
    { args: ['aeiouu', 0], expected: 2 },
    { args: ['aeiouu', 1], expected: 0 },
    // reverse vowel order
    { args: ['uoiea', 0], expected: 1 },
    // leading consonant
    { args: ['baeiou', 1], expected: 1 },
    // overlapping vowel spans — sum 1+2+3+4+5+6 = 21
    { args: ['aeiouaeiou', 0], expected: 21 },
    // single consonant among repeated vowels
    { args: ['aeioubc', 2], expected: 1 },
  ],
};
