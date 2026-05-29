import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-sort-a-binary-tree-by-level',
  title: 'Minimum Number of Operations to Sort a Binary Tree by Level',
  difficulty: 'medium',
  tags: ['tree', 'simulation'],
  description: `You are given the root of a binary tree with **unique** values.

In one operation, you can choose any two nodes **at the same level** and swap their values.

Return the **minimum** number of operations needed to make the values at each level sorted in a **strictly increasing** order.

The level of a node is the number of edges along the path between it and the root node.

**Note:** The sort order is determined by the node values, not their positions.

The input is given as an array in level-order (BFS) format, where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 10^5]`.',
    '`1 <= Node.val <= 10^5`',
    'All the values of the tree are **unique**.',
  ],
  examples: [
    {
      input: 'root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]',
      output: '3',
      explanation: 'Level 1: [4,3] → swap → [3,4]: 1 op. Level 2: [7,6,8,5] → sort with 2 swaps: 2 ops. Total: 3.',
    },
    {
      input: 'root = [1,3,2,7,6,5,4]',
      output: '3',
      explanation: 'Level 1: [3,2] → 1 swap. Level 2: [7,6,5,4] → 2 swaps. Total: 3.',
    },
    {
      input: 'root = [1,2,3,4,5,6]',
      output: '0',
      explanation: 'All levels are already sorted in strictly increasing order.',
    },
  ],
  hints: [
    'Use BFS to collect the values at each level.',
    'To sort an array in minimum swaps, find the number of cycles in the permutation that maps each element to its sorted position.',
    'The minimum swaps to sort an array = n - (number of cycles), where n is the length of the array.',
    'Use a map from value to sorted-position index, then trace cycles.',
  ],
  functionName: 'minimumOperations',
  params: ['root'],
  starterCode: {
    javascript: `function minimumOperations(root) {
  // root is given as a level-order array (null for missing nodes)
  // Return minimum swaps to sort each level
}`,
    typescript: `function minimumOperations(root: (number | null)[]): number {
  // root is given as a level-order array (null for missing nodes)
  // Return minimum swaps to sort each level
}`,
    python: `def minimumOperations(root):
    # root is given as a level-order array (null for missing nodes)
    # Return minimum swaps to sort each level
    pass`,
  },
  visibleTests: [
    { args: [[1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]], expected: 3 },
    { args: [[1, 3, 2, 7, 6, 5, 4]], expected: 3 },
    { args: [[1, 2, 3, 4, 5, 6]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2]], expected: 0 },
    { args: [[1, 3, 2]], expected: 1 },
    { args: [[1, 2, 3, 7, 6, 5, 4]], expected: 2 },
    { args: [[1, 4, 3, 2]], expected: 1 },
    { args: [[5, 2, 3, 1, 4, 6, 7]], expected: 0 },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]], expected: 0 },
    { args: [[1, 2, 3, null, 5, 6, null]], expected: 0 },
  ],
};
