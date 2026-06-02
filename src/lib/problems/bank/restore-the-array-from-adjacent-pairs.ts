import type { Problem } from '../types';

export const problem: Problem = {
  id: 'restore-the-array-from-adjacent-pairs',
  title: 'Restore the Array From Adjacent Pairs',
  difficulty: 'medium',
  tags: ['arrays', 'hash-map'],
  description: `There is an integer array \`nums\` that consists of **unique elements**. You are given a 2D integer array \`adjacentPairs\` where \`adjacentPairs[i] = [ui, vi]\` means that \`ui\` and \`vi\` are adjacent in \`nums\`.

Return the **original array** \`nums\`. There is always exactly one valid answer.

**Approach:** Build an adjacency list. The two endpoints of the array each appear in exactly one pair. Start from either endpoint and reconstruct the sequence by traversing each node's neighbors while avoiding backtracking.`,
  constraints: [
    'nums.length == n',
    'adjacentPairs.length == n - 1',
    '2 <= n <= 10^5',
    '-10^5 <= nums[i], adjacentPairs[i][j] <= 10^5',
    'All values in nums are unique',
  ],
  examples: [
    {
      input: 'adjacentPairs = [[2,1],[3,4],[3,2]]',
      output: '[1,2,3,4]',
      explanation: 'Array [1,2,3,4] has adjacent pairs (1,2),(2,3),(3,4).',
    },
    {
      input: 'adjacentPairs = [[4,-2],[1,4],[-3,1]]',
      output: '[-2,4,1,-3]',
      explanation: 'Array [-2,4,1,-3] has adjacent pairs (4,-2),(4,1),(1,-3).',
    },
    {
      input: 'adjacentPairs = [[100000,-100000]]',
      output: '[100000,-100000]',
    },
  ],
  hints: [
    'Build an adjacency map: each value maps to its list of neighbors. A value with exactly 1 neighbor is an endpoint of the array.',
    'Start from any endpoint. Traverse by always moving to the neighbor that isn\'t the previous node.',
    '```js\nconst adj = new Map();\nfor (const [a,b] of adjacentPairs) {\n  if (!adj.has(a)) adj.set(a,[]);\n  if (!adj.has(b)) adj.set(b,[]);\n  adj.get(a).push(b); adj.get(b).push(a);\n}\nlet start;\nfor (const [k,v] of adj) if (v.length === 1) { start = k; break; }\nconst n = adjacentPairs.length + 1, res = [start];\nfor (let i = 1; i < n; i++) {\n  const nbrs = adj.get(res[i-1]);\n  res.push(nbrs[0] === res[i-2] ? nbrs[1] : nbrs[0]);\n}\nreturn res;\n```',
  ],
  functionName: 'restoreArray',
  params: ['adjacentPairs'],
  starterCode: {
    javascript: `function restoreArray(adjacentPairs) {
  const adj = new Map();
  for (const [a, b] of adjacentPairs) {
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a).push(b);
    adj.get(b).push(a);
  }
  let start;
  for (const [k, v] of adj) if (v.length === 1) { start = k; break; }
  const n = adjacentPairs.length + 1, res = [start];
  for (let i = 1; i < n; i++) {
    const nbrs = adj.get(res[i - 1]);
    res.push(nbrs[0] === res[i - 2] ? nbrs[1] : nbrs[0]);
  }
  return res;
}`,
    typescript: `function restoreArray(adjacentPairs: number[][]): number[] {
  const adj = new Map<number, number[]>();
  for (const pair of adjacentPairs) {
    const a = pair[0]!, b = pair[1]!;
    if (!adj.has(a)) adj.set(a, []);
    if (!adj.has(b)) adj.set(b, []);
    adj.get(a)!.push(b);
    adj.get(b)!.push(a);
  }
  let start = 0;
  for (const [k, v] of adj) if (v.length === 1) { start = k; break; }
  const n = adjacentPairs.length + 1, res = [start];
  for (let i = 1; i < n; i++) {
    const nbrs = adj.get(res[i - 1]!)!;
    res.push(nbrs[0] === res[i - 2] ? nbrs[1]! : nbrs[0]!);
  }
  return res;
}`,

    python: `def restoreArray(adjacentPairs: list) -> list:
    from collections import defaultdict
    adj = defaultdict(list)
    for a, b in adjacentPairs:
        adj[a].append(b)
        adj[b].append(a)
    start = next(k for k, v in adj.items() if len(v) == 1)
    n = len(adjacentPairs) + 1
    res = [start]
    for i in range(1, n):
        nbrs = adj[res[i - 1]]
        res.append(nbrs[1] if nbrs[0] == (res[i - 2] if i >= 2 else None) else nbrs[0])
    return res
`,
  },
  visibleTests: [
    { args: [[[2,1],[3,4],[3,2]]], expected: [1,2,3,4] },
    { args: [[[4,-2],[1,4],[-3,1]]], expected: [-2,4,1,-3] },
    { args: [[[100000,-100000]]], expected: [100000,-100000] },
  ],
  hiddenTests: [
    { args: [[[1,2],[2,3]]], expected: [1,2,3] },
    { args: [[[5,3],[3,1]]], expected: [5,3,1] },
    { args: [[[0,1],[2,0],[3,2]]], expected: [1,0,2,3] },
    { args: [[[1,2],[3,4],[2,3],[4,5]]], expected: [1,2,3,4,5] },
  ],
};
