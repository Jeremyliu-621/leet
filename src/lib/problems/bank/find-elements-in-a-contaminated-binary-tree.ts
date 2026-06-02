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
function __runFindElements__(treeArr, queries) {
  const finder = new FindElements(__fromArray__(treeArr));
  return queries.map(q => finder.find(q));
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
    arr = []
    for v in raw_list:
        if v is None or (isinstance(v, float) and v != v):
            arr.append(None)
        else:
            try:
                arr.append(int(v))
            except (TypeError, ValueError):
                arr.append(None)
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

def __runFindElements__(tree_arr, queries):
    queries_list = queries.to_py() if hasattr(queries, 'to_py') else list(queries)
    finder = FindElements(__from_array__(tree_arr))
    return [finder.find(int(q)) for q in queries_list]
`.trim();

export const problem: Problem = {
  id: 'find-elements-in-a-contaminated-binary-tree',
  title: 'Find Elements in a Contaminated Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'hash-map', 'design'],
  description: `Given a binary tree with the following rules:

1. \`root.val == 0\`
2. For any \`TreeNode\`, if \`node.val == x\` then:
   - \`node.left.val == 2 * x + 1\` (if left child exists)
   - \`node.right.val == 2 * x + 2\` (if right child exists)

Now the tree has been **contaminated** — all node values have been changed to \`-1\`.

Implement the \`FindElements\` class:
- \`FindElements(TreeNode root)\` — Initializes the object with the contaminated tree and **recovers** it.
- \`boolean find(int target)\` — Returns \`true\` if \`target\` exists in the recovered tree.

**Note:** The tree is given as a BFS-order array where \`null\` indicates a missing child. In the contaminated state, all non-null nodes have value \`-1\`.

The runner calls \`__runFindElements__(treeArr, queries)\` which builds the contaminated tree, instantiates your \`FindElements\` class, and returns the array of \`find\` results.`,
  constraints: [
    'TreeNode.val == -1 in the contaminated tree',
    '1 <= Node.val <= 10^6 (in the recovered tree)',
    '0 <= target <= 10^6',
    'At most 10^4 calls to find()',
    '1 <= total nodes <= 10^4',
  ],
  examples: [
    {
      input: 'root = [-1,null,-1], queries = [1,2]',
      output: '[false,true]',
      explanation: 'Recovered tree: root=0 (no left child), right child=2. find(1)=false (node 1 absent), find(2)=true.',
    },
    {
      input: 'root = [-1,-1,-1,-1,-1], queries = [1,3,5]',
      output: '[true,true,false]',
      explanation: 'Recovered tree: 0→{1,2}, 1→{3,4}, 2→{5,6} but only nodes 0-4 present. find(1)=true, find(3)=true, find(5)=false.',
    },
  ],
  hints: [
    'Level 1: Recover the tree with a DFS/BFS starting from the root: assign root.val=0, then for each node with value x, assign left child value 2x+1 and right child value 2x+2.',
    'Level 2: During recovery, store all recovered values in a Set for O(1) lookup. The find() method simply checks if target exists in the Set.',
    'Level 3: Memory optimization: you could also recompute whether a value exists by checking if the path from root to the implied position is present in the tree (using the binary representation of target+1), but the Set approach is simpler and within constraints.',
  ],
  functionName: '__runFindElements__',
  params: ['root', 'queries'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// The tree is pre-built and passed to your class.
// __runFindElements__ calls new FindElements(root) then .find(q) for each query.
class FindElements {
  constructor(root) {
    this.recovered = new Set();
    this._recover(root, 0);
  }
  _recover(node, val) {
    if (!node) return;
    this.recovered.add(val);
    this._recover(node.left, 2 * val + 1);
    this._recover(node.right, 2 * val + 2);
  }
  find(target) {
    return this.recovered.has(target);
  }
}`,
    typescript: `interface ContaminatedNode { val: number; left: ContaminatedNode | null; right: ContaminatedNode | null; }

function __runFindElements__(treeArr: (number | null)[], queries: number[]): boolean[] {
  if (!treeArr || treeArr.length === 0 || treeArr[0] == null) return queries.map(() => false);
  const root: ContaminatedNode = { val: treeArr[0], left: null, right: null };
  const queue: ContaminatedNode[] = [root];
  let i = 1;
  while (queue.length > 0 && i < treeArr.length) {
    const node = queue.shift()!;
    if (treeArr[i] != null) { node.left = { val: treeArr[i]!, left: null, right: null }; queue.push(node.left); }
    i++;
    if (i < treeArr.length && treeArr[i] != null) { node.right = { val: treeArr[i]!, left: null, right: null }; queue.push(node.right); }
    i++;
  }
  const recovered = new Set<number>();
  function recover(node: ContaminatedNode | null, val: number): void {
    if (!node) return;
    recovered.add(val);
    recover(node.left, 2 * val + 1);
    recover(node.right, 2 * val + 2);
  }
  recover(root, 0);
  return queries.map(q => recovered.has(q));
}`,
    python: `# TreeNode class and __runFindElements__ wrapper are pre-defined.
# Implement FindElements below.
class FindElements:
    def __init__(self, root):
        self.recovered = set()
        self._recover(root, 0)
    def _recover(self, node, val):
        if not node:
            return
        self.recovered.add(val)
        self._recover(node.left, 2 * val + 1)
        self._recover(node.right, 2 * val + 2)
    def find(self, target: int) -> bool:
        return target in self.recovered`,
  },
  visibleTests: [
    { args: [[-1, null, -1], [1, 2]], expected: [false, true] },
    { args: [[-1, -1, -1, -1, -1], [1, 3, 5]], expected: [true, true, false] },
  ],
  hiddenTests: [
    { args: [[-1], [0]], expected: [true] },
    { args: [[-1], [1]], expected: [false] },
    { args: [[-1, -1, -1], [0, 1, 2, 3]], expected: [true, true, true, false] },
    { args: [[-1, -1, null, -1, -1], [1, 2, 3, 4, 5]], expected: [true, false, true, true, false] },
    { args: [[-1, null, -1, -1, -1], [2, 5, 6, 7]], expected: [true, true, true, false] },
  ],
};
