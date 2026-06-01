import type { Problem } from '../types';

export const problem: Problem = {
  id: 'evaluate-rpn',
  title: 'Evaluate Reverse Polish Notation',
  difficulty: 'easy',
  tags: ['stack'],
  description: `Evaluate an arithmetic expression given in **Reverse Polish Notation** (RPN). The expression is provided as an array of strings \`tokens\`.

Valid operators are \`"+"\`, \`"-"\`, \`"*"\`, and \`"/"\`. Each operand is an integer string (possibly negative). Division truncates toward zero.

In RPN, operands appear before their operator: \`["2","3","+"]\` means \`2 + 3 = 5\`.`,
  constraints: [
    '1 <= tokens.length <= 100',
    'Each token is either an integer string or one of "+", "-", "*", "/".',
    'The expression is always a valid RPN expression.',
    'Division is integer division truncated toward zero.',
    'No division by zero.',
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
      explanation: '(4 + (13 / 5)) = (4 + 2) = 6  (integer division)',
    },
    {
      input: 'tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]',
      output: '22',
      explanation: 'Complex nested expression evaluates to 22.',
    },
  ],
  hints: [
    'Use a stack of numbers. When you see an operand, push it. When you see an operator, pop two operands (the second-popped is the left operand), apply the operation, and push the result.',
    'Pop `b` then `a`. Compute `a op b`. For division, `Math.trunc(a / b)` truncates toward zero (handles negative results correctly).',
    '`const stack = []; for (const t of tokens) { if ("+-*/".includes(t)) { const b = stack.pop(), a = stack.pop(); if (t==="+") stack.push(a+b); else if (t==="-") stack.push(a-b); else if (t==="*") stack.push(a*b); else stack.push(Math.trunc(a/b)); } else stack.push(Number(t)); } return stack[0];`',
  ],
  functionName: 'evalRPN',
  params: ['tokens'],
  starterCode: {
    javascript: `function evalRPN(tokens) {
  const stack = [];
  for (const t of tokens) {
    if ('+-*/'.includes(t)) {
      const b = stack.pop(), a = stack.pop();
      if (t === '+') stack.push(a + b);
      else if (t === '-') stack.push(a - b);
      else if (t === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(Number(t));
  }
  return stack[0];
}`,
    typescript: `function evalRPN(tokens: string[]): number {
  const stack: number[] = [];
  for (const t of tokens) {
    if ('+-*/'.includes(t)) {
      const b = stack.pop()!, a = stack.pop()!;
      if (t === '+') stack.push(a + b);
      else if (t === '-') stack.push(a - b);
      else if (t === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(Number(t));
  }
  return stack[0]!;
}`,
    python: `def evalRPN(tokens):
    tokens = list(tokens.to_py()) if hasattr(tokens, 'to_py') else list(tokens)
    stack = []
    for t in tokens:
        if t in '+-*/':
            b, a = stack.pop(), stack.pop()
            if t == '+': stack.append(a + b)
            elif t == '-': stack.append(a - b)
            elif t == '*': stack.append(a * b)
            else: stack.append(int(a / b))
        else:
            stack.append(int(t))
    return stack[0]`,
  },
  visibleTests: [
    { args: [['2', '1', '+', '3', '*']], expected: 9 },
    { args: [['4', '13', '5', '/', '+']], expected: 6 },
    { args: [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']], expected: 22 },
  ],
  hiddenTests: [
    { args: [['3']], expected: 3 },
    { args: [['2', '3', '-']], expected: -1 },
    { args: [['5', '3', '*']], expected: 15 },
    { args: [['7', '2', '/']], expected: 3 },
    { args: [['-2', '3', '+']], expected: 1 },
    { args: [['3', '-3', '+']], expected: 0 },
  ],
};
