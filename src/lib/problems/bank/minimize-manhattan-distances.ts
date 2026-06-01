import type { Problem } from '../types';

export const problem: Problem = {
  id: 'minimize-manhattan-distances',
  title: 'Minimize Manhattan Distances',
  difficulty: 'hard',
  tags: ['arrays', 'math'],
  description: `You are given an array \`points\` representing integer coordinates of some points on a 2D plane, where \`points[i] = [x_i, y_i]\`.

The distance between two points is defined as their **Manhattan distance**.

Return the **minimum** possible value of the **maximum** Manhattan distance between any two points after removing **exactly one** point.`,
  constraints: [
    '3 <= points.length <= 10^5',
    '-10^8 <= points[i][0], points[i][1] <= 10^8',
  ],
  examples: [
    {
      input: 'points = [[3,10],[5,15],[10,2]]',
      output: '7',
      explanation: 'Remove [10,2]: max dist between [3,10] and [5,15] is |3-5|+|10-15|=7.',
    },
    {
      input: 'points = [[4,4],[2,4],[1,3]]',
      output: '2',
      explanation: 'Remove [4,4]: |2-1|+|4-3|=2. Or remove [1,3]: |4-2|+|4-4|=2.',
    },
  ],
  hints: [
    'The maximum Manhattan distance = max(range of (x+y), range of (x-y)), where range = max - min.',
    'This identity holds because |x1-x2|+|y1-y2| = max(|(x1+y1)-(x2+y2)|, |(x1-y1)-(x2-y2)|).',
    'When you remove one point, only at most 4 candidates matter: the points achieving the global max/min of x+y and x-y. Try removing each and take the minimum result.',
  ],
  functionName: 'minimumDistance',
  params: ['points'],
  starterCode: {
    javascript: `function minimumDistance(points) {
  const computeMax = (exclude) => {
    let maxSum = -Infinity, minSum = Infinity, maxDiff = -Infinity, minDiff = Infinity;
    for (let i = 0; i < points.length; i++) {
      if (i === exclude) continue;
      const [x, y] = points[i];
      maxSum = Math.max(maxSum, x + y);
      minSum = Math.min(minSum, x + y);
      maxDiff = Math.max(maxDiff, x - y);
      minDiff = Math.min(minDiff, x - y);
    }
    return Math.max(maxSum - minSum, maxDiff - minDiff);
  };
  let maxSumIdx = 0, minSumIdx = 0, maxDiffIdx = 0, minDiffIdx = 0;
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    if (x + y > points[maxSumIdx][0] + points[maxSumIdx][1]) maxSumIdx = i;
    if (x + y < points[minSumIdx][0] + points[minSumIdx][1]) minSumIdx = i;
    if (x - y > points[maxDiffIdx][0] - points[maxDiffIdx][1]) maxDiffIdx = i;
    if (x - y < points[minDiffIdx][0] - points[minDiffIdx][1]) minDiffIdx = i;
  }
  const candidates = new Set([maxSumIdx, minSumIdx, maxDiffIdx, minDiffIdx]);
  let result = Infinity;
  for (const c of candidates) result = Math.min(result, computeMax(c));
  return result;
}`,
    typescript: `function minimumDistance(points: number[][]): number {
  const computeMax = (exclude: number): number => {
    let maxSum = -Infinity, minSum = Infinity, maxDiff = -Infinity, minDiff = Infinity;
    for (let i = 0; i < points.length; i++) {
      if (i === exclude) continue;
      const [x, y] = points[i]!;
      maxSum = Math.max(maxSum, x! + y!);
      minSum = Math.min(minSum, x! + y!);
      maxDiff = Math.max(maxDiff, x! - y!);
      minDiff = Math.min(minDiff, x! - y!);
    }
    return Math.max(maxSum - minSum, maxDiff - minDiff);
  };
  let maxSumIdx = 0, minSumIdx = 0, maxDiffIdx = 0, minDiffIdx = 0;
  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i]!;
    if (x! + y! > points[maxSumIdx]![0]! + points[maxSumIdx]![1]!) maxSumIdx = i;
    if (x! + y! < points[minSumIdx]![0]! + points[minSumIdx]![1]!) minSumIdx = i;
    if (x! - y! > points[maxDiffIdx]![0]! - points[maxDiffIdx]![1]!) maxDiffIdx = i;
    if (x! - y! < points[minDiffIdx]![0]! - points[minDiffIdx]![1]!) minDiffIdx = i;
  }
  const candidates = new Set([maxSumIdx, minSumIdx, maxDiffIdx, minDiffIdx]);
  let result = Infinity;
  for (const c of candidates) result = Math.min(result, computeMax(c));
  return result;
}`,
    python: `def minimumDistance(points):
    def compute_max(exclude):
        max_sum = min_sum = max_diff = min_diff = None
        for i, (x, y) in enumerate(points):
            if i == exclude:
                continue
            s, d = x + y, x - y
            max_sum = s if max_sum is None else max(max_sum, s)
            min_sum = s if min_sum is None else min(min_sum, s)
            max_diff = d if max_diff is None else max(max_diff, d)
            min_diff = d if min_diff is None else min(min_diff, d)
        return max(max_sum - min_sum, max_diff - min_diff)

    max_sum_idx = min_sum_idx = max_diff_idx = min_diff_idx = 0
    for i, (x, y) in enumerate(points):
        if x + y > points[max_sum_idx][0] + points[max_sum_idx][1]: max_sum_idx = i
        if x + y < points[min_sum_idx][0] + points[min_sum_idx][1]: min_sum_idx = i
        if x - y > points[max_diff_idx][0] - points[max_diff_idx][1]: max_diff_idx = i
        if x - y < points[min_diff_idx][0] - points[min_diff_idx][1]: min_diff_idx = i

    candidates = {max_sum_idx, min_sum_idx, max_diff_idx, min_diff_idx}
    return min(compute_max(c) for c in candidates)`,
  },
  visibleTests: [
    { args: [[[3, 10], [5, 15], [10, 2]]], expected: 7 },
    { args: [[[4, 4], [2, 4], [1, 3]]], expected: 2 },
  ],
  hiddenTests: [
    { args: [[[1, 1], [2, 2], [3, 3]]], expected: 2 },
    { args: [[[1, 2], [2, 3], [3, 4], [4, 5]]], expected: 4 },
    { args: [[[0, 0], [10, 10], [5, 5]]], expected: 10 },
    { args: [[[1, 1], [1, 1], [1, 1]]], expected: 0 },
  ],
};
