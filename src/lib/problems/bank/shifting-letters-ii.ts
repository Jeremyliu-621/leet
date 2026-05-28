import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shifting-letters-ii',
  title: 'Shifting Letters II',
  difficulty: 'medium',
  tags: ['strings', 'arrays'],
  description: `You are given a string \`s\` of lowercase English letters and a 2D integer array \`queries\` where \`queries[i] = [left, right, direction]\`.

For each query, shift all characters in \`s[left..right]\`:
- If \`direction\` is \`1\`, shift **forward** by one (\`'a'\`→\`'b'\`, ..., \`'z'\`→\`'a'\`).
- If \`direction\` is \`0\`, shift **backward** by one (\`'b'\`→\`'a'\`, ..., \`'a'\`→\`'z'\`).

Apply all queries in order. Return the resulting string.`,
  constraints: [
    '`1 <= s.length <= 5 × 10^4`',
    '`1 <= queries.length <= 5 × 10^4`',
    '`0 <= left <= right < s.length`',
    '`0 <= direction <= 1`',
  ],
  examples: [
    {
      input: 's = "abc", queries = [[0,1,0],[1,2,1],[0,2,1]]',
      output: '"ace"',
      explanation: 'Start: "abc". [0,1,0]: "zac". [1,2,1]: "zbd". [0,2,1]: "ace".',
    },
    {
      input: 's = "dzz", queries = [[0,0,0],[1,2,1]]',
      output: '"caa"',
      explanation: '[0,0,0]: "d"→"c" → "czz". [1,2,1]: both "z"→"a" → "caa".',
    },
  ],
  functionName: 'shiftingLetters',
  params: ['s', 'queries'],
  starterCode: {
    javascript: `/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {string}
 */
function shiftingLetters(s, queries) {

}`,
    typescript: "function shiftingLetters(s: string, queries: number[][]): string {string} s\n * @param {number[][]} queries\n * @return {string}\n */\nfunction shiftingLetters(s, queries) {\n\n}",

    python: `def shiftingLetters(s: str, queries: list[list[int]]) -> str:
    pass`,
  },
  hints: [
    'Applying each query naively is O(n) per query → O(n·q) total. Use a difference array to accumulate all shifts in O(n + q).',
    'Build `diff[0..n]`. For a forward query [l, r]: diff[l]++ and diff[r+1]--. For a backward query: diff[l]-- and diff[r+1]++. Take the prefix sum of diff to get net shift at each position.',
    'Apply net shift at each position with `((netShift % 26) + 26) % 26` to handle negative values. Add the shifted value to the char code and wrap at "z".',
  ],
  visibleTests: [
    { args: ['abc', [[0, 1, 0], [1, 2, 1], [0, 2, 1]]], expected: 'ace' },
    { args: ['dzz', [[0, 0, 0], [1, 2, 1]]], expected: 'caa' },
  ],
  hiddenTests: [
    { args: ['a', [[0, 0, 1]]], expected: 'b' },
    { args: ['z', [[0, 0, 1]]], expected: 'a' },
    { args: ['az', [[0, 0, 0], [1, 1, 0]]], expected: 'zy' },
    { args: ['xyzabc', [[0, 2, 1], [3, 5, 0]]], expected: 'yzazab' },
    { args: ['abc', [[0, 2, 1], [0, 2, 0]]], expected: 'abc' },
  ],
};
