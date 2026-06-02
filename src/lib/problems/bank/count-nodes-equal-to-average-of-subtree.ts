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
  id: 'count-nodes-equal-to-average-of-subtree',
  title: 'Count Nodes Equal to Average of Subtree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the number of nodes where the value of the node is equal to the **average** of the values in its **subtree** (including the node itself).

The **average** of \`n\` elements is the **floor** of the sum divided by \`n\`.

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

> **Note:** A \`TreeNode\` class and an \`averageOfSubtreeRunner(arr)\` wrapper are pre-defined. Implement \`averageOfSubtree(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000]',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [4,8,5,0,1,null,6]',
      output: '5',
      explanation: 'Nodes 0, 1, 6, 4, and 5 each equal the floor average of their subtree.',
    },
    {
      input: 'root = [1]',
      output: '1',
      explanation: 'The root node 1 equals the average of its subtree (just itself).',
    },
  ],
  hints: [
    'Use a DFS (post-order) that returns (sum, count) for each subtree.',
    'At each node, compute floor(sum / count). If it equals node.val, increment the answer.',
    'A leaf node always has sum = val and count = 1, so floor(val/1) = val — every leaf always counts.',
  ],
  functionName: 'averageOfSubtreeRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and averageOfSubtreeRunner wrapper are pre-defined.
function averageOfSubtree(root) {
  let count = 0;
  function dfs(node) {
    if (!node) return [0, 0];
    const [ls, lc] = dfs(node.left);
    const [rs, rc] = dfs(node.right);
    const sum = ls + rs + node.val, cnt = lc + rc + 1;
    if (Math.floor(sum / cnt) === node.val) count++;
    return [sum, cnt];
  }
  dfs(root);
  return count;
}`,
    typescript: `function averageOfSubtreeRunner(root: (number | null)[]): number {
  if (!root || root.length === 0) return 0;
  class TreeNode { constructor(public val: number, public left: TreeNode | null = null, public right: TreeNode | null = null) {} }
  const treeRoot = new TreeNode(root[0] as number);
  const queue: TreeNode[] = [treeRoot];
  let i = 1;
  while (queue.length > 0 && i < root.length) {
    const node = queue.shift()!;
    if (i < root.length && root[i] !== null) { node.left = new TreeNode(root[i] as number); queue.push(node.left); } i++;
    if (i < root.length && root[i] !== null) { node.right = new TreeNode(root[i] as number); queue.push(node.right); } i++;
  }
  let count = 0;
  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [0, 0];
    const [ls, lc] = dfs(node.left), [rs, rc] = dfs(node.right);
    const sum = ls + rs + node.val, cnt = lc + rc + 1;
    if (Math.floor(sum / cnt) === node.val) count++;
    return [sum, cnt];
  }
  dfs(treeRoot);
  return count;
}`,
    python: `# TreeNode class and averageOfSubtreeRunner wrapper are pre-defined.
def averageOfSubtree(root):
    count = [0]
    def dfs(node):
        if not node:
            return 0, 0
        ls, lc = dfs(node.left)
        rs, rc = dfs(node.right)
        s, c = ls + rs + node.val, lc + rc + 1
        if s // c == node.val:
            count[0] += 1
        return s, c
    dfs(root)
    return count[0]`,
  },
  visibleTests: [
    { args: [[4, 8, 5, 0, 1, null, 6]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[4, 8, 5, 0, 1, null, 6]], expected: 5 },
    { args: [[10, 5, 15, 3, 7, null, 18]], expected: 4 },
    { args: [[1, 1, 1, 1, 1, 1, 1]], expected: 7 },
    { args: [[5, 5, 5]], expected: 3 },
  ],
};
