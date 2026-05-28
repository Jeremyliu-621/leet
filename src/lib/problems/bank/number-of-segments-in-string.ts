import type { Problem } from '../types';

export const problem: Problem = {
  id: 'number-of-segments-in-string',
  title: 'Number of Segments in a String',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, return the number of segments in the string.

A **segment** is defined as a contiguous sequence of **non-space characters**.`,
  constraints: [
    '`0 <= s.length <= 300`',
    '`s` consists of lowercase and uppercase English letters, digits, or special characters.',
    'The only space character in `s` is `\' \'`.',
  ],
  examples: [
    { input: 's = "Hello, my name is John"', output: '5' },
    { input: 's = "Hello"', output: '1' },
    { input: 's = ""', output: '0' },
  ],
  hints: [
    'Split by spaces and count non-empty strings.',
    'Or count positions where s[i] != " " and (i == 0 or s[i-1] == " ").',
    `\`\`\`js
function countSegments(s) {
  return s.trim().split(/\\s+/).filter(Boolean).length;
}
// Edge case: if s is all spaces, return 0\`\`\``,
  ],
  functionName: 'countSegments',
  params: ['s'],
  starterCode: {
    javascript: 'function countSegments(s) {\n  \n}\n',
    typescript: "function countSegments(s: string): number {\n  \n}",

    python: 'def countSegments(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['Hello, my name is John'], expected: 5 },
    { args: ['Hello'], expected: 1 },
    { args: [''], expected: 0 },
  ],
  hiddenTests: [
    { args: ['   '], expected: 0 },
    { args: ['  foo bar  '], expected: 2 },
    { args: ['a'], expected: 1 },
    { args: ['love live! mu\'sic forever'], expected: 4 },
  ],
};
