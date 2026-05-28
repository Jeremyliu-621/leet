import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-nodes-with-highest-score',
  title: 'Count Nodes With the Highest Score',
  difficulty: 'medium',
  tags: ['arrays', 'math'],
  description: `There is a **binary** tree rooted at \`0\` consisting of \`n\` nodes. The nodes are labeled from \`0\` to \`n - 1\`. You are given a **0-indexed** integer array \`parents\` representing the tree, where \`parents[i]\` is the parent of node \`i\`. Since node \`0\` is the root, \`parents[0] == -1\`.

Each node has a **score**. To find the score of a node \`x\`, consider if we remove node \`x\` from the tree. The remaining forest will have at most 3 connected components. The **score** is the product of the sizes of these components.

Return the **number of nodes** that have the **highest score**.`,
  constraints: [
    'n == parents.length',
    '2 <= n <= 10^5',
    'parents[0] == -1',
    '0 <= parents[i] <= n - 1 for i != 0',
    'parents represents a valid binary tree',
  ],
  examples: [
    {
      input: 'parents = [-1,2,0,2,0]',
      output: '3',
      explanation: 'Tree: 0 has children 2 and 4; 2 has children 1 and 3. Removing node 1, 3, or 4 each gives score 4 (= 1 × 4, where the remaining connected component has size 4). This is the maximum score, achieved by 3 nodes.',
    },
    {
      input: 'parents = [-1,2,0]',
      output: '2',
      explanation: 'Tree: 0 has child 2; 2 has child 1. Removing node 0 gives score 2 (component of size 2). Removing node 1 gives score 2 (component of size 2). Removing node 2 gives score 1×1=1. Max=2, count=2.',
    },
  ],
  hints: [
    'First compute the subtree size for every node using a post-order DFS.',
    'For node x with left subtree size L and right subtree size R: the three component sizes are L, R, and (n - 1 - L - R) for the parent side.',
    'Multiply the non-zero components together to get the score.',
  ],
  functionName: 'countHighestScoreNodes',
  params: ['parents'],
  starterCode: {
    javascript: `function countHighestScoreNodes(parents) {

}`,
    typescript: "function countHighestScoreNodes(parents: number[]): number {\n\n}",

    python: `def countHighestScoreNodes(parents):
    pass`,
  },
  visibleTests: [
    { args: [[-1, 2, 0, 2, 0]], expected: 3 },
    { args: [[-1, 2, 0]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[-1, 0]], expected: 2 },
    { args: [[-1, 0, 0]], expected: 2 },
    { args: [[-1, 0, 1, 1, 2, 2, 3, 3]], expected: 1 },
  ],
};
