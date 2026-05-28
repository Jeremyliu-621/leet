import type { Problem } from '../types';

export const problem: Problem = {
  id: 'two-sum-iv-bst',
  title: 'Two Sum IV - Input is a BST',
  difficulty: 'easy',
  tags: ['tree', 'hash-map'],
  description: `Given the \`root\` of a binary search tree and an integer \`k\`, return \`true\` if there exist two elements in the BST such that their sum is equal to \`k\`, or \`false\` otherwise.

The BST is given as a level-order array where \`null\` represents missing nodes.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-10^4 <= Node.val <= 10^4',
    'root is guaranteed to be a valid binary search tree.',
    '-10^5 <= k <= 10^5',
  ],
  examples: [
    { input: 'root = [5,3,6,2,4,null,7], k = 9', output: 'true', explanation: '3 + 6 = 9.' },
    { input: 'root = [5,3,6,2,4,null,7], k = 28', output: 'false', explanation: 'No two elements sum to 28.' },
  ],
  hints: [
    'Do an in-order traversal to get a sorted array of values. Then use a two-pointer approach to find if any two values sum to k.',
    'In-order traversal of a BST gives sorted values. Collect all values into an array, then use two-pointer or a Set to find if any pair sums to `k`.',
    `\`\`\`js
const vals = [];
function inorder(node) { if (!node) return; inorder(node.left); vals.push(node.val); inorder(node.right); }
inorder(root);
const s = new Set(vals);
return vals.some(v => v !== k-v && s.has(k-v));\`\`\``
  ],
  functionName: 'findTarget',
  params: ['root', 'k'],
  starterCode: {
    javascript: 'function findTarget(root, k) {\n  \n}\n',
    python: 'def findTarget(root, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 3, 6, 2, 4, null, 7], 9], expected: true },
    { args: [[5, 3, 6, 2, 4, null, 7], 28], expected: false },
    { args: [[2, 1, 3], 4], expected: true },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: false },
    { args: [[1], 2], expected: false },
    { args: [[2, 1, 3], 3], expected: true },
    { args: [[2, 1, 3], 5], expected: true },
    { args: [[5, 3, 6, 2, 4, null, 7], 11], expected: true },
  ],
};
