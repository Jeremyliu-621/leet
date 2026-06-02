import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-valid-parentheses',
  title: 'Longest Valid Parentheses',
  difficulty: 'hard',
  tags: ['strings', 'stack'],
  description: `Given a string \`s\` containing only \`'('\` and \`')'\`, return the length of the **longest valid (well-formed) parentheses substring**.

A valid parentheses substring is one where every opening parenthesis has a matching closing parenthesis in the correct order.

**Example:** \`s = ")()())"\` — the longest valid substring is \`"()()"\` with length **4**.`,
  constraints: [
    '0 <= s.length <= 1000',
    's[i] is either \'(\' or \')\'',
  ],
  examples: [
    {
      input: 's = "(()"',
      output: '2',
      explanation: 'The longest valid substring is "()" with length 2.',
    },
    {
      input: 's = ")()())"',
      output: '4',
      explanation: 'The longest valid substring is "()()" with length 4.',
    },
    {
      input: 's = ""',
      output: '0',
      explanation: 'Empty string has no valid parentheses.',
    },
  ],
  hints: [
    'Use a stack to track indices of unmatched parentheses. The stack acts as a boundary marker — the distance between matched boundaries gives valid lengths.',
    'Initialize the stack with [-1] as a base index. For each \'(\', push its index. For each \')\', pop the stack; if the stack is now empty, push the current index as the new base; otherwise compute length = currentIndex - stack top and update the max.',
    '`const stack = [-1]; let maxLen = 0;\nfor (let i = 0; i < s.length; i++) {\n  if (s[i] === \'(\') { stack.push(i); }\n  else {\n    stack.pop();\n    if (stack.length === 0) stack.push(i);\n    else maxLen = Math.max(maxLen, i - stack[stack.length - 1]);\n  }\n}\nreturn maxLen;`',
  ],
  functionName: 'longestValidParentheses',
  params: ['s'],
  starterCode: {
    javascript: `function longestValidParentheses(s) {
  const stack = [-1];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) stack.push(i);
      else maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
    }
  }
  return maxLen;
}`,
    typescript: `function longestValidParentheses(s: string): number {
  const stack: number[] = [-1];
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();
      if (stack.length === 0) stack.push(i);
      else maxLen = Math.max(maxLen, i - stack[stack.length - 1]!);
    }
  }
  return maxLen;
}`,
    python: `def longestValidParentheses(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    stack = [-1]
    max_len = 0
    for i, c in enumerate(s):
        if c == '(': stack.append(i)
        else:
            stack.pop()
            if not stack: stack.append(i)
            else: max_len = max(max_len, i - stack[-1])
    return max_len`,
  },
  visibleTests: [
    { args: ['(()'], expected: 2 },
    { args: [')()())'], expected: 4 },
    { args: [''], expected: 0 },
  ],
  hiddenTests: [
    { args: ['(((('], expected: 0 },
    { args: ['()'], expected: 2 },
    { args: ['()(()'], expected: 2 },
    { args: ['(()()'], expected: 4 },
    { args: ['()()()'], expected: 6 },
  ],
};
