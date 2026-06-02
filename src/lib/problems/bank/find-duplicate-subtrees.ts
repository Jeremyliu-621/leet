import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode { constructor(val, left=null, right=null) { this.val=val; this.left=left; this.right=right; } }
function __fromArray__(arr) {
  const a = Array.from(arr);
  if (!a.length || a[0] == null) return null;
  const root = new TreeNode(a[0]); const q = [root]; let i = 1;
  while (q.length && i < a.length) {
    const node = q.shift();
    if (i < a.length && a[i] != null) { node.left = new TreeNode(a[i]); q.push(node.left); } i++;
    if (i < a.length && a[i] != null) { node.right = new TreeNode(a[i]); q.push(node.right); } i++;
  }
  return root;
}
function __toArray__(root) {
  if (!root) return [];
  const res = []; const q = [root];
  while (q.length) {
    const n = q.shift();
    if (!n) { res.push(null); continue; }
    res.push(n.val); q.push(n.left); q.push(n.right);
  }
  while (res.length && res[res.length-1] == null) res.pop();
  return res;
}
function findDuplicateSubtreesRunner(arr) {
  return findDuplicateSubtrees(__fromArray__(arr)).map(__toArray__);
}`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right

def __from_array__(raw):
    a = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    a = [None if x is None else int(x) for x in a]
    if not a or a[0] is None: return None
    root = TreeNode(a[0]); queue = [root]; i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None: node.left = TreeNode(a[i]); queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None: node.right = TreeNode(a[i]); queue.append(node.right)
        i += 1
    return root

def __to_array__(root):
    if not root: return []
    result = []; queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None: result.append(None); continue
        result.append(node.val)
        if node.left is not None or node.right is not None:
            queue.append(node.left); queue.append(node.right)
    while result and result[-1] is None: result.pop()
    return result

def findDuplicateSubtreesRunner(arr):
    return [__to_array__(n) for n in findDuplicateSubtrees(__from_array__(arr))]
`.trim();

export const problem: Problem = {
  id: 'find-duplicate-subtrees',
  title: 'Find Duplicate Subtrees',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `Given the \`root\` of a binary tree, return all **duplicate subtrees**.

For each kind of duplicate subtrees, you only need to return the root node of any **one** of them.

Two trees are **duplicate** if they have the **same structure** with the **same node values**.`,
  constraints: [
    'The number of the nodes in the tree will be in the range [1, 5000]',
    '-200 <= Node.val <= 200',
  ],
  examples: [
    {
      input: 'root = [1,2,3,4,null,2,4,null,null,4]',
      output: '[[4],[2,4]]',
      explanation: 'Leaf value 4 appears 3 times (duplicate found at 2nd), and subtree [2,4] appears twice (duplicate found at 2nd).',
    },
    {
      input: 'root = [2,1,1]',
      output: '[[1]]',
      explanation: 'Both leaf nodes have value 1 and are duplicates.',
    },
    {
      input: 'root = [2,2,2,3,null,3,null]',
      output: '[[3],[2,3]]',
      explanation: 'Leaf value 3 appears twice and subtree [2,3] appears twice.',
    },
  ],
  hints: [
    'Level 1: Serialize each subtree to a canonical string. Use post-order traversal to build the string bottom-up.',
    'Level 2: Maintain a hash map from serialization → count. When count reaches 2, add the root to the result.',
    'Level 3: Serialize as "left#right#val". The "#" separator distinguishes null from non-null children.',
  ],
  functionName: 'findDuplicateSubtreesRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, typescript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and findDuplicateSubtreesRunner wrapper are pre-defined.
// Implement the function below:
function findDuplicateSubtrees(root) {
  const map = new Map();
  const result = [];
  function serialize(node) {
    if (!node) return '#';
    const serial = serialize(node.left) + ',' + serialize(node.right) + ',' + node.val;
    const count = (map.get(serial) || 0) + 1;
    map.set(serial, count);
    if (count === 2) result.push(node);
    return serial;
  }
  serialize(root);
  return result;
}`,
    typescript: `// TreeNode class and findDuplicateSubtreesRunner wrapper are pre-defined.
// Implement the function below:
function findDuplicateSubtrees(root: TreeNode | null): TreeNode[] {
  const map = new Map<string, number>();
  const result: TreeNode[] = [];
  function serialize(node: TreeNode | null): string {
    if (!node) return '#';
    const serial = serialize(node.left) + ',' + serialize(node.right) + ',' + node.val;
    const count = (map.get(serial) ?? 0) + 1;
    map.set(serial, count);
    if (count === 2) result.push(node);
    return serial;
  }
  serialize(root);
  return result;
}`,
    python: `# TreeNode class and findDuplicateSubtreesRunner wrapper are pre-defined.
# Implement the function below:
def findDuplicateSubtrees(root):
    from collections import defaultdict
    count = defaultdict(int)
    result = []
    def serialize(node):
        if node is None: return '#'
        s = serialize(node.left) + ',' + serialize(node.right) + ',' + str(node.val)
        count[s] += 1
        if count[s] == 2: result.append(node)
        return s
    serialize(root)
    return result`,
  },
  visibleTests: [
    {
      args: [[1, 2, 3, 4, null, 2, 4, null, null, 4]],
      expected: [[4], [2, 4]],
    },
    {
      args: [[2, 1, 1]],
      expected: [[1]],
    },
    {
      args: [[2, 2, 2, 3, null, 3, null]],
      expected: [[3], [2, 3]],
    },
  ],
  hiddenTests: [
    {
      args: [[1]],
      expected: [],
    },
    {
      args: [[1, 2, 2]],
      expected: [[2]],
    },
    {
      args: [[1, 2, 3, 4, null, 4]],
      expected: [[4]],
    },
  ],
};
