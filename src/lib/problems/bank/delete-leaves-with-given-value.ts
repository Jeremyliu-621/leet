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
function removeLeafNodesRunner(arr, target) {
  return __toArray__(removeLeafNodes(__fromArray__(arr), target));
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
    while result and not isinstance(result[-1], (int, float)):
        result.pop()
    return result

def removeLeafNodesRunner(arr, target):
    return __to_array__(removeLeafNodes(__from_array__(arr), int(target)))
`.trim();

export const problem: Problem = {
  id: 'delete-leaves-with-given-value',
  title: 'Delete Leaves With a Given Value',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a binary tree \`root\` and an integer \`target\`, delete all **leaf nodes** with value \`target\`.

Note that once you delete a leaf node with value \`target\`, if its parent node becomes a leaf node and has the value \`target\`, it should also be deleted (you need to continue doing this until you can't).

Trees are represented as BFS level-order arrays where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 3000]`.',
    '`1 <= Node.val, target <= 1000`',
  ],
  examples: [
    {
      input: 'root = [1,2,3,2,null,2,4], target = 2',
      output: '[1,null,3,null,4]',
      explanation: 'Leaf nodes with value 2 are deleted. Node 2 (left child of root) then becomes a leaf with value 2 and is also deleted.',
    },
    {
      input: 'root = [1,3,3,3,2], target = 3',
      output: '[1,3,null,null,2]',
      explanation: 'The rightmost leaf 3 and the left-left leaf 3 are deleted. The remaining node 3 has child 2 so it is not a leaf.',
    },
    {
      input: 'root = [1,2,null,2,null,2], target = 2',
      output: '[1]',
      explanation: 'Leaf 2s cascade up: bottom-most removed first, then its parent becomes a leaf and is removed, until only root 1 remains.',
    },
  ],
  hints: [
    'Use post-order DFS: recurse into left and right children first, then process the current node.',
    'After recursion, a node is a leaf if both `node.left` and `node.right` are null.',
    'If the node is now a leaf and its value equals target, return null (delete it); otherwise return the node.',
  ],
  functionName: 'removeLeafNodesRunner',
  params: ['root', 'target'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. removeLeafNodesRunner wraps your function.
function removeLeafNodes(root, target) {

}`,
    python: `# TreeNode is pre-defined. removeLeafNodesRunner wraps your function.
def removeLeafNodes(root, target):
    pass`,
  },
  visibleTests: [
    { args: [[1, 2, 3, 2, null, 2, 4], 2], expected: [1, null, 3, null, 4] },
    { args: [[1, 3, 3, 3, 2], 3], expected: [1, 3, null, null, 2] },
    { args: [[1, 2, null, 2, null, 2], 2], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1], 1], expected: [] },
    { args: [[1, 2, 3], 2], expected: [1, null, 3] },
    { args: [[3, 3, 3, 1, 3], 3], expected: [3, 3, null, 1] },
    { args: [[1, 2, null, 2, 2], 2], expected: [1] },
  ],
};
