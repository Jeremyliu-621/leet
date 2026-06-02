import type { Problem } from '../types';

export const problem: Problem = {
  id: 'graph-valid-tree',
  title: 'Graph Valid Tree',
  difficulty: 'medium',
  tags: ['graph'],
  description: `You have \`n\` nodes labeled from \`0\` to \`n - 1\` and a list of undirected \`edges\` where \`edges[i] = [a, b]\` indicates that there is an undirected edge between nodes \`a\` and \`b\`.

Return \`true\` if these edges make up a valid tree, and \`false\` otherwise.

A valid tree has **no cycles** and all nodes are **connected**.`,
  constraints: [
    '`1 <= n <= 2000`',
    '`0 <= edges.length <= 5000`',
    '`edges[i].length == 2`',
    '`0 <= a, b < n`',
    '`a != b`',
    'No self-loops or repeated edges',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]',
      output: 'true',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]',
      output: 'false',
      explanation: 'Edge [1,3] creates a cycle.',
    },
  ],
  hints: [
    'A graph is a valid tree if and only if it has exactly `n - 1` edges AND is fully connected (no cycles + connected are equivalent to having exactly n-1 edges in an undirected graph).',
    'Use Union-Find: for each edge, if the two nodes already share the same root, there is a cycle. Otherwise, union them. After processing all edges, verify that exactly one connected component exists.',
    'Alternatively, run DFS/BFS from node 0. The graph is a valid tree if all `n` nodes are visited and no back-edges are encountered.',
  ],
  functionName: 'validTree',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function validTree(n, edges) {
  if (edges.length !== n - 1) return false;
  const parent = Array.from({length: n}, (_, i) => i);
  const find = (x) => x === parent[x] ? x : (parent[x] = find(parent[x]));
  for (const [a, b] of edges) {
    const pa = find(a), pb = find(b);
    if (pa === pb) return false;
    parent[pa] = pb;
  }
  return true;
}`,
    typescript: `function validTree(n: number, edges: number[][]): boolean {
  if (edges.length !== n - 1) return false;
  const parent = Array.from({length: n}, (_, i) => i);
  const find = (x: number): number => x === parent[x] ? x : (parent[x] = find(parent[x]));
  for (const [a, b] of edges) {
    const pa = find(a), pb = find(b);
    if (pa === pb) return false;
    parent[pa] = pb;
  }
  return true;
}`,
    python: `def validTree(n, edges):
    if len(edges) != n - 1: return False
    parent = list(range(n))
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    for a, b in edges:
        pa, pb = find(a), find(b)
        if pa == pb: return False
        parent[pa] = pb
    return True`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [0, 2], [0, 3], [1, 4]]], expected: true },
    { args: [5, [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]], expected: false },
    { args: [1, []], expected: true },
  ],
  hiddenTests: [
    { args: [2, []], expected: false },
    { args: [3, [[0, 1], [1, 2], [2, 0]]], expected: false },
    { args: [4, [[0, 1], [2, 3]]], expected: false },
  ],
};
