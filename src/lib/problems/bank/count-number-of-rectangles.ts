import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-rectangles',
  title: 'Count Number of Rectangles Containing Each Point',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [li, hi]\` indicates that the \`i\`th rectangle has a length of \`li\` and a height of \`hi\`. You are also given a 2D integer array \`points\` where \`points[j] = [xj, yj]\` is a point.

The \`i\`th rectangle has its **bottom-left corner** at \`(0, 0)\` and its **top-right corner** at \`(li, hi)\`.

Return an integer array \`count\` of length \`points.length\` where \`count[j]\` is the number of rectangles that contain the \`j\`th point.

A point is inside a rectangle if \`0 <= xj <= li\` and \`0 <= yj <= hi\`. Points on the edges are also inside.`,
  constraints: [
    '`1 <= rectangles.length, points.length <= 5 * 10^4`',
    '`rectangles[i].length == points[j].length == 2`',
    '`1 <= li, xj <= 10^9`',
    '`1 <= hi, yj <= 100`',
  ],
  examples: [
    {
      input: 'rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]',
      output: '[2,1]',
      explanation: 'Point (2,1): rectangles 0 (1≥2? No), 1 (2≥2,3≥1 Yes), 2 (2≥2,5≥1 Yes). Count=2. Point (1,4): rectangle 2 (2≥1,5≥4 Yes). Count=1.',
    },
    {
      input: 'rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]',
      output: '[1,3]',
      explanation: 'Point (1,3): only rect [3,3] contains it. Point (1,1): all 3 rectangles contain it.',
    },
  ],
  hints: [
    'Since heights are at most 100, group rectangles by height. For each point (x, y), count rectangles with h >= y and l >= x.',
    'For each height h, keep sorted list of lengths. Use binary search to find how many lengths >= x.',
    `\`\`\`js
// For each pair of points at same y (or use height threshold + binary search)
// Sort l by height desc; for each query h find all l with height>=h, binary search width>=w
const sorted = [...l].sort((a,b) => b[1]-a[1] || b[0]-a[0]);
const res = [];
const ws = [];
let qi = 0;
for (const [h,w] of sorted) ws.push(w);
// binary search sorted ws for count >= minW
return res;\`\`\``,
  ],
  functionName: 'countRectangles',
  params: ['rectangles', 'points'],
  starterCode: {
    javascript: `function countRectangles(rectangles, points) {
  // Group widths by height (heights are 1..100)
  const byH = Array.from({length: 101}, () => []);
  for (const [l, h] of rectangles) byH[h].push(l);
  // Precompute merged sorted widths for height >= h (from 100 down to 1)
  const merged = new Array(102).fill(null).map(() => []);
  for (let h = 100; h >= 1; h--) {
    const a = merged[h + 1], b = byH[h].sort((x, y) => x - y);
    const r = []; let ai = 0, bi = 0;
    while (ai < a.length && bi < b.length) a[ai] <= b[bi] ? r.push(a[ai++]) : r.push(b[bi++]);
    while (ai < a.length) r.push(a[ai++]);
    while (bi < b.length) r.push(b[bi++]);
    merged[h] = r;
  }
  return points.map(([x, y]) => {
    const arr = merged[y]; let lo = 0, hi = arr.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; arr[mid] >= x ? hi = mid : lo = mid + 1; }
    return arr.length - lo;
  });
}`,
    typescript: `function countRectangles(rectangles: number[][], points: number[][]): number[] {
  const byH: number[][] = Array.from({length: 101}, () => []);
  for (const [l, h] of rectangles) byH[h]!.push(l!);
  const merged: number[][] = new Array(102).fill(null).map(() => []);
  for (let h = 100; h >= 1; h--) {
    const a = merged[h + 1]!, b = byH[h]!.sort((x, y) => x - y);
    const r: number[] = []; let ai = 0, bi = 0;
    while (ai < a.length && bi < b.length) a[ai]! <= b[bi]! ? r.push(a[ai++]!) : r.push(b[bi++]!);
    while (ai < a.length) r.push(a[ai++]!);
    while (bi < b.length) r.push(b[bi++]!);
    merged[h] = r;
  }
  return points.map(([x, y]) => {
    const arr = merged[y!]!; let lo = 0, hi = arr.length;
    while (lo < hi) { const mid = (lo + hi) >> 1; arr[mid]! >= x! ? hi = mid : lo = mid + 1; }
    return arr.length - lo;
  });
}`,
    python: `def countRectangles(rectangles, points):
    from bisect import bisect_left
    by_h = [[] for _ in range(101)]
    for l, h in rectangles:
        by_h[h].append(l)
    merged = [[] for _ in range(102)]
    for h in range(100, 0, -1):
        import heapq
        merged[h] = sorted(merged[h + 1] + by_h[h])
    result = []
    for x, y in points:
        arr = merged[y]
        lo = bisect_left(arr, x)
        result.append(len(arr) - lo)
    return result`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [2, 5]], [[2, 1], [1, 4]]], expected: [2, 1] },
    { args: [[[1, 1], [2, 2], [3, 3]], [[1, 3], [1, 1]]], expected: [1, 3] },
  ],
  hiddenTests: [
    { args: [[[1, 1]], [[1, 1]]], expected: [1] },
    { args: [[[1, 1]], [[2, 1]]], expected: [0] },
    { args: [[[3, 3], [3, 3]], [[1, 1]]], expected: [2] },
  ],
};
