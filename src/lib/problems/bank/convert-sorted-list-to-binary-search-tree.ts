import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-sorted-list-to-binary-search-tree',
  title: 'Convert Sorted List to Binary Search Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given a sorted array of integers \`listValues\`, convert it to a **height-balanced** binary search tree.

A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Return the tree as a **BFS level-order array** where \`null\` represents a missing child.

**Approach:** Pick the middle element (floor of midpoint) as the root, recursively build left and right subtrees from the remaining halves.`,
  constraints: [
    '0 <= listValues.length <= 2 * 10^4',
    '-10^5 <= listValues[i] <= 10^5',
    'listValues is sorted in strictly ascending order.',
  ],
  examples: [
    {
      input: 'listValues = [-10,-3,0,5,9]',
      output: '[0,-10,5,null,-3,null,9]',
      explanation: 'mid=floor((0+4)/2)=2 so root=0. Left [−10,−3]: mid=0, root=−10, right=−3. Right [5,9]: mid=3, root=5, right=9.',
    },
    {
      input: 'listValues = [1,3]',
      output: '[1,null,3]',
      explanation: 'mid=floor((0+1)/2)=0 so root=arr[0]=1, right child=arr[1]=3.',
    },
    {
      input: 'listValues = []',
      output: '[]',
      explanation: 'Empty input produces an empty tree.',
    },
  ],
  hints: [
    'Pick the middle index with `Math.floor((lo + hi) / 2)` as the root to keep the tree balanced.',
    'Recursively apply the same process to the left half (`lo` to `mid-1`) for the left subtree, and the right half (`mid+1` to `hi`) for the right subtree.',
    'After building the tree, serialize it to BFS level-order array: use a queue, push null for missing children, then trim trailing nulls.',
  ],
  functionName: 'convertSortedListToBST',
  params: ['listValues'],
  starterCode: {
    javascript: `function convertSortedListToBST(listValues) {
  class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  function build(arr, lo, hi) {
    if (lo > hi) return null;
    const mid = Math.floor((lo + hi) / 2);
    const node = new TreeNode(arr[mid]);
    node.left = build(arr, lo, mid - 1);
    node.right = build(arr, mid + 1, hi);
    return node;
  }

  function toBfsArray(root) {
    if (!root) return [];
    const res = [];
    const q = [root];
    while (q.length > 0) {
      const node = q.shift();
      if (!node) { res.push(null); continue; }
      res.push(node.val);
      q.push(node.left ?? null);
      q.push(node.right ?? null);
    }
    while (res.length > 0 && res[res.length - 1] === null) res.pop();
    return res;
  }

  return toBfsArray(build(listValues, 0, listValues.length - 1));
}`,
    python: `def convertSortedListToBST(listValues):
    from collections import deque

    class TreeNode:
        def __init__(self, val=0, left=None, right=None):
            self.val = val
            self.left = left
            self.right = right

    def build(arr, lo, hi):
        if lo > hi:
            return None
        mid = (lo + hi) // 2
        node = TreeNode(arr[mid])
        node.left = build(arr, lo, mid - 1)
        node.right = build(arr, mid + 1, hi)
        return node

    def to_bfs_array(root):
        if not root:
            return []
        res = []
        q = deque([root])
        while q:
            node = q.popleft()
            if node is None:
                res.append(None)
                continue
            res.append(node.val)
            q.append(node.left)
            q.append(node.right)
        while res and res[-1] is None:
            res.pop()
        return res

    root = build(listValues, 0, len(listValues) - 1)
    return to_bfs_array(root)
`,
  },
  visibleTests: [
    { args: [[-10, -3, 0, 5, 9]], expected: [0, -10, 5, null, -3, null, 9] },
    { args: [[1, 3]], expected: [1, null, 3] },
    { args: [[]], expected: [] },
    { args: [[1]], expected: [1] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [2, 1, 3] },
    { args: [[0, 1, 2, 3, 4]], expected: [2, 0, 3, null, 1, null, 4] },
    { args: [[1, 2]], expected: [1, null, 2] },
  ],
};
