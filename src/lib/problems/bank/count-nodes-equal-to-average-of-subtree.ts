import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-nodes-equal-to-average-of-subtree',
  title: 'Count Nodes Equal to Average of Subtree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree (as a level-order array where \`null\` entries represent missing nodes), return the number of nodes where the **value of the node** is equal to the **average** of the values in its **subtree** (including the node itself).

**Note:** The average of \`n\` elements is the sum of the \`n\` elements divided by \`n\` and **rounded down** to the nearest integer.`,
  constraints: [
    '`1 <= tree.length <= 1000`',
    '`0 <= tree[i] <= 1000`',
  ],
  examples: [
    {
      input: 'root = [4,8,5,0,1,null,6]',
      output: '5',
      explanation: 'Node 4: avg([4,8,5,0,1,6])=4 ✓. Node 5: avg([5,6])=5 ✓. Leaves 0,1,6 each match their own value.',
    },
    {
      input: 'root = [1]',
      output: '1',
      explanation: 'Single node: avg([1])=1, equals value 1.',
    },
  ],
  hints: [
    'Use a DFS that returns (subtreeSum, subtreeCount) for each node.',
    'At each node, check if node.val == Math.floor(subtreeSum / subtreeCount).',
    'Build the tree from the level-order array using a standard index-based construction (children of node i are at 2i+1 and 2i+2).',
  ],
  functionName: 'averageOfSubtree',
  params: ['root'],
  starterCode: {
    javascript: `function averageOfSubtree(root) {

}`,
    typescript: `function averageOfSubtree(root: (number | null)[]): number {

}`,
    python: `def averageOfSubtree(root):
    pass`,
  },
  visibleTests: [
    { args: [[4, 8, 5, 0, 1, null, 6]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[2, 2, 2]], expected: 3 },
    { args: [[5, 1, 5, 5, 5, null, 5]], expected: 4 },
  ],
};
