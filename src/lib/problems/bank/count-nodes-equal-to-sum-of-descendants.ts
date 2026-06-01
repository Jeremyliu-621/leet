import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-nodes-equal-to-sum-of-descendants',
  title: 'Count Nodes Equal to Sum of Descendants',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the number of nodes where the value of the node is equal to the **sum of the values of its descendants**.

A **descendant** of a node \`x\` is any node that is on the path from node \`x\` to some leaf node. The sum is \`0\` if the node is a leaf.

The tree is given as a **level-order** array where \`null\` indicates a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^5]',
    '0 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'root = [10,3,4,2,1,1,0,null,null,null,null,null,null,null,1]',
      output: '2',
      explanation: 'Node 3 has descendants 2,1 summing to 3. Node 0 (leaf) has sum 0=val. The node at val=10 has descendants summing to 3+4+2+1+1+0+1=12≠10. Matching nodes: 3 and 0.',
    },
    {
      input: 'root = [5,2,3]',
      output: '1',
      explanation: 'Root node 5 has descendants 2+3=5. Only the root matches.',
    },
  ],
  hints: [
    'Use a post-order DFS (process children before parent).',
    'At each node, compute the sum of all values in its subtree (excluding itself).',
    'Return the subtree sum upward; count nodes where val == descendant sum.',
  ],
  functionName: 'equalToDescendants',
  params: ['root'],
  starterCode: {
    javascript: 'function equalToDescendants(root) {\n  \n}\n',
    typescript: 'function equalToDescendants(root: (number | null)[]): number {\n  \n}',
    python: 'def equalToDescendants(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 2, 3]], expected: 1 },
    { args: [[0, 0, 0]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1, 0, 0]], expected: 2 },
    { args: [[7, 2, 5, 2, 0, 1, 4]], expected: 3 },
    { args: [[1]], expected: 0 },
  ],
};
