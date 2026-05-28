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
function maxLevelSumRunner(arr) { return maxLevelSum(__fromArray__(arr)); }
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

def maxLevelSumRunner(arr):
    return maxLevelSum(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'maximum-level-sum-binary-tree',
  title: 'Maximum Level Sum of a Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, the level of its root is \`1\`, the level of its children is \`2\`, and so on.

Return the **smallest** level \`x\` such that the sum of all the values of nodes at level \`x\` is **maximal**.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-10^5 <= Node.val <= 10^5',
  ],
  examples: [
    {
      input: 'root = [1,7,0,7,-8,null,null]',
      output: '2',
      explanation: 'Level 1 sum = 1. Level 2 sum = 7+0 = 7. Level 3 sum = 7+(-8) = -1. Maximum is 7, at level 2.',
    },
    {
      input: 'root = [989,null,10250,98693,-89388,null,null,null,-32127]',
      output: '2',
    },
  ],
  hints: [
    'Level 1: Use BFS (level-order traversal). For each level, compute the sum of all node values. Track which level has the maximum sum.',
    'Level 2: Use a queue. Process nodes level by level. Keep a running max and the level that achieved it. If a new level ties the max, prefer the earlier level (keep the existing answer).',
    'Level 3: let level=1,ans=1,mx=-Infinity,q=[root];while(q.length){const n=q.length;let s=0;for(let i=0;i<n;i++){const nd=q.shift();s+=nd.val;if(nd.left)q.push(nd.left);if(nd.right)q.push(nd.right);}if(s>mx){mx=s;ans=level;}level++;}return ans;',
  ],
  functionName: 'maxLevelSumRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and maxLevelSumRunner wrapper are pre-defined.\n// Implement the function below:\nfunction maxLevelSum(root) {\n  // your code here\n}\n',
    typescript: "function maxLevelSumRunner(arr: (number | null)[]): number {\n  // your code here\n}",

    python: '# TreeNode class and maxLevelSumRunner wrapper are pre-defined.\n# Implement the function below:\ndef maxLevelSum(root):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 7, 0, 7, -8, null, null]], expected: 2 },
    { args: [[989, null, 10250, 98693, -89388, null, null, null, -32127]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 1 },
    { args: [[1, -1]], expected: 1 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[-1, -2, -3]], expected: 1 },
    { args: [[5, 3, 7, 2, 4, 6, 8]], expected: 3 },
  ],
};
