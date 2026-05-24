import type { Problem } from '../types';

export const problem: Problem = {
  id: 'decode-ways',
  title: 'Decode Ways',
  difficulty: 'medium',
  tags: ['dynamic-programming', 'strings'],
  description: `A message is encoded by mapping A→1, B→2, ..., Z→26. Given a string \`s\` of digits, return the **number of ways to decode** it.

'0' can't stand alone (no letter maps to 0). A two-digit number like "26" can be decoded as either two singles ("2","6") or one pair ("26"=Z), as long as the value is between 1 and 26.

Use 1D DP: let \`dp[i]\` = ways to decode \`s[0..i-1]\`.
- Single-digit decode: if \`s[i-1] != '0'\`, add \`dp[i-1]\`.
- Two-digit decode: if \`10 <= parseInt(s[i-2..i-1]) <= 26\`, add \`dp[i-2]\`.`,
  constraints: [
    '1 <= s.length <= 100',
    's contains only digits',
    's will not have leading zeros (but may have internal zeros)',
  ],
  examples: [
    {
      input: 's = "12"',
      output: '2',
      explanation: '"12" → [1,2]="AB" or [12]="L".',
    },
    {
      input: 's = "226"',
      output: '3',
      explanation: '"226" → [2,2,6]="BBF", [22,6]="VF", [2,26]="BZ".',
    },
    {
      input: 's = "06"',
      output: '0',
      explanation: 'Leading "0" can never be decoded.',
    },
  ],
  hints: [
    'Think of `dp[i]` as the number of ways to decode the first `i` characters. `dp[0] = 1` (empty prefix: one way). `dp[1] = s[0] !== \'0\' ? 1 : 0` (a \'0\' as the first character means 0 ways).',
    'For each position `i` from 2 to n: a single-digit decode is valid if `s[i-1] !== \'0\'` → add `dp[i-1]`. A two-digit decode is valid if `10 <= twoDigit <= 26` where `twoDigit = parseInt(s.slice(i-2, i))` → add `dp[i-2]`.',
    '`const n = s.length; const dp = new Array(n+1).fill(0); dp[0] = 1; dp[1] = s[0] !== \'0\' ? 1 : 0; for (let i = 2; i <= n; i++) { if (s[i-1] !== \'0\') dp[i] += dp[i-1]; const two = +s.slice(i-2, i); if (two >= 10 && two <= 26) dp[i] += dp[i-2]; } return dp[n];`',
  ],
  functionName: 'numDecodings',
  params: ['s'],
  starterCode: {
    javascript: 'function numDecodings(s) {\n  // your code here\n}\n',
    python: 'def numDecodings(s: str) -> int:\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['12'], expected: 2 },
    { args: ['226'], expected: 3 },
    { args: ['06'], expected: 0 },
    { args: ['1'], expected: 1 },
  ],
  hiddenTests: [
    { args: ['10'], expected: 1 },
    { args: ['11106'], expected: 2 },
    { args: ['111'], expected: 3 },
  ],
};
