import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-remove-to-make-valid',
  title: 'Minimum Bracket Removals for Valid String',
  difficulty: 'medium',
  tags: ['strings', 'stack'],
  description: `Given a string \`s\` containing lowercase letters, \`'('\`, and \`')'\`, remove the **minimum** number of parentheses so that the resulting string is valid.

A string is **valid** if every open parenthesis has a matching close parenthesis and vice versa.

Use the canonical two-pass approach:
1. Scan left-to-right, removing any \`')'\` that has no matching \`'('\` before it.
2. Scan right-to-left on the result, removing any \`'('\` that has no matching \`')'\` after it.

Return the resulting string.`,
  constraints: [
    '1 <= s.length <= 300',
    's consists of lowercase English letters, \'(\', and \')\'.',
  ],
  examples: [
    {
      input: 's = "lee(t(c)o)de)"',
      output: '"lee(t(c)o)de"',
      explanation: 'The trailing unmatched \')\' is removed.',
    },
    {
      input: 's = "a)b(c)d"',
      output: '"ab(c)d"',
      explanation: 'The unmatched \')\' at index 1 is removed.',
    },
    {
      input: 's = "))(("',
      output: '""',
      explanation: 'All four brackets are unmatched and must be removed.',
    },
  ],
  hints: [
    'Level 1: A valid string has matching parentheses. Think about making two passes: one to handle unmatched closing brackets, one to handle unmatched opening brackets.',
    'Level 2: First pass (left→right): keep a counter for open brackets. When you see \'(\', increment. When you see \')\', if counter > 0 decrement (matched), otherwise remove the \')\'. Second pass (right→left on result): keep a counter for close brackets; remove excess \'(\'.',
    'Level 3: `let open = 0; let s1 = ""; for (const c of s) { if (c === "(") { open++; s1 += c; } else if (c === ")") { if (open > 0) { open--; s1 += c; } } else { s1 += c; } } let close = 0; let s2 = ""; for (let i = s1.length - 1; i >= 0; i--) { const c = s1[i]; if (c === ")") { close++; s2 = c + s2; } else if (c === "(") { if (close > 0) { close--; s2 = c + s2; } } else { s2 = c + s2; } } return s2;`',
  ],
  functionName: 'minRemoveForValid',
  params: ['s'],
  starterCode: {
    javascript: 'function minRemoveForValid(s) {\n  // your code here\n}\n',
    typescript: "function minRemoveForValid(s: string): string {\n  // your code here\n}",

    python: 'def minRemoveForValid(s):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['lee(t(c)o)de)'], expected: 'lee(t(c)o)de' },
    { args: ['a)b(c)d'], expected: 'ab(c)d' },
    { args: ['))(('], expected: '' },
  ],
  hiddenTests: [
    { args: ['()'], expected: '()' },
    { args: ['(a(b)c)'], expected: '(a(b)c)' },
    { args: ['((()'], expected: '()' },
    { args: ['abc'], expected: 'abc' },
    { args: ['((('], expected: '' },
    { args: [')a(b)c('], expected: 'a(b)c' },
    { args: ['((a)b)c)'], expected: '((a)b)c' },
  ],
};
