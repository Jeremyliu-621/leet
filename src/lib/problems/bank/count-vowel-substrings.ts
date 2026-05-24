import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowel-substrings',
  title: 'Count Vowel Substrings of a String',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `A **substring** is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that **only** consists of vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`) and has **all five** vowels present in it.

Given a string \`word\`, return the number of **vowel substrings** in \`word\`.`,
  constraints: [
    '`1 <= word.length <= 100`',
    '`word` consists of lowercase English letters only.',
  ],
  examples: [
    {
      input: 'word = "aeiouu"',
      output: '2',
      explanation: '"aeiou" and "aeiouu" are vowel substrings.',
    },
    {
      input: 'word = "unicornarihan"',
      output: '0',
    },
    {
      input: 'word = "cuaieuouac"',
      output: '7',
    },
  ],
  hints: [
    'For each pair (i, j), check if s[i..j] contains only vowels and has all 5 vowels. Use a set to track distinct vowels.',
  ],
  functionName: 'countVowelSubstrings',
  params: ['word'],
  starterCode: {
    javascript: `function countVowelSubstrings(word) {

}`,
    python: `def countVowelSubstrings(word):
    pass`,
  },
  visibleTests: [
    { args: ['aeiouu'], expected: 2 },
    { args: ['unicornarihan'], expected: 0 },
    { args: ['cuaieuouac'], expected: 7 },
  ],
  hiddenTests: [
    { args: ['aeiou'], expected: 1 },
    { args: ['a'], expected: 0 },
    { args: ['aeiouaeiou'], expected: 21 },
    { args: ['bcdfg'], expected: 0 },
    { args: ['aeiobuu'], expected: 0 },
  ],
};
