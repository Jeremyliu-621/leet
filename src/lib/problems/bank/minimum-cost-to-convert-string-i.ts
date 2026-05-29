import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-convert-string-i',
  title: 'Minimum Cost to Convert String I',
  difficulty: 'medium',
  tags: ['strings', 'shortest-path'],
  description: `You are given two 0-indexed strings \`original\` and \`target\`, both of length \`n\`. You are also given two 0-indexed character arrays \`originalChar\` and \`changedChar\`, and an integer array \`cost\`, where \`cost[i]\` represents the cost of changing \`originalChar[i]\` to \`changedChar[i]\`.

You start with the string \`original\` and in one operation you can change any character \`c\` in \`original\` to \`changedChar[j]\` if there exists an index \`j\` such that \`cost[j] > 0\`, \`originalChar[j] == c\`, and \`changedChar[j] != c\`. You can apply any number of operations, transitively chaining conversions.

Return the **minimum cost** to convert \`original\` to \`target\` using any number of operations. If it is impossible, return \`-1\`.`,
  constraints: [
    '1 <= original.length == target.length <= 10^5',
    'original and target consist of lowercase English letters',
    '1 <= originalChar.length == changedChar.length == cost.length <= 2000',
    'originalChar[i] and changedChar[i] are lowercase English letters',
    '1 <= cost[i] <= 10^6',
  ],
  examples: [
    {
      input: 'original = "abcd", target = "acbe", originalChar = ["a","b","c","c","e","d"], changedChar = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]',
      output: '28',
      explanation: 'a→b costs 2, b→c costs 5, c→e costs 1, d→e costs 20. Convert a→b (2), b→c (5), c→e (1), d→e (20). Total 28.',
    },
    {
      input: 'original = "aaaa", target = "bbbb", originalChar = ["a","c"], changedChar = ["c","b"], cost = [1,2]',
      output: '12',
      explanation: 'a→c costs 1, c→b costs 2, so a→b costs 3. 4 letters × 3 = 12.',
    },
  ],
  hints: [
    'Run Floyd-Warshall on the 26 lowercase characters to find min cost to convert any char to any other.',
    'Initialize dist[i][i]=0, dist[originalChar[i]][changedChar[i]] = min(dist[...][...], cost[i]) for each conversion.',
    'After Floyd-Warshall, sum dist[original[i]][target[i]] for all positions. If any is Infinity, return -1.',
  ],
  functionName: 'minimumCostConvertString',
  params: ['original', 'target', 'originalChar', 'changedChar', 'cost'],
  starterCode: {
    javascript: `function minimumCostConvertString(original, target, originalChar, changedChar, cost) {
  // Floyd-Warshall on 26 chars, then sum per-position costs
}`,
    typescript: `function minimumCostConvertString(original: string, target: string, originalChar: string[], changedChar: string[], cost: number[]): number {
  // Floyd-Warshall on 26 chars, then sum per-position costs
}`,
    python: `def minimumCostConvertString(original, target, originalChar, changedChar, cost):
    # Floyd-Warshall on 26 chars, then sum per-position costs
    pass`,
  },
  visibleTests: [
    { args: ['abcd', 'acbe', ['a','b','c','c','e','d'], ['b','c','b','e','b','e'], [2,5,5,1,2,20]], expected: 28 },
    { args: ['aaaa', 'bbbb', ['a','c'], ['c','b'], [1,2]], expected: 12 },
  ],
  hiddenTests: [
    { args: ['abcd', 'abcd', [], [], []], expected: 0 },
    { args: ['a', 'z', ['a'], ['b'], [1]], expected: -1 },
    { args: ['ab', 'ba', ['a','b'], ['b','a'], [3,5]], expected: 8 },
    { args: ['aaa', 'bbb', ['a','a'], ['b','c'], [1,100]], expected: 3 },
    { args: ['abc', 'cba', ['a','b','c','b'], ['b','c','b','a'], [1,1,1,1]], expected: 4 },
  ],
};
