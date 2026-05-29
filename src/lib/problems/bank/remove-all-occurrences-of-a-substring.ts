import type { Problem } from '../types';

export const problem: Problem = {
  id: 'remove-all-occurrences-of-a-substring',
  title: 'Remove All Occurrences of a Substring',
  difficulty: 'medium',
  tags: ['strings'],
  description: `Given two strings \`s\` and \`part\`, perform the following operation on \`s\` until **all** occurrences of the substring \`part\` are removed:

- Find the **leftmost** occurrence of the substring \`part\` and **remove** it from \`s\`.

Return \`s\` after removing all occurrences of \`part\`.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`1 <= part.length <= 1000`',
    '`s\` and \`part\` consist of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "daabcbaabcbc", part = "abc"',
      output: '"dab"',
      explanation: 'Remove "abc" at index 2 → "dabaabcbc". Remove "abc" at index 4 → "dababc". Remove "abc" at index 3 → "dab".',
    },
    {
      input: 's = "axxxxyyyyb", part = "xy"',
      output: '"ab"',
      explanation: 'Repeatedly removing "xy" from the left eventually leaves "ab".',
    },
  ],
  hints: [
    'Use `String.prototype.includes` and `String.prototype.replace` in a loop.',
    '`String.prototype.replace(part, \'\')` removes only the first occurrence, which is exactly what you need.',
    '```js\nfunction removeOccurrences(s, part) {\n  while (s.includes(part)) s = s.replace(part, \'\');\n  return s;\n}\n```',
  ],
  functionName: 'removeOccurrences',
  params: ['s', 'part'],
  starterCode: {
    javascript: `function removeOccurrences(s, part) {

}`,
    typescript: `function removeOccurrences(s: string, part: string): string {

}`,
    python: `def removeOccurrences(s, part):
    pass`,
  },
  visibleTests: [
    { args: ['daabcbaabcbc', 'abc'], expected: 'dab' },
    { args: ['axxxxyyyyb', 'xy'], expected: 'ab' },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: '' },
    { args: ['abc', 'abc'], expected: '' },
    { args: ['abab', 'ab'], expected: '' },
    { args: ['hello', 'xyz'], expected: 'hello' },
    { args: ['aaaaa', 'aa'], expected: 'a' },
    { args: ['ppppppp', 'pp'], expected: 'p' },
  ],
};
