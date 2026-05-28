import type { Problem } from '../types';

const JS_PREAMBLE = `
function generateParenthesesRunner(n) {
  return generateParentheses(Number(n)).sort();
}
`.trim();

const PY_PREAMBLE = `
def generateParenthesesRunner(n):
    return sorted(generateParentheses(int(n)))
`.trim();

export const problem: Problem = {
  id: 'generate-parentheses',
  title: 'Generate Parentheses',
  difficulty: 'medium',
  tags: ['strings', 'backtracking'],
  description: `Given \`n\` pairs of parentheses, write a function to generate all combinations of **well-formed** parentheses.

> **Note:** The \`generateParenthesesRunner\` wrapper is pre-defined. Implement \`generateParentheses(n)\`.`,
  constraints: ['1 <= n <= 8'],
  examples: [
    {
      input: 'n = 1',
      output: '["()"]',
    },
    {
      input: 'n = 2',
      output: '["(())", "()()"]',
    },
    {
      input: 'n = 3',
      output: '["((()))", "(()())", "(())()", "()(())", "()()()"]',
    },
  ],
  hints: [
    'Use backtracking with two counters: the number of open and close parentheses used so far.',
    'You can add an open paren `(` if `open < n`. You can add a close paren `)` if `close < open`. Base case: when the current string length equals `2*n`, add it to results.',
    'This DFS naturally generates valid combinations only — no pruning step needed.',
  ],
  functionName: 'generateParenthesesRunner',
  params: ['n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: 'function generateParentheses(n) {\n  \n}\n',
    typescript: "function generateParenthesesRunner(n: number): string[] {\n  \n}",

    python: 'def generateParentheses(n):\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: ['()'] },
    { args: [2], expected: ['(())', '()()'] },
    { args: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
  ],
  hiddenTests: [
    {
      args: [4],
      expected: [
        '(((())))',
        '((()()))',
        '((())())',
        '((()))()',
        '(()(()))',
        '(()()())',
        '(()())()',
        '(())(())',
        '(())()()',
        '()((()))',
        '()(()())',
        '()(())()',
        '()()(())',
        '()()()()',
      ],
    },
    { args: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] },
  ],
};
