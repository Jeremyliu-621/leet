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
function __toLinkedList__(root) {
  const vals = [];
  let cur = root;
  while (cur) {
    vals.push(cur.val);
    cur = cur.right;
  }
  return vals;
}
function flattenRunner(arr) {
  const root = __fromArray__(arr);
  flatten(root);
  return __toLinkedList__(root);
}
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

def __to_linked_list__(root):
    vals = []
    cur = root
    while cur:
        vals.append(cur.val)
        cur = cur.right
    return vals

def flattenRunner(arr):
    root = __from_array__(arr)
    flatten(root)
    return __to_linked_list__(root)
`.trim();

export const problem: Problem = {
  id: 'flatten-binary-tree',
  title: 'Flatten Binary Tree to Linked List',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, flatten the tree into a **linked list in-place**.

The "linked list" should use the same \`TreeNode\` class where \`right\` is the next pointer and \`left\` is always \`null\`. The linked list should be in the same order as a **preorder traversal** of the binary tree.

The runner verifies the result by reading the chain of \`right\` pointers and returning the values as an array.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,5,3,4,null,6]',
      output: '[1,2,3,4,5,6]',
      explanation: 'Preorder: 1→2→3→4→5→6. Each node\'s left is null and right points to the next node.',
    },
    {
      input: 'root = []',
      output: '[]',
      explanation: 'Empty tree.',
    },
    {
      input: 'root = [1]',
      output: '[1]',
      explanation: 'Single node, already flat.',
    },
  ],
  hints: [
    'Preorder traversal visits: root, left subtree, right subtree. After flattening, each node\'s right points to the next preorder node.',
    'One approach: find the rightmost node of the left subtree, point it to the current right child, then move the entire left subtree to the right, and set left to null. Repeat for each node.',
    'Recursive: flatten(left), flatten(right), then stitch them together. Keep a "previous" pointer (e.g. using a closure or returning the tail).',
  ],
  functionName: 'flattenRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and flattenRunner wrapper are pre-defined.
// Modify the tree in-place:
function flatten(root) {

}
`,
    python: `# TreeNode class and flattenRunner wrapper are pre-defined.
# Modify the tree in-place:
def flatten(root):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 2, 5, 3, 4, null, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, null, 3, 4]], expected: [1, 2, 3, 4] },
    { args: [[1, null, 2, null, 3]], expected: [1, 2, 3] },
    { args: [[3, 1, 2]], expected: [3, 1, 2] },
  ],
};
