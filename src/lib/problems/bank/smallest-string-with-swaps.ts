import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-string-with-swaps',
  title: 'Smallest String With Swaps',
  difficulty: 'medium',
  tags: ['union-find', 'strings', 'hash-map'],
  description: `You are given a string \`s\`, and an array of pairs of indices in the string \`pairs\` where \`pairs[i] = [a, b]\` indicates 2 indices (0-indexed) of the string.

You can swap the characters at any pair of indices in the given \`pairs\` **any number of times**.

Return the **lexicographically smallest string** that \`s\` can be changed to after using the swaps.`,
  constraints: [
    '0 <= s.length <= 10^5',
    '0 <= pairs.length <= 10^5',
    '0 <= pairs[i][0], pairs[i][1] < s.length',
    's only contains lower case English letters',
  ],
  examples: [
    {
      input: 's = "dcab", pairs = [[0,3],[1,2]]',
      output: '"bacd"',
      explanation: 'Swap s[0] and s[3]: "bcad". Swap s[1] and s[2]: "bacd".',
    },
    {
      input: 's = "dcab", pairs = [[0,3],[1,2],[0,2]]',
      output: '"abcd"',
      explanation: 'Indices 0,1,2,3 are all in the same component, so we can sort them all.',
    },
    {
      input: 's = "cba", pairs = [[0,1],[1,2]]',
      output: '"abc"',
      explanation: 'All indices are connected, so sort to get "abc".',
    },
  ],
  hints: [
    'Use **Union-Find** to group indices that are transitively connected by the swap pairs. Indices in the same component can be arranged in any order.',
    'For each connected component, collect all character indices (sorted), collect all characters at those indices, sort the characters, and assign them back in index order.',
    'This works because if index a and b are in the same component, you can sort all characters among them by applying swaps repeatedly — the entire component can be rearranged freely.',
  ],
  functionName: 'smallestStringWithSwaps',
  params: ['s', 'pairs'],
  starterCode: {
    javascript: 'function smallestStringWithSwaps(s, pairs) {\n  \n}\n',
    typescript: "function smallestStringWithSwaps(s: string, pairs: number[][]): string {\n  \n}",

    python: 'def smallestStringWithSwaps(s, pairs):\n    pass\n',
  },
  visibleTests: [
    { args: ['dcab', [[0, 3], [1, 2]]], expected: 'bacd' },
    { args: ['dcab', [[0, 3], [1, 2], [0, 2]]], expected: 'abcd' },
    { args: ['cba', [[0, 1], [1, 2]]], expected: 'abc' },
  ],
  hiddenTests: [
    { args: ['a', []], expected: 'a' },
    { args: ['ba', [[0, 1]]], expected: 'ab' },
    { args: ['dcab', []], expected: 'dcab' },
    { args: ['zxy', [[0, 2]]], expected: 'yxz' },
    { args: ['pwqlef', [[3, 5], [1, 2], [0, 4]]], expected: 'eqwfpl' },
  ],
};
