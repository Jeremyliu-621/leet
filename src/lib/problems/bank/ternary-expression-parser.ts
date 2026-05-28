import type { Problem } from '../types';

export const problem: Problem = {
  id: 'ternary-expression-parser',
  title: 'Ternary Expression Parser',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given a string \`expression\` representing a ternary expression, evaluate it and return the result as a string.

The expression uses the following characters:
- Digits \`'1'\`–\`'9'\`
- \`'T'\` (boolean true) and \`'F'\` (boolean false)
- \`'?'\` and \`':'\` operators

The ternary operator is right-associative. For example, \`"F?1:T?4:5"\` evaluates the inner \`T?4:5\` first (yielding \`"4"\`), so the full expression evaluates to \`"4"\`.`,
  constraints: [
    '`5 <= expression.length <= 10^4`',
    '`expression[i]` is a digit, `\'T\'`, `\'F\'`, `\'?\'`, or `\':\'`',
    'It is guaranteed that the expression is a valid ternary expression',
    'Each non-operator character is either `\'T\'`, `\'F\'`, or a digit `\'1\'`–`\'9\'`',
  ],
  examples: [
    {
      input: 'expression = "T?2:3"',
      output: '"2"',
      explanation: 'The condition is T (true), so the result is "2".',
    },
    {
      input: 'expression = "F?1:T?4:5"',
      output: '"4"',
      explanation: 'The condition is F (false), so we evaluate the false branch T?4:5. That condition is T (true), so the result is "4".',
    },
    {
      input: 'expression = "T?T?F:5:3"',
      output: '"F"',
      explanation: 'The outer condition is T, so we evaluate the true branch T?F:5. That condition is T, so the result is "F".',
    },
  ],
  hints: [
    'Process the expression **right-to-left** and use a stack. Push each character as you scan. When you encounter a `\'?\'`, the two values on top of the stack are the true and false branches of the ternary.',
    'When you see `\'?\'` at index `i`, pop the true-branch value, pop the `\':\'` separator, then pop the false-branch value. Check `expression[i - 1]` to get the condition character, then push the chosen branch back. Decrement `i` an extra time to skip the condition character.',
    '```js\nfunction parseTernary(expression) {\n  const stack = [];\n  for (let i = expression.length - 1; i >= 0; i--) {\n    const c = expression[i];\n    if (c === \'?\') {\n      const t = stack.pop();\n      stack.pop(); // \':\'\n      const f = stack.pop();\n      stack.push(expression[i - 1] === \'T\' ? t : f);\n      i--; // skip condition char\n    } else {\n      stack.push(c);\n    }\n  }\n  return stack[0];\n}\n```',
  ],
  functionName: 'parseTernary',
  params: ['expression'],
  starterCode: {
    javascript: `function parseTernary(expression) {

}`,
    typescript: "function parseTernary(expression: string): string {\n\n}",

    python: `def parseTernary(expression: str) -> str:
    pass`,
  },
  visibleTests: [
    { args: ['T?2:3'], expected: '2' },
    { args: ['F?1:T?4:5'], expected: '4' },
    { args: ['T?T?F:5:3'], expected: 'F' },
  ],
  hiddenTests: [
    { args: ['F?F?2:3:T?4:5'], expected: '4' },
    { args: ['T?1:2'], expected: '1' },
    { args: ['F?1:2'], expected: '2' },
    { args: ['T?F?1:2:T?3:4'], expected: '2' },
    { args: ['F?T?1:2:T?3:4'], expected: '3' },
  ],
};
