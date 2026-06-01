import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-to-convert-string-ii',
  title: 'Minimum Cost to Convert String II',
  difficulty: 'hard',
  tags: ['strings', 'graph', 'dynamic-programming'],
  description: `You are given two **0-indexed** strings \`source\` and \`target\`, both of length \`n\`. You are also given two **0-indexed** string arrays \`original\` and \`changed\`, and an integer array \`cost\`, where \`cost[i]\` represents the cost of changing the substring \`original[i]\` to the substring \`changed[i]\`.

You start with the string \`source\`. In one operation, you can pick a substring \`source[i..j]\` and if it equals some \`original[k]\`, replace it with \`changed[k]\`, paying cost \`cost[k]\`.

Your goal is to convert \`source\` to \`target\`. Return the **minimum total cost** required, or \`-1\` if it is impossible.

> **Note:** Unlike version I, the replacements are **substring-level** (not character-level), so the same position can only be covered by one replacement at a time.`,
  constraints: [
    '`1 <= source.length == target.length <= 1000`',
    '`source` and `target` consist only of lowercase English letters.',
    '`1 <= cost.length == original.length == changed.length <= 100`',
    '`1 <= original[i].length == changed[i].length <= source.length`',
    '`original[i]`, `changed[i]` consist only of lowercase English letters.',
    '`1 <= cost[i] <= 10^6`',
  ],
  examples: [
    {
      input: 'source = "abcd", target = "acbe", original = ["a","b","c","c","e","d"], changed = ["b","c","b","e","b","e"], cost = [2,5,5,1,2,20]',
      output: '28',
      explanation: 'Convert "abcd" → "acbe" using a series of single-character substitutions with total cost 28.',
    },
    {
      input: 'source = "abcdefgh", target = "acdeeghh", original = ["bcd","fgh","thh"], changed = ["cde","thh","ghh"], cost = [1,3,5]',
      output: '9',
      explanation: 'Apply bcd→cde (cost 1) and fgh→thh→ghh (cost 3+5=8). Total = 9.',
    },
    {
      input: 'source = "abcdefgh", target = "addddddd", original = ["bcd","defgh"], changed = ["ddd","ddddd"], cost = [100,1578]',
      output: '-1',
      explanation: 'No combination of replacements can convert source to target.',
    },
  ],
  hints: [
    'Collect all distinct substrings from `original` and `changed`. Assign each an integer ID. Build a weighted graph where edge (u→v) has minimum cost among all operations mapping original[i]→changed[i] with the same (u,v) IDs.',
    'Run Floyd-Warshall on this graph to find shortest (minimum-cost) paths between all pairs.',
    'Use DP: `dp[i]` = minimum cost to convert `source[0..i-1]` to `target[0..i-1]`. For each ending index `i`, try all lengths `len` of substrings: if `source[i-len..i-1]` and `target[i-len..i-1]` both have IDs and a path exists between them, update `dp[i] = min(dp[i], dp[i-len] + dist[sourceId][targetId])`. If `source[i-len..i-1] == target[i-len..i-1]`, also allow `dp[i] = dp[i-len]`.',
  ],
  functionName: 'minimumCost',
  params: ['source', 'target', 'original', 'changed', 'cost'],
  starterCode: {
    javascript: `function minimumCost(source, target, original, changed, cost) {

}`,
    typescript: `function minimumCost(source: string, target: string, original: string[], changed: string[], cost: number[]): number {

}`,
    python: `def minimumCost(source, target, original, changed, cost):
    pass`,
  },
  visibleTests: [
    {
      args: ['abcd', 'acbe', ['a','b','c','c','e','d'], ['b','c','b','e','b','e'], [2,5,5,1,2,20]],
      expected: 28,
    },
    {
      args: ['abcdefgh', 'acdeeghh', ['bcd','fgh','thh'], ['cde','thh','ghh'], [1,3,5]],
      expected: 9,
    },
    {
      args: ['abcdefgh', 'addddddd', ['bcd','defgh'], ['ddd','ddddd'], [100,1578]],
      expected: -1,
    },
  ],
  hiddenTests: [
    {
      args: ['aaaa', 'bbbb', ['a','aa','aaa','aaaa'], ['b','bb','bbb','bbbb'], [1,2,3,4]],
      expected: 4,
    },
    {
      args: ['abc', 'abc', ['a'], ['b'], [1]],
      expected: 0,
    },
    {
      args: ['abcd', 'efgh', ['abcd'], ['efgh'], [10]],
      expected: 10,
    },
    {
      args: ['ab', 'cd', ['a','b'], ['c','d'], [5,5]],
      expected: 10,
    },
  ],
};
