import type { Problem } from '../types';

export const problem: Problem = {
  id: 'serialize-deserialize-tree',
  title: 'Serialize and Deserialize Binary Tree',
  difficulty: 'hard',
  tags: ['tree', 'strings', 'design'],
  description: `Design an algorithm to **serialize** a binary tree to a string and **deserialize** the string back to the original tree structure.

The tree is given as a level-order array where \`null\` represents a missing node (LeetCode format). Your task is to round-trip this array through your serialize/deserialize functions:

1. Convert the level-order array to a tree.
2. Serialize the tree to a string.
3. Deserialize the string back to a tree.
4. Return the level-order array of the reconstructed tree.

The reconstructed level-order array must exactly match the input (including trailing nulls stripped to match LeetCode convention).`,
  constraints: [
    'The tree has at most 10^4 nodes.',
    '-1000 <= Node.val <= 1000',
    'Input is a valid LeetCode level-order array.',
  ],
  examples: [
    {
      input: 'tree = [1,2,3,null,null,4,5]',
      output: '[1,2,3,null,null,4,5]',
      explanation: 'Serialize to a string, then deserialize; the output level-order must match the input.',
    },
    {
      input: 'tree = []',
      output: '[]',
      explanation: 'Empty tree serializes and deserializes to empty.',
    },
    {
      input: 'tree = [1]',
      output: '[1]',
      explanation: 'Single node.',
    },
  ],
  hints: [
    'Use preorder (root→left→right) traversal with null markers. Serialize: DFS and emit value or "null" at each node. Deserialize: split by separator, use a pointer/iterator to reconstruct with recursive DFS.',
    'To produce the expected level-order output for comparison, do a BFS after deserialization and strip trailing nulls from the result array.',
    'Preorder serialize: "1,2,null,null,3,4,null,null,5,null,null". Deserialize by consuming tokens left to right recursively.',
  ],
  functionName: 'serializeDeserializeTree',
  params: ['tree'],
  starterCode: {
    javascript: `function serializeDeserializeTree(tree) {\n\n}`,
    typescript: `function serializeDeserializeTree(tree: (number | null)[]): (number | null)[] {\n\n}`,
    python: `def serializeDeserializeTree(tree: list) -> list:\n    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, null, null, 4, 5]], expected: [1, 2, 3, null, null, 4, 5] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [1, 2] },
  ],
  hiddenTests: [
    { args: [[1, null, 2, null, 3]], expected: [1, null, 2, null, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[5, 4, 7, 3, null, 2, null, -1, null, 9]], expected: [5, 4, 7, 3, null, 2, null, -1, null, 9] },
    { args: [[-1]], expected: [-1] },
    { args: [[1, 2, null, 3, null, 4, null, 5]], expected: [1, 2, null, 3, null, 4, null, 5] },
  ],
};
