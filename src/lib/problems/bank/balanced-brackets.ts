import type { Problem } from '../types';

export const problem: Problem = {
  id: 'balanced-brackets',
  title: 'Balanced Brackets',
  difficulty: 'easy',
  tags: ['stack'],
  description: `Given a string \`text\` containing only the characters \`(\`, \`)\`, \`[\`, \`]\`, \`{\`, and \`}\`, decide whether the brackets are **balanced**.

Brackets are balanced when every opening bracket is closed by a matching bracket of the same kind, and pairs are properly nested. A *stack* naturally tracks the most recent unclosed opening bracket.

Return \`true\` if the string is balanced, otherwise return \`false\`. An empty string is balanced.`,
  constraints: ['0 <= text.length <= 1000', 'text contains only the characters ()[]{}.'],
  examples: [
    {
      input: 'text = "([])"',
      output: 'true',
      explanation: 'Every bracket is matched and properly nested.',
    },
    {
      input: 'text = "([)]"',
      output: 'false',
      explanation: 'The pairs cross instead of nesting.',
    },
    {
      input: 'text = "((("',
      output: 'false',
      explanation: 'Three opening brackets are never closed.',
    },
  ],
  functionName: 'balancedBrackets',
  params: ['text'],
  starterCode: {
    javascript: 'function balancedBrackets(text) {\n  // your code here\n}\n',
  },
  visibleTests: [
    { args: ['([])'], expected: true },
    { args: ['([)]'], expected: false },
    { args: ['((('], expected: false },
  ],
  hiddenTests: [
    { args: [''], expected: true },
    { args: ['()'], expected: true },
    { args: [']'], expected: false },
    { args: ['{[()]}'], expected: true },
    { args: ['(]'], expected: false },
    { args: ['()[]{}'], expected: true },
  ],
  hints: [
    'When you see an opening bracket, you do not yet know which closer it needs — you just need to remember it for later.',
    'Walk through the string left-to-right. Push every opener onto a stack. On a closer, peek at the top: it must be the matching opener of the same kind; otherwise the string is unbalanced.',
    'After the loop, the string is balanced **only if** the stack is empty (every opener got closed). A non-empty stack means dangling opens; mismatched/extra closes are caught during the loop.',
  ],
};
