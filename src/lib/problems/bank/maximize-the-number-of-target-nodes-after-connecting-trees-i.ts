import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximize-the-number-of-target-nodes-after-connecting-trees-i',
  title: 'Maximize the Number of Target Nodes After Connecting Trees I',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `There exist two **undirected** trees with \`n\` and \`m\` nodes numbered \`0\` to \`n-1\` and \`0\` to \`m-1\` respectively. You are given two 2D integer arrays \`edges1\` and \`edges2\` of lengths \`n-1\` and \`m-1\`, and a non-negative integer \`k\`.

You must connect one node from the first tree to one node from the second tree with an edge.

A node \`u\` in the combined tree is a **target node** for node \`v\` if the distance from \`v\` to \`u\` is at most \`k\`.

Return an array \`ans\` of \`n\` integers, where \`ans[i]\` is the **maximum** number of nodes that can be targets for node \`i\` of the first tree across all valid choices of connecting an edge between the two trees.`,
  constraints: [
    '2 <= n, m <= 1000',
    'edges1.length == n - 1',
    'edges2.length == m - 1',
    '0 <= edges1[i][0], edges1[i][1] < n',
    '0 <= edges2[i][0], edges2[i][1] < m',
    '0 <= k <= 1000',
    'The input is generated such that edges1 and edges2 represent valid trees.',
  ],
  examples: [
    {
      input: 'edges1 = [[0,1],[1,2],[2,3]], edges2 = [[0,1],[1,2],[2,3],[3,4]], k = 2',
      output: '[6,7,7,6]',
      explanation:
        'Tree1 is a 4-node path. Tree2 is a 5-node path. For node 1 in tree1: it reaches 4 nodes in tree1 within 2 hops. Connecting node 1 to the best node in tree2 (any middle node covers 3 within 1 hop) gives 4+3=7.',
    },
    {
      input: 'edges1 = [[0,1]], edges2 = [[0,1],[0,2]], k = 2',
      output: '[5,5]',
      explanation:
        'Tree1 has 2 nodes; both are reachable from either end within k=2. Tree2 node 0 reaches all 3 nodes within k-1=1. So ans = 2+3 = 5.',
    },
    {
      input: 'edges1 = [[0,1],[0,2]], edges2 = [[0,1]], k = 0',
      output: '[1,1,1]',
      explanation: 'With k=0 each node can only reach itself. No tree2 nodes are reachable (k-1 < 0). Answer is 1 for every node.',
    },
  ],
  hints: [
    'For node i in tree1, the optimal connection is to attach node i itself (distance 0) to the best node j in tree2. This leaves k-1 steps to explore tree2 from j.',
    'Precompute cnt1[i] = number of tree1 nodes within k steps from i, and cnt2[j] = number of tree2 nodes within k-1 steps from j, using BFS from each source.',
    'ans[i] = cnt1[i] + max(cnt2). The tree2 contribution is the same constant for all i.',
  ],
  functionName: 'maxTargetNodes',
  params: ['edges1', 'edges2', 'k'],
  starterCode: {
    javascript: `function maxTargetNodes(edges1, edges2, k) {
  function buildAdj(edges, n) {
    const adj = Array.from({length: n}, () => []);
    for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
    return adj;
  }
  function bfsCount(adj, src, maxDist) {
    if (maxDist < 0) return 0;
    const dist = new Array(adj.length).fill(-1);
    dist[src] = 0;
    const queue = [src]; let cnt = 1;
    while (queue.length) {
      const u = queue.shift();
      if (dist[u] >= maxDist) continue;
      for (const v of adj[u]) if (dist[v] === -1) { dist[v] = dist[u] + 1; cnt++; queue.push(v); }
    }
    return cnt;
  }
  const n = edges1.length + 1, m = edges2.length + 1;
  const adj1 = buildAdj(edges1, n), adj2 = buildAdj(edges2, m);
  const cnt2 = Array.from({length: m}, (_, i) => bfsCount(adj2, i, k - 1));
  const maxCnt2 = Math.max(...cnt2);
  return Array.from({length: n}, (_, i) => bfsCount(adj1, i, k) + maxCnt2);
}`,
    typescript: `function maxTargetNodes(edges1: number[][], edges2: number[][], k: number): number[] {
  function buildAdj(edges: number[][], n: number): number[][] {
    const adj: number[][] = Array.from({length: n}, () => []);
    for (const e of edges) { adj[e[0]!]!.push(e[1]!); adj[e[1]!]!.push(e[0]!); }
    return adj;
  }
  function bfsCount(adj: number[][], src: number, maxDist: number): number {
    if (maxDist < 0) return 0;
    const dist = new Array(adj.length).fill(-1) as number[];
    dist[src] = 0;
    const queue = [src]; let cnt = 1;
    while (queue.length) {
      const u = queue.shift()!;
      if (dist[u]! >= maxDist) continue;
      for (const v of adj[u]!) if (dist[v] === -1) { dist[v] = dist[u]! + 1; cnt++; queue.push(v); }
    }
    return cnt;
  }
  const n = edges1.length + 1, m = edges2.length + 1;
  const adj1 = buildAdj(edges1, n), adj2 = buildAdj(edges2, m);
  const cnt2 = Array.from({length: m}, (_, i) => bfsCount(adj2, i, k - 1));
  const maxCnt2 = Math.max(...cnt2);
  return Array.from({length: n}, (_, i) => bfsCount(adj1, i, k) + maxCnt2);
}`,
    python: `def maxTargetNodes(edges1, edges2, k):
    if hasattr(edges1, 'to_py'): edges1 = edges1.to_py()
    if hasattr(edges2, 'to_py'): edges2 = edges2.to_py()
    if hasattr(k, 'to_py'): k = k.to_py()
    edges1 = [[int(x) for x in (e.to_py() if hasattr(e,'to_py') else e)] for e in edges1]
    edges2 = [[int(x) for x in (e.to_py() if hasattr(e,'to_py') else e)] for e in edges2]
    k = int(k)
    def build_adj(edges, n):
        adj = [[] for _ in range(n)]
        for u, v in edges: adj[u].append(v); adj[v].append(u)
        return adj
    def bfs_count(adj, src, max_dist):
        if max_dist < 0: return 0
        from collections import deque
        dist = [-1] * len(adj); dist[src] = 0
        queue = deque([src]); cnt = 1
        while queue:
            u = queue.popleft()
            if dist[u] >= max_dist: continue
            for v in adj[u]:
                if dist[v] == -1: dist[v] = dist[u]+1; cnt += 1; queue.append(v)
        return cnt
    n = len(edges1) + 1; m = len(edges2) + 1
    adj1 = build_adj(edges1, n); adj2 = build_adj(edges2, m)
    cnt2 = [bfs_count(adj2, i, k-1) for i in range(m)]
    max_cnt2 = max(cnt2)
    return [bfs_count(adj1, i, k) + max_cnt2 for i in range(n)]`,
  },
  visibleTests: [
    {
      args: [
        [
          [0, 1],
          [1, 2],
          [2, 3],
        ],
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
        ],
        2,
      ],
      expected: [6, 7, 7, 6],
    },
    {
      args: [
        [[0, 1]],
        [
          [0, 1],
          [0, 2],
        ],
        2,
      ],
      expected: [5, 5],
    },
    {
      args: [
        [
          [0, 1],
          [0, 2],
        ],
        [[0, 1]],
        0,
      ],
      expected: [1, 1, 1],
    },
  ],
  hiddenTests: [
    {
      args: [[[0, 1]], [[0, 1]], 1],
      expected: [3, 3],
    },
    {
      args: [
        [
          [0, 1],
          [0, 2],
          [0, 3],
        ],
        [
          [0, 1],
          [0, 2],
        ],
        1,
      ],
      expected: [5, 3, 3, 3],
    },
    {
      args: [
        [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 4],
        ],
        [
          [0, 1],
          [0, 2],
        ],
        3,
      ],
      expected: [7, 8, 8, 8, 7],
    },
    {
      args: [[[0, 1]], [[0, 1]], 0],
      expected: [1, 1],
    },
  ],
};
