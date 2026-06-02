import type { Problem } from '../types';

const JS_PREAMBLE = `
class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children || [];
  }
}
function __buildNAry__(arr) {
  if (!arr || arr.length === 0) return null;
  const root = new Node(arr[0]);
  const queue = [root];
  let i = 2;
  while (i < arr.length && queue.length > 0) {
    const node = queue.shift();
    while (i < arr.length && arr[i] !== null) {
      const child = new Node(arr[i]);
      node.children.push(child);
      queue.push(child);
      i++;
    }
    i++;
  }
  return root;
}
function maxDepthRunner(arr) { return maxDepth(__buildNAry__(arr)); }
`.trim();

const PY_PREAMBLE = `
class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children if children is not None else []

def __build_nary__(raw):
    raw_list = raw.to_py() if hasattr(raw, 'to_py') else list(raw)
    arr = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not arr or arr[0] is None:
        return None
    root = Node(arr[0])
    queue = [root]
    i = 2
    while i < len(arr) and queue:
        node = queue.pop(0)
        while i < len(arr) and arr[i] is not None:
            child = Node(arr[i])
            node.children.append(child)
            queue.append(child)
            i += 1
        i += 1
    return root

def maxDepthRunner(arr):
    return maxDepth(__build_nary__(arr))
`.trim();

export const problem: Problem = {
  id: 'maximum-depth-n-ary-tree',
  title: 'Maximum Depth of N-ary Tree',
  difficulty: 'easy',
  tags: ['tree', 'stack'],
  description: `Given the root of an N-ary tree, return its **maximum depth**.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

The tree is serialized as a level-order flat array where each group of children is separated by \`null\`. For example, \`[1,null,3,2,4,null,5,6]\` represents a tree where node 1 has children [3, 2, 4], and node 3 has children [5, 6].

> **Note:** A \`Node\` class is pre-defined. Your function receives a \`Node | null\`.`,
  examples: [
    {
      input: 'root = [1,null,3,2,4,null,5,6]',
      output: '3',
      explanation: 'The longest path is 1 → 3 → 5 (or 1 → 3 → 6), which is 3 levels deep.',
    },
    {
      input: 'root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]',
      output: '5',
      explanation: 'The deepest leaf is at depth 5.',
    },
    {
      input: 'root = null',
      output: '0',
      explanation: 'An empty tree has depth 0.',
    },
  ],
  constraints: [
    'The total number of nodes is in the range [0, 10^4].',
    'The depth of the n-ary tree is in the range [0, 1000].',
    '1 <= Node.val <= 10^5',
  ],
  functionName: 'maxDepthRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// Node class and maxDepthRunner wrapper are pre-defined.
// Implement the function below:
function maxDepth(root) {
  if (!root) return 0;
  if (!root.children.length) return 1;
  return 1 + Math.max(...root.children.map(maxDepth));
}`,
    typescript: `function maxDepthRunner(root: (number | null)[]): number {
  if (!root || root.length === 0) return 0;
  class TN { val: number; children: TN[] = []; constructor(v: number) { this.val = v; } }
  const r = new TN(root[0]!);
  const q: TN[] = [r]; let i = 2;
  while (i < root.length && q.length > 0) {
    const node = q.shift()!;
    while (i < root.length && root[i] !== null) {
      const c = new TN(root[i]!); node.children.push(c); q.push(c); i++;
    }
    i++;
  }
  function depth(n: TN): number {
    return n.children.length === 0 ? 1 : 1 + Math.max(...n.children.map(depth));
  }
  return depth(r);
}`,
    python: `# Node class and maxDepthRunner wrapper are pre-defined.
# Implement the function below:
def maxDepth(root):
    if not root: return 0
    if not root.children: return 1
    return 1 + max(maxDepth(c) for c in root.children)`,
  },
  hints: [
    'If root is null/None, return 0. Otherwise, the depth is 1 + the maximum depth among all children.',
    'Use DFS (recursion): if the node has no children, return 1. Otherwise return 1 + max depth among children.',
    'BFS also works: process level by level, counting the number of levels until the queue is empty.',
  ],
  visibleTests: [
    {
      args: [[1, null, 3, 2, 4, null, 5, 6]],
      expected: 3,
    },
    {
      args: [[]],
      expected: 0,
    },
    {
      args: [[1]],
      expected: 1,
    },
  ],
  hiddenTests: [
    {
      args: [[1, null, 2]],
      expected: 2,
    },
    {
      args: [[1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]],
      expected: 5,
    },
    {
      args: [[1, null, 2, 3, null, 4, 5]],
      expected: 3,
    },
    {
      args: [[5, null, 1, 2, 3, 4]],
      expected: 2,
    },
  ],
};
