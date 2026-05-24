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
function zigzagLevelOrderRunner(arr) {
  const result = zigzagLevelOrder(__fromArray__(arr));
  return result.map(level => Array.from(level));
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

def zigzagLevelOrderRunner(arr):
    result = zigzagLevelOrder(__from_array__(arr))
    return [list(level) for level in result]
`.trim();

export const problem: Problem = {
  id: 'binary-tree-zigzag-level-order',
  title: 'Binary Tree Zigzag Level Order Traversal',
  difficulty: 'medium',
  tags: ['tree'],
  description: `Given the \`root\` of a binary tree, return the **zigzag level order traversal** of its node values — i.e., left to right for level 0, right to left for level 1, left to right for level 2, alternating.

Each level's values should be in a separate list.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 2000]',
    '-100 <= Node.val <= 100',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[[3],[20,9],[15,7]]',
      explanation: 'Level 0 left→right: [3]. Level 1 right→left: [20,9]. Level 2 left→right: [15,7].',
    },
    {
      input: 'root = [1]',
      output: '[[1]]',
    },
    {
      input: 'root = []',
      output: '[]',
    },
  ],
  hints: [
    'BFS naturally gives you nodes level by level. You just need to alternate the direction you push values into each level\'s list.',
    'Use a deque (or reverse at the end): for odd levels, prepend (or reverse the collected values); for even levels, append.',
    'Track a boolean `leftToRight` that flips after each level. Collect the level\'s values in order, then reverse if needed.',
  ],
  functionName: 'zigzagLevelOrderRunner',
  params: ['arr'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: `// TreeNode class and zigzagLevelOrderRunner wrapper are pre-defined.
function zigzagLevelOrder(root) {
  // Return array of arrays (each inner array = one level, direction alternates)
}
`,
    python: `# TreeNode class and zigzagLevelOrderRunner wrapper are pre-defined.
def zigzagLevelOrder(root):
    # Return list of lists (each inner list = one level, direction alternates)
    pass
`,
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [[3], [20, 9], [15, 7]] },
    { args: [[1]], expected: [[1]] },
    { args: [[]], expected: [] },
  ],
  hiddenTests: [
    { args: [[1, 2, 3]], expected: [[1], [3, 2]] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [[1], [3, 2], [4, 5, 6, 7]] },
    { args: [[1, 2, null, 3, 4]], expected: [[1], [2], [3, 4]] },
    { args: [[1, 2, 3, 4, null, null, 5]], expected: [[1], [3, 2], [4, 5]] },
  ],
};
