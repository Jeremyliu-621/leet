import type { Problem } from '../types';

export const problem: Problem = {
  id: 'basic-calculator',
  title: 'Basic Calculator',
  difficulty: 'hard',
  tags: ['stack'],
  description: `Implement a basic calculator to evaluate a simple expression string \`s\`.

The expression may contain non-negative integers, \`'+'\`, \`'-'\`, \`'('\`, \`')'\`, and spaces. There is **no multiplication or division**.

Return the result as an integer.

**Algorithm hint:** Use a stack to save the running result and sign each time you enter a new pair of parentheses, then restore them when you close the parentheses.`,
  constraints: [
    '1 <= s.length <= 3 × 10^5',
    's consists of digits, \'+\', \'-\', \'(\', \')\', and spaces',
    's represents a valid expression',
    'Every number in s fits in a 32-bit signed integer',
  ],
  examples: [
    {
      input: 's = "1 + 1"',
      output: '2',
      explanation: 'Simple addition: 1 + 1 = 2.',
    },
    {
      input: 's = " 2-1 + 2 "',
      output: '3',
      explanation: 'Leading/trailing spaces are ignored: 2 - 1 + 2 = 3.',
    },
    {
      input: 's = "(1+(4+5+2)-3)+(6+8)"',
      output: '23',
      explanation: '(1 + 11 - 3) + 14 = 9 + 14 = 23.',
    },
  ],
  hints: [
    'Process the string character by character. Keep a running `result` and a `sign` variable (+1 or −1). When you see a digit, accumulate the full number. When you see + or −, apply the pending number to `result` and update `sign`.',
    'When you see `(`, push the current `result` and `sign` onto a stack, then reset them to start fresh for the sub-expression. When you see `)`, finish the current sub-expression, then pop the saved `sign` and `result` off the stack and combine.',
    '`let result = 0, num = 0, sign = 1; const stack = []; for (const ch of s) { if (ch >= "0" && ch <= "9") { num = num * 10 + Number(ch); } else if (ch === "+") { result += sign * num; num = 0; sign = 1; } else if (ch === "-") { result += sign * num; num = 0; sign = -1; } else if (ch === "(") { stack.push(result, sign); result = 0; sign = 1; } else if (ch === ")") { result += sign * num; num = 0; const s2 = stack.pop(), r2 = stack.pop(); result = r2 + s2 * result; } } return result + sign * num;`',
  ],
  functionName: 'calculate',
  params: ['s'],
  starterCode: {
    javascript: 'function calculate(s) {\n  // your code here\n}\n',
    typescript: "function calculate(s: string): number {\n  // your code here\n}",

    python: 'def calculate(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['1 + 1'], expected: 2 },
    { args: [' 2-1 + 2 '], expected: 3 },
    { args: ['(1+(4+5+2)-3)+(6+8)'], expected: 23 },
  ],
  hiddenTests: [
    { args: ['100'], expected: 100 },
    { args: ['(2+3)'], expected: 5 },
    { args: ['2-(5-6)'], expected: 3 },
    { args: ['10 + (20 - 5)'], expected: 25 },
    { args: ['(10-(5+3))'], expected: 2 },
  ],
};
