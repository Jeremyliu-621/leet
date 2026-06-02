import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val = 0, left = null, right = null) {
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
    if (arr[i] !== null && arr[i] !== undefined) { node.left = new TreeNode(arr[i]); queue.push(node.left); }
    i++;
    if (i < arr.length && arr[i] !== null && arr[i] !== undefined) { node.right = new TreeNode(arr[i]); queue.push(node.right); }
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
    if (node === null || node === undefined) {
      result.push(null);
    } else {
      result.push(node.val);
      queue.push(node.left ?? null);
      queue.push(node.right ?? null);
    }
  }
  while (result.length > 0 && result[result.length - 1] === null) result.pop();
  return result;
}
function serDeserRunner(arr) {
  const root = __fromArray__(arr);
  const data = serialize(root);
  const restored = deserialize(data);
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
    if root is None:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            result.append(None)
        else:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] is None:
        result.pop()
    return result

def serDeserRunner(arr):
    root = __from_array__(arr)
    data = serialize(root)
    restored = deserialize(data)
    return __to_array__(restored)
`.trim();

export const problem: Problem = {
  id: 'serialize-and-deserialize-binary-tree',
  title: 'Serialize and Deserialize Binary Tree',
  difficulty: 'hard',
  tags: ['tree'],
  description: `Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Implement the following functions:
- \`serialize(root)\` — encodes a tree to a single string.
- \`deserialize(data)\` — decodes the encoded string back to a tree.

The runner will call \`serialize\`, then \`deserialize\`, and verify the result matches the original tree.

> **Note:** The tree is represented as a BFS-level array where \`null\` marks a missing child.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4].',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [1,2,3,null,null,4,5]',
      output: '[1,2,3,null,null,4,5]',
      explanation: 'After serialize then deserialize, the original tree structure is preserved.',
    },
    {
      input: 'root = []',
      output: '[]',
      explanation: 'Empty tree serializes and deserializes back to empty.',
    },
  ],
  hints: [
    'Use BFS (level-order) serialization: enqueue nodes and record their values, using a sentinel (e.g., "#") for null nodes. Separate values with commas.',
    'For deserialization: split the string, rebuild the root, then use a queue — for each non-null node dequeued, the next two tokens are its left and right children.',
    'Alternatively, use DFS preorder: `serialize = val + "," + serialize(left) + serialize(right)`. Deserialize by consuming tokens from a list one at a time.',
  ],
  functionName: 'serDeserRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode is pre-defined. The runner calls serialize then deserialize and checks round-trip.
function serialize(root) {
  if (!root) return '#';
  const res = [];
  const q = [root];
  while (q.length) {
    const node = q.shift();
    if (!node) { res.push('#'); continue; }
    res.push(node.val);
    q.push(node.left ?? null);
    q.push(node.right ?? null);
  }
  while (res[res.length - 1] === '#') res.pop();
  return res.join(',');
}

function deserialize(data) {
  if (!data || data === '#') return null;
  const tokens = data.split(',');
  const root = new TreeNode(+tokens[0]);
  const q = [root];
  let i = 1;
  while (q.length && i < tokens.length) {
    const node = q.shift();
    if (tokens[i] !== '#') { node.left = new TreeNode(+tokens[i]); q.push(node.left); }
    i++;
    if (i < tokens.length && tokens[i] !== '#') { node.right = new TreeNode(+tokens[i]); q.push(node.right); }
    i++;
  }
  return root;
}`,
    typescript: `function serDeserRunner(root: (number | null)[]): (number | null)[] {
  type N = { val: number; left: N | null; right: N | null };
  const build = (arr: (number | null)[]): N | null => {
    if (!arr.length || arr[0] == null) return null;
    const r: N = { val: arr[0], left: null, right: null };
    const q: N[] = [r];
    let i = 1;
    while (q.length && i < arr.length) {
      const nd = q.shift()!;
      if (arr[i] != null) { nd.left = { val: arr[i]!, left: null, right: null }; q.push(nd.left); }
      i++;
      if (i < arr.length && arr[i] != null) { nd.right = { val: arr[i]!, left: null, right: null }; q.push(nd.right); }
      i++;
    }
    return r;
  };
  const serialize = (nd: N | null): string => {
    if (!nd) return '#';
    const res: string[] = [];
    const q: (N | null)[] = [nd];
    while (q.length) {
      const cur = q.shift()!;
      if (!cur) { res.push('#'); continue; }
      res.push(String(cur.val));
      q.push(cur.left); q.push(cur.right);
    }
    while (res[res.length - 1] === '#') res.pop();
    return res.join(',');
  };
  const deserialize = (data: string): N | null => {
    if (!data || data === '#') return null;
    const tokens = data.split(',');
    const r: N = { val: Number(tokens[0]), left: null, right: null };
    const q: N[] = [r];
    let i = 1;
    while (q.length && i < tokens.length) {
      const nd = q.shift()!;
      if (tokens[i] !== '#') { nd.left = { val: Number(tokens[i]), left: null, right: null }; q.push(nd.left); }
      i++;
      if (i < tokens.length && tokens[i] !== '#') { nd.right = { val: Number(tokens[i]), left: null, right: null }; q.push(nd.right); }
      i++;
    }
    return r;
  };
  const toArr = (nd: N | null): (number | null)[] => {
    if (!nd) return [];
    const res: (number | null)[] = [];
    const q: (N | null)[] = [nd];
    while (q.length) {
      const cur = q.shift()!;
      if (!cur) { res.push(null); continue; }
      res.push(cur.val); q.push(cur.left); q.push(cur.right);
    }
    while (res.length && res[res.length - 1] === null) res.pop();
    return res;
  };
  return toArr(deserialize(serialize(build(root))));
}`,
    python: `# TreeNode is pre-defined. The runner calls serialize then deserialize and checks round-trip.
def serialize(root):
    if not root:
        return '#'
    result, queue = [], [root]
    while queue:
        node = queue.pop(0)
        if node is None:
            result.append('#')
        else:
            result.append(str(node.val))
            queue.append(node.left)
            queue.append(node.right)
    while result and result[-1] == '#':
        result.pop()
    return ','.join(result)

def deserialize(data):
    if not data or data == '#':
        return None
    tokens = data.split(',')
    root = TreeNode(int(tokens[0]))
    queue, i = [root], 1
    while queue and i < len(tokens):
        node = queue.pop(0)
        if tokens[i] != '#':
            node.left = TreeNode(int(tokens[i])); queue.append(node.left)
        i += 1
        if i < len(tokens) and tokens[i] != '#':
            node.right = TreeNode(int(tokens[i])); queue.append(node.right)
        i += 1
    return root`,
  },
  visibleTests: [
    { args: [[1, 2, 3, null, null, 4, 5]], expected: [1, 2, 3, null, null, 4, 5] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, null, 2]], expected: [1, null, 2] },
    { args: [[1, 2, 3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { args: [[1, null, 2, null, 3]], expected: [1, null, 2, null, 3] },
    { args: [[3, 1, 4, null, 2]], expected: [3, 1, 4, null, 2] },
    { args: [[-1, -2, -3]], expected: [-1, -2, -3] },
  ],
};
