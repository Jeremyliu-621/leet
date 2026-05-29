import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-beautiful-indices-in-the-given-array-i',
  title: 'Find Beautiful Indices in the Given Array I',
  difficulty: 'easy',
  tags: ['strings', 'two-pointers'],
  description: `You are given a **0-indexed** string \`s\`, a string \`a\`, a string \`b\`, and an integer \`k\`.

An index \`i\` is **beautiful** if:
- \`0 <= i <= s.length - a.length\`
- \`s[i..i+a.length-1] == a\`
- There exists an index \`j\` such that:
  - \`0 <= j <= s.length - b.length\`
  - \`s[j..j+b.length-1] == b\`
  - \`|i - j| <= k\`

Return an array of **all beautiful indices** in sorted order.`,
  constraints: [
    '`1 <= k <= s.length <= 10^5`',
    '`1 <= a.length, b.length <= 10`',
    '`s`, `a`, and `b` consist only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcd", a = "a", b = "d", k = 3',
      output: '[0]',
      explanation: '"a" starts at 0, "d" starts at 3. |0-3|=3<=3, so index 0 is beautiful.',
    },
    {
      input: 's = "abcd", a = "a", b = "z", k = 3',
      output: '[]',
      explanation: '"z" does not appear in s, so no beautiful indices exist.',
    },
  ],
  hints: [
    'First collect all indices where string `a` appears and all indices where `b` appears.',
    'For each index `i` where `a` appears, use a two-pointer or binary search to check if any `j` where `b` appears satisfies `|i - j| <= k`.',
    'Since both occurrence lists are sorted, a two-pointer approach works efficiently: advance the `b`-index pointer past indices that are too far behind, then check if the current pointer is within range.',
  ],
  functionName: 'beautifulIndices',
  params: ['s', 'a', 'b', 'k'],
  starterCode: {
    javascript: `function beautifulIndices(s, a, b, k) {

}`,
    typescript: `function beautifulIndices(s: string, a: string, b: string, k: number): number[] {

}`,
    python: `def beautifulIndices(s, a, b, k):
    pass`,
  },
  visibleTests: [
    { args: ['abcd', 'a', 'd', 3], expected: [0] },
    { args: ['abcd', 'a', 'z', 3], expected: [] },
  ],
  hiddenTests: [
    { args: ['abcabc', 'a', 'c', 2], expected: [0, 3] },
    { args: ['aaa', 'a', 'a', 0], expected: [0, 1, 2] },
    { args: ['hello', 'e', 'o', 1], expected: [] },
    { args: ['hello', 'e', 'o', 3], expected: [1] },
    { args: ['xyxy', 'x', 'y', 1], expected: [0, 2] },
    { args: ['abcdef', 'abc', 'def', 3], expected: [0] },
  ],
};
