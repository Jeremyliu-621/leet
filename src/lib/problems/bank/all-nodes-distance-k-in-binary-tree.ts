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
function __findNode__(root, val) {
  if (!root) return null;
  if (root.val === val) return root;
  return __findNode__(root.left, val) || __findNode__(root.right, val);
}
function distanceKRunner(arr, target, k) {
  const root = __fromArray__(arr);
  const targetNode = __findNode__(root, target);
  return distanceK(root, targetNode, k).sort((a, b) => a - b);
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
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i])
            queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i])
            queue.append(node.right)
        i += 1
    return root

def __find_node__(root, val):
    if root is None:
        return None
    if root.val == val:
        return root
    left = __find_node__(root.left, val)
    return left if left else __find_node__(root.right, val)

def distanceKRunner(arr, target, k):
    root = __from_array__(arr)
    target_node = __find_node__(root, int(target))
    return sorted(distanceK(root, target_node, int(k)))
`.trim();

export const problem: Problem = {
  id: 'all-nodes-distance-k-in-binary-tree',
  title: 'All Nodes Distance K in Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `Given the \`root\` of a binary tree, a target node \`target\` (specified by its value), and an integer \`k\`, return an array of the values of all nodes that have a distance \`k\` from the target node.

The answer can be returned in **any order** (the runner sorts it for comparison).

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** A \`TreeNode\` class, a helper to locate the target node, and the \`distanceKRunner\` wrapper are pre-defined. Your function receives \`(root: TreeNode | null, target: TreeNode | null, k: number)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 500].',
    '0 <= Node.val <= 500',
    'All the values Node.val are unique.',
    'target is the value of one of the nodes in the tree.',
    '0 <= k <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2',
      output: '[7,4,1]',
      explanation: 'Nodes at distance 2 from node 5: 7 (child of 2, grandchild of 5), 4 (child of 2), and 1 (parent of 5 via edge up then down).',
    },
    {
      input: 'root = [1], target = 1, k = 3',
      output: '[]',
      explanation: 'Only the root exists; no node is 3 edges away.',
    },
  ],
  hints: [
    'Build a parent map (DFS/BFS), so you can traverse upward as well as downward.',
    'BFS from the target node treating the tree as an undirected graph (parent + left + right edges).',
    'Track visited nodes to avoid revisiting. After k steps, collect all nodes in the BFS frontier.',
  ],
  functionName: 'distanceKRunner',
  params: ['root', 'target', 'k'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and distanceKRunner wrapper are pre-defined.\n// Implement the function below:\nfunction distanceK(root, target, k) {\n  \n}\n',
    python:
      '# TreeNode class and distanceKRunner wrapper are pre-defined.\n# Implement the function below:\ndef distanceK(root, target, k):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 5, 1, 6, 2, 0, 8, null, null, 7, 4], 5, 2], expected: [1, 4, 7] },
    { args: [[1], 1, 3], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4], 2, 1], expected: [1, 4] },
    { args: [[1, 2, 3, 4], 4, 2], expected: [1] },
    { args: [[1, 2, 3, 4], 1, 0], expected: [1] },
    { args: [[1, 2, 3, 4, 5], 3, 1], expected: [1] },
    { args: [[0, 1, null, 3, 2], 1, 1], expected: [0, 2, 3] },
  ],
};
