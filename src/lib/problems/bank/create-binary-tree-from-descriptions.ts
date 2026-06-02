import type { Problem } from '../types';

export const problem: Problem = {
  id: 'create-binary-tree-from-descriptions',
  title: 'Create Binary Tree From Descriptions',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `You are given a 2D integer array \`descriptions\` where \`descriptions[i] = [parent_i, child_i, isLeft_i]\` indicates that \`parent_i\` is the **parent** of \`child_i\` in a **binary tree** of **unique** values. Furthermore:
- If \`isLeft_i == 1\`, then \`child_i\` is the **left** child of \`parent_i\`.
- If \`isLeft_i == 0\`, then \`child_i\` is the **right** child of \`parent_i\`.

Construct the binary tree described by \`descriptions\` and return its **root**.

The test cases are guaranteed to produce a **valid** binary tree.`,
  constraints: [
    '1 <= descriptions.length <= 10^4',
    'descriptions[i].length == 3',
    '1 <= parent_i, child_i <= 10^5',
    '0 <= isLeft_i <= 1',
    'The binary tree described by descriptions is valid.',
  ],
  examples: [
    {
      input: 'descriptions = [[20,15,1],[20,17,0],[50,20,1],[50,80,0],[80,19,1]]',
      output: '[50,20,80,15,17,19]',
      explanation: 'Root is 50. 50\'s left=20, right=80. 20\'s left=15, right=17. 80\'s left=19.',
    },
    {
      input: 'descriptions = [[1,2,1],[2,3,0],[3,4,1]]',
      output: '[1,2,null,null,3,4]',
      explanation: 'Root is 1. 1\'s left=2. 2\'s right=3. 3\'s left=4.',
    },
  ],
  hints: [
    'Level 1: Build a map from value to node. For each description, create nodes for parent and child if they don\'t exist, then link them.',
    'Level 2: Track which values appear as children — the root is the only value that never appears as a child.',
    'Level 3: After processing all descriptions, find the root by eliminating all child values from the set of parent values.',
  ],
  functionName: 'createBinaryTree',
  params: ['descriptions'],
  starterCode: {
    javascript: `function createBinaryTree(descriptions) {
  const nodes = new Map();
  const children = new Set();
  const getNode = v => { if (!nodes.has(v)) nodes.set(v, { val: v, left: null, right: null }); return nodes.get(v); };
  for (const [p, c, isLeft] of descriptions) {
    const parent = getNode(p), child = getNode(c);
    if (isLeft) parent.left = child; else parent.right = child;
    children.add(c);
  }
  for (const [p] of descriptions) if (!children.has(p)) return nodes.get(p);
  return null;
}`,
    typescript: `interface TreeNode { val: number; left: TreeNode | null; right: TreeNode | null; }
function createBinaryTree(descriptions: number[][]): TreeNode | null {
  const nodes = new Map<number, TreeNode>();
  const children = new Set<number>();
  const getNode = (v: number): TreeNode => {
    if (!nodes.has(v)) nodes.set(v, { val: v, left: null, right: null });
    return nodes.get(v)!;
  };
  for (const desc of descriptions) {
    const p = desc[0]!, c = desc[1]!, isLeft = desc[2]!;
    const parent = getNode(p), child = getNode(c);
    if (isLeft) parent.left = child; else parent.right = child;
    children.add(c);
  }
  for (const desc of descriptions) {
    if (!children.has(desc[0]!)) return nodes.get(desc[0]!)!;
  }
  return null;
}`,
    python: `def createBinaryTree(descriptions):
    if hasattr(descriptions, 'to_py'): descriptions = descriptions.to_py()
    descriptions = [[int(x) for x in row] for row in descriptions]
    nodes = {}
    children = set()
    def get(v):
        if v not in nodes: nodes[v] = {'val': v, 'left': None, 'right': None}
        return nodes[v]
    for p, c, is_left in descriptions:
        parent, child = get(p), get(c)
        if is_left: parent['left'] = child
        else: parent['right'] = child
        children.add(c)
    for p, _, _ in descriptions:
        if p not in children:
            return nodes[p]
    return None`,
  },
  visibleTests: [
    {
      args: [[[20, 15, 1], [20, 17, 0], [50, 20, 1], [50, 80, 0], [80, 19, 1]]],
      expected: [50, 20, 80, 15, 17, 19],
    },
    {
      args: [[[1, 2, 1], [2, 3, 0], [3, 4, 1]]],
      expected: [1, 2, null, null, 3, 4],
    },
  ],
  hiddenTests: [
    {
      args: [[[1, 2, 1]]],
      expected: [1, 2],
    },
    {
      args: [[[5, 3, 1], [5, 7, 0]]],
      expected: [5, 3, 7],
    },
    {
      args: [[[10, 5, 1], [10, 15, 0], [5, 3, 1], [5, 7, 0]]],
      expected: [10, 5, 15, 3, 7],
    },
  ],
};
