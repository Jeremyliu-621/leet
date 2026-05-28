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
function preorderRunner(arr) { return preorder(__buildNAry__(arr)); }
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

def preorderRunner(arr):
    return preorder(__build_nary__(arr))
`.trim();

export const problem: Problem = {
  id: 'n-ary-tree-preorder-traversal',
  title: 'N-ary Tree Preorder Traversal',
  difficulty: 'easy',
  tags: ['tree', 'stack'],
  description: `Given the root of an N-ary tree, return the **preorder traversal** of its nodes' values.

In preorder traversal, the root node is visited first, then each child subtree is visited from left to right recursively.

The tree is serialized as a flat array in level-order format where groups of children are separated by \`null\`. For example, \`[1,null,3,2,4,null,5,6]\` represents a tree where node 1 has children [3, 2, 4], and node 3 has children [5, 6].

> **Note:** A \`Node\` class is pre-defined. Your function receives a \`Node | null\`.`,
  examples: [
    {
      input: 'root = [1,null,3,2,4,null,5,6]',
      output: '[1,3,5,6,2,4]',
      explanation: 'Visit 1 first, then subtree of 3 (3, 5, 6), then 2, then 4.',
    },
    {
      input: 'root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]',
      output: '[1,2,3,6,7,11,14,4,8,12,5,9,13,10]',
      explanation: 'Full preorder traversal of the 5-level tree.',
    },
    {
      input: 'root = null',
      output: '[]',
      explanation: 'Empty tree returns empty array.',
    },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4].',
    '0 <= Node.val <= 10^4',
    'The height of the n-ary tree is at most 1000.',
  ],
  functionName: 'preorderRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// Node class and preorderRunner wrapper are pre-defined.\n// Implement the function below:\nfunction preorder(root) {\n  // your code here\n}\n',
    typescript: "function preorderRunner(root: (number | null)[]): number[] {\n  // your code here\n}",

    python: '# Node class and preorderRunner wrapper are pre-defined.\n# Implement the function below:\ndef preorder(root):\n    # your code here\n    pass\n',
  },
  hints: [
    'Recursion is the simplest approach: append the current node\'s value, then recursively call preorder on each child.',
    'Iterative solution: use a stack. Push the root, then while the stack is non-empty: pop a node, record its value, push its children in reverse order so the leftmost child is processed first.',
    'Iterative: `stack = [root]; result = []; while stack: node = stack.pop(); result.append(node.val); stack.extend(reversed(node.children))`',
  ],
  visibleTests: [
    {
      args: [[1, null, 3, 2, 4, null, 5, 6]],
      expected: [1, 3, 5, 6, 2, 4],
    },
    {
      args: [[]],
      expected: [],
    },
    {
      args: [[1]],
      expected: [1],
    },
  ],
  hiddenTests: [
    {
      args: [[1, null, 2]],
      expected: [1, 2],
    },
    {
      args: [[1, null, 2, 3, 4, 5, null, null, 6, 7, null, 8, null, 9, 10, null, null, 11, null, 12, null, 13, null, null, 14]],
      expected: [1, 2, 3, 6, 7, 11, 14, 4, 8, 12, 5, 9, 13, 10],
    },
    {
      args: [[1, null, 2, 3, null, 4, 5]],
      expected: [1, 2, 4, 5, 3],
    },
    {
      args: [[5, null, 1, 2, 3, 4]],
      expected: [5, 1, 2, 3, 4],
    },
  ],
};
