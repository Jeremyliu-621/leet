import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}
function pseudoPalindromicPathsRunner(arr) { return pseudoPalindromicPaths(__fromArray__(arr)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = TreeNode(arr[0])
    queue = [root]
    i = 1
    while queue and i < len(arr):
        node = queue.pop(0)
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

def pseudoPalindromicPathsRunner(arr):
    return pseudoPalindromicPaths(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'pseudo-palindromic-paths-in-a-binary-tree',
  title: 'Pseudo-Palindromic Paths in a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary tree where node values are digits from 1 to 9, a root-to-leaf path is **pseudo-palindromic** if at least one permutation of the node values along the path forms a palindrome.

Return the number of pseudo-palindromic paths from the root node to leaf nodes.

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

> **Note:** A \`TreeNode\` class and a \`pseudoPalindromicPathsRunner(arr)\` wrapper are pre-defined. Implement \`pseudoPalindromicPaths(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 100000]',
    '1 <= Node.val <= 9',
  ],
  examples: [
    {
      input: 'root = [2,3,1,3,1,null,1]',
      output: '2',
      explanation:
        'Path 2→3→3: digit 3 appears twice (even), digit 2 once (odd) → at most one odd → pseudo-palindromic. Path 2→1→1: digit 1 appears twice (even), digit 2 once → pseudo-palindromic. Path 2→3→1: digits 2, 3, 1 each appear once → three odds → not pseudo-palindromic.',
    },
    {
      input: 'root = [2,1,1,1,3,null,null,null,null,null,1]',
      output: '1',
      explanation: 'Only one of the three root-to-leaf paths is pseudo-palindromic.',
    },
  ],
  hints: [
    'A sequence of digits can form a palindrome if and only if at most one digit has an odd frequency. Track digit frequencies with a bitmask of 9 bits — XOR bit `d` when visiting a node with value `d`.',
    'At each leaf, check if `mask & (mask - 1) === 0`. This is true when at most one bit is set (i.e., at most one digit has an odd count).',
    'Use DFS: XOR the current node\'s bit into the mask, recurse left and right, then XOR again to backtrack. Only count paths that reach leaf nodes.',
  ],
  functionName: 'pseudoPalindromicPathsRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and pseudoPalindromicPathsRunner wrapper are pre-defined.\nfunction pseudoPalindromicPaths(root) {\n  \n}\n',
    typescript:
      'function pseudoPalindromicPathsRunner(root: (number | null)[]): number {\n  \n}',
    python:
      '# TreeNode class and pseudoPalindromicPathsRunner wrapper are pre-defined.\ndef pseudoPalindromicPaths(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 3, 1, 3, 1, null, 1]], expected: 2 },
    { args: [[2, 1, 1, 1, 3, null, null, null, null, null, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[9]], expected: 1 },
    { args: [[1, 1, 1]], expected: 2 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 1, 1, 1, 1, 1, 1]], expected: 4 },
    { args: [[2, 3, 1, 3, 1, null, 1]], expected: 2 },
  ],
};
