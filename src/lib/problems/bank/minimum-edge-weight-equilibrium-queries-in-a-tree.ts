import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-edge-weight-equilibrium-queries-in-a-tree',
  title: 'Minimum Edge Weight Equilibrium Queries in a Tree',
  difficulty: 'hard',
  tags: ['tree', 'graph', 'binary-search'],
  description: `There is an undirected tree with \`n\` nodes labeled from \`0\` to \`n - 1\`. You are given the integer \`n\` and a 2D integer array \`edges\` of length \`n - 1\`, where \`edges[i] = [u_i, v_i, w_i]\` indicates that there is an edge between nodes \`u_i\` and \`v_i\` with weight \`w_i\` in the tree. Edge weights are positive integers from \`1\` to \`26\`.

You are also given a 2D integer array \`queries\` of length \`m\`, where \`queries[i] = [a_i, b_i, w_i]\`. For each query, find the **minimum number of operations** required to make all edge weights on the path from \`a_i\` to \`b_i\` equal to \`w_i\`. In one operation, you can change the weight of any edge to any value.

Return an array \`answer\` of length \`m\` where \`answer[i]\` is the answer to the \`i\`-th query.`,
  constraints: [
    '1 <= n <= 10^4',
    'edges.length == n - 1',
    'edges[i].length == 3',
    '0 <= u_i, v_i < n',
    '1 <= w_i <= 26',
    '1 <= queries.length <= 2 * 10^4',
    'queries[i].length == 3',
    '0 <= a_i, b_i < n',
    '1 <= queries[i][2] <= 26',
  ],
  examples: [
    {
      input: 'n = 7, edges = [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]], queries = [[0,3,1],[0,3,2],[0,6,1],[0,6,2]]',
      output: '[0,3,3,3]',
      explanation: 'Path 0-3 has 3 edges all with weight 1. For w=1: 0 changes. For w=2: 3 changes. Path 0-6 has 6 edges (3 with w=1, 3 with w=2). For w=1: 3 changes. For w=2: 3 changes.',
    },
    {
      input: 'n = 4, edges = [[0,1,1],[1,2,1],[2,3,2]], queries = [[0,3,1],[0,3,2],[1,3,1]]',
      output: '[1,2,1]',
    },
  ],
  hints: [
    'Level 1: The answer for query (a, b, w) = (path length from a to b) - (number of edges on path with weight w). Path length = depth[a] + depth[b] - 2*depth[LCA(a,b)].',
    'Level 2: To count edges with a given weight on a path, use prefix counts: cnt[v][w] = number of edges with weight w on the path from root to v. Then count on path a-b = cnt[a][w] + cnt[b][w] - 2*cnt[LCA][w].',
    'Level 3: Build binary lifting for LCA in O(n log n). Use BFS from root 0 to compute depth, parent arrays, and prefix weight-count arrays. Answer each query in O(log n).',
  ],
  functionName: 'minOperationsQueries',
  params: ['n', 'edges', 'queries'],
  starterCode: {
    javascript: `function minOperationsQueries(n, edges, queries) {
  const LOG = 14;
  const adj = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) { adj[u].push([v, w]); adj[v].push([u, w]); }
  const depth = new Array(n).fill(0);
  const up = Array.from({length: LOG}, () => new Array(n).fill(0));
  const cnt = Array.from({length: n}, () => new Array(27).fill(0));
  const visited = new Array(n).fill(false);
  const queue = [0]; visited[0] = true; let qi = 0;
  while (qi < queue.length) {
    const u = queue[qi++];
    for (const [v, w] of adj[u]) {
      if (!visited[v]) {
        visited[v] = true; depth[v] = depth[u] + 1; up[0][v] = u;
        for (let k = 1; k < LOG; k++) up[k][v] = up[k-1][up[k-1][v]];
        for (let c = 1; c <= 26; c++) cnt[v][c] = cnt[u][c];
        cnt[v][w]++; queue.push(v);
      }
    }
  }
  const lca = (u, v) => {
    if (depth[u] < depth[v]) [u, v] = [v, u];
    let diff = depth[u] - depth[v];
    for (let k = 0; k < LOG; k++) if ((diff >> k) & 1) u = up[k][u];
    if (u === v) return u;
    for (let k = LOG-1; k >= 0; k--) if (up[k][u] !== up[k][v]) { u = up[k][u]; v = up[k][v]; }
    return up[0][u];
  };
  return queries.map(([a, b, w]) => {
    const l = lca(a, b);
    return depth[a] + depth[b] - 2*depth[l] - (cnt[a][w] + cnt[b][w] - 2*cnt[l][w]);
  });
}`,
    typescript: `function minOperationsQueries(n: number, edges: number[][], queries: number[][]): number[] {
  const LOG = 14;
  const adj: [number, number][][] = Array.from({length: n}, () => []);
  for (const [u, v, w] of edges) { adj[u!]!.push([v!, w!]); adj[v!]!.push([u!, w!]); }
  const depth = new Array<number>(n).fill(0);
  const up: number[][] = Array.from({length: LOG}, () => new Array<number>(n).fill(0));
  const cnt: number[][] = Array.from({length: n}, () => new Array<number>(27).fill(0));
  const visited = new Array<boolean>(n).fill(false);
  const queue = [0]; visited[0] = true; let qi = 0;
  while (qi < queue.length) {
    const u = queue[qi++]!;
    for (const [v, w] of adj[u]!) {
      if (!visited[v]!) {
        visited[v] = true; depth[v] = depth[u]! + 1; up[0]![v] = u;
        for (let k = 1; k < LOG; k++) up[k]![v] = up[k-1]![up[k-1]![v]!]!;
        for (let c = 1; c <= 26; c++) cnt[v]![c] = cnt[u]![c]!;
        cnt[v]![w!]!++; queue.push(v);
      }
    }
  }
  const lca = (u: number, v: number): number => {
    if (depth[u]! < depth[v]!) [u, v] = [v, u];
    let diff = depth[u]! - depth[v]!;
    for (let k = 0; k < LOG; k++) if ((diff >> k) & 1) u = up[k]![u]!;
    if (u === v) return u;
    for (let k = LOG-1; k >= 0; k--) if (up[k]![u]! !== up[k]![v]!) { u = up[k]![u]!; v = up[k]![v]!; }
    return up[0]![u]!;
  };
  return queries.map(([a, b, w]) => {
    const l = lca(a!, b!);
    return depth[a!]! + depth[b!]! - 2*depth[l]! - (cnt[a!]![w!]! + cnt[b!]![w!]! - 2*cnt[l]![w!]!);
  });
}`,
    python: `def minOperationsQueries(n: int, edges: list[list[int]], queries: list[list[int]]) -> list[int]:
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    if hasattr(queries, 'to_py'): queries = [[int(x) for x in (q.to_py() if hasattr(q, 'to_py') else q)] for q in queries.to_py()]
    LOG = 14; adj = [[] for _ in range(n)]
    for u, v, w in edges: adj[u].append((v, w)); adj[v].append((u, w))
    depth = [0]*n; up = [[0]*n for _ in range(LOG)]; cnt = [[0]*27 for _ in range(n)]
    visited = [False]*n; queue = [0]; visited[0] = True; qi = 0
    while qi < len(queue):
        u = queue[qi]; qi += 1
        for v, w in adj[u]:
            if not visited[v]:
                visited[v] = True; depth[v] = depth[u]+1; up[0][v] = u
                for k in range(1, LOG): up[k][v] = up[k-1][up[k-1][v]]
                cnt[v] = cnt[u][:]; cnt[v][w] += 1; queue.append(v)
    def lca(u, v):
        if depth[u] < depth[v]: u, v = v, u
        diff = depth[u]-depth[v]
        for k in range(LOG):
            if (diff >> k) & 1: u = up[k][u]
        if u == v: return u
        for k in range(LOG-1, -1, -1):
            if up[k][u] != up[k][v]: u = up[k][u]; v = up[k][v]
        return up[0][u]
    res = []
    for a, b, w in queries:
        l = lca(a, b)
        res.append(depth[a]+depth[b]-2*depth[l]-(cnt[a][w]+cnt[b][w]-2*cnt[l][w]))
    return res`,
  },
  visibleTests: [
    { args: [7, [[0,1,1],[1,2,1],[2,3,1],[3,4,2],[4,5,2],[5,6,2]], [[0,3,1],[0,3,2],[0,6,1],[0,6,2]]], expected: [0,3,3,3] },
    { args: [4, [[0,1,1],[1,2,1],[2,3,2]], [[0,3,1],[0,3,2],[1,3,1]]], expected: [1,2,1] },
  ],
  hiddenTests: [
    { args: [1, [], [[0,0,1]]], expected: [0] },
    { args: [2, [[0,1,3]], [[0,1,3],[0,1,1]]], expected: [0,1] },
    { args: [3, [[0,1,1],[1,2,2]], [[0,2,1],[0,2,2],[0,2,3]]], expected: [1,1,2] },
    { args: [5, [[0,1,1],[0,2,2],[0,3,3],[0,4,4]], [[1,2,1],[1,2,2],[3,4,1]]], expected: [1,1,2] },
    { args: [4, [[0,1,1],[0,2,1],[0,3,1]], [[1,2,1],[1,3,1],[2,3,1]]], expected: [0,0,0] },
  ],
};
