import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-cost-walk-in-a-weighted-graph',
  title: 'Minimum Cost Walk in Weighted Graph',
  difficulty: 'medium',
  tags: ['graph', 'union-find', 'bit-manipulation'],
  description: `There is an undirected weighted graph with \`n\` vertices labeled from \`0\` to \`n - 1\`.

You are given the integer \`n\` and an array \`edges\`, where \`edges[i] = [u_i, v_i, w_i]\` indicates that there is an edge between vertices \`u_i\` and \`v_i\` with weight \`w_i\`.

A **walk** on a graph is a sequence of vertices and edges. The walk starts and ends with a vertex. Each consecutive pair of vertices in the walk must be connected by an edge. A walk can revisit vertices and edges.

The **cost** of a walk starting at vertex \`s\` and ending at vertex \`t\` is defined as the **bitwise AND** of the weights of the edges traversed during the walk. An empty walk from \`s\` to \`s\` has a cost of \`0\`.

You need to answer \`q\` queries. For each query \`queries[i] = [s_i, t_i]\`, find the **minimum cost** of a walk starting at \`s_i\` and ending at \`t_i\`.

Return an array \`answer\` where \`answer[i]\` denotes the minimum cost of a walk for query \`i\`.`,
  constraints: [
    '2 <= n <= 10^5',
    '0 <= edges.length <= 10^5',
    '0 <= u_i, v_i <= n-1',
    '0 <= w_i <= 10^5',
    '1 <= queries.length <= 10^5',
    '0 <= s_i, t_i <= n-1',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1,7],[1,3,7],[1,2,1]], queries = [[0,3],[3,4]]',
      output: '[1,-1]',
      explanation: 'Nodes {0,1,2,3} form one component; AND of all edge weights = 7&7&1 = 1. Node 4 is isolated. Query [3,4]: different components → -1.',
    },
    {
      input: 'n = 3, edges = [[0,2,7],[0,1,15],[1,2,6],[1,2,1]], queries = [[1,2]]',
      output: '[0]',
      explanation: 'All edges AND together: 7&15&6&1 = 0. The walk can include all 4 edges, zeroing out every bit.',
    },
    {
      input: 'n = 2, edges = [], queries = [[0,0],[1,0]]',
      output: '[0,-1]',
      explanation: 'Query [0,0]: s==t, cost = 0. Query [1,0]: no path → -1.',
    },
  ],
  hints: [
    'Key insight: since you can revisit edges, within a connected component you can traverse ALL edges, making the minimum walk cost = bitwise AND of all edge weights in that component.',
    'Use Union-Find (DSU) to group nodes into connected components. Track the running AND of all edges within each component.',
    'For each edge (u,v,w): find roots of u and v. The new component AND = componentAnd[root_u] & componentAnd[root_v] & w. Merge the two roots.',
    'Answer each query in O(α(n)): if s==t return 0; if different components return -1; otherwise return componentAnd[find(s)].',
  ],
  functionName: 'minimumCost',
  params: ['n', 'edges', 'queries'],
  starterCode: {
    javascript: `function minimumCost(n, edges, queries) {
  const parent = Array.from({length: n}, (_, i) => i);
  const compAnd = new Array(n).fill(-1);
  const find = x => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
  for (const [u, v, w] of edges) {
    const ra = find(u), rb = find(v);
    if (ra === rb) compAnd[ra] &= w;
    else { compAnd[ra] &= compAnd[rb] & w; parent[rb] = ra; }
  }
  return queries.map(([s, t]) => {
    if (s === t) return 0;
    const rs = find(s), rt = find(t);
    return rs !== rt ? -1 : compAnd[rs];
  });
}`,
    typescript: `function minimumCost(n: number, edges: number[][], queries: number[][]): number[] {
  const parent = Array.from({length: n}, (_, i) => i);
  const compAnd = new Array<number>(n).fill(-1);
  const find = (x: number): number => { while (parent[x]! !== x) { parent[x] = parent[parent[x]!]!; x = parent[x]!; } return x; };
  for (const [u, v, w] of edges) {
    const ra = find(u!), rb = find(v!);
    if (ra === rb) compAnd[ra] = compAnd[ra]! & w!;
    else { compAnd[ra] = compAnd[ra]! & compAnd[rb]! & w!; parent[rb] = ra; }
  }
  return queries.map(([s, t]) => {
    if (s === t) return 0;
    const rs = find(s!), rt = find(t!);
    return rs !== rt ? -1 : compAnd[rs]!;
  });
}`,
    python: `def minimumCost(n: int, edges: list[list[int]], queries: list[list[int]]) -> list[int]:
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    if hasattr(queries, 'to_py'): queries = [[int(x) for x in (q.to_py() if hasattr(q, 'to_py') else q)] for q in queries.to_py()]
    parent = list(range(n)); comp_and = [-1] * n
    def find(x):
        while parent[x] != x: parent[x] = parent[parent[x]]; x = parent[x]
        return x
    for u, v, w in edges:
        ra, rb = find(u), find(v)
        if ra == rb: comp_and[ra] &= w
        else: comp_and[ra] &= comp_and[rb] & w; parent[rb] = ra
    return [0 if s == t else (-1 if find(s) != find(t) else comp_and[find(s)]) for s, t in queries]`,
  },
  visibleTests: [
    { args: [5, [[0, 1, 7], [1, 3, 7], [1, 2, 1]], [[0, 3], [3, 4]]], expected: [1, -1] },
    { args: [3, [[0, 2, 7], [0, 1, 15], [1, 2, 6], [1, 2, 1]], [[1, 2]]], expected: [0] },
    { args: [2, [], [[0, 0], [1, 0]]], expected: [0, -1] },
  ],
  hiddenTests: [
    { args: [2, [], [[0, 0], [1, 1]]], expected: [0, 0] },
    { args: [4, [[0, 1, 3], [1, 2, 5], [0, 2, 1]], [[0, 2], [1, 3]]], expected: [1, -1] },
    { args: [4, [[0, 1, 4], [2, 3, 4]], [[0, 1], [2, 3], [0, 2]]], expected: [4, 4, -1] },
    { args: [3, [[0, 1, 0]], [[0, 1], [0, 2]]], expected: [0, -1] },
    { args: [2, [[0, 1, 100000]], [[0, 1]]], expected: [100000] },
    { args: [5, [[0, 1, 15], [1, 2, 14], [2, 3, 13], [3, 4, 12]], [[0, 4], [0, 2]]], expected: [12, 12] },
    { args: [3, [[0, 1, 7], [1, 2, 7]], [[0, 2], [0, 1]]], expected: [7, 7] },
    { args: [4, [[0, 1, 10], [0, 2, 10], [0, 3, 10]], [[1, 2], [1, 3], [2, 3]]], expected: [10, 10, 10] },
    { args: [5, [[0, 1, 1], [2, 3, 2], [1, 2, 3]], [[0, 3], [4, 4]]], expected: [0, 0] },
    { args: [2, [[0, 1, 5], [0, 1, 3]], [[0, 1]]], expected: [1] },
  ],
};
