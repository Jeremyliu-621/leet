import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-length-of-the-longest-common-prefix',
  title: 'Find the Length of the Longest Common Prefix',
  difficulty: 'medium',
  tags: ['arrays', 'strings', 'hash-map'],
  description: `You are given two arrays with **positive** integers \`arr1\` and \`arr2\`.

A **prefix** of a positive integer is an integer formed by one or more of its digits, starting from its most significant digit. For example, \`123\` is a prefix of the integer \`12345\`, while \`234\` is **not**.

A **common prefix** of two integers \`a\` and \`b\` is an integer \`c\`, such that \`c\` is a prefix of both \`a\` and \`b\`. For example, \`5655359\` and \`56554\` have common prefixes \`565\` and \`5655\`, while \`1223\` and \`43456\` do **not** have a common prefix.

You need to find the **length** of the **longest common prefix** between all pairs of integers \`(x, y)\` such that \`x\` belongs to \`arr1\` and \`y\` belongs to \`arr2\`.

Return the length of the **longest** common prefix among all pairs. If no common prefix exists among them, return \`0\`.`,
  constraints: [
    '1 <= arr1.length, arr2.length <= 5 * 10^4',
    '1 <= arr1[i], arr2[i] <= 10^8',
  ],
  examples: [
    {
      input: 'arr1 = [1,10,100], arr2 = [1000]',
      output: '3',
      explanation: 'The longest common prefix pair is (100, 1000) with common prefix "100" (length 3). Or (1, 1000): length 1, (10, 1000): length 2, (100, 1000): length 3.',
    },
    {
      input: 'arr1 = [1,2,3], arr2 = [4,4,4]',
      output: '0',
      explanation: 'No integer in arr1 shares a prefix with any integer in arr2.',
    },
    {
      input: 'arr1 = [12,34], arr2 = [123,345]',
      output: '2',
      explanation: '12 and 123 share prefix "12" (length 2). 34 and 345 share prefix "34" (length 2). Maximum is 2.',
    },
  ],
  hints: [
    'For each number in arr1, store all its string prefixes in a Set.',
    'For each number in arr2, generate all its string prefixes and check if any exist in the Set.',
    'Track the maximum length match found.',
  ],
  functionName: 'longestCommonPrefix',
  params: ['arr1', 'arr2'],
  starterCode: {
    javascript: `function longestCommonPrefix(arr1, arr2) {

}`,
    typescript: `function longestCommonPrefix(arr1: number[], arr2: number[]): number {

}`,
    python: `def longestCommonPrefix(arr1, arr2):
    pass`,
  },
  visibleTests: [
    { args: [[1, 10, 100], [1000]], expected: 3 },
    { args: [[1, 2, 3], [4, 4, 4]], expected: 0 },
    { args: [[12, 34], [123, 345]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: 1 },
    { args: [[100, 200], [100, 300]], expected: 3 },
    { args: [[5], [50]], expected: 1 },
    { args: [[99, 88], [999, 888]], expected: 2 },
    { args: [[1234], [12, 1234]], expected: 4 },
    { args: [[11, 22], [33, 44]], expected: 0 },
  ],
};
