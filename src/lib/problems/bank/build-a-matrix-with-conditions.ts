import type { Problem } from '../types';

export const problem: Problem = {
  id: 'build-a-matrix-with-conditions',
  title: 'Build a Matrix With Conditions',
  difficulty: 'hard',
  tags: ['graph', 'arrays'],
  description: `You are given a **positive** integer \`k\`. You are also given:

- a 2D integer array \`rowConditions\` where \`rowConditions[i] = [above_i, below_i]\` means \`above_i\` must appear in a **strictly higher row** than \`below_i\`, and
- a 2D integer array \`colConditions\` where \`colConditions[i] = [left_i, right_i]\` means \`left_i\` must appear in a **strictly left column** than \`right_i\`.

Build a \`k × k\` matrix containing each integer from \`1\` to \`k\` **exactly once**; all other cells are \`0\`. Return any valid matrix, or an **empty array** if no valid arrangement exists.`,
  constraints: [
    '`2 <= k <= 400`',
    '`1 <= rowConditions.length, colConditions.length <= 10^4`',
    '`rowConditions[i].length == colConditions[i].length == 2`',
    '`1 <= above_i, below_i, left_i, right_i <= k`',
    '`above_i != below_i`',
    '`left_i != right_i`',
  ],
  examples: [
    {
      input: 'k = 3, rowConditions = [[1,2],[3,2]], colConditions = [[2,1],[3,2]]',
      output: '[[0,0,1],[3,0,0],[0,2,0]]',
      explanation: '1 is in row 0, 3 in row 1, 2 in row 2 → 1 above 2 ✓, 3 above 2 ✓. 3 in col 0, 2 in col 1, 1 in col 2 → 2 left of 1 ✓, 3 left of 2 ✓.',
    },
    {
      input: 'k = 3, rowConditions = [[1,2],[2,3],[3,1]], colConditions = [[1,2]]',
      output: '[]',
      explanation: 'Row conditions form a cycle (1→2→3→1), so no valid arrangement exists.',
    },
  ],
  hints: [
    'Run topological sort on rowConditions: build a directed graph where edge above→below means "above must come before below in row order".',
    'If topological sort finds a cycle in either graph, return [].',
    'Do the same for colConditions to get a column ordering.',
    '```js\nfunction buildMatrix(k, rowConditions, colConditions) {\n  function topo(edges) {\n    const adj = Array.from({length: k+1}, () => []);\n    const deg = new Array(k+1).fill(0);\n    for (const [a,b] of edges) { adj[a].push(b); deg[b]++; }\n    const q = [];\n    for (let i = 1; i <= k; i++) if (!deg[i]) q.push(i);\n    const order = [], qi = 0;\n    while (qi < q.length) { const u = q[qi++]; order.push(u); for (const v of adj[u]) if (!--deg[v]) q.push(v); }\n    return order.length === k ? order : null;\n  }\n  const ro = topo(rowConditions), co = topo(colConditions);\n  if (!ro || !co) return [];\n  const rp = new Array(k+1), cp = new Array(k+1);\n  for (let i = 0; i < k; i++) { rp[ro[i]] = i; cp[co[i]] = i; }\n  const mat = Array.from({length: k}, () => new Array(k).fill(0));\n  for (let n = 1; n <= k; n++) mat[rp[n]][cp[n]] = n;\n  return mat;\n}\n```',
  ],
  functionName: 'buildMatrix',
  params: ['k', 'rowConditions', 'colConditions'],
  starterCode: {
    javascript: `function buildMatrix(k, rowConditions, colConditions) {

}`,
    typescript: `function buildMatrix(k: number, rowConditions: number[][], colConditions: number[][]): number[][] {

}`,
    python: `def buildMatrix(k: int, rowConditions: list[list[int]], colConditions: list[list[int]]) -> list[list[int]]:
    pass`,
  },
  visibleTests: [
    {
      args: [3, [[1, 2], [3, 2]], [[2, 1], [3, 2]]],
      expected: [[0, 0, 1], [3, 0, 0], [0, 2, 0]],
    },
    {
      args: [3, [[1, 2], [2, 3], [3, 1]], [[1, 2]]],
      expected: [],
    },
    {
      args: [2, [[1, 2]], [[2, 1]]],
      expected: [[0, 1], [2, 0]],
    },
  ],
  hiddenTests: [
    {
      args: [2, [[1, 2]], [[1, 2]]],
      expected: [[1, 0], [0, 2]],
    },
    {
      args: [3, [[1, 2], [2, 3]], [[3, 2], [2, 1]]],
      expected: [[0, 0, 1], [0, 2, 0], [3, 0, 0]],
    },
    {
      args: [2, [[1, 2], [2, 1]], [[1, 2]]],
      expected: [],
    },
    {
      args: [3, [], []],
      expected: [[1, 0, 0], [0, 2, 0], [0, 0, 3]],
    },
    {
      args: [4, [[1, 2], [2, 3], [3, 4]], [[4, 3], [3, 2], [2, 1]]],
      expected: [[0, 0, 0, 1], [0, 0, 2, 0], [0, 3, 0, 0], [4, 0, 0, 0]],
    },
    {
      args: [3, [[1, 2], [1, 3]], [[2, 3]]],
      expected: [[1, 0, 0], [0, 2, 0], [0, 0, 3]],
    },
  ],
};
