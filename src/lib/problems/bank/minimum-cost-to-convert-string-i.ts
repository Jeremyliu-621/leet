import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-convert-string-i',
  title: 'Minimum Cost to Convert String I',
  difficulty: 'medium',
  tags: ['graph', 'strings'],
  description: `You are given two **0-indexed** strings \`source\` and \`target\`, both of length \`n\` and consisting of **lowercase** English characters. You are also given two **0-indexed** character arrays \`original\` and \`changed\`, and an integer array \`cost\`, where \`cost[i]\` represents the cost of changing the character \`original[i]\` to character \`changed[i]\`.

You start with the string \`source\`. In one operation, you can pick a character at some index \`i\` of the current string and change it to the character at \`changed[j]\` if \`original[j] == source[i]\`, with a cost of \`cost[j]\`. You can apply multiple operations, each on different indices.

Return the **minimum** cost to convert the string \`source\` to \`target\` using **any** number of operations. If it is impossible to convert, return \`-1\`.

**Note:** There may be indices where \`source[i] == target[i]\`; no operation is needed for those.`,
  constraints: [
    '1 <= source.length == target.length <= 10^5',
    'source, target consist of lowercase English letters',
    '1 <= cost.length == original.length == changed.length <= 2000',
    'original[i], changed[i] are lowercase English letters',
    '1 <= cost[i] <= 10^6',
  ],
  examples: [
    {
      input: 'source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]',
      output: '28',
      explanation: 'Convert \'b\'→\'c\' (cost 5), \'c\'→\'e\' via \'c\'→\'b\'→\'e\' (cost 5+2=7+... use c→e directly cost 1+e→b cost 2? Actually use shortest paths). Total cost is 28.',
    },
    {
      input: 'source = "aaaa", target = "bbbb", original = ["a","c"], changed = ["c","b"], cost = [1,2]',
      output: '12',
      explanation: '\'a\'→\'c\'→\'b\' costs 1+2=3 per character, 4 characters total = 12.',
    },
  ],
  hints: [
    'Model the character conversions as a directed weighted graph where nodes are the 26 letters.',
    'Run Floyd-Warshall to find the shortest conversion cost between every pair of characters.',
    'For each position where source[i] != target[i], look up the precomputed minimum cost; sum them, or return -1 if any is unreachable.',
  ],
  functionName: 'minimumCost',
  params: ['source', 'target', 'original', 'changed', 'cost'],
  starterCode: {
    javascript: `function minimumCost(source, target, original, changed, cost) {

}`,
    python: `def minimumCost(source, target, original, changed, cost):
    pass`,
  },
  visibleTests: [
    {
      args: ['abcd', 'acbe', ['a', 'b', 'c', 'c', 'e', 'd'], ['b', 'c', 'b', 'e', 'b', 'e'], [2, 5, 5, 1, 2, 20]],
      expected: 28,
    },
    {
      args: ['aaaa', 'bbbb', ['a', 'c'], ['c', 'b'], [1, 2]],
      expected: 12,
    },
  ],
  hiddenTests: [
    {
      args: ['abcd', 'abcd', ['a'], ['b'], [1]],
      expected: 0,
    },
    {
      args: ['a', 'b', ['a'], ['c'], [1]],
      expected: -1,
    },
    {
      args: ['abc', 'bca', ['a', 'b', 'c'], ['b', 'c', 'a'], [1, 2, 3]],
      expected: 6,
    },
    {
      args: ['a', 'b', ['a', 'a'], ['b', 'c'], [10, 1]],
      expected: 10,
    },
    {
      args: ['aa', 'bb', ['a'], ['b'], [5]],
      expected: 10,
    },
    {
      args: ['xyz', 'xyz', ['x'], ['y'], [1]],
      expected: 0,
    },
  ],
};
