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
function countPairsRunner(arr, distance) {
  return countPairs(__fromArray__(arr), distance);
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
    a = [int(v) if isinstance(v, (int, float)) else None for v in raw_list]
    if not a or a[0] is None:
        return None
    root = TreeNode(a[0])
    queue = [root]
    i = 1
    while queue and i < len(a):
        node = queue.pop(0)
        if i < len(a) and a[i] is not None:
            node.left = TreeNode(a[i])
            queue.append(node.left)
        i += 1
        if i < len(a) and a[i] is not None:
            node.right = TreeNode(a[i])
            queue.append(node.right)
        i += 1
    return root

def countPairsRunner(arr, distance):
    return countPairs(__from_array__(arr), int(distance))
`.trim();

export const problem: Problem = {
  id: 'number-of-good-leaf-nodes-pairs',
  title: 'Number of Good Leaf Nodes Pairs',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given the \`root\` of a binary tree and an integer \`distance\`. A pair of two different **leaf** nodes of a binary tree is said to be **good** if the length of **the shortest path** between them is less than or equal to \`distance\`.

Return the number of **good leaf node pairs** in the tree.

Trees are represented as level-order arrays where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`countPairsRunner\` wrapper are pre-defined. Implement \`countPairs(root, distance)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 2^10].',
    '1 <= Node.val <= 100',
    '1 <= distance <= 10',
  ],
  examples: [
    {
      input: 'root = [1,2,3,null,4], distance = 3',
      output: '1',
      explanation: 'The leaf nodes are 4 and 3. The distance between them is 3 (4→2→1→3). This pair is good because 3 ≤ 3.',
    },
    {
      input: 'root = [1,2,3,4,5,6,7], distance = 3',
      output: '2',
      explanation: 'Good pairs: (4,5) with distance 2, and (6,7) with distance 2. Pairs (4,6),(4,7),(5,6),(5,7) all have distance > 3.',
    },
  ],
  hints: [
    'Level 1: Use a post-order DFS. At each node, combine the leaf-distance lists from left and right subtrees.',
    'Level 2: For a leaf node, return [1] (distance 1 to itself from its parent). For an internal node with left list L and right list R, count pairs (l, r) where l + r <= distance. Return all distances in L and R incremented by 1.',
    'Level 3: To prune, filter out distances > distance before returning them — they can never form a valid pair. This bounds the list size to at most O(distance) entries.',
  ],
  functionName: 'countPairsRunner',
  params: ['root', 'distance'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and countPairsRunner wrapper are pre-defined.
// Implement the function below:
function countPairs(root, distance) {

}`,
    typescript: `function countPairsRunner(root: (number | null)[], distance: number): number {

}`,
    python: `# TreeNode class and countPairsRunner wrapper are pre-defined.
# Implement the function below:
def countPairs(root, distance):
    pass`,
  },
  visibleTests: [
    { args: [[1,2,3,null,4], 3], expected: 1 },
    { args: [[1,2,3,4,5,6,7], 3], expected: 2 },
  ],
  hiddenTests: [
    { args: [[1,2,3], 2], expected: 1 },
    { args: [[1,2,3], 1], expected: 0 },
    { args: [[1,null,2,null,3,null,4], 3], expected: 0 },
    { args: [[1,2,null,3,4,null,null], 4], expected: 1 },
    { args: [[1,2,3,4,5,6,7], 5], expected: 6 },
    { args: [[1,2,3,null,null,4,5,null,null,null,null,6,7], 3], expected: 3 },
  ],
};
