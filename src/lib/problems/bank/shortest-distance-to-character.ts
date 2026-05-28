import type { Problem } from '../types';

export const problem: Problem = {
  id: 'shortest-distance-to-character',
  title: 'Shortest Distance to a Character',
  difficulty: 'easy',
  tags: ['arrays', 'two-pointers'],
  description: `Given a string \`s\` and a character \`c\` that appears in \`s\` at least once, return an array of integers \`answer\` where \`answer[i]\` is the **distance** from index \`i\` to the **closest** occurrence of \`c\` in \`s\`.

The **distance** between two indices \`i\` and \`j\` is \`|i - j|\`.`,
  constraints: [
    '1 <= s.length <= 10^4',
    's[i] and c are lowercase English letters.',
    'c appears at least once in s.',
  ],
  examples: [
    {
      input: 's = "loveleetcode", c = "e"',
      output: '[3,2,1,0,1,0,0,1,2,2,1,0]',
      explanation:
        '"e" appears at indices 3, 5, 6, 11. The distance array gives the shortest distance from each position to any "e".',
    },
    {
      input: 's = "aaab", c = "b"',
      output: '[3,2,1,0]',
      explanation: '"b" is only at index 3. Distances are 3, 2, 1, 0.',
    },
  ],
  hints: [
    'Use two passes. In the forward pass, track the most recently seen position of `c` and update distances.',
    'In the backward pass, do the same from right to left, taking the minimum of the current answer and the distance from the right.',
    'Alternatively, record all positions of `c` first, then for each index binary-search or linearly scan to find the nearest.',
  ],
  functionName: 'shortestToChar',
  params: ['s', 'c'],
  starterCode: {
    javascript: 'function shortestToChar(s, c) {\n  // your code here\n}\n',
    python: 'def shortestToChar(s, c):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: ['loveleetcode', 'e'], expected: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0] },
    { args: ['aaab', 'b'], expected: [3, 2, 1, 0] },
  ],
  hiddenTests: [
    { args: ['a', 'a'], expected: [0] },
    { args: ['ab', 'b'], expected: [1, 0] },
    { args: ['ba', 'b'], expected: [0, 1] },
    { args: ['aaba', 'b'], expected: [2, 1, 0, 1] },
    { args: ['abab', 'a'], expected: [0, 1, 0, 1] },
    { args: ['cba', 'c'], expected: [0, 1, 2] },
  ],
};
