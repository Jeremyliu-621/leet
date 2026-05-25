import type { Problem } from '../types';

export const problem: Problem = {
  id: 'valid-parentheses',
  title: 'Valid Parentheses',
  difficulty: 'easy',
  tags: ['stack', 'strings'],
  description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
  constraints: [
    '`1 <= s.length <= 10^4`',
    "`s[i]` is one of `'('`, `')'`, `'{'`, `'}'`, `'['` and `']`.",
  ],
  examples: [
    { input: 's = "()"', output: 'true' },
    { input: 's = "()[]{}"', output: 'true' },
    { input: 's = "(]"', output: 'false' },
  ],
  hints: [
    'Use a stack. When you see an opening bracket, push it.',
    'When you see a closing bracket, check if the top of the stack is the matching opening bracket.',
    'If the stack is empty at the end, the string is valid.',
  ],
  functionName: 'isValid',
  params: ['s'],
  starterCode: {
    javascript: 'function isValid(s) {\n  \n}\n',
    python: 'def isValid(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['()'], expected: true },
    { args: ['()[]{}'], expected: true },
    { args: ['(]'], expected: false },
  ],
  hiddenTests: [
    { args: [''], expected: true },
    { args: ['(('], expected: false },
    { args: ['{[]}'], expected: true },
    { args: ['([)]'], expected: false },
    { args: ['}'], expected: false },
  ],
};
