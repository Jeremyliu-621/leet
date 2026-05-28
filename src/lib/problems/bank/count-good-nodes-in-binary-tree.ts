import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-nodes-in-binary-tree',
  title: 'Count Good Nodes in Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `Given a binary tree \`root\`, a node \`X\` in the tree is named **good** if in the path from root to \`X\` there are no nodes with a value **greater than** X's value.

Return *the number of good nodes in the binary tree.*

The tree is given as an array in level-order (BFS) format, where \`null\` represents a missing node. For example, \`[3,1,4,3,null,1,5]\` represents:
\`\`\`
    3
   / \\
  1   4
 /   / \\
3   1   5
\`\`\``,
  constraints: [
    'The number of nodes in the binary tree is in the range [1, 10^5].',
    '-10^4 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root = [3,1,4,3,null,1,5]',
      output: '4',
      explanation: 'Good nodes: 3 (root), 4 (max on path is 3), 3 (max on path is 3), 5 (max on path is 4). Node with value 1 (left child) has 3 on its path — not good. Node with value 1 (under 4) has 4 on its path — not good.',
    },
    {
      input: 'root = [3,3,null,4,2]',
      output: '3',
      explanation: 'Nodes 3 (root), 3 (left child), and 4 are good. Node 2 has 3 and 3 on its path, so not good.',
    },
    {
      input: 'root = [1]',
      output: '1',
    },
  ],
  hints: [
    'Use DFS and track the maximum value seen so far on the path from root to current node.',
    'A node is good if its value >= the maximum value seen so far.',
    'Pass maxSoFar down to children, updating it to max(maxSoFar, node.val).',
  ],
  functionName: 'goodNodes',
  params: ['root'],
  starterCode: {
    javascript: 'function goodNodes(root) {\n\n}',
    python: 'def goodNodes(root):\n    pass',
  },
  visibleTests: [
    { args: [[3, 1, 4, 3, null, 1, 5]], expected: 4 },
    { args: [[3, 3, null, 4, 2]], expected: 3 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, null, 4, 10, 8, null, null, 4]], expected: 4 },
    { args: [[1, 2]], expected: 2 },
    { args: [[5, 4, null, 3]], expected: 1 },
    { args: [[3, 1, 4, null, null, 1, 5]], expected: 3 },
    { args: [[-1, 5, -2, 4, null, null, -4]], expected: 2 },
  ],
};
