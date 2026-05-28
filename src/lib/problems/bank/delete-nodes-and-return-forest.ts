import type { Problem } from '../types';

export const problem: Problem = {
  id: 'delete-nodes-and-return-forest',
  title: 'Delete Nodes And Return Forest',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in \`to_delete\`, we are left with a forest (a disjoint union of trees).

Return the **sorted list of root values** of the trees in the remaining forest.

The tree is given as an array in level-order (BFS) where \`-1\` means null.`,
  constraints: [
    'The number of nodes in the given tree is at most 1000.',
    'Each node has a distinct value between 1 and 1000.',
    'to_delete.length <= 1000',
    'to_delete contains distinct values between 1 and 1000.',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6,7], to_delete = [3,5]',
      output: '[1,6,7]',
      explanation: 'Deleting 3 and 5 leaves roots: 1 (with subtree containing 2,4), 6, and 7. Sorted: [1,6,7].',
    },
    {
      input: 'root = [1,2,4,-1,3], to_delete = [3]',
      output: '[1]',
      explanation: 'Deleting leaf 3 leaves only root 1.',
    },
  ],
  hints: [
    'Use post-order DFS. A node is a new root if its parent was deleted (or it is the original root) and it itself is not deleted.',
    'Carry a flag "isRoot" into each DFS call. If isRoot and the node is not deleted, add it to the result list.',
    'Return null from DFS for deleted nodes, disconnecting them from their parents.',
  ],
  functionName: 'delNodes',
  params: ['root', 'to_delete'],
  starterCode: {
    javascript: 'function delNodes(root, to_delete) {\n  \n}\n',
    python: 'def delNodes(root, to_delete):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[1, 2, 3, 4, 5, 6, 7], [3, 5]],
      expected: [1, 6, 7],
    },
    {
      args: [[1, 2, 4, -1, 3], [3]],
      expected: [1],
    },
  ],
  hiddenTests: [
    { args: [[1], [1]], expected: [] },
    { args: [[1, 2, 3], [2]], expected: [1] },
    { args: [[1, 2, 3, 4], [1, 3]], expected: [2] },
    { args: [[1, 2, 3, 4, 5, 6, 7], [1]], expected: [2, 3] },
  ],
};
