import type { Problem } from '../types';

export const problem: Problem = {
  id: 'to-lower-case',
  title: 'To Lower Case',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\`, return the string after replacing every uppercase letter with the same lowercase letter.`,
  constraints: [
    '`1 <= s.length <= 100`',
    '`s` consists of printable ASCII characters.',
  ],
  examples: [
    {
      input: 's = "Hello"',
      output: '"hello"',
    },
    {
      input: 's = "here"',
      output: '"here"',
    },
    {
      input: 's = "LOVELY"',
      output: '"lovely"',
    },
  ],
  hints: [
    'Use the built-in toLowerCase method, or iterate character by character converting uppercase ASCII values (65-90) to their lowercase equivalents (add 32).',
  ],
  functionName: 'toLowerCase',
  params: ['s'],
  starterCode: {
    javascript: `function toLowerCase(s) {

}`,
    python: `def toLowerCase(s):
    pass`,
  },
  visibleTests: [
    { args: ['Hello'], expected: 'hello' },
    { args: ['here'], expected: 'here' },
    { args: ['LOVELY'], expected: 'lovely' },
  ],
  hiddenTests: [
    { args: ['a'], expected: 'a' },
    { args: ['A'], expected: 'a' },
    { args: ['AlPhAbEt'], expected: 'alphabet' },
    { args: ['123ABC'], expected: '123abc' },
    { args: ['Mixed Case String'], expected: 'mixed case string' },
  ],
};
