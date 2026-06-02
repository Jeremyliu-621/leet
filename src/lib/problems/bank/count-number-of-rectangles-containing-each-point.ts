import type { Problem } from '../types';

export const problem: Problem = {
  id: 'count-number-of-rectangles-containing-each-point',
  title: 'Count Number of Rectangles Containing Each Point',
  difficulty: 'medium',
  tags: ['arrays', 'binary-search'],
  description: `You are given a 2D integer array \`rectangles\` where \`rectangles[i] = [li, hi]\` indicates that the \`i\`th rectangle has a length of \`li\` and a height of \`hi\`. You are also given a 2D integer array \`points\` where \`points[j] = [xj, yj]\`.

Each rectangle \`i\` covers the region \`(0, 0)\` to \`(li, hi)\` on the 2D plane (i.e., a point \`(xj, yj)\` is inside if \`xj <= li\` and \`yj <= hi\`).

Return an integer array \`count\` of length \`points.length\` where \`count[j]\` is the number of rectangles that contain the \`j\`th point.

Points that lie on the **edges** of a rectangle are counted.`,
  constraints: [
    '1 <= rectangles.length, points.length <= 5 * 10^4',
    'rectangles[i].length == points[j].length == 2',
    '1 <= li, xj <= 10^9',
    '1 <= hi, yj <= 100',
  ],
  examples: [
    {
      input: 'rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]',
      output: '[2,1]',
      explanation: 'Point [2,1]: covered by [2,3] and [2,5] (both have l>=2 and h>=1). Point [1,4]: only [2,5] has h>=4.',
    },
    {
      input: 'rectangles = [[1,1],[2,2],[3,3]], points = [[1,1],[2,2],[3,3]]',
      output: '[3,2,1]',
    },
  ],
  hints: [
    'Height values are bounded to [1, 100], so you can bucket rectangles by height.',
    'For each height h, store a sorted array of l-values. For a query point (x, y), count l-values >= x in all height buckets h >= y.',
    'Binary search in each sorted bucket: count = bucket.length - bisect_left(bucket, x).',
  ],
  functionName: 'countRectangles',
  params: ['rectangles', 'points'],
  starterCode: {
    javascript: `function countRectangles(rectangles, points) {
  const buckets = Array.from({length: 101}, () => []);
  for (const [l, h] of rectangles) buckets[h].push(l);
  for (const b of buckets) b.sort((a, c) => a - c);
  return points.map(([x, y]) => {
    let count = 0;
    for (let h = y; h <= 100; h++) {
      const b = buckets[h];
      let lo = 0, hi = b.length;
      while (lo < hi) { const m = (lo + hi) >> 1; if (b[m] < x) lo = m + 1; else hi = m; }
      count += b.length - lo;
    }
    return count;
  });
}`,
    typescript: `function countRectangles(rectangles: number[][], points: number[][]): number[] {
  const buckets: number[][] = Array.from({length: 101}, () => []);
  for (const [l, h] of rectangles) buckets[h!]!.push(l!);
  for (const b of buckets) b.sort((a, c) => a - c);
  return points.map(([x, y]) => {
    let count = 0;
    for (let h = y!; h <= 100; h++) {
      const b = buckets[h]!;
      let lo = 0, hi = b.length;
      while (lo < hi) { const m = (lo + hi) >> 1; if (b[m]! < x!) lo = m + 1; else hi = m; }
      count += b.length - lo;
    }
    return count;
  });
}`,
    python: `def countRectangles(rectangles, points):
    from bisect import bisect_left
    buckets = [[] for _ in range(101)]
    for l, h in rectangles:
        buckets[h].append(l)
    for b in buckets:
        b.sort()
    result = []
    for x, y in points:
        count = 0
        for h in range(y, 101):
            count += len(buckets[h]) - bisect_left(buckets[h], x)
        result.append(count)
    return result`,
  },
  visibleTests: [
    { args: [[[1, 2], [2, 3], [2, 5]], [[2, 1], [1, 4]]], expected: [2, 1] },
    { args: [[[1, 1], [2, 2], [3, 3]], [[1, 1], [2, 2], [3, 3]]], expected: [3, 2, 1] },
  ],
  hiddenTests: [
    { args: [[[1, 2]], [[1, 1], [2, 1], [1, 3]]], expected: [1, 0, 0] },
    { args: [[[5, 3], [3, 5], [5, 5]], [[3, 3], [5, 3], [4, 4]]], expected: [3, 2, 1] },
    { args: [[[1, 2], [3, 1]], [[2, 1], [1, 2]]], expected: [1, 1] },
  ],
};
