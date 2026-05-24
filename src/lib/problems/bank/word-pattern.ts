import type { Problem } from '../types';

export const problem: Problem = {
  id: 'word-pattern',
  title: 'Word Pattern',
  difficulty: 'easy',
  tags: ['strings', 'hash-map'],
  description: `Given a \`pattern\` and a string \`s\`, find if \`s\` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in \`pattern\` and a **non-empty** word in \`s\`.`,
  constraints: [
    '`1 <= pattern.length <= 300`',
    '`pattern` contains only lowercase English letters.',
    '`1 <= s.length <= 3000`',
    '`s` contains only lowercase English letters and spaces.',
    '`s` **does not contain** any leading or trailing spaces.',
    'All the words in `s` are separated by a **single space**.',
  ],
  examples: [
    {
      input: 'pattern = "abba", s = "dog cat cat dog"',
      output: 'true',
    },
    {
      input: 'pattern = "abba", s = "dog cat cat fish"',
      output: 'false',
    },
    {
      input: 'pattern = "aaaa", s = "dog cat cat dog"',
      output: 'false',
    },
  ],
  hints: [
    'Split s into words. Check that lengths match. Maintain a bidirectional map: pattern char → word and word → pattern char. If a mapping conflicts, return false.',
  ],
  functionName: 'wordPattern',
  params: ['pattern', 's'],
  starterCode: {
    javascript: `function wordPattern(pattern, s) {

}`,
    python: `def wordPattern(pattern, s):
    pass`,
  },
  visibleTests: [
    { args: ['abba', 'dog cat cat dog'], expected: true },
    { args: ['abba', 'dog cat cat fish'], expected: false },
    { args: ['aaaa', 'dog cat cat dog'], expected: false },
  ],
  hiddenTests: [
    { args: ['abba', 'dog dog dog dog'], expected: false },
    { args: ['a', 'dog'], expected: true },
    { args: ['ab', 'dog dog'], expected: false },
    { args: ['aab', 'cat cat dog'], expected: true },
    { args: ['abc', 'dog cat fish'], expected: true },
  ],
};
