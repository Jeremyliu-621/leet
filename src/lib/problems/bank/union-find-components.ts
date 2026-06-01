import type { Problem } from '../types';

export const problem: Problem = {
  id: 'union-find-components',
  title: 'Dynamic Connected Components',
  difficulty: 'medium',
  tags: ['union-find', 'graph'],
  description: `You are given \`n\` nodes (labeled 0 to n−1) and a list of **operations**. Each operation is one of:

- \`["union", u, v]\` — merge the components containing \`u\` and \`v\`.
- \`["count"]\` — return the current number of **connected components**.
- \`["connected", u, v]\` — return \`true\` if \`u\` and \`v\` are in the same component, else \`false\`.

Implement this using a **Union-Find** (Disjoint Set Union) data structure with **path compression** and **union by rank** for near-O(1) amortised operations.

Return an array of results, one per \`"count"\` or \`"connected"\` operation.`,
  constraints: [
    '1 <= n <= 10^5',
    '1 <= operations.length <= 10^5',
    '0 <= u, v < n for union and connected operations',
  ],
  examples: [
    {
      input: 'n = 5, operations = [["count"],["union",0,1],["union",1,2],["count"],["connected",0,2],["connected",0,3]]',
      output: '[5, 3, true, false]',
      explanation: 'Start: 5 components {0},{1},{2},{3},{4}. After union(0,1) and union(1,2): {0,1,2},{3},{4} → 3 components. 0 and 2 are connected; 0 and 3 are not.',
    },
    {
      input: 'n = 3, operations = [["union",0,2],["connected",0,1],["connected",0,2]]',
      output: '[false, true]',
      explanation: 'After union(0,2): {0,2},{1}. 0 and 1 not connected; 0 and 2 are.',
    },
  ],
  hints: [
    'Initialize `parent[i] = i` and `rank[i] = 0` for all i. Start with `components = n`. `find(x)` follows parent pointers with path compression (`parent[x] = find(parent[x])`). `union(u, v)` uses rank to attach shorter tree under taller.',
    'When `find(u) !== find(v)`, merge: attach lower rank under higher rank (or either if equal; increment rank on tie). Decrement `components` on each successful merge.',
    `\`\`\`js\nfunction dynamicComponents(n, operations) {\n  const parent = Array.from({length: n}, (_, i) => i);\n  const rank = new Array(n).fill(0);\n  let comps = n;\n  const find = x => parent[x] === x ? x : (parent[x] = find(parent[x]));\n  const union = (u, v) => {\n    const pu = find(u), pv = find(v);\n    if (pu === pv) return;\n    if (rank[pu] < rank[pv]) parent[pu] = pv;\n    else if (rank[pu] > rank[pv]) parent[pv] = pu;\n    else { parent[pv] = pu; rank[pu]++; }\n    comps--;\n  };\n  const res = [];\n  for (const [op, a, b] of operations) {\n    if (op === 'union') union(a, b);\n    else if (op === 'count') res.push(comps);\n    else res.push(find(a) === find(b));\n  }\n  return res;\n}\n\`\`\``,
  ],
  functionName: 'dynamicComponents',
  params: ['n', 'operations'],
  starterCode: {
    javascript: `function dynamicComponents(n, operations) {\n\n}`,
    typescript: `function dynamicComponents(n: number, operations: [string, number?, number?][]): (number | boolean)[] {\n\n}`,
    python: `def dynamicComponents(n: int, operations: list[list]) -> list:\n    pass`,
  },
  visibleTests: [
    {
      args: [5, [['count'], ['union', 0, 1], ['union', 1, 2], ['count'], ['connected', 0, 2], ['connected', 0, 3]]],
      expected: [5, 3, true, false],
    },
    {
      args: [3, [['union', 0, 2], ['connected', 0, 1], ['connected', 0, 2]]],
      expected: [false, true],
    },
    {
      args: [1, [['count'], ['connected', 0, 0]]],
      expected: [1, true],
    },
  ],
  hiddenTests: [
    {
      args: [4, [['count'], ['union', 0, 1], ['union', 2, 3], ['count'], ['union', 1, 2], ['count']]],
      expected: [4, 2, 1],
    },
    {
      args: [5, [['union', 0, 1], ['union', 0, 1], ['count']]],
      expected: [4],
    },
    {
      args: [3, [['connected', 0, 1], ['connected', 1, 2], ['union', 0, 2], ['connected', 0, 2]]],
      expected: [false, false, true],
    },
    {
      args: [6, [['union', 0, 1], ['union', 2, 3], ['union', 4, 5], ['count'], ['union', 1, 3], ['count'], ['connected', 0, 3]]],
      expected: [3, 2, true],
    },
    {
      args: [2, [['connected', 0, 1], ['union', 0, 1], ['connected', 0, 1], ['count']]],
      expected: [false, true, 1],
    },
  ],
};
