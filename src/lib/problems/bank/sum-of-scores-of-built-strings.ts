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
  const n = s.length;
  const z = new Array(n).fill(0);
  z[0] = n;
  let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) z[i] = Math.min(r - i, z[i - l]);
    while (i + z[i] < n && s[z[i]] === s[i + z[i]]) z[i]++;
    if (i + z[i] > r) { l = i; r = i + z[i]; }
  }
  return z.reduce((a, b) => a + b, 0);
}`,
    typescript: `function sumScores(s: string): number {
  const n = s.length;
  const z = new Array<number>(n).fill(0);
  z[0] = n;
  let l = 0, r = 0;
  for (let i = 1; i < n; i++) {
    if (i < r) z[i] = Math.min(r - i, z[i - l]!);
    while (i + z[i]! < n && s[z[i]!] === s[i + z[i]!]) z[i]!++;
    if (i + z[i]! > r) { l = i; r = i + z[i]!; }
  }
  return z.reduce((a, b) => a + b, 0);
}`,
    python: `def sumScores(s):
    n = len(s)
    z = [0] * n
    z[0] = n
    l = r = 0
    for i in range(1, n):
        if i < r:
            z[i] = min(r - i, z[i - l])
        while i + z[i] < n and s[z[i]] == s[i + z[i]]:
            z[i] += 1
        if i + z[i] > r:
            l, r = i, i + z[i]
    return sum(z)
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
