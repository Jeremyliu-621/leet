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
function amountOfTimeRunner(arr, start) { return amountOfTime(__fromArray__(arr), start); }
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

def amountOfTimeRunner(arr, start):
    return amountOfTime(__from_array__(arr), start)
`.trim();

export const problem: Problem = {
  id: 'amount-of-time-for-binary-tree-to-be-infected',
  title: 'Amount of Time for Binary Tree to Be Infected',
  difficulty: 'medium',
  tags: ['tree', 'graph'],
  description: `You are given the \`root\` of a binary tree with **unique** values, and an integer \`start\`. At minute \`0\`, an **infection** starts from the node with value \`start\`.

Each minute, a node becomes infected if:
- The node is currently uninfected.
- The node is adjacent to an infected node.

Return the number of minutes needed for the **entire** tree to be infected.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^5].',
    '1 <= Node.val <= 10^5',
    'Each node has a unique value.',
    'A node with value start exists in the tree.',
  ],
  examples: [
    {
      input: 'root = [1,5,3,null,4,10,6,9,2], start = 3',
      output: '4',
      explanation: 'Infection spreads from node 3. It takes 4 minutes to infect all nodes.',
    },
    {
      input: 'root = [1], start = 1',
      output: '0',
      explanation: 'The tree has only one node.',
    },
  ],
  hints: [
    'Level 1: Convert the tree to an undirected graph (adjacency list). Then BFS from the start node to find the maximum distance to any node — that is the answer.',
    'Level 2: DFS the tree to build a graph where each node connects to its parent, left child, and right child. Then BFS from start, counting levels until the queue is empty.',
    'Level 3: Build adj map in DFS. BFS from start: use a visited set, track the level. Each BFS level = 1 minute. The level count when queue empties = answer.',
  ],
  functionName: 'amountOfTimeRunner',
  params: ['arr', 'start'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and amountOfTimeRunner wrapper are pre-defined.\n// Implement the function below:\nfunction amountOfTime(root, start) {\n  // your code here\n}\n',
    python: '# TreeNode class and amountOfTimeRunner wrapper are pre-defined.\n# Implement the function below:\ndef amountOfTime(root, start):\n    # your code here\n    pass\n',
  },
  visibleTests: [
    { args: [[1, 5, 3, null, 4, 10, 6, 9, 2], 3], expected: 4 },
    { args: [[1], 1], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1, 2, 3, 4, 5], 1], expected: 2 },
    { args: [[1, 2, 3, 4, 5], 4], expected: 3 },
    { args: [[1, 2], 1], expected: 1 },
    { args: [[1, 2, 3], 2], expected: 2 },
  ],
};
