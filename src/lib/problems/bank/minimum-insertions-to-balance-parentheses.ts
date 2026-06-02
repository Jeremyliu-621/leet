import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-insertions-to-balance-parentheses',
  title: 'Minimum Insertions to Balance a Parentheses String',
  difficulty: 'medium',
  tags: ['stack', 'strings'],
  description: `Given a parentheses string \`s\` containing only \`'('\` and \`')'\`. A parentheses string is balanced if:
- Any left parenthesis \`'('\` must have **two** consecutive right parentheses \`'))'\`.
- Nested balanced strings are still balanced.

Return the **minimum number of insertions** to make \`s\` balanced.

**Approach:** Track \`open\` (unmatched \`(\`) and \`res\` (insertions). When we see \`(\` → \`open++\`. When we see \`)\`: if the next char is also \`)\` consume both (a matching pair); otherwise insert one \`)\` and consume (\`res++\`). Then if \`open > 0\`, use up one open; otherwise insert a \`(\` (\`res++\`). At the end, each remaining open needs 2 closing: \`res += 2 * open\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    "s consists of '(' and ')' only.",
  ],
  examples: [
    {
      input: 's = "(()))"',
      output: '1',
      explanation: 'Already has "(())" which matches. The extra ")" at the end needs a pair → insert one ")" → "(()))" becomes "(()))" + ")" → 1 insertion.',
    },
    {
      input: 's = "())"',
      output: '0',
      explanation: 'Reads as "(" followed by "))". This is valid: one "(" matches "))". No insertions needed.',
    },
    {
      input: 's = "))(("',
      output: '5',
      explanation: 'Need to insert 3 "(" and 4 ")" ... complex. Net: 5 total.',
    },
  ],
  hints: [
    'Keep `open` = unmatched `(` count and `res` = insertions needed.',
    'For `(`: open++. For `)`: peek at next char. If next is `)` too, consume both (i++). Otherwise insert one `)` (res++). Then if `open > 0` use one open (open--), else insert a `(` (res++).',
    'At the end: `res += 2 * open` since each open needs `))`.',
    '```js\nlet open = 0, res = 0;\nfor (let i = 0; i < s.length; i++) {\n  if (s[i] === "(") { open++; }\n  else {\n    if (i + 1 < s.length && s[i+1] === ")") i++;\n    else res++;\n    if (open > 0) open--;\n    else res++;\n  }\n}\nreturn res + 2 * open;\n```',
  ],
  functionName: 'minInsertions',
  params: ['s'],
  starterCode: {
    javascript: `function minInsertions(s) {
  let open = 0, res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') { open++; }
    else {
      if (i + 1 < s.length && s[i + 1] === ')') i++;
      else res++;
      if (open > 0) open--;
      else res++;
    }
  }
  return res + 2 * open;
}`,
    typescript: `function minInsertions(s: string): number {
  let open = 0, res = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') { open++; }
    else {
      if (i + 1 < s.length && s[i + 1] === ')') i++;
      else res++;
      if (open > 0) open--;
      else res++;
    }
  }
  return res + 2 * open;
}`,
    python: `def minInsertions(s):
    if hasattr(s, 'to_py'): s = s.to_py()
    open_, res, i = 0, 0, 0
    while i < len(s):
        if s[i] == '(':
            open_ += 1
        else:
            if i + 1 < len(s) and s[i+1] == ')': i += 1
            else: res += 1
            if open_ > 0: open_ -= 1
            else: res += 1
        i += 1
    return res + 2 * open_`,
  },
  visibleTests: [
    { args: ['(()))'], expected: 1 },
    { args: ['())'], expected: 0 },
    { args: ['))(('], expected: 5 },
  ],
  hiddenTests: [
    { args: ['()'], expected: 1 },
    { args: ['()))'], expected: 2 },
    { args: ['))'], expected: 1 },
    { args: ['(('], expected: 4 },
    { args: ['(()))(('], expected: 5 },
    { args: ['))('], expected: 3 },
    { args: ['(())'], expected: 2 },
  ],
};
