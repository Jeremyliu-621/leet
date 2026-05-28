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
function averageOfSubtreeRunner(arr) { return averageOfSubtree(__fromArray__(arr)); }
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

def averageOfSubtreeRunner(arr):
    return averageOfSubtree(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'average-of-subtree',
  title: 'Average of Subtree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the number of nodes where the value of the node is equal to the **average** of the values in its **subtree** (using **integer division**).

The **subtree** of a node includes the node itself and all its descendants.

Trees are given as level-order arrays where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range `[1, 1000]`.',
    '`0 <= Node.val <= 1000`',
  ],
  examples: [
    {
      input: 'root = [4,8,5,0,1,null,6]',
      output: '5',
      explanation: 'Nodes 0 (avg 0), 1 (avg 1), 5 (avg of 5,6 = 5), 6 (avg 6), and 4 (avg of all 7 nodes = 24/6 = 4) all equal their subtree average. Node 8: avg(8,0,1)=3≠8.',
    },
    {
      input: 'root = [1]',
      output: '1',
      explanation: 'Single node: avg = 1 = node.val.',
    },
  ],
  hints: [
    'Use a post-order DFS that returns `[subtree_sum, subtree_count]` for each node.',
    'At each node: combine left and right subtree results, add the current node value and count, then check if `node.val === Math.floor(total_sum / total_count)`.',
    '```js\nfunction averageOfSubtree(root) {\n  let count = 0;\n  function dfs(node) {\n    if (!node) return [0, 0];\n    const [ls, lc] = dfs(node.left);\n    const [rs, rc] = dfs(node.right);\n    const sum = node.val + ls + rs, cnt = 1 + lc + rc;\n    if (node.val === Math.floor(sum / cnt)) count++;\n    return [sum, cnt];\n  }\n  dfs(root);\n  return count;\n}\n```',
  ],
  functionName: 'averageOfSubtreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and averageOfSubtreeRunner wrapper are pre-defined.
function averageOfSubtree(root) {
  // Return count of nodes where val equals floor(subtree average)
}`,
    typescript: "function averageOfSubtreeRunner(root: (number | null)[]): number {\n  // Return count of nodes where val equals floor(subtree average)\n}",

    python: `# TreeNode class and averageOfSubtreeRunner wrapper are pre-defined.
def averageOfSubtree(root) -> int:
    # Return count of nodes where val equals floor(subtree average)
    pass`,
  },
  visibleTests: [
    { args: [[4, 8, 5, 0, 1, null, 6]], expected: 5 },
    { args: [[1]], expected: 1 },
    { args: [[2, 1, 3]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[12, 6, 17, 3, 9, 15, 20]], expected: 6 },
    { args: [[0, 0, 0]], expected: 3 },
    { args: [[1, 2]], expected: 2 },
    { args: [[7, 3, 4, 2, null, null, 5]], expected: 3 },
    { args: [[5]], expected: 1 },
  ],
};
