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
  const queue = [root]; let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
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
  id: 'count-nodes-equal-average-subtree',
  title: 'Count Nodes Equal to Average of Subtree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the number of nodes where the value of the node is equal to the **average** of the values in its **subtree**.

**Note:** The average of \`n\` elements is the sum divided by \`n\`, rounded **down** to the nearest integer.

A **subtree** of \`root\` is a tree consisting of \`root\` and all of its descendants.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 1000].',
    '0 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [4,8,5,0,1,null,6]',
      output: '5',
      explanation: 'Nodes 0, 1, 5, 6, and 4 each equal the integer average of their subtree.',
    },
    {
      input: 'root = [1]',
      output: '1',
      explanation: 'Node 1 is the only node. Average of subtree = 1 = node value.',
    },
  ],
  hints: [
    'Level 1: Use postorder DFS. For each node, return the [sum, count] of its subtree. At each node, compute Math.floor(sum/count) and compare to node.val.',
    'Level 2: dfs(node) returns [sum, count]. Null returns [0,0]. At a node: total_sum = node.val + left_sum + right_sum; total_count = 1 + left_count + right_count. Increment answer if Math.floor(total_sum / total_count) === node.val.',
    'Level 3: let ans=0;const dfs=n=>{if(!n)return[0,0];const[ls,lc]=dfs(n.left);const[rs,rc]=dfs(n.right);const s=n.val+ls+rs,c=1+lc+rc;if(Math.floor(s/c)===n.val)ans++;return[s,c];};dfs(root);return ans;',
  ],
  functionName: 'averageOfSubtreeRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and averageOfSubtreeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction averageOfSubtree(root) {\n  // your code here\n}\n',
    python: '# TreeNode class and averageOfSubtreeRunner wrapper are pre-defined.\n# Implement the function below:\ndef averageOfSubtree(root):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[4, 8, 5, 0, 1, null, 6]], expected: 5 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[0]], expected: 1 },
    { args: [[2, 1, 3]], expected: 3 },
    { args: [[10, 10, 10]], expected: 3 },
    { args: [[4, 2, 6, 1, 3, 5, 7]], expected: 7 },
  ],
};
