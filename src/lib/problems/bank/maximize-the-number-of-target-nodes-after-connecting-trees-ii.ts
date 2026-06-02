import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-number-of-target-nodes-after-connecting-trees-ii',
  title: 'Maximize the Number of Target Nodes After Connecting Trees II',
  difficulty: 'hard',
  tags: ['tree', 'graph'],
  description: `There exist two **undirected** trees with \`n\` and \`m\` nodes numbered \`0\` to \`n-1\` and \`0\` to \`m-1\` respectively. You are given two 2D integer arrays \`edges1\` and \`edges2\` of lengths \`n-1\` and \`m-1\`.

You must connect one node from the first tree to one node from the second tree with an edge.

A node \`u\` is a **target node** for node \`v\` if the distance from \`v\` to \`u\` is **even**.

Return an array \`ans\` of \`n\` integers, where \`ans[i]\` is the **maximum** number of nodes that can be target nodes for node \`i\` of the first tree across all valid choices of connecting an edge.

**Note:** Distance is measured in edges; same-parity distance means even-hop reachability.`,
  constraints: [
    '2 <= n, m <= 10^5',
    'edges1.length == n - 1',
    'edges2.length == m - 1',
    '0 <= edges1[i][0], edges1[i][1] < n',
    '0 <= edges2[i][0], edges2[i][1] < m',
    'The input is generated such that edges1 and edges2 represent valid trees.',
  ],
  examples: [
    {
      input: 'edges1 = [[0,1],[0,2],[2,3],[2,4]], edges2 = [[0,1],[1,2],[1,3]]',
      output: '[6,5,5,6,6]',
      explanation:
        'Tree1 2-coloring (BFS from 0): {0,3,4}→color0 (3 nodes), {1,2}→color1 (2 nodes). Tree2 2-coloring (BFS from 0): {0,2,3}→color0 (3 nodes), {1}→color1 (1 node). maxTree2 = 4 − min(3,1) = 3 (connect to a color1 node in tree2 so all 3 color0 tree2 nodes are at even dist from i via odd-parity edge). Color0 nodes in tree1 (0,3,4): ans=3+3=6. Color1 nodes (1,2): ans=2+3=5.',
    },
    {
      input: 'edges1 = [[0,1]], edges2 = [[0,1]]',
      output: '[2,2]',
      explanation:
        'Tree1: {0}→color0, {1}→color1. Tree2: {0}→color0, {1}→color1. For node 0 (color0) in tree1: connects 1 node in tree1 (color0) + best from tree2 (connect to color1 node: 1 opposite-color node = color0 count = 1). ans[0]=1+1=2.',
    },
  ],
  hints: [
    'Level 1: Trees are bipartite. 2-color each tree via BFS from node 0. Even-distance nodes from v are exactly those with the same color as v.',
    'Level 2: When connecting node i (tree1, color c1) to node j (tree2, color c2), nodes in tree2 reachable from i at even distance = nodes in tree2 at ODD distance from j = opposite-color nodes of j in tree2 = m - count(c2 in tree2).',
    'Level 3: Maximize over all j: m - count(color(j) in tree2) = m - min(d0, d1). For each i: ans[i] = count(color(i) in tree1) + m - min(d0, d1). O(n+m) total.',
  ],
  functionName: 'maxTargetNodes',
  params: ['edges1', 'edges2'],
  starterCode: {
    javascript: `function maxTargetNodes(edges1, edges2) {
  function twoColor(edges, n) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
    const color = new Int8Array(n).fill(-1);
    color[0] = 0;
    const queue = [0];
    while (queue.length) {
      const u = queue.shift();
      for (const v of adj[u]) if (color[v] === -1) { color[v] = 1 - color[u]; queue.push(v); }
    }
    return color;
  }
  const n = edges1.length + 1, m = edges2.length + 1;
  const c1 = twoColor(edges1, n), c2 = twoColor(edges2, m);
  const d0 = c2.filter(x => x === 0).length;
  const maxTree2 = m - Math.min(d0, m - d0);
  const cnt = [0, 0];
  for (const c of c1) cnt[c]++;
  return Array.from({length: n}, (_, i) => cnt[c1[i]] + maxTree2);
}`,
    typescript: `function maxTargetNodes(edges1: number[][], edges2: number[][]): number[] {
  function twoColor(edges: number[][], n: number): Int8Array {
    const adj: number[][] = Array.from({length: n}, () => []);
    for (const e of edges) { adj[e[0]!]!.push(e[1]!); adj[e[1]!]!.push(e[0]!); }
    const color = new Int8Array(n).fill(-1);
    color[0] = 0;
    const queue = [0];
    while (queue.length) {
      const u = queue.shift()!;
      for (const v of adj[u]!) if (color[v] === -1) { color[v] = 1 - color[u]!; queue.push(v); }
    }
    return color;
  }
  const n = edges1.length + 1, m = edges2.length + 1;
  const c1 = twoColor(edges1, n), c2 = twoColor(edges2, m);
  const d0 = Array.from(c2).filter(x => x === 0).length;
  const maxTree2 = m - Math.min(d0, m - d0);
  const cnt = [0, 0];
  for (const c of c1) cnt[c]!++;
  return Array.from({length: n}, (_, i) => cnt[c1[i]!]! + maxTree2);
}`,
    python: `def maxTargetNodes(edges1, edges2):
    if hasattr(edges1, 'to_py'): edges1 = edges1.to_py()
    if hasattr(edges2, 'to_py'): edges2 = edges2.to_py()
    edges1 = [[int(x) for x in (e.to_py() if hasattr(e,'to_py') else e)] for e in edges1]
    edges2 = [[int(x) for x in (e.to_py() if hasattr(e,'to_py') else e)] for e in edges2]
    def two_color(edges, n):
        adj = [[] for _ in range(n)]
        for u, v in edges: adj[u].append(v); adj[v].append(u)
        color = [-1] * n; color[0] = 0
        from collections import deque
        queue = deque([0])
        while queue:
            u = queue.popleft()
            for v in adj[u]:
                if color[v] == -1: color[v] = 1 - color[u]; queue.append(v)
        return color
    n = len(edges1) + 1; m = len(edges2) + 1
    c1 = two_color(edges1, n); c2 = two_color(edges2, m)
    d0 = c2.count(0)
    max_tree2 = m - min(d0, m - d0)
    cnt = [c1.count(0), c1.count(1)]
    return [cnt[c1[i]] + max_tree2 for i in range(n)]`,
  },
  visibleTests: [
    {
      args: [
        [[0, 1], [0, 2], [2, 3], [2, 4]],
        [[0, 1], [1, 2], [1, 3]],
      ],
      expected: [6, 5, 5, 6, 6],
    },
    {
      args: [[[0, 1]], [[0, 1]]],
      expected: [2, 2],
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 1]], [[0, 1], [1, 2]]],
      expected: [3, 3],
    },
    {
      args: [[[0, 1], [0, 2]], [[0, 1]]],
      expected: [2, 3, 3],
    },
    {
      args: [[[0, 1], [1, 2], [2, 3]], [[0, 1], [1, 2], [1, 3]]],
      expected: [5, 5, 5, 5],
    },
    {
      args: [[[0, 1], [0, 2], [0, 3]], [[0, 1], [0, 2], [0, 3]]],
      expected: [4, 6, 6, 6],
    },
  ],
};
