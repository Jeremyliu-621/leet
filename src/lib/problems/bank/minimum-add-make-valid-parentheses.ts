import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-add-make-valid-parentheses',
  title: 'Minimum Add to Make Parentheses Valid',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `A parentheses string is valid if and only if:
- It is the empty string, or
- It can be written as \`AB\` (\`A\` concatenated with \`B\`), where \`A\` and \`B\` are valid strings, or
- It can be written as \`(A)\`, where \`A\` is a valid string.

You are given a parentheses string \`s\`. In one move, you can insert a parenthesis at any position of the string.

Return the **minimum number of moves** required to make \`s\` valid.`,
  constraints: [
    '`1 <= s.length <= 1000`',
    '`s[i]` is either `\'(\'` or `\')\'`.',
  ],
  examples: [
    {
      input: 's = "())"',
      output: '1',
      explanation: 'Need to add one `(` to make `(())` valid.',
    },
    {
      input: 's = "((("',
      output: '3',
      explanation: 'Need to add three `)` to make `((()))` valid.',
    },
  ],
  hints: [
    'Track unmatched open brackets and unmatched close brackets separately.',
  ],
  functionName: 'minAddToMakeValid',
  params: ['s'],
  starterCode: {
    javascript: 'function minAddToMakeValid(s) {\n  \n}\n',
    python: 'def minAddToMakeValid(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['())'], expected: 1 },
    { args: ['((('], expected: 3 },
    { args: [''], expected: 0 },
  ],
  hiddenTests: [
    { args: ['()'], expected: 0 },
    { args: [')'], expected: 1 },
    { args: ['('], expected: 1 },
    { args: ['())(((('], expected: 5 },
  ],
};
