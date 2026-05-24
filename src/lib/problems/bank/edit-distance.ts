import type { Problem } from '../types';

export const problem: Problem = {
  id: 'edit-distance',
  title: 'Edit Distance (Levenshtein)',
  difficulty: 'hard',
  tags: ['strings', 'dynamic-programming'],
  description: `Given two strings \`word1\` and \`word2\`, return the **minimum number of operations** required to convert \`word1\` to \`word2\`.

You have three operations available:
- **Insert** a character
- **Delete** a character
- **Replace** a character

This is the classic **Levenshtein distance** problem, solved efficiently with dynamic programming.`,
  constraints: [
    '0 <= word1.length, word2.length <= 500',
    'word1 and word2 consist of lowercase English letters',
  ],
  examples: [
    {
      input: 'word1 = "horse", word2 = "ros"',
      output: '3',
      explanation: 'horse → rorse (replace h→r) → rose (delete r) → ros (delete e). 3 operations.',
    },
    {
      input: 'word1 = "intention", word2 = "execution"',
      output: '5',
      explanation: '5 edit operations are needed to transform "intention" into "execution".',
    },
    {
      input: 'word1 = "abc", word2 = "abc"',
      output: '0',
      explanation: 'The strings are already equal; no operations needed.',
    },
  ],
  hints: [
    'Use 2D dynamic programming. Let dp[i][j] = minimum edits to convert word1[0..i-1] to word2[0..j-1]. The base cases are converting to/from an empty string.',
    'If word1[i-1] === word2[j-1], no operation is needed: dp[i][j] = dp[i-1][j-1]. Otherwise, dp[i][j] = 1 + min(dp[i-1][j] (delete), dp[i][j-1] (insert), dp[i-1][j-1] (replace)).',
    '`const m = word1.length, n = word2.length;\nconst dp = Array.from({length: m+1}, (_, i) => Array.from({length: n+1}, (_, j) => i === 0 ? j : j === 0 ? i : 0));\nfor (let i = 1; i <= m; i++) {\n  for (let j = 1; j <= n; j++) {\n    if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1];\n    else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);\n  }\n}\nreturn dp[m][n];`',
  ],
  functionName: 'editDistance',
  params: ['word1', 'word2'],
  starterCode: {
    javascript: 'function editDistance(word1, word2) {\n  // your code here\n}\n',
    python: 'def editDistance(word1, word2):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['horse', 'ros'], expected: 3 },
    { args: ['intention', 'execution'], expected: 5 },
    { args: ['abc', 'abc'], expected: 0 },
  ],
  hiddenTests: [
    { args: ['', ''], expected: 0 },
    { args: ['a', ''], expected: 1 },
    { args: ['', 'abc'], expected: 3 },
    { args: ['kitten', 'sitting'], expected: 3 },
    { args: ['abc', 'yabd'], expected: 2 },
  ],
};
