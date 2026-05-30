import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-substrings-with-every-vowel-and-k-consonants-ii',
  title: 'Count Substrings Containing Every Vowel and K Consonants II',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a string \`s\` and an integer \`k\`.

Return the total number of substrings of \`s\` that contain **every vowel** (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) **at least once** and have **exactly** \`k\` consonants.

A **consonant** is any letter that is not a vowel.`,
  constraints: [
    '5 <= s.length <= 5 * 10^4',
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
      explanation: 'Valid substrings: "iqeaouqi" [0,7], "iqeaouq" [0,6], and "qeaouqi" [1,7] each contain all 5 vowels and exactly 2 consonants.',
    },
    {
      input: 's = "aeiou", k = 0',
      output: '1',
      explanation: 'Only the full string contains all 5 vowels with 0 consonants.',
    },
  ],
  hints: [
    'For large n an O(n²) scan is too slow. Instead, use the identity: count(exactly k) = atLeast(k) − atLeast(k + 1), where atLeast(k) counts substrings with all 5 vowels and **at least** k consonants.',
    'atLeast(k) can be computed in O(n) with a sliding window. For each right endpoint r, maintain the leftmost left pointer l such that the window [l, r] is no longer valid when l moves one step right. Shrink from the left while the window has all 5 vowels and ≥ k consonants; each shrink step corresponds to one valid starting position.',
    'The number of valid starting positions for right endpoint r equals `l` (positions 0 through l−1). Accumulate this across all r to get atLeast(k). Call it twice — once for k and once for k+1 — and subtract.',
  ],
  functionName: 'countOfSubstrings',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function countOfSubstrings(s, k) {

}`,
    typescript: `function countOfSubstrings(s: string, k: number): number {

}`,
    python: `def countOfSubstrings(s, k):
    pass`,
  },
  visibleTests: [
    { args: ['aeioqu', 1], expected: 1 },
    { args: ['iqeaouqi', 2], expected: 3 },
    { args: ['aeiou', 0], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aeioubcd', 0], expected: 1 },
    { args: ['aeioubcd', 1], expected: 1 },
    { args: ['aeiouaeiou', 0], expected: 21 },
    { args: ['aeioubcdaeiou', 2], expected: 2 },
    { args: ['aeiouaeioubc', 2], expected: 6 },
    { args: ['aeioubbaeiou', 2], expected: 21 },
    { args: ['aeioubc', 2], expected: 1 },
    { args: ['uoiea', 0], expected: 1 },
  ],
};
