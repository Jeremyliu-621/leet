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
function __toArray__(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left);
    queue.push(node.right);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function deleteNodeBSTRunner(arr, key) {
  return __toArray__(deleteNode(__fromArray__(arr), key));
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

def deleteNodeBSTRunner(arr, key):
    return __to_array__(deleteNode(__from_array__(arr), key))
`.trim();

export const problem: Problem = {
  id: 'delete-node-in-a-bst',
  title: 'Delete Node in a BST',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary search tree and an integer \`key\`, delete the node with value \`key\` from the BST. Return the root of the resulting BST as a level-order array (trailing \`null\`s omitted).

It is guaranteed that all node values are unique. If the key does not exist in the tree, return the tree unchanged.

**Deletion cases:**
1. **Leaf node**: simply remove it.
2. **One child**: replace the node with its child.
3. **Two children**: replace the node's value with its **inorder successor** (smallest value in the right subtree), then delete the successor.`,
  constraints: [
    'The number of nodes in the tree is in the range `[0, 10^4]`.',
    '`-10^5 <= Node.val <= 10^5`',
    'Each node has a **unique** value.',
    '`-10^5 <= key <= 10^5`',
  ],
  examples: [
    {
      input: 'root = [5,3,6,2,4,null,7], key = 3',
      output: '[5,4,6,2,null,null,7]',
      explanation: 'Node 3 has two children. Replace with inorder successor (4), delete 4 from right subtree.',
    },
    {
      input: 'root = [5,3,6,2,4,null,7], key = 0',
      output: '[5,3,6,2,4,null,7]',
      explanation: 'Key 0 is not in the tree — return unchanged.',
    },
  ],
  hints: [
    'Traverse the BST recursively: if `key < node.val`, recurse left; if `key > node.val`, recurse right.',
    'When you find the node: if it has no left child, return its right; if no right child, return its left.',
    'For a node with two children, find the leftmost node of the right subtree (inorder successor). Copy its value to the current node, then recursively delete that successor value from the right subtree.',
  ],
  functionName: 'deleteNodeBSTRunner',
  params: ['root', 'key'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and deleteNodeBSTRunner wrapper are pre-defined.
function deleteNode(root, key) {
  // Return root of modified BST after deletion
}`,
    python: `# TreeNode class and deleteNodeBSTRunner wrapper are pre-defined.
def deleteNode(root, key: int):
    # Return root of modified BST after deletion
    pass`,
  },
  visibleTests: [
    { args: [[5, 3, 6, 2, 4, null, 7], 3], expected: [5, 4, 6, 2, null, null, 7] },
    { args: [[5, 3, 6, 2, 4, null, 7], 0], expected: [5, 3, 6, 2, 4, null, 7] },
    { args: [[1], 1], expected: [] },
  ],
  hiddenTests: [
    { args: [[5, 3, 6, 2, 4, null, 7], 5], expected: [6, 3, 7, 2, 4] },
    { args: [[5, 3, 6, 2, 4, null, 7], 6], expected: [5, 3, 7, 2, 4] },
    { args: [[5, 3, 6, 2, 4, null, 7], 7], expected: [5, 3, 6, 2, 4] },
    { args: [[3, 2, 4, 1], 2], expected: [3, 1, 4] },
    { args: [[2, 1, 4, null, null, 3, 5], 4], expected: [2, 1, 5, null, null, 3] },
  ],
};
