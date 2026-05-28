import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-distance-to-a-character',
  title: 'Shortest Distance to a Character',
  difficulty: 'easy',
  tags: ['arrays', 'strings', 'two-pointers'],
  description: `Given a string \`s\` and a character \`c\` that occurs in \`s\`, return an array of integers \`answer\` where \`answer.length == s.length\` and \`answer[i]\` is the **distance** from index \`i\` to the **closest** occurrence of character \`c\` in \`s\`.

The **distance** between two indices \`i\` and \`j\` is \`|i - j|\`.`,
  constraints: [
    '`1 <= s.length <= 10^4`',
    '`s[i]` and `c` are lowercase English letters.',
    'It is guaranteed that `c` occurs at least once in `s`.',
  ],
  examples: [
    {
      input: 's = "loveleetcode", c = "e"',
      output: '[3,2,1,0,1,0,0,1,2,2,1,0]',
      explanation:
        "The character 'e' appears at indices 3, 5, 6, and 11. The closest 'e' to index 0 is at index 3, so answer[0] = 3.",
    },
    {
      input: 's = "aaba", c = "b"',
      output: '[2,1,0,1]',
      explanation: "The only 'b' is at index 2.",
    },
  ],
  hints: [
    'Make two passes over the string. In the first pass (left to right), for each index record the distance to the most recent occurrence of c seen so far.',
    'In the second pass (right to left), update each index with the minimum of its current value and the distance to the next occurrence of c to the right.',
    'This two-pass approach runs in O(n) time and O(n) space (for the output array).',
  ],
  functionName: 'shortestToChar',
  params: ['s', 'c'],
  starterCode: {
    javascript: `function shortestToChar(s, c) {

}`,
    python: `def shortestToChar(s, c):
    pass`,
  },
  visibleTests: [
    { args: ['loveleetcode', 'e'], expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0] },
    { args: ['aaba', 'b'], expected: [2, 1, 0, 1] },
    { args: ['a', 'a'], expected: [0] },
    { args: ['ab', 'a'], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: ['ab', 'b'], expected: [1, 0] },
    { args: ['aaa', 'a'], expected: [0, 0, 0] },
    { args: ['aba', 'b'], expected: [1, 0, 1] },
    { args: ['abcd', 'a'], expected: [0, 1, 2, 3] },
    { args: ['abcd', 'd'], expected: [3, 2, 1, 0] },
    { args: ['abcba', 'b'], expected: [1, 0, 1, 0, 1] },
  ],
};
