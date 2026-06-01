import type { Problem } from '../types';

export const problem: Problem = {
  id: 'sort-items-by-groups-respecting-dependencies',
  title: 'Sort Items by Groups Respecting Dependencies',
  difficulty: 'hard',
  tags: ['graph', 'arrays'],
  description: `There are \`n\` items each belonging to zero or one of \`m\` groups, where \`group[i]\` is the group that the \`i\`-th item belongs to (\`-1\` if no group). The items and groups both have dependencies that must be respected when ordering them.

\`beforeItems[i]\` is a list of items that must come before item \`i\` (regardless of group).

Return any sorting of the \`n\` items such that:
- All dependency constraints are satisfied.
- Within any group, all items belonging to it appear consecutively.

If there is no valid ordering, return an **empty list**.`,
  constraints: [
    '1 <= m <= n <= 3 * 10^4',
    'group.length == beforeItems.length == n',
    '-1 <= group[i] <= m - 1',
    '0 <= beforeItems[i].length <= n - 1',
    '0 <= beforeItems[i][j] <= n - 1',
  ],
  examples: [
    {
      input: 'n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3,6],[],[],[]]',
      output: '[6,3,4,1,5,2,0,7]',
      explanation: 'One valid ordering. Items in group 0 (items 3,4,6) appear consecutively; items in group 1 (items 2,5) appear consecutively.',
    },
    {
      input: 'n = 8, m = 2, group = [-1,-1,1,0,0,1,0,-1], beforeItems = [[],[6],[5],[6],[3],[],[4],[]]',
      output: '[]',
      explanation: 'The constraints create a cycle: item 4 must come before item 6, but item 6 must come before item 4. Impossible.',
    },
  ],
  hints: [
    'Level 1: Assign each "no group" item (-1) to its own unique group. Now every item has a group. Do two topological sorts: one on groups, one on items within each group.',
    'Level 2: Build a "group dependency graph" where group A → group B if any item in A must come before any item in B. Also build an "item dependency graph" restricted to same-group edges. Topologically sort both.',
    'Level 3: Use Kahn\'s BFS for each sort. If either sort has a cycle (not all nodes consumed), return []. Interleave: sort groups topologically, then for each group output its items in topological order.',
  ],
  functionName: 'sortItems',
  params: ['n', 'm', 'group', 'beforeItems'],
  starterCode: {
    javascript: `function sortItems(n, m, group, beforeItems) {
  // Assign unique groups to ungrouped items
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) group[i] = m++;
  }
  // Build item graph and group graph
  const itemAdj = Array.from({ length: n }, () => []);
  const itemIn = new Array(n).fill(0);
  const grpAdj = Array.from({ length: m }, () => []);
  const grpIn = new Array(m).fill(0);
  const grpAdded = new Set();
  for (let i = 0; i < n; i++) {
    for (const j of beforeItems[i]) {
      itemAdj[j].push(i);
      itemIn[i]++;
      if (group[j] !== group[i]) {
        const key = group[j] * m + group[i];
        if (!grpAdded.has(key)) {
          grpAdded.add(key);
          grpAdj[group[j]].push(group[i]);
          grpIn[group[i]]++;
        }
      }
    }
  }
  function topoSort(n, adj, inDeg) {
    const q = [];
    for (let i = 0; i < n; i++) if (inDeg[i] === 0) q.push(i);
    const res = [];
    while (q.length) {
      const u = q.shift();
      res.push(u);
      for (const v of adj[u]) if (--inDeg[v] === 0) q.push(v);
    }
    return res.length === n ? res : [];
  }
  const grpOrder = topoSort(m, grpAdj, grpIn);
  if (!grpOrder.length) return [];
  const itemOrder = topoSort(n, itemAdj, itemIn);
  if (!itemOrder.length) return [];
  const grpItems = Array.from({ length: m }, () => []);
  for (const item of itemOrder) grpItems[group[item]].push(item);
  return grpOrder.flatMap(g => grpItems[g]);
}`,
    typescript: `function sortItems(n: number, m: number, group: number[], beforeItems: number[][]): number[] {
  for (let i = 0; i < n; i++) {
    if (group[i] === -1) group[i] = m++;
  }
  const itemAdj: number[][] = Array.from({ length: n }, () => []);
  const itemIn = new Array<number>(n).fill(0);
  const grpAdj: number[][] = Array.from({ length: m }, () => []);
  const grpIn = new Array<number>(m).fill(0);
  const grpAdded = new Set<number>();
  for (let i = 0; i < n; i++) {
    for (const j of beforeItems[i]!) {
      itemAdj[j]!.push(i);
      itemIn[i]!++;
      if (group[j] !== group[i]) {
        const key = group[j]! * m + group[i]!;
        if (!grpAdded.has(key)) {
          grpAdded.add(key);
          grpAdj[group[j]!]!.push(group[i]!);
          grpIn[group[i]!]!++;
        }
      }
    }
  }
  function topoSort(sz: number, adj: number[][], inDeg: number[]): number[] {
    const q: number[] = [];
    for (let i = 0; i < sz; i++) if (inDeg[i] === 0) q.push(i);
    const res: number[] = [];
    while (q.length) {
      const u = q.shift()!;
      res.push(u);
      for (const v of adj[u]!) if (--inDeg[v]! === 0) q.push(v);
    }
    return res.length === sz ? res : [];
  }
  const grpOrder = topoSort(m, grpAdj, grpIn);
  if (!grpOrder.length) return [];
  const itemOrder = topoSort(n, itemAdj, itemIn);
  if (!itemOrder.length) return [];
  const grpItems: number[][] = Array.from({ length: m }, () => []);
  for (const item of itemOrder) grpItems[group[item]!]!.push(item);
  return grpOrder.flatMap(g => grpItems[g]!);
}`,
    python: `def sortItems(n, m, group, beforeItems):
    group = list(group.to_py()) if hasattr(group, 'to_py') else list(group)
    before = [list(b.to_py()) if hasattr(b, 'to_py') else list(b) for b in (beforeItems.to_py() if hasattr(beforeItems, 'to_py') else beforeItems)]
    for i in range(n):
        if group[i] == -1:
            group[i] = m
            m += 1
    item_adj = [[] for _ in range(n)]
    item_in = [0] * n
    grp_adj = [[] for _ in range(m)]
    grp_in = [0] * m
    grp_added = set()
    for i in range(n):
        for j in before[i]:
            item_adj[j].append(i)
            item_in[i] += 1
            if group[j] != group[i]:
                key = group[j] * m + group[i]
                if key not in grp_added:
                    grp_added.add(key)
                    grp_adj[group[j]].append(group[i])
                    grp_in[group[i]] += 1
    def topo(sz, adj, in_deg):
        from collections import deque
        q = deque(i for i in range(sz) if in_deg[i] == 0)
        res = []
        while q:
            u = q.popleft()
            res.append(u)
            for v in adj[u]:
                in_deg[v] -= 1
                if in_deg[v] == 0:
                    q.append(v)
        return res if len(res) == sz else []
    grp_order = topo(m, grp_adj, grp_in)
    if not grp_order:
        return []
    item_order = topo(n, item_adj, item_in)
    if not item_order:
        return []
    grp_items = [[] for _ in range(m)]
    for item in item_order:
        grp_items[group[item]].append(item)
    return [x for g in grp_order for x in grp_items[g]]`,
  },
  visibleTests: [
    {
      args: [8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3, 6], [], [], []]],
      expected: [6, 3, 4, 5, 2, 0, 7, 1],
    },
    {
      args: [8, 2, [-1, -1, 1, 0, 0, 1, 0, -1], [[], [6], [5], [6], [3], [], [4], []]],
      expected: [],
    },
    {
      args: [1, 1, [0], [[]]],
      expected: [0],
    },
  ],
  hiddenTests: [
    {
      args: [3, 1, [0, 0, 0], [[], [0], [1]]],
      expected: [0, 1, 2],
    },
    {
      args: [2, 1, [0, 0], [[1], [0]]],
      expected: [],
    },
    {
      args: [4, 2, [0, 0, 1, 1], [[], [], [0], [1]]],
      expected: [0, 1, 2, 3],
    },
  ],
};
