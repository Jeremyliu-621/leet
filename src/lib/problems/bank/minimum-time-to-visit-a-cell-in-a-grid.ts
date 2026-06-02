import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-time-to-visit-a-cell-in-a-grid',
  title: 'Minimum Time to Visit a Cell In a Grid',
  difficulty: 'hard',
  tags: ['arrays', 'binary-search'],
  description: `You are given an \`m x n\` matrix \`grid\` consisting of **non-negative** integers where \`grid[row][col]\` represents the **minimum** time required to be able to visit the cell \`(row, col)\`, which means you can visit the cell \`(row, col)\` only when the time you visit it is **greater than or equal to** \`grid[row][col]\`.

You are standing in the **top-left** cell of the matrix in the 0th second. You must move to an **adjacent** cell (4-directional) every second, but you may not leave the matrix.

Return the **minimum** time required in which you can visit the bottom-right cell of the matrix. If you cannot visit the bottom-right cell, then return \`-1\`.

**Example 1:**
\`\`\`
Input: grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]
Output: 7
\`\`\`

**Example 2:**
\`\`\`
Input: grid = [[0,2,4],[3,2,1],[1,0,4]]
Output: -1
\`\`\`

**Constraints:**
- \`m == grid.length\`
- \`n == grid[i].length\`
- \`2 <= m, n <= 1000\`
- \`0 <= grid[i][j] <= 10^9\`
- \`grid[0][0] == 0\``,
  constraints: [
    '2 <= m, n <= 1000',
    '0 <= grid[i][j] <= 10^9',
    'grid[0][0] == 0',
  ],
  examples: [
    { input: 'grid = [[0,1,3,2],[5,1,2,5],[4,3,8,6]]', output: '7' },
    { input: 'grid = [[0,2,4],[3,2,1],[1,0,4]]', output: '-1' },
  ],
  hints: [
    'If grid[0][1] > 1 and grid[1][0] > 1, we cannot escape the top-left corner: return -1.',
    'Use a min-heap (Dijkstra). dist[r][c] = minimum time to reach (r,c).',
    'When moving to neighbor (nr,nc): arrivalTime = dist[r][c] + 1. If arrivalTime < grid[nr][nc], we may need to "wait" by bouncing back and forth. The extra wait is (grid[nr][nc] - arrivalTime), but we can only wait in increments of 2 — so actual arrival = grid[nr][nc] + ((grid[nr][nc] - arrivalTime) % 2).',
  ],
  functionName: 'minimumTime',
  params: ['grid'],
  starterCode: {
    javascript: `function minimumTime(grid) {
  const m = grid.length, n = grid[0].length;
  if (grid[0][1] > 1 && grid[1][0] > 1) return -1;
  const dist = Array.from({length: m}, () => new Array(n).fill(Infinity));
  dist[0][0] = 0;
  const heap = [[0, 0, 0]];
  function push(x) {
    heap.push(x); let i = heap.length - 1;
    while (i > 0) { const p = (i-1)>>1; if (heap[p][0] <= heap[i][0]) break; [heap[p],heap[i]]=[heap[i],heap[p]]; i=p; }
  }
  function pop() {
    const top = heap[0]; const last = heap.pop();
    if (heap.length) { heap[0] = last; let i=0; while(true){ let m2=i,l=2*i+1,r=2*i+2; if(l<heap.length&&heap[l][0]<heap[m2][0])m2=l; if(r<heap.length&&heap[r][0]<heap[m2][0])m2=r; if(m2===i)break; [heap[i],heap[m2]]=[heap[m2],heap[i]]; i=m2; } }
    return top;
  }
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  while (heap.length) {
    const [t, r, c] = pop();
    if (t > dist[r][c]) continue;
    if (r === m-1 && c === n-1) return t;
    for (const [dr, dc] of dirs) {
      const nr = r+dr, nc = c+dc;
      if (nr<0||nr>=m||nc<0||nc>=n) continue;
      let nt = t + 1;
      if (nt < grid[nr][nc]) { const extra = grid[nr][nc]-nt; nt = grid[nr][nc] + (extra%2); }
      if (nt < dist[nr][nc]) { dist[nr][nc] = nt; push([nt, nr, nc]); }
    }
  }
  return -1;
}`,
    typescript: `function minimumTime(grid: number[][]): number {
  const m = grid.length, n = grid[0]!.length;
  if (grid[0]![1]! > 1 && grid[1]![0]! > 1) return -1;
  const dist = Array.from({length: m}, () => new Array<number>(n).fill(Infinity));
  dist[0]![0] = 0;
  const heap: [number, number, number][] = [[0, 0, 0]];
  function push(x: [number,number,number]) {
    heap.push(x); let i = heap.length-1;
    while (i>0) { const p=(i-1)>>1; if (heap[p]![0]<=heap[i]![0]) break; [heap[p],heap[i]]=[heap[i]!,heap[p]!]; i=p; }
  }
  function pop(): [number,number,number] {
    const top=heap[0]!; const last=heap.pop()!;
    if (heap.length) { heap[0]=last; let i=0; while(true){ let m2=i,l=2*i+1,r=2*i+2; if(l<heap.length&&heap[l]![0]<heap[m2]![0])m2=l; if(r<heap.length&&heap[r]![0]<heap[m2]![0])m2=r; if(m2===i)break; [heap[i],heap[m2]]=[heap[m2]!,heap[i]!]; i=m2; } }
    return top;
  }
  const dirs: [number,number][] = [[0,1],[0,-1],[1,0],[-1,0]];
  while (heap.length) {
    const [t,r,c]=pop();
    if (t>dist[r]![c]!) continue;
    if (r===m-1&&c===n-1) return t;
    for (const [dr,dc] of dirs) {
      const nr=r+dr, nc=c+dc;
      if (nr<0||nr>=m||nc<0||nc>=n) continue;
      let nt=t+1;
      if (nt<grid[nr]![nc]!) { const extra=grid[nr]![nc]!-nt; nt=grid[nr]![nc]!+(extra%2); }
      if (nt<dist[nr]![nc]!) { dist[nr]![nc]=nt; push([nt,nr,nc]); }
    }
  }
  return -1;
}`,
    python: `def minimumTime(grid):
    if hasattr(grid, 'to_py'): grid = grid.to_py()
    grid = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in grid]
    m, n = len(grid), len(grid[0])
    if grid[0][1] > 1 and grid[1][0] > 1: return -1
    import heapq
    dist = [[float('inf')]*n for _ in range(m)]; dist[0][0] = 0
    heap = [(0,0,0)]
    while heap:
        t, r, c = heapq.heappop(heap)
        if t > dist[r][c]: continue
        if r == m-1 and c == n-1: return t
        for dr, dc in ((0,1),(0,-1),(1,0),(-1,0)):
            nr, nc = r+dr, c+dc
            if 0<=nr<m and 0<=nc<n:
                nt = t+1
                if nt < grid[nr][nc]:
                    extra = grid[nr][nc]-nt; nt = grid[nr][nc]+(extra%2)
                if nt < dist[nr][nc]:
                    dist[nr][nc] = nt; heapq.heappush(heap, (nt,nr,nc))
    return -1`,
  },
  visibleTests: [
    { args: [[[0, 1, 3, 2], [5, 1, 2, 5], [4, 3, 8, 6]]], expected: 7 },
    { args: [[[0, 2, 4], [3, 2, 1], [1, 0, 4]]], expected: -1 },
    { args: [[[0, 1], [1, 0]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 1], [1, 2]]], expected: 2 },
    { args: [[[0, 1, 0], [0, 1, 0]]], expected: 3 },
    { args: [[[0, 10], [10, 10]]], expected: -1 },
  ],
};
