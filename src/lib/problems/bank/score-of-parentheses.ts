import type { Problem } from '../types';

export const problem: Problem = {
  id: 'score-of-parentheses',
  title: 'Score of Parentheses',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `Given a balanced parentheses string \`s\`, compute its **score** using these rules:

- \`"()"\` has score **1**.
- \`"AB"\` has score **A + B**, where A and B are balanced strings placed side by side.
- \`"(A)"\` has score **2 × A**, where A is a balanced string.

Return the score of \`s\`.`,
  constraints: [
    '2 <= s.length <= 50',
    's consists of \'(\' and \')\' only.',
    's is a balanced parentheses string.',
  ],
  examples: [
    {
      input: 's = "()"',
      output: '1',
      explanation: 'The base case: "()" scores 1.',
    },
    {
      input: 's = "(())"',
      output: '2',
      explanation: '"()" wrapped in one layer of parentheses scores 2×1 = 2.',
    },
    {
      input: 's = "(()(()))"',
      output: '6',
      explanation: '"()" scores 1; "(())" scores 2; together they score 3 inside outer parens: 2×3 = 6.',
    },
  ],
  hints: [
    'Think of the parentheses as a tree structure. Each pair of outer parens doubles the score of its contents. How can a stack represent nesting depth?',
    'Push a 0 onto the stack as a "frame" for each \'(\'. On \')\', pop the frame value `v` and add `max(2*v, 1)` to the new top of the stack (the 1 handles the base case "()").',
    '```js\nconst stack = [0];\nfor (const c of s) {\n  if (c === \'(\') {\n    stack.push(0);\n  } else {\n    const v = stack.pop();\n    stack[stack.length - 1] += Math.max(2 * v, 1);\n  }\n}\nreturn stack[0];\n```',
  ],
  functionName: 'scoreOfParentheses',
  params: ['s'],
  starterCode: {
    javascript: 'function scoreOfParentheses(s) {\n  // your code here\n}\n',
    python: 'def scoreOfParentheses(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['()'], expected: 1 },
    { args: ['(())'], expected: 2 },
    { args: ['(()(()))'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['()()'], expected: 2 },
    { args: ['()(())'], expected: 3 },
    { args: ['((()))'], expected: 4 },
    { args: ['((()()))'], expected: 8 },
    { args: ['(())(())'], expected: 4 },
    { args: ['()()()'], expected: 3 },
    { args: ['(((())))'], expected: 8 },
  ],
};
