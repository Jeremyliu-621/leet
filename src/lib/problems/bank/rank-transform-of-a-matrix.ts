import type { Problem } from '../types';

export const problem: Problem = {
  id: 'rank-transform-of-a-matrix',
  title: 'Rank Transform of a Matrix',
  difficulty: 'hard',
  tags: ['arrays', 'union-find'],
  description: `Given an \`m x n\` matrix, return a new matrix \`answer\` where \`answer[row][col]\` is the **rank** of \`matrix[row][col]\`.

The **rank** is an integer that represents how large an element is compared to others using these rules:
- The rank is an integer starting from \`1\`.
- If two elements \`p\` and \`q\` are in the **same row or column**, then:
  - If \`p < q\` then \`rank(p) < rank(q)\`.
  - If \`p == q\` then \`rank(p) == rank(q)\`.
- The rank should be as **small** as possible.`,
  constraints: [
    'm == matrix.length',
    'n == matrix[i].length',
    '1 <= m, n <= 500',
    '-10^9 <= matrix[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'matrix = [[1,2],[3,4]]',
      output: '[[1,2],[2,3]]',
      explanation: 'Elements ranked from smallest to largest per row/column constraints.',
    },
    {
      input: 'matrix = [[7,7],[7,7]]',
      output: '[[1,1],[1,1]]',
      explanation: 'All equal elements get the same minimum rank.',
    },
    {
      input: 'matrix = [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]',
      output: '[[4,2,3],[1,3,4],[5,1,6],[1,3,4]]',
      explanation: 'Rows 1 and 3 are identical so their ranks match.',
    },
  ],
  hints: [
    'Level 1: Process cells in sorted order by value. Equal-valued cells that share a row or column must get the same rank.',
    'Level 2: Use Union-Find to group equal-valued cells that are in the same row or column (transitively). For each group, new rank = max(rowRank, colRank) + 1 across all rows and columns in the group.',
    'Level 3: Maintain rowRank[i] and colRank[j] arrays — the highest rank assigned so far in each row/column. After assigning a group, update these arrays.',
  ],
  functionName: 'matrixRankTransform',
  params: ['matrix'],
  starterCode: {
    javascript: `function matrixRankTransform(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const rowRank = new Array(m).fill(0);
  const colRank = new Array(n).fill(0);
  const rank = Array.from({length: m}, () => new Array(n).fill(0));
  const cells = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      cells.push([matrix[i][j], i, j]);
  cells.sort((a, b) => a[0] - b[0]);
  const parent = new Array(m * n);
  function find(x) { return parent[x] === x ? x : (parent[x] = find(parent[x])); }
  function unite(x, y) { parent[find(x)] = find(y); }
  let idx = 0;
  while (idx < cells.length) {
    const val = cells[idx][0];
    let end = idx;
    while (end < cells.length && cells[end][0] === val) end++;
    for (let k = idx; k < end; k++) parent[cells[k][1] * n + cells[k][2]] = cells[k][1] * n + cells[k][2];
    const rowBest = new Map(), colBest = new Map();
    for (let k = idx; k < end; k++) {
      const [, i, j] = cells[k];
      const id = i * n + j;
      if (rowBest.has(i)) unite(id, rowBest.get(i)); else rowBest.set(i, id);
      if (colBest.has(j)) unite(id, colBest.get(j)); else colBest.set(j, id);
    }
    const groupRank = new Map();
    for (let k = idx; k < end; k++) {
      const [, i, j] = cells[k];
      const root = find(i * n + j);
      groupRank.set(root, Math.max(groupRank.get(root) ?? 0, rowRank[i], colRank[j]));
    }
    for (let k = idx; k < end; k++) {
      const [, i, j] = cells[k];
      rank[i][j] = groupRank.get(find(i * n + j)) + 1;
      rowRank[i] = Math.max(rowRank[i], rank[i][j]);
      colRank[j] = Math.max(colRank[j], rank[i][j]);
    }
    idx = end;
  }
  return rank;
}`,
    typescript: `function matrixRankTransform(matrix: number[][]): number[][] {
  const m = matrix.length, n = matrix[0]!.length;
  const rowRank = new Array<number>(m).fill(0);
  const colRank = new Array<number>(n).fill(0);
  const rank: number[][] = Array.from({length: m}, () => new Array<number>(n).fill(0));
  const cells: [number, number, number][] = [];
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++)
      cells.push([matrix[i]![j]!, i, j]);
  cells.sort((a, b) => a[0] - b[0]);
  const parent = new Array<number>(m * n);
  function find(x: number): number { return parent[x] === x ? x : (parent[x] = find(parent[x]!)); }
  function unite(x: number, y: number) { parent[find(x)] = find(y); }
  let idx = 0;
  while (idx < cells.length) {
    const val = cells[idx]![0];
    let end = idx;
    while (end < cells.length && cells[end]![0] === val) end++;
    for (let k = idx; k < end; k++) { const [,i,j] = cells[k]!; parent[i*n+j] = i*n+j; }
    const rowBest = new Map<number,number>(), colBest = new Map<number,number>();
    for (let k = idx; k < end; k++) {
      const [,i,j] = cells[k]!; const id = i*n+j;
      if (rowBest.has(i)) unite(id, rowBest.get(i)!); else rowBest.set(i, id);
      if (colBest.has(j)) unite(id, colBest.get(j)!); else colBest.set(j, id);
    }
    const groupRank = new Map<number,number>();
    for (let k = idx; k < end; k++) {
      const [,i,j] = cells[k]!; const root = find(i*n+j);
      groupRank.set(root, Math.max(groupRank.get(root) ?? 0, rowRank[i]!, colRank[j]!));
    }
    for (let k = idx; k < end; k++) {
      const [,i,j] = cells[k]!;
      rank[i]![j] = groupRank.get(find(i*n+j))! + 1;
      rowRank[i] = Math.max(rowRank[i]!, rank[i]![j]!);
      colRank[j] = Math.max(colRank[j]!, rank[i]![j]!);
    }
    idx = end;
  }
  return rank;
}`,
    python: `def matrixRankTransform(matrix):
    if hasattr(matrix, 'to_py'): matrix = matrix.to_py()
    matrix = [[int(x) for x in (row.to_py() if hasattr(row,'to_py') else row)] for row in matrix]
    m, n = len(matrix), len(matrix[0])
    row_rank = [0] * m; col_rank = [0] * n
    rank = [[0]*n for _ in range(m)]
    cells = sorted((matrix[i][j], i, j) for i in range(m) for j in range(n))
    parent = {}
    def find(x):
        if parent[x] != x: parent[x] = find(parent[x])
        return parent[x]
    def unite(x, y): parent[find(x)] = find(y)
    idx = 0
    while idx < len(cells):
        val = cells[idx][0]; end = idx
        while end < len(cells) and cells[end][0] == val: end += 1
        for _, i, j in cells[idx:end]: parent[(i,j)] = (i,j)
        row_best = {}; col_best = {}
        for _, i, j in cells[idx:end]:
            if i in row_best: unite((i,j), row_best[i])
            else: row_best[i] = (i,j)
            if j in col_best: unite((i,j), col_best[j])
            else: col_best[j] = (i,j)
        group_rank = {}
        for _, i, j in cells[idx:end]:
            root = find((i,j))
            group_rank[root] = max(group_rank.get(root, 0), row_rank[i], col_rank[j])
        for _, i, j in cells[idx:end]:
            root = find((i,j))
            rank[i][j] = group_rank[root] + 1
            row_rank[i] = max(row_rank[i], rank[i][j])
            col_rank[j] = max(col_rank[j], rank[i][j])
        idx = end
    return rank`,
  },
  visibleTests: [
    { args: [[[1, 2], [3, 4]]], expected: [[1, 2], [2, 3]] },
    { args: [[[7, 7], [7, 7]]], expected: [[1, 1], [1, 1]] },
    { args: [[[20, -21, 14], [-19, 4, 19], [22, -47, 24], [-19, 4, 19]]], expected: [[4, 2, 3], [1, 3, 4], [5, 1, 6], [1, 3, 4]] },
  ],
  hiddenTests: [
    { args: [[[1]]], expected: [[1]] },
    { args: [[[1, 2, 3], [4, 5, 6]]], expected: [[1, 2, 3], [2, 3, 4]] },
    { args: [[[-1, -2], [-3, -4]]], expected: [[3, 2], [2, 1]] },
    { args: [[[1, 1], [1, 1]]], expected: [[1, 1], [1, 1]] },
    { args: [[[3, 1], [1, 3]]], expected: [[2, 1], [1, 2]] },
  ],
};
