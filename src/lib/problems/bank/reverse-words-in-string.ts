import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-words-in-string',
  title: 'Reverse Words in a String',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers'],
  description: `Given an input string \`s\`, reverse the order of the **words**.

A **word** is defined as a sequence of non-space characters. The words in \`s\` will be separated by at least one space.

Return a string of the words in reverse order concatenated by a **single space**.

**Note:** \`s\` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words, with **no** extra spaces.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's contains English letters (upper-case and lower-case), digits, and spaces.',
    'There is at least one word in s.',
  ],
  examples: [
    {
      input: 's = "the sky is blue"',
      output: '"blue is sky the"',
    },
    {
      input: 's = "  hello world  "',
      output: '"world hello"',
      explanation: 'Leading and trailing spaces are removed; there is only one space between words.',
    },
    {
      input: 's = "a good   example"',
      output: '"example good a"',
      explanation: 'Multiple spaces between words are reduced to a single space.',
    },
  ],
  hints: [
    'Split the string on whitespace, filter out empty strings, then reverse and join with a single space.',
    'In JS: `s.trim().split(/\\s+/).reverse().join(" ")`. In Python: `" ".join(reversed(s.split()))`.',
  ],
  functionName: 'reverseWords',
  params: ['s'],
  starterCode: {
    javascript: 'function reverseWords(s) {\n  \n}\n',
    python: 'def reverseWords(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['the sky is blue'], expected: 'blue is sky the' },
    { args: ['  hello world  '], expected: 'world hello' },
    { args: ['a good   example'], expected: 'example good a' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['  Bob    Loves  Alice   '], expected: 'Alice Loves Bob' },
    { args: ['Alice does not even like bob'], expected: 'bob like even not does Alice' },
    { args: ['   spaces   everywhere   '], expected: 'everywhere spaces' },
  ],
};
