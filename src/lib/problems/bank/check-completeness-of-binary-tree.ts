import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-completeness-of-binary-tree',
  title: 'Check Completeness of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'arrays'],
  description: `Given the \`root\` of a binary tree, determine if it is a **complete binary tree**.

In a **complete binary tree**, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between \`1\` and \`2^h\` nodes inclusive at the last level \`h\`.

For this problem, the tree is given as an array in level-order format where \`-1\` represents a missing node (null). Return \`true\` if the tree is complete, \`false\` otherwise.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 100].',
    '1 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6]',
      output: 'true',
      explanation: 'Every level is complete.',
    },
    {
      input: 'root = [1,2,3,4,5,-1,7]',
      output: 'false',
      explanation: 'Node 3 has a right child (7) but no left child.',
    },
    {
      input: 'root = [1,2,3,4,5,6,-1]',
      output: 'true',
      explanation: 'Last level has nodes as far left as possible.',
    },
  ],
  hints: [
    'Use BFS level-order traversal.',
    'Once you encounter a node with a missing child, all subsequent nodes must be null (leaf).',
    'Track a "seen null" flag: if true and next BFS node is not null, return false.',
  ],
  functionName: 'isCompleteTree',
  params: ['root'],
  starterCode: {
    javascript: 'function isCompleteTree(root) {\n  \n}\n',
    typescript: "function isCompleteTree(root: number[]): boolean {\n  \n}",

    python: 'def isCompleteTree(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: true },
    { args: [[1, 2, 3, 4, 5, -1, 7]], expected: false },
    { args: [[1, 2, 3, 4, 5, 6, -1]], expected: true },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 2]], expected: true },
    { args: [[1, -1, 2]], expected: false },
    { args: [[1, 2, 3, 4, -1, 5, 6]], expected: false },
    { args: [[1, 2, 3, 4, 5, -1, -1]], expected: true },
  ],
};
