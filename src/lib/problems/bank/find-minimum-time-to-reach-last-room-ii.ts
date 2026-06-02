import type { Problem } from '../types';

export const problem: Problem = {
  id: 'find-minimum-time-to-reach-last-room-ii',
  title: 'Find Minimum Time to Reach Last Room II',
  difficulty: 'medium',
  tags: ['graph', 'shortest-path', 'arrays'],
  description: `There is a dungeon with \`n x m\` rooms arranged as a grid. You are given a 2D array \`moveTime\` of size \`n x m\` where \`moveTime[i][j]\` represents the **minimum** time in seconds when you can **start** moving to that room.

You start from the room \`(0, 0)\` at time \`0\` and want to reach the room \`(n - 1, m - 1)\`.

From any room, you can move to an **adjacent** room (up, down, left, right). Each move alternates between taking **1 second** and **2 seconds**. Your first move takes **1 second**, your second move takes **2 seconds**, your third move takes **1 second**, and so on.

Return the **minimum** time to reach the room \`(n - 1, m - 1)\`.

**Note:** You cannot move back and forth between rooms to pass the time — if you cannot start moving to a room yet, you wait in the current room.`,
  constraints: [
    '2 <= n, m <= 750',
    '0 <= moveTime[i][j] <= 10^9',
  ],
  examples: [
    {
      input: 'moveTime = [[0,4],[4,4]]',
      output: '7',
      explanation: 'Move from (0,0) to (0,1): wait until t=4, move costs 1 → arrive at t=5. Move from (0,1) to (1,1): t=5>=moveTime[1][1]=4, move costs 2 → arrive at t=7.',
    },
    {
      input: 'moveTime = [[0,0,0,0],[0,0,0,0]]',
      output: '6',
      explanation: 'Optimal: go right 3 times (1+2+1=4) then down once (costs 2 since 4th move) → 6. Or find another route.',
    },
    {
      input: 'moveTime = [[0,1],[1,2]]',
      output: '4',
      explanation: 'Move (0,0)→(0,1) at t=1 (cost 1), arrive t=2. Move (0,1)→(1,1) at t=2>=2 (cost 2), arrive t=4.',
    },
  ],
  hints: [
    'Use Dijkstra\'s algorithm. The state must include not just (row, col) but also the parity of the move count (whether the next move costs 1 or 2 seconds).',
    'State = (time, row, col, parity). From state (t, r, c, p): for each neighbor (nr, nc), cost = p==0 ? 1 : 2; newTime = max(t, moveTime[nr][nc]) + cost; next parity = 1-p.',
    'Use a min-heap sorted by time. dist[r][c][p] tracks the minimum time to reach (r,c) with parity p. Initialize dist[0][0][0]=0 (start at (0,0) at time 0, next move costs 1).',
  ],
  functionName: 'minTimeToReach',
  params: ['moveTime'],
  starterCode: {
    javascript: `function minTimeToReach(moveTime) {
  const n = moveTime.length, m = moveTime[0].length;
  const dist = Array.from({length: n}, () => Array.from({length: m}, () => [Infinity, Infinity]));
  dist[0][0][0] = 0;
  const pq = [[0, 0, 0, 0]]; // [time, r, c, parity]
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [t, r, c, p] = pq.shift();
    if (t > dist[r][c][p]) continue;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      const cost = p === 0 ? 1 : 2;
      const nt = Math.max(t, moveTime[nr][nc]) + cost;
      const np = 1 - p;
      if (nt < dist[nr][nc][np]) { dist[nr][nc][np] = nt; pq.push([nt, nr, nc, np]); }
    }
  }
  return Math.min(dist[n-1][m-1][0], dist[n-1][m-1][1]);
}`,
    typescript: `function minTimeToReach(moveTime: number[][]): number {
  const n = moveTime.length, m = moveTime[0]!.length;
  const dist: number[][][] = Array.from({length: n}, () => Array.from({length: m}, () => [Infinity, Infinity]));
  dist[0]![0]![0] = 0;
  const pq: [number, number, number, number][] = [[0, 0, 0, 0]];
  const dirs: [number,number][] = [[0,1],[0,-1],[1,0],[-1,0]];
  while (pq.length) {
    pq.sort((a, b) => a[0] - b[0]);
    const [t, r, c, p] = pq.shift()!;
    if (t > dist[r]![c]![p]!) continue;
    for (const [dr, dc] of dirs) {
      const nr = r + dr, nc = c + dc;
      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;
      const cost = p === 0 ? 1 : 2;
      const nt = Math.max(t, moveTime[nr]![nc]!) + cost;
      const np = 1 - p;
      if (nt < dist[nr]![nc]![np]!) { dist[nr]![nc]![np] = nt; pq.push([nt, nr, nc, np]); }
    }
  }
  return Math.min(dist[n-1]![m-1]![0]!, dist[n-1]![m-1]![1]!);
}`,
    python: `def minTimeToReach(moveTime):
    import heapq
    n, m = len(moveTime), len(moveTime[0])
    dist = [[[float('inf'), float('inf')] for _ in range(m)] for _ in range(n)]
    dist[0][0][0] = 0; pq = [(0, 0, 0, 0)]
    while pq:
        t, r, c, p = heapq.heappop(pq)
        if t > dist[r][c][p]: continue
        for dr, dc in [(0,1),(0,-1),(1,0),(-1,0)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<m:
                cost = 1 if p == 0 else 2
                nt = max(t, moveTime[nr][nc]) + cost; np = 1 - p
                if nt < dist[nr][nc][np]: dist[nr][nc][np]=nt; heapq.heappush(pq,(nt,nr,nc,np))
    return min(dist[n-1][m-1][0], dist[n-1][m-1][1])`,
  },
  visibleTests: [
    { args: [[[0, 4], [4, 4]]], expected: 7 },
    { args: [[[0, 0, 0, 0], [0, 0, 0, 0]]], expected: 6 },
    { args: [[[0, 1], [1, 2]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[0, 0], [0, 0]]], expected: 3 },
    { args: [[[0, 10], [0, 0]]], expected: 3 },
    { args: [[[0, 0, 0], [0, 0, 0], [0, 0, 0]]], expected: 6 },
    { args: [[[0, 5, 0], [0, 0, 0]]], expected: 4 },
    { args: [[[0, 100, 0], [0, 0, 0], [0, 0, 0]]], expected: 6 },
    { args: [[[0, 3, 3], [3, 3, 3], [3, 3, 3]]], expected: 9 },
  ],
};
