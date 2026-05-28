import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __toArray__(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function allPossibleFBTRunner(n) {
  const trees = allPossibleFBT(n);
  return trees.map(__toArray__).sort((a, b) => JSON.stringify(a) < JSON.stringify(b) ? -1 : JSON.stringify(a) > JSON.stringify(b) ? 1 : 0);
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __to_array__(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            result.append(None)
            continue
        result.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

import json
def allPossibleFBTRunner(n):
    trees = allPossibleFBT(n)
    arrays = [__to_array__(t) for t in trees]
    return sorted(arrays, key=lambda a: json.dumps(a))
`.trim();

export const problem: Problem = {
  id: 'all-possible-full-binary-trees',
  title: 'All Possible Full Binary Trees',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `Given an integer \`n\`, return **all possible full binary trees** with \`n\` nodes. Each node of each tree in the answer must have \`Node.val == 0\`.

A **full binary tree** is a binary tree where every node has either **0 or 2 children**.

Return the list of BFS-order arrays (level-order, trailing nulls omitted), **sorted lexicographically** by their JSON representation.

> **Note:** A \`TreeNode\` class is pre-defined. Implement \`allPossibleFBT(n)\` which returns an array of \`TreeNode\` root references.`,
  constraints: [
    '1 <= n <= 20',
    'The answer will always exist (i.e., n is odd)',
    'The number of nodes is guaranteed odd (full binary trees with n nodes require n to be odd)',
  ],
  examples: [
    {
      input: 'n = 7',
      output: '[[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,null,null,0,0,null,null,0,0]]',
      explanation: 'Five full binary trees with 7 nodes.',
    },
    {
      input: 'n = 1',
      output: '[[0]]',
      explanation: 'Only one full binary tree: a single root node.',
    },
    {
      input: 'n = 3',
      output: '[[0,0,0]]',
      explanation: 'Only one full binary tree: root with left and right children.',
    },
  ],
  hints: [
    'Use divide and conquer with memoization. For `n` nodes, the root takes 1 node, and the remaining `n-1` nodes are split between left and right subtrees. Since both must be full binary trees, each subtree must have an odd number of nodes.',
    'Iterate over all odd values `left_size` from 1 to `n-2` (step 2). For each split, recursively generate all full binary trees of size `left_size` and `n-1-left_size`, then combine every pair.',
    'Cache results by `n` to avoid recomputation. Return `[new TreeNode(0)]` for `n == 1` (base case). Return `[]` for even `n`.',
  ],
  functionName: 'allPossibleFBTRunner',
  params: ['n'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Return an array of TreeNode roots:\nfunction allPossibleFBT(n) {\n  \n}\n',
    typescript: "function allPossibleFBTRunner(n: number): number[][] {\n  \n}",

    python:
      '# TreeNode class is pre-defined. Return a list of TreeNode roots:\ndef allPossibleFBT(n):\n    pass\n',
  },
  visibleTests: [
    { args: [1], expected: [[0]] },
    { args: [3], expected: [[0, 0, 0]] },
  ],
  hiddenTests: [
    { args: [5], expected: [[0, 0, 0, 0, 0], [0, 0, 0, null, null, 0, 0]] },
    {
      args: [7],
      expected: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, null, null, 0, 0],
        [0, 0, 0, 0, 0, null, null, null, null, 0, 0],
        [0, 0, 0, null, null, 0, 0, 0, 0],
        [0, 0, 0, null, null, 0, 0, null, null, 0, 0],
      ],
    },
    {
      args: [9],
      expected: [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,null,null,0,0],
        [0,0,0,0,0,0,0,null,null,null,null,0,0],
        [0,0,0,0,0,0,0,null,null,null,null,null,null,0,0],
        [0,0,0,0,0,null,null,0,0,0,0],
        [0,0,0,0,0,null,null,0,0,null,null,0,0],
        [0,0,0,0,0,null,null,0,0,null,null,null,null,0,0],
        [0,0,0,0,0,null,null,null,null,0,0,0,0],
        [0,0,0,0,0,null,null,null,null,0,0,null,null,0,0],
        [0,0,0,null,null,0,0,0,0,0,0],
        [0,0,0,null,null,0,0,0,0,null,null,0,0],
        [0,0,0,null,null,0,0,0,0,null,null,null,null,0,0],
        [0,0,0,null,null,0,0,null,null,0,0,0,0],
        [0,0,0,null,null,0,0,null,null,0,0,null,null,0,0],
      ],
    },
  ],
};
