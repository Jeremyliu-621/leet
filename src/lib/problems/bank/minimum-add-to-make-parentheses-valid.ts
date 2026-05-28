import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-add-to-make-parentheses-valid',
  title: 'Minimum Add to Make Parentheses Valid',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `A parentheses string is valid if and only if:
- It is the empty string,
- It can be written as \`AB\` (A concatenated with B), where A and B are valid strings, or
- It can be written as \`(A)\`, where A is a valid string.

You are given a parentheses string \`s\`. In one move, you can insert a parenthesis at any position. Return the **minimum** number of moves to make the string valid.

**Approach:** Track open (unmatched \`(\`) and close (unmatched \`)\`) counts. Each unmatched \`)\` that can't be paired adds 1; each unmatched \`(\` at the end adds 1.`,
  constraints: [
    '1 <= s.length <= 1000',
    "s[i] is either '(' or ')'.",
  ],
  examples: [
    {
      input: 's = "())"',
      output: '1',
      explanation: 'One "(" must be added.',
    },
    {
      input: 's = "((("',
      output: '3',
      explanation: 'Three ")" must be added.',
    },
    {
      input: 's = "(())(("',
      output: '2',
      explanation: 'Two ")" must be added.',
    },
  ],
  hints: [
    'Track `open` (unmatched `(`) and `close` (unmatched `)`) counts.',
    'For each `(`: increment `open`. For each `)`: if `open > 0`, decrement `open` (matched); otherwise increment `close` (unmatched `)`).',
    'Answer is `open + close`.',
    '```js\nlet open = 0, close = 0;\nfor (const c of s) {\n  if (c === "(") open++;\n  else if (open > 0) open--;\n  else close++;\n}\nreturn open + close;\n```',
  ],
  functionName: 'minAddToMakeValid',
  params: ['s'],
  starterCode: {
    javascript: `function minAddToMakeValid(s) {
  // return minimum insertions to make parentheses valid

}`,
    typescript: "function minAddToMakeValid(s: string): number {\n  // return minimum insertions to make parentheses valid\n\n}",

    python: `def minAddToMakeValid(s: str) -> int:
    # return minimum insertions to make parentheses valid
    pass
`,
  },
  visibleTests: [
    { args: ['())'], expected: 1 },
    { args: ['((('], expected: 3 },
    { args: ['(())(('], expected: 2 },
  ],
  hiddenTests: [
    { args: ['()'], expected: 0 },
    { args: [')'], expected: 1 },
    { args: ['((()))'], expected: 0 },
    { args: [')('], expected: 2 },
    { args: [')))(('], expected: 5 },
    { args: ['()('], expected: 1 },
    { args: ['))))'], expected: 4 },
  ],
};
