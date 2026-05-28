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
function __toArray__(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) { result.push(null); continue; }
    result.push(node.val);
    queue.push(node.left ?? null);
    queue.push(node.right ?? null);
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function serializeBinaryTreeRunner(arr) {
  const root = __fromArray__(arr);
  const s = serialize(root);
  const restored = deserialize(s);
  return __toArray__(restored);
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

def __to_array__(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            result.append(None)
            continue
        result.append(node.val)
        queue.append(node.left)
        queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

def serializeBinaryTreeRunner(arr):
    root = __from_array__(arr)
    s = serialize(root)
    restored = deserialize(s)
    return __to_array__(restored)
`.trim();

export const problem: Problem = {
  id: 'serialize-binary-tree',
  title: 'Serialize and Deserialize Binary Tree',
  difficulty: 'hard',
  tags: ['tree'],
  description: `Design an algorithm to **serialize** a binary tree to a string and **deserialize** it back to the original tree structure.

Implement two functions:
- \`serialize(root)\` — encodes a tree to a single string
- \`deserialize(data)\` — decodes the string back to a tree

The encoded format is **entirely your choice** — there is no restriction on how the tree is represented as a string. The only requirement is that \`deserialize(serialize(root))\` reproduces the original tree.

The test runner calls \`serialize\` then \`deserialize\` and checks that the reconstituted tree matches the original.

**Common approach:** BFS level-order with a null sentinel (e.g. \`"1,2,3,#,#,4,5"\`) or DFS preorder with a sentinel.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4]',
    '-1000 <= Node.val <= 1000',
    'serialize and deserialize are inverse operations',
  ],
  examples: [
    {
      input: 'root = [1,2,3,null,null,4,5]',
      output: '[1,2,3,null,null,4,5]',
      explanation: 'The tree is serialized to a string and deserialized back to the same structure.',
    },
    {
      input: 'root = []',
      output: '[]',
      explanation: 'Empty tree serializes to an empty representation.',
    },
  ],
  hints: [
    'For BFS serialization: use a queue, emit each node\'s value (or a sentinel like "#" for null), then split on a delimiter during deserialization.',
    'For DFS preorder serialization: emit root value then recurse left then right. During deserialization, consume values from an index pointer — if the value is your null sentinel, return null; otherwise create a node and recurse.',
    'The format doesn\'t matter — what matters is that serialize and deserialize are inverses. A simple preorder with "null" tokens and comma separators is clean and easy to implement correctly.',
  ],
  functionName: 'serializeBinaryTreeRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and serializeBinaryTreeRunner wrapper are pre-defined.
// Implement both functions below:
function serialize(root) {

}

function deserialize(data) {

}
`,
    typescript: "function serializeBinaryTreeRunner(arr: number[]): number[] {\n\n}\n\nfunction deserialize(data) {\n\n}",

    python: `# TreeNode class and serializeBinaryTreeRunner wrapper are pre-defined.
# Implement both functions below:
def serialize(root):
    pass

def deserialize(data):
    pass
`,
  },
  visibleTests: [
    { args: [[1, 2, 3]], expected: [1, 2, 3] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[3, 2, 4, 1]], expected: [3, 2, 4, 1] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [1, 2, 3, 4, 5, 6, 7] },
    { args: [[5, 3, 7, 1, 4, 6, 8]], expected: [5, 3, 7, 1, 4, 6, 8] },
  ],
};
