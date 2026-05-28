import type { Problem } from '../types';

const JS_PREAMBLE = `
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val; this.left = left; this.right = right;
  }
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
function sortedArrayToBSTRunner(nums) { return __toArray__(sortedArrayToBST(nums)); }
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

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

def sortedArrayToBSTRunner(nums):
    nums_list = nums.to_py() if hasattr(nums, 'to_py') else list(nums)
    return __to_array__(sortedArrayToBST(nums_list))
`.trim();

export const problem: Problem = {
  id: 'sorted-array-to-bst',
  title: 'Convert Sorted Array to Binary Search Tree',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description: `Given an integer array \`nums\` where the elements are sorted in **ascending order**, convert it to a **height-balanced** binary search tree.

A **height-balanced** binary tree has subtrees whose depths differ by at most one at every node.

Trees are represented as level-order (BFS) arrays where \`null\` marks a missing child.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    'nums is sorted in strictly increasing order.',
  ],
  examples: [
    {
      input: 'nums = [-10,-3,0,5,9]',
      output: '[0,-3,9,-10,null,5]',
      explanation: 'Pick the right-biased middle element 0 as root. Recurse on [-10,-3] and [5,9].',
    },
    {
      input: 'nums = [1,3]',
      output: '[3,1]',
      explanation: 'With 2 elements, pick the right element as root; [1] becomes the left child.',
    },
    {
      input: 'nums = [1,2,3,4,5,6,7]',
      output: '[4,2,6,1,3,5,7]',
      explanation: 'Middle element 4 is root; 2 and 6 are subtree roots.',
    },
  ],
  hints: [
    'Recursively pick the middle element of the current subarray as the root. This keeps the tree height-balanced.',
    'Use `mid = lo + Math.ceil((hi - lo) / 2)` (right-biased) so even-length subarrays pick the right-of-center element.',
    '`function build(lo, hi) { if (lo > hi) return null; const mid = lo + Math.ceil((hi - lo) / 2); return new TreeNode(nums[mid], build(lo, mid-1), build(mid+1, hi)); } return build(0, nums.length-1);`',
  ],
  functionName: 'sortedArrayToBSTRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript:
      '// TreeNode class and sortedArrayToBSTRunner wrapper are pre-defined.\n// Implement the function below:\nfunction sortedArrayToBST(nums) {\n  \n}\n',
    typescript: "function sortedArrayToBSTRunner(nums: number[]): (number | null)[] {\n  \n}",

    python:
      '# TreeNode class and sortedArrayToBSTRunner wrapper are pre-defined.\n# Implement the function below:\ndef sortedArrayToBST(nums):\n    pass\n',
  },
  visibleTests: [
    { args: [[-10, -3, 0, 5, 9]], expected: [0, -3, 9, -10, null, 5] },
    { args: [[1, 3]], expected: [3, 1] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [4, 2, 6, 1, 3, 5, 7] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[-1, 0, 1]], expected: [0, -1, 1] },
    { args: [[1, 2, 3]], expected: [2, 1, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [3, 2, 5, 1, null, 4] },
    { args: [[-5, -2, 0, 3, 7, 10]], expected: [3, -2, 10, -5, 0, 7] },
  ],
};
