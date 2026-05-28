import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-vowels',
  title: 'Maximum Number of Vowels in a Substring of Given Length',
  difficulty: 'medium',
  tags: ['sliding-window'],
  description: `Given a string \`s\` and an integer \`k\`, return the **maximum number of vowel letters** in any substring of \`s\` with length \`k\`.

**Vowel letters** in English are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters',
    '1 <= k <= s.length',
  ],
  examples: [
    {
      input: 's = "abciiidef", k = 3',
      output: '3',
      explanation: 'The substring "iii" contains 3 vowel letters.',
    },
    {
      input: 's = "aeiou", k = 2',
      output: '2',
      explanation: 'Any substring of length 2 contains 2 vowels.',
    },
    {
      input: 's = "leetcode", k = 3',
      output: '2',
      explanation: 'Substrings "lee", "eet", and "ode" contain 2 vowels.',
    },
  ],
  hints: [
    'Use a sliding window of size k. Count vowels as you add/remove characters.',
    'When the window slides (i >= k), remove the leftmost character from the count.',
    'Track the maximum count seen across all windows.',
  ],
  functionName: 'maxVowels',
  params: ['s', 'k'],
  starterCode: {
    javascript: `function maxVowels(s, k) {
  // Return max vowels in any substring of length k
}`,
    python: `def maxVowels(s, k):
    # Return max vowels in any substring of length k
    pass`,
  },
  visibleTests: [
    { args: ['abciiidef', 3], expected: 3 },
    { args: ['aeiou', 2], expected: 2 },
    { args: ['leetcode', 3], expected: 2 },
  ],
  hiddenTests: [
    { args: ['rhythms', 4], expected: 0 },
    { args: ['tries', 4], expected: 2 },
    { args: ['aeiouaeiou', 5], expected: 5 },
    { args: ['a', 1], expected: 1 },
  ],
};
