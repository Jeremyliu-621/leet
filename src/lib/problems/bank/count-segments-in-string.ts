import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-segments-in-string',
  title: 'Number of Segments in a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, return the number of **segments** in the string.

A **segment** is defined as a contiguous sequence of **non-space characters**.

Note that a string with only spaces has zero segments.`,
  constraints: [
    '`0 <= s.length <= 300`',
    '`s` consists of lowercase/uppercase English letters, digits, or one of `!@#$%^&*()_+-=\\\',.:"` and spaces.',
  ],
  examples: [
    {
      input: 's = "Hello, my name is John"',
      output: '5',
      explanation: 'The five segments are "Hello,", "my", "name", "is", and "John".',
    },
    {
      input: 's = " "',
      output: '0',
      explanation: 'The string contains only a space — no non-space segments exist.',
    },
  ],
  hints: [
    'Split the string on spaces and count non-empty pieces. In JavaScript: `s.split(\' \').filter(x => x.length > 0).length`.',
    'Alternatively, iterate through the string character by character. A new segment begins whenever you encounter a non-space character that is either at position 0 or preceded by a space.',
    'Edge cases: empty string and all-spaces string should both return 0.',
  ],
  functionName: 'countSegments',
  params: ['s'],
  starterCode: {
    javascript: `function countSegments(s) {

}`,
    python: `def countSegments(s: str) -> int:
    pass`,
  },
  visibleTests: [
    { args: ['Hello, my name is John'], expected: 5 },
    { args: [' '], expected: 0 },
    { args: [''], expected: 0 },
  ],
  hiddenTests: [
    { args: ['    '], expected: 0 },
    { args: ['of course'], expected: 2 },
    { args: ['  foo bar  '], expected: 2 },
    { args: ['Hello'], expected: 1 },
    { args: ['love live! mu!c'], expected: 3 },
  ],
};
