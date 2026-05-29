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
function averageOfLevelsRunner(arr) {
  return averageOfLevels(__fromArray__(arr));
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

def averageOfLevelsRunner(arr):
    return averageOfLevels(__from_array__(arr))
`.trim();

export const problem: Problem = {
  id: 'average-of-levels-in-binary-tree',
  title: 'Average of Levels in Binary Tree',
  difficulty: 'easy',
  tags: ['tree', 'binary-search'],
  description: `Given the \`root\` of a binary tree, return the **average value** of the nodes on each level in the form of an array.

Answers within \`10^-5\` of the actual answer will be accepted.

Trees are represented as level-order arrays where \`null\` indicates a missing child.

> **Note:** \`TreeNode\` class and \`averageOfLevelsRunner\` wrapper are pre-defined. Implement \`averageOfLevels(root)\`.`,
  constraints: [
    'The number of nodes in the tree is in the range [1, 10^4].',
    '-2^31 <= Node.val <= 2^31 - 1',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '[3.00000,14.50000,11.00000]',
      explanation: 'Level 0: [3] = 3. Level 1: [9,20] avg = 14.5. Level 2: [15,7] avg = 11.',
    },
    {
      input: 'root = [3,9,20,15,7]',
      output: '[3.00000,14.50000,11.00000]',
      explanation: 'Same tree, same averages.',
    },
  ],
  hints: [
    'Use BFS (level-order traversal). For each level, collect all node values and compute their average.',
    'Use a queue. Process all nodes at the current level before moving to the next. Track level boundaries using the queue size at the start of each iteration.',
    'Each level\'s average = sum of values / count of nodes at that level.',
  ],
  functionName: 'averageOfLevelsRunner',
  params: ['root'],
  preamble: { javascript: JS_PREAMBLE, python: PY_PREAMBLE },
  starterCode: {
    javascript: '// TreeNode class and averageOfLevelsRunner wrapper are pre-defined.\n// Implement the function below:\nfunction averageOfLevels(root) {\n  \n}\n',
    typescript: 'function averageOfLevelsRunner(root: (number | null)[]): number[] {\n  \n}',
    python: '# TreeNode class and averageOfLevelsRunner wrapper are pre-defined.\n# Implement the function below:\ndef averageOfLevels(root):\n    pass\n',
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: [3, 14.5, 11] },
    { args: [[3, 9, 20, 15, 7]], expected: [3, 14.5, 11] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [1] },
    { args: [[1, 2, 3]], expected: [1, 2.5] },
    { args: [[1, 2, 3, 4, 5, 6, 7]], expected: [1, 2.5, 5.5] },
    { args: [[10, 5, 15, null, null, 6, 20]], expected: [10, 10, 13] },
    { args: [[5, 10, 2, null, 3, null, 4]], expected: [5, 6, 3.5] },
    { args: [[1, 2]], expected: [1, 2] },
    { args: [[0, -1, 1]], expected: [0, 0] },
  ],
};
