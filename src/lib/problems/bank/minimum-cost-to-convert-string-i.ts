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
  const INF = Infinity;
  const dist = Array.from({length: 26}, (_, i) => { const r = new Array(26).fill(INF); r[i] = 0; return r; });
  for (let k = 0; k < originalChar.length; k++) {
    const u = originalChar[k].charCodeAt(0) - 97, v = changedChar[k].charCodeAt(0) - 97;
    if (cost[k] < dist[u][v]) dist[u][v] = cost[k];
  }
  for (let k=0;k<26;k++) for (let i=0;i<26;i++) for (let j=0;j<26;j++)
    if (dist[i][k]<INF&&dist[k][j]<INF&&dist[i][k]+dist[k][j]<dist[i][j]) dist[i][j]=dist[i][k]+dist[k][j];
  let total = 0;
  for (let i = 0; i < original.length; i++) {
    const u = original.charCodeAt(i) - 97, v = target.charCodeAt(i) - 97;
    if (u !== v) { if (dist[u][v] === INF) return -1; total += dist[u][v]; }
  }
  return total;
}`,
    typescript: `function minimumCostConvertString(original: string, target: string, originalChar: string[], changedChar: string[], cost: number[]): number {
  const INF = Infinity;
  const dist = Array.from({length: 26}, (_, i) => { const r = new Array<number>(26).fill(INF); r[i] = 0; return r; });
  for (let k = 0; k < originalChar.length; k++) {
    const u = originalChar[k]!.charCodeAt(0) - 97, v = changedChar[k]!.charCodeAt(0) - 97;
    if (cost[k]! < dist[u]![v]!) dist[u]![v] = cost[k]!;
  }
  for (let k=0;k<26;k++) for (let i=0;i<26;i++) for (let j=0;j<26;j++)
    if (dist[i]![k]!<INF&&dist[k]![j]!<INF&&dist[i]![k]!+dist[k]![j]!<dist[i]![j]!) dist[i]![j]=dist[i]![k]!+dist[k]![j]!;
  let total = 0;
  for (let i = 0; i < original.length; i++) {
    const u = original.charCodeAt(i) - 97, v = target.charCodeAt(i) - 97;
    if (u !== v) { if (dist[u]![v]! === INF) return -1; total += dist[u]![v]!; }
  }
  return total;
}`,
    python: `def minimumCostConvertString(original, target, originalChar, changedChar, cost):
    if hasattr(original, 'to_py'): original = str(original)
    if hasattr(target, 'to_py'): target = str(target)
    if hasattr(originalChar, 'to_py'): originalChar = [str(x) for x in originalChar.to_py()]
    if hasattr(changedChar, 'to_py'): changedChar = [str(x) for x in changedChar.to_py()]
    if hasattr(cost, 'to_py'): cost = list(cost.to_py())
    INF = float('inf')
    dist = [[INF] * 26 for _ in range(26)]
    for i in range(26): dist[i][i] = 0
    for k in range(len(originalChar)):
        u = ord(originalChar[k]) - 97; v = ord(changedChar[k]) - 97
        if cost[k] < dist[u][v]: dist[u][v] = cost[k]
    for k in range(26):
        for i in range(26):
            for j in range(26):
                if dist[i][k] < INF and dist[k][j] < INF and dist[i][k] + dist[k][j] < dist[i][j]:
                    dist[i][j] = dist[i][k] + dist[k][j]
    total = 0
    for i in range(len(original)):
        u = ord(original[i]) - 97; v = ord(target[i]) - 97
        if u != v:
            if dist[u][v] == INF: return -1
            total += dist[u][v]
    return total`,
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
