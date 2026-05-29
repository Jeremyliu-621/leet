import type { Problem } from '../types';

export const problem: Problem = {
  id: 'kth-ancestor-of-a-tree-node',
  title: 'Kth Ancestor of a Tree Node',
  difficulty: 'hard',
  tags: ['tree', 'binary-indexed-tree', 'design'],
  description: `You are given a tree with \`n\` nodes numbered from \`0\` to \`n-1\` in the form of a parent array \`parent\` where \`parent[i]\` is the parent of node \`i\`. The root of the tree is node \`0\` (so \`parent[0] = -1\`).

You need to process the following queries: given a node \`node\` and an integer \`k\`, return the \`k\`-th ancestor of the given node in the tree. If there is no such ancestor, return \`-1\`.

Implement the \`TreeAncestor\` class:
- \`constructor(n, parent)\` — Initializes the object with the number of nodes and parent array.
- \`getKthAncestor(node, k)\` — Returns the \`k\`-th ancestor of node \`node\`, or \`-1\` if none.

The function \`treeAncestorRunner(ops, args)\` is called with a list of operation names and argument lists, and returns a list of results (\`null\` for the constructor).`,
  constraints: [
    '1 <= k <= n <= 5 * 10^4',
    'parent.length == n',
    '-1 <= parent[i] < n',
    'parent[0] == -1 (root is node 0)',
    '0 <= node < n',
    'There will be at most 5 * 10^4 queries',
  ],
  examples: [
    {
      input: 'ops = ["TreeAncestor","getKthAncestor","getKthAncestor","getKthAncestor"], args = [[7,[-1,0,0,1,1,2,2]],[3,1],[5,2],[6,3]]',
      output: '[null,1,0,-1]',
      explanation: 'Tree: 0 is root, children of 0: 1,2; children of 1: 3,4; children of 2: 5,6. getKthAncestor(3,1)=1, getKthAncestor(5,2)=0, getKthAncestor(6,3)=-1.',
    },
  ],
  hints: [
    'Precompute a binary lifting table: ancestor[i][j] = 2^j-th ancestor of node i.',
    'Fill ancestor[i][0] = parent[i]. For j>0: ancestor[i][j] = ancestor[ancestor[i][j-1]][j-1].',
    'To find k-th ancestor of node, decompose k in binary and jump through the table.',
  ],
  functionName: 'treeAncestorRunner',
  params: ['ops', 'args'],
  starterCode: {
    javascript: 'function treeAncestorRunner(ops, args) {\n  \n}\n',
    typescript: 'function treeAncestorRunner(ops: string[], args: number[][]): (number | null)[] {\n  \n}\n',
    python: 'def treeAncestorRunner(ops, args):\n    pass\n',
  },
  visibleTests: [
    {
      args: [
        ['TreeAncestor', 'getKthAncestor', 'getKthAncestor', 'getKthAncestor'],
        [[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]],
      ],
      expected: [null, 1, 0, -1],
    },
  ],
  hiddenTests: [
    {
      args: [
        ['TreeAncestor', 'getKthAncestor'],
        [[1, [-1]], [0, 1]],
      ],
      expected: [null, -1],
    },
    {
      args: [
        ['TreeAncestor', 'getKthAncestor', 'getKthAncestor'],
        [[3, [-1, 0, 1]], [2, 1], [2, 2]],
      ],
      expected: [null, 1, 0],
    },
    {
      args: [
        ['TreeAncestor', 'getKthAncestor', 'getKthAncestor', 'getKthAncestor'],
        [[7, [-1, 0, 0, 1, 1, 2, 2]], [3, 1], [5, 2], [6, 3]],
      ],
      expected: [null, 1, 0, -1],
    },
    {
      args: [
        ['TreeAncestor', 'getKthAncestor', 'getKthAncestor'],
        [[5, [-1, 0, 0, 0, 3]], [4, 2], [3, 1]],
      ],
      expected: [null, 0, 0],
    },
  ],
};
