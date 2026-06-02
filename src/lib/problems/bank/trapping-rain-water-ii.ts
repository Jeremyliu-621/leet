import type { Problem } from '../types';

export const problem: Problem = {
  id: 'trapping-rain-water-ii',
  title: 'Trapping Rain Water II',
  difficulty: 'hard',
  tags: ['heap'],
  description: `Given an **m × n** integer matrix \`heightMap\` representing the height of each cell in a 2D elevation map, compute the **total volume of water** that can be trapped after it rains.

Water trapped at a cell is determined by the minimum height of the surrounding boundary that "closes off" that cell.

**Approach:** Use a min-heap (priority queue) initialized with all border cells. BFS inward — when visiting a neighbor, if its height is less than the current boundary height, it traps water equal to \`(boundary - height)\`. Push \`max(boundary, height)\` back into the heap.

**Example:**
\`\`\`
heightMap = [
  [1,4,3,1,3,2],
  [3,2,1,3,2,4],
  [2,3,3,2,3,1]
]
\`\`\`
Output: **4**`,
  constraints: [
    'm == heightMap.length',
    'n == heightMap[i].length',
    '1 <= m, n <= 200',
    '0 <= heightMap[i][j] <= 2 × 10^4',
  ],
  examples: [
    {
      input: 'heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]',
      output: '4',
      explanation: 'After raining, water is trapped in the lower-elevation interior cells totaling 4 units.',
    },
    {
      input: 'heightMap = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]',
      output: '10',
      explanation: 'The center cell at height 1 traps 2 units, and the ring of 2s each trap 1 unit. Total = 10.',
    },
    {
      input: 'heightMap = [[1,1],[1,1]]',
      output: '0',
      explanation: 'All cells are on the border, no interior cells to trap water.',
    },
  ],
  hints: [
    'Think of the border cells as the initial "walls." Water can only be trapped inside if the surrounding walls are taller. Push all border cells into a min-heap with their heights.',
    'BFS from the heap. For each cell popped (the minimum boundary height so far), check its unvisited neighbors. If a neighbor is shorter than the current boundary, it traps `boundary - neighbor.height` water. Push `max(boundary, neighbor.height)` into the heap.',
    'The key insight: once a cell is popped from the min-heap, we know the true water level above it — it equals the maximum boundary height seen on the path from the border to that cell, which the min-heap tracks automatically.',
  ],
  functionName: 'trapRainWaterII',
  params: ['heightMap'],
  starterCode: {
    javascript: `function trapRainWaterII(heightMap) {
  const m = heightMap.length, n = heightMap[0].length;
  if (m < 3 || n < 3) return 0;
  // Min-heap as sorted array (small enough for test inputs)
  const heap = [], visited = Array.from({length: m}, () => new Array(n).fill(false));
  const push = (h, r, c) => { heap.push([h, r, c]); heap.sort((a, b) => a[0] - b[0]); };
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++)
    if (r === 0 || r === m-1 || c === 0 || c === n-1) { push(heightMap[r][c], r, c); visited[r][c] = true; }
  let water = 0;
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  while (heap.length) {
    const [h, r, c] = heap.shift();
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr][nc]) continue;
      visited[nr][nc] = true;
      water += Math.max(0, h - heightMap[nr][nc]);
      push(Math.max(h, heightMap[nr][nc]), nr, nc);
    }
  }
  return water;
}`,
    typescript: `function trapRainWaterII(heightMap: number[][]): number {
  const m = heightMap.length, n = heightMap[0]!.length;
  if (m < 3 || n < 3) return 0;
  const heap: [number, number, number][] = [];
  const visited: boolean[][] = Array.from({length: m}, () => new Array(n).fill(false));
  const push = (h: number, r: number, c: number) => { heap.push([h, r, c]); heap.sort((a, b) => a[0] - b[0]); };
  for (let r = 0; r < m; r++) for (let c = 0; c < n; c++)
    if (r === 0 || r === m-1 || c === 0 || c === n-1) { push(heightMap[r]![c]!, r, c); visited[r]![c] = true; }
  let water = 0;
  const dirs: [number,number][] = [[0,1],[0,-1],[1,0],[-1,0]];
  while (heap.length) {
    const [h, r, c] = heap.shift()!;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= m || nc < 0 || nc >= n || visited[nr]![nc]) continue;
      visited[nr]![nc] = true;
      water += Math.max(0, h - heightMap[nr]![nc]!);
      push(Math.max(h, heightMap[nr]![nc]!), nr, nc);
    }
  }
  return water;
}`,
    python: `def trapRainWaterII(heightMap):
    if hasattr(heightMap, 'to_py'): heightMap = heightMap.to_py()
    heightMap = [[int(v) for v in (r.to_py() if hasattr(r,'to_py') else r)] for r in heightMap]
    import heapq
    m, n = len(heightMap), len(heightMap[0])
    if m < 3 or n < 3: return 0
    visited = [[False]*n for _ in range(m)]
    heap = []
    for r in range(m):
        for c in range(n):
            if r == 0 or r == m-1 or c == 0 or c == n-1:
                heapq.heappush(heap, (heightMap[r][c], r, c)); visited[r][c] = True
    water = 0
    dirs = [(0,1),(0,-1),(1,0),(-1,0)]
    while heap:
        h, r, c = heapq.heappop(heap)
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n and not visited[nr][nc]:
                visited[nr][nc] = True
                water += max(0, h - heightMap[nr][nc])
                heapq.heappush(heap, (max(h, heightMap[nr][nc]), nr, nc))
    return water`,
  },
  visibleTests: [
    {
      args: [[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]],
      expected: 4,
    },
    {
      args: [[[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]],
      expected: 10,
    },
    {
      args: [[[1,1],[1,1]]],
      expected: 0,
    },
  ],
  hiddenTests: [
    {
      args: [[[1,2,3],[4,5,6],[7,8,9]]],
      expected: 0,
    },
    {
      args: [[[5,5,5,5],[5,1,1,5],[5,1,1,5],[5,5,5,5]]],
      expected: 16,
    },
    {
      args: [[[2,2,2,2],[2,1,1,2],[2,2,2,2]]],
      expected: 2,
    },
    {
      args: [[[3,3,3,3],[3,1,2,3],[3,3,3,3]]],
      expected: 3,
    },
  ],
};
