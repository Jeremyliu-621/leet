import type { Problem } from '../types';

export const problem: Problem = {
  id: 'binary-tree-coloring-game',
  title: 'Binary Tree Coloring Game',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Two players play a turn-based game on a binary tree. We are given the \`root\` of this binary tree, and the number of nodes \`n\` in the tree. \`n\` is odd, and each node has a distinct value from \`1\` to \`n\`.

Initially, the first player names a value \`x\` with \`1 <= x <= n\`, and the second player names a value \`y\` with \`1 <= y <= n\` and \`y != x\`. The first player colors the node with value \`x\` red, and the second player colors the node with value \`y\` blue.

Then, the players take turns starting with the first player. In each turn, that player chooses a node of their color (red if player 1, blue if player 2) and colors an uncolored neighbor of the chosen node with that player's color. An **adjacent** (parent, left child, right child) uncolored node can be chosen.

If (and only if) a player cannot choose such a neighbor, they pass their turn. If both players pass, the game ends, and the winner is the player that colored more nodes.

You are the second player. If it is possible for you to choose such a \`y\` to ensure you win, return \`true\`. If it is not possible, return \`false\`.`,
  constraints: [
    'The number of nodes in the tree is n.',
    '1 <= x <= n <= 100',
    'n is odd.',
    '1 <= Node.val <= n',
    'All Node.val are unique.',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,5,6,7,8,9,10,11], n = 11, x = 3',
      output: 'true',
      explanation: 'Node 3 has left subtree of size 2, right subtree of size 0. Parent side has 11-3=8 nodes. Second player can pick the parent side (8 nodes) and win.',
    },
    {
      input: 'root = [1,2,3], n = 3, x = 1',
      output: 'false',
      explanation: 'Node 1 is the root. Left has 1 node, right has 1 node. Total = 3, split evenly around x. Second player gets at most 1 node, first gets 2.',
    },
  ],
  hints: [
    'The second player must pick either the left child, right child, or parent of x.',
    'Compute the sizes: leftSize = size of left subtree of x, rightSize = size of right subtree of x, parentSize = n - leftSize - rightSize - 1.',
    'The second player wins if any of {leftSize, rightSize, parentSize} is greater than n/2.',
  ],
  functionName: 'btreeGameWinningMove',
  params: ['root', 'n', 'x'],
  starterCode: {
    javascript: `function btreeGameWinningMove(root, n, x) {

}`,
    typescript: `function btreeGameWinningMove(root: TreeNode | null, n: number, x: number): boolean {

}`,
    python: `def btreeGameWinningMove(root, n, x):
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3,4,5,6,7,8,9,10,11], 11, 3], expected: true },
    { args: [[1,2,3], 3, 1], expected: false },
  ],
  hiddenTests: [
    { args: [[1,2,3,4,5,6,7], 7, 4], expected: true },
    { args: [[1,2,3,4,5,6,7], 7, 1], expected: false },
    { args: [[1], 1, 1], expected: false },
    { args: [[1,2,3,4,5,6,7], 7, 2], expected: true },
  ],
};
