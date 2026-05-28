import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
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
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
    i++;
  }
  return root;
}
function flattenRunner(arr) {
  const root = __fromArray__(arr);
  flatten(root);
  const result = [];
  let cur = root;
  while (cur) { result.push(cur.val); cur = cur.right; }
  return result;
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

def flattenRunner(arr):
    root = __from_array__(arr)
    flatten(root)
    result = []
    cur = root
    while cur:
        result.append(cur.val)
        cur = cur.right
    return result
`.trim();

export const problem: Problem = {
  id: 'flatten-binary-tree-to-linked-list',
  title: 'Flatten Binary Tree to Linked List',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, flatten the tree into a "linked list":

- The "linked list" should use the same \`TreeNode\` class where the \`right\` child pointer points to the next node in the list and the \`left\` child pointer is always \`null\`.
- The "linked list" should be in the same order as a **pre-order traversal** of the binary tree.

Modify the tree **in place**. The runner will collect the final right-spine values and return them as an array.

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000].',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [1,2,5,3,4,null,6]',
      output: '[1,2,3,4,5,6]',
      explanation: 'Pre-order traversal: 1→2→3→4→5→6. The tree is flattened to a right-only linked list with these values.',
    },
    {
      input: 'root = [0]',
      output: '[0]',
      explanation: 'A single-node tree is already flat.',
    },
    {
      input: 'root = []',
      output: '[]',
      explanation: 'Empty tree produces an empty list.',
    },
  ],
  hints: [
    'For each node with a left subtree: find the rightmost node of the left subtree, attach the current right subtree to it, then move the left subtree to become the right child, and set left to null.',
    'Repeat for every node moving down the right spine.',
    'Alternatively, perform a reverse pre-order traversal (right → left → root) maintaining a `prev` pointer; at each node set `node.right = prev; node.left = null; prev = node`.',
  ],
  functionName: 'flattenRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. Modify the tree in place.
function flatten(root) {

}`,
    typescript: "function flattenRunner(root: (number | null)[]): number[] {\n\n}",

    python: `# TreeNode is pre-defined. Modify the tree in place.
def flatten(root):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 5, 3, 4, null, 6]], expected: [1, 2, 3, 4, 5, 6] },
    { args: [[0]], expected: [0] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[1, null, 2]], expected: [1, 2] },
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 4, 5, 3] },
    { args: [[1, 2, 3, 4, 5, 6]], expected: [1, 2, 4, 5, 3, 6] },
  ],
};
