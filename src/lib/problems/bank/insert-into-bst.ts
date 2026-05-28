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
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function insertIntoBSTRunner(arr, val) { return __toArray__(insertIntoBST(__fromArray__(arr), val)); }
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
    while result and not isinstance(result[-1], (int, float)):
        result.pop()
    return result

def insertIntoBSTRunner(arr, val):
    return __to_array__(insertIntoBST(__from_array__(arr), val))
`.trim();

export const problem: Problem = {
  id: 'insert-into-bst',
  title: 'Insert into a Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given the \`root\` node of a binary search tree (BST) and a \`val\` to insert into the tree. Return the root node of the BST after the insertion. It is **guaranteed** that the new value does not exist in the original BST.

There may exist multiple valid insertions — you can return **any of them** as long as the tree remains a valid BST.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree will be in the range [0, 10^4].',
    '-10^8 <= Node.val <= 10^8',
    'All the values Node.val are unique.',
    '-10^8 <= val <= 10^8',
    'It is guaranteed that val does not exist in the original BST.',
  ],
  examples: [
    {
      input: 'root = [4,2,7,1,3], val = 5',
      output: '[4,2,7,1,3,5]',
      explanation: 'Insert 5 as the left child of 7. The BST property is maintained.',
    },
    {
      input: 'root = [40,20,60,10,30,50,70], val = 25',
      output: '[40,20,60,10,30,50,70,null,null,25]',
      explanation: '25 is inserted as the left child of 30.',
    },
  ],
  hints: [
    'Level 1: Traverse the BST as you would for a search. When val < node.val, go left; when val > node.val, go right. Insert val as a new leaf when you reach a null position.',
    'Level 2: If root is null, return a new TreeNode(val). Otherwise recurse: if val < root.val, root.left = insertIntoBST(root.left, val); else root.right = insertIntoBST(root.right, val). Return root.',
    'Level 3: if(!root)return new TreeNode(val);if(val<root.val)root.left=insertIntoBST(root.left,val);else root.right=insertIntoBST(root.right,val);return root;',
  ],
  functionName: 'insertIntoBSTRunner',
  params: ['root', 'val'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and insertIntoBSTRunner wrapper are pre-defined.\n// Implement the function below:\nfunction insertIntoBST(root, val) {\n  \n}\n',
    python:
      '# TreeNode class and insertIntoBSTRunner wrapper are pre-defined.\n# Implement the function below:\ndef insertIntoBST(root, val):\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 2, 7, 1, 3], 5], expected: [4, 2, 7, 1, 3, 5] },
    { args: [[40, 20, 60, 10, 30, 50, 70], 25], expected: [40, 20, 60, 10, 30, 50, 70, null, null, 25] },
  ],
  hiddenTests: [
    { args: [[], 5], expected: [5] },
    { args: [[4, 2, 7, 1, 3], 8], expected: [4, 2, 7, 1, 3, null, 8] },
    { args: [[2], 1], expected: [2, 1] },
    { args: [[2], 3], expected: [2, null, 3] },
  ],
};
