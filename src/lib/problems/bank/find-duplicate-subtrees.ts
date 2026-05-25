import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
}
function __fromArray__(arr) {
  if (!arr || arr.length === 0 || arr[0] === null) return null;
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
function findDuplicateSubtreesRunner(arr) {
  const root = __fromArray__(arr);
  const result = findDuplicateSubtrees(root);
  return result.map(n => n.val).sort((a, b) => a - b);
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def __from_array__(arr):
    if arr is None:
        return None
    if hasattr(arr, 'to_py'):
        raw = arr.to_py()
    else:
        try:
            raw = list(arr)
        except TypeError:
            return None
    arr = [int(v) if isinstance(v, (int, float)) and not isinstance(v, bool) else None for v in raw]
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

def findDuplicateSubtreesRunner(arr):
    root = __from_array__(arr)
    result = findDuplicateSubtrees(root)
    return sorted([n.val for n in result])
`.trim();

export const problem: Problem = {
  id: 'find-duplicate-subtrees',
  title: 'Find Duplicate Subtrees',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `Given the \`root\` of a binary tree, return all **duplicate subtrees**.

For each kind of duplicate subtree, you only need to return the **root node** of any one of them. Two trees are duplicates if they have the **same structure** and **same node values**.

Return a **sorted array of the root values** of the duplicate subtrees (one representative per unique duplicate subtree shape).

> **Note:** A \`TreeNode\` class is pre-defined. Implement \`findDuplicateSubtrees(root)\` which returns an array of \`TreeNode\` objects.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 5000]',
    '-200 <= Node.val <= 200',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,null,2,4,null,null,4]',
      output: '[2,4]',
      explanation: 'The subtree rooted at 2 (with left child 4) appears twice, and the leaf node 4 appears three times. Return their root values sorted: [2, 4].',
    },
    {
      input: 'root = [2,1,1]',
      output: '[1]',
      explanation: 'The leaf node 1 appears twice — return [1].',
    },
    {
      input: 'root = [2,2,2,3,null,3,null]',
      output: '[2,3]',
      explanation: 'Both the subtree rooted at 2 (left child 3) and the leaf 3 are duplicated.',
    },
  ],
  hints: [
    'Post-order serialize each subtree into a canonical string (e.g. `"val,left,right"`). Use a hash map from serialization → list of first-seen nodes.',
    'When a serialization is seen for the **second** time, add that first-seen node to the result list. Never add it again for a third occurrence.',
    'The serialization for a null child can be `"#"`. For a leaf node `4` it becomes `"4,#,#"`. Build bottom-up in post-order so children are serialized before the parent.',
  ],
  functionName: 'findDuplicateSubtreesRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class is pre-defined. Return an array of TreeNode roots:\nfunction findDuplicateSubtrees(root) {\n  \n}\n',
    python:
      '# TreeNode class is pre-defined. Return a list of TreeNode roots:\ndef findDuplicateSubtrees(root):\n    pass\n',
  },
  visibleTests: [
    {
      args: [[1, 2, 3, 4, null, 2, 4, null, null, 4]],
      expected: [2, 4],
    },
    {
      args: [[2, 1, 1]],
      expected: [1],
    },
    {
      args: [[2, 2, 2, 3, null, 3, null]],
      expected: [2, 3],
    },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[1, 2, 3]], expected: [] },
    { args: [[1, 2, 3, 4, 4, 4]], expected: [4] },
    { args: [[0, 0, 0, 0, null, null, 0]], expected: [0] },
  ],
};
