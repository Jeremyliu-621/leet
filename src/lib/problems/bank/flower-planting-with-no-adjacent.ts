import type { Problem } from '../types';

export const problem: Problem = {
  id: 'flower-planting-with-no-adjacent',
  title: 'Flower Planting With No Adjacent',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You have \`n\` gardens, labeled from \`1\` to \`n\`, and an array \`paths\` where \`paths[i] = [xi, yi]\` describes a bidirectional path between garden \`xi\` and garden \`yi\`. Each garden has **at most 3** paths coming into or leaving it.

Your task is to choose one of the 4 flower types for each garden such that, for any two gardens connected by a path, they have different types of flowers.

Return **any** such a choice as an array \`answer\`, where \`answer[i]\` is the type of flower planted in the \`(i+1)\`th garden. The flower types are denoted \`1\`, \`2\`, \`3\`, or \`4\`. It is guaranteed an answer exists.`,
  constraints: [
    '`1 <= n <= 10^4`',
    '`0 <= paths.length <= 2 * 10^4`',
    '`paths[i].length == 2`',
    '`1 <= xi, yi <= n`',
    '`xi != yi`',
    'Every garden has **at most 3** paths coming into or leaving it.',
  ],
  examples: [
    {
      input: 'n = 3, paths = [[1,2],[2,3],[3,1]]',
      output: '[1,2,3]',
      explanation: 'Gardens 1,2,3 form a triangle; each gets a different flower. Many valid answers exist.',
    },
    {
      input: 'n = 4, paths = [[1,2],[3,4]]',
      output: '[1,2,1,2]',
      explanation: 'Two disconnected edges. Adjacent gardens 1-2 and 3-4 get different flowers.',
    },
  ],
  hints: [
    'Build an adjacency list for all gardens.',
    'For each garden (in order 1 to n), find the set of flower types used by its already-colored neighbors.',
    'Assign the smallest flower type (1-4) not used by any neighbor. Since each garden has at most 3 neighbors, at least one of the 4 types is always free.',
  ],
  functionName: 'gardenNoAdj',
  params: ['n', 'paths'],
  starterCode: {
    javascript: `function gardenNoAdj(n, paths) {
  const adj = Array.from({length: n + 1}, () => []);
  for (const [a, b] of paths) { adj[a].push(b); adj[b].push(a); }
  const color = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const used = new Set(adj[i].map(j => color[j]));
    for (let c = 1; c <= 4; c++) { if (!used.has(c)) { color[i] = c; break; } }
  }
  return color.slice(1);
}`,
    typescript: `function gardenNoAdj(n: number, paths: number[][]): number[] {
  const adj: number[][] = Array.from({length: n + 1}, () => []);
  for (const [a, b] of paths) { adj[a].push(b); adj[b].push(a); }
  const color = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    const used = new Set(adj[i].map(j => color[j]));
    for (let c = 1; c <= 4; c++) { if (!used.has(c)) { color[i] = c; break; } }
  }
  return color.slice(1);
}`,
    python: `def gardenNoAdj(n, paths):
    adj = [[] for _ in range(n + 1)]
    for a, b in paths: adj[a].append(b); adj[b].append(a)
    color = [0] * (n + 1)
    for i in range(1, n + 1):
        used = {color[j] for j in adj[i]}
        for c in range(1, 5):
            if c not in used: color[i] = c; break
    return color[1:]`,
  },
  visibleTests: [
    { args: [3, [[1, 2], [2, 3], [3, 1]]], expected: [1, 2, 3] },
    { args: [4, [[1, 2], [3, 4]]], expected: [1, 2, 1, 2] },
  ],
  hiddenTests: [
    { args: [1, []], expected: [1] },
    { args: [2, [[1, 2]]], expected: [1, 2] },
    { args: [4, [[1, 2], [2, 3], [3, 4], [4, 1]]], expected: [1, 2, 1, 2] },
    { args: [4, [[1, 2], [1, 3], [1, 4]]], expected: [1, 2, 2, 2] },
    { args: [5, [[1, 2], [2, 3], [3, 4], [4, 5]]], expected: [1, 2, 1, 2, 1] },
  ],
};
