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
function findNodeByVal(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return val < root.val ? findNodeByVal(root.left, val) : findNodeByVal(root.right, val);
}
function inorderSuccessorRunner(arr, p) {
  const root = __fromArray__(arr);
  const pNode = findNodeByVal(root, p);
  const result = inorderSuccessor(root, pNode);
  return result ? result.val : null;
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
            node.left = TreeNode(arr[i]); queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i]); queue.append(node.right)
        i += 1
    return root

def __find_node__(root, val):
    if not root:
        return None
    if root.val == val:
        return root
    return __find_node__(root.left, val) if val < root.val else __find_node__(root.right, val)

def inorderSuccessorRunner(arr, p):
    root = __from_array__(arr)
    p_node = __find_node__(root, int(p))
    result = inorderSuccessor(root, p_node)
    return result.val if result else None
`.trim();

export const problem: Problem = {
  id: 'inorder-successor-in-bst',
  title: 'Inorder Successor in BST',
  difficulty: 'medium',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a binary search tree and a node \`p\` in it, return the **in-order successor** of that node in the BST. If the given node has no in-order successor in the tree, return \`null\`.

The successor of a node \`p\` is the node with the smallest key greater than \`p.val\`.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 10^4]`.',
    '`-10^5 <= Node.val <= 10^5`',
    'All values in the BST are **unique**.',
    '`p` is guaranteed to be a node in the BST.',
  ],
  examples: [
    {
      input: 'root = [2,1,3], p = 1',
      output: '2',
      explanation: '1\'s in-order successor is 2. The in-order traversal is [1,2,3].',
    },
    {
      input: 'root = [5,3,6,2,4,null,null,1], p = 6',
      output: 'null',
      explanation: '6 is the largest node in the BST, so there is no in-order successor.',
    },
  ],
  hints: [
    'If p has a right subtree, the successor is the leftmost node of that right subtree.',
    'Otherwise, traverse from root: whenever you go left, update the candidate successor to the current node.',
    'This uses the BST property — any node you move left past is a potential answer.',
  ],
  functionName: 'inorderSuccessorRunner',
  params: ['root', 'p'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. p is a TreeNode object.
function inorderSuccessor(root, p) {

}`,
    typescript: `// TreeNode is pre-defined. p is a TreeNode object.
function inorderSuccessor(root: TreeNode | null, p: TreeNode): TreeNode | null {

}`,
    python: `# TreeNode is pre-defined. p is a TreeNode object.
def inorderSuccessor(root, p):
    pass`,
  },
  visibleTests: [
    { args: [[2, 1, 3], 1], expected: 2 },
    { args: [[5, 3, 6, 2, 4, null, null, 1], 6], expected: null },
  ],
  hiddenTests: [
    { args: [[2, 1, 3], 2], expected: 3 },
    { args: [[2, 1, 3], 3], expected: null },
    { args: [[5, 3, 6, 2, 4], 4], expected: 5 },
    { args: [[5, 3, 6, 2, 4], 3], expected: 4 },
    { args: [[20, 10, 30, 5, 15, 25, 35], 15], expected: 20 },
    { args: [[20, 10, 30, 5, 15, 25, 35], 25], expected: 30 },
    { args: [[1], 1], expected: null },
    { args: [[2, 1], 1], expected: 2 },
  ],
};
