import type { Problem } from '../types';

export const problem: Problem = {
  id: 'check-completeness-of-a-binary-tree',
  title: 'Check Completeness of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, determine if it is a **complete binary tree**.

In a **complete binary tree**, every level, except possibly the last, is completely filled. In the last level, all nodes are as far left as possible. It can have between \`1\` and \`2^h\` nodes inclusive at the last level \`h\`.

The tree is given as a level-order array where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 100]`.',
    '`1 <= Node.val <= 1000`',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6]',
      output: 'true',
      explanation: 'Every level is fully filled except the last, and all nodes are as far left as possible.',
    },
    {
      input: 'root = [1,2,3,4,5,null,7]',
      output: 'false',
      explanation: 'Node 7 is in position 7 (1-indexed), but position 6 is null. Nodes are not as far left as possible.',
    },
  ],
  hints: [
    'Use BFS (level-order traversal). Once you encounter a null node, all subsequent nodes in the queue must also be null.',
    'Add both children (even null ones) to the queue. If you see a null child followed by a non-null node, the tree is not complete.',
  ],
  functionName: 'isCompleteTree',
  params: ['root'],
  starterCode: {
    javascript: `function isCompleteTree(root) {

}`,
    python: `def isCompleteTree(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 4, 5, 6]], expected: true },
    { args: [[1, 2, 3, 4, 5, null, 7]], expected: false },
  ],
  hiddenTests: [
    { args: [[1]], expected: true },
    { args: [[1, 2]], expected: true },
    { args: [[1, null, 2]], expected: false },
    { args: [[1, 2, 3]], expected: true },
    { args: [[1, 2, 3, 4]], expected: true },
    { args: [[1, 2, 3, null, 4]], expected: false },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: true },
    { args: [[1, 2, 3, 4, 5, 6, 7, 8]], expected: true },
    { args: [[1, 2, 3, 4, 5, 6, null, 8]], expected: false },
  ],
};
