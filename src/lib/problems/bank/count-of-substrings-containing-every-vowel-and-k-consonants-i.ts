import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-of-substrings-containing-every-vowel-and-k-consonants-i',
  title: 'Count of Substrings Containing Every Vowel and K Consonants I',
  difficulty: 'medium',
  tags: ['strings', 'sliding-window'],
  description: `You are given a string \`word\` and a non-negative integer \`k\`.

Return the total number of substrings of \`word\` that contain every vowel (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`) at least once and **exactly** \`k\` consonants.`,
  constraints: [
    '5 <= word.length <= 250',
    'word consists only of lowercase English letters',
    '0 <= k <= word.length - 5',
  ],
  examples: [
    {
      input: 'word = "aeiouabc", k = 1',
      output: '2',
      explanation: 'Substrings with all 5 vowels and exactly 1 consonant: "aeiouab" (indices 0–6) and "eiouab" (indices 1–6), each has all of a,e,i,o,u plus exactly one consonant b.',
    },
    {
      input: 'word = "aeiou", k = 0',
      output: '1',
      explanation: 'Only "aeiou" itself contains all vowels and 0 consonants.',
    },
    {
      input: 'word = "aeiouq", k = 1',
      output: '1',
      explanation: '"aeiouq" is the only substring with all 5 vowels and exactly 1 consonant.',
    },
  ],
  hints: [
    'Use the identity: exactly(k) = atLeast(k) − atLeast(k+1).',
    'For atLeast(k), use a two-pointer sliding window: expand the right pointer, shrink the left when consonants ≥ k and all 5 vowels are present. Each valid left position contributes (n − right) new substrings.',
    'Track vowel coverage with a frequency Map (delete when count reaches 0, so Map.size tells you how many distinct vowels are in the window).',
  ],
  functionName: 'countOfSubstrings',
  params: ['word', 'k'],
  starterCode: {
    javascript: `function countOfSubstrings(word, k) {
  // your code here
}`,
    typescript: `function countOfSubstrings(word: string, k: number): number {
  // your code here
}`,
    python: `def countOfSubstrings(word, k):
    # your code here
`,
  },
  visibleTests: [
    { args: ['aeiouabc', 1], expected: 2 },
    { args: ['aeiou', 0], expected: 1 },
    { args: ['aeiouq', 1], expected: 1 },
  ],
  hiddenTests: [
    { args: ['aeiouabc', 2], expected: 2 },
    { args: ['aeiouaeioubc', 1], expected: 6 },
    { args: ['aeiouaeiou', 0], expected: 21 },
    { args: ['aeiouq', 0], expected: 1 },
    { args: ['aeiouabc', 0], expected: 3 },
  ],
};
