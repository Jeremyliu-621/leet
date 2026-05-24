import type { Problem } from '../types';

export const problem: Problem = {
  id: 'determine-if-string-halves-alike',
  title: 'Determine if String Halves Are Alike',
  difficulty: 'easy',
  tags: ['strings'],
  description: `You are given a string \`s\` of **even** length. Split this string into two halves of equal lengths, and let \`a\` be the first half and \`b\` be the second half.

Two strings are **alike** if they have the same number of vowels (\`'a'\`, \`'e'\`, \`'i'\`, \`'o'\`, \`'u'\`, \`'A'\`, \`'E'\`, \`'I'\`, \`'O'\`, \`'U'\`). Notice that \`s\` contains uppercase and lowercase letters.

Return \`true\` if \`a\` and \`b\` are **alike**. Otherwise, return \`false\`.`,
  constraints: [
    '`2 <= s.length <= 1000`',
    '`s.length` is even.',
    '`s` consists of **uppercase and lowercase** letters.',
  ],
  examples: [
    {
      input: 's = "book"',
      output: 'true',
      explanation: '"bo" has 1 vowel "o". "ok" has 1 vowel "o".',
    },
    {
      input: 's = "textbook"',
      output: 'false',
      explanation: '"text" has 1 vowel "e". "book" has 2 vowels "o","o".',
    },
  ],
  hints: [
    'Count vowels in s[0..n/2-1] and s[n/2..n-1]. Return whether the counts are equal.',
  ],
  functionName: 'halvesAreAlike',
  params: ['s'],
  starterCode: {
    javascript: `function halvesAreAlike(s) {

}`,
    python: `def halvesAreAlike(s):
    pass`,
  },
  visibleTests: [
    { args: ['book'], expected: true },
    { args: ['textbook'], expected: false },
  ],
  hiddenTests: [
    { args: ['aa'], expected: true },
    { args: ['ab'], expected: false },
    { args: ['AbCdEfGh'], expected: true },
    { args: ['aeiouAEIOU'], expected: true },
    { args: ['bcdf'], expected: true },
    { args: ['AaBb'], expected: false },
  ],
};
