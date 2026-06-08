import type { Problem } from '../../types';

export const problem: Problem = {
  id: 'valid-parentheses-debug-wrong-check',
  title: 'Fix the Bug: Valid Parentheses',
  difficulty: 'easy',
  tags: ['stack', 'strings'],
  kind: 'debug',
  description: `The following implementation of **Valid Parentheses** has a bug. Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

Find and fix the bug so all tests pass.

**Hint:** The bug is in the closing-bracket matching logic.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's consists of parentheses only: ()[]{}'
  ],
  examples: [
    {
      input: 's = "()"',
      output: 'true',
    },
    {
      input: 's = "()[]{}"',
      output: 'true',
    },
    {
      input: 's = "(]"',
      output: 'false',
    },
  ],
  hints: [
    'Trace the execution for input "([)]". What does the stack look like?',
    'The matching map is wrong: `)` maps to `]` instead of `(`.',
    'Fix the match map so each closing bracket maps to its correct opening bracket: `)` → `(`, `]` → `[`, `}` → `{`.',
  ],
  functionName: 'isValid',
  params: ['s'],
  buggyCode: {
    javascript: `function isValid(s) {
  const stack = [];
  const match = { ')': '[', ']': '(', '}': '{' };
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.pop() !== match[ch]) return false;
    }
  }
  return stack.length === 0;
}`,
    python: `def isValid(s):
    stack = []
    match = {')': '[', ']': '(', '}': '{'}
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack.pop() != match[ch]:
                return False
    return len(stack) == 0`,
  },
  starterCode: {
    javascript: `function isValid(s) {
  const stack = [];
  const match = { ')': '[', ']': '(', '}': '{' };
  for (const ch of s) {
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    } else {
      if (stack.pop() !== match[ch]) return false;
    }
  }
  return stack.length === 0;
}`,
    python: `def isValid(s):
    stack = []
    match = {')': '[', ']': '(', '}': '{'}
    for ch in s:
        if ch in '([{':
            stack.append(ch)
        else:
            if not stack or stack.pop() != match[ch]:
                return False
    return len(stack) == 0`,
  },
  visibleTests: [
    { args: ['()'], expected: true },
    { args: ['()[]{}'], expected: true },
    { args: ['(]'], expected: false },
  ],
  hiddenTests: [
    { args: ['([)]'], expected: false },
    { args: ['{[]}'], expected: true },
    { args: ['('], expected: false },
    { args: [')'], expected: false },
    { args: ['([{}])'], expected: true },
    { args: ['((('], expected: false },
  ],
};
