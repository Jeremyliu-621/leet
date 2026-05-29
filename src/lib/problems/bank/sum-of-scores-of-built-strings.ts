import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sum-of-scores-of-built-strings',
  title: 'Sum of Scores of Built Strings',
  difficulty: 'hard',
  tags: ['strings', 'two-pointers'],
  description: `You are building a string \`s\` of length \`n\` one character at a time, **prepending** each new character to the front of the string. The strings are labeled from \`1\` to \`n\`, where the string labeled \`i\` is the prefix of \`s\` of length \`i\`.

The **score** of string \`i\` is the length of the **longest common prefix** between string \`i\` and string \`n\` (the full string \`s\`).

Return the **sum of scores** of all strings.

**Key insight:** The score of string \`i\` is exactly \`Z[n - i]\` in the Z-array of \`s\`, where \`Z[0] = n\` (the full string always matches itself) and \`Z[k]\` is the length of the longest substring starting at position \`k\` that is also a prefix of \`s\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    's consists of lowercase English letters only',
  ],
  examples: [
    {
      input: 's = "babab"',
      output: '9',
      explanation: 'Z = [5, 0, 3, 0, 1]. Sum = 5+0+3+0+1 = 9.',
    },
    {
      input: 's = "aaaa"',
      output: '10',
      explanation: 'Z = [4, 3, 2, 1]. Sum = 4+3+2+1 = 10.',
    },
    {
      input: 's = "abab"',
      output: '6',
      explanation: 'Z = [4, 0, 2, 0]. Sum = 4+0+2+0 = 6.',
    },
  ],
  hints: [
    'The score of the full string is always n (it equals itself), so Z[0] = n.',
    'Compute the Z-array in O(n) using the Z-algorithm: maintain a window [l, r] of the rightmost Z-box.',
    'For each position k, Z[k] = length of the longest match between s[k..] and s[0..]. The sum of all Z[k] is the answer.',
  ],
  functionName: 'sumScores',
  params: ['s'],
  starterCode: {
    javascript: `function sumScores(s) {
  // Z-function: Z[i] = length of longest prefix of s matching s[i..].
}`,
    typescript: `function sumScores(s: string): number {
  // Z-function: Z[i] = length of longest prefix of s matching s[i..].
}`,
    python: `def sumScores(s):
    # Z-function: Z[i] = length of longest prefix of s matching s[i..].
    pass
`,
  },
  visibleTests: [
    { args: ['babab'], expected: 9 },
    { args: ['aaaa'], expected: 10 },
    { args: ['abab'], expected: 6 },
  ],
  hiddenTests: [
    { args: ['a'], expected: 1 },
    { args: ['leetcode'], expected: 8 },
    { args: ['aabxaa'], expected: 10 },
    { args: ['abcabc'], expected: 9 },
    { args: ['aabaab'], expected: 11 },
    { args: ['zzzzzz'], expected: 21 },
  ],
};
