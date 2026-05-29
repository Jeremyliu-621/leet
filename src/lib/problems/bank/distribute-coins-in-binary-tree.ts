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
function distributeCoinsRunner(vals) {
  return distributeCoinsBT(__fromArray__(vals));
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
    from collections import deque
    queue = deque([root])
    i = 1
    while queue and i < len(arr):
        node = queue.popleft()
        if i < len(arr) and arr[i] is not None:
            node.left = TreeNode(arr[i])
            queue.append(node.left)
        i += 1
        if i < len(arr) and arr[i] is not None:
            node.right = TreeNode(arr[i])
            queue.append(node.right)
        i += 1
    return root

def distributeCoinsRunner(vals):
    vals = list(vals.to_py() if hasattr(vals, 'to_py') else vals)
    return distribute_coins_bt(__from_array__(vals))
`.trim();

export const problem: Problem = {
  id: 'distribute-coins-in-binary-tree',
  title: 'Distribute Coins in Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'math'],
  description: `You are given the root of a binary tree with \`n\` nodes where each node holds some coins. There are exactly \`n\` coins in total across the entire tree. In one **move**, you may transfer one coin across any edge (from a node to one of its neighbors).

Return the **minimum number of moves** required to make every node hold exactly one coin.

Trees are given as level-order (BFS) arrays where \`null\` marks a missing child.

> **Note:** A \`TreeNode\` class and a \`distributeCoinsRunner(vals)\` wrapper are pre-defined. Implement \`distributeCoinsBT(root)\` (JS) or \`distribute_coins_bt(root)\` (Python).`,
  constraints: [
    'The number of nodes in the tree is `n`.',
    '`1 <= n <= 100`',
    '`0 <= Node.val <= n`',
    'The sum of all `Node.val` equals `n`.',
  ],
  examples: [
    {
      input: 'vals = [3,0,0]',
      output: '2',
      explanation: 'The root has 3 coins. Move one to its left child and one to its right child: 2 moves.',
    },
    {
      input: 'vals = [0,3,0]',
      output: '3',
      explanation: 'Left child has 3 coins: move 1 up to root (1 move), root passes 1 to right child (1 move), plus 1 extra coin leaves left edge: 3 moves total.',
    },
    {
      input: 'vals = [1,0,2]',
      output: '2',
      explanation: 'Left child needs 1 coin (1 move across its edge); right child gives 1 coin (1 move across its edge).',
    },
  ],
  hints: [
    'For each subtree, compute its **excess**: (total coins in subtree) − (number of nodes in subtree). The magnitude |excess| equals the number of coin moves that must cross the edge connecting that subtree to its parent.',
    'Use post-order DFS. At each node, recurse into both children, accumulate the absolute value of each child\'s excess into a running move count, then return this node\'s own excess to its parent.',
    '```js\nfunction distributeCoinsBT(root) {\n  let moves = 0;\n  function excess(node) {\n    if (!node) return 0;\n    const left = excess(node.left);\n    const right = excess(node.right);\n    moves += Math.abs(left) + Math.abs(right);\n    return node.val + left + right - 1;\n  }\n  excess(root);\n  return moves;\n}\n```',
  ],
  functionName: 'distributeCoinsRunner',
  params: ['vals'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and distributeCoinsRunner wrapper are pre-defined.
// Implement the function below:
function distributeCoinsBT(root) {

}
`,
    python: `# TreeNode class and distributeCoinsRunner wrapper are pre-defined.
# Implement the function below:
def distribute_coins_bt(root):
    pass
`,
  },
  visibleTests: [
    { args: [[3, 0, 0]], expected: 2 },
    { args: [[0, 3, 0]], expected: 3 },
    { args: [[1, 0, 2]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1]], expected: 0 },
    { args: [[0, 0, 2]], expected: 2 },
    { args: [[1, 0, 0, null, 3]], expected: 4 },
    { args: [[1, 0, 0, null, null, 1, 3]], expected: 4 },
    { args: [[4, 0, 0, 0, 0]], expected: 6 },
    { args: [[0, 0, 0, 4, 0]], expected: 6 },
    { args: [[2, 2, 0]], expected: 2 },
    { args: [[1, 2, 3, 0, 0, 0, 0]], expected: 5 },
    { args: [[3, 1, 2, 0, 0, 0, 0]], expected: 7 },
    { args: [[1, 1, 1]], expected: 0 },
  ],
};
