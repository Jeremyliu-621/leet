import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-duplicate-subtrees',
  title: 'Find Duplicate Subtrees',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `Given the \`root\` of a binary tree, return all **duplicate subtrees**.

For each kind of duplicate subtrees, you only need to return the root node of any **one** of them.

Two trees are **duplicate** if they have the **same structure** with the **same node values**.

**Example 1:**
\`\`\`
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
\`\`\`

**Example 2:**
\`\`\`
Input: root = [2,1,1]
Output: [[1]]
\`\`\`

**Example 3:**
\`\`\`
Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]
\`\`\``,
  examples: [
    { input: '[1,2,3,4,null,2,4,null,null,4]', output: '[[2,4],[4]]' },
    { input: '[2,1,1]', output: '[[1]]' },
    { input: '[2,2,2,3,null,3,null]', output: '[[2,3],[3]]' },
  ],
  constraints: [
    'The number of the nodes in the tree will be in the range [1, 5000].',
    '-200 <= Node.val <= 200',
  ],
  hints: [
    'Serialize each subtree as a string using DFS post-order: "left#right#val".',
    'Use a hash map from serialization to count. If count hits 2, add the node to results (only once).',
    'Return the root node values as BFS arrays for comparison.',
  ],
  functionName: 'findDuplicateSubtrees',
  params: ['root'],
  starterCode: {
    javascript: `function findDuplicateSubtrees(root) {

}`,
    python: `def findDuplicateSubtrees(root):
    `,
  },
  visibleTests: [
    { args: [[1,2,3,4,null,2,4,null,null,4]], expected: [[2,4],[4]] },
    { args: [[2,1,1]], expected: [[1]] },
    { args: [[2,2,2,3,null,3,null]], expected: [[2,3],[3]] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[0,0,0,0,null,null,0,null,null,null,0]], expected: [[0]] },
  ],
};
