import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-complete-components',
  title: 'Count Complete Components',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `You are given an integer \`n\`. There is an **undirected** graph with \`n\` vertices, numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\` where \`edges[i] = [a_i, b_i]\` denotes that there exists an **undirected** edge connecting vertices \`a_i\` and \`b_i\`.

Return *the number of **complete connected components** of the graph*.

A **connected component** is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.

A connected component is said to be **complete** if there exists an edge between every pair of its vertices.`,
  constraints: [
    '1 <= n <= 50',
    '0 <= edges.length <= n * (n - 1) / 2',
    'edges[i].length == 2',
    '0 <= a_i, b_i <= n - 1',
    'a_i != b_i',
    'There are no repeated edges.',
  ],
  examples: [
    {
      input: 'n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]',
      output: '3',
      explanation:
        'Component {0,1,2}: 3 nodes and 3 edges = 3*(3-1)/2 = 3 — complete. Component {3,4}: 2 nodes and 1 edge = 2*(2-1)/2 = 1 — complete. Component {5}: 1 node, 0 edges — complete. Total = 3.',
    },
    {
      input: 'n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]',
      output: '1',
      explanation:
        'Component {0,1,2} has 3 nodes and 3 edges — complete. Component {3,4,5} has 3 nodes and 2 edges — not complete (missing edge 4-5). Only 1 complete component.',
    },
  ],
  hints: [
    'Find all connected components using Union-Find or BFS/DFS.',
    'A component with k nodes is complete iff it has exactly k*(k-1)/2 edges.',
    'Track both node count and edge count per component.',
  ],
  functionName: 'countCompleteComponents',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countCompleteComponents(n, edges) {
  const parent = Array.from({length: n}, (_, i) => i);
  const size = new Array(n).fill(1);
  const edgeCnt = new Array(n).fill(0);
  const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
  for (const [a, b] of edges) {
    const pa = find(a), pb = find(b);
    if (pa !== pb) {
      parent[pa] = pb;
      size[pb] += size[pa];
      edgeCnt[pb] += edgeCnt[pa];
    }
    edgeCnt[find(b)]++;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) {
      const k = size[i];
      if (edgeCnt[i] === k * (k - 1) / 2) count++;
    }
  }
  return count;
}`,
    typescript: `function countCompleteComponents(n: number, edges: number[][]): number {
  const parent = Array.from({length: n}, (_, i) => i);
  const size = new Array(n).fill(1);
  const edgeCnt = new Array(n).fill(0);
  const find = (x: number): number => parent[x] === x ? x : (parent[x] = find(parent[x]!));
  for (const [a, b] of edges) {
    const pa = find(a!), pb = find(b!);
    if (pa !== pb) {
      parent[pa] = pb;
      size[pb]! += size[pa]!;
      edgeCnt[pb]! += edgeCnt[pa]!;
    }
    edgeCnt[find(b!)]!++;
  }
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) {
      const k = size[i]!;
      if (edgeCnt[i] === k * (k - 1) / 2) count++;
    }
  }
  return count;
}`,
    python: `def countCompleteComponents(n, edges):
    parent = list(range(n))
    size = [1] * n
    edge_cnt = [0] * n
    def find(x):
        while parent[x] != x:
            parent[x] = parent[parent[x]]
            x = parent[x]
        return x
    for a, b in edges:
        pa, pb = find(a), find(b)
        if pa != pb:
            parent[pa] = pb
            size[pb] += size[pa]
            edge_cnt[pb] += edge_cnt[pa]
        edge_cnt[find(b)] += 1
    return sum(
        1 for i in range(n)
        if find(i) == i and edge_cnt[i] == size[i] * (size[i] - 1) // 2
    )`,
  },
  visibleTests: [
    { args: [6, [[0,1],[0,2],[1,2],[3,4]]], expected: 3 },
    { args: [6, [[0,1],[0,2],[1,2],[3,4],[3,5]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [3, []], expected: 3 },
    { args: [3, [[0,1],[1,2],[0,2]]], expected: 1 },
    { args: [4, [[0,1],[2,3]]], expected: 2 },
    { args: [5, [[0,1],[1,2],[2,3],[3,4],[0,4],[0,2],[1,3],[1,4]]], expected: 0 },
    { args: [4, [[0,1],[1,2],[0,2],[1,3]]], expected: 0 },
    { args: [2, [[0,1]]], expected: 1 },
  ],
};
