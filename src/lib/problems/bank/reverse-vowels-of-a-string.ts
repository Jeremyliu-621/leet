import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-vowels-of-a-string',
  title: 'Reverse Vowels of a String',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `Given a string \`s\`, reverse only all the vowels in the string and return it.

The vowels are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`, and they can appear in both lower and upper cases, more than once.`,
  constraints: [
    '1 <= s.length <= 3 * 10^5',
    's consist of printable ASCII characters',
  ],
  examples: [
    {
      input: 's = "IceCreAm"',
      output: '"AceCreIm"',
      explanation: 'Vowels in s are [\'I\', \'e\', \'e\', \'A\']. On reversing these vowels and writing in the same positions → \'A\', \'e\', \'e\', \'I\'. "AceCreIm".',
    },
    {
      input: 's = "leetcode"',
      output: '"leotcede"',
      explanation: 'Vowels are [\'e\', \'e\', \'o\', \'e\']. Reversed: [\'e\', \'o\', \'e\', \'e\']. Result: "leotcede".',
    },
    {
      input: 's = "hello"',
      output: '"holle"',
    },
  ],
  hints: [
    'Use two pointers, one from the left and one from the right.',
    'Move each pointer until it hits a vowel, then swap and advance both.',
    'Keep track of vowels: aeiouAEIOU.',
  ],
  functionName: 'reverseVowels',
  params: ['s'],
  starterCode: {
    javascript: `function reverseVowels(s) {\n\n}`,
    python: `def reverseVowels(s: str) -> str:\n    pass`,
    typescript: `function reverseVowels(s: string): string {\n\n}`,
  },
  visibleTests: [
    { args: ['IceCreAm'], expected: 'AceCreIm' },
    { args: ['leetcode'], expected: 'leotcede' },
    { args: ['hello'], expected: 'holle' },
  ],
  hiddenTests: [
    { args: ['aeiou'], expected: 'uoiea' },
    { args: ['a'], expected: 'a' },
    { args: ['bcdfg'], expected: 'bcdfg' },
    { args: ['AEIOU'], expected: 'UOIEA' },
    { args: ['race a car'], expected: 'raca e car' },
    { args: ['aA'], expected: 'Aa' },
  ],
};
