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
function isSubtreeRunner(rootArr, subRootArr) {
  return isSubtree(__fromArray__(rootArr), __fromArray__(subRootArr));
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

def isSubtreeRunner(rootArr, subRootArr):
    return isSubtree(__from_array__(rootArr), __from_array__(subRootArr))
`.trim();

export const problem: Problem = {
  id: 'subtree-of-another-tree',
  title: 'Subtree of Another Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the roots of two binary trees \`root\` and \`subRoot\`, return \`true\` if there is a subtree of \`root\` with the same structure and node values as \`subRoot\` and \`false\` otherwise.

A subtree of a binary tree \`tree\` is a tree that consists of a node in \`tree\` and all of this node's descendants. The tree \`tree\` could also be considered as a subtree of itself.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`isSubtreeRunner\` wrapper are pre-defined. Implement \`isSubtree(root, subRoot)\`.`,
  constraints: [
    'The number of nodes in the root tree is in the range [1, 2000].',
    'The number of nodes in the subRoot tree is in the range [1, 1000].',
    '-10^4 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root = [3,4,5,1,2], subRoot = [4,1,2]',
      output: 'true',
      explanation: 'The subtree rooted at node 4 (with children 1 and 2) matches subRoot exactly.',
    },
    {
      input: 'root = [3,4,5,1,2,null,null,null,null,0], subRoot = [4,1,2]',
      output: 'false',
      explanation:
        'Node 4 in root has a descendant 0 that subRoot does not have, so they differ.',
    },
  ],
  hints: [
    'Write a helper isSameTree(s, t) that checks if two trees are identical.',
    'Then isSubtree(root, subRoot) = isSameTree(root, subRoot) OR isSubtree(root.left, subRoot) OR isSubtree(root.right, subRoot).',
    'Base cases: if root is null, return false (unless subRoot is also null).',
  ],
  functionName: 'isSubtreeRunner',
  params: ['root', 'subRoot'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and isSubtreeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction isSubtree(root, subRoot) {\n  \n}\n',
    typescript: "function isSubtreeRunner(root: number[], subRoot: number[]): boolean {\n  \n}",

    python:
      '# TreeNode class and isSubtreeRunner wrapper are pre-defined.\n# Implement the function below:\ndef isSubtree(root, subRoot):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 4, 5, 1, 2], [4, 1, 2]], expected: true },
    { args: [[3, 4, 5, 1, 2, null, null, null, null, 0], [4, 1, 2]], expected: false },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], [2, 4, 5]], expected: true },
    { args: [[1, 1], [1]], expected: true },
    { args: [[1, 2, 3], [2]], expected: true },
    { args: [[1, 2, 3], [4]], expected: false },
    { args: [[3, 4, 5, 1, 2], [3, 4, 5]], expected: false },
    { args: [[1, 2, 2, 3, 4, null, null], [2, 3]], expected: false },
    { args: [[1], [1]], expected: true },
  ],
};
