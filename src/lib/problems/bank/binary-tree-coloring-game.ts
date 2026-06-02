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
function btreeGameWinningMoveRunner(n, arr, x) { return btreeGameWinningMove(n, __fromArray__(arr), x); }
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

def btreeGameWinningMoveRunner(n, arr, x):
    return btreeGameWinningMove(int(n), __from_array__(arr), int(x))
`.trim();

export const problem: Problem = {
  id: 'binary-tree-coloring-game',
  title: 'Binary Tree Coloring Game',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Two players play a turn-based game on a binary tree with \`n\` nodes (values \`1\` to \`n\`). Player 1 colors node \`x\` red. Player 2 then chooses **any** uncolored node and colors it blue. From that point, each turn a player colors an uncolored neighbor (parent or child) of any node already colored their color.

The player who colors more nodes wins. Return \`true\` if Player 2 can guarantee a win, otherwise \`false\`.

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.

> **Note:** A \`TreeNode\` class and a \`btreeGameWinningMoveRunner(n, arr, x)\` wrapper are pre-defined. Implement \`btreeGameWinningMove(n, root, x)\`.`,
  constraints: [
    'The number of nodes in the tree is n.',
    '1 <= x <= n <= 100',
    'All values in the tree are unique.',
    'The tree is guaranteed to be a valid binary tree.',
  ],
  examples: [
    {
      input: 'n = 11, root = [1,2,3,4,5,6,7,8,9,10,11], x = 3',
      output: 'true',
      explanation:
        'Player 1 colors node 3. Node 3\'s left subtree has 1 node, right subtree has 1 node, and the parent side has 8 nodes. Player 2 colors node 1 (parent side), claiming 8 nodes vs Player 1\'s maximum of 3. 8 > 11/2 so Player 2 wins.',
    },
    {
      input: 'n = 3, root = [1,2,3], x = 1',
      output: 'false',
      explanation:
        'Player 1 colors the root (node 1). It has left subtree size 1 and right subtree size 1. No side has more than 3/2 = 1.5 nodes, so Player 2 cannot win.',
    },
  ],
  hints: [
    'Player 2 can only win by choosing one of three positions relative to x: the root of x\'s left subtree, the root of x\'s right subtree, or x\'s parent. Each choice "blocks" Player 1 from that entire region.',
    'Count the size of x\'s left subtree (`leftCount`) and right subtree (`rightCount`). The parent side has `n - leftCount - rightCount - 1` nodes. Player 2 wins if any of these three counts exceeds `n / 2`.',
    'Use a DFS to locate node x in the tree, then count its subtree sizes. A single traversal is sufficient: recurse into both subtrees and return the total count from each side.',
  ],
  functionName: 'btreeGameWinningMoveRunner',
  params: ['n', 'root', 'x'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and btreeGameWinningMoveRunner wrapper are pre-defined.\nfunction btreeGameWinningMove(n, root, x) {\n  const size = (node) => node ? 1 + size(node.left) + size(node.right) : 0;\n  let lc = 0, rc = 0;\n  const find = (node) => {\n    if (!node) return false;\n    if (node.val === x) { lc = size(node.left); rc = size(node.right); return true; }\n    return find(node.left) || find(node.right);\n  };\n  find(root);\n  return Math.max(lc, rc, n - lc - rc - 1) > n / 2;\n}\n',
    typescript: `function btreeGameWinningMoveRunner(n: number, root: (number | null)[], x: number): boolean {
  if (!root.length || root[0] === null) return false;
  type N = { v: number; l: N|null; r: N|null };
  const mk = (v: number): N => ({v, l: null, r: null});
  const r = mk(root[0] as number);
  const q: N[] = [r]; let i = 1;
  while (q.length && i < root.length) {
    const nd = q.shift()!;
    if (root[i] != null) { nd.l = mk(root[i] as number); q.push(nd.l); } i++;
    if (i < root.length && root[i] != null) { nd.r = mk(root[i] as number); q.push(nd.r); } i++;
  }
  const size = (nd: N|null): number => nd ? 1 + size(nd.l) + size(nd.r) : 0;
  let lc = 0, rc = 0;
  const find = (nd: N|null): boolean => {
    if (!nd) return false;
    if (nd.v === x) { lc = size(nd.l); rc = size(nd.r); return true; }
    return find(nd.l) || find(nd.r);
  };
  find(r);
  return Math.max(lc, rc, n - lc - rc - 1) > n / 2;
}`,
    python:
      '# TreeNode class and btreeGameWinningMoveRunner wrapper are pre-defined.\ndef btreeGameWinningMove(n, root, x):\n    def size(node): return 1+size(node.left)+size(node.right) if node else 0\n    lc = rc = 0\n    def find(node):\n        nonlocal lc, rc\n        if not node: return False\n        if node.val == x: lc=size(node.left); rc=size(node.right); return True\n        return find(node.left) or find(node.right)\n    find(root)\n    return max(lc, rc, n-lc-rc-1) > n/2\n',
  },
  visibleTests: [
    { args: [11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3], expected: true },
    { args: [3, [1, 2, 3], 1], expected: false },
  ],
  hiddenTests: [
    { args: [7, [1, 2, 3, 4, 5, 6, 7], 2], expected: true },
    { args: [7, [1, 2, 3, 4, 5, 6, 7], 1], expected: false },
    { args: [5, [1, 2, 3, 4, 5], 3], expected: true },
    { args: [5, [1, 2, 3, 4, 5], 2], expected: false },
    { args: [9, [1, 2, 3, 4, 5, 6, 7, 8, 9], 3], expected: true },
    { args: [7, [1, 2, 3, 4, 5, 6, 7], 4], expected: true },
  ],
};
