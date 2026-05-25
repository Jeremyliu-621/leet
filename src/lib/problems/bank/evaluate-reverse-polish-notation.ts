import type { Problem } from '../types';

export const problem: Problem = {
  id: 'evaluate-reverse-polish-notation',
  title: 'Evaluate Reverse Polish Notation',
  difficulty: 'medium',
  tags: ['stack', 'arrays'],
  description: `You are given an array of strings \`tokens\` that represents an arithmetic expression in **Reverse Polish Notation**.

Evaluate the expression. Return an integer that represents the value of the expression.

**Note** that:
- The valid operators are \`'+'\`, \`'-'\`, \`'*'\`, and \`'/'\`.
- Each operand may be an integer or another expression.
- Division between two integers always **truncates toward zero**.
- There will not be any division by zero.
- The input represents a valid arithmetic expression in RPN.
- The answer and all intermediate calculations fit in a **32-bit** integer.`,
  constraints: [
    '`1 <= tokens.length <= 10^4`',
    '`tokens[i]` is either an operator `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.',
  ],
  examples: [
    {
      input: 'tokens = ["2","1","+","3","*"]',
      output: '9',
      explanation: '((2 + 1) * 3) = 9',
    },
    {
      input: 'tokens = ["4","13","5","/","+"]',
      output: '6',
      explanation: '(4 + (13 / 5)) = 6',
    },
  ],
  hints: [
    'Use a stack. Push numbers onto the stack.',
    'When you encounter an operator, pop two numbers from the stack, apply the operator, and push the result back.',
    'The final value on the stack is the answer.',
  ],
  functionName: 'evalRPN',
  params: ['tokens'],
  starterCode: {
    javascript: 'function evalRPN(tokens) {\n  \n}\n',
    python: 'def evalRPN(tokens):\n    pass\n',
  },
  visibleTests: [
    { args: [['2', '1', '+', '3', '*']], expected: 9 },
    { args: [['4', '13', '5', '/', '+']], expected: 6 },
    { args: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22 },
  ],
  hiddenTests: [
    { args: [['3', '4', '+']], expected: 7 },
    { args: [['2', '3', '-']], expected: -1 },
    { args: [['5', '1', '2', '+', '4', '*', '+', '3', '-']], expected: 14 },
    { args: [['-3', '2', '/']], expected: -1 },
  ],
};
