import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-the-number-of-complete-components',
  title: 'Count the Number of Complete Components',
  difficulty: 'medium',
  tags: ['graph', 'union-find'],
  description: `You are given an integer \`n\`. There is an **undirected** graph with \`n\` vertices, numbered from \`0\` to \`n - 1\`. You are given a 2D integer array \`edges\` where \`edges[i] = [a_i, b_i]\` denotes that there exists an undirected edge connecting vertices \`a_i\` and \`b_i\`.

A **complete component** is a connected component where every pair of its vertices is connected by an edge. Return the **number of complete components** in the graph.`,
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
      explanation: 'Components: {0,1,2} has 3 edges (K3 ✓), {3,4} has 1 edge (K2 ✓), {5} has 0 edges (K1 ✓). Total: 3.',
    },
    {
      input: 'n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]',
      output: '1',
      explanation: 'Component {0,1,2} is complete. Component {3,4,5} has 2 edges but needs 3 for K3. Only 1 complete component.',
    },
  ],
  hints: [
    'Use Union-Find (DSU) to group vertices into connected components.',
    'Track size and edge count per component root.',
    'A component of size k is complete if its edge count equals k*(k-1)/2.',
  ],
  functionName: 'countCompleteComponents',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function countCompleteComponents(n, edges) {
  const parent = Array.from({length: n}, (_, i) => i);
  const size = new Array(n).fill(1), edgeCnt = new Array(n).fill(0);
  const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));
  const union = (a, b) => {
    a = find(a); b = find(b);
    if (a === b) { edgeCnt[a]++; return; }
    if (size[a] < size[b]) [a, b] = [b, a];
    parent[b] = a; size[a] += size[b]; edgeCnt[a] += edgeCnt[b] + 1;
  };
  for (const [u, v] of edges) union(u, v);
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
  const size = new Array<number>(n).fill(1), edgeCnt = new Array<number>(n).fill(0);
  const find = (x: number): number => parent[x] === x ? x : (parent[x] = find(parent[x]!));
  const union = (a: number, b: number) => {
    a = find(a); b = find(b);
    if (a === b) { edgeCnt[a]!++; return; }
    if (size[a]! < size[b]!) [a, b] = [b, a];
    parent[b]! = a; size[a]! += size[b]!; edgeCnt[a]! += edgeCnt[b]! + 1;
  };
  for (const [u, v] of edges) union(u!, v!);
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (find(i) === i) {
      const k = size[i]!;
      if (edgeCnt[i]! === k * (k - 1) / 2) count++;
    }
  }
  return count;
}`,
    python: `def countCompleteComponents(n, edges):
    parent = list(range(n))
    size = [1] * n
    edge_cnt = [0] * n
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    for u, v in edges:
        a, b = find(u), find(v)
        if a == b: edge_cnt[a] += 1; continue
        if size[a] < size[b]: a, b = b, a
        parent[b] = a; size[a] += size[b]; edge_cnt[a] += edge_cnt[b] + 1
    return sum(1 for i in range(n) if find(i) == i and edge_cnt[i] == size[i] * (size[i] - 1) // 2)`,
  },
  visibleTests: [
    { args: [6, [[0,1],[0,2],[1,2],[3,4]]], expected: 3 },
    { args: [6, [[0,1],[0,2],[1,2],[3,4],[3,5]]], expected: 1 },
  ],
  hiddenTests: [
    { args: [1, []], expected: 1 },
    { args: [3, []], expected: 3 },
    { args: [4, [[0,1],[1,2],[2,3],[3,0],[0,2],[1,3]]], expected: 1 },
    { args: [4, [[0,1],[1,2],[2,0]]], expected: 2 },
    { args: [5, [[0,1],[1,2],[2,3],[3,4],[4,0]]], expected: 0 },
  ],
};
