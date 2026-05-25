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
  id: 'pseudo-palindromic-paths',
  title: 'Pseudo-Palindromic Paths in a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary tree where node values are digits from 1 to 9, a path in the binary tree is said to be **pseudo-palindromic** if at least one permutation of the node values in the path is a palindrome.

Return the number of **pseudo-palindromic paths** going from the root node to leaf nodes.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Use DFS with a bitmask — XOR the bit for each digit. A path is pseudo-palindromic if the bitmask has at most one bit set (at most one digit appears an odd number of times).`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 100000]',
    '1 <= Node.val <= 9',
  ],
  examples: [
    {
      input: 'root = [2,3,1,3,1,null,1]',
      output: '2',
      explanation: 'Path 2→3→3 (digits 2,3,3): digit 3 appears twice, digit 2 once → one odd → pseudo-palindromic. Path 2→1→1: one odd → yes. Path 2→3→1: three distinct digits each once → three odds → no.',
    },
    { input: 'root = [2,1,1,1,3,null,null,null,null,null,1]', output: '1' },
  ],
  hints: [
    'A sequence of digits is pseudo-palindromic if at most one digit has an odd frequency.',
    'Use a bitmask of 9 bits; XOR bit d at each node. At a leaf, check if bitmask & (bitmask - 1) == 0.',
    'DFS: pass the bitmask down, restore it (backtrack) after each recursive call.',
  ],
  functionName: 'pseudoPalindromicPathsRunner',
  params: ['arr'],
  starterCode: {
    javascript: `${JS_PREAMBLE}\n\nfunction pseudoPalindromicPaths(root) {\n\n}\n`,
    python: `${PY_PREAMBLE}\n\ndef pseudoPalindromicPaths(root):\n    pass\n`,
  },
  visibleTests: [
    { args: [[2, 3, 1, 3, 1, null, 1]], expected: 2 },
    { args: [[2, 1, 1, 1, 3, null, null, null, null, null, 1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[9]], expected: 1 },
    { args: [[1, 1, 1]], expected: 2 },
    { args: [[1, 2, 3]], expected: 0 },
    { args: [[1, 1, 1, 1, 1, 1, 1]], expected: 4 },
  ],
};
