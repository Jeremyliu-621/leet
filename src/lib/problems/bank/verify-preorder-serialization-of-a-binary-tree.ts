import type { Problem } from '../types';

export const problem: Problem = {
  id: 'verify-preorder-serialization-of-a-binary-tree',
  title: 'Verify Preorder Serialization of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'stack'],
  description: `One way to serialize a binary tree is to use **preorder traversal**. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as \`'#'\`.

Given a string of comma-separated values \`preorder\`, return \`true\` if it is a correct preorder traversal serialization of some binary tree.

It is **guaranteed** that each comma-separated value in the string is either an integer or a character \`'#'\` representing a null node.

You may assume that the input format is always valid. For example, it could never contain two consecutive commas, such as \`"1,,#"\`.

> **Note:** You are not allowed to reconstruct the tree.`,
  constraints: [
    '1 <= preorder.length <= 10^4',
    'preorder consists of integers in the range [0, 100] and \'#\' separated by commas.',
  ],
  examples: [
    {
      input: 'preorder = "9,3,4,#,#,1,#,#,2,#,6,#,#"',
      output: 'true',
      explanation: 'This string represents a valid binary tree with 9 nodes and 7 null pointers.',
    },
    {
      input: 'preorder = "1,#"',
      output: 'false',
      explanation: 'Node 1 has a left null child but is missing its right child.',
    },
    {
      input: 'preorder = "#"',
      output: 'true',
      explanation: 'An empty tree (single null) is valid.',
    },
  ],
  hints: [
    'Think of each non-null node as consuming one "slot" and creating two new slots (for its left and right children). A null node consumes one slot and creates none.',
    'Start with 1 available slot (for the root). For each node in preorder: decrement slots by 1; if slots becomes negative, return false; if the node is non-null, add 2 slots.',
    'After processing all nodes, return true if and only if slots equals 0.',
  ],
  functionName: 'isValidSerialization',
  params: ['preorder'],
  starterCode: {
    javascript: `function isValidSerialization(preorder) {

}`,
    typescript: "function isValidSerialization(preorder: string): boolean {\n\n}",

    python: `def isValidSerialization(preorder):
    pass`,
  },
  visibleTests: [
    { args: ['9,3,4,#,#,1,#,#,2,#,6,#,#'], expected: true },
    { args: ['1,#'], expected: false },
    { args: ['#'], expected: true },
  ],
  hiddenTests: [
    { args: ['1,#,#'], expected: true },
    { args: ['9,#,#,1'], expected: false },
    { args: ['1,2,3,#,#,#,#'], expected: true },
    { args: ['1,#,2,3'], expected: false },
    { args: ['1'], expected: false },
    { args: ['1,2,#,#,3,#,#'], expected: true },
  ],
};
