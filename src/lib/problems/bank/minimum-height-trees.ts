import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-height-trees',
  title: 'Minimum Height Trees',
  difficulty: 'medium',
  tags: ['graph'],
  description: `A tree is an undirected graph in which any two vertices are connected by exactly one path.

Given an undirected tree with \`n\` nodes labeled \`0\` to \`n - 1\`, and an array of \`edges\` where \`edges[i] = [ai, bi]\` describes an undirected edge, return a list of all **MHT (Minimum Height Tree) roots**. A **Minimum Height Tree** is a rooted tree with the minimum height.

You may return the answer in **any order**. The result is sorted before comparison.

**Note:** There are at most **two** MHT roots.`,
  constraints: [
    '1 <= n <= 2 * 10^4',
    '0 <= edges.length <= n - 1',
    '0 <= ai, bi < n',
    'ai != bi',
    'All the pairs (ai, bi) are distinct',
    'The input is guaranteed to form a valid tree',
  ],
  examples: [
    {
      input: 'n = 4, edges = [[1,0],[1,2],[1,3]]',
      output: '[1]',
      explanation: 'Node 1 is the center. Rooting at 1 gives height 1; rooting at any leaf gives height 2.',
    },
    {
      input: 'n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]',
      output: '[3,4]',
      explanation: 'Rooting at 3 or 4 gives height 2.',
    },
  ],
  hints: [
    'Trim leaves iteratively. Repeatedly remove leaf nodes (degree 1) from the tree until 1 or 2 nodes remain — those are the MHT roots.',
    'Think of it like peeling an onion: find all current leaves, remove them, update degrees. Repeat until ≤ 2 nodes remain.',
    'Use a degree array. Initialize a queue with all leaves (degree 1). On each round, remove them and add newly created leaves to the next round.',
  ],
  functionName: 'findMinHeightTrees',
  params: ['n', 'edges'],
  starterCode: {
    javascript: `function findMinHeightTrees(n, edges) {
  if (n === 1) return [0];
  const degree = new Array(n).fill(0);
  const adj = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); degree[u]++; degree[v]++; }
  let leaves = [];
  for (let i = 0; i < n; i++) if (degree[i] === 1) leaves.push(i);
  let remaining = n;
  while (remaining > 2) {
    remaining -= leaves.length;
    const next = [];
    for (const leaf of leaves) for (const nb of adj[leaf]) if (--degree[nb] === 1) next.push(nb);
    leaves = next;
  }
  return leaves.sort((a, b) => a - b);
}`,
    typescript: `function findMinHeightTrees(n: number, edges: number[][]): number[] {
  if (n === 1) return [0];
  const degree = new Array<number>(n).fill(0);
  const adj: number[][] = Array.from({length: n}, () => []);
  for (const [u, v] of edges) { adj[u!]!.push(v!); adj[v!]!.push(u!); degree[u!]!++; degree[v!]!++; }
  let leaves: number[] = [];
  for (let i = 0; i < n; i++) if (degree[i]! === 1) leaves.push(i);
  let remaining = n;
  while (remaining > 2) {
    remaining -= leaves.length;
    const next: number[] = [];
    for (const leaf of leaves) for (const nb of adj[leaf]!) if (--degree[nb]! === 1) next.push(nb);
    leaves = next;
  }
  return leaves.sort((a, b) => a - b);
}`,
    python: `def findMinHeightTrees(n, edges):
    if hasattr(edges, 'to_py'): edges = [[int(x) for x in (e.to_py() if hasattr(e, 'to_py') else e)] for e in edges.to_py()]
    if n == 1: return [0]
    degree = [0]*n; adj = [[] for _ in range(n)]
    for u, v in edges: adj[u].append(v); adj[v].append(u); degree[u] += 1; degree[v] += 1
    leaves = [i for i in range(n) if degree[i] == 1]; remaining = n
    while remaining > 2:
        remaining -= len(leaves); nxt = []
        for leaf in leaves:
            for nb in adj[leaf]:
                degree[nb] -= 1
                if degree[nb] == 1: nxt.append(nb)
        leaves = nxt
    return sorted(leaves)`,
  },
  visibleTests: [
    { args: [4, [[1, 0], [1, 2], [1, 3]]], expected: [1] },
    { args: [6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]], expected: [3, 4] },
    { args: [1, []], expected: [0] },
  ],
  hiddenTests: [
    { args: [2, [[0, 1]]], expected: [0, 1] },
    { args: [7, [[0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 6]]], expected: [1, 2] },
    { args: [5, [[0, 1], [1, 2], [2, 3], [3, 4]]], expected: [2] },
    { args: [3, [[0, 1], [1, 2]]], expected: [1] },
  ],
};
