import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-the-duplicate-subtrees',
  title: 'Find Duplicate Subtrees',
  difficulty: 'medium',
  tags: ['tree', 'hash-map'],
  description: `Given the \`root\` of a binary tree, return all **duplicate subtrees**.

For each kind of duplicate subtrees, you only need to return the root node of any **one** of them.

Two trees are **duplicate** if they have the **same structure** with the **same node values**.

**Example 1:**
\`\`\`
Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]
\`\`\`

**Example 2:**
\`\`\`
Input: root = [2,1,1]
Output: [[1]]
\`\`\`

**Example 3:**
\`\`\`
Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]
\`\`\``,
  examples: [
    { input: '[1,2,3,4,null,2,4,null,null,4]', output: '[[2,4],[4]]' },
    { input: '[2,1,1]', output: '[[1]]' },
    { input: '[2,2,2,3,null,3,null]', output: '[[2,3],[3]]' },
  ],
  constraints: [
    'The number of the nodes in the tree will be in the range [1, 5000].',
    '-200 <= Node.val <= 200',
  ],
  hints: [
    'Serialize each subtree as a string using DFS post-order: "left#right#val".',
    'Use a hash map from serialization to count. If count hits 2, add the node to results (only once).',
    'Return the root node values as BFS arrays for comparison.',
  ],
  functionName: 'findDuplicateSubtrees',
  params: ['root'],
  starterCode: {
    javascript: `function findDuplicateSubtrees(root) {
  if (!root.length || root[0] === null) return [];
  const build = arr => {
    const r = { v: arr[0], l: null, r: null }; const q = [r]; let i = 1;
    while (q.length && i < arr.length) {
      const nd = q.shift();
      if (i < arr.length && arr[i] !== null) { nd.l = { v: arr[i], l: null, r: null }; q.push(nd.l); } i++;
      if (i < arr.length && arr[i] !== null) { nd.r = { v: arr[i], l: null, r: null }; q.push(nd.r); } i++;
    }
    return r;
  };
  const toBFS = node => {
    const res = [], q = [node];
    while (q.length) { const n = q.shift(); if (!n) { res.push(null); continue; } res.push(n.v); q.push(n.l); q.push(n.r); }
    while (res.length && res[res.length - 1] === null) res.pop();
    return res;
  };
  const seen = new Map(), result = [];
  const ser = n => { if (!n) return '#'; const s = n.v + ',' + ser(n.l) + ',' + ser(n.r); const c = (seen.get(s) ?? 0) + 1; seen.set(s, c); if (c === 2) result.push(n); return s; };
  ser(build(root));
  return result.map(toBFS).sort((a, b) => a[0] - b[0]);
}`,
    typescript: `function findDuplicateSubtrees(root: (number | null)[]): number[][] {
  if (!root.length || root[0] === null) return [];
  type N = { v: number; l: N | null; r: N | null };
  const build = (arr: (number | null)[]): N => {
    const r: N = { v: arr[0]!, l: null, r: null }; const q: N[] = [r]; let i = 1;
    while (q.length && i < arr.length) {
      const nd = q.shift()!;
      if (i < arr.length && arr[i] !== null) { nd.l = { v: arr[i]!, l: null, r: null }; q.push(nd.l); } i++;
      if (i < arr.length && arr[i] !== null) { nd.r = { v: arr[i]!, l: null, r: null }; q.push(nd.r); } i++;
    }
    return r;
  };
  const toBFS = (node: N): number[] => {
    const res: (number | null)[] = [], q: (N | null)[] = [node];
    while (q.length) { const n = q.shift()!; if (!n) { res.push(null); continue; } res.push(n.v); q.push(n.l); q.push(n.r); }
    while (res.length && res[res.length - 1] === null) res.pop();
    return res as number[];
  };
  const seen = new Map<string, number>(), result: N[] = [];
  const ser = (n: N | null): string => { if (!n) return '#'; const s = n.v + ',' + ser(n.l) + ',' + ser(n.r); const c = (seen.get(s) ?? 0) + 1; seen.set(s, c); if (c === 2) result.push(n); return s; };
  ser(build(root));
  return result.map(toBFS).sort((a, b) => a[0]! - b[0]!);
}`,
    python: `def findDuplicateSubtrees(root):
    from collections import deque, defaultdict
    if not root or root[0] is None: return []
    def build(arr):
        r = [arr[0], None, None]; q = deque([r]); i = 1
        while q and i < len(arr):
            nd = q.popleft()
            if i < len(arr) and arr[i] is not None: nd[1] = [arr[i], None, None]; q.append(nd[1])
            i += 1
            if i < len(arr) and arr[i] is not None: nd[2] = [arr[i], None, None]; q.append(nd[2])
            i += 1
        return r
    def to_bfs(node):
        res, q = [], deque([node])
        while q:
            n = q.popleft()
            if n is None: res.append(None)
            else: res.append(n[0]); q.append(n[1]); q.append(n[2])
        while res and res[-1] is None: res.pop()
        return res
    seen, result = defaultdict(int), []
    def ser(n):
        if n is None: return '#'
        s = str(n[0]) + ',' + ser(n[1]) + ',' + ser(n[2])
        seen[s] += 1
        if seen[s] == 2: result.append(to_bfs(n))
        return s
    ser(build(root))
    return sorted(result, key=lambda x: x[0] if x else 0)`,
  },
  visibleTests: [
    { args: [[1,2,3,4,null,2,4,null,null,4]], expected: [[2,4],[4]] },
    { args: [[2,1,1]], expected: [[1]] },
    { args: [[2,2,2,3,null,3,null]], expected: [[2,3],[3]] },
  ],
  hiddenTests: [
    { args: [[1]], expected: [] },
    { args: [[0,0,0,0,null,null,0,null,null,null,0]], expected: [[0]] },
  ],
};
