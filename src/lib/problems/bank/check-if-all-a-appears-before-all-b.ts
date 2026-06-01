import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-a-appears-before-all-b',
  title: 'Check if All A\'s Appears Before All B\'s',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` consisting of **only** the characters \`'a'\` and \`'b'\`, return \`true\` if **every** \`'a'\` appears before **every** \`'b'\` in the string. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s.length <= 100',
    "s[i] is either 'a' or 'b'.",
  ],
  examples: [
    {
      input: 's = "aaabbb"',
      output: 'true',
      explanation: 'All a\'s appear before all b\'s.',
    },
    {
      input: 's = "abab"',
      output: 'false',
      explanation: 'There is a \'b\' at index 1 followed by an \'a\' at index 2.',
    },
  ],
  hints: [
    'The condition fails if and only if "ba" appears as a substring in s.',
    'Check whether the string contains the two-character sequence "ba" — if it does, return false.',
    'Equivalently: once you see a \'b\', you must never see an \'a\' afterwards.',
  ],
  functionName: 'checkString',
  params: ['s'],
  starterCode: {
    javascript: `function checkString(s) {
  return !s.includes('ba');
}`,
    typescript: `function checkString(s: string): boolean {
  return !s.includes('ba');
}`,
    python: `def checkString(s):
    return 'ba' not in s`,
  },
  visibleTests: [
    { args: ['aaabbb'], expected: true },
    { args: ['abab'], expected: false },
    { args: ['b'], expected: true },
    { args: ['aaa'], expected: true },
    { args: ['baa'], expected: false },
  ],
  hiddenTests: [
    { args: ['ab'], expected: true },
    { args: ['ba'], expected: false },
    { args: ['a'], expected: true },
    { args: ['aab'], expected: true },
    { args: ['bbb'], expected: true },
  ],
};
