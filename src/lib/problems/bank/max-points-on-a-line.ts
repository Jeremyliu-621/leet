import type { Problem } from '../types';

export const problem: Problem = {
  id: 'max-points-on-a-line',
  title: 'Max Points on a Line',
  difficulty: 'hard',
  tags: ['arrays', 'math', 'hash-map'],
  description: `Given an array of \`points\` where \`points[i] = [xi, yi]\` represents a point on the **X-Y plane**, return the **maximum number of points** that lie on the same straight line.`,
  constraints: [
    '1 <= points.length <= 300',
    'points[i].length == 2',
    '-10^4 <= xi, yi <= 10^4',
    'All the points are unique.',
  ],
  examples: [
    {
      input: 'points = [[1,1],[2,2],[3,3]]',
      output: '3',
      explanation: 'All three points lie on the line y = x.',
    },
    {
      input: 'points = [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]',
      output: '4',
      explanation: 'The four points (1,4), (2,3), (3,2), (4,1) all lie on the line y = -x + 5.',
    },
  ],
  hints: [
    'For each point i, compute the slope from i to every other point j. The maximum number of collinear points through i equals the most common slope plus 1 (for i itself).',
    'Represent the slope as a reduced fraction dy/dx. Use `gcd(|dy|, |dx|)` to normalize. Handle vertical lines (dx=0) and duplicate points separately.',
    'Normalize the sign: if dx < 0 negate both dy and dx; if dx == 0 and dy < 0 negate dy. Store slopes as the string `"dy/dx"`. Include duplicates in every line through i.',
  ],
  functionName: 'maxPoints',
  params: ['points'],
  starterCode: {
    javascript: `function maxPoints(points) {
  const n = points.length;
  if (n <= 2) return n;
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  let ans = 2;
  for (let i = 0; i < n; i++) {
    const slopes = new Map(); let dups = 1;
    for (let j = i + 1; j < n; j++) {
      let dy = points[j][1] - points[i][1], dx = points[j][0] - points[i][0];
      if (dy === 0 && dx === 0) { dups++; continue; }
      const g = gcd(Math.abs(dy), Math.abs(dx));
      dy /= g; dx /= g;
      if (dx < 0 || (dx === 0 && dy < 0)) { dy = -dy; dx = -dx; }
      const key = dy + ',' + dx;
      slopes.set(key, (slopes.get(key) || 0) + 1);
    }
    if (slopes.size === 0) ans = Math.max(ans, dups);
    for (const cnt of slopes.values()) ans = Math.max(ans, cnt + dups);
  }
  return ans;
}`,
    typescript: `function maxPoints(points: number[][]): number {
  const n = points.length;
  if (n <= 2) return n;
  const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b);
  let ans = 2;
  for (let i = 0; i < n; i++) {
    const slopes = new Map<string, number>(); let dups = 1;
    for (let j = i + 1; j < n; j++) {
      let dy = points[j][1] - points[i][1], dx = points[j][0] - points[i][0];
      if (dy === 0 && dx === 0) { dups++; continue; }
      const g = gcd(Math.abs(dy), Math.abs(dx));
      dy /= g; dx /= g;
      if (dx < 0 || (dx === 0 && dy < 0)) { dy = -dy; dx = -dx; }
      const key = dy + ',' + dx;
      slopes.set(key, (slopes.get(key) ?? 0) + 1);
    }
    if (slopes.size === 0) ans = Math.max(ans, dups);
    for (const cnt of slopes.values()) ans = Math.max(ans, cnt + dups);
  }
  return ans;
}`,
    python: `def maxPoints(points):
    from math import gcd
    n = len(points)
    if n <= 2: return n
    ans = 2
    for i in range(n):
        slopes = {}; dups = 1
        for j in range(i+1, n):
            dy = points[j][1] - points[i][1]; dx = points[j][0] - points[i][0]
            if dy == 0 and dx == 0: dups += 1; continue
            g = gcd(abs(dy), abs(dx)); dy //= g; dx //= g
            if dx < 0 or (dx == 0 and dy < 0): dy, dx = -dy, -dx
            key = (dy, dx)
            slopes[key] = slopes.get(key, 0) + 1
        if not slopes: ans = max(ans, dups)
        for cnt in slopes.values(): ans = max(ans, cnt + dups)
    return ans`,
  },
  visibleTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 3 },
    { args: [[[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]], expected: 4 },
    { args: [[[1, 0], [2, 0], [3, 0], [4, 0]]], expected: 4 },
  ],
  hiddenTests: [
    { args: [[[0, 0]]], expected: 1 },
    { args: [[[0, 0], [1, 1]]], expected: 2 },
    { args: [[[-1, -1], [0, 0], [1, 1], [2, 3]]], expected: 3 },
    { args: [[[1, 1], [1, 2], [1, 3], [1, 4], [1, 5]]], expected: 5 },
    { args: [[[2, 3], [3, 3], [-5, 3]]], expected: 3 },
    { args: [[[0, 0], [1, 65536], [65536, 0]]], expected: 2 },
  ],
};
