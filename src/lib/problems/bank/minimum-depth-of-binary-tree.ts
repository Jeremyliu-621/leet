import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-depth-of-binary-tree',
  title: 'Minimum Depth of Binary Tree',
  difficulty: 'easy',
  tags: ['tree'],
  description: `Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

The tree is given as an array in level-order format where \`null\` represents a missing node.`,
  constraints: [
    'The number of nodes in the tree is in the range [0, 10^5].',
    '-1000 <= Node.val <= 1000',
  ],
  examples: [
    {
      input: 'root = [3,9,20,null,null,15,7]',
      output: '2',
      explanation: 'The shortest path is root→9 (depth 2).',
    },
    {
      input: 'root = [2,null,3,null,4,null,5,null,6]',
      output: '5',
      explanation: 'The tree is a right-only chain; the only leaf is 6 at depth 5.',
    },
  ],
  hints: [
    'Use BFS — the first leaf node found is at the minimum depth.',
    'For DFS: if a node has only one child, the minimum depth from that node is 1 + minDepth of the non-null child (not the null child).',
    'Empty tree has depth 0; single node has depth 1.',
  ],
  functionName: 'minDepth',
  params: ['root'],
  starterCode: {
    javascript: `function minDepth(root) {
  if (!root || root.length === 0 || root[0] == null) return 0;
  const children = new Map();
  const bfsQ = [0]; let qi = 0, ai = 1;
  while (qi < bfsQ.length) {
    const cur = bfsQ[qi++];
    if (root[cur] == null) continue;
    const l = ai++, r = ai++;
    if (l < root.length) {
      children.set(cur, [l, r]);
      if (root[l] != null) bfsQ.push(l);
      if (r < root.length && root[r] != null) bfsQ.push(r);
    }
  }
  const q = [[0, 1]]; qi = 0;
  while (qi < q.length) {
    const [idx, depth] = q[qi++];
    const cp = children.get(idx);
    if (!cp) return depth;
    const [l, r] = cp;
    const hasL = l < root.length && root[l] != null;
    const hasR = r < root.length && root[r] != null;
    if (!hasL && !hasR) return depth;
    if (hasL) q.push([l, depth + 1]);
    if (hasR) q.push([r, depth + 1]);
  }
  return 1;
}`,
    typescript: `function minDepth(root: (number | null)[]): number {
  if (root.length === 0 || root[0] == null) return 0;
  const children = new Map<number, [number, number]>();
  const bfsQ: number[] = [0]; let qi = 0, ai = 1;
  while (qi < bfsQ.length) {
    const cur = bfsQ[qi++]!;
    if (root[cur] == null) continue;
    const l = ai++, r = ai++;
    if (l < root.length) {
      children.set(cur, [l, r]);
      if (root[l] != null) bfsQ.push(l);
      if (r < root.length && root[r] != null) bfsQ.push(r);
    }
  }
  const q: [number, number][] = [[0, 1]]; qi = 0;
  while (qi < q.length) {
    const [idx, depth] = q[qi++]!;
    const cp = children.get(idx);
    if (!cp) return depth;
    const [l, r] = cp;
    const hasL = l < root.length && root[l] != null;
    const hasR = r < root.length && root[r] != null;
    if (!hasL && !hasR) return depth;
    if (hasL) q.push([l, depth + 1]);
    if (hasR) q.push([r, depth + 1]);
  }
  return 1;
}`,
    python: `def minDepth(root):
    if hasattr(root, 'to_py'): root = list(root.to_py())
    if not root or root[0] is None: return 0
    children = {}; bfs_q = [0]; qi = 0; ai = 1
    while qi < len(bfs_q):
        cur = bfs_q[qi]; qi += 1
        if root[cur] is None: continue
        l = ai; ai += 1; r = ai; ai += 1
        if l < len(root):
            children[cur] = (l, r)
            if root[l] is not None: bfs_q.append(l)
            if r < len(root) and root[r] is not None: bfs_q.append(r)
    q = [(0, 1)]; qi = 0
    while qi < len(q):
        idx, depth = q[qi]; qi += 1
        cp = children.get(idx)
        if cp is None: return depth
        l, r = cp
        has_l = l < len(root) and root[l] is not None
        has_r = r < len(root) and root[r] is not None
        if not has_l and not has_r: return depth
        if has_l: q.append((l, depth + 1))
        if has_r: q.append((r, depth + 1))
    return 1`,
  },
  visibleTests: [
    { args: [[3, 9, 20, null, null, 15, 7]], expected: 2 },
    { args: [[2, null, 3, null, 4, null, 5, null, 6]], expected: 5 },
  ],
  hiddenTests: [
    { args: [[]], expected: 0 },
    { args: [[1]], expected: 1 },
    { args: [[1, 2]], expected: 2 },
    { args: [[1, 2, 3]], expected: 2 },
    { args: [[1, 2, null, 3]], expected: 3 },
    { args: [[1, null, 2, null, 3]], expected: 3 },
  ],
};
