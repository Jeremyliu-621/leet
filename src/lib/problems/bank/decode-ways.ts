import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-ways',
  title: 'Decode Ways',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `A message containing letters \`A-Z\` has been encoded using the following mapping:

\`\`\`
'A' -> "1"
'B' -> "2"
...
'Z' -> "26"
\`\`\`

Given a string \`s\` containing only digits, return the **number of ways** to decode it.

The test cases are generated so that the answer fits in a 32-bit integer.`,
  constraints: [
    '1 <= s.length <= 100',
    's contains only digits and may contain leading zeros',
  ],
  examples: [
    {
      input: 's = "12"',
      output: '2',
      explanation: '"12" can be decoded as "AB" (1 2) or "L" (12).',
    },
    {
      input: 's = "226"',
      output: '3',
      explanation: '"226" can be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).',
    },
    {
      input: 's = "06"',
      output: '0',
      explanation: '"06" cannot be decoded — "0" has no valid mapping and "06" > 26.',
    },
  ],
  hints: [
    "Let `dp[i]` = number of ways to decode `s[0..i-1]`. A digit `'0'` can only be decoded as part of a two-digit group (10 or 20), so if `s[i-1] === '0'` there's no one-digit decoding.",
    'At each position `i`, try decoding one digit (`s[i-1]`) if it\'s non-zero, and two digits (`s[i-2..i-1]`) if the two-digit number is between 10 and 26. Add `dp[i-1]` for one-digit, `dp[i-2]` for two-digit.',
    '`dp[0] = 1; dp[1] = s[0] === "0" ? 0 : 1; for (let i = 2; i <= n; i++) { if (s[i-1] !== "0") dp[i] += dp[i-1]; const two = +s.slice(i-2, i); if (two >= 10 && two <= 26) dp[i] += dp[i-2]; }`',
  ],
  functionName: 'numDecodings',
  params: ['s'],
  starterCode: {
    javascript: 'function numDecodings(s) {\n  \n}\n',
    python: 'def numDecodings(s: str) -> int:\n    pass\n',
  },
  visibleTests: [
    { args: ['12'], expected: 2 },
    { args: ['226'], expected: 3 },
    { args: ['06'], expected: 0 },
    { args: ['10'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['1'], expected: 1 },
    { args: ['0'], expected: 0 },
    { args: ['11106'], expected: 2 },
    { args: ['2611055971756562'], expected: 4 },
    { args: ['27'], expected: 1 },
  ],
};
