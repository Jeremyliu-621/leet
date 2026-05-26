import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-nesting-depth-of-parentheses',
  title: 'Maximum Nesting Depth of the Parentheses',
  difficulty: 'easy',
  tags: ['strings', 'math'],
  description: `A string is a **valid parentheses string** (VPS) if it meets one of the following conditions:

- It is an empty string \`""\`.
- It can be written as \`AB\` (\`A\` concatenated with \`B\`), where \`A\` and \`B\` are VPS's.
- It can be written as \`(A)\`, where \`A\` is a VPS.

We can similarly define the **nesting depth** of a VPS \`s\`. The nesting depth of \`""\` is 0, the nesting depth of \`"(" + A + ")"\` is 1 + depth(A), and the nesting depth of \`AB\` is max(depth(A), depth(B)).

Given a VPS represented as string \`s\`, return the **nesting depth** of \`s\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's consists of digits 0-9 and characters \'+\', \'-\', \'*\', \'/\', \'(\', \')\'.',
    'It is guaranteed that parentheses expression s is a VPS.',
  ],
  examples: [
    {
      input: 's = "(1+(2*3)+((8)/4))+1"',
      output: '3',
      explanation: 'The deepest nesting is "((8)/4)" with depth 3.',
    },
    {
      input: 's = "(1)+((2))+(((3)))"',
      output: '3',
      explanation: '"(((3)))" has depth 3.',
    },
  ],
  hints: [
    "Track current depth with a counter. Increment on '(', decrement on ')'. Track the maximum.",
    "Use a single pass: maintain depth and max. On '(' increment depth and update max; on ')' decrement depth.",
    "let d=0,m=0;for(const c of s){if(c==='(')m=Math.max(m,++d);else if(c===')')d--;}return m;",
  ],
  functionName: 'maxDepth',
  params: ['s'],
  starterCode: {
    javascript: `function maxDepth(s) {

}`,
    python: `def maxDepth(s):
    pass`,
  },
  visibleTests: [
    { args: ['(1+(2*3)+((8)/4))+1'], expected: 3 },
    { args: ['(1)+((2))+(((3)))'], expected: 3 },
  ],
  hiddenTests: [
    { args: ['1+(2*3)/(2-1)'], expected: 1 },
    { args: ['()'], expected: 1 },
    { args: ['(())'], expected: 2 },
    { args: ['1+1'], expected: 0 },
  ],
};
