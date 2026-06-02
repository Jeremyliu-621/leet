import type { Problem } from '../types';

export const problem: Problem = {
  id: 'grid-illumination',
  title: 'Grid Illumination',
  difficulty: 'hard',
  tags: ['hash-map', 'arrays'],
  description: `There is a 2D grid of size \`n x n\` where each cell is either a lamp (\`1\`) or empty (\`0\`).

A lamp at position \`[row, col]\` illuminates every cell in the same row, column, and both diagonals. Multiple lamps can illuminate the same cell.

You are given an integer \`n\`, an array \`lamps\` where \`lamps[i] = [rowi, coli]\` is the position of a lamp, and an array \`queries\` where \`queries[j] = [rowj, colj]\` is a query cell.

For each query, determine if the query cell is illuminated (by any lamp). After each query, **turn off** the queried lamp (if any) and all 8 adjacent lamps.

Return an array \`ans\` of length \`queries.length\` where \`ans[j]\` is \`1\` if the query cell \`queries[j]\` is illuminated, or \`0\` if it is not.`,
  constraints: [
    '`1 <= n <= 10^9`',
    '`0 <= lamps.length <= 20000`',
    '`lamps[i].length == 2`',
    '`0 <= lamps[i][0], lamps[i][1] < n`',
    '`0 <= queries.length <= 20000`',
    '`queries[i].length == 2`',
    '`0 <= queries[i][0], queries[i][1] < n`',
  ],
  examples: [
    {
      input: 'n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]',
      output: '[1,0]',
      explanation: 'Query (1,1): lamp (0,0) is on the same diagonal → illuminated (1). Turn off (0,0) and all 8 adjacent (including (1,1)). Query (1,0): no lamps remain on row 1, col 0, or its diagonals → not illuminated (0).',
    },
    {
      input: 'n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]',
      output: '[1,1]',
      explanation: 'First query (1,1): lamp (0,0) illuminates → 1. Turn off adj. Second query (1,1): lamp (4,4) is on the same diagonal and not yet turned off → 1.',
    },
  ],
  hints: [
    'Use hash maps to track the count of active lamps per row, column, diagonal (r-c), and anti-diagonal (r+c). A cell is illuminated if any of its four counts is > 0.',
    'Use a hash set to track which specific lamp positions are currently on (to handle duplicates in input and removals).',
    'After each query, check the 9 cells (the query cell and its 8 neighbors) and remove any lamps found there, decrementing the four hash maps accordingly.',
  ],
  functionName: 'gridIllumination',
  params: ['n', 'lamps', 'queries'],
  starterCode: {
    javascript: `function gridIllumination(n, lamps, queries) {
  const rows = new Map(), cols = new Map(), diag = new Map(), anti = new Map();
  const lampSet = new Set();
  const inc = (m, k) => m.set(k, (m.get(k) ?? 0) + 1);
  const dec = (m, k) => { const v = m.get(k) - 1; if (v === 0) m.delete(k); else m.set(k, v); };
  for (const [r, c] of lamps) {
    const key = r * 100001 + c;
    if (lampSet.has(key)) continue;
    lampSet.add(key); inc(rows, r); inc(cols, c); inc(diag, r - c); inc(anti, r + c);
  }
  const dirs = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];
  const res = [];
  for (const [r, c] of queries) {
    res.push((rows.get(r) ?? 0) > 0 || (cols.get(c) ?? 0) > 0 || (diag.get(r-c) ?? 0) > 0 || (anti.get(r+c) ?? 0) > 0 ? 1 : 0);
    for (const [di, dj] of dirs) {
      const nr = r + di, nc = c + dj;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
      const key = nr * 100001 + nc;
      if (lampSet.has(key)) { lampSet.delete(key); dec(rows, nr); dec(cols, nc); dec(diag, nr-nc); dec(anti, nr+nc); }
    }
  }
  return res;
}`,
    typescript: `function gridIllumination(n: number, lamps: number[][], queries: number[][]): number[] {
  const rows = new Map<number,number>(), cols = new Map<number,number>();
  const diag = new Map<number,number>(), anti = new Map<number,number>();
  const lampSet = new Set<number>();
  const inc = (m: Map<number,number>, k: number) => m.set(k, (m.get(k) ?? 0) + 1);
  const dec = (m: Map<number,number>, k: number) => { const v = m.get(k)! - 1; if (v === 0) m.delete(k); else m.set(k, v); };
  for (const [r, c] of lamps) {
    const key = r * 100001 + c;
    if (lampSet.has(key)) continue;
    lampSet.add(key); inc(rows, r); inc(cols, c); inc(diag, r - c); inc(anti, r + c);
  }
  const dirs: [number,number][] = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];
  const res: number[] = [];
  for (const [r, c] of queries) {
    res.push((rows.get(r) ?? 0) > 0 || (cols.get(c) ?? 0) > 0 || (diag.get(r-c) ?? 0) > 0 || (anti.get(r+c) ?? 0) > 0 ? 1 : 0);
    for (const [di, dj] of dirs) {
      const nr = r + di, nc = c + dj;
      if (nr < 0 || nr >= n || nc < 0 || nc >= n) continue;
      const key = nr * 100001 + nc;
      if (lampSet.has(key)) { lampSet.delete(key); dec(rows, nr); dec(cols, nc); dec(diag, nr-nc); dec(anti, nr+nc); }
    }
  }
  return res;
}`,
    python: `def gridIllumination(n, lamps, queries):
    from collections import defaultdict
    rows, cols, diag, anti = (defaultdict(int) for _ in range(4))
    lamp_set = set()
    for r, c in lamps:
        if (r, c) in lamp_set: continue
        lamp_set.add((r, c)); rows[r] += 1; cols[c] += 1; diag[r-c] += 1; anti[r+c] += 1
    def turn_off(r, c):
        if (r, c) not in lamp_set: return
        lamp_set.discard((r, c)); rows[r] -= 1; cols[c] -= 1; diag[r-c] -= 1; anti[r+c] -= 1
    res = []
    for r, c in queries:
        res.append(1 if rows[r] or cols[c] or diag[r-c] or anti[r+c] else 0)
        for dr in (-1, 0, 1):
            for dc in (-1, 0, 1):
                nr, nc = r+dr, c+dc
                if 0 <= nr < n and 0 <= nc < n: turn_off(nr, nc)
    return res`,
  },
  visibleTests: [
    { args: [5, [[0,0],[4,4]], [[1,1],[1,0]]], expected: [1,0] },
    { args: [5, [[0,0],[4,4]], [[1,1],[1,1]]], expected: [1,1] },
  ],
  hiddenTests: [
    { args: [1, [[0,0]], [[0,0]]], expected: [1] },
    { args: [5, [[0,0],[2,2],[4,4]], [[1,1],[2,2],[3,3]]], expected: [1,1,1] },
    { args: [5, [[0,0],[0,4]], [[0,4],[0,1],[1,4]]], expected: [1,1,0] },
    { args: [3, [], [[0,0],[1,1]]], expected: [0,0] },
    { args: [5, [[2,2]], [[2,2],[2,3]]], expected: [1,0] },
  ],
};
