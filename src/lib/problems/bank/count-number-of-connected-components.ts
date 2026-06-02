import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-connected-components',
  title: 'Number of Connected Components in an Undirected Graph',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `You have a graph of \`n\` nodes. You are given an integer \`n\` and an array \`edges\` where \`edges[i] = [ai, bi]\` indicates that there is an edge between nodes \`ai\` and \`bi\` in the graph.

Return the **number of connected components** in the graph.`,
  constraints: [
    '1 <= n <= 2000',
    '1 <= edges.length <= 5000',
    'edges[i].length == 2',
    '0 <= ai <= bi < n',
    'ai != bi',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
      output: '2',
      explanation: 'Components are {0,1,2} and {3,4}.',
    },
    {
      input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
      output: '1',
      explanation: 'All nodes are connected.',
    },
  ],
  hints: [
    'Build an adjacency list from the edges, then BFS/DFS from each unvisited node — each traversal discovers one component.',
    'Alternatively, use Union-Find (DSU): start with n components, then for each edge merge the two endpoints. Each successful merge decrements the component count.',
    'Union-Find with path compression: `find(x) = parent[x] === x ? x : (parent[x] = find(parent[x]))`. Union: if `find(a) !== find(b)`, set `parent[find(a)] = find(b)` and decrement the count.',
  ],
  functionName: 'countComponents',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countComponents(n, edges) {
  const parent = Array.from({length: n}, (_, i) => i);
  const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
  let count = n;
  for (const [a, b] of edges) {
    const pa = find(a), pb = find(b);
    if (pa !== pb) { parent[pa] = pb; count--; }
  }
  return count;
}`,
    typescript: `function countComponents(n: number, edges: number[][]): number {
  const parent = Array.from({length: n}, (_, i) => i);
  const find = (x: number): number => parent[x] === x ? x : (parent[x] = find(parent[x]!));
  let count = n;
  for (const [a, b] of edges) {
    const pa = find(a!), pb = find(b!);
    if (pa !== pb) { parent[pa] = pb; count--; }
  }
  return count;
}`,
    python: `def countComponents(n, edges):
    parent = list(range(n))
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    count = n
    for a, b in edges:
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb
            count -= 1
    return count`,
  },
  visibleTests: [
    { args: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: 1 },
    { args: [5, []], expected: 5 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [3, [[0, 1], [0, 2]]], expected: 1 },
    { args: [4, [[0, 1], [2, 3]]], expected: 2 },
    { args: [6, [[0, 1], [1, 2], [2, 3], [4, 5]]], expected: 2 },
    { args: [5, [[0, 1], [0, 2], [0, 3], [0, 4]]], expected: 1 },
    { args: [4, [[1, 2], [2, 3]]], expected: 2 },
  ],
};
