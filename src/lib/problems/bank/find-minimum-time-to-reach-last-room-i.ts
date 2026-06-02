import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-time-to-reach-last-room-i',
  title: 'Find Minimum Time to Reach Last Room I',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path'],
  description: `There is a dungeon with \`n x m\` rooms arranged as a grid. You are given a 2D array \`moveTime\` of size \`n x m\`, where \`moveTime[i][j]\` represents the **minimum** time in seconds when you can **start** moving into that room. You start from the room \`(0, 0)\` at time \`t = 0\` and can move to an **adjacent** room (up, down, left, right). Each move takes **exactly 1 second**.

Return the **minimum** time to reach the room \`(n - 1, m - 1)\`.

**Note:** You cannot move into a room before \`moveTime[i][j]\` but you can wait at your current position until that time.`,
  constraints: [
    '2 <= n == moveTime.length <= 50',
    '2 <= m == moveTime[i].length <= 50',
    '0 <= moveTime[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'moveTime = [[0,4],[4,4]]',
      output: '6',
      explanation: 'Start at (0,0), t=0. Move to (1,0) requires t>=4, arrive at t=5. Move to (1,1) at t=6. Total = 6.',
    },
    {
      input: 'moveTime = [[0,0,0],[0,0,0]]',
      output: '3',
      explanation: 'All rooms available at t=0. Shortest path (0,0)→(0,1)→(0,2)→(1,2) takes 3 moves = 3 seconds.',
    },
    {
      input: 'moveTime = [[0,1],[1,2]]',
      output: '3',
      explanation: '(0,0)→(1,0) at t=1 (wait 0), arrive t=1→2. (1,0)→(1,1): moveTime=2, arrive at max(2+1,t+1)=max(3,3)=3.',
    },
  ],
  hints: [
    'Use Dijkstra\'s algorithm on the grid. The cost of entering a room is max(current_time, moveTime[i][j]) + 1.',
    'Maintain a min-heap of (time, row, col). Start with (0, 0, 0).',
    'For each neighbor, new_time = max(dist[r][c], moveTime[nr][nc]) + 1. Update if new_time < dist[nr][nc].',
  ],
  functionName: 'minTimeToReach',
  params: ['moveTime'],
  starterCode: {
    javascript: `function minTimeToReach(moveTime) {
  const n = moveTime.length, m = moveTime[0].length;
  const dist = Array.from({length: n}, () => new Array(m).fill(Infinity));
  dist[0][0] = 0;
  const pq = [[0, 0, 0]];
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [t, r, c] = pq.shift();
    if (t > dist[r][c]) continue;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      const nt = Math.max(t, moveTime[nr][nc]) + 1;
      if (nt < dist[nr][nc]) { dist[nr][nc] = nt; pq.push([nt, nr, nc]); }
    }
  }
  return dist[n-1][m-1];
}`,
    typescript: `function minTimeToReach(moveTime: number[][]): number {
  const n = moveTime.length, m = moveTime[0]!.length;
  const dist: number[][] = Array.from({length: n}, () => new Array(m).fill(Infinity));
  dist[0]![0] = 0;
  const pq: [number, number, number][] = [[0, 0, 0]];
  const dirs: [number,number][] = [[0,1],[0,-1],[1,0],[-1,0]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [t, r, c] = pq.shift()!;
    if (t > dist[r]![c]!) continue;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      const nt = Math.max(t, moveTime[nr]![nc]!) + 1;
      if (nt < dist[nr]![nc]!) { dist[nr]![nc] = nt; pq.push([nt, nr, nc]); }
    }
  }
  return dist[n-1]![m-1]!;
}`,
    python: `def minTimeToReach(moveTime):
    import heapq
    n, m = len(moveTime), len(moveTime[0])
    dist = [[float('inf')] * m for _ in range(n)]
    dist[0][0] = 0; pq = [(0, 0, 0)]
    while pq:
        t, r, c = heapq.heappop(pq)
        if t > dist[r][c]: continue
        for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<m:
                nt = max(t, moveTime[nr][nc]) + 1
                if nt < dist[nr][nc]: dist[nr][nc]=nt; heapq.heappush(pq,(nt,nr,nc))
    return dist[n-1][m-1]`,
  },
  visibleTests: [
    { args: [[[0, 4], [4, 4]]], expected: 6 },
    { args: [[[0, 0, 0], [0, 0, 0]]], expected: 3 },
    { args: [[[0, 1], [1, 2]]], expected: 3 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 2 },
    { args: [[[0, 10], [10, 10]]], expected: 12 },
    { args: [[[0, 0, 0, 0]]], expected: 3 },
    { args: [[[0], [0], [0], [0]]], expected: 3 },
    { args: [[[0, 5, 0], [0, 0, 0], [0, 0, 0]]], expected: 4 },
    { args: [[[0, 2], [2, 0]]], expected: 4 },
  ],
};
