import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-number-of-operations-to-sort-binary-tree-by-level',
  title: 'Minimum Number of Operations to Sort a Binary Tree by Level',
  difficulty: 'medium',
  tags: ['tree', 'arrays'],
  description: `You are given the root of a binary tree with **unique values**.

In one operation, you can choose any two nodes **at the same level** of the tree and swap their values.

Return the minimum number of operations needed to make the values at each level sorted in a **strictly increasing** order.

The **level** of a node is the number of edges along the path between it and the root node.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^5].',
    '1 <= Node.val <= 10^5',
    'All the values of the tree are unique.',
  ],
  examples: [
    {
      input: 'root = [1,4,3,7,6,8,5,null,null,null,null,9,null,10]',
      output: '3',
      explanation:
        'Level 1 needs 1 swap (4↔3). Level 2 needs 2 swaps to sort [7,6,8,5] → [5,6,7,8].',
    },
    {
      input: 'root = [1,3,2,7,6,5,4]',
      output: '3',
      explanation:
        'Level 1 needs 1 swap (3↔2). Level 2 needs 2 swaps to sort [7,6,5,4] → [4,5,6,7].',
    },
    {
      input: 'root = [1,2,3,4,5,6]',
      output: '0',
      explanation: 'All levels are already sorted.',
    },
  ],
  hints: [
    'Use BFS to process each level. For each level, compute the minimum swaps to sort it.',
    'Minimum swaps to sort an array = n - (number of cycles in the value-to-sorted-position permutation).',
    'Build the permutation: pos[sorted[i]] = i, perm[i] = pos[arr[i]]. Count cycles using visited array.',
  ],
  functionName: 'minimumOperations',
  params: ['root'],
  starterCode: {
    javascript: `function minimumOperations(root) {

}`,
    typescript: `function minimumOperations(root: TreeNode | null): number {

}`,
    python: `def minimumOperations(root):
    pass`,
  },
  visibleTests: [
    {
      args: [[1, 4, 3, 7, 6, 8, 5, null, null, null, null, 9, null, 10]],
      expected: 3,
    },
    {
      args: [[1, 3, 2, 7, 6, 5, 4]],
      expected: 3,
    },
    {
      args: [[1, 2, 3, 4, 5, 6]],
      expected: 0,
    },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 3, 2]], expected: 1 },
    { args: [[1, 2, 3, 5, 4]], expected: 1 },
    { args: [[1, 2, 3, 4, 5, 7, 6]], expected: 1 },
    { args: [[3, 2, 1]], expected: 1 },
    { args: [[1, 3, 2, 5, 4, 7, 6]], expected: 3 },
  ],
};
