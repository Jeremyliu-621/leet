import type { Problem } from '../types';

export const problem: Problem = {
  id: 'lca-binary-lifting',
  title: 'Lowest Common Ancestor — Binary Lifting',
  difficulty: 'hard',
  tags: ['tree', 'binary-search'],
  description: `Given a rooted tree with \`n\` nodes (0 to n−1, root = 0) described by a **parent array** where \`parent[i]\` is the parent of node i (parent[0] = -1 for the root), and a list of \`queries\` where each query is \`[u, v]\`, return the **Lowest Common Ancestor (LCA)** for each query.

The **LCA** of two nodes u and v is the deepest node that is an ancestor of both u and v.

Use **Binary Lifting** (O(n log n) preprocessing, O(log n) per query):
1. Precompute \`depth[u]\` and \`up[u][k]\` = the 2^k-th ancestor of node u.
2. For each query [u, v]: bring the deeper node to the same depth as the shallower node using binary lifting, then simultaneously lift both nodes until they meet at their LCA.

Return an array of LCA node indices, one per query.`,
  constraints: [
    '2 <= n <= 10^4',
    '1 <= queries.length <= 10^4',
    'parent[0] = -1 (root); parent[i] >= 0 for i > 0.',
    'The input forms a valid rooted tree.',
  ],
  examples: [
    {
      input: 'parent = [-1,0,0,1,1,2,2], queries = [[3,6],[3,4],[5,6]]',
      output: '[0,1,2]',
      explanation: 'Tree: 0→{1,2}, 1→{3,4}, 2→{5,6}. LCA(3,6): 3 is under 1, 6 under 2; their deepest common ancestor is 0. LCA(3,4)=1 (both children of 1). LCA(5,6)=2 (both children of 2).',
    },
    {
      input: 'parent = [-1,0,1,2], queries = [[3,0],[2,1]]',
      output: '[0,1]',
      explanation: 'Linear chain 0→1→2→3. LCA(3,0)=0 (root is common ancestor). LCA(2,1)=1.',
    },
    {
      input: 'parent = [-1,0,0,1,2], queries = [[3,4],[3,2]]',
      output: '[0,0]',
      explanation: '3 is under 1 which is under 0; 4 is under 2 which is under 0. LCA(3,4)=0. LCA(3,2)=0.',
    },
  ],
  hints: [
    'BFS or DFS from root 0 to compute depth[u] for all u. For binary lifting: up[u][0] = parent[u]. For k>=1: up[u][k] = up[up[u][k-1]][k-1] (2^k-th ancestor = applying 2^(k-1)-th ancestor twice).',
    'To find LCA(u,v): ensure depth[u] >= depth[v]. Bring u up by (depth[u]-depth[v]) using binary decomposition. Then simultaneously lift both u and v while they differ: try each bit k from high to low; if up[u][k] != up[v][k], jump both up.',
    'When u==v after equalization, that is the LCA. Edge case: if one node is an ancestor of the other, after depth equalization they will already be equal.',
  ],
  functionName: 'lcaBinaryLifting',
  params: ['parent', 'queries'],
  starterCode: {
    javascript: `function lcaBinaryLifting(parent, queries) {\n\n}`,
    typescript: `function lcaBinaryLifting(parent: number[], queries: number[][]): number[] {\n\n}`,
    python: `def lcaBinaryLifting(parent: list[int], queries: list[list[int]]) -> list[int]:\n    pass`,
  },
  visibleTests: [
    { args: [[-1, 0, 0, 1, 1, 2, 2], [[3, 6], [3, 4], [5, 6]]], expected: [0, 1, 2] },
    { args: [[-1, 0, 1, 2], [[3, 0], [2, 1]]], expected: [0, 1] },
    { args: [[-1, 0, 0, 1, 2], [[3, 4], [3, 2]]], expected: [0, 0] },
    { args: [[-1, 0, 1], [[2, 0], [1, 2]]], expected: [0, 1] },
  ],
  hiddenTests: [
    { args: [[-1, 0, 0, 0, 1, 1, 2, 2], [[4, 6], [5, 7], [4, 5], [6, 7]]], expected: [0, 0, 1, 2] },
    { args: [[-1, 0, 1, 2, 3], [[4, 0], [4, 1], [4, 2], [4, 3]]], expected: [0, 1, 2, 3] },
    { args: [[-1, 0, 0, 1, 1, 2, 2, 3, 3], [[7, 8], [4, 6], [7, 5]]], expected: [3, 0, 0] },
    { args: [[-1, 0, 1, 1, 2, 2], [[3, 5], [4, 3], [5, 2]]], expected: [1, 1, 2] },
  ],
};
