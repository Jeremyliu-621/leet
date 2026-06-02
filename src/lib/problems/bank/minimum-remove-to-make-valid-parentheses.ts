import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-remove-to-make-valid-parentheses',
  title: 'Minimum Remove to Make Valid Parentheses',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given a string \`s\` of \`'('\`, \`')'\`, and lowercase English characters, remove the **minimum number** of parentheses so that the resulting string is valid. Return **any valid result**.

A string is valid if:
- It is empty or contains only lowercase characters, or
- It can be written as \`AB\` (A concatenated with B), where both A and B are valid, or
- It can be written as \`(A)\`, where A is valid.`,
  constraints: [
    '1 <= s.length <= 10^5',
    "s[i] is either '(' , ')' or lowercase English letter.",
  ],
  examples: [
    {
      input: 's = "lee(t(c)o)de)"',
      output: '"lee(t(c)o)de"',
      explanation: 'Remove the last unmatched \')\'. The result is valid.',
    },
    {
      input: 's = "a)b(c)d"',
      output: '"ab(c)d"',
      explanation: 'Remove the unmatched \')\' at index 1.',
    },
    {
      input: 's = "))(("',
      output: '""',
      explanation: 'All parentheses are unmatched; remove them all.',
    },
  ],
  hints: [
    'Level 1: Use a stack to track indices of unmatched \'(\'. A \')\' with no matching \'(\' is immediately invalid. After scanning, remaining indices in the stack are unmatched \'(\'.',
    'Level 2: Collect all indices to remove: scan left to right — for \'(\' push its index; for \')\' pop from stack if non-empty (match found), else mark index for removal. After the scan, all remaining stack indices are also marked for removal.',
    'Level 3: `const toRemove = new Set(); const stack = []; for(let i=0;i<s.length;i++){if(s[i]==="(")stack.push(i);else if(s[i]===")"){if(stack.length)stack.pop();else toRemove.add(i);}} stack.forEach(i=>toRemove.add(i)); return s.split("").filter((_,i)=>!toRemove.has(i)).join("");`',
  ],
  functionName: 'minRemoveToMakeValid',
  params: ['s'],
  starterCode: {
    javascript: `function minRemoveToMakeValid(s) {
  const toRemove = new Set(), stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      if (stack.length) stack.pop();
      else toRemove.add(i);
    }
  }
  stack.forEach(i => toRemove.add(i));
  return s.split('').filter((_, i) => !toRemove.has(i)).join('');
}`,
    typescript: `function minRemoveToMakeValid(s: string): string {
  const toRemove = new Set<number>(), stack: number[] = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      if (stack.length) stack.pop();
      else toRemove.add(i);
    }
  }
  stack.forEach(i => toRemove.add(i));
  return s.split('').filter((_, i) => !toRemove.has(i)).join('');
}`,
    python: `def minRemoveToMakeValid(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    to_remove, stack = set(), []
    for i, c in enumerate(s):
        if c == '(': stack.append(i)
        elif c == ')':
            if stack: stack.pop()
            else: to_remove.add(i)
    to_remove.update(stack)
    return ''.join(c for i, c in enumerate(s) if i not in to_remove)`,
  },
  visibleTests: [
    {
      args: ['lee(t(c)o)de)'],
      expected: 'lee(t(c)o)de',
    },
    {
      args: ['a)b(c)d'],
      expected: 'ab(c)d',
    },
    {
      args: ['))(('],
      expected: '',
    },
  ],
  hiddenTests: [
    {
      args: ['()()'],
      expected: '()()',
    },
    {
      args: ['(a(b(c)))'],
      expected: '(a(b(c)))',
    },
    {
      args: ['(('],
      expected: '',
    },
    {
      args: ['))'],
      expected: '',
    },
    {
      args: ['abc'],
      expected: 'abc',
    },
    {
      args: ['(abc)d)e'],
      expected: '(abc)de',
    },
  ],
};
