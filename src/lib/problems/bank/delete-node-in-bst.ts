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
function deleteNodeRunner(arr, key) { return __toArray__(deleteNode(__fromArray__(arr), key)); }
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

def deleteNodeRunner(arr, key):
    return __to_array__(deleteNode(__from_array__(arr), key))
`.trim();

export const problem: Problem = {
  id: 'delete-node-in-bst',
  title: 'Delete Node in a BST',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the **root node reference** (possibly updated) of the BST.

Deletion has two stages:
1. Search for the node to remove.
2. If found, delete it while maintaining BST properties.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4].',
    '-10^5 <= Node.val <= 10^5',
    'Each node has a unique value.',
    'root is a valid binary search tree.',
    '-10^5 <= key <= 10^5',
  ],
  examples: [
    {
      input: 'root = [5,3,6,2,4,null,7], key = 3',
      output: '[5,4,6,2,null,null,7]',
      explanation: 'Node 3 has two children. Replace it with its in-order successor (4).',
    },
    {
      input: 'root = [5,3,6,2,4,null,7], key = 0',
      output: '[5,3,6,2,4,null,7]',
      explanation: 'Key 0 does not exist in the BST, so return unchanged.',
    },
  ],
  hints: [
    'Level 1: Three deletion cases: (1) no children — remove it; (2) one child — replace with that child; (3) two children — replace value with in-order successor (leftmost in right subtree), then delete the successor.',
    'Level 2: Find the in-order successor by going right once, then left as far as possible. Assign its value to the current node, then recurse to delete the successor from the right subtree.',
    'Level 3: if(!root)return null;if(key<root.val)root.left=deleteNode(root.left,key);else if(key>root.val)root.right=deleteNode(root.right,key);else{if(!root.left)return root.right;if(!root.right)return root.left;let s=root.right;while(s.left)s=s.left;root.val=s.val;root.right=deleteNode(root.right,s.val);}return root;',
  ],
  functionName: 'deleteNodeRunner',
  params: ['root', 'key'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and deleteNodeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction deleteNode(root, key) {\n  \n}\n',
    python:
      '# TreeNode class and deleteNodeRunner wrapper are pre-defined.\n# Implement the function below:\ndef deleteNode(root, key):\n    pass\n',
  },
  visibleTests: [
    { args: [[5, 3, 6, 2, 4, null, 7], 3], expected: [5, 4, 6, 2, null, null, 7] },
    { args: [[5, 3, 6, 2, 4, null, 7], 0], expected: [5, 3, 6, 2, 4, null, 7] },
  ],
  hiddenTests: [
    { args: [[], 0], expected: [] },
    { args: [[5, 3, 6, 2, 4, null, 7], 5], expected: [6, 3, 7, 2, 4] },
    { args: [[2, 1], 2], expected: [1] },
    { args: [[3, 1, 4, null, 2], 3], expected: [4, 1, null, null, 2] },
  ],
};
