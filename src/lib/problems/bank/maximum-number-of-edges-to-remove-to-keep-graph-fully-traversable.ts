import type { Problem } from '../types';

export const problem: Problem = {
  id: 'maximum-number-of-edges-to-remove-to-keep-graph-fully-traversable',
  title: 'Remove Max Number of Edges to Keep Graph Fully Traversable',
  difficulty: 'hard',
  tags: ['graph', 'union-find'],
  description: `Alice and Bob have an undirected graph with \`n\` nodes and three types of edges:

- **Type 1**: Can only be traversed by **Alice**.
- **Type 2**: Can only be traversed by **Bob**.
- **Type 3**: Can be traversed by **both** Alice and Bob.

Given an array \`edges\` where \`edges[i] = [type_i, u_i, v_i]\` represents a bidirectional edge of the given type, find the **maximum** number of edges you can remove so that after removing the edges, the graph can still be **fully traversed** by both Alice and Bob (i.e., each can reach all \`n\` nodes). Return \`-1\` if it is impossible.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= edges.length <= min(10^5, 3 * n * (n - 1) / 2)',
    'edges[i].length == 3',
    '1 <= edges[i][0] <= 3',
    '1 <= edges[i][1] < edges[i][2] <= n',
    'All tuples (type_i, u_i, v_i) are distinct.',
  ],
  examples: [
    {
      input: 'n = 2, edges = [[1,1,2],[2,1,2],[3,1,2]]',
      output: '2',
      explanation: 'The type-3 edge alone connects both Alice and Bob. The other two are redundant.',
    },
    {
      input: 'n = 4, edges = [[3,1,2],[3,2,3],[3,1,4],[1,1,2]]',
      output: '1',
      explanation: 'Three type-3 edges fully connect all nodes for both. The type-1 edge [1,1,2] is redundant.',
    },
    {
      input: 'n = 3, edges = [[1,1,2],[2,1,3]]',
      output: '-1',
      explanation: 'Alice can reach 1,2 but not 3. Bob can reach 1,3 but not 2. Impossible.',
    },
  ],
  hints: [
    'Level 1: Type 3 edges benefit both Alice and Bob — greedily add them first using Union-Find for both graphs.',
    'Level 2: After type 3 edges, run separate Union-Find passes for type 1 (Alice) and type 2 (Bob) edges.',
    'Level 3: Count how many edges were actually used (i.e., merged two previously disconnected components). Unused edges are the ones to remove. If either graph is not fully connected at the end, return -1.',
  ],
  functionName: 'maxNumEdgesToRemove',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function maxNumEdgesToRemove(n, edges) {
  function makeUF(size) {
    const parent = Array.from({length: size + 1}, (_, i) => i);
    const rank = new Array(size + 1).fill(0);
    let components = size;
    const find = x => { while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; } return x; };
    const union = (a, b) => {
      a = find(a); b = find(b);
      if (a === b) return false;
      if (rank[a] < rank[b]) [a, b] = [b, a];
      parent[b] = a;
      if (rank[a] === rank[b]) rank[a]++;
      components--;
      return true;
    };
    return { union, connected: () => components === 1 };
  }
  const alice = makeUF(n), bob = makeUF(n);
  let used = 0;
  for (const [t, u, v] of edges) {
    if (t === 3) { const a = alice.union(u, v), b = bob.union(u, v); if (a || b) used++; }
  }
  for (const [t, u, v] of edges) {
    if (t === 1) { if (alice.union(u, v)) used++; }
    if (t === 2) { if (bob.union(u, v)) used++; }
  }
  if (!alice.connected() || !bob.connected()) return -1;
  return edges.length - used;
}`,
    typescript: `function maxNumEdgesToRemove(n: number, edges: number[][]): number {
  function makeUF(size: number) {
    const parent = Array.from({length: size + 1}, (_, i) => i);
    const rank = new Array(size + 1).fill(0);
    let components = size;
    const find = (x: number): number => { while (parent[x] !== x) { parent[x] = parent[parent[x]]!; x = parent[x]!; } return x; };
    const union = (a: number, b: number) => {
      a = find(a); b = find(b);
      if (a === b) return false;
      if (rank[a] < rank[b]) [a, b] = [b, a];
      parent[b] = a;
      if (rank[a] === rank[b]) rank[a]++;
      components--;
      return true;
    };
    return { union, connected: () => components === 1 };
  }
  const alice = makeUF(n), bob = makeUF(n);
  let used = 0;
  for (const [t, u, v] of edges) {
    if (t === 3) { const a = alice.union(u, v), b = bob.union(u, v); if (a || b) used++; }
  }
  for (const [t, u, v] of edges) {
    if (t === 1) { if (alice.union(u, v)) used++; }
    if (t === 2) { if (bob.union(u, v)) used++; }
  }
  if (!alice.connected() || !bob.connected()) return -1;
  return edges.length - used;
}`,
    python: `def maxNumEdgesToRemove(n, edges):
    def make_uf(size):
        parent = list(range(size + 1))
        rank = [0] * (size + 1)
        count = [size]
        def find(x):
            while parent[x] != x:
                parent[x] = parent[parent[x]]
                x = parent[x]
            return x
        def union(a, b):
            a, b = find(a), find(b)
            if a == b: return False
            if rank[a] < rank[b]: a, b = b, a
            parent[b] = a
            if rank[a] == rank[b]: rank[a] += 1
            count[0] -= 1
            return True
        return union, lambda: count[0] == 1
    a_union, a_conn = make_uf(n)
    b_union, b_conn = make_uf(n)
    edges = [list(e) for e in edges] if hasattr(edges, 'to_py') else [list(e) for e in edges]
    if hasattr(edges, 'to_py'): edges = edges.to_py()
    edges = [[int(x) for x in e] for e in edges]
    used = 0
    for t, u, v in edges:
        if t == 3:
            a = a_union(u, v); b = b_union(u, v)
            if a or b: used += 1
    for t, u, v in edges:
        if t == 1 and a_union(u, v): used += 1
        if t == 2 and b_union(u, v): used += 1
    if not a_conn() or not b_conn(): return -1
    return len(edges) - used`,
  },
  visibleTests: [
    { args: [2, [[1, 1, 2], [2, 1, 2], [3, 1, 2]]], expected: 2 },
    { args: [4, [[3, 1, 2], [3, 2, 3], [3, 1, 4], [1, 1, 2]]], expected: 1 },
    { args: [3, [[1, 1, 2], [2, 1, 3]]], expected: -1 },
  ],
  hiddenTests: [
    { args: [4, [[3, 1, 2], [3, 2, 3], [1, 1, 4], [2, 3, 4]]], expected: 0 },
    { args: [1, []], expected: 0 },
    { args: [3, [[3, 1, 2], [3, 2, 3], [1, 1, 3], [2, 1, 3]]], expected: 2 },
    { args: [2, [[1, 1, 2], [2, 1, 2]]], expected: 0 },
  ],
};
