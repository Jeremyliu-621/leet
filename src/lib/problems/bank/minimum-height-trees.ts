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
  // Return sorted array of MHT root node labels
}`,
    python: `def findMinHeightTrees(n, edges):
    # Return sorted list of MHT root node labels
    pass`,
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
