import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimum-knight-moves',
  title: 'Minimum Knight Moves',
  difficulty: 'medium',
  tags: ['graph'],
  description: `In an **infinite** chessboard with coordinates from \`-Infinity\` to \`+Infinity\`, you have a knight at square \`[0, 0]\`.

A knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.

Return the minimum number of steps needed to move the knight to the square \`[x, y]\`. It is guaranteed the answer exists.`,
  constraints: [
    '-300 <= x, y <= 300',
    '0 <= |x| + |y| <= 300',
  ],
  examples: [
    {
      input: 'x = 2, y = 1',
      output: '1',
      explanation: 'The knight can move from [0,0] to [2,1] in 1 move.',
    },
    {
      input: 'x = 5, y = 5',
      output: '4',
      explanation: 'One path: [0,0] → [2,1] → [4,2] → [3,4] → [5,5].',
    },
  ],
  hints: [
    'BFS from (0,0) to (|x|,|y|) — symmetry lets you fold to the first quadrant.',
    'Allow a small buffer beyond the target (e.g., go to -1,-1 region) to handle edge positions like (1,1).',
    'Mark visited cells to avoid revisiting.',
  ],
  functionName: 'minKnightMoves',
  params: ['x', 'y'],
  starterCode: {
    javascript: `function minKnightMoves(x, y) {
  x = Math.abs(x); y = Math.abs(y);
  const seen = new Set(['0,0']); let q = [[0, 0]], d = 0;
  while (q.length) {
    const next = [];
    for (const [cx, cy] of q) {
      if (cx === x && cy === y) return d;
      for (const [dx, dy] of [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]]) {
        const nx = cx+dx, ny = cy+dy, k = nx+','+ny;
        if (!seen.has(k) && nx >= -2 && ny >= -2 && nx <= x+2 && ny <= y+2) { seen.add(k); next.push([nx, ny]); }
      }
    }
    q = next; d++;
  }
  return -1;
}`,
    typescript: `function minKnightMoves(x: number, y: number): number {
  x = Math.abs(x); y = Math.abs(y);
  const seen = new Set(['0,0']); let q: [number,number][] = [[0,0]], d = 0;
  while (q.length) {
    const next: [number,number][] = [];
    for (const [cx, cy] of q) {
      if (cx === x && cy === y) return d;
      for (const [dx, dy] of [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]] as [number,number][]) {
        const nx = cx+dx, ny = cy+dy, k = nx+','+ny;
        if (!seen.has(k) && nx >= -2 && ny >= -2 && nx <= x+2 && ny <= y+2) { seen.add(k); next.push([nx,ny]); }
      }
    }
    q = next; d++;
  }
  return -1;
}`,
    python: `def minKnightMoves(x, y):
    from collections import deque
    x, y = abs(x), abs(y)
    seen = {(0, 0)}; q = deque([(0, 0, 0)])
    while q:
        cx, cy, d = q.popleft()
        if cx == x and cy == y: return d
        for dx, dy in [(1,2),(2,1),(2,-1),(1,-2),(-1,-2),(-2,-1),(-2,1),(-1,2)]:
            nx, ny = cx+dx, cy+dy
            if (nx, ny) not in seen and nx >= -2 and ny >= -2 and nx <= x+2 and ny <= y+2:
                seen.add((nx, ny)); q.append((nx, ny, d+1))
    return -1`,
  },
  visibleTests: [
    { args: [2, 1], expected: 1 },
    { args: [5, 5], expected: 4 },
  ],
  hiddenTests: [
    { args: [0, 0], expected: 0 },
    { args: [3, 3], expected: 2 },
    { args: [1, 0], expected: 3 },
    { args: [1, 1], expected: 2 },
  ],
};
