import type { Problem } from '../types';

const JS_PREAMBLE = `
function serializeDeserializeBSTRunner(nums) {
  // Build BST from sorted array for deterministic trees
  function buildBST(sorted) {
    if (!sorted.length) return null;
    const mid = Math.floor(sorted.length / 2);
    const node = { val: sorted[mid], left: null, right: null };
    node.left = buildBST(sorted.slice(0, mid));
    node.right = buildBST(sorted.slice(mid + 1));
    return node;
  }
  function toSorted(node) {
    if (!node) return [];
    return [...toSorted(node.left), node.val, ...toSorted(node.right)];
  }
  const root = buildBST([...nums].sort((a,b)=>a-b));
  const serialized = serialize(root);
  const deserialized = deserialize(serialized);
  return toSorted(deserialized);
}
`.trim();

const PY_PREAMBLE = `
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val; self.left = left; self.right = right
def serializeDeserializeBSTRunner(nums):
    nums = sorted(list(nums.to_py()) if hasattr(nums, 'to_py') else list(nums))
    def build(arr):
        if not arr: return None
        mid = len(arr) // 2
        node = TreeNode(arr[mid])
        node.left = build(arr[:mid])
        node.right = build(arr[mid+1:])
        return node
    def to_sorted(node):
        if not node: return []
        return to_sorted(node.left) + [node.val] + to_sorted(node.right)
    root = build(nums)
    serialized = serialize(root)
    deserialized = deserialize(serialized)
    return to_sorted(deserialized)
`.trim();

export const problem: Problem = {
  id: 'serialize-deserialize-bst',
  title: 'Serialize and Deserialize BST',
  difficulty: 'medium',
  tags: ['tree', 'binary-search'],
  description: `Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer. Deserialization is the reverse.

Design an algorithm to serialize and deserialize a **binary search tree**. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a BST can be serialized to a string and this string can be deserialized to the original tree structure.

**The encoded string should be as compact as possible.**

> **Note:** A runner function builds a BST from your input, calls \`serialize(root)\` then \`deserialize(result)\`, and validates by extracting in-order values (which must be identical).`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^4]',
    '0 <= Node.val <= 10^4',
    'The input BST is guaranteed to be valid',
  ],
  examples: [
    { input: 'nums = [2,1,3]', output: '[1,2,3]', explanation: 'Build a BST, serialize it, deserialize it, in-order traversal returns sorted values.' },
  ],
  hints: [
    'For a BST, the pre-order traversal (root, left, right) is sufficient to reconstruct the tree — you do not need null markers.',
    'Serialize: pre-order traversal, join node values. Deserialize: use a min/max range to place each value in the correct subtree.',
    'Pre-order gives: first value = root. Remaining values can be split into left and right subtrees based on whether they are less than or greater than root.',
  ],
  functionName: 'serializeDeserializeBSTRunner',
  params: ['nums'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// serializeDeserializeBSTRunner validates your functions by comparing in-order traversals.\nfunction serialize(root) {\n  // return a string\n}\nfunction deserialize(data) {\n  // return a TreeNode\n}\n',
    python: '# serializeDeserializeBSTRunner validates by comparing in-order traversals.\n# TreeNode is available.\ndef serialize(root):\n    pass\ndef deserialize(data):\n    pass\n',
  },
  visibleTests: [
    { args: [[2, 1, 3]], expected: [1, 2, 3] },
    { args: [[5, 3, 8, 1, 4, 7, 9]], expected: [1, 3, 4, 5, 7, 8, 9] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[] as number[]], expected: [] },
    { args: [[10, 5, 15, 3, 7]], expected: [3, 5, 7, 10, 15] },
  ],
};
