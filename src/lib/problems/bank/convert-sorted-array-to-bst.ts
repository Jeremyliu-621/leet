import type { Problem } from '../types';

export const problem: Problem = {
  id: 'convert-sorted-array-to-bst',
  title: 'Convert Sorted Array to Binary Search Tree',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description: `Given an integer array \`nums\` where the elements are sorted in **ascending order**, convert it to a **height-balanced** binary search tree.

A **height-balanced** binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

Trees are represented as level-order arrays (BFS order), where \`null\` indicates a missing child.

**Approach:** Recursively pick the middle element (floor of midpoint) as the root. The left half becomes the left subtree, the right half becomes the right subtree.`,
  constraints: [
    '1 <= nums.length <= 10^4',
    '-10^4 <= nums[i] <= 10^4',
    'nums is sorted in strictly ascending order.',
  ],
  examples: [
    {
      input: 'nums = [-10,-3,0,5,9]',
      output: '[0,-10,5,null,-3,null,9]',
      explanation: 'The middle element 0 is the root; left half [-10,-3] and right half [5,9] recurse similarly.',
    },
    {
      input: 'nums = [1,3]',
      output: '[1,null,3]',
      explanation: 'With two elements, the left element becomes the root and the right becomes its right child.',
    },
  ],
  hints: [
    'Use the middle element (floor of midpoint) as the root to keep the tree balanced.',
    'Recursively apply to the left and right halves.',
    '```js\nfunction sortedArrayToBST(nums) {\n  function build(l, r) {\n    if (l > r) return null;\n    const mid = (l + r) >> 1;\n    return { val: nums[mid], left: build(l, mid - 1), right: build(mid + 1, r) };\n  }\n  return build(0, nums.length - 1);\n}\n```',
  ],
  functionName: 'sortedArrayToBST',
  params: ['nums'],
  starterCode: {
    javascript: `function sortedArrayToBST(nums) {
  // return root of height-balanced BST

}`,
    typescript: "function sortedArrayToBST(nums: number[]): (number | null)[] {\n  // return root of height-balanced BST\n\n}",

    python: `def sortedArrayToBST(nums: list):
    # return root of height-balanced BST
    pass
`,
  },
  visibleTests: [
    { args: [[-10, -3, 0, 5, 9]], expected: [0, -10, 5, null, -3, null, 9] },
    { args: [[1, 3]], expected: [1, null, 3] },
  ],
  hiddenTests: [
    { args: [[0]], expected: [0] },
    { args: [[1, 2, 3]], expected: [2, 1, 3] },
    { args: [[1, 2, 3, 4, 5]], expected: [3, 1, 4, null, 2, null, 5] },
    { args: [[-5, -2, 0, 1, 4, 7]], expected: [0, -5, 4, null, -2, 1, 7] },
    { args: [[1, 2]], expected: [1, null, 2] },
  ],
};
