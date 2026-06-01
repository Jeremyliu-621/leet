import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-characters-in-string-after-transformations-i',
  title: 'Total Characters in String After Transformations I',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `You are given a string \`s\` and an integer \`t\`, representing the number of **transformations** to perform. In one transformation, every character in \`s\` is replaced according to the following rules:

- If the character is \`'z'\`, replace it with the string \`"ab"\`.
- Otherwise, replace it with the **next** character in the alphabet.

Return *the **length** of the resulting string after exactly* \`t\` *transformations*, modulo \`10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= t <= 10^5',
    's consists of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcyy", t = 2',
      output: '7',
      explanation:
        'After 1 step: b,c,d,z,z → length 5. After 2 steps: each z becomes "ab", others shift: a,b,c,d,e + 2 z-expansions → b=1,c=1,d=1,e=1,a=2 → length 7.',
    },
    {
      input: 's = "azbk", t = 1',
      output: '5',
      explanation:
        'a→b, z→"ab", b→c, k→l. Length: 1+2+1+1 = 5.',
    },
  ],
  hints: [
    'Track only the frequency of each character (26 counts), not the actual string.',
    'Each step: shift each character\'s count forward one; z\'s count adds to both a and b.',
    'After t steps, sum all 26 frequency counts modulo 10^9+7.',
  ],
  functionName: 'lengthAfterTransformations',
  params: ['s', 't'],
  starterCode: {
    javascript: 'function lengthAfterTransformations(s, t) {\n\n}\n',
    typescript: 'function lengthAfterTransformations(s: string, t: number): number {\n\n}\n',
    python: 'def lengthAfterTransformations(s, t):\n    pass\n',
  },
  visibleTests: [
    { args: ['abcyy', 2], expected: 7 },
    { args: ['azbk', 1], expected: 5 },
  ],
  hiddenTests: [
    { args: ['a', 1], expected: 1 },
    { args: ['z', 1], expected: 2 },
    { args: ['y', 2], expected: 2 },
    { args: ['zz', 1], expected: 4 },
    { args: ['abc', 1], expected: 3 },
    { args: ['z', 26], expected: 3 },
    { args: ['a', 26], expected: 2 },
  ],
};
