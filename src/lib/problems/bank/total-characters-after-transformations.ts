import type { Problem } from '../types';

export const problem: Problem = {
  id: 'total-characters-after-transformations',
  title: 'Total Characters in String After Transformations',
  difficulty: 'medium',
  tags: ['strings', 'dynamic-programming', 'math'],
  description: `You are given a string \`s\` and an integer \`t\`, representing the number of transformations to perform. In one transformation, every character in \`s\` is replaced according to the following rules:

- If the character is \`'z'\`, replace it with the string \`"ab"\`.
- Otherwise, replace it with the **next character** in the alphabet (e.g. \`'a'\` → \`'b'\`, \`'b'\` → \`'c'\`, …, \`'y'\` → \`'z'\`).

Return the **length** of the resulting string after exactly \`t\` transformations. Since the answer may be very large, return it **modulo** \`10^9 + 7\`.`,
  constraints: [
    '1 <= s.length <= 10^5',
    '1 <= t <= 10^5',
    's consists only of lowercase English letters.',
  ],
  examples: [
    {
      input: 's = "abcyza", t = 2',
      output: '8',
      explanation: 'After t=1: a→b, b→c, c→d, y→z, z→"ab", a→b → "bcdzabb" (7 chars). After t=2: each of those chars transforms → 8 chars total.',
    },
    {
      input: 's = "z", t = 1',
      output: '2',
      explanation: '"z" → "ab", length 2.',
    },
    {
      input: 's = "a", t = 5',
      output: '1',
      explanation: 'a→b→c→d→e→f, still length 1.',
    },
  ],
  hints: [
    'Tracking the actual string is too slow — the length grows exponentially. Instead, track the **frequency** of each of the 26 letters at each step.',
    'Each step: for letters a–y, the new frequency of the next letter increases by the current frequency. For z, add its frequency to both a and b simultaneously.',
    'Apply t transformations to the frequency array (O(26 × t)). Return the sum of all 26 frequencies modulo 10^9 + 7.',
  ],
  functionName: 'lengthAfterTransformations',
  params: ['s', 't'],
  starterCode: {
    javascript: `function lengthAfterTransformations(s, t) {

}`,
    typescript: "function lengthAfterTransformations(s: string, t: number): number {\n\n}",

    python: `def lengthAfterTransformations(s, t):
    pass`,
  },
  visibleTests: [
    { args: ['abcyza', 2], expected: 8 },
    { args: ['z', 1], expected: 2 },
    { args: ['a', 5], expected: 1 },
  ],
  hiddenTests: [
    { args: ['z', 26], expected: 3 },
    { args: ['z', 27], expected: 4 },
    { args: ['z', 52], expected: 7 },
    { args: ['a', 26], expected: 2 },
    { args: ['abcdefghijklmnopqrstuvwxyz', 1], expected: 27 },
    { args: ['zz', 1], expected: 4 },
    { args: ['az', 1], expected: 3 },
    { args: ['zzz', 1], expected: 6 },
    { args: ['a', 1], expected: 1 },
    { args: ['y', 2], expected: 2 },
  ],
};
