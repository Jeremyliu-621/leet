import type { Problem } from '../types';

const JS_PREAMBLE = `
function bstIteratorRunner(ops, vals, treeArr) {
  // Build BST from level-order array
  function buildTree(arr) {
    if (!arr || !arr.length || arr[0] === null) return null;
    const root = { val: arr[0], left: null, right: null };
    const queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
      const node = queue.shift();
      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
        node.left = { val: arr[i], left: null, right: null };
        queue.push(node.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null && arr[i] !== undefined) {
        node.right = { val: arr[i], left: null, right: null };
        queue.push(node.right);
      }
      i++;
    }
    return root;
  }
  const root = buildTree(treeArr);
  const iter = new BSTIterator(root);
  return ops.map(op => {
    if (op === 'next') return iter.next();
    if (op === 'hasNext') return iter.hasNext();
    return null;
  });
}
`.trim();

const PY_PREAMBLE = `
def bstIteratorRunner(ops, vals, tree_arr):
    def build_tree(raw):
        raw_list = list(raw.to_py() if hasattr(raw, 'to_py') else raw)
        arr = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
        if not arr or arr[0] is None:
            return None
        class Node:
            def __init__(self, val):
                self.val = val
                self.left = None
                self.right = None
        root = Node(arr[0])
        queue = [root]
        i = 1
        while queue and i < len(arr):
            node = queue.pop(0)
            if i < len(arr) and arr[i] is not None:
                node.left = Node(arr[i])
                queue.append(node.left)
            i += 1
            if i < len(arr) and arr[i] is not None:
                node.right = Node(arr[i])
                queue.append(node.right)
            i += 1
        return root
    root = build_tree(tree_arr)
    ops_list = list(ops.to_py() if hasattr(ops, 'to_py') else ops)
    iterator = BSTIterator(root)
    result = []
    for op in ops_list:
        if op == 'next':
            result.append(iterator.next())
        elif op == 'hasNext':
            result.append(iterator.hasNext())
        else:
            result.append(None)
    return result
`.trim();

export const problem: Problem = {
  id: 'binary-search-tree-iterator',
  title: 'Binary Search Tree Iterator',
  difficulty: 'medium',
  tags: ['tree', 'stack'],
  description: `Implement the \`BSTIterator\` class that represents an iterator over the **in-order traversal** of a binary search tree (BST).

The class should implement:
- \`BSTIterator(root)\` — Initializes the iterator object with the root of the BST.
- \`next()\` — Returns the next smallest number in the BST.
- \`hasNext()\` — Returns \`true\` if there is a next element, \`false\` otherwise.

You may assume that \`next()\` calls are always valid (i.e., there will be at least one next element when called).

> **Note:** A runner function \`bstIteratorRunner(ops, vals, treeArr)\` is pre-defined. It builds a BST from the level-order array \`treeArr\`, creates a \`BSTIterator\`, and calls each operation in \`ops\`, returning the array of results.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^5]',
    '0 <= Node.val <= 10^6',
    'At most 10^5 calls will be made to hasNext and next',
    'next() is always called when hasNext() is true',
  ],
  examples: [
    {
      input: 'ops = ["next","next","hasNext","next","hasNext","next","hasNext","next","hasNext"], treeArr = [7,3,15,null,null,9,20]',
      output: '[3,7,true,9,true,15,true,20,false]',
      explanation: 'In-order traversal of [7,3,15,null,null,9,20] is [3,7,9,15,20]. next() returns values in this order; hasNext() returns true until all values are exhausted.',
    },
    {
      input: 'ops = ["next","hasNext"], treeArr = [1]',
      output: '[1,false]',
      explanation: 'Single node: next() returns 1, then hasNext() returns false.',
    },
  ],
  hints: [
    'In-order traversal visits left subtree → root → right subtree, producing sorted output for a BST. You can eagerly collect all values during initialization, but that uses O(n) space.',
    'For O(h) space (h = tree height), use a stack. Push all left children of the root onto the stack during init. On each `next()` call: pop from the stack (that node is the next smallest), then push all left children of that node\'s right subtree.',
    'Implementation: `constructor` → push all left spine; `hasNext` → stack is non-empty; `next` → pop node, push left spine of `node.right`, return `node.val`.',
  ],
  functionName: 'bstIteratorRunner',
  params: ['ops', 'vals', 'treeArr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// bstIteratorRunner is pre-defined and calls your class below.\nclass BSTIterator {\n  constructor(root) {\n    // root has .val, .left, .right\n  }\n  next() {\n    // return next smallest value\n  }\n  hasNext() {\n    // return true if more elements exist\n  }\n}\n',
    typescript: "function bstIteratorRunner(ops: string[], vals: unknown[], treeArr: (number | null)[]): (number | boolean)[] {\n  constructor(root) {\n    // root has .val, .left, .right\n  }\n  next() {\n    // return next smallest value\n  }\n  hasNext() {\n    // return true if more elements exist\n  }\n}",

    python: '# bstIteratorRunner is pre-defined and calls your class below.\nclass BSTIterator:\n    def __init__(self, root):\n        # root has .val, .left, .right\n        pass\n    def next(self):\n        pass  # return next smallest value\n    def hasNext(self):\n        pass  # return True if more elements exist\n',
  },
  visibleTests: [
    {
      args: [
        ['next', 'next', 'hasNext', 'next', 'hasNext', 'next', 'hasNext', 'next', 'hasNext'],
        [],
        [7, 3, 15, null, null, 9, 20],
      ],
      expected: [3, 7, true, 9, true, 15, true, 20, false],
    },
    {
      args: [['next', 'hasNext'], [], [1]],
      expected: [1, false],
    },
    {
      args: [['hasNext', 'next', 'hasNext', 'next', 'hasNext'], [], [2, 1, 3]],
      expected: [true, 1, true, 2, true],
    },
  ],
  hiddenTests: [
    {
      args: [['next', 'next', 'next', 'hasNext'], [], [5, 3, 7, 1, 4]],
      expected: [1, 3, 4, true],
    },
    {
      args: [['next', 'next', 'hasNext'], [], [3, 1, null, null, 2]],
      expected: [1, 2, true],
    },
    {
      args: [['hasNext', 'next', 'next', 'next', 'hasNext'], [], [4, 2, 6, 1, 3, 5, 7]],
      expected: [true, 1, 2, 3, true],
    },
    {
      args: [['next', 'next', 'next', 'next', 'hasNext'], [], [10, 5, 15, 3, 7]],
      expected: [3, 5, 7, 10, true],
    },
    {
      args: [['next', 'hasNext', 'next', 'hasNext'], [], [1, null, 2, null, 3]],
      expected: [1, true, 2, true],
    },
    {
      args: [['next', 'next', 'next', 'hasNext'], [], [2, 1, 3]],
      expected: [1, 2, 3, false],
    },
  ],
};
