import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-beautiful-indices-in-the-given-array-i',
  title: 'Find Beautiful Indices in the Given Array I',
  difficulty: 'medium',
  tags: ['strings', 'two-pointers', 'binary-search'],
  description: `You are given a **0-indexed** string \`s\`, a string \`a\`, a string \`b\`, and an integer \`k\`.

An index \`i\` is **beautiful** if:
- \`0 <= i <= s.length - a.length\`
- \`s[i..i + a.length - 1] == a\`
- There exists an index \`j\` such that:
  - \`0 <= j <= s.length - b.length\`
  - \`s[j..j + b.length - 1] == b\`
  - \`|i - j| <= k\`

Return the array containing beautiful indices in **sorted order** from smallest to largest.`,
  constraints: [
    '`1 <= k <= s.length <= 10^5`',
    '`1 <= a.length, b.length <= 10^5`',
    '`s`, `a`, and `b` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcd", a = "a", b = "a", k = 4',
      output: '[0]',
      explanation: 'Index 0: s[0]="a" (matches a). j=0 where s[0]="a" (matches b), |0-0|=0 <= 4.',
    },
    {
      input: 's = "ababab", a = "ab", b = "ab", k = 1',
      output: '[0,2,4]',
      explanation: '"ab" starts at 0,2,4. Each index i has a matching j=i with |i-j|=0 <= 1.',
    },
    {
      input: 's = "aabaa", a = "aa", b = "aa", k = 0',
      output: '[0,3]',
      explanation: '"aa" starts at 0 and 3. For i=0, j=0 works (|0-0|=0). For i=3, j=3 works.',
    },
  ],
  hints: [
    'Collect all starting indices of `a` in `s` and all starting indices of `b` in `s` (use string search or simple scan).',
    'For each index `i` in the `a`-match list, check if any index in the `b`-match list is within distance `k`. Binary search for the nearest `b`-index.',
    'Two-pointer also works: advance a pointer into the sorted `b`-match list as `i` increases.',
  ],
  functionName: 'beautifulIndices',
  params: ['s', 'a', 'b', 'k'],
  starterCode: {
    javascript: `function beautifulIndices(s, a, b, k) {

}`,
    python: `def beautifulIndices(s, a, b, k):
    pass`,
  },
  visibleTests: [
    { args: ['abcd', 'a', 'a', 4], expected: [0] },
    { args: ['ababab', 'ab', 'ab', 1], expected: [0, 2, 4] },
    { args: ['aabaa', 'aa', 'aa', 0], expected: [0, 3] },
  ],
  hiddenTests: [
    { args: ['abc', 'a', 'c', 2], expected: [0] },
    { args: ['hello', 'he', 'lo', 10], expected: [0] },
    { args: ['abcabc', 'abc', 'abc', 0], expected: [0, 3] },
    { args: ['xyz', 'a', 'b', 5], expected: [] },
    { args: ['aaa', 'a', 'a', 1], expected: [0, 1, 2] },
  ],
};
