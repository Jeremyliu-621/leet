import type { Problem } from '../types';

export const problem: Problem = {
  id: 'euler-tour-subtree-queries',
  title: 'Euler Tour — Subtree Sum Queries with Updates',
  difficulty: 'hard',
  tags: ['segment-tree', 'tree', 'arrays'],
  description: `You are given a rooted tree of \`n\` nodes (0-indexed, root = 0) described by \`edges\`, where each edge is \`[u, v]\`. Each node has an initial value given in \`vals\`.

Support two operations:

- \`["update", node, delta]\` — add \`delta\` to the value of \`node\`.
- \`["query", node]\` — return the **sum of values** of all nodes in the subtree rooted at \`node\` (including \`node\` itself).

Use an **Euler tour** (DFS in-time / out-time flattening) combined with a **segment tree with point updates and range sum queries** to answer each query in O(log n).

Return an array of results for every \`"query"\` operation, in order.`,
  constraints: [
    '1 <= n <= 10^4',
    'edges.length == n - 1',
    '-10^4 <= vals[i] <= 10^4',
    '-10^4 <= delta <= 10^4',
    '1 <= operations.length <= 10^4',
    '0 <= node < n',
  ],
  examples: [
    {
      input: 'n = 5, edges = [[0,1],[0,2],[1,3],[1,4]], vals = [1,2,3,4,5], operations = [["query",0],["query",1],["update",3,10],["query",1]]',
      output: '[15, 11, 21]',
      explanation: 'Tree: 0→{1,2}, 1→{3,4}. Subtree(0)=1+2+3+4+5=15. Subtree(1)=2+4+5=11. After update(3,+10): node 3 becomes 14. Subtree(1)=2+14+5=21.',
    },
    {
      input: 'n = 3, edges = [[0,1],[0,2]], vals = [10,20,30], operations = [["query",0],["query",1],["query",2],["update",0,5],["query",0]]',
      output: '[60, 20, 30, 65]',
      explanation: 'Subtree(0)=60. After update root by +5: subtree(0)=65.',
    },
  ],
  hints: [
    'Flatten the tree using DFS: for each node u, record tin[u] (enter time) and tout[u] (exit time). The subtree of u corresponds to the contiguous range [tin[u], tout[u]] in the DFS order array. Place vals[u] at position tin[u] in a flat array.',
    'Build a Fenwick tree or segment tree on the flat DFS-order array. "update(node, delta)" → point update at tin[node]; "query(node)" → range sum query [tin[node], tout[node]].',
    `\`\`\`js
// Build adjacency list, DFS to assign tin/tout
const adj = Array.from({length:n}, ()=>[]);
for (const [u,v] of edges) { adj[u].push(v); adj[v].push(u); }
const tin = new Int32Array(n), tout = new Int32Array(n), order = [];
let timer = 0;
function dfs(u, parent) {
  tin[u] = timer++;
  order.push(vals[u]);
  for (const v of adj[u]) if (v !== parent) dfs(v, u);
  tout[u] = timer - 1;
}
dfs(0, -1);
// Now build a BIT on 'order' for range sum
// update(node,d): bit.add(tin[node], d)
// query(node): bit.sum(tin[node], tout[node])
\`\`\``,
  ],
  functionName: 'eulerTourSubtree',
  params: ['n', 'edges', 'vals', 'operations'],
  starterCode: {
    javascript: `function eulerTourSubtree(n, edges, vals, operations) {
  const adj = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
  const tin = new Int32Array(n), tout = new Int32Array(n);
  const flat = new Array(n);
  let timer = 0;
  function dfs(u, p) {
    tin[u] = timer++;
    flat[tin[u]] = vals[u];
    for (const v of adj[u]) if (v !== p) dfs(v, u);
    tout[u] = timer - 1;
  }
  dfs(0, -1);
  // BIT for range sum with point update
  const bit = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) { let x = i+1; while (x<=n){bit[x]+=flat[i];x+=x&-x;} }
  function add(i, d) { for (let x=i+1;x<=n;x+=x&-x) bit[x]+=d; }
  function sum(l, r) {
    let s = 0;
    for (let x=r+1;x>0;x-=x&-x) s+=bit[x];
    for (let x=l;x>0;x-=x&-x) s-=bit[x];
    return s;
  }
  const res = [];
  for (const op of operations) {
    if (op[0] === 'update') add(tin[op[1]], op[2]);
    else res.push(sum(tin[op[1]], tout[op[1]]));
  }
  return res;
}`,
    typescript: `function eulerTourSubtree(n: number, edges: number[][], vals: number[], operations: (string | number)[][]): number[] {
  const adj: number[][] = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { adj[u]!.push(v); adj[v]!.push(u); }
  const tin = new Int32Array(n), tout = new Int32Array(n);
  const flat = new Array<number>(n);
  let timer = 0;
  function dfs(u: number, p: number): void {
    tin[u] = timer++;
    flat[tin[u]!] = vals[u]!;
    for (const v of adj[u]!) if (v !== p) dfs(v, u);
    tout[u] = timer - 1;
  }
  dfs(0, -1);
  const bit = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) { let x = i+1; while (x<=n){bit[x]+=flat[i];x+=x&-x;} }
  function add(i: number, d: number): void { for (let x=i+1;x<=n;x+=x&-x) bit[x]+=d; }
  function sum(l: number, r: number): number {
    let s = 0;
    for (let x=r+1;x>0;x-=x&-x) s+=bit[x];
    for (let x=l;x>0;x-=x&-x) s-=bit[x];
    return s;
  }
  const res: number[] = [];
  for (const op of operations) {
    if (op[0] === 'update') add(tin[op[1] as number]!, op[2] as number);
    else res.push(sum(tin[op[1] as number]!, tout[op[1] as number]!));
  }
  return res;
}`,
    python: `def eulerTourSubtree(n: int, edges: list[list[int]], vals: list[int], operations: list[list]) -> list[int]:
    from collections import defaultdict
    adj = defaultdict(list)
    for u, v in edges:
        adj[u].append(v); adj[v].append(u)
    tin = [0] * n; tout = [0] * n; flat = [0] * n
    timer = [0]
    def dfs(u, p):
        tin[u] = timer[0]; flat[timer[0]] = vals[u]; timer[0] += 1
        for v in adj[u]:
            if v != p: dfs(v, u)
        tout[u] = timer[0] - 1
    dfs(0, -1)
    bit = [0] * (n + 1)
    for i in range(n):
        x = i + 1
        while x <= n: bit[x] += flat[i]; x += x & -x
    def add(i, d):
        x = i + 1
        while x <= n: bit[x] += d; x += x & -x
    def query_sum(l, r):
        s, x = 0, r + 1
        while x > 0: s += bit[x]; x -= x & -x
        x = l
        while x > 0: s -= bit[x]; x -= x & -x
        return s
    res = []
    for op in operations:
        if op[0] == 'update': add(tin[int(op[1])], int(op[2]))
        else: res.append(query_sum(tin[int(op[1])], tout[int(op[1])]))
    return res
`,
  },
  visibleTests: [
    {
      args: [5, [[0,1],[0,2],[1,3],[1,4]], [1,2,3,4,5], [['query',0],['query',1],['update',3,10],['query',1]]],
      expected: [15, 11, 21],
    },
    {
      args: [3, [[0,1],[0,2]], [10,20,30], [['query',0],['query',1],['query',2],['update',0,5],['query',0]]],
      expected: [60, 20, 30, 65],
    },
    {
      args: [1, [], [42], [['query',0],['update',0,-2],['query',0]]],
      expected: [42, 40],
    },
  ],
  hiddenTests: [
    {
      args: [4, [[0,1],[1,2],[2,3]], [1,2,3,4], [['query',0],['query',1],['query',2],['query',3]]],
      expected: [10, 9, 7, 4],
    },
    {
      args: [4, [[0,1],[1,2],[2,3]], [1,2,3,4], [['update',0,10],['query',0],['update',3,-3],['query',2]]],
      expected: [20, 4],
    },
    {
      args: [5, [[0,1],[0,2],[0,3],[0,4]], [0,1,2,3,4], [['query',0],['update',1,5],['update',2,5],['query',0],['query',3]]],
      expected: [10, 20, 3],
    },
    {
      args: [6, [[0,1],[0,2],[1,3],[1,4],[2,5]], [1,1,1,1,1,1], [['query',0],['query',1],['query',2],['update',3,-1],['query',1]]],
      expected: [6, 3, 2, 2],
    },
    {
      args: [3, [[0,1],[0,2]], [5,5,5], [['update',0,-5],['update',1,-5],['update',2,-5],['query',0]]],
      expected: [0],
    },
  ],
};
