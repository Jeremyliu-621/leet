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
function minCameraCoverRunner(arr) { return minCameraCover(__fromArray__(arr)); }
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

def minCameraCoverRunner(arr):
    return minCameraCover(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-cameras',
  title: 'Binary Tree Cameras',
  difficulty: 'hard',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given the root of a binary tree. We install cameras on the nodes of the tree.

Each camera at a node can monitor its parent, itself, and its immediate children.

Return the **minimum number of cameras** needed to monitor all nodes in the tree.

**State-based greedy DFS:** At each node, track 3 states:
- \`0\` — not covered (needs a camera from its parent)
- \`1\` — covered (by a child camera)
- \`2\` — has a camera

If any child returns \`0\`, place a camera here (return \`2\`).
If any child has a camera (\`2\`), this node is covered (return \`1\`).
Otherwise, this node is uncovered (return \`0\`).
After the DFS, if the root is still \`0\`, add one more camera.

Trees are given as BFS-order arrays where \`null\` indicates missing children.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000]',
    'Node.val is 0',
  ],
  examples: [
    {
      input: 'root = [0,0,null,0,0]',
      output: '1',
      explanation: 'One camera at the root\'s left child covers the root and both leaves.',
    },
    {
      input: 'root = [0,0,null,0,null,0,null,null,0]',
      output: '2',
    },
  ],
  hints: [
    'Use a post-order DFS returning one of three states: 0 = not covered, 1 = covered (by child), 2 = has camera.',
    'If any child returns 0 (not covered), you must place a camera at the current node (return 2 and increment counter).',
    'If any child has a camera (returns 2), the current node is covered (return 1). Otherwise the current node is not covered (return 0). If the root is uncovered after DFS, add one more camera.',
  ],
  functionName: 'minCameraCoverRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and minCameraCoverRunner wrapper are pre-defined.\n// Implement the function below:\nfunction minCameraCover(root) {\n\n}\n',
    python:
      '# TreeNode class and minCameraCoverRunner wrapper are pre-defined.\n# Implement the function below:\ndef minCameraCover(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[0,0,null,0,0]], expected: 1 },
    { args: [[0,0,null,0,null,0,null,null,0]], expected: 2 },
    { args: [[0]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0,0,null,null,0]], expected: 1 },
    { args: [[0,0,0,null,null,0,null,null,0]], expected: 2 },
    { args: [[0,0,0,0,0]], expected: 2 },
    { args: [[0,0,null,0,null,0,null,null,0]], expected: 2 },
    { args: [[0,null,0,null,0,null,0,null,0]], expected: 2 },
  ],
};
