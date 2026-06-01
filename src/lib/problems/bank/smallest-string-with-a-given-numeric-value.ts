import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-string-with-a-given-numeric-value',
  title: 'Smallest String With A Given Numeric Value',
  difficulty: 'medium',
  tags: ['strings', 'math'],
  description: `The **numeric value** of a **lowercase character** is defined as its position (\`1\`-indexed) in the alphabet: \`'a'\` has value \`1\`, \`'b'\` has value \`2\`, ..., \`'z'\` has value \`26\`.

The **numeric value** of a string is the sum of the numeric values of each character.

Given two integers \`n\` and \`k\`, return *the **lexicographically smallest** string of length* \`n\` *with **numeric value** equal to* \`k\`.

Note that the characters in a string must be 'a' to 'z'.`,
  constraints: [
    '1 <= n <= 10^5',
    'n <= k <= 26 * n',
  ],
  examples: [
    {
      input: 'n = 3, k = 27',
      output: '"aay"',
      explanation: 'a(1) + a(1) + y(25) = 27. "aay" is the lexicographically smallest.',
    },
    {
      input: 'n = 5, k = 73',
      output: '"aaszz"',
      explanation: 'a(1)+a(1)+s(19)+z(26)+z(26) = 73.',
    },
  ],
  hints: [
    'Level 1: To get the lexicographically smallest string, fill positions from left to right with the smallest character possible (\'a\'=1), saving budget for later positions.',
    'Level 2: Equivalently, build from RIGHT to LEFT: at position i (counting from the right, 0-indexed), assign value = min(26, k - i) since i positions to its left each need at least 1. This greedily uses the largest value at each rightmost position.',
    'Level 3: Convert each value v to its character with String.fromCharCode(96 + v) (96 + 1 = 97 = \'a\'). Fill the character array from right to left, then return the joined string. O(n) time.',
  ],
  functionName: 'getSmallestString',
  params: ['n', 'k'],
  starterCode: {
    javascript: `function getSmallestString(n, k) {

}`,
    typescript: `function getSmallestString(n: number, k: number): string {

}`,
    python: `def getSmallestString(n, k):
    pass`,
  },
  visibleTests: [
    { args: [3, 27], expected: 'aay' },
    { args: [5, 73], expected: 'aaszz' },
  ],
  hiddenTests: [
    { args: [1, 1], expected: 'a' },
    { args: [1, 26], expected: 'z' },
    { args: [2, 28], expected: 'bz' },
    { args: [3, 3], expected: 'aaa' },
    { args: [3, 78], expected: 'zzz' },
    { args: [4, 55], expected: 'abzz' },
    { args: [2, 2], expected: 'aa' },
    { args: [3, 52], expected: 'ayz' },
  ],
};
