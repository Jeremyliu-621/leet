import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-vowel-substrings-of-a-word',
  title: 'Count Vowel Substrings of a Word',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `A **vowel substring** is a substring that:
1. Contains **only** vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`), and
2. Contains **all five** vowels at least once.

Given a string \`word\`, return the number of **vowel substrings** in \`word\`.

**Example:** \`"aeiouu"\` → \`2\`
- \`"aeiou"\` (indices 0–4) contains all 5 vowels ✓
- \`"aeiouu"\` (indices 0–5) contains all 5 vowels ✓
- \`"eiouu"\` starts at index 1 but has no \`'a'\` ✗`,
  constraints: [
    '1 ≤ word.length ≤ 100',
    'word consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 'word = "aeiouu"',
      output: '2',
      explanation: '"aeiou" and "aeiouu" each contain all 5 vowels and no consonants.',
    },
    {
      input: 'word = "unicornarihan"',
      output: '0',
      explanation: 'Every vowel-only stretch is too short to contain all 5 vowels.',
    },
    {
      input: 'word = "cuaieuouac"',
      output: '7',
      explanation: 'There are 7 substrings consisting solely of vowels with all 5 present.',
    },
  ],
  hints: [
    'Use a nested loop: for each starting index i, extend to j while the character is a vowel. Track which vowels you have seen.',
    'You only need a Set of size 5 to know all vowels are present. As soon as the current character is a consonant, break the inner loop.',
    'O(n²) is perfectly fine here because the input length is at most 100.',
  ],
  functionName: 'countVowelSubstringsOfAWord',
  params: ['word'],
  starterCode: {
    javascript: `function countVowelSubstringsOfAWord(word) {
  // Count substrings that contain only vowels AND all 5 vowels
}`,
    typescript: "function countVowelSubstringsOfAWord(word: string): number {\n  // Count substrings that contain only vowels AND all 5 vowels\n}",

    python: `def countVowelSubstringsOfAWord(word: str) -> int:
    # Count substrings that contain only vowels AND all 5 vowels
    pass`,
  },
  visibleTests: [
    { args: ['aeiouu'], expected: 2 },
    { args: ['unicornarihan'], expected: 0 },
    { args: ['cuaieuouac'], expected: 7 },
    { args: ['aeiou'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 0 },
    { args: ['aeiouaeiou'], expected: 21 },
    { args: ['oauei'], expected: 1 },
    { args: ['bcdfghjklm'], expected: 0 },
    { args: ['aeiouaaeiou'], expected: 24 },
    { args: ['aeiouiou'], expected: 4 },
    { args: ['xaeioux'], expected: 1 },
  ],
};
