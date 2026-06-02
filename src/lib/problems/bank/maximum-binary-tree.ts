import type { Problem } from '../types';

const JS_PREAMBLE = `
function maximumBinaryTreeRunner(nums) {
  function build(arr) {
    if (!arr.length) return null;
    const maxI = arr.indexOf(Math.max(...arr));
    const node = { val: arr[maxI], left: null, right: null };
    node.left = build(arr.slice(0, maxI));
    node.right = build(arr.slice(maxI + 1));
    return node;
  }
  function toArray(node) {
    if (!node) return [];
    const res = [];
    const q = [node];
    while (q.length) {
      const n = q.shift();
      if (n) { res.push(n.val); q.push(n.left || null); q.push(n.right || null); }
      else res.push(null);
    }
    while (res.length && res[res.length-1] === null) res.pop();
    return res;
  }
  const constructed = constructMaximumBinaryTree(nums.map ? [...nums] : [...nums]);
  return toArray(constructed);
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right
def maximumBinaryTreeRunner(nums):
    nums = list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums)
    root = constructMaximumBinaryTree(nums)
    result = []
    q = [root]
    while q:
        node = q.pop(0)
        if node:
            result.append(node.val)
            q.append(node.left)
            q.append(node.right)
        else:
            result.append(None)
    while result and result[-1] is None:
        result.pop()
    return result
`.trim();

export const problem: Problem = {
  id: 'maximum-binary-tree',
  title: 'Maximum Binary Tree',
  difficulty: 'medium',
  tags: ['tree'],
  description: `You are given an integer array \`nums\` with no duplicates. A **maximum binary tree** can be built recursively from \`nums\` using the following algorithm:

1. Create a root node whose value is the maximum value in \`nums\`.
2. Recursively build the left subtree on the **subarray prefix** to the left of the maximum value.
3. Recursively build the right subtree on the **subarray suffix** to the right of the maximum value.

Return the **maximum binary tree** built from \`nums\`. Return the tree as a level-order BFS array (null for missing nodes).`,
  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 1000',
    'All integers in nums are unique',
  ],
  examples: [
    {
      input: 'nums = [3,2,1,6,0,5]',
      output: '[6,3,5,null,2,0,null,null,1]',
      explanation: 'Max=6 is root. Left subtree from [3,2,1]: root=3, right=[2,1] where root=2,right=1. Right subtree from [0,5]: root=5, left=[0].',
    },
    { input: 'nums = [3,2,1]', output: '[3,null,2,null,1]' },
  ],
  hints: [
    'Recursively find the index of the maximum element. That element is the root.',
    'Split the array around the max: left subarray builds the left subtree, right builds the right subtree.',
    'Base case: empty array returns null.',
  ],
  functionName: 'maximumBinaryTreeRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// maximumBinaryTreeRunner is pre-defined and converts your TreeNode to an array.
function constructMaximumBinaryTree(nums) {
  if (!nums.length) return null;
  const maxI = nums.indexOf(Math.max(...nums));
  return { val: nums[maxI], left: constructMaximumBinaryTree(nums.slice(0, maxI)), right: constructMaximumBinaryTree(nums.slice(maxI + 1)) };
}`,
    typescript: `// maximumBinaryTreeRunner is pre-defined and converts your TreeNode to an array.
function constructMaximumBinaryTree(nums: number[]): { val: number, left: unknown, right: unknown } | null {
  if (!nums.length) return null;
  const maxI = nums.indexOf(Math.max(...nums));
  return { val: nums[maxI]!, left: constructMaximumBinaryTree(nums.slice(0, maxI)), right: constructMaximumBinaryTree(nums.slice(maxI + 1)) };
}`,
    python: `# maximumBinaryTreeRunner is pre-defined. TreeNode is available.
def constructMaximumBinaryTree(nums):
    if not nums: return None
    max_i = nums.index(max(nums))
    node = TreeNode(nums[max_i])
    node.left = constructMaximumBinaryTree(nums[:max_i])
    node.right = constructMaximumBinaryTree(nums[max_i+1:])
    return node`,
  },
  visibleTests: [
    { args: [[3, 2, 1, 6, 0, 5]], expected: [6, 3, 5, null, 2, 0, null, null, 1] },
    { args: [[3, 2, 1]], expected: [3, null, 2, null, 1] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 3, 2]], expected: [3, 1, 2] },
    { args: [[5, 3, 7, 1, 4]], expected: [7, 5, 4, null, 3, 1] },
  ],
};
