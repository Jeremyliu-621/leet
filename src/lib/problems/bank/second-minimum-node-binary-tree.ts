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
function findSecondMinimumValueRunner(arr) { return findSecondMinimumValue(__fromArray__(arr)); }
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

def findSecondMinimumValueRunner(arr):
    return findSecondMinimumValue(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'second-minimum-node-binary-tree',
  title: 'Second Minimum Node In a Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given a special binary tree where every node has either 0 or 2 children, and for each node \`node.val == min(node.left.val, node.right.val)\`, return the **second minimum** value in the tree. If no such value exists, return \`-1\`.

Trees are represented as level-order arrays where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 25]`',
    '`1 <= Node.val <= 2^31 - 1`',
    '`node.val == min(node.left.val, node.right.val)` for each internal node',
  ],
  examples: [
    {
      input: 'root = [2,2,5,null,null,5,7]',
      output: '5',
      explanation: 'The minimum is 2. The second minimum is 5.',
    },
    {
      input: 'root = [2,2,2]',
      output: '-1',
      explanation: 'All nodes have value 2; no strictly greater value exists.',
    },
  ],
  hints: [
    'The root always holds the global minimum. You need the smallest value strictly greater than root.val.',
    'DFS: if a node\'s value is greater than root.val, it\'s a candidate (and its subtree can only contain larger values, so stop). If equal to root.val, recurse into children.',
    'Track the best candidate (smallest value > root.val) across all nodes. Return -1 if no candidate found.',
  ],
  functionName: 'findSecondMinimumValueRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode and findSecondMinimumValueRunner wrapper are pre-defined.
// Implement the function below:
function findSecondMinimumValue(root) {

}`,
    python: `# TreeNode and findSecondMinimumValueRunner wrapper are pre-defined.
# Implement the function below:
def findSecondMinimumValue(root):
    pass`,
  },
  visibleTests: [
    { args: [[2,2,5,null,null,5,7]], expected: 5 },
    { args: [[2,2,2]], expected: -1 },
    { args: [[1,1,3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[5,5,5]], expected: -1 },
    { args: [[2,2,2147483647]], expected: 2147483647 },
    { args: [[1,1,2,1,1,2,2]], expected: 2 },
    { args: [[1,1,3,1,1,3,4]], expected: 3 },
  ],
};
