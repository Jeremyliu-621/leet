import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-if-all-as-appears-before-all-bs',
  title: 'Check if All A\'s Appears Before All B\'s',
  difficulty: 'easy',
  tags: ['strings'],
  description: `Given a string \`s\` consisting **only** of characters \`'a'\` and \`'b'\`, return \`true\` if **every** \`'a'\` appears before **every** \`'b'\` in the string. Otherwise, return \`false\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's[i] is either "a" or "b".',
  ],
  examples: [
    {
      input: 's = "aaabbb"',
      output: 'true',
    },
    {
      input: 's = "abab"',
      output: 'false',
    },
    {
      input: 's = "bbb"',
      output: 'true',
    },
  ],
  hints: [
    'Check if the string contains the substring "ba".',
    'If "ba" appears anywhere in the string, return false. Otherwise return true.',
    'Equivalently: once you see a \'b\', no \'a\' should follow.',
  ],
  functionName: 'checkString',
  params: ['s'],
  starterCode: {
    javascript: 'function checkString(s) {\n  return !s.includes("ba");\n}\n',
    typescript: "function checkString(s: string): boolean {\n  return !s.includes('ba');\n}",

    python: 'def checkString(s: str) -> bool:\n    return "ba" not in s\n',
  },
  visibleTests: [
    { args: ['aaabbb'], expected: true },
    { args: ['abab'], expected: false },
    { args: ['bbb'], expected: true },
  ],
  hiddenTests: [
    { args: ['aaa'], expected: true },
    { args: ['ba'], expected: false },
    { args: ['a'], expected: true },
    { args: ['b'], expected: true },
    { args: ['aaabb'], expected: true },
  ],
};
