import type { Problem } from '../types';

export const problem: Problem = {
  id: 'smallest-string-starting-from-leaf',
  title: 'Smallest String Starting From Leaf',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the \`root\` of a binary tree where each node has a value in the range \`[0, 25]\` representing the letters \`'a'\` to \`'z'\`.

Return the **lexicographically smallest** string that starts at a leaf of this tree and ends at the root.

As a reminder, any shorter prefix of a string is **lexicographically smaller**. For example, \`"ab"\` is lexicographically smaller than \`"aba"\`.

A leaf of a node is a node that has no children.

The tree is given as a level-order array where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 8500]`.',
    '`0 <= Node.val <= 25`',
  ],
  examples: [
    {
      input: 'root = [0,1,2,3,4,3,4]',
      output: '"dba"',
      explanation:
        'Paths from leaves to root (written leaf→root): "dba" (3→1→0), "eba" (4→1→0), "dca" (3→2→0), "eca" (4→2→0). The lexicographically smallest is "dba".',
    },
    {
      input: 'root = [25,1,3,1,3,0,2]',
      output: '"adz"',
    },
  ],
  hints: [
    'DFS from root to leaves, building the path as you go. At each leaf, the string from that leaf to the root is the reversed path.',
    'Reverse the accumulated path at each leaf and compare with the current best using lexicographic comparison.',
    'Keep a `best` variable initialized to a value that is guaranteed to be larger than any answer (e.g., `"{"` which comes after `"z"` in ASCII). Update `best = min(best, reversed_path)` at each leaf.',
  ],
  functionName: 'smallestFromLeaf',
  params: ['root'],
  starterCode: {
    javascript: `function smallestFromLeaf(root) {
  // root is given as a level-order array (null = missing node)
}`,
    python: `def smallestFromLeaf(root):
    # root is given as a level-order array (None = missing node)
    pass`,
  },
  visibleTests: [
    { args: [[0, 1, 2, 3, 4, 3, 4]], expected: 'dba' },
    { args: [[25, 1, 3, 1, 3, 0, 2]], expected: 'adz' },
    { args: [[2, 2, 1, null, 1, 0, null]], expected: 'abc' },
  ],
  hiddenTests: [
    { args: [[0]], expected: 'a' },
    { args: [[0, 1]], expected: 'ba' },
    { args: [[0, 1, 2]], expected: 'ba' },
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 'hud' },
    { args: [[0, 1, 2, 3, 4, 5]], expected: 'dba' },
    { args: [[1, 0, 2]], expected: 'ab' },
    { args: [[4, 0, null, 1, null, 2]], expected: 'cbae' },
    { args: [[25, 25, 25, 25, 25]], expected: 'zz' },
  ],
};
