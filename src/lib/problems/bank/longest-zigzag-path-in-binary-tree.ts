import type { Problem } from '../types';

export const problem: Problem = {
  id: 'longest-zigzag-path-in-binary-tree',
  title: 'Longest ZigZag Path in a Binary Tree',
  difficulty: 'medium',
  tags: ['tree', 'dynamic-programming'],
  description: `You are given the \`root\` of a binary tree.

A ZigZag path for a binary tree is defined as follows:
- Choose **any** node in the binary tree and a direction (right or left).
- If the current direction is right, move to the right child of the current node; otherwise, move to the left child.
- Change the direction from right to left or from left to right.
- Repeat the second and third steps until you can't move in the tree.

Zigzag length is defined as the number of nodes visited - 1. (A single node has a length of 0).

Return *the longest **ZigZag** path contained in that tree*.

**Example 1:**
\`\`\`
Input: root = [1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]
Output: 3
\`\`\`

**Example 2:**
\`\`\`
Input: root = [1,1,1,null,1,null,null,1,1,null,1]
Output: 4
\`\`\``,
  examples: [
    { input: '[1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]', output: '3' },
    { input: '[1,1,1,null,1,null,null,1,1,null,1]', output: '4' },
    { input: '[1]', output: '0' },
  ],
  constraints: [
    'The number of nodes in the tree is in the range [1, 5 * 10^4].',
    '1 <= Node.val <= 100',
  ],
  hints: [
    'Use DFS with two parameters at each node: the current zigzag length if you came from the left, and from the right.',
    'At each node, extend if you alternate direction, or reset to 1 if you continue same direction.',
    'Track a global maximum across all DFS calls.',
  ],
  functionName: 'longestZigZag',
  params: ['root'],
  starterCode: {
    javascript: `function longestZigZag(root) {
  if (!root || root.length === 0) return 0;
  const n = root.length;
  const lc = new Array(n).fill(-1), rc = new Array(n).fill(-1);
  const queue = [0]; let j = 1, qi = 0;
  while (qi < queue.length && j < n) {
    const i = queue[qi++];
    if (j < n) { if (root[j] !== null) { lc[i] = j; queue.push(j); } j++; }
    if (j < n) { if (root[j] !== null) { rc[i] = j; queue.push(j); } j++; }
  }
  let ans = 0;
  const dfs = (i) => {
    if (i === -1) return [-1, -1];
    const [, lr] = dfs(lc[i]), [rl] = dfs(rc[i]);
    const goLeft = lc[i] === -1 ? 0 : 1 + lr;
    const goRight = rc[i] === -1 ? 0 : 1 + rl;
    ans = Math.max(ans, goLeft, goRight);
    return [goLeft, goRight];
  };
  dfs(0);
  return ans;
}`,
    typescript: `function longestZigZag(root: (number | null)[]): number {
  if (!root || root.length === 0) return 0;
  const n = root.length;
  const lc = new Array(n).fill(-1), rc = new Array(n).fill(-1);
  const queue = [0]; let j = 1, qi = 0;
  while (qi < queue.length && j < n) {
    const i = queue[qi++];
    if (j < n) { if (root[j] !== null) { lc[i] = j; queue.push(j); } j++; }
    if (j < n) { if (root[j] !== null) { rc[i] = j; queue.push(j); } j++; }
  }
  let ans = 0;
  const dfs = (i: number): [number, number] => {
    if (i === -1) return [-1, -1];
    const [, lr] = dfs(lc[i]), [rl] = dfs(rc[i]);
    const goLeft = lc[i] === -1 ? 0 : 1 + lr;
    const goRight = rc[i] === -1 ? 0 : 1 + rl;
    ans = Math.max(ans, goLeft, goRight);
    return [goLeft, goRight];
  };
  dfs(0);
  return ans;
}`,
    python: `def longestZigZag(root):
    if not root: return 0
    n = len(root)
    lc = [-1]*n; rc = [-1]*n
    queue = [0]; j = 1; qi = 0
    while qi < len(queue) and j < n:
        i = queue[qi]; qi += 1
        if j < n:
            if root[j] is not None: lc[i] = j; queue.append(j)
            j += 1
        if j < n:
            if root[j] is not None: rc[i] = j; queue.append(j)
            j += 1
    ans = [0]
    def dfs(i):
        if i == -1: return -1, -1
        _, lr = dfs(lc[i]); rl, _ = dfs(rc[i])
        go_left = 0 if lc[i] == -1 else 1 + lr
        go_right = 0 if rc[i] == -1 else 1 + rl
        ans[0] = max(ans[0], go_left, go_right)
        return go_left, go_right
    dfs(0)
    return ans[0]`,
  },
  visibleTests: [
    { args: [[1,null,1,1,1,null,null,1,1,null,1,null,null,null,1]], expected: 3 },
    { args: [[1,1,1,null,1,null,null,1,1,null,1]], expected: 4 },
    { args: [[1]], expected: 0 },
  ],
  hiddenTests: [
    { args: [[1,null,1,1]], expected: 2 },
    { args: [[1,1,null,null,1]], expected: 2 },
  ],
};
