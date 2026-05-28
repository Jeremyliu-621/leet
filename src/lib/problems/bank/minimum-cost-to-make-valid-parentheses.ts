import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-make-valid-parentheses',
  title: 'Minimum Add to Make Parentheses Valid',
  difficulty: 'medium',
  tags: ['stack'],
  description: `A parentheses string is valid if and only if every open bracket is closed and every close bracket is matched.

Given a string \`s\` of \`'('\` and \`')'\`, return the **minimum number of moves** to make the string valid. A move consists of inserting a single parenthesis anywhere.

**Example 1:**
\`\`\`
Input: s = "())"
Output: 1
\`\`\`

**Example 2:**
\`\`\`
Input: s = "((("
Output: 3
\`\`\`

**Constraints:**
- \`1 ≤ s.length ≤ 10⁵\`
- \`s[i]\` is \`'('\` or \`')'\``,
  constraints: [
    '1 ≤ s.length ≤ 10⁵',
    "s[i] is '(' or ')'",
  ],
  examples: [
    { input: 's = "())"', output: '1' },
    { input: 's = "((("', output: '3' },
    { input: 's = "(())"', output: '0' },
    { input: 's = "))(("', output: '4' },
  ],
  hints: [
    'Track unmatched open brackets and unmatched close brackets separately.',
    "For each ')': if there's an unmatched '(', cancel it; else increment unmatched close.",
    'Answer = unmatched-open + unmatched-close.',
  ],
  functionName: 'minAddToMakeValid',
  params: ['s'],
  starterCode: {
    javascript: 'function minAddToMakeValid(s) {\n\n}\n',
    python: 'def minAddToMakeValid(s):\n    pass\n',
  },
  visibleTests: [
    { args: ['())'], expected: 1 },
    { args: ['((('], expected: 3 },
    { args: ['(())'], expected: 0 },
    { args: ['))(('], expected: 4 },
  ],
  hiddenTests: [
    { args: [''], expected: 0 },
    { args: ['()'], expected: 0 },
    { args: [')('], expected: 2 },
    { args: ['((()))'], expected: 0 },
    { args: [')))))'], expected: 5 },
  ],
};
