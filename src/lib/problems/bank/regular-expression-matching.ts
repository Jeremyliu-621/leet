import type { Problem } from '../types';

export const problem: Problem = {
  id: 'regular-expression-matching',
  title: 'Regular Expression Matching',
  difficulty: 'hard',
  tags: ['dynamic-programming', 'strings'],
  description: `Given an input string \`s\` and a pattern \`p\`, implement **regular expression matching** with support for:

- \`'.'\` — matches any single character.
- \`'*'\` — matches zero or more of the **preceding** element.

The matching must cover the **entire** input string, not just a prefix or suffix.`,
  constraints: [
    '1 <= s.length <= 20',
    '1 <= p.length <= 30',
    's contains only lowercase English letters',
    'p contains only lowercase English letters, \'.\', and \'*\'',
    'It is guaranteed that for each occurrence of \'*\', there will be a valid preceding character',
  ],
  examples: [
    {
      input: 's = "aa", p = "a"',
      output: 'false',
      explanation: '"a" matches exactly one character, not two.',
    },
    {
      input: 's = "aa", p = "a*"',
      output: 'true',
      explanation: '"a*" means zero or more \'a\'s — it matches "aa".',
    },
    {
      input: 's = "ab", p = ".*"',
      output: 'true',
      explanation: '".*" means zero or more of any character.',
    },
    {
      input: 's = "aab", p = "c*a*b"',
      output: 'true',
      explanation: '"c*" matches zero c\'s, "a*" matches "aa", "b" matches "b".',
    },
  ],
  hints: [
    'Build a 2D boolean table `dp[i][j]` = true if `s[0..i-1]` matches `p[0..j-1]`. Base case: `dp[0][0] = true`. Patterns like "a*b*" can match an empty string — handle this in the first row.',
    'When `p[j-1] === \'*\'`, it can match zero of the previous char (`dp[i][j] = dp[i][j-2]`) or one more if the preceding char matches the current `s[i-1]` (`dp[i][j] |= dp[i-1][j]`). Otherwise if chars match directly, `dp[i][j] = dp[i-1][j-1]`.',
    '`for (j=1;j<=n;j++) if (p[j-1]==="*") dp[0][j]=dp[0][j-2]; for each i,j: if p[j-1]==="*": dp[i][j]=dp[i][j-2] || (p[j-2]==="."||p[j-2]===s[i-1]) && dp[i-1][j]; else if p[j-1]==="."||p[j-1]===s[i-1]: dp[i][j]=dp[i-1][j-1];`',
  ],
  functionName: 'isMatch',
  params: ['s', 'p'],
  starterCode: {
    javascript: 'function isMatch(s, p) {\n  \n}\n',
    python: 'def isMatch(s: str, p: str) -> bool:\n    pass\n',
  },
  visibleTests: [
    { args: ['aa', 'a'], expected: false },
    { args: ['aa', 'a*'], expected: true },
    { args: ['ab', '.*'], expected: true },
    { args: ['aab', 'c*a*b'], expected: true },
  ],
  hiddenTests: [
    { args: ['a', '.'], expected: true },
    { args: ['mississippi', 'mis*is*p*.'], expected: false },
    { args: ['', '.*'], expected: true },
    { args: ['ab', 'a*b'], expected: true },
    { args: ['bbbba', '.*a*a'], expected: true },
  ],
};
