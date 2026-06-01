import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-operations-to-sort-binary-tree-by-level',
  title: 'Minimum Operations to Sort a Binary Tree by Level',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the root of a binary tree with **unique** values.

In one operation, you can choose any two nodes **at the same level** and swap their values.

Return the **minimum** number of operations needed to make the values at each level sorted in a **strictly increasing** order.

The **level** of a node is the number of edges along the path between it and the root node.

The tree is given as a **level-order** array where \`null\` indicates a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^5]',
    '1 <= Node.val <= 10^5',
    'All the values of the tree are unique.',
  ],
  examples: [
    {
      input: 'root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]',
      output: '3',
      explanation: 'Level 1: [4,3] → swap to [3,4] (1 op). Level 2: [7,6,8,5] → sort needs 2 swaps. Total=3.',
    },
    {
      input: 'root = [1,3,2,7,6,5,4]',
      output: '3',
      explanation: 'Level 1: [3,2] → 1 swap. Level 2: [7,6,5,4] → 2 swaps. Total=3.',
    },
  ],
  hints: [
    'BFS to collect each level\'s values. For each level, compute the minimum number of swaps to sort it.',
    'Minimum swaps to sort = n - (number of cycles in the mapping from current to sorted positions).',
    'To find cycles: use the sorted array as a target; follow the permutation mapping until you return to the start.',
  ],
  functionName: 'minimumOperationsTree',
  params: ['root'],
  starterCode: {
    javascript: 'function minimumOperationsTree(root) {\n  \n}\n',
    typescript: 'function minimumOperationsTree(root: (number | null)[]): number {\n  \n}',
    python: 'def minimumOperationsTree(root):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]],
      expected: 3,
    },
    { args: [[1, 3, 2, 7, 6, 5, 4]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[3, 1, 2]], expected: 0 },
    { args: [[1, 4, 2, 3]], expected: 1 },
  ],
};
