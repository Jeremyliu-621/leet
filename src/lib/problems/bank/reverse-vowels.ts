import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-vowels',
  title: 'Reverse Vowels of a String',
  difficulty: 'easy',
  tags: ['two-pointers'],
  description: `Given a string \`s\`, reverse only all the vowels in the string and return it.

The vowels are \`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, and \`'u'\`, and they can appear in both **lower** and **upper** cases.`,
  constraints: [
    '1 <= s.length <= 3 * 10^5',
    's consist of printable ASCII characters',
  ],
  examples: [
    {
      input: 's = "hello"',
      output: '"holle"',
    },
    {
      input: 's = "leetcode"',
      output: '"leotcede"',
    },
  ],
  hints: [
    'Use two pointers from both ends. Skip non-vowels and swap vowels.',
    'Move left pointer right and right pointer left until both point to vowels, then swap.',
    'Treat uppercase and lowercase vowels the same when checking.',
  ],
  functionName: 'reverseVowels',
  params: ['s'],
  starterCode: {
    javascript: `function reverseVowels(s) {
  // Return string with vowels reversed
}`,
    typescript: "function reverseVowels(s: string): string {\n  // Return string with vowels reversed\n}",

    python: `def reverseVowels(s):
    # Return string with vowels reversed
    pass`,
  },
  visibleTests: [
    { args: ['hello'], expected: 'holle' },
    { args: ['leetcode'], expected: 'leotcede' },
    { args: ['aA'], expected: 'Aa' },
  ],
  hiddenTests: [
    { args: ['bcdf'], expected: 'bcdf' },
    { args: ['aeiou'], expected: 'uoiea' },
    { args: ['race a car'], expected: 'raca e car' },
    { args: ['a'], expected: 'a' },
  ],
};
