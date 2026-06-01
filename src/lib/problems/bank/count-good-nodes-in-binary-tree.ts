import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-good-nodes-in-binary-tree',
  title: 'Count Good Nodes in Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `Given a binary tree \`root\`, a node \`X\` in the tree is named **good** if in the path from root to \`X\` there are no nodes with a value **greater than** X's value.

Return *the number of good nodes in the binary tree.*

The tree is given as an array in level-order (BFS) format, where \`null\` represents a missing node. For example, \`[3,1,4,3,null,1,5]\` represents:
\`\`\`
    3
   / \\
  1   4
 /   / \\
3   1   5
\`\`\``,
  constraints: [
    'The number of nodes in the binary tree is in the range [1, 10^5].',
    '-10^4 <= Node.val <= 10^4',
  ],
  examples: [
    {
      input: 'root = [3,1,4,3,null,1,5]',
      output: '4',
      explanation: 'Good nodes: 3 (root), 4 (max on path is 3), 3 (max on path is 3), 5 (max on path is 4). Node with value 1 (left child) has 3 on its path — not good. Node with value 1 (under 4) has 4 on its path — not good.',
    },
    {
      input: 'root = [3,3,null,4,2]',
      output: '3',
      explanation: 'Nodes 3 (root), 3 (left child), and 4 are good. Node 2 has 3 and 3 on its path, so not good.',
    },
    {
      input: 'root = [1]',
      output: '1',
    },
  ],
  hints: [
    'Use DFS and track the maximum value seen so far on the path from root to current node.',
    'A node is good if its value >= the maximum value seen so far.',
    'Pass maxSoFar down to children, updating it to max(maxSoFar, node.val).',
  ],
  functionName: 'goodNodes',
  params: ['root'],
  starterCode: {
    javascript: `function goodNodes(root) {
  if (!root || root.length === 0 || root[0] == null) return 0;
  const nodes = root.map(v => v != null ? { val: v, left: null, right: null } : null);
  const queue = [nodes[0]]; let qi = 0, i = 1;
  while (i < nodes.length) {
    const node = queue[qi++];
    if (!node) { i += 2; continue; }
    node.left = nodes[i] ?? null; if (nodes[i]) queue.push(nodes[i]); i++;
    node.right = nodes[i] ?? null; if (nodes[i]) queue.push(nodes[i]); i++;
  }
  let count = 0;
  function dfs(node, maxVal) {
    if (!node) return;
    if (node.val >= maxVal) count++;
    const m = Math.max(maxVal, node.val);
    dfs(node.left, m); dfs(node.right, m);
  }
  dfs(nodes[0], -Infinity);
  return count;
}`,
    typescript: `function goodNodes(root: (number | null)[]): number {
  if (!root || root.length === 0 || root[0] == null) return 0;
  type N = { val: number; left: N | null; right: N | null };
  const nodes: (N | null)[] = root.map(v => v != null ? { val: v, left: null, right: null } : null);
  const queue: (N | null)[] = [nodes[0]!]; let qi = 0, i = 1;
  while (i < nodes.length) {
    const node = queue[qi++]!;
    if (!node) { i += 2; continue; }
    node.left = nodes[i] ?? null; if (nodes[i]) queue.push(nodes[i]!); i++;
    node.right = nodes[i] ?? null; if (nodes[i]) queue.push(nodes[i]!); i++;
  }
  let count = 0;
  function dfs(node: N | null, maxVal: number): void {
    if (!node) return;
    if (node.val >= maxVal) count++;
    const m = Math.max(maxVal, node.val);
    dfs(node.left, m); dfs(node.right, m);
  }
  dfs(nodes[0]!, -Infinity);
  return count;
}`,
    python: `def goodNodes(root):
    from collections import deque
    if not root or root[0] is None:
        return 0
    nodes = [{'val': v, 'left': None, 'right': None} if v is not None else None for v in root]
    queue = deque([nodes[0]])
    i = 1
    while i < len(nodes) and queue:
        node = queue.popleft()
        if node is None:
            i += 2
            continue
        if i < len(nodes):
            node['left'] = nodes[i]; queue.append(nodes[i]); i += 1
        if i < len(nodes):
            node['right'] = nodes[i]; queue.append(nodes[i]); i += 1
    count = [0]
    def dfs(node, max_val):
        if node is None: return
        if node['val'] >= max_val: count[0] += 1
        m = max(max_val, node['val'])
        dfs(node['left'], m); dfs(node['right'], m)
    dfs(nodes[0], float('-inf'))
    return count[0]`,
  },
  visibleTests: [
    { args: [[3, 1, 4, 3, null, 1, 5]], expected: 4 },
    { args: [[3, 3, null, 4, 2]], expected: 3 },
    { args: [[1]], expected: 1 },
  ],
  hiddenTests: [
    { args: [[2, null, 4, 10, 8, null, null, 4]], expected: 4 },
    { args: [[1, 2]], expected: 2 },
    { args: [[5, 4, null, 3]], expected: 1 },
    { args: [[3, 1, 4, null, null, 1, 5]], expected: 3 },
    { args: [[-1, 5, -2, 4, null, null, -4]], expected: 2 },
  ],
};
