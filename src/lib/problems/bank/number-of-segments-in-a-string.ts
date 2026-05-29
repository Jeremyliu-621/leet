import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-segments-in-a-string',
  title: 'Number of Segments in a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, return the number of segments in the string.

A **segment** is defined to be a contiguous sequence of **non-space characters**.`,
  constraints: [
    '`0 <= s.length <= 300`',
    '`s\` consists of lowercase and uppercase English letters, digits, or one of the following characters: \`"!@#$%^&*()_+-=\',.:"\`.',
    'The only space character in \`s\` is \`\' \'\`.',
  ],
  examples: [
    {
      input: 's = "Hello, my name is John"',
      output: '5',
      explanation: 'The five segments are "Hello,", "my", "name", "is", "John".',
    },
    {
      input: 's = "Hello"',
      output: '1',
      explanation: 'The single segment is "Hello".',
    },
  ],
  hints: [
    'Count transitions from a space (or start) to a non-space character.',
    'Alternatively, `s.trim().split(/\\s+/).filter(x => x.length > 0).length` works for non-empty strings. Edge case: the empty string should return 0.',
    '```js\nfunction countSegments(s) {\n  let count = 0;\n  for (let i = 0; i < s.length; i++) {\n    if (s[i] !== \' \' && (i === 0 || s[i - 1] === \' \')) count++;\n  }\n  return count;\n}\n```',
  ],
  functionName: 'countSegments',
  params: ['s'],
  starterCode: {
    javascript: `function countSegments(s) {

}`,
    typescript: `function countSegments(s: string): number {

}`,
    python: `def countSegments(s):
    pass`,
  },
  visibleTests: [
    { args: ['Hello, my name is John'], expected: 5 },
    { args: ['Hello'], expected: 1 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['   '], expected: 0 },
    { args: [' hello world '], expected: 2 },
    { args: ['a b c d'], expected: 4 },
    { args: ['love live! mu!c music'], expected: 4 },
  ],
};
