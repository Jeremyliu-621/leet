import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-word-is-valid-after-substitutions',
  title: 'Check If Word Is Valid After Substitutions',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `Given a string \`s\`, determine if it is **valid**.

A string is valid if, starting with an empty string \`t = ""\`, you can **transform** \`t\` into \`s\` after performing the following operation **any number of times**:

- Insert string \`"abc"\` into any position in \`t\`.

Return \`true\` if \`s\` is a valid string, or \`false\` otherwise.`,
  constraints: [
    '`1 <= s.length <= 2 * 10^4`',
    '`s` consists of letters `\'a\'`, `\'b\'`, and `\'c\'`.',
  ],
  examples: [
    {
      input: 's = "aabcbc"',
      output: 'true',
      explanation: '"" → "abc" → "aabcbc" (insert "abc" before the 3rd char).',
    },
    {
      input: 's = "abcabcababcc"',
      output: 'true',
      explanation: 'Build by nested insertions.',
    },
  ],
  hints: [
    'Simulate using a stack. Push each character.',
    'Whenever the top three characters of the stack are \'a\', \'b\', \'c\' (in order), pop all three.',
    'At the end, the string is valid if and only if the stack is empty.',
  ],
  functionName: 'isValid',
  params: ['s'],
  starterCode: {
    javascript: `function isValid(s) {

}`,
    typescript: `function isValid(s: string): boolean {

}`,
    python: `def isValid(s):
    pass`,
  },
  visibleTests: [
    { args: ['aabcbc'], expected: true },
    { args: ['abcabcababcc'], expected: true },
  ],
  hiddenTests: [
    { args: ['abccba'], expected: false },
    { args: ['cba'], expected: false },
    { args: ['abc'], expected: true },
    { args: ['a'], expected: false },
    { args: ['aabc'], expected: false },
  ],
};
