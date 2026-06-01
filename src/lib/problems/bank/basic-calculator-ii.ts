import type { Problem } from '../types';

export const problem: Problem = {
  id: 'basic-calculator-ii',
  title: 'Basic Calculator II',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `Given a string \`s\` which represents an expression, evaluate this expression and return its value.

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of \`[-2^31, 2^31 - 1]\`.

**Note:** You are not allowed to use any built-in function which evaluates strings as mathematical expressions.`,
  constraints: [
    '1 <= s.length <= 3 * 10^5',
    's consists of integers and operators ("+", "-", "*", "/") separated by some number of spaces',
    's represents a valid expression',
    'All the integers in the expression are non-negative integers in the range [0, 2^31 - 1]',
    'The answer is guaranteed to fit in a 32-bit integer',
  ],
  examples: [
    { input: 's = "3+2*2"', output: '7' },
    { input: 's = " 3/2 "', output: '1' },
    { input: 's = " 3+5 / 2 "', output: '5' },
  ],
  hints: [
    'Use a stack. Scan left-to-right. When you see a number, peek at the previous operator.',
    'For + and -, push the (possibly negated) number onto the stack. For * and /, pop the top, apply the operator, and push the result.',
    'At the end, sum everything in the stack.',
  ],
  functionName: 'calculateII',
  params: ['s'],
  starterCode: {
    javascript: `function calculateII(s) {
  const stack = [];
  let num = 0, op = '+';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c >= '0' && c <= '9') num = num * 10 + Number(c);
    if ((c === '+' || c === '-' || c === '*' || c === '/') || i === s.length - 1) {
      if (op === '+') stack.push(num);
      else if (op === '-') stack.push(-num);
      else if (op === '*') stack.push(stack.pop() * num);
      else stack.push(Math.trunc(stack.pop() / num));
      op = c; num = 0;
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}`,
    typescript: `function calculateII(s: string): number {
  const stack: number[] = [];
  let num = 0, op = '+';
  for (let i = 0; i < s.length; i++) {
    const c = s[i]!;
    if (c >= '0' && c <= '9') num = num * 10 + Number(c);
    if ((c === '+' || c === '-' || c === '*' || c === '/') || i === s.length - 1) {
      if (op === '+') stack.push(num);
      else if (op === '-') stack.push(-num);
      else if (op === '*') stack.push(stack.pop()! * num);
      else stack.push(Math.trunc(stack.pop()! / num));
      op = c; num = 0;
    }
  }
  return stack.reduce((a, b) => a + b, 0);
}`,
    python: `def calculateII(s):
    stack, num, op = [], 0, '+'
    for i, c in enumerate(s):
        if c.isdigit():
            num = num * 10 + int(c)
        if c in '+-*/' or i == len(s) - 1:
            if op == '+': stack.append(num)
            elif op == '-': stack.append(-num)
            elif op == '*': stack.append(stack.pop() * num)
            else: stack.append(int(stack.pop() / num))
            op, num = c, 0
    return sum(stack)`,
  },
  visibleTests: [
    { args: ['3+2*2'], expected: 7 },
    { args: [' 3/2 '], expected: 1 },
    { args: [' 3+5 / 2 '], expected: 5 },
  ],
  hiddenTests: [
    { args: ['14-3/2'], expected: 13 },
    { args: ['1*2-3/4+5*6-7*8+9/10'], expected: -24 },
    { args: ['42'], expected: 42 },
    { args: ['100*2+12'], expected: 212 },
  ],
};
