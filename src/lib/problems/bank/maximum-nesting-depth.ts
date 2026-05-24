import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-nesting-depth',
  title: 'Maximum Nesting Depth of the Parentheses',
  difficulty: 'easy',
  tags: ['stack'],
  description: `A string is a **valid parentheses string** (VPS) if it meets one of the following:
- It is an empty string, or a single character not equal to \`"("\` or \`")"\`.
- It can be written as \`AB\` (\`A\` concatenated with \`B\`), where \`A\` and \`B\` are VPS's.
- It can be written as \`(A)\`, where \`A\` is a VPS.

Given a VPS \`s\`, return the **nesting depth** of \`s\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of digits 0-9 and characters \'+\', \'-\', \'*\', \'/\', \'(\', and \')\'',
    'It is guaranteed that parentheses expression s is a VPS',
  ],
  examples: [
    { input: 's = "(1+(2*3)+((8)/4))+1"', output: '3', explanation: 'The max depth is 3 from "((8))".' },
    { input: 's = "(1)+((2))+(((3)))"', output: '3' },
  ],
  hints: [
    'Track the current depth by incrementing on \'(\' and decrementing on \')\'. Track the max depth seen.',
  ],
  functionName: 'maxDepth',
  params: ['s'],
  starterCode: {
    javascript: 'function maxDepth(s) {\n  \n}\n',
    python: 'def maxDepth(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['(1+(2*3)+((8)/4))+1'], expected: 3 },
    { args: ['(1)+((2))+(((3)))'], expected: 3 },
    { args: ['1+(2*3)/(2-1)'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 0 },
    { args: ['()'], expected: 1 },
    { args: ['(())'], expected: 2 },
    { args: ['((()))'], expected: 3 },
    { args: ['(())(())'], expected: 2 },
  ],
};
