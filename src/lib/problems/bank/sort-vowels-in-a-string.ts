import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-vowels-in-a-string',
  title: 'Sort Vowels in a String',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given a 0-indexed string \`s\`, permute \`s\` to get a new string \`t\` such that:

- All consonants remain in their **original positions**.
- All vowels are **sorted in non-decreasing order** of their ASCII values.

Return the resulting string \`t\`.

Vowels are: \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`, \`'A'\`, \`'E'\`, \`'I'\`, \`'O'\`, \`'U'\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists only of letters of the English alphabet',
  ],
  examples: [
    {
      input: 's = "lEetcOde"',
      output: '"lEOtcede"',
      explanation: 'Vowels in s are: E, O, e (at indices 1, 5, 2 reading left-to-right: E at 1, e at 2, O at 5). Sorted by ASCII: E (69), O (79), e (101). Place them back at vowel positions 1, 2, 5 → "lEOtcede".',
    },
    {
      input: 's = "lYmpH"',
      output: '"lYmpH"',
      explanation: 'There are no vowels in s, so t = s.',
    },
  ],
  hints: [
    'Extract all vowels from their positions, preserving the order they appear.',
    'Sort the vowels by ASCII value (uppercase letters have smaller ASCII values than lowercase).',
    'Place the sorted vowels back into the vowel positions in order.',
  ],
  functionName: 'sortVowels',
  params: ['s'],
  starterCode: {
    javascript: `function sortVowels(s) {

}`,
    typescript: "function sortVowels(s: string): string {\n\n}",

    python: `def sortVowels(s: str) -> str:
    pass`,
  },
  visibleTests: [
    { args: ['lEetcOde'], expected: 'lEOtcede' },
    { args: ['lYmpH'], expected: 'lYmpH' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['aeiou'], expected: 'aeiou' },
    { args: ['AEIOU'], expected: 'AEIOU' },
    { args: ['AeIoU'], expected: 'AIUeo' },
    { args: ['bcdfg'], expected: 'bcdfg' },
    { args: ['zAzEzIzOzUz'], expected: 'zAzEzIzOzUz' },
  ],
};
