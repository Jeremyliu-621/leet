import type { Problem } from '../types';

export const problem: Problem = {
  id: 'wildcard-matching',
  title: 'Wildcard Matching',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given an input string \`s\` and a pattern \`p\`, implement **wildcard pattern matching** with support for:

- \`'?'\` — matches any single character.
- \`'*'\` — matches any sequence of characters (including the empty sequence).

The matching must cover the **entire** input string.`,
  constraints: [
    '0 <= s.length <= 2000',
    '0 <= p.length <= 2000',
    's contains only lowercase English letters',
    'p contains only lowercase English letters, \'?\', and \'*\'',
  ],
  examples: [
    {
      input: 's = "aa", p = "a"',
      output: 'false',
      explanation: '"a" matches exactly one \'a\', not two.',
    },
    {
      input: 's = "aa", p = "*"',
      output: 'true',
      explanation: '"*" matches any sequence.',
    },
    {
      input: 's = "cb", p = "?a"',
      output: 'false',
      explanation: '\'?\' matches \'c\', but \'a\' does not match \'b\'.',
    },
  ],
  hints: [
    'Build a 2D boolean table `dp[i][j]` = true if `s[0..i-1]` matches `p[0..j-1]`. Base cases: `dp[0][0] = true`; `dp[0][j] = dp[0][j-1]` when `p[j-1] === "*"` (star matches empty).',
    'Transitions: if `p[j-1] === "*"`, `dp[i][j] = dp[i-1][j] || dp[i][j-1]` (star consumes one char from s, or matches nothing). Otherwise if `p[j-1] === "?" || p[j-1] === s[i-1]`, `dp[i][j] = dp[i-1][j-1]`.',
    '`const dp=Array.from({length:m+1},()=>new Array(n+1).fill(false)); dp[0][0]=true; for(let j=1;j<=n;j++) if(p[j-1]==="*") dp[0][j]=dp[0][j-1]; for(let i=1;i<=m;i++) for(let j=1;j<=n;j++) { if(p[j-1]==="*") dp[i][j]=dp[i-1][j]||dp[i][j-1]; else if(p[j-1]==="?"||p[j-1]===s[i-1]) dp[i][j]=dp[i-1][j-1]; } return dp[m][n];`',
  ],
  functionName: 'isMatch',
  params: ['s', 'p'],
  starterCode: {
    javascript: 'function isMatch(s, p) {\n  \n}\n',
    typescript: "function isMatch(s: string, p: string): boolean {\n  \n}",

    python: 'def isMatch(s: str, p: str) -> bool:\n    pass\n',
  },
  visibleTests: [
    { args: ['aa', 'a'], expected: false },
    { args: ['aa', '*'], expected: true },
    { args: ['cb', '?a'], expected: false },
    { args: ['adceb', '*a*b'], expected: true },
  ],
  hiddenTests: [
    { args: ['', ''], expected: true },
    { args: ['', '*'], expected: true },
    { args: ['', '?'], expected: false },
    { args: ['abc', '***'], expected: true },
    { args: ['acdcb', 'a*c?b'], expected: false },
    { args: ['mississippi', 'm??*ss*?i*pi'], expected: false },
  ],
};
