import type { Problem } from '../types';

export const problem: Problem = {
  id: 'reverse-only-letters',
  title: 'Reverse Only Letters',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, reverse the string according to the following rules:

- All the characters that are not English letters remain in the **same position**.
- All the English letters (lowercase or uppercase) should be **reversed**.

Return \`s\` after reversing it.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`s` consists of characters with ASCII values in the range `[33, 122]`.',
    '`s` does not contain `\'` or `"`.',
  ],
  examples: [
    {
      input: 's = "ab-cd"',
      output: '"dc-ba"',
    },
    {
      input: 's = "a-bC-dEf-ghIj"',
      output: '"j-Ih-gfE-dCba"',
    },
    {
      input: 's = "Test1ng-Leet=code-Q!"',
      output: '"Qedo1ct-eeLg=ntse-T!"',
    },
  ],
  hints: [
    'Use two pointers — one starting from the left and one from the right. Skip non-letter characters. Swap the letter pair and advance both pointers.',
  ],
  functionName: 'reverseOnlyLetters',
  params: ['s'],
  starterCode: {
    javascript: `function reverseOnlyLetters(s) {

}`,
    python: `def reverseOnlyLetters(s):
    pass`,
  },
  visibleTests: [
    { args: ['ab-cd'], expected: 'dc-ba' },
    { args: ['a-bC-dEf-ghIj'], expected: 'j-Ih-gfE-dCba' },
    { args: ['Test1ng-Leet=code-Q!'], expected: 'Qedo1ct-eeLg=ntse-T!' },
  ],
  hiddenTests: [
    { args: ['7_28B'], expected: '7_28B' },
    { args: ['z'], expected: 'z' },
    { args: ['Hello, World!'], expected: 'dlroW, olleH!' },
    { args: ['a1b2c3d4'], expected: 'd1c2b3a4' },
  ],
};
